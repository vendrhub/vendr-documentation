---
title: Calculators
description: Performing calculations with Calculators in Vendr, the eCommerce solution for Umbraco v8+
---

Within Vendr, Calculators are small service implementations with the sole responsibility of calculating prices for a given aspect of an Order. There are five main Calculator services interfaces in Vendr.

* **IShippingCalculator** - Responsible for calculating the Shipping Method price / tax rate of a given Shipping Method.
* **IPaymentCalculator** - Responsible for calculating the Payment Method price / tax rate of a given Payment Method.
* **IProductCalculator** - Responsible for calculating the Product unit price / tax rate of a given Product.
* **IOrderLineCalculator** - Responsible for calculating the price / tax rate of a given OrderLine.
* **IOrderCalculator** - Responsible for calculating the entire Order.

All Calculator services can be replaced with alternative implementations should you wish to change how Vendr performs it's calculations.

## Defining a custom Calculator implementation

Whilst the individual Calculator interfaces may differ, the process for defining a custom Calculator implementation is largely the same for all of them, creating a new class that implements the default system Calculator you wish to replace and then overriding the relevant calculation methods.

````csharp
public class MyProductCalculator : ProductCalculator
{
    public MyProductCalculator(ITaxService taxService, IStoreService storeService)
        : base(taxService, storeService)
    { }

    public override TaxRate CalculateProductTaxRate(IProductSnapshot productSnapshot, TaxSource taxSource, TaxRate fallbackTaxRate)
    {
        // Do custom tax rate calculation here
    }

    public override Price CalculateProductPrice(IProductSnapshot productSnapshot, Guid currencyId, TaxRate taxRate)
    {
        // Do custom price calculation here
    }
}

````

## Registering a custom Calculator implementation

Calculators are [registered via a Composer](../dependency-injection/#registering-dependencies) using the `RegisterUnique<TServiceInterface, TReplacementService>()` method where the `TServiceInterface` parameter is the Calculator interface Type we wish to replace and `TReplacementService` is the Type of our custom Calculator implementation.

````csharp
public void Compose(Composition composition)
{
    // Replacing the product calculator implementation
    composition.RegisterUniqueFor<IProductCalculator, MyProductCalculator>();
}
````
