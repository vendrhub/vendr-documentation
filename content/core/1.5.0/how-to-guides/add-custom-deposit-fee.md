---
title: Add custom deposit fee
description: How-To Guide to add custom deposit fee in Vendr, the eCommerce solution for Umbraco v8+
---

In this guide we will be looking at price adjustments in Vendr to be able to add custom fee when to total price reach a specific price.

## DepositPriceAdjustment

We define a custom `PriceAdjustment` making it possible to enhance with custom properties we need and when accessing adjustments we can cast to this specific type.

````csharp
public class DepositPriceAdjustment : PriceAdjustment<DepositPriceAdjustment>
{
    public string DepositPriceAdjustmentRef { get; set; }

    // A parameterless constructor is required for cloning
    public DepositPriceAdjustment()
        : base()
    { }

    // Additional helper constructors
    public DepositPriceAdjustment(string name, string reference)
        : base(name)
    {
        DepositPriceAdjustmentRef = reference;
    }

    public DepositPriceAdjustment(string name, string reference, Price price)
        : base(name, price)
    {
        DepositPriceAdjustmentRef = reference;
    }
}

````

## DepositPriceAdjuster

Furthermore we need a `PriceAdjuster` to implement thie calculation of the price, which in this case will be adding a fee (but in other cases it may add a discount instead).

````csharp
public class DepositPriceAdjuster : PriceAdjusterBase
{
    public override void ApplyPriceAdjustments(PriceAdjusterArgs args)
    {
        if (args.Calculation.TotalPrice.Value.WithTax >= 2000)
        {
            var fee = 500M;
            var feeTax = fee * args.Calculation.TaxRate.Value;

            Price price = Price.OfSameCurrency(args.Calculation.SubtotalPrice.WithoutAdjustments,
                args.Calculation.SubtotalPrice.WithoutAdjustments.WithoutTax + fee,
                args.Calculation.SubtotalPrice.WithoutAdjustments.Tax + feeTax);

            //Price price = args.Calculation.SubtotalPrice.WithoutAdjustments = Price.OfSameCurrency(args.Calculation.SubtotalPrice.WithoutAdjustments,
            //    args.Calculation.SubtotalPrice.WithoutAdjustments.WithoutTax + fee,
            //    args.Calculation.SubtotalPrice.WithoutAdjustments.Tax + feeTax);

            args.Calculation.SubtotalPrice.WithoutAdjustments = Price.OfSameCurrency(args.Calculation.SubtotalPrice.WithoutAdjustments,
                args.Calculation.SubtotalPrice.WithoutAdjustments.WithoutTax + fee,
                args.Calculation.SubtotalPrice.WithoutAdjustments.Tax + feeTax);

            var deposit = new DepositPriceAdjustment("Deposit", "deposit", price);
            //deposit.CreateLimitedAdjustment(price);

            args.SubtotalPriceAdjustments.Add(deposit);
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