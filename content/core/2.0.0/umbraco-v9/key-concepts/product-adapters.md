---
title: Product Adapters
description: Converting product sources into understandable products for Vendr, the eCommerce solution for Umbraco
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

    public IProductSnapshot GetProductSnapshot(string productReference, string productVariantReference, string languageIsoCode)
    {
        // Lookup a product by productVariantReference and convert to IProductSnapshot
    }

    public bool TryGetProductReference(Guid storeId, string sku, out string productReference, out string productVariantReference)
    {
        // Try lookup a product / variant reference by store + sku
    }
}

````

All Product Adapters implement the `IProductAdapter` interface which requires three method implementations. Two `GetProductSnapshot` methods which retrieves a Product Snapshot for either a product or product variant by reference parameters and a `TryGetProductReference` method which retrieves a product / variant reference for a product that belongs to a given `storeId` and has the given `sku`.

A Product Snapshot consists of the following properties in order to present a Product to Vendr in a standard way. 


````csharp
public interface IProductSnapshot
{
    string ProductReference { get; }
    string ProductVariantReference { get; }
    string Sku { get; }
    string Name { get; }
    Guid StoreId { get; }
    Guid? TaxClassId { get; }
    IDictionary<string, string> Properties { get; }
    IEnumerable<AttributeCombination> Attributes { get; }
    IEnumerable<ProductPrice> Prices { get; }
    bool IsGiftCard { get; }
}

````

## Registering a Product Adapter

Product Adapters are [registered via the IUmbracoBuilder](../dependency-injection/#registering-dependencies) using the `AddUnique<IProductAdapter, TReplacementAdapter>()` method on the `Services` property where the `TReplacementAdapter` parameter is the Type of our custom Product Adapter implementation.

````csharp
public static class UmbracoBuilderExtensions
{
    public static IUmbracoBuilder AddMyServices(IUmbracoBuilder builder)
    {
        // Replacing the default Product Adapter implementation
        builder.Services.AddUnique<IProductAdapter, MyCustomProductAdapter>();

        // Return the builder to continue the chain
        return builder;
    }
}
````