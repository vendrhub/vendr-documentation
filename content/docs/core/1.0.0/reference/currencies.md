---
title: Currencies
description: Currency related APIs in Vendr, the eCommerce solution for Umbraco v8+
---

## Currency Service

### ICurrencyService

**Description:** Interface of the Vendr Currency Service  
**Namespace:** Vendr.Core.Services  
**Assembly:** Vendr.Core

#### CurrencyExists

Checks to see if a Currency exists in a Store with the given ISO Code

***Signature:***

````csharp
bool CurrencyExists(Guid storeId, string code);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Currencies belong to |
| `string` | `code` | The Code of the Currency to check  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `bool` | True if the Currency exists, otherwise false |

#### GetCurrencies

Gets a collection of all Currency entities in a Store

***Signature:***

````csharp
IEnumerable<CurrencyReadOnly> GetCurrencies(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Currencies belong to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `IEnumerable<CurrencyReadOnly>` | A list of read only Currency entities |

#### GetCurrenciesAllowedIn

Gets a collection of all Currency allowed in a Country

***Signature:***

````csharp
IEnumerable<CurrencyReadOnly> GetCurrenciesAllowedIn(Guid countryId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country the Currencies are allowed in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `IEnumerable<CurrencyReadOnly>` | A list of read only Currency entities |

#### GetCurrency

Gets a specific Currency entity

***Signature:***

````csharp
CurrencyReadOnly GetCurrency(Guid id);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `id` | The ID of the Currency to fetch  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `CurrencyReadOnly` | A read only Currency entity matching the provided criteria  |

---

***Signature:***

````csharp
CurrencyReadOnly GetCurrency(Guid storeId, string code);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Currency belong to |
| `string` | `code` | The Code of the Currency to fetch  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `CurrencyReadOnly` | A read only Currency entity matching the provided criteria  |

#### SaveCurrency

Persists the given Currency to the database

***Signature:***

````csharp
void SaveCurrency(Currency currency);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Currency` | `currency` | The Currency to save  |

#### DeleteCurrency

Deletes the given Currency

***Signature:***

````csharp
void DeleteCurrency(Guid CurrencyId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `CurrencyId` | The ID of the Currency to delete |

---

***Signature:***

````csharp
void DeleteCurrency(Currency currency);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Currency` | `currency` | The Currency to delete |

#### SortCurrencies

Sorted the Currencies with the given IDs, by the given ID sequence

***Signature:***

````csharp
void SortCurrencies(Guid[] sortedIds);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid[]` | `sortedIds` | Sequence of Currency IDs to sort in the given order |

### CurrencyService

**Description:** Default implementation of the [Vendr Currency Service Interface](#icurrencyservice)  
**Namespace:** Vendr.Core.Services  
**Assembly:** Vendr.Core

<div class="mb-48"></div>

## Currency Entities

### CurrencyReadOnly

**Description:** Read Only Currency entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `Id` | The Currency unique ID |
| `Guid` | `StoreId` | The ID of the Store this Currency belongs to |
| `string` | `Code` | A unique Code for the Currency |
| `string` | `Name` | The Name of the Currency |
| `string` | `CultureName` | The Culture Name of the Currency |
| `string` | `FormatTemplate` | The custom string format template for formatting the Currency |
| `IReadOnlyCollection <AllowedCountry>` | `AllowedCountries` | A collection of Countries this Currency is allowed in |
| `int` | `SortOrder` | The Sort Order of the Currency |
| `bool` | `IsDeleted` | Flag indicating whether the Currency is deleted |

#### IsAllowedInCountry
Checks whether the given Country is allowed by the Currency

***Signature:***

````csharp
bool IsAllowedInCountry(CountryReadOnly country);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country to check if allowed by the Currency |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `bool` | Flag indicating whether the Country is allowed by the Currency |

---

***Signature:***

````csharp
bool IsAllowedInCountry(Guid countryId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country to check if allowed by the Currency |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `bool` | Flag indicating whether the Country is allowed by the Currency |

#### AsWritable
Gets a writable version of the associated Currency

***Signature:***

````csharp
Currency AsWritable(IUnitOfWork uow);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUnitOfWork` | `uow` | An active Unit of Work to associate with this writable entity |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Currency` | A writable version of the Currency |

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

### Currency

**Description:** Writable Currency entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core  
**Inherits:** [ CurrencyReadOnly](#currencyreadonly) 

#### Create
Creates a Currency entity

***Signature:***

````csharp
static Currency Create(IUnitOfWork uow, Guid storeId, string code, string name, string cultureName);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUnitOfWork` | `uow` | An active Unit of Work to associate with this writable entity |
| `Guid` | `storeId` | The ID of the Store this Currency belongs to |
| `string` | `code` | A unique Currency Code for the Currency |
| `string` | `name` | The Name of the Currency |
| `string` | `cultureName` | The Name of the Culture of the Currency |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Currency` | A writable Currency |

#### SetCode
Set the Currency Code of the Currency

***Signature:***

````csharp
Currency SetCode(string code);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `code` | A unique Currency Code for the Currency |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Currency` | A read only version of the Currency |

#### SetName
Set the Name of the Currency

***Signature:***

````csharp
Currency SetName(string name);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `name` | The Name of the Currency |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Currency` | A read only version of the Currency |

#### SetCulture
Set the Culture of the Currency

***Signature:***

````csharp
Currency SetCulture(string cultureName);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `cultureName` | The Name of the Culture of the Currency |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Currency` | A read only version of the Currency |

#### SetCustomFormatTemplate
Set a Custom Format Template for the Currency

***Signature:***

````csharp
Currency SetCustomFormatTemplate(string formatTemplate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `formatTemplate` | A string format template to format the Currency with |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Currency` | A read only version of the Currency |

#### AllowInCountry
Allows a Currency for a Country

***Signature:***

````csharp
Currency AllowInCountry(CountryReadOnly country);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country to allow the Currency in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Currency` | A read only version of the Currency |

---

***Signature:***

````csharp
Currency AllowInCountry(Guid countryId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country to allow the Currency in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Currency` | A read only version of the Currency |

#### DisallowInCountry
Disallows a Currency for a Country

***Signature:***

````csharp
Currency DisallowInCountry(CountryReadOnly country);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country to disallow the Currency in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Currency` | A read only version of the Currency |

---

***Signature:***

````csharp
Currency DisallowInCountry(Guid countryId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `countryId` | The ID of the Country to disallow the Currency in |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Currency` | A read only version of the Currency |

#### SetSortOrder
Sets the Sort Order of a Currency

***Signature:***

````csharp
Currency SetSortOrder(int order);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `int` | `order` | The Order position of the Currency |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Currency` | An updated writable Currency |


#### AsReadOnly
Converts a writable Currency into a read only Currency

***Signature:***

````csharp
CurrencyReadOnly AsReadOnly();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `CurrencyReadOnly` | A read only version of the Currency |

<div class="mb-48"></div>

## Currency Owned Entities

### AllowedCountry

**Description:** Currency Allowed Country owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `CountryId` | The ID of the Allowed Country |

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

## Currency Events

### Validation Events

#### ValidateCurrencyCreate

**Description:** Validation event fired when a Currency is being created  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CurrencyReadOnly` | `Currency` | The Currency associated with this event |

#### ValidateCurrencyUpdate

**Description:** Validation event fired when a Currency is being updated  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CurrencyReadOnly` | `Currency` | The Currency associated with this event |

#### ValidateCurrencySave

**Description:** Validation event fired when a Currency is being saved  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CurrencyReadOnly` | `Currency` | The Currency associated with this event |

#### ValidateCurrencyDelete

**Description:** Validation event fired when a Currency is being deleted  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CurrencyReadOnly` | `Currency` | The Currency associated with this event |

#### ValidateCurrencyCodeChange

**Description:** Validation event fired when a Currency Code is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CurrencyReadOnly` | `Currency` | The Currency associated with this event |
| `ChangingValue<string>` | `Code` | The changing Code of the Currency |

#### ValidateCurrencyNameChange

**Description:** Validation event fired when a Currency Name is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CurrencyReadOnly` | `Currency` | The Currency associated with this event |
| `ChangingValue<string>` | `Name` | The changing Name of the Currency |

#### ValidateCurrencyCultureChange

**Description:** Validation event fired when a Currency Culture is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CurrencyReadOnly` | `Currency` | The Currency associated with this event |
| `ChangingValue<string>` | `CultureName` | The changing Name of the Culture of the Currency |

#### ValidateCurrencyCustomFormatTemplateChange

**Description:** Validation event fired when a Currency Format Template is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CurrencyReadOnly` | `Currency` | The Currency associated with this event |
| `ChangingValue<string>` | `FormatTemplate` | The changing Format Template for the Currency |

#### ValidateCurrencyAllowInCountry

**Description:** Validation event fired when a Currency is being allowed in a Country  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CurrencyReadOnly` | `Currency` | The Currency associated with this event |
| `Guid` | `CountryId` | The ID of the Country the Currency is being allowed in |

#### ValidateCurrencyDisallowInCountry

**Description:** Validation event fired when a Currency is being disallowed in a Country  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CurrencyReadOnly` | `Currency` | The Currency associated with this event |
| `Guid` | `CountryId` | The ID of the Country the Currency is being disallowed in |


### Notification Events

#### CurrencyCreatingNotification

**Description:** Notification event fired before a Currency is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Currency` | `Currency` | The Currency associated with this event |

#### CurrencyCreatedNotification

**Description:** Notification event fired after a Currency is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CurrencyReadOnly` | `Currency` | The Currency associated with this event |

#### CurrencyUpdatingNotification

**Description:** Notification event fired before a Currency is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Currency` | `Currency` | The Currency associated with this event |

#### CurrencyUpdatedNotification

**Description:** Notification event fired after a Currency is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CurrencyReadOnly` | `Currency` | The Currency associated with this event |

#### CurrencySavingNotification

**Description:** Notification event fired before a Currency is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Currency` | `Currency` | The Currency associated with this event |

#### CurrencySavedNotification

**Description:** Notification event fired after a Currency is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CurrencyReadOnly` | `Currency` | The Currency associated with this event |

#### CurrencyDeletingNotification

**Description:** Notification event fired before a Currency is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Currency` | `Currency` | The Currency associated with this event |

#### CurrencyDeletedNotification

**Description:** Notification event fired after a Currency is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `CurrencyReadOnly` | `Currency` | The Currency associated with this event |