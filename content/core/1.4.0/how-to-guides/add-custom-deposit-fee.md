---
title: Add Custom Deposit Fee
description: How-To Guide to add custom deposit fee in Vendr, the eCommerce solution for Umbraco v8+
---

In this guide we will be looking at price adjustments in Vendr to be able to add custom fee when to total price reach a specific price.

## DepositPriceAdjustment

We define a custom `PriceAdjustment` making it possible to enhance with custom properties we need and when accessing adjustments we can cast to this specific type.

````csharp
[Serializable]
public class DepositPriceAdjustment : PriceAdjustment<DepositPriceAdjustment>
{
    public string DepositAdjustmentRef { get; set; }

    // A parameterless constructor is required for cloning
    public DepositPriceAdjustment()
        : base()
    { }

    // Additional helper constructors
    public DepositPriceAdjustment(string name, string reference, Price adjustment)
        : base(name, adjustment)
    {
        DepositAdjustmentRef = reference;
    }
}

````

## DepositPriceAdjuster

Furthermore we need a `PriceAdjuster` to implement thie calculation of the price, which in this case will be adding a fee. In other cases you may want add a discount instead by adding a negative price value.

````csharp
public class DepositPriceAdjuster : PriceAdjusterBase
{
    public override void ApplyPriceAdjustments(PriceAdjusterArgs args)
    {
        // Add fee if total price is more than £1000
        if (args.Calculation.TotalPrice.Value.WithTax >= 1000)
        {
            var taxRate = args.Calculation.TaxRate.Value;
            
            var fee = 100M;
            var tax = fee * taxRate / (1 + taxRate);
            var priceWithoutTax = fee / (1 + taxRate);

            // Create a £100 fee
            var price = new Price(priceWithoutTax, feeTax, args.Order.CurrencyId);
            var adjustment = new DepositPriceAdjustment("Deposit", "deposit", price);

            args.SubtotalPriceAdjustments.Add(adjustment);
        }
    }
}

````

## Register price adjuster

Finally we need to register the Vendr price adjuster in a `IComposer`.

````csharp
[ComposeAfter(typeof(VendrWebComposer))]
public class StoreComposer : IUserComposer
{
    public void Compose(Composition composition)
    {
        // Register price adjuster
        composition.WithPriceAdjusters()
            .Append<DepositPriceAdjuster>();
    }
}
````