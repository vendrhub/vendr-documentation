---
title: Countries & Regions
description: Country and Region related APIs in Vendr, the eCommerce solution for Umbraco v8+
---

## Country Service

### ICountryService

#### GetCountries

Gets a collection of all Country entities

***Signature:***

````csharp
IEnumerable<CountryReadOnly> GetCountries();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `IEnumerable<CountryReadOnly>` | A list of read only Country entities |

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
CountryReadOnly GetCountry(string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `alias` | The Alias of the Country to fetch  |

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

Sorted the Countries with the given IDs, but the given ID sequence

***Signature:***

````csharp
void SortCountries(Guid[] sortedIds);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid[]` | `sortedIds` | Sequence of Country IDs to sort in the given order |

### Countrieservice

**Description:** Default implementation of the [Vendr Country Service Interface](#iCountrieservice)  
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
| `string` | `Alias` | A unique Alias for the Country |
| `string` | `Name` | The Name of the Country |
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

### Country

**Description:** Writable Country entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

See [Vendr.Core.Models.CountryReadOnly Properties](#properties)

#### Create
Creates a Country entity

***Signature:***

````csharp
static Country Create(IUnitOfWork uow);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUnitOfWork` | `uow` | An active Unit of Work to associate with this writable entity |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Country` | A writable Country |

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

## Country Owned Entities

<div class="mb-48"></div>

## Country Events

### Validation Events

#### ValidateCountryCreate

**Description:** Validation event fired when an Country is being created  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CountryReadOnly` | `Country` | The Country associated with this event |

#### ValidateCountryUpdate

**Description:** Validation event fired when an Country is being updated  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CountryReadOnly` | `Country` | The Country associated with this event |

#### ValidateCountrySave

**Description:** Validation event fired when an Country is being saved  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CountryReadOnly` | `Country` | The Country associated with this event |

#### ValidateCountryDelete

**Description:** Validation event fired when an Country is being deleted  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CountryReadOnly` | `Country` | The Country associated with this event |

### Notification Events

#### CountryCreatingNotification

**Description:** Notification event fired before an Country is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Country` | `Country` | The Country associated with this event |

#### CountryCreatedNotification

**Description:** Notification event fired after an Country is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CountryReadOnly` | `Country` | The Country associated with this event |

#### CountryUpdatingNotification

**Description:** Notification event fired before an Country is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Country` | `Country` | The Country associated with this event |

#### CountryUpdatedNotification

**Description:** Notification event fired after an Country is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CountryReadOnly` | `Country` | The Country associated with this event |

#### CountrySavingNotification

**Description:** Notification event fired before an Country is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Country` | `Country` | The Country associated with this event |

#### CountrySavedNotification

**Description:** Notification event fired after an Country is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CountryReadOnly` | `Country` | The Country associated with this event |

#### CountryDeletingNotification

**Description:** Notification event fired before an Country is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Country` | `Country` | The Country associated with this event |

#### CountryDeletedNotification

**Description:** Notification event fired after an Country is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CountryReadOnly` | `Country` | The Country associated with this event |

### Region Events

### Validation Events

#### ValidateRegionCreate

**Description:** Validation event fired when an Region is being created  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `RegionReadOnly` | `Region` | The Region associated with this event |

#### ValidateRegionUpdate

**Description:** Validation event fired when an Region is being updated  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `RegionReadOnly` | `Region` | The Region associated with this event |

#### ValidateRegionSave

**Description:** Validation event fired when an Region is being saved  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `RegionReadOnly` | `Region` | The Region associated with this event |

#### ValidateRegionDelete

**Description:** Validation event fired when an Region is being deleted  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `RegionReadOnly` | `Region` | The Region associated with this event |

### Notification Events

#### RegionCreatingNotification

**Description:** Notification event fired before an Region is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Region` | `Region` | The Region associated with this event |

#### RegionCreatedNotification

**Description:** Notification event fired after an Region is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `RegionReadOnly` | `Region` | The Region associated with this event |

#### RegionUpdatingNotification

**Description:** Notification event fired before an Region is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Region` | `Region` | The Region associated with this event |

#### RegionUpdatedNotification

**Description:** Notification event fired after an Region is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `RegionReadOnly` | `Region` | The Region associated with this event |

#### RegionSavingNotification

**Description:** Notification event fired before an Region is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Region` | `Region` | The Region associated with this event |

#### RegionSavedNotification

**Description:** Notification event fired after an Region is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `RegionReadOnly` | `Region` | The Region associated with this event |

#### RegionDeletingNotification

**Description:** Notification event fired before an Region is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Region` | `Region` | The Region associated with this event |

#### RegionDeletedNotification

**Description:** Notification event fired after an Region is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `RegionReadOnly` | `Region` | The Region associated with this event |