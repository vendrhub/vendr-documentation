---
title: Shipping Methods
description: Shipping Method related APIs in Vendr, the eCommerce solution for Umbraco v8+
---

## Shipping Method Service

### IShippingMethodService

#### GetShippingMethods

Gets a collection of all Shipping Method entities in a Store

***Signature:***

````csharp
IEnumerable<ShippingMethodReadOnly> GetShippingMethods(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Shipping Methods belong to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `IEnumerable<ShippingMethodReadOnly>` | A list of read only Shipping Method entities |

#### GetShippingMethodsAllowedIn

Gets a collection of all Shipping Method allowed in a Country

***Signature:***

````csharp
IEnumerable<ShippingMethodReadOnly> GetShippingMethodsAllowedIn(Guid countryId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country the Shipping Methods are allowed in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `IEnumerable<ShippingMethodReadOnly>` | A list of read only Shipping Method entities |

#### GetShippingMethod

Gets a specific Shipping Method entity

***Signature:***

````csharp
ShippingMethodReadOnly GetShippingMethod(Guid id);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `id` | The ID of the Shipping Method to fetch  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethodReadOnly` | A read only Shipping Method entity matching the provided criteria  |

---

***Signature:***

````csharp
ShippingMethodReadOnly GetShippingMethod(Guid storeId, string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Shipping Method belong to |
| `string` | `alias` | The Alias of the Shipping Method to fetch  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethodReadOnly` | A read only Shipping Method entity matching the provided criteria  |

#### SaveShippingMethod

Persists the given Shipping Method to the database

***Signature:***

````csharp
void SaveShippingMethod(ShippingMethod currency);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `ShippingMethod` | `currency` | The Shipping Method to save  |

#### DeleteShippingMethod

Deletes the given ShippingMethod

***Signature:***

````csharp
void DeleteShippingMethod(Guid ShippingMethodId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `ShippingMethodId` | The ID of the Shipping Method to delete |

---

***Signature:***

````csharp
void DeleteShippingMethod(ShippingMethod currency);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `ShippingMethod` | `currency` | The Shipping Method to delete |

#### SortShippingMethods

Sorted the Shipping Methods with the given IDs, by the given ID sequence

***Signature:***

````csharp
void SortShippingMethods(Guid[] sortedIds);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid[]` | `sortedIds` | Sequence of Shipping Method IDs to sort in the given order |

### ShippingMethodService

**Description:** Default implementation of the [Vendr Shipping Method Service Interface](#ishippingmethodservice)  
**Namespace:** Vendr.Core.Services  
**Assembly:** Vendr.Core

<div class="mb-48"></div>

## ShippingMethod Entities

### ShippingMethodReadOnly

**Description:** Read Only Shipping Method entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `Id` | The Shipping Method unique ID |
| `string` | `Alias` | A unique Alias for the Shipping Method |
| `string` | `Name` | The Name of the Shipping Method |
| `string` | `Sku` | An SKU for the Shipping Method |
| `Guid?` | `TaxClassId` | The ID of the Tax Class of the Shipping Method |
| `string` | `ImageId` | The ID of an Image to display for the Shipping Method |
| `IReadOnlyList <ServicePrice>` | `Prices` | A list of Prices for the Shipping Method |
| `IReadOnlyCollection <AllowedCountryRegion>` | `AllowedCountryRegions` | A collection of Countries and Regions this Shipping Method is allowed in |
| `int` | `SortOrder` | The Sort Order of the Shipping Method |
| `bool` | `IsDeleted` | Flag indicating whether the Shipping Method is deleted |

#### GetPrice
Gets the Price of the Shipping Method

***Signature:***

````csharp
decimal GetPrice(Guid currencyId, Guid? countryId = null, Guid? regionId = null);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `currencyId` | The ID of the Currency to get the Shipping Method Price for |
| `Guid?` | `countryId` | The ID of the Country to get the Shipping Method Price for |
| `Guid?` | `regionId` | The ID of the Region to get the Shipping Method Price for |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `decimal` | The Price of by the Shipping Method matching the supplied criteria |

#### GetDefaultPriceForCurrency
Gets the default Price of the Shipping Method for a given Currency

***Signature:***

````csharp
decimal GetDefaultPriceForCurrency(CurrencyReadOnly currency);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CurrencyReadOnly` | `currency` | The Currency to get the Shipping Method Price for |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `decimal` | The Price of by the Shipping Method matching the supplied criteria |

---

***Signature:***

````csharp
decimal GetDefaultPriceForCurrency(Guid currencyId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `currencyId` | The ID of the Currency to get the Shipping Method Price for |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `decimal` | The Price of by the Shipping Method matching the supplied criteria |

#### GetCountryPriceForCurrency
Gets the Country Price of the Shipping Method for a given Currency

***Signature:***

````csharp
decimal GetCountryPriceForCurrency(CountryReadOnly country, CurrencyReadOnly currency);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country to get the Shipping Method Price for |
| `CurrencyReadOnly` | `currency` | The Currency to get the Shipping Method Price for |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `decimal` | The Price of by the Shipping Method matching the supplied criteria |

---

***Signature:***

````csharp
decimal GetCountryPriceForCurrency(Guid countryId, Guid currencyId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country to get the Shipping Method Price for |
| `Guid` | `currencyId` | The ID of the Currency to get the Shipping Method Price for |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `decimal` | The Price of by the Shipping Method matching the supplied criteria |

#### GetRegionPriceForCurrency
Gets the Region Price of the Shipping Method for a given Currency

***Signature:***

````csharp
decimal GetRegionPriceForCurrency(RegionReadOnly region, CurrencyReadOnly currency);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `RegionReadOnly` | `region` | The Region to get the Shipping Method Price for |
| `CurrencyReadOnly` | `currency` | The Currency to get the Shipping Method Price for |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `decimal` | The Price of by the Shipping Method matching the supplied criteria |

---

***Signature:***

````csharp
decimal GetRegionPriceForCurrency(Guid regionId, Guid currencyId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `regionId` | The ID of the Region to get the Shipping Method Price for |
| `Guid` | `currencyId` | The ID of the Currency to get the Shipping Method Price for |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `decimal` | The Price of by the Shipping Method matching the supplied criteria |

#### IsAllowedInCountry
Checks whether the given Country is allowed by the Shipping Method

***Signature:***

````csharp
bool IsAllowedInCountry(CountryReadOnly country);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country to check if allowed by the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `bool` | Flag indicating whether the Country is allowed by the Shipping Method |

---

***Signature:***

````csharp
bool IsAllowedInCountry(Guid countryId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country to check if allowed by the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `bool` | Flag indicating whether the Country is allowed by the Shipping Method |

#### IsAllowedInRegion
Checks whether the given Region is allowed by the Shipping Method

***Signature:***

````csharp
bool IsAllowedInRegion(RegionReadOnly region);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `RegionReadOnly` | `region` | The Region to check if allowed by the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `bool` | Flag indicating whether the Region is allowed by the Shipping Method |

---

***Signature:***

````csharp
bool IsAllowedInRegion(Guid regionId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `regionId` | The ID of the Region to check if allowed by the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `bool` | Flag indicating whether the Region is allowed by the Shipping Method |

#### AsWritable
Gets a writable version of the associated ShippingMethod

***Signature:***

````csharp
ShippingMethod AsWritable(IUnitOfWork uow);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUnitOfWork` | `uow` | An active Unit of Work to associate with this writable entity |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A writable version of the Shipping Method |

### ShippingMethod

**Description:** Writable Shipping Method entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core  
**Inherits:** [ ShippingMethodReadOnly](#shippingmethodreadonly) 

#### Create
Creates a Shipping Method entity

***Signature:***

````csharp
static ShippingMethod Create(IUnitOfWork uow, Guid storeId, string alias, string name);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUnitOfWork` | `uow` | An active Unit of Work to associate with this writable entity |
| `Guid` | `storeId` | The ID of the Store this Shipping Method belongs to |
| `string` | `alias` | A unique Alias for the Shipping Method |
| `string` | `name` | The Name of the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A writable Shipping Method |

#### SetAlias
Set the Shipping Method Alias of the Shipping Method

***Signature:***

````csharp
ShippingMethod SetAlias(string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `alias` | A unique Alias for the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

#### SetName
Set the Name of the Shipping Method

***Signature:***

````csharp
ShippingMethod SetName(string name);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `name` | The Name of the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

---

***Signature:***

````csharp
ShippingMethod SetName(string name, string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `name` | The Name of the Shipping Method |
| `string` | `alias` | A unique Alias for the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

#### SetSku
Set the SKU of the Shipping Method

***Signature:***

````csharp
ShippingMethod SetSku(string sku);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `sku` | The SKU of the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

#### SetImage
Set the Image of a Shipping Method

***Signature:***

````csharp
ShippingMethod SetImage(string id);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `id` | The ID of an Image to display for the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

#### SetTaxClass
Set the Tax Class of a Shipping Method

***Signature:***

````csharp
ShippingMethod SetTaxClass(TaxClass taxClass);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `TaxClass` | `taxClass` | The Tax Class to assign to the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

---

***Signature:***

````csharp
ShippingMethod SetTaxClass(Guid? taxClassId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid?` | `taxClassId` | The ID of the Tax Class to assign to the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

#### ClearTaxClass
Clear the Tax Class of a Shipping Method

***Signature:***

````csharp
ShippingMethod ClearTaxClass();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

#### SetDefaultPriceForCurrency
Set the Default Price of a Shipping Method

***Signature:***

````csharp
ShippingMethod SetDefaultPriceForCurrency(CurrencyReadOnly currency, decimal value);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CurrencyReadOnly` | `currency` | The Currency of the Default Price to set on the Shipping Method |
| `decimal` | `value` | The Value of the Default Price to set on the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

---

***Signature:***

````csharp
ShippingMethod SetDefaultPriceForCurrency(Guid currencyId, decimal value);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `currencyId` | The ID of the Currency of the Default Price to set on the Shipping Method |
| `decimal` | `value` | The Value of the Default Price to set on the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

#### SetCountryPriceForCurrency
Set the Country Price of a Shipping Method

***Signature:***

````csharp
ShippingMethod SetCountryPriceForCurrency(CountryReadOnly country, CurrencyReadOnly currency, decimal value);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country of the Price to set on the Shipping Method |
| `CurrencyReadOnly` | `currency` | The Currency of the Price to set on the Shipping Method |
| `decimal` | `value` | The Value of the Price to set on the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

---

***Signature:***

````csharp
ShippingMethod SetCountryPriceForCurrency(Guid countryId, Guid currencyId, decimal value);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country of the Price to set on the Shipping Method |
| `Guid` | `currencyId` | The ID of the Currency of the Price to set on the Shipping Method |
| `decimal` | `value` | The Value of the Country Price of the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

#### SetRegionPriceForCurrency
Set the Region Price of a Shipping Method

***Signature:***

````csharp
ShippingMethod SetRegionPriceForCurrency(RegionReadOnly region, CurrencyReadOnly currency, decimal value);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `RegionReadOnly` | `region` | The Region of the Price to set on the Shipping Method |
| `CurrencyReadOnly` | `currency` | The Currency of the Price to set on the Shipping Method |
| `decimal` | `value` | The Value of the Price to set on the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

---

***Signature:***

````csharp
ShippingMethod SetRegionPriceForCurrency(Guid regionId, Guid currencyId, decimal value);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `regionId` | The ID of the Region of the Price to set on the Shipping Method |
| `Guid` | `currencyId` | The ID of the Currency of the Price to set on the Shipping Method |
| `decimal` | `value` | The Value of the Region Price of the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

#### ClearDefaultPriceForCurrency
Clear the Default Price of a Shipping Method

***Signature:***

````csharp
ShippingMethod ClearDefaultPriceForCurrency(CurrencyReadOnly currency);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CurrencyReadOnly` | `currency` | The Currency of the Default Price to clear on the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

---

***Signature:***

````csharp
ShippingMethod ClearDefaultPriceForCurrency(Guid currencyId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `currencyId` | The ID of the Currency of the Default Price to clear on the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

#### ClearCountryPriceForCurrency
Clear the Country Price of a Shipping Method

***Signature:***

````csharp
ShippingMethod ClearCountryPriceForCurrency(CountryReadOnly country, CurrencyReadOnly currency);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country of the Price to clear on the Shipping Method |
| `CurrencyReadOnly` | `currency` | The Currency of the Price to clear on the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

---

***Signature:***

````csharp
ShippingMethod ClearCountryPriceForCurrency(Guid countryId, Guid currencyId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country of the Price to clear on the Shipping Method |
| `Guid` | `currencyId` | The ID of the Currency of the Price to clear on the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

#### ClearRegionPriceForCurrency
Clear the Region Price of a Shipping Method

***Signature:***

````csharp
ShippingMethod ClearRegionPriceForCurrency(RegionReadOnly region, CurrencyReadOnly currency);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `RegionReadOnly` | `region` | The Region of the Price to clear on the Shipping Method |
| `CurrencyReadOnly` | `currency` | The Currency of the Price to clear on the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

---

***Signature:***

````csharp
ShippingMethod ClearRegionPriceForCurrency(Guid regionId, Guid currencyId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `regionId` | The ID of the Region of the Price to clear on the Shipping Method |
| `Guid` | `currencyId` | The ID of the Currency of the Price to clear on the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

#### ClearPricesForCurrency
Clear all the Prices for a Currency of a Shipping Method

***Signature:***

````csharp
ShippingMethod ClearPricesForCurrency(CurrencyReadOnly currency);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CurrencyReadOnly` | `currency` | The Currency of the Prices to clear on the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

---

***Signature:***

````csharp
ShippingMethod ClearPricesForCurrency(Guid currencyId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `currencyId` | The ID of the Currency of the Prices to clear on the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

#### ClearPricesForCountry
Clear all the Prices for a Country of a Shipping Method

***Signature:***

````csharp
ShippingMethod ClearPricesForCountry(CountryReadOnly country);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country of the Prices to clear on the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

---

***Signature:***

````csharp
ShippingMethod ClearPricesForCountry(Guid countryId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country of the Prices to clear on the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

#### ClearPricesForRegion
Clear all the Prices for a Region of a Shipping Method

***Signature:***

````csharp
ShippingMethod ClearPricesForRegion(RegionReadOnly region);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `RegionReadOnly` | `region` | The Region of the Prices to clear on the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

---

***Signature:***

````csharp
ShippingMethod ClearPricesForRegion(Guid regionId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `regionId` | The ID of the Region of the Prices to clear on the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

#### AllowInCountry
Allows a Shipping Method for a Country

***Signature:***

````csharp
ShippingMethod AllowInCountry(CountryReadOnly country);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country to allow the Shipping Method in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

---

***Signature:***

````csharp
ShippingMethod AllowInCountry(Guid countryId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country to allow the Shipping Method in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

#### DisallowInCountry
Disallows a Shipping Method for a Country

***Signature:***

````csharp
ShippingMethod DisallowInCountry(CountryReadOnly country);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country to disallow the Shipping Method in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

---

***Signature:***

````csharp
ShippingMethod DisallowInCountry(Guid countryId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country to disallow the Shipping Method in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

#### AllowInRegion
Allows a Shipping Method for a Region

***Signature:***

````csharp
ShippingMethod AllowInRegion(RegionReadOnly region);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `RegionReadOnly` | `region` | The Region to allow the Shipping Method in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

---

***Signature:***

````csharp
ShippingMethod AllowInRegion(Guid regionId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `regionId` | The ID of the Region to allow the Shipping Method in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

#### DisallowInRegion
Disallows a Shipping Method for a Region

***Signature:***

````csharp
ShippingMethod DisallowInRegion(RegionReadOnly region);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `RegionReadOnly` | `region` | The Region to disallow the Shipping Method in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

---

***Signature:***

````csharp
ShippingMethod DisallowInRegion(Guid regionId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `regionId` | The ID of the Region to disallow the Shipping Method in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | A read only version of the Shipping Method |

#### SetSortOrder
Sets the Sort Order of a Shipping Method

***Signature:***

````csharp
ShippingMethod SetSortOrder(int order);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `int` | `order` | The Order position of the Shipping Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethod` | An updated writable Shipping Method |


#### AsReadOnly
Converts a writable Shipping Method into a read only Shipping Method

***Signature:***

````csharp
ShippingMethodReadOnly AsReadOnly();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShippingMethodReadOnly` | A read only version of the Shipping Method |

<div class="mb-48"></div>

## Shipping Method Owned Entities

### AllowedCountryRegion

**Description:** ShippingMethod Allowed Country Region owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `CountryId` | The ID of the Allowed Country |
| `Guid?` | `RegionId` | The ID of the Allowed Region |

<div class="mb-48"></div>

## Shipping Method Events

### Validation Events

#### ValidateShippingMethodCreate

**Description:** Validation event fired when a Shipping Method is being created  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `ShippingMethodReadOnly` | `ShippingMethod` | The Shipping Method associated with this event |

#### ValidateShippingMethodUpdate

**Description:** Validation event fired when a Shipping Method is being updated  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `ShippingMethodReadOnly` | `ShippingMethod` | The Shipping Method associated with this event |

#### ValidateShippingMethodSave

**Description:** Validation event fired when a Shipping Method is being saved  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `ShippingMethodReadOnly` | `ShippingMethod` | The Shipping Method associated with this event |

#### ValidateShippingMethodDelete

**Description:** Validation event fired when a Shipping Method is being deleted  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `ShippingMethodReadOnly` | `ShippingMethod` | The Shipping Method associated with this event |

#### ValidateShippingMethodAliasChange

**Description:** Validation event fired when a Shipping Method Alias is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `ShippingMethodReadOnly` | `ShippingMethod` | The Shipping Method associated with this event |
| `ChangingValue<string>` | `Alias` | The changing Alias of the Shipping Method |

#### ValidateShippingMethodNameChange

**Description:** Validation event fired when a Shipping Method Name is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `ShippingMethodReadOnly` | `ShippingMethod` | The Shipping Method associated with this event |
| `ChangingValue<string>` | `Name` | The changing Name of the Shipping Method |

#### ValidateShippingMethodSkuChange

**Description:** Validation event fired when a Shipping Method Sku is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `ShippingMethodReadOnly` | `ShippingMethod` | The Shipping Method associated with this event |
| `ChangingValue<string>` | `Sku` | The changing Sku of the Shipping Method |

#### ValidateShippingMethodImageChange

**Description:** Validation event fired when a Shipping Method Image is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `ShippingMethodReadOnly` | `ShippingMethod` | The Shipping Method associated with this event |
| `ChangingValue<string>` | `ImageId` | The changing ID of the Image for the Shipping Method |

#### ValidateShippingMethodTaxClassChange

**Description:** Validation event fired when a Shipping Method Tax Class is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `ShippingMethodReadOnly` | `ShippingMethod` | The Shipping Method associated with this event |
| `ChangingValue<Guid?>` | `TaxClassId` | The changing ID of the Tax Class for the Shipping Method |

#### ValidateShippingMethodClearPrices

**Description:** Validation event fired when a Shipping Methods Prices are being cleared   
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `ShippingMethodReadOnly` | `ShippingMethod` | The Shipping Method associated with this event |
| `Guid?` | `CurrencyId` | The ID of the Currency of the Prices being cleared |
| `Guid?` | `CountryId` | The ID of the Country of the Prices being cleared |
| `Guid?` | `RegionId` | The ID of the Region of the Prices being cleared |

#### ValidateShippingMethodPriceChange

**Description:** Validation event fired when a Shipping Methods Prices are being changed   
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `ShippingMethodReadOnly` | `ShippingMethod` | The Shipping Method associated with this event |
| `Guid?` | `CurrencyId` | The ID of the Currency of the Prices being changed |
| `Guid?` | `CountryId` | The ID of the Country of the Prices being changed |
| `Guid?` | `RegionId` | The ID of the Region of the Prices being changed |
| `ChangingValue<decimal>` | `Price` | The changing Price of the Shipping Method |

#### ValidateShippingMethodAllowInCountryRegion

**Description:** Validation event fired when a Shipping Method is being allowed in a Country / Region  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `ShippingMethodReadOnly` | `ShippingMethod` | The Shipping Method associated with this event |
| `Guid` | `CountryId` | The ID of the Country the Shipping Method is being allowed in |
| `Guid?` | `RegionId` | The ID of the Region the Shipping Method is being allowed in |

#### ValidateShippingMethodDisallowInCountryRegion

**Description:** Validation event fired when a Shipping Method is being disallowed in a Country / Region  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `ShippingMethodReadOnly` | `ShippingMethod` | The Shipping Method associated with this event |
| `Guid` | `CountryId` | The ID of the Country the Shipping Method is being disallowed in |
| `Guid?` | `RegionId` | The ID of the Region the Shipping Method is being disallowed in |


### Notification Events

#### ShippingMethodCreatingNotification

**Description:** Notification event fired before a Shipping Method is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `ShippingMethod` | `ShippingMethod` | The Shipping Method associated with this event |

#### ShippingMethodCreatedNotification

**Description:** Notification event fired after a Shipping Method is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `ShippingMethodReadOnly` | `ShippingMethod` | The Shipping Method associated with this event |

#### ShippingMethodUpdatingNotification

**Description:** Notification event fired before a Shipping Method is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `ShippingMethod` | `ShippingMethod` | The Shipping Method associated with this event |

#### ShippingMethodUpdatedNotification

**Description:** Notification event fired after a Shipping Method is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `ShippingMethodReadOnly` | `ShippingMethod` | The Shipping Method associated with this event |

#### ShippingMethodSavingNotification

**Description:** Notification event fired before a Shipping Method is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `ShippingMethod` | `ShippingMethod` | The Shipping Method associated with this event |

#### ShippingMethodSavedNotification

**Description:** Notification event fired after a Shipping Method is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `ShippingMethodReadOnly` | `ShippingMethod` | The Shipping Method associated with this event |

#### ShippingMethodDeletingNotification

**Description:** Notification event fired before a Shipping Method is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `ShippingMethod` | `ShippingMethod` | The Shipping Method associated with this event |

#### ShippingMethodDeletedNotification

**Description:** Notification event fired after a Shipping Method is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `ShippingMethodReadOnly` | `ShippingMethod` | The Shipping Method associated with this event |