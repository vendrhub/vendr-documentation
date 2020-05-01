---
title: Product Adapters
description: Converting product sources into understandable products for Vendr, the eCommerce solution for Umbraco v8+
---

The role of a Product Adapter in Vendr is to provide an interface between a product information source (which by default will be an Umbraco node) and convert it into a standardized format such that Vendr doesn't need to be tied to that source.

What his means for developers is that Product Adapters allow you to hook in alternative product information sources that may not be Umbraco node based. For example, you may hold your product information in a third party database table, and so a custom Product Adapter would provide a means for Vendr to interface with that custom data in the same way as it would the default Umbraco node data source.

## Example Product Adapter

An example of a Product Adapter would look something like this:

````csharp
public class MyCustomProductAdapter : IProductAdapter
{
    public IProductSnapshot GetProductSnapshot(string productReference, string languageIsoCode)
    {
        // Lookup a product by productReference and convert to IProductSnapshot
    }

    public string GetProductReference(Guid storeId, string sku)
    {
        // Lookup a product reference by store + sku
    }
}

````

All Product Adapters implement the `IProductAdapter` which requires two method implementations. `GetProductSnapshot` which retrieves a Product Snapshot of the product reference by the `productReference` parameter and `GetProductReference` which retrieves a product reference for a product that belongs to a given `storeId` and has the given `sku`.

A Product Snapshot consists of the following properties in order to present a Product to Vendr in a standard way. 


````csharp
public interface IProductSnapshot
{
    string ProductReference { get; }
    string Sku { get; }
    string Name { get; }
    Guid StoreId { get; }
    Guid? TaxClassId { get; }
    IEnumerable<ProductPrice> Prices { get; }
    IDictionary<string, string> Properties { get; }
}

````

## Registering a Product Adapter

Product Adapters are [registered via a Composer](../dependency-injection/#registering-dependencies) using the `RegisterUnique<IProductAdapter, TReplacementAdapter>()` method where the `TReplacementAdapter` parameter is the Type of our custom Product Adapter implementation.

````csharp
public void Compose(Composition composition)
{
    // Replacing the default Product Adapter implementation
    composition.RegisterUnique<IProductAdapter, MyCustomProductAdapter>();
}
````