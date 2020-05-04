---
title: Payment Methods
description: Payment Method related APIs in Vendr, the eCommerce solution for Umbraco v8+
---

## Payment Method Service

### IPaymentMethodService

**Description:** Interface of the Vendr Payment Method Service  
**Namespace:** Vendr.Core.Services  
**Assembly:** Vendr.Core

#### PaymentMethodExists

Checks to see if a Payment Method exists in a Store with the given Alias

***Signature:***

````csharp
bool PaymentMethodExists(Guid storeId, string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Payment Method belong to |
| `string` | `alias` | The Alias of the Payment Method to check  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `bool` | True if the Payment Method exists, otherwise false |

#### GetPaymentMethods

Gets a collection of all Payment Method entities in a Store

***Signature:***

````csharp
IEnumerable<PaymentMethodReadOnly> GetPaymentMethods(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Payment Methods belong to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `IEnumerable<PaymentMethodReadOnly>` | A list of read only Payment Method entities |

#### GetPaymentMethodsAllowedIn

Gets a collection of all Payment Method allowed in a Country

***Signature:***

````csharp
IEnumerable<PaymentMethodReadOnly> GetPaymentMethodsAllowedIn(Guid countryId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country the Payment Methods are allowed in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `IEnumerable<PaymentMethodReadOnly>` | A list of read only Payment Method entities |

#### GetPaymentMethod

Gets a specific Payment Method entity

***Signature:***

````csharp
PaymentMethodReadOnly GetPaymentMethod(Guid id);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `id` | The ID of the Payment Method to fetch  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethodReadOnly` | A read only Payment Method entity matching the provided criteria  |

---

***Signature:***

````csharp
PaymentMethodReadOnly GetPaymentMethod(Guid storeId, string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Payment Method belong to |
| `string` | `alias` | The Alias of the Payment Method to fetch  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethodReadOnly` | A read only Payment Method entity matching the provided criteria  |

#### SavePaymentMethod

Persists the given Payment Method to the database

***Signature:***

````csharp
void SavePaymentMethod(PaymentMethod currency);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `PaymentMethod` | `currency` | The Payment Method to save  |

#### DeletePaymentMethod

Deletes the given PaymentMethod

***Signature:***

````csharp
void DeletePaymentMethod(Guid PaymentMethodId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `PaymentMethodId` | The ID of the Payment Method to delete |

---

***Signature:***

````csharp
void DeletePaymentMethod(PaymentMethod currency);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `PaymentMethod` | `currency` | The Payment Method to delete |

#### SortPaymentMethods

Sorted the Payment Methods with the given IDs, by the given ID sequence

***Signature:***

````csharp
void SortPaymentMethods(Guid[] sortedIds);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid[]` | `sortedIds` | Sequence of Payment Method IDs to sort in the given order |

### PaymentMethodService

**Description:** Default implementation of the [Vendr Payment Method Service Interface](#ipaymentmethodservice)  
**Namespace:** Vendr.Core.Services  
**Assembly:** Vendr.Core

<div class="mb-48"></div>

## PaymentMethod Entities

### PaymentMethodReadOnly

**Description:** Read Only Payment Method entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `Id` | The Payment Method unique ID |
| `string` | `Alias` | A unique Alias for the Payment Method |
| `string` | `Name` | The Name of the Payment Method |
| `string` | `Sku` | An SKU for the Payment Method |
| `Guid?` | `TaxClassId` | The ID of the Tax Class of the Payment Method |
| `string` | `ImageId` | The ID of an Image to display for the Payment Method |
| `IReadOnlyList <ServicePrice>` | `Prices` | A list of Prices for the Payment Method |
| `string` | `PaymentProviderAlias` | The Alias of the Payment Provider used by the Payment Method |
| `IReadOnlyDictionary<string, string>` | `PaymentProviderSettings` | A Dictionary of settings used by the Payment Provider of the Payment Method |
| `bool` | `CanFetchPaymentStatuses` | Flag indicating whether the "Fetch Payment Status" feature of the Payment Provider associated with the Payment Method should be enabled |
| `bool` | `CanCapturePayments` | Flag indicating whether the "Capture Payments" feature of the Payment Provider associated with the Payment Method should be enabled |
| `bool` | `CanCancelPayments` | Flag indicating whether the "Cancel Payments" feature of the Payment Provider associated with the Payment Method should be enabled |
| `bool` | `CanRefundPayments` | Flag indicating whether the "Refund Payments" feature of the Payment Provider associated with the Payment Method should be enabled |
| `IReadOnlyCollection <AllowedCountryRegion>` | `AllowedCountryRegions` | A collection of Countries and Regions this Payment Method is allowed in |
| `int` | `SortOrder` | The Sort Order of the Payment Method |
| `bool` | `IsDeleted` | Flag indicating whether the Payment Method is deleted |

#### GetPrice
Gets the Price of the Payment Method

***Signature:***

````csharp
decimal GetPrice(Guid currencyId, Guid? countryId = null, Guid? regionId = null);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `currencyId` | The ID of the Currency to get the Payment Method Price for |
| `Guid?` | `countryId` | The ID of the Country to get the Payment Method Price for |
| `Guid?` | `regionId` | The ID of the Region to get the Payment Method Price for |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `decimal` | The Price of by the Payment Method matching the supplied criteria |

#### GetDefaultPriceForCurrency
Gets the default Price of the Payment Method for a given Currency

***Signature:***

````csharp
decimal GetDefaultPriceForCurrency(CurrencyReadOnly currency);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CurrencyReadOnly` | `currency` | The Currency to get the Payment Method Price for |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `decimal` | The Price of by the Payment Method matching the supplied criteria |

---

***Signature:***

````csharp
decimal GetDefaultPriceForCurrency(Guid currencyId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `currencyId` | The ID of the Currency to get the Payment Method Price for |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `decimal` | The Price of by the Payment Method matching the supplied criteria |

#### GetCountryPriceForCurrency
Gets the Country Price of the Payment Method for a given Currency

***Signature:***

````csharp
decimal GetCountryPriceForCurrency(CountryReadOnly country, CurrencyReadOnly currency);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country to get the Payment Method Price for |
| `CurrencyReadOnly` | `currency` | The Currency to get the Payment Method Price for |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `decimal` | The Price of by the Payment Method matching the supplied criteria |

---

***Signature:***

````csharp
decimal GetCountryPriceForCurrency(Guid countryId, Guid currencyId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country to get the Payment Method Price for |
| `Guid` | `currencyId` | The ID of the Currency to get the Payment Method Price for |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `decimal` | The Price of by the Payment Method matching the supplied criteria |

#### GetRegionPriceForCurrency
Gets the Region Price of the Payment Method for a given Currency

***Signature:***

````csharp
decimal GetRegionPriceForCurrency(RegionReadOnly region, CurrencyReadOnly currency);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `RegionReadOnly` | `region` | The Region to get the Payment Method Price for |
| `CurrencyReadOnly` | `currency` | The Currency to get the Payment Method Price for |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `decimal` | The Price of by the Payment Method matching the supplied criteria |

---

***Signature:***

````csharp
decimal GetRegionPriceForCurrency(Guid regionId, Guid currencyId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `regionId` | The ID of the Region to get the Payment Method Price for |
| `Guid` | `currencyId` | The ID of the Currency to get the Payment Method Price for |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `decimal` | The Price of by the Payment Method matching the supplied criteria |

#### IsAllowedInCountry
Checks whether the given Country is allowed by the Payment Method

***Signature:***

````csharp
bool IsAllowedInCountry(CountryReadOnly country);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country to check if allowed by the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `bool` | Flag indicating whether the Country is allowed by the Payment Method |

---

***Signature:***

````csharp
bool IsAllowedInCountry(Guid countryId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country to check if allowed by the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `bool` | Flag indicating whether the Country is allowed by the Payment Method |

#### IsAllowedInRegion
Checks whether the given Region is allowed by the Payment Method

***Signature:***

````csharp
bool IsAllowedInRegion(RegionReadOnly region);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `RegionReadOnly` | `region` | The Region to check if allowed by the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `bool` | Flag indicating whether the Region is allowed by the Payment Method |

---

***Signature:***

````csharp
bool IsAllowedInRegion(Guid regionId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `regionId` | The ID of the Region to check if allowed by the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `bool` | Flag indicating whether the Region is allowed by the Payment Method |

#### AsWritable
Gets a writable version of the associated PaymentMethod

***Signature:***

````csharp
PaymentMethod AsWritable(IUnitOfWork uow);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUnitOfWork` | `uow` | An active Unit of Work to associate with this writable entity |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A writable version of the Payment Method |

#### DeepClone
Deep Clone the Entity

***Signature:***

````csharp
object DeepClone();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `object` | A deep clone of the Entity as an object |

### PaymentMethod

**Description:** Writable Payment Method entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core  
**Inherits:** [ PaymentMethodReadOnly](#paymentmethodreadonly) 

#### Create
Creates a Payment Method entity

***Signature:***

````csharp
static PaymentMethod Create(IUnitOfWork uow, Guid storeId, string alias, string name, string paymentProviderAlias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUnitOfWork` | `uow` | An active Unit of Work to associate with this writable entity |
| `Guid` | `storeId` | The ID of the Store this Payment Method belongs to |
| `string` | `alias` | A unique Alias for the Payment Method |
| `string` | `name` | The Name of the Payment Method |
| `string` | `paymentProviderAlias` | The Alias of the Payment Provider to use by the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A writable Payment Method |

#### SetAlias
Set the Payment Method Alias of the Payment Method

***Signature:***

````csharp
PaymentMethod SetAlias(string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `alias` | A unique Alias for the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### SetName
Set the Name of the Payment Method

***Signature:***

````csharp
PaymentMethod SetName(string name);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `name` | The Name of the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

---

***Signature:***

````csharp
PaymentMethod SetName(string name, string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `name` | The Name of the Payment Method |
| `string` | `alias` | A unique Alias for the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### SetSku
Set the SKU of the Payment Method

***Signature:***

````csharp
PaymentMethod SetSku(string sku);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `sku` | The SKU of the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### SetImage
Set the Image of a Payment Method

***Signature:***

````csharp
PaymentMethod SetImage(string id);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `id` | The ID of an Image to display for the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### SetTaxClass
Set the Tax Class of a Payment Method

***Signature:***

````csharp
PaymentMethod SetTaxClass(TaxClass taxClass);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `TaxClass` | `taxClass` | The Tax Class to assign to the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

---

***Signature:***

````csharp
PaymentMethod SetTaxClass(Guid? taxClassId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid?` | `taxClassId` | The ID of the Tax Class to assign to the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### ClearTaxClass
Clear the Tax Class of a Payment Method

***Signature:***

````csharp
PaymentMethod ClearTaxClass();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### SetSetting
Set a Setting on a Payment Method

***Signature:***

````csharp
PaymentMethod SetSetting(string alias, string value);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `alias` | The Alias of the Setting to set on the Payment Method |
| `string` | `value` | The Value of the Setting to set on the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### RemoveSetting
Remove a Setting on a Payment Method

***Signature:***

````csharp
PaymentMethod RemoveSetting(string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `alias` | The Alias of the Setting to remove from the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### SetSettings
Set multiple Settings on a Payment Method

***Signature:***

````csharp
PaymentMethod SetSettings(IDictionary<string, string> settings, SetBehavior setBehavior);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IDictionary<string, string>` | `settings` | The Settings to set on the Payment Method |
| `SetBehavior` | `setBehavior` | The Set Behavior to use when setting the Settings on the Payment Method, either `Merge` or `Replace` |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### ToggleFeatures
Toggle the Features of a Payment Method

***Signature:***

````csharp
PaymentMethod ToggleFeatures(bool fetchPaymentStatuses, bool capturePayments, bool cancelPayments, bool refundPayments);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `bool` | `fetchPaymentStatuses` | Flag to enable / disable the "Fetch Payment Status" feature of the Payment Method |
| `bool` | `capturePayments` | Flag to enable / disable the "Capture Payments" feature of the Payment Method |
| `bool` | `cancelPayments` | Flag to enable / disable the "Cancel Payments" feature of the Payment Method |
| `bool` | `refundPayments` | Flag to enable / disable the "Refund Payments" feature of the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### SetDefaultPriceForCurrency
Set the Default Price of a Payment Method

***Signature:***

````csharp
PaymentMethod SetDefaultPriceForCurrency(CurrencyReadOnly currency, decimal value);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CurrencyReadOnly` | `currency` | The Currency of the Default Price to set on the Payment Method |
| `decimal` | `value` | The Value of the Default Price to set on the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

---

***Signature:***

````csharp
PaymentMethod SetDefaultPriceForCurrency(Guid currencyId, decimal value);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `currencyId` | The ID of the Currency of the Default Price to set on the Payment Method |
| `decimal` | `value` | The Value of the Default Price to set on the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### SetCountryPriceForCurrency
Set the Country Price of a Payment Method

***Signature:***

````csharp
PaymentMethod SetCountryPriceForCurrency(CountryReadOnly country, CurrencyReadOnly currency, decimal value);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country of the Price to set on the Payment Method |
| `CurrencyReadOnly` | `currency` | The Currency of the Price to set on the Payment Method |
| `decimal` | `value` | The Value of the Price to set on the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

---

***Signature:***

````csharp
PaymentMethod SetCountryPriceForCurrency(Guid countryId, Guid currencyId, decimal value);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country of the Price to set on the Payment Method |
| `Guid` | `currencyId` | The ID of the Currency of the Price to set on the Payment Method |
| `decimal` | `value` | The Value of the Country Price of the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### SetRegionPriceForCurrency
Set the Region Price of a Payment Method

***Signature:***

````csharp
PaymentMethod SetRegionPriceForCurrency(RegionReadOnly region, CurrencyReadOnly currency, decimal value);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `RegionReadOnly` | `region` | The Region of the Price to set on the Payment Method |
| `CurrencyReadOnly` | `currency` | The Currency of the Price to set on the Payment Method |
| `decimal` | `value` | The Value of the Price to set on the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

---

***Signature:***

````csharp
PaymentMethod SetRegionPriceForCurrency(Guid regionId, Guid currencyId, decimal value);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `regionId` | The ID of the Region of the Price to set on the Payment Method |
| `Guid` | `currencyId` | The ID of the Currency of the Price to set on the Payment Method |
| `decimal` | `value` | The Value of the Region Price of the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### ClearDefaultPriceForCurrency
Clear the Default Price of a Payment Method

***Signature:***

````csharp
PaymentMethod ClearDefaultPriceForCurrency(CurrencyReadOnly currency);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CurrencyReadOnly` | `currency` | The Currency of the Default Price to clear on the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

---

***Signature:***

````csharp
PaymentMethod ClearDefaultPriceForCurrency(Guid currencyId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `currencyId` | The ID of the Currency of the Default Price to clear on the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### ClearCountryPriceForCurrency
Clear the Country Price of a Payment Method

***Signature:***

````csharp
PaymentMethod ClearCountryPriceForCurrency(CountryReadOnly country, CurrencyReadOnly currency);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country of the Price to clear on the Payment Method |
| `CurrencyReadOnly` | `currency` | The Currency of the Price to clear on the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

---

***Signature:***

````csharp
PaymentMethod ClearCountryPriceForCurrency(Guid countryId, Guid currencyId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country of the Price to clear on the Payment Method |
| `Guid` | `currencyId` | The ID of the Currency of the Price to clear on the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### ClearRegionPriceForCurrency
Clear the Region Price of a Payment Method

***Signature:***

````csharp
PaymentMethod ClearRegionPriceForCurrency(RegionReadOnly region, CurrencyReadOnly currency);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `RegionReadOnly` | `region` | The Region of the Price to clear on the Payment Method |
| `CurrencyReadOnly` | `currency` | The Currency of the Price to clear on the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

---

***Signature:***

````csharp
PaymentMethod ClearRegionPriceForCurrency(Guid regionId, Guid currencyId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `regionId` | The ID of the Region of the Price to clear on the Payment Method |
| `Guid` | `currencyId` | The ID of the Currency of the Price to clear on the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### ClearPricesForCurrency
Clear all the Prices for a Currency of a Payment Method

***Signature:***

````csharp
PaymentMethod ClearPricesForCurrency(CurrencyReadOnly currency);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CurrencyReadOnly` | `currency` | The Currency of the Prices to clear on the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

---

***Signature:***

````csharp
PaymentMethod ClearPricesForCurrency(Guid currencyId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `currencyId` | The ID of the Currency of the Prices to clear on the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### ClearPricesForCountry
Clear all the Prices for a Country of a Payment Method

***Signature:***

````csharp
PaymentMethod ClearPricesForCountry(CountryReadOnly country);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country of the Prices to clear on the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

---

***Signature:***

````csharp
PaymentMethod ClearPricesForCountry(Guid countryId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country of the Prices to clear on the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### ClearPricesForRegion
Clear all the Prices for a Region of a Payment Method

***Signature:***

````csharp
PaymentMethod ClearPricesForRegion(RegionReadOnly region);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `RegionReadOnly` | `region` | The Region of the Prices to clear on the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

---

***Signature:***

````csharp
PaymentMethod ClearPricesForRegion(Guid regionId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `regionId` | The ID of the Region of the Prices to clear on the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### AllowInCountry
Allows a Payment Method for a Country

***Signature:***

````csharp
PaymentMethod AllowInCountry(CountryReadOnly country);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country to allow the Payment Method in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

---

***Signature:***

````csharp
PaymentMethod AllowInCountry(Guid countryId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country to allow the Payment Method in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### DisallowInCountry
Disallows a Payment Method for a Country

***Signature:***

````csharp
PaymentMethod DisallowInCountry(CountryReadOnly country);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country to disallow the Payment Method in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

---

***Signature:***

````csharp
PaymentMethod DisallowInCountry(Guid countryId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country to disallow the Payment Method in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### AllowInRegion
Allows a Payment Method for a Region

***Signature:***

````csharp
PaymentMethod AllowInRegion(RegionReadOnly region);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `RegionReadOnly` | `region` | The Region to allow the Payment Method in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

---

***Signature:***

````csharp
PaymentMethod AllowInRegion(Guid regionId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `regionId` | The ID of the Region to allow the Payment Method in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### DisallowInRegion
Disallows a Payment Method for a Region

***Signature:***

````csharp
PaymentMethod DisallowInRegion(RegionReadOnly region);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `RegionReadOnly` | `region` | The Region to disallow the Payment Method in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

---

***Signature:***

````csharp
PaymentMethod DisallowInRegion(Guid regionId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `regionId` | The ID of the Region to disallow the Payment Method in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | A read only version of the Payment Method |

#### SetSortOrder
Sets the Sort Order of a Payment Method

***Signature:***

````csharp
PaymentMethod SetSortOrder(int order);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `int` | `order` | The Order position of the Payment Method |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethod` | An updated writable Payment Method |


#### AsReadOnly
Converts a writable Payment Method into a read only Payment Method

***Signature:***

````csharp
PaymentMethodReadOnly AsReadOnly();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethodReadOnly` | A read only version of the Payment Method |

<div class="mb-48"></div>

## Payment Method Owned Entities

### AllowedCountryRegion

**Description:** PaymentMethod Allowed Country Region owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `CountryId` | The ID of the Allowed Country |
| `Guid?` | `RegionId` | The ID of the Allowed Region |

#### DeepClone
Deep Clone the Entity

***Signature:***

````csharp
object DeepClone();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `object` | A deep clone of the Entity as an object |

<div class="mb-48"></div>

## Payment Method Events

### Validation Events

#### ValidatePaymentMethodCreate

**Description:** Validation event fired when a Payment Method is being created  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethodReadOnly` | `PaymentMethod` | The Payment Method associated with this event |

#### ValidatePaymentMethodUpdate

**Description:** Validation event fired when a Payment Method is being updated  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethodReadOnly` | `PaymentMethod` | The Payment Method associated with this event |

#### ValidatePaymentMethodSave

**Description:** Validation event fired when a Payment Method is being saved  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethodReadOnly` | `PaymentMethod` | The Payment Method associated with this event |

#### ValidatePaymentMethodDelete

**Description:** Validation event fired when a Payment Method is being deleted  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethodReadOnly` | `PaymentMethod` | The Payment Method associated with this event |

#### ValidatePaymentMethodAliasChange

**Description:** Validation event fired when a Payment Method Alias is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethodReadOnly` | `PaymentMethod` | The Payment Method associated with this event |
| `ChangingValue<string>` | `Alias` | The changing Alias of the Payment Method |

#### ValidatePaymentMethodNameChange

**Description:** Validation event fired when a Payment Method Name is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethodReadOnly` | `PaymentMethod` | The Payment Method associated with this event |
| `ChangingValue<string>` | `Name` | The changing Name of the Payment Method |

#### ValidatePaymentMethodSkuChange

**Description:** Validation event fired when a Payment Method Sku is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethodReadOnly` | `PaymentMethod` | The Payment Method associated with this event |
| `ChangingValue<string>` | `Sku` | The changing Sku of the Payment Method |

#### ValidatePaymentMethodImageChange

**Description:** Validation event fired when a Payment Method Image is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethodReadOnly` | `PaymentMethod` | The Payment Method associated with this event |
| `ChangingValue<string>` | `ImageId` | The changing ID of the Image for the Payment Method |

#### ValidatePaymentMethodTaxClassChange

**Description:** Validation event fired when a Payment Method Tax Class is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethodReadOnly` | `PaymentMethod` | The Payment Method associated with this event |
| `ChangingValue<Guid?>` | `TaxClassId` | The changing ID of the Tax Class for the Payment Method |

#### ValidatePaymentMethodSettingChange

**Description:** Validation event fired when a Payment Method Setting is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethodReadOnly` | `PaymentMethod` | The Payment Method associated with this event |
| `string` | `Alias` | The Alias of the changing Setting of the Payment Method |
| `ChangingValue<string>` | `Value` | The changing Value of the Setting of the Payment Method |

#### ValidatePaymentMethodToggleFeatures

**Description:** Validation event fired when a Payment Methods Features are being toggled   
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethodReadOnly` | `PaymentMethod` | The Payment Method associated with this event |
| `ChangingValue<bool>` | `FetchPaymentStatuses` | The changing flag indicating whether the "Fetch Payment Status" feature of the Payment Method is enabled or not |
| `ChangingValue<bool>` | `CapturePayments` | The changing flag indicating whether the "Capture Payments" feature of the Payment Method is enabled or not |
| `ChangingValue<bool>` | `CancelPayments` | The changing flag indicating whether the "Cancel Payments" feature of the Payment Method is enabled or not |
| `ChangingValue<bool>` | `RefundPayments` | The changing flag indicating whether the "Refund Payments" feature of the Payment Method is enabled or not |

#### ValidatePaymentMethodClearPrices

**Description:** Validation event fired when a Payment Methods Prices are being cleared   
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethodReadOnly` | `PaymentMethod` | The Payment Method associated with this event |
| `Guid?` | `CurrencyId` | The ID of the Currency of the Prices being cleared |
| `Guid?` | `CountryId` | The ID of the Country of the Prices being cleared |
| `Guid?` | `RegionId` | The ID of the Region of the Prices being cleared |

#### ValidatePaymentMethodPriceChange

**Description:** Validation event fired when a Payment Methods Prices are being changed   
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethodReadOnly` | `PaymentMethod` | The Payment Method associated with this event |
| `Guid?` | `CurrencyId` | The ID of the Currency of the Prices being changed |
| `Guid?` | `CountryId` | The ID of the Country of the Prices being changed |
| `Guid?` | `RegionId` | The ID of the Region of the Prices being changed |
| `ChangingValue<decimal>` | `Price` | The changing Price of the Payment Method |

#### ValidatePaymentMethodAllowInCountryRegion

**Description:** Validation event fired when a Payment Method is being allowed in a Country / Region  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethodReadOnly` | `PaymentMethod` | The Payment Method associated with this event |
| `Guid` | `CountryId` | The ID of the Country the Payment Method is being allowed in |
| `Guid?` | `RegionId` | The ID of the Region the Payment Method is being allowed in |

#### ValidatePaymentMethodDisallowInCountryRegion

**Description:** Validation event fired when a Payment Method is being disallowed in a Country / Region  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethodReadOnly` | `PaymentMethod` | The Payment Method associated with this event |
| `Guid` | `CountryId` | The ID of the Country the Payment Method is being disallowed in |
| `Guid?` | `RegionId` | The ID of the Region the Payment Method is being disallowed in |


### Notification Events

#### PaymentMethodCreatingNotification

**Description:** Notification event fired before a Payment Method is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethod` | `PaymentMethod` | The Payment Method associated with this event |

#### PaymentMethodCreatedNotification

**Description:** Notification event fired after a Payment Method is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethodReadOnly` | `PaymentMethod` | The Payment Method associated with this event |

#### PaymentMethodUpdatingNotification

**Description:** Notification event fired before a Payment Method is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethod` | `PaymentMethod` | The Payment Method associated with this event |

#### PaymentMethodUpdatedNotification

**Description:** Notification event fired after a Payment Method is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethodReadOnly` | `PaymentMethod` | The Payment Method associated with this event |

#### PaymentMethodSavingNotification

**Description:** Notification event fired before a Payment Method is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethod` | `PaymentMethod` | The Payment Method associated with this event |

#### PaymentMethodSavedNotification

**Description:** Notification event fired after a Payment Method is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethodReadOnly` | `PaymentMethod` | The Payment Method associated with this event |

#### PaymentMethodDeletingNotification

**Description:** Notification event fired before a Payment Method is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethod` | `PaymentMethod` | The Payment Method associated with this event |

#### PaymentMethodDeletedNotification

**Description:** Notification event fired after a Payment Method is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentMethodReadOnly` | `PaymentMethod` | The Payment Method associated with this event |