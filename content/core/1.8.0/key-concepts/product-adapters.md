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
    // The unique reference for the product
    string ProductReference { get; }

    // The unique reference for the variant (if this is a variant snapshot)
    string ProductVariantReference { get; }

    // The unique SKU for this product / variant
    string Sku { get; }

    // The name of this product / variant
    string Name { get; }

    // The ID of the store this product / variant belongs to
    Guid StoreId { get; }

    // An optional Tax Class ID for this product / variant
    Guid? TaxClassId { get; }

    // Any properties exposed by this product / variant that should be copied to the orderline
    IDictionary<string, string> Properties { get; }

    // Any variant attributes for this product (if this is a variant snapshot)
    IEnumerable<AttributeCombination> Attributes { get; }

    // The available prices for this product / variant
    IEnumerable<ProductPrice> Prices { get; }

    // Flag indicating whether this product is a gift card product
    bool IsGiftCard { get; }
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