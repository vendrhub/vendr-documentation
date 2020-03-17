---
title: Countries & Regions
description: Country and Region related APIs in Vendr, the eCommerce solution for Umbraco v8+
---

## Country Service

### ICountryService

**Description:** Interface of the Vendr Country Service  
**Namespace:** Vendr.Core.Services  
**Assembly:** Vendr.Core

#### GetCountries

Gets a collection of all Country entities in a Store

***Signature:***

````csharp
IEnumerable<CountryReadOnly> GetCountries(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID the Store to fetch from |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `IEnumerable<CountryReadOnly>` | A list of read only Country entities |

#### GetIso3166CountryRegions

Gets a collection ISO 3166 Countries and Regions

***Signature:***

````csharp
IEnumerable<Iso3166Country> GetIso3166CountryRegions();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `IEnumerable<Iso3166Country>` | A list of IS0 3166 Country and Regions |

#### GetCountry

Gets a specific Country entity

***Signature:***

````csharp
CountryReadOnly GetCountry(Guid id);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `id` | The ID of the Country to fetch  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `CountryReadOnly` | A read only Country entity matching the provided criteria  |

---

***Signature:***

````csharp
CountryReadOnly GetCountry(Guid storeId, string code);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store to fetch from |
| `string` | `code` | The Code of the Country to fetch  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `CountryReadOnly` | A read only Country entity matching the provided criteria  |

#### SaveCountry

Persists the given Country to the database

***Signature:***

````csharp
void SaveCountry(Country Country);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Country` | `Country` | The Country to save  |

#### DeleteCountry

Deletes the given Country

***Signature:***

````csharp
void DeleteCountry(Guid CountryId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `CountryId` | The ID of the Country to delete |

---

***Signature:***

````csharp
void DeleteCountry(Country entity);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Country` | `entity` | The Country to delete |

#### SortCountries

Sorted the Countries with the given IDs, by the given ID sequence

***Signature:***

````csharp
void SortCountries(Guid[] sortedIds);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid[]` | `sortedIds` | Sequence of Country IDs to sort in the given order |

#### GetRegions

Gets a collection of all Regions entities in a Store

***Signature:***

````csharp
IEnumerable<RegionReadOnly> GetRegions(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID the Store to fetch from |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `IEnumerable<RegionReadOnly>` | A list of read only Region entities |

---

***Signature:***

````csharp
IEnumerable<RegionReadOnly> GetRegions(Guid storeId, Guid countryId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID the Store to fetch from |
| `Guid` | `countryId` | The ID of the parent Country of the Region |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `IEnumerable<RegionReadOnly>` | A list of read only Region entities |

#### GetRegion

Gets a specific Region entity

***Signature:***

````csharp
RegionReadOnly GetRegion(Guid id);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `id` | The ID of the Region to fetch  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `RegionReadOnly` | A read only Region entity matching the provided criteria  |

---

***Signature:***

````csharp
RegionReadOnly GetRegion(Guid storeId, Guid countryId, string code);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store to fetch from |
| `Guid` | `countryId` | The ID of the parent Country of the Region |
| `string` | `code` | The Code of the Region to fetch  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `RegionReadOnly` | A read only Region entity matching the provided criteria  |

#### SaveRegion

Persists the given Region to the database

***Signature:***

````csharp
void SaveRegion(Region Region);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Region` | `Region` | The Region to save  |

#### DeleteRegion

Deletes the given Region

***Signature:***

````csharp
void DeleteRegion(Guid RegionId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `RegionId` | The ID of the Region to delete |

---

***Signature:***

````csharp
void DeleteRegion(Region entity);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Region` | `entity` | The Region to delete |

#### SortRegions

Sorted the Regions with the given IDs, by the given ID sequence

***Signature:***

````csharp
void SortRegions(Guid[] sortedIds);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid[]` | `sortedIds` | Sequence of Region IDs to sort in the given order |

### CountryService

**Description:** Default implementation of the [Vendr Country Service Interface](#icountryservice)  
**Namespace:** Vendr.Core.Services  
**Assembly:** Vendr.Core

<div class="mb-48"></div>

## Country Entities

### CountryReadOnly

**Description:** Read Only Country entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `Id` | The Country unique ID |
| `Guid` | `StoreId` | The ID of the Store this Country belongs to |
| `string` | `Code` | A unique Alias for the Country |
| `string` | `Name` | The Name of the Country |
| `Guid?` | `DefaultCurrencyId` | The ID of the Default Currency of the Country |
| `Guid?` | `DefaultPaymentMethodId` | The ID of the Default Payment Method of the Country |
| `Guid?` | `DefaultShippingMethodId` | The ID of the Default Shipping Method of the Country |
| `int` | `SortOrder` | The Sort Order of the Country |
| `bool` | `IsDeleted` | Flag indicating whether the Country is deleted |

#### AsWritable
Gets a writable version of the associated Country

***Signature:***

````csharp
Country AsWritable(IUnitOfWork uow);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUnitOfWork` | `uow` | An active Unit of Work to associate with this writable entity |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Country` | A writable version of the Country |

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

### Country

**Description:** Writable Country entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core  
**Inherits:** [ CountryReadOnly](#countryreadonly)

#### Create
Creates a Country entity

***Signature:***

````csharp
static Country Create(IUnitOfWork uow, Guid storeId, string code, string name, bool autoCreateRegions = false);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUnitOfWork` | `uow` | An active Unit of Work to associate with this writable entity |
| `Guid` | `storeId` | The ID of the Store this Country belongs to |
| `string` | `code` | A unique ISO Country Code for the Country |
| `string` | `name` | A Name for the Country |
| `bool` | `autoCreateRegions` | Auto create Regions based on the ISO 3166 Country Code |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Country` | A writable Country |

#### SetCode
Set the ISO Country Code of the Country

***Signature:***

````csharp
Country SetCode(string code);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `code` | A unique ISO Country Code for the Country |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `CountryReadOnly` | A read only version of the Country |

#### SetName
Set the Name of the Country

***Signature:***

````csharp
Country SetName(string name);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `name` | The Name of the Country |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `CountryReadOnly` | A read only version of the Country |

#### SetDefaultCurrency
Set the Default Currency of the Country

***Signature:***

````csharp
Country SetDefaultCurrency(CurrencyReadOnly currency);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CurrencyReadOnly` | `currency` | The Currency to set as the default Currency of the Country |
***Returns:***

| Type | Description |
| ---- | ----------- |
| `CountryReadOnly` | A read only version of the Country |

---

***Signature:***

````csharp
Country SetDefaultCurrency(Guid? currencyId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid?` | `currencyId` | The ID of the Currency to set as the default Currency of the Country |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `CountryReadOnly` | A read only version of the Country |

#### ClearDefaultCurrency
Clears the Default Currency of the Country

***Signature:***

````csharp
Country ClearDefaultCurrency();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `CountryReadOnly` | A read only version of the Country |

#### SetDefaultPaymentMethod
Set the Default PaymentMethod of the Country

***Signature:***

````csharp
Country SetDefaultPaymentMethod(PaymentMethodReadOnly paymentMethod);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `PaymentMethodReadOnly` | `paymentMethod` | The Payment Method to set as the default Payment Method of the Country |
***Returns:***

| Type | Description |
| ---- | ----------- |
| `CountryReadOnly` | A read only version of the Country |

---

***Signature:***

````csharp
Country SetDefaultPaymentMethod(Guid? paymentMethodId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid?` | `paymentMethodId` | The ID of the Payment Method to set as the default Payment Method of the Country |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `CountryReadOnly` | A read only version of the Country |

#### ClearDefaultPaymentMethod
Clears the Default PaymentMethod of the Country

***Signature:***

````csharp
Country ClearDefaultPaymentMethod();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `CountryReadOnly` | A read only version of the Country |

#### SetDefaultShippingMethod
Set the Default ShippingMethod of the Country

***Signature:***

````csharp
Country SetDefaultShippingMethod(ShippingMethodReadOnly shippingMethod);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `ShippingMethodReadOnly` | `shippingMethod` | The Shipping Method to set as the default Shipping Method of the Country |
***Returns:***

| Type | Description |
| ---- | ----------- |
| `CountryReadOnly` | A read only version of the Country |

---

***Signature:***

````csharp
Country SetDefaultShippingMethod(Guid? shippingMethodId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid?` | `shippingMethodId` | The ID of the Shipping Method to set as the default Shipping Method of the Country |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `CountryReadOnly` | A read only version of the Country |

#### ClearDefaultShippingMethod
Clears the Default ShippingMethod of the Country

***Signature:***

````csharp
Country ClearDefaultShippingMethod();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `CountryReadOnly` | A read only version of the Country |

#### SetSortOrder
Sets the Sort Order of a Country

***Signature:***

````csharp
Country SetSortOrder(int order);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `int` | `order` | The Order position of the Country |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Country` | An updated writable Country |








#### AsReadOnly
Converts a writable Country into a read only Country

***Signature:***

````csharp
CountryReadOnly AsReadOnly();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `CountryReadOnly` | A read only version of the Country |

<div class="mb-48"></div>

## Region Entities

### RegionReadOnly

**Description:** Read Only Region entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `Id` | The Region unique ID |
| `Guid` | `StoreId` | The ID of the Store this Region belongs to |
| `Guid` | `CountryId` | The ID of the Country this Region belongs to |
| `string` | `Code` | A unique Alias for the Region |
| `string` | `Name` | The Name of the Region |
| `Guid?` | `DefaultPaymentMethodId` | The ID of the Default Payment Method of the Region |
| `Guid?` | `DefaultShippingMethodId` | The ID of the Default Shipping Method of the Region |
| `int` | `SortOrder` | The Sort Order of the Region |
| `bool` | `IsDeleted` | Flag indicating whether the Region is deleted |

#### AsWritable
Gets a writable version of the associated Region

***Signature:***

````csharp
Region AsWritable(IUnitOfWork uow);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUnitOfWork` | `uow` | An active Unit of Work to associate with this writable entity |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Region` | A writable version of the Region |

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

### Region

**Description:** Writable Region entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core  
**Inherits:** [ RegionReadOnly](#regionreadonly)

#### Create
Creates a Region entity

***Signature:***

````csharp
static Region Create(IUnitOfWork uow, Guid storeId, Guid countryId, string code, string name);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUnitOfWork` | `uow` | An active Unit of Work to associate with this writable entity |
| `Guid` | `storeId` | The ID of the Store this Region belongs to |
| `Guid` | `countryId` | The ID of the Country this Region belongs to |
| `string` | `code` | A unique Region Code for the Region |
| `string` | `name` | A Name for the Region |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Region` | A writable Region |

#### SetCode
Set the Region Code of the Region

***Signature:***

````csharp
Region SetCode(string code);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `code` | A unique Region Code for the Region |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `RegionReadOnly` | A read only version of the Region |

#### SetName
Set the Name of the Region

***Signature:***

````csharp
Region SetName(string name);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `name` | The Name of the Region |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `RegionReadOnly` | A read only version of the Region |

#### SetDefaultPaymentMethod
Set the Default PaymentMethod of the Region

***Signature:***

````csharp
Region SetDefaultPaymentMethod(PaymentMethodReadOnly paymentMethod);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `PaymentMethodReadOnly` | `paymentMethod` | The Payment Method to set as the default Payment Method of the Region |
***Returns:***

| Type | Description |
| ---- | ----------- |
| `RegionReadOnly` | A read only version of the Region |

---

***Signature:***

````csharp
Region SetDefaultPaymentMethod(Guid? paymentMethodId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid?` | `paymentMethodId` | The ID of the Payment Method to set as the default Payment Method of the Region |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `RegionReadOnly` | A read only version of the Region |

#### ClearDefaultPaymentMethod
Clears the Default PaymentMethod of the Region

***Signature:***

````csharp
Region ClearDefaultPaymentMethod();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `RegionReadOnly` | A read only version of the Region |

#### SetDefaultShippingMethod
Set the Default ShippingMethod of the Region

***Signature:***

````csharp
Region SetDefaultShippingMethod(ShippingMethodReadOnly shippingMethod);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `ShippingMethodReadOnly` | `shippingMethod` | The Shipping Method to set as the default Shipping Method of the Region |
***Returns:***

| Type | Description |
| ---- | ----------- |
| `RegionReadOnly` | A read only version of the Region |

---

***Signature:***

````csharp
Region SetDefaultShippingMethod(Guid? shippingMethodId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid?` | `shippingMethodId` | The ID of the Shipping Method to set as the default Shipping Method of the Region |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `RegionReadOnly` | A read only version of the Region |

#### ClearDefaultShippingMethod
Clears the Default ShippingMethod of the Region

***Signature:***

````csharp
Region ClearDefaultShippingMethod();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `RegionReadOnly` | A read only version of the Region |

#### SetSortOrder
Sets the Sort Order of a Region

***Signature:***

````csharp
Region SetSortOrder(int order);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `int` | `order` | The Order position of the Region |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Region` | An updated writable Region |

<div class="mb-48"></div>

## Country Owned Entities

### Iso3166Country

**Description:** ISO 3166 Country owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `string` | `Name` | The name of the Country |
| `string` | `Code` | The ISO 3166 Code of the Country |
| `Iso3166CountryRegion[]` | `Regions` | Array of ISO 3166 Regions of the Country |

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

### Iso3166CountryRegion

**Description:** ISO 3166 Region of a Country owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `string` | `Name` | The name of the Region |
| `string` | `Code` | The ISO 3166 Code of the Region |

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

## Country Events

### Validation Events

#### ValidateCountryCreate

**Description:** Validation event fired when a Country is being created  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CountryReadOnly` | `Country` | The Country associated with this event |

#### ValidateCountryUpdate

**Description:** Validation event fired when a Country is being updated  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CountryReadOnly` | `Country` | The Country associated with this event |

#### ValidateCountrySave

**Description:** Validation event fired when a Country is being saved  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CountryReadOnly` | `Country` | The Country associated with this event |

#### ValidateCountryDelete

**Description:** Validation event fired when a Country is being deleted  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CountryReadOnly` | `Country` | The Country associated with this event |

#### ValidateCountryCodeChange

**Description:** Validation event fired when a Country Code is being deleted  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CountryReadOnly` | `Country` | The Country associated with this event |
| `ChangingValue<string>` | `Code` | The changing ISO Country Code of the Country |

#### ValidateCountryNameChange

**Description:** Validation event fired when a Country Name is being deleted  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CountryReadOnly` | `Country` | The Country associated with this event |
| `ChangingValue<string>` | `Name` | The changing Name of the Country |

#### ValidateCountryDefaultCurrencyChange

**Description:** Validation event fired when a Countries Default Currency is being deleted  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CountryReadOnly` | `Country` | The Country associated with this event |
| `ChangingValue<Guid?>` | `CurrencyId` | The ID of the Currency to use as the Default Currency of the Country |

#### ValidateCountryDefaultPaymentMethodChange

**Description:** Validation event fired when a Countries Default Payment Method is being deleted  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CountryReadOnly` | `Country` | The Country associated with this event |
| `ChangingValue<Guid?>` | `PaymentMethodId` | The ID of the Payment Method to use as the Default Payment Method of the Country |

#### ValidateCountryDefaultShippingMethodChange

**Description:** Validation event fired when a Countries Default Shipping Method is being deleted  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CountryReadOnly` | `Country` | The Country associated with this event |
| `ChangingValue<Guid?>` | `ShippingMethodId` | The ID of the Shipping Method to use as the Default Shipping Method of the Country |

### Notification Events

#### CountryCreatingNotification

**Description:** Notification event fired before a Country is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Country` | `Country` | The Country associated with this event |

#### CountryCreatedNotification

**Description:** Notification event fired after a Country is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CountryReadOnly` | `Country` | The Country associated with this event |

#### CountryUpdatingNotification

**Description:** Notification event fired before a Country is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Country` | `Country` | The Country associated with this event |

#### CountryUpdatedNotification

**Description:** Notification event fired after a Country is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CountryReadOnly` | `Country` | The Country associated with this event |

#### CountrySavingNotification

**Description:** Notification event fired before a Country is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Country` | `Country` | The Country associated with this event |

#### CountrySavedNotification

**Description:** Notification event fired after a Country is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CountryReadOnly` | `Country` | The Country associated with this event |

#### CountryDeletingNotification

**Description:** Notification event fired before a Country is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Country` | `Country` | The Country associated with this event |

#### CountryDeletedNotification

**Description:** Notification event fired after a Country is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CountryReadOnly` | `Country` | The Country associated with this event |

## Region Events

### Validation Events

#### ValidateRegionCreate

**Description:** Validation event fired when a Region is being created  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `RegionReadOnly` | `Region` | The Region associated with this event |

#### ValidateRegionUpdate

**Description:** Validation event fired when a Region is being updated  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `RegionReadOnly` | `Region` | The Region associated with this event |

#### ValidateRegionSave

**Description:** Validation event fired when a Region is being saved  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `RegionReadOnly` | `Region` | The Region associated with this event |

#### ValidateRegionDelete

**Description:** Validation event fired when a Region is being deleted  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `RegionReadOnly` | `Region` | The Region associated with this event |

#### ValidateRegionCodeChange

**Description:** Validation event fired when a Region Code is being deleted  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `RegionReadOnly` | `Region` | The Region associated with this event |
| `ChangingValue<string>` | `Code` | The changing ISO Region Code of the Region |

#### ValidateRegionNameChange

**Description:** Validation event fired when a Region Name is being deleted  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `RegionReadOnly` | `Region` | The Region associated with this event |
| `ChangingValue<string>` | `Name` | The changing Name of the Region |

#### ValidateRegionDefaultPaymentMethodChange

**Description:** Validation event fired when a Countries Default Payment Method is being deleted  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `RegionReadOnly` | `Region` | The Region associated with this event |
| `ChangingValue<Guid?>` | `PaymentMethodId` | The ID of the Payment Method to use as the Default Payment Method of the Region |

#### ValidateRegionDefaultShippingMethodChange

**Description:** Validation event fired when a Countries Default Shipping Method is being deleted  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `RegionReadOnly` | `Region` | The Region associated with this event |
| `ChangingValue<Guid?>` | `ShippingMethodId` | The ID of the Shipping Method to use as the Default Shipping Method of the Region |

### Notification Events

#### RegionCreatingNotification

**Description:** Notification event fired before a Region is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Region` | `Region` | The Region associated with this event |

#### RegionCreatedNotification

**Description:** Notification event fired after a Region is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `RegionReadOnly` | `Region` | The Region associated with this event |

#### RegionUpdatingNotification

**Description:** Notification event fired before a Region is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Region` | `Region` | The Region associated with this event |

#### RegionUpdatedNotification

**Description:** Notification event fired after a Region is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `RegionReadOnly` | `Region` | The Region associated with this event |

#### RegionSavingNotification

**Description:** Notification event fired before a Region is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Region` | `Region` | The Region associated with this event |

#### RegionSavedNotification

**Description:** Notification event fired after a Region is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `RegionReadOnly` | `Region` | The Region associated with this event |

#### RegionDeletingNotification

**Description:** Notification event fired before a Region is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Region` | `Region` | The Region associated with this event |

#### RegionDeletedNotification

**Description:** Notification event fired after a Region is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `RegionReadOnly` | `Region` | The Region associated with this event |