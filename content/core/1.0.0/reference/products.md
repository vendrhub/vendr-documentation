---
title: Products
description: Product related APIs in Vendr, the eCommerce solution for Umbraco v8+
---

## Product Service

### IProductService

**Description:** Interface of the Vendr Product Service  
**Namespace:** Vendr.Core.Services  
**Assembly:** Vendr.Core

#### GetProduct

Gets a Product

***Signature:***

````csharp
IProductSnapshot GetProduct(string productReference, string languageIsoCode);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `productReference` | The unique Reference of the Product to fetch |
| `string` | `languageIsoCode` | The ISO Code of the Language to translate the Product to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `IProductSnapshot` | A [Snapshot of the Product](#iproductsnapshot) that matches the provided criteria |

#### GetProductStock

Get the Stock of a Product

***Signature:***

````csharp
decimal? GetProductStock(string productReference);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `productReference` | The unique Reference of the Product who's Stock level to fetch |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `decimal?` | The Stock level of the given Product matching the provided criteria |

#### SetProductStock

Set the Stock of a Product

***Signature:***

````csharp
void SetProductStock(string productReference, decimal value);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `productReference` | The unique Reference of the Product who's Stock level to set |
| `decimal` | `value` | The Stock level to set the Product to |

#### ReduceProductStock

Reduce the Stock of a Product

***Signature:***

````csharp
void ReduceProductStock(string productReference, decimal reduceBy);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `productReference` | The unique Reference of the Product who's Stock level to reduce |
| `decimal` | `reduceBy` | The amount to reduce the Stock level of the Product by |

#### IncreaseProductStock

Increase the Stock of a Product

***Signature:***

````csharp
void IncreaseProductStock(string productReference, decimal increaseBy);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `productReference` | The unique Reference of the Product who's Stock level to increase |
| `decimal` | `increaseBy` | The amount to increase the Stock level of the Product by |

### ProductService

**Description:** Default implementation of the [Vendr Product Service Interface](#iproductservice)  
**Namespace:** Vendr.Core.Services  
**Assembly:** Vendr.Core

## Product Adapter

### IProductAdapter

**Description:** Interface of the Vendr Product Adapter  
**Namespace:** Vendr.Core.Adapters  
**Assembly:** Vendr.Core

#### GetProductSnapshot

Gets a Product Snapshot

***Signature:***

````csharp
IProductSnapshot GetProductSnapshot(string productReference, string languageIsoCode);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `productReference` | The unique Reference of the Product to fetch |
| `string` | `languageIsoCode` | The ISO Code of the Language to translate the Product to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `IProductSnapshot` | A [Snapshot of the Product](#iproductsnapshot) that matches the provided criteria |

#### GetProductReference

Gets a Product Reference

***Signature:***

````csharp
string GetProductReference(Guid storeId, string sku);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store to fetch the Product Reference from |
| `string` | `sku` | The SKU of the Product to fetch the Product Reference of |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `string` | The Product Reference of the Product that matches the provided criteria |

### UmbracoProductAdapter

**Description:** Default implementation of the [Vendr Product Adapter Interface](#iproductadapter)  
**Namespace:** Vendr.Web.Adapters  
**Assembly:** Vendr.Web

<div class="mb-48"></div>

## Product Entities

### IProductSnapshot

**Description:** Interface of the Vendr Product Snapshot entity 
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `StoreId` | The ID of the Store the Product belongs to |
| `string` | `ProductReference` | The unique Reference of the Product |
| `string` | `Sku` | The unique SKU of the Product |
| `string` | `Name` | The Name of the Product |
| `Guid?` | `TaxClassId` | The ID of the Tax Class of the Product |
| `IEnumerable <ProductPrice>` | `Prices` | A collection of [Product Prices](#productprice) for the Product |
| `IDictionary<string, string>` | `Properties` | A collection of Properties for the Product |

<div class="mb-48"></div>

## Product Owned Entities

### ProductPrice

**Description:** Product Price owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `CurrencyId` | The ID of the Currency of the Price |
| `decimal` | `Value` | The Value of the Price |

<div class="mb-48"></div>