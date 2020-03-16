---
title: Taxes
description: Tax related APIs in Vendr, the eCommerce solution for Umbraco v8+
---

## Tax Service

### ITaxService

#### GetTaxClasses

Gets a collection of all Tax Class entities in a Store

***Signature:***

````csharp
IEnumerable<TaxClassReadOnly> GetTaxClasses(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Tax Classes belong to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `IEnumerable<TaxClassReadOnly>` | A list of read only Tax Class entities |

#### GetTaxClass

Gets a specific Tax Class entity

***Signature:***

````csharp
TaxClassReadOnly GetTaxClass(Guid id);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `id` | The ID of the Tax Class to fetch  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxClassReadOnly` | A read only Tax Class entity matching the provided criteria  |

---

***Signature:***

````csharp
TaxClassReadOnly GetTaxClass(Guid storeId, string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Tax Class belong to |
| `string` | `alias` | The unique Alias of the Tax Class to fetch  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxClassReadOnly` | A read only Tax Class entity matching the provided criteria  |

#### SaveTaxClass

Persists the given Tax Class to the database

***Signature:***

````csharp
void SaveTaxClass(TaxClass orderStatus);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `TaxClass` | `orderStatus` | The Tax Class to save  |

#### DeleteTaxClass

Deletes the given Tax Class

***Signature:***

````csharp
void DeleteTaxClass(Guid orderStatusId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `orderStatusId` | The ID of the TaxClass to delete |

---

***Signature:***

````csharp
void DeleteTaxClass(TaxClass orderStatus);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `TaxClass` | `orderStatus` | The Tax Class to delete |

#### SortTaxClasses

Sorted the Tax Classes with the given IDs, by the given ID sequence

***Signature:***

````csharp
void SortTaxClasses(Guid[] sortedIds);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid[]` | `sortedIds` | Sequence of Tax Class IDs to sort in the given order |

### TaxService

**Description:** Default implementation of the [Vendr Tax Service Interface](#itaxservice)  
**Namespace:** Vendr.Core.Services  
**Assembly:** Vendr.Core

<div class="mb-48"></div>

## TaxClass Entities

### TaxClassReadOnly

**Description:** Read Only Tax Class entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `Id` | The Tax Class unique ID |
| `Guid` | `StoreId` | The ID of the Store this Tax Class belongs to |
| `string` | `Alias` | A unique Alias for the Tax Class |
| `string` | `Name` | The Name of the Tax Class |
| `TaxRate` | `DefaultTaxRate` | A default Tax Rate for the Tax Class |
| `IReadOnlyCollection <CountryRegionTaxRate>` | `CountryRegionTaxRates` | A collection of Country / Region specific Tax Rates for the Tax Class |
| `int` | `SortOrder` | The Sort Order of the Tax Class |
| `bool` | `IsDeleted` | Flag indicating whether the Tax Class is deleted |

#### GetTaxRate
Gets the Tax Rate of the Tax Class

***Signature:***

````csharp
TaxRate GetTaxRate(TaxSource taxSource);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `TaxSource` | `taxSource` | The Tax Source to get the Tax Rate of the Tax Class for |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxRate` | The Tax Rate for the supplied criteria |

#### AsWritable
Gets a writable version of the associated Tax Class

***Signature:***

````csharp
TaxClass AsWritable(IUnitOfWork uow);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUnitOfWork` | `uow` | An active Unit of Work to associate with this writable entity |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxClass` | A writable version of the Tax Class |

### TaxClass

**Description:** Writable Tax Class entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core  
**Inherits:** [ TaxClassReadOnly](#orderstatusreadonly) 

#### Create
Creates a Tax Class entity

***Signature:***

````csharp
static TaxClass Create(IUnitOfWork uow, Guid storeId, string alias, string name, TaxRate defaultTaxRate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUnitOfWork` | `uow` | An active Unit of Work to associate with this writable entity |
| `Guid` | `storeId` | The ID of the Store this Tax Class belongs to |
| `string` | `alias` | A unique Alias for the Tax Class |
| `string` | `name` | The Name of the Tax Class |
| `TaxRate` | `defaultTaxRate` | The default Tax Rate of the Tax Class |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxClass` | A writable TaxClass |

#### SetAlias
Set the Alias of the Tax Class

***Signature:***

````csharp
TaxClass SetAlias(string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `alias` | A unique Alias for the Tax Class |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxClass` | A read only version of the Tax Class |

#### SetName
Set the Name of the Tax Class

***Signature:***

````csharp
TaxClass SetName(string name);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `name` | The Name of the Tax Class |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxClass` | A read only version of the Tax Class |

---

***Signature:***

````csharp
TaxClass SetName(string name, string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `name` | The Name of the Tax Class |
| `string` | `alias` | A unique Alias for the Tax Class |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxClass` | A read only version of the Tax Class |

#### SetDefaultTaxRate
Set the default Tax Rate of the Tax Class

***Signature:***

````csharp
TaxClass SetDefaultTaxRate(TaxRate taxRate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `TaxRate` | `taxRate` | The Tax Rate to set the default Tax Rate of Tax Class to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxClass` | A read only version of the Tax Class |

#### SetCountryTaxRate
Set the Country specific Tax Rate of the Tax Class

***Signature:***

````csharp
TaxClass SetCountryTaxRate(CountryReadOnly country, TaxRate taxRate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country of the Tax Rate to set |
| `TaxRate` | `taxRate` | The Tax Rate to set the Country specific Tax Rate of Tax Class to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxClass` | A read only version of the Tax Class |

---

***Signature:***

````csharp
TaxClass SetCountryTaxRate(Guid countryId, TaxRate taxRate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country of the Tax Rate to set |
| `TaxRate` | `taxRate` | The Tax Rate to set the Country specific Tax Rate of Tax Class to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxClass` | A read only version of the Tax Class |

#### SetRegionTaxRate
Set the Region specific Tax Rate of the Tax Class

***Signature:***

````csharp
TaxClass SetRegionTaxRate(RegionReadOnly region, TaxRate taxRate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `RegionReadOnly` | `region` | The Region of the Tax Rate to set |
| `TaxRate` | `taxRate` | The Tax Rate to set the Region specific Tax Rate of Tax Class to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxClass` | A read only version of the Tax Class |

---

***Signature:***

````csharp
TaxClass SetRegionTaxRate(Guid regionId, TaxRate taxRate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `regionId` | The ID of the Region of the Tax Rate to set |
| `TaxRate` | `taxRate` | The Tax Rate to set the Region specific Tax Rate of Tax Class to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxClass` | A read only version of the Tax Class |


#### ClearDefaultTaxRate
Clear the default Tax Rate of the Tax Class

***Signature:***

````csharp
TaxClass ClearDefaultTaxRate();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxClass` | A read only version of the Tax Class |

#### ClearCountryTaxRate
Clear the Country specific Tax Rate of the Tax Class

***Signature:***

````csharp
TaxClass ClearCountryTaxRate(CountryReadOnly country);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country of the Tax Rate to clear |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxClass` | A read only version of the Tax Class |

---

***Signature:***

````csharp
TaxClass ClearCountryTaxRate(Guid countryId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country of the Tax Rate to clear |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxClass` | A read only version of the Tax Class |


#### ClearRegionTaxRate
Clear the Region specific Tax Rate of the Tax Class

***Signature:***

````csharp
TaxClass ClearRegionTaxRate(RegionReadOnly region);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `RegionReadOnly` | `region` | The Region of the Tax Rate to clear |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxClass` | A read only version of the Tax Class |

---

***Signature:***

````csharp
TaxClass ClearRegionTaxRate(Guid regionId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `regionId` | The ID of the Region of the Tax Rate to clear |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxClass` | A read only version of the Tax Class |

#### ClearTaxRatesForCountry
Clear all Country specific Tax Rates of the Tax Class

***Signature:***

````csharp
TaxClass ClearTaxRatesForCountry(CountryReadOnly country);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country of the Tax Rates to clear |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxClass` | A read only version of the Tax Class |

---

***Signature:***

````csharp
TaxClass ClearTaxRatesForCountry(Guid countryId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country of the Tax Rates to clear |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxClass` | A read only version of the Tax Class |

#### SetSortOrder
Sets the Sort Order of a Tax Class

***Signature:***

````csharp
TaxClass SetSortOrder(int order);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `int` | `order` | The Order position of the Tax Class |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxClass` | An updated writable Tax Class |


#### AsReadOnly
Converts a writable Tax Class into a read only Tax Class

***Signature:***

````csharp
TaxClassReadOnly AsReadOnly();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxClassReadOnly` | A read only version of the Tax Class |

<div class="mb-48"></div>


## Tax Class Owned Entities

### CountryRegionTaxRate

**Description:** Country Region Tax Rate owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `CountryId` | The ID of the Country |
| `Guid?` | `RegionId` | The ID of the Region |
| `TaxRate` | `TaxRate` | The TaxRate of the Country / Region |

<div class="mb-48"></div>

## TaxClass Events

### Validation Events

#### ValidateTaxClassCreate

**Description:** Validation event fired when an Tax Class is being created  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `TaxClassReadOnly` | `TaxClass` | The Tax Class associated with this event |

#### ValidateTaxClassUpdate

**Description:** Validation event fired when an Tax Class is being updated  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `TaxClassReadOnly` | `TaxClass` | The Tax Class associated with this event |

#### ValidateTaxClassSave

**Description:** Validation event fired when an Tax Class is being saved  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `TaxClassReadOnly` | `TaxClass` | The Tax Class associated with this event |

#### ValidateTaxClassDelete

**Description:** Validation event fired when an Tax Class is being deleted  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `TaxClassReadOnly` | `TaxClass` | The Tax Class associated with this event |

#### ValidateTaxClassAliasChange

**Description:** Validation event fired when an Tax Class Alias is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `TaxClassReadOnly` | `TaxClass` | The Tax Class associated with this event |
| `ChangingValue<string>` | `Alias` | The changing Alias of the Tax Class |

#### ValidateTaxClassNameChange

**Description:** Validation event fired when an Tax Class Name is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `TaxClassReadOnly` | `TaxClass` | The Tax Class associated with this event |
| `ChangingValue<string>` | `Name` | The changing Name of the Tax Class |

#### ValidateTaxClassTaxRateChange

**Description:** Validation event fired when a Tax Class Tax Rate is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `TaxClassReadOnly` | `TaxClass` | The Tax Class associated with this event |
| `ChangingValue<TaxRate>` | `TaxRate` | The changing Tax Rate of the Tax Class |
| `Guid?` | `CountryId` | The ID of the Country of the Tax Rate |
| `Guid?` | `RegionId` | The ID of the Country of the Tax Rate |

#### ValidateTaxClassClearTaxRates

**Description:** Validation event fired when a Tax Class Tax Rates are being cleared   
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `TaxClassReadOnly` | `TaxClass` | The Tax Class associated with this event |
| `Guid?` | `CountryId` | The ID of the Country of the Tax Rates being cleared |

### Notification Events

#### TaxClassCreatingNotification

**Description:** Notification event fired before an Tax Class is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `TaxClass` | `TaxClass` | The Tax Class associated with this event |

#### TaxClassCreatedNotification

**Description:** Notification event fired after an Tax Class is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `TaxClassReadOnly` | `TaxClass` | The Tax Class associated with this event |

#### TaxClassUpdatingNotification

**Description:** Notification event fired before an Tax Class is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `TaxClass` | `TaxClass` | The Tax Class associated with this event |

#### TaxClassUpdatedNotification

**Description:** Notification event fired after an Tax Class is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `TaxClassReadOnly` | `TaxClass` | The Tax Class associated with this event |

#### TaxClassSavingNotification

**Description:** Notification event fired before an Tax Class is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `TaxClass` | `TaxClass` | The Tax Class associated with this event |

#### TaxClassSavedNotification

**Description:** Notification event fired after an Tax Class is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `TaxClassReadOnly` | `TaxClass` | The Tax Class associated with this event |

#### TaxClassDeletingNotification

**Description:** Notification event fired before an Tax Class is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `TaxClass` | `TaxClass` | The Tax Class associated with this event |

#### TaxClassDeletedNotification

**Description:** Notification event fired after an Tax Class is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `TaxClassReadOnly` | `TaxClass` | The Tax Class associated with this event |