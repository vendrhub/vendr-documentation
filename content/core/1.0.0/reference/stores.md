---
title: Stores
description: Store related APIs in Vendr, the eCommerce solution for Umbraco v8+
---

## Store Service

### IStoreService

#### GetStores

Gets a collection of all Store entities

***Signature:***

````csharp
IEnumerable<StoreReadOnly> GetStores();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `IEnumerable<StoreReadOnly>` | A list of read only Store entities |

#### GetStore

Gets a specific Store entity

***Signature:***

````csharp
StoreReadOnly GetStore(Guid id);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `id` | The ID of the Store to fetch  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `StoreReadOnly` | A read only Store entity matching the provided criteria  |

---

***Signature:***

````csharp
StoreReadOnly GetStore(string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `alias` | The Alias of the Store to fetch  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `StoreReadOnly` | A read only Store entity matching the provided criteria  |

#### SaveStore

Persists the given Store to the database

***Signature:***

````csharp
void SaveStore(Store store);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Store` | `store` | The Store to save  |

#### DeleteStore

Deletes the given Store

***Signature:***

````csharp
void DeleteStore(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store to delete |

---

***Signature:***

````csharp
void DeleteStore(Store entity);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Store` | `entity` | The Store to delete |

#### SortStores

Sorted the Stores with the given IDs, but the given ID sequence

***Signature:***

````csharp
void SortStores(Guid[] sortedIds);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid[]` | `sortedIds` | Sequence of Store IDs to sort in the given order |

### StoreService

**Description:** Default implementation of the [Vendr Store Service Interface](#istoreservice)  
**Namespace:** Vendr.Core.Services  
**Assembly:** Vendr.Core

<div class="mb-48"></div>

## Store Entities

### StoreReadOnly

**Description:** Read Only Store entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `Id` | The Store unique ID |
| `string` | `Alias` | A unique Alias for the Store |
| `string` | `Name` | The Name of the Store |
| `Guid?` | `DefaultCountryId` | The ID of the Default Country for the Store |
| `Guid?` | `DefaultTaxClassId` | The ID of the Default Tax Class for the Store |
| `Guid?` | `DefaultOrderStatusId` | The ID of the Default Order Status for the Store |
| `Guid?` | `ErrorOrderStatusId` | The ID of the Error Order Status for the Store |
| `bool` | `PricesIncludeTax` | Flag indicating whether all prices entered for this Store already include sales TAX |
| `TimeSpan?` | `CookieTimeout` | The length of time to maintain a Session Cookie. If `null`, no Cookie will be used |
| `Guid?` | `ConfirmationEmailTemplateId` | The ID of the Confirmation Email Template for the Store |
| `Guid?` | `ErrorEmailTemplateId` | The ID of the Error Email Template for the Store |
| `string` | `CartNumberTemplate` | A string format template to use when generating Cart Numbers for the Store |
| `string` | `OrderNumberTemplate` | A string format template to use when generating Order Numbers for the Store |
| `IReadOnlyList<string>` | `ProductPropertyAliases` | A list of Product Property Aliases to [automatically copy](../../key-concepts/properties/#automatic-properties) to an Order Line when adding a Product to an Order for this Store |
| `IReadOnlyList<string>` | `ProductUniquenessPropertyAliases` | A list of Product Property Aliases to [identify unique Order Lines](../../key-concepts/properties/#product-uniqueness-properties) when adding a Product to an Order for this Store |
| `int` | `GiftCardCodeLength` | The length of automatically generated Gift Card codes for this Store |
| `int` | `GiftCardDaysValid` | The default number of days Gift Cards should be valid for this Store |
| `string` | `GiftCardCodeTemplate` | A string format template to use when generating Gift Card Codes for the Store |
| `string` | `OrderEditorConfig` | Path to an [Order Editor Config](../../key-concepts/order-editor-config/) file to use for this Store |
| `IReadOnlyList <AllowedUser>` | `AllowedUsers` | A list of Allowed Users who can access this Store |
| `IReadOnlyList <AllowedUserRole>` | `AllowedUserRoles` | A list of Allowed User Roles who can access this Store |
| `Guid?` | `ShareStockFromStoreId` | The ID of a Store to share stock levels with |
| `int` | `SortOrder` | The Sort Order of the Store |
| `bool` | `IsDeleted` | Flag indicating whether the Store is deleted |

#### IsAllowed
Determines whether given User is allowed access to the Store

***Signature:***

````csharp
bool IsAllowed(string userId, IEnumerable<string> roles);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `userId` | ID of a User to check has access |
| `IEnumerable<string>` | `roles` | A list of Roles to check has access |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `bool` | Flag identifying whether the given User is allowed access the Store or not |

---

***Signature:***

````csharp
bool IsAllowed(IUser user);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUser` | `user` | An Umbraco User to check has access |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `bool` | Flag identifying whether the given User is allowed access the Store or not |

#### AsWritable
Gets a writable version of the associated Store

***Signature:***

````csharp
Store AsWritable(IUnitOfWork uow);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUnitOfWork` | `uow` | An active Unit of Work to associate with this writable entity |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | A writable version of the Store |

### Store

**Description:** Writable Store entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

See [Vendr.Core.Models.StoreReadOnly Properties](#properties)

#### Create
Creates a Store entity

***Signature:***

````csharp
static Store Create(IUnitOfWork uow, string alias, string name);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUnitOfWork` | `uow` | An active Unit of Work to associate with this writable entity |
| `string` | `alias` | An Alias for this Store |
| `string` | `name` | A Name for this Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | A writable Store |

#### SetAlias
Sets the Alias of a Store

***Signature:***

````csharp
Store SetAlias(string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `alias` | An Alias for the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### SetName
Sets the Name of a Store

***Signature:***

````csharp
Store SetName(string name);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `name` | A Name for the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

---

***Signature:***

````csharp
Store SetName(string name, string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `name` | A Name for the Store |
| `string` | `alias` | An Alias for the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### SetDefaultCountry
Sets the Default Country of a Store

***Signature:***

````csharp
Store SetDefaultCountry(CountryReadOnly country);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country to use as the Default Country of the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

---

***Signature:***

````csharp
Store SetDefaultCountry(Guid? countryId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid?` | `countryId` | The ID of the Country to use as the Default Country of the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### SetDefaultTaxClass
Sets the Default Tax Class of a Store

***Signature:***

````csharp
Store SetDefaultTaxClass(TaxClassReadOnly taxClass);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `TaxClassReadOnly` | `taxClass` | The Tax Class to use as the Default Tax Class of the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

---

***Signature:***

````csharp
Store SetDefaultTaxClass(Guid? taxClassId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid?` | `taxClassId` | The ID of the Tax Class to use as the Default Tax Class of the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### SetDefaultOrderStatus
Sets the Default Order Status of a Store

***Signature:***

````csharp
Store SetDefaultOrderStatus(OrderStatusReadOnly orderStatus);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `OrderStatusReadOnly` | `orderStatus` | The Order Status to use as the Default Order Status of the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

---

***Signature:***

````csharp
Store SetDefaultOrderStatus(Guid? orderStatusId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid?` | `orderStatusId` | The ID of the Order Status to use as the Default Order Status of the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### SetErrorOrderStatus
Sets the Error Order Status of a Store

***Signature:***

````csharp
Store SetErrorOrderStatus(OrderStatusReadOnly orderStatus);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `OrderStatusReadOnly` | `orderStatus` | The Order Status to use as the Error Order Status of the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

---

***Signature:***

````csharp
Store SetErrorOrderStatus(Guid? orderStatusId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid?` | `orderStatusId` | The ID of the Order Status to use as the Error Order Status of the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### SetOrderStatuses
Sets the Error Order Status of a Store

***Signature:***

````csharp
Store SetOrderStatuses(OrderStatusReadOnly defaultOrderStatus, OrderStatus errorOrderStatus);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `OrderStatusReadOnly` | `defaultOrderStatus` | The Order Status to use as the Default Order Status of the Store |
| `OrderStatusReadOnly` | `errorOrderStatus` | The Order Status to use as the Error Order Status of the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

---

***Signature:***

````csharp
Store SetOrderStatuses(Guid? defaultOrderStatusId, Guid? errorOrderStatusId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid?` | `defaultOrderStatusId` | The ID of the Order Status to use as the Default Order Status of the Store |
| `Guid?` | `errorOrderStatusId` | The ID of the Order Status to use as the Error Order Status of the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### SetPriceTaxInclusivity
Sets the Price Tax Inclusivity of a Store

***Signature:***

````csharp
Store SetPriceTaxInclusivity(bool pricesIncludeTax);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `bool` | `pricesIncludeTax` | Flag indicating whether all prices entered for this Store already include sales TAX |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### EnableCookies
Enable Session Cookies for a Store

***Signature:***

````csharp
Store EnableCookies(TimeSpan cookieTimeout);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `TimeSpan` | `cookieTimeout` | The length of time to maintain a Session Cookie |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### DisableCookies
Disable Session Cookies for a Store

***Signature:***

````csharp
Store DisableCookies);
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### SetConfirmationEmailTemplate
Sets the Confirmation Email Template of a Store

***Signature:***

````csharp
Store SetConfirmationEmailTemplate(EmailTemplateReadOnly emailTemplate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `EmailTemplateReadOnly` | `emailTemplate` | The Email Template to use as the Confirmation Email Template of the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

---

***Signature:***

````csharp
Store SetConfirmationEmailTemplate(Guid? emailTemplateId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid?` | `emailTemplateId` | The ID of the Email Template to use as the Confirmation Email Template of the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### SetErrorEmailTemplate
Sets the Error Email Template of a Store

***Signature:***

````csharp
Store SetErrorEmailTemplate(EmailTemplateReadOnly emailTemplate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `EmailTemplateReadOnly` | `emailTemplate` | The Email Template to use as the Error Email Template of the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

---

***Signature:***

````csharp
Store SetErrorEmailTemplate(Guid? emailTemplateId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid?` | `emailTemplateId` | The ID of the Email Template to use as the Error Email Template of the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### SetNotificationEmailTemplates
Sets the Notification Email Templates of a Store

***Signature:***

````csharp
Store SetNotificationEmailTemplates(EmailTemplateReadOnly confirmationEmailTemplate, EmailTemplateReadOnly errorEmailTemplate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `EmailTemplateReadOnly` | `confirmationEmailTemplate` | The Email Template to use as the Confirmation Email Template of the Store |
| `EmailTemplateReadOnly` | `errorEmailTemplate` | The Email Template to use as the Error Email Template of the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

---

***Signature:***

````csharp
Store SetNotificationEmailTemplates(Guid? confirmationEmailTemplateId, Guid? errorEmailTemplateId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid?` | `confirmationEmailTemplateId` | The ID of the Email Template to use as the Confirmation Email Template of the Store |
| `Guid?` | `errorEmailTemplateId` | The ID of the Email Template to use as the Error Email Template of the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### SetCartNumberTemplate
Sets the Cart Number Template of a Store

***Signature:***

````csharp
Store SetCartNumberTemplate(string template);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `template` |  A string format template to use when generating Cart Numbers for the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### SetOrderNumberTemplate
Sets the Order Number Template of a Store

***Signature:***

````csharp
Store SetOrderNumberTemplate(string template);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `template` |  A string format template to use when generating Order Numbers for the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### SetOrderNumberTemplates
Sets the Order Number Templates of a Store

***Signature:***

````csharp
Store SetOrderNumberTemplates(string cartNumberTemplate, string orderNumberTemplate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `cartNumberTemplate` |  A string format template to use when generating Cart Numbers for the Store |
| `string` | `orderNumberTemplate` |  A string format template to use when generating Order Numbers for the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### AddProductPropertyAlias
Adds an automatically copied Product Property Alias to a Store

***Signature:***

````csharp
Store AddProductPropertyAlias(string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `alias` | The Alias of a Product Property to be added to the Stores Product Property Aliases collection |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### RemoveProductPropertyAlias
Remove an automatically copied Product Property Alias from a Store

***Signature:***

````csharp
Store RemoveProductPropertyAlias(string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `alias` | The Alias of a Product Property to be removed from the Stores Product Property Aliases collection |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### ClearProductPropertyAliases
Clear all automatically copied Product Property Aliases from a Store

***Signature:***

````csharp
Store ClearProductPropertyAliases();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### SetProductPropertyAliases
Set the automatically copied Product Property Aliases of a Store

***Signature:***

````csharp
Store SetProductPropertyAliases(IEnumerable<string> aliases, SetBehavior setBehavior);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IEnumerable<string>` | `aliases` | The Aliases of a Product Properties to be used as the Stores Product Property Aliases collection |
| `SetBehavior` | `setBehavior` | The Behavior of the set operation, whether to `Merge` the property aliases, or `Replace` them entirely |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### AddProductUniquenessPropertyAlias
Adds a Product Uniqueness Property Alias to a Store

***Signature:***

````csharp
Store AddProductUniquenessPropertyAlias(string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `alias` | The Alias of a Product Property to be added to the Stores Product Uniqueness Property Aliases collection |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### RemoveProductUniquenessPropertyAlias
Remove a Product Uniqueness Property Alias from a Store

***Signature:***

````csharp
Store RemoveProductUniquenessPropertyAlias(string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `alias` | The Alias of a Product Property to be removed from the Stores Product Uniqueness Property Aliases collection |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### ClearProductUniquenessPropertyAliases
Clear all Product Uniqueness Property Aliases from a Store

***Signature:***

````csharp
Store ClearProductUniquenessPropertyAliases();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### SetProductUniquenessPropertyAliases
Set the Product Uniqueness Property Aliases of a Store

***Signature:***

````csharp
Store SetProductUniquenessPropertyAliases(IEnumerable<string> aliases, SetBehavior setBehavior);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IEnumerable<string>` | `aliases` | The Aliases of a Product Properties to be used as the Stores Product Uniqueness Property Aliases collection |
| `SetBehavior` | `setBehavior` | The Behavior of the set operation, whether to `Merge` the property aliases, or `Replace` them entirely |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### SetGiftCardCodeLength
Set the length of automatically generated Gift Cards for a Store

***Signature:***

````csharp
Store SetGiftCardCodeLength(int length);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `int` | `length` | The length of automatically generated Gift Cards for the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |


#### SetGiftCardValidityTimeframe
Set the number of days a Gift Card is valid for in a Store

***Signature:***

````csharp
Store SetGiftCardValidityTimeframe(int numberOfDays);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `int` | `numberOfDays` | The number of days a Gift Card is valid for in the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### SetGiftCardCodeTemplate
Set the string format template for generating Gift Card codes in a Store

***Signature:***

````csharp
Store SetGiftCardCodeTemplate(string codeTemplate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `codeTemplate` | The string format template for generating Gift Card codes in the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### SetGiftCardSettings
Set the default Gift Card settings of a Store

***Signature:***

````csharp
Store SetGiftCardSettings(int codeLength, int daysValid, string codeTemplate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `int` | `codeLength` | The length of automatically generated Gift Cards for the Store |
| `int` | `daysValid` | The number of days a Gift Card is valid for in the Store |
| `string` | `codeTemplate` | The string format template for generating Gift Card codes in the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### SetOrderEditorConfig
Set the Order Editor Config of a Store

***Signature:***

````csharp
Store SetOrderEditorConfig(string configPath);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `configPath` | The path of an [Order Editor Config](../../key-concepts/order-editor-config/) file to use for this Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### AllowUser
Allow a User access to Store

***Signature:***

````csharp
Store AllowUser(IUser user);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUser` | `user` | An Umbraco User to allow access to the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

---

***Signature:***

````csharp
Store AllowUser(string userId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `userId` | The ID of a User to allow access to the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### AllowUsers
Allow a collection of Users access to Store

***Signature:***

````csharp
Store AllowUsers(IEnumerable<IUser> users);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IEnumerable<IUser>` | `users` | A collection of Umbraco Users to allow access to the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

---

***Signature:***

````csharp
Store AllowUsers(IEnumerable<string> userIds);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IEnumerable<string>` | `userIds` | collection of IDs of a Users to allow access to the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### DisallowUser
Disallow a User access to Store

***Signature:***

````csharp
Store DisallowUser(IUser user);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUser` | `user` | An Umbraco User to Disallow access to the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

---

***Signature:***

````csharp
Store DisallowUser(string userId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `userId` | The ID of a User to Disallow access to the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### DisallowUsers
Disallow a collection of Users access to Store

***Signature:***

````csharp
Store DisallowUsers(IEnumerable<IUser> users);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IEnumerable<IUser>` | `users` | A collection of Umbraco Users to Disallow access to the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

---

***Signature:***

````csharp
Store DisallowUsers(IEnumerable<string> userIds);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IEnumerable<string>` | `userIds` | collection of IDs of a Users to Disallow access to the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |


#### SetAllowedUsers
Set the allowed Users of to Store

***Signature:***

````csharp
Store SetAllowedUsers(IEnumerable<IUser> users, SetBehavior setBehavior);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IEnumerable<IUser>` | `users` | A collection of Umbraco Users to allow access to the Store |
| `SetBehavior` | `setBehavior` | The Behavior of the set operation, whether to `Merge` the property aliases, or `Replace` them entirely |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

---

***Signature:***

````csharp
Store SetAllowedUsers(IEnumerable<string> userIds, SetBehavior setBehavior);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IEnumerable<string>` | `userIds` | collection of IDs of a Users to allow access to the Store |
| `SetBehavior` | `setBehavior` | The Behavior of the set operation, whether to `Merge` the property aliases, or `Replace` them entirely |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### AllowUserRole
Allow a User Role access to Store

***Signature:***

````csharp
Store AllowUserRole(string role);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `role` | The Name of a User Role to allow access to the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### AllowUserRoles
Allow a collection of User Roles access to Store

***Signature:***

````csharp
Store AllowUserRoles(IEnumerable<string> roles);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IEnumerable<string>` | `roles` | collection of Names of User Roles to allow access to the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### DisallowUserRole
Disallow a User access to Store

***Signature:***

````csharp
Store DisallowUserRole(string role);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `role` | The Name of a User Role to Disallow access to the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### DisallowUserRoles
Disallow a collection of Users access to Store

***Signature:***

````csharp
Store DisallowUserRoles(IEnumerable<string> roles);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IEnumerable<string>` | `roles` | collection of Names of User Roles to Disallow access to the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |


#### SetAllowedUserRoles
Set the allowed Users of to Store

***Signature:***

````csharp
Store SetAllowedUserRoles(IEnumerable<string> roles, SetBehavior setBehavior);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IEnumerable<string>` | `roles` | collection of Names of User Roles to allow access to the Store |
| `SetBehavior` | `setBehavior` | The Behavior of the set operation, whether to `Merge` the property aliases, or `Replace` them entirely |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |







#### ShareStockFrom
Set a Store to share Stock from

***Signature:***

````csharp
Store ShareStockFrom(StoreReadOnly store);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `StoreReadOnly` | `store` | The Store to share Stock with |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

---

***Signature:***

````csharp
Store ShareStockFrom(Guid? storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `StoreReadOnly` | `storeId` | The ID of the Store to share Stock with |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### StopSharingStock
Stop sharing Stock from another Store

***Signature:***

````csharp
Store StopSharingStock();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### SetSortOrder
Sets the Sort Order of a Store

***Signature:***

````csharp
Store SetSortOrder(int order);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `int` | `order` | The Order position of the Store |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | An updated writable Store |

#### AsReadOnly
Converts a writable Store into a read only Store

***Signature:***

````csharp
StoreReadOnly AsReadOnly();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `StoreReadOnly` | A read only version of the Store |

<div class="mb-48"></div>

## Store Owned Entities

### AllowedUser

**Description:** Store Allowed User owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `string` | `UserId` | ID of the Allowed User |

### AllowedUserRole

**Description:** Store Allowed User Role owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `string` | `Role` | Name of the Allowed User Rule |

<div class="mb-48"></div>

## Store Events

### Validation Events

#### ValidateStoreCreate

**Description:** Validation event fired when an Store is being created  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |

#### ValidateStoreUpdate

**Description:** Validation event fired when an Store is being updated  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |

#### ValidateStoreSave

**Description:** Validation event fired when an Store is being saved  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |

#### ValidateStoreDelete

**Description:** Validation event fired when an Store is being deleted  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |

#### ValidateStoreAliasChange

**Description:** Validation event fired when the Alias of a Store is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |
| `ChangingValue<string>` | `Alias` | The changing Alias of the Store |

#### ValidateStoreNameChange

**Description:** Validation event fired when the Name of a Store is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |
| `ChangingValue<string>` | `Name` | The changing Name of the Store |

#### ValidateStoreDefaultCountryChange

**Description:** Validation event fired when the Default Country of a Store is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |
| `ChangingValue<Guid?>` | `CountryId` | The changing ID of the Default Country of the Store |

#### ValidateStoreDefaultTaxClassChange

**Description:** Validation event fired when the Default Tax Class of a Store is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |
| `ChangingValue<Guid?>` | `TaxClassId` | The changing ID of the Default Tax Class of the Store |


#### ValidateStoreOrderStatusesChange

**Description:** Validation event fired when the Order Statuses of a Store are being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |
| `ChangingValue<Guid?>` | `DefaultOrderStatusId` | The changing ID of the Default Order Status of the Store |
| `ChangingValue<Guid?>` | `ErrorOrderStatusId` | The changing ID of the Error Order Status of the Store |

#### ValidateStorePriceTaxInclusivityChange

**Description:** Validation event fired when the Price Tax Inclusivity of a Store is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |
| `ChangingValue<bool>` | `PricesIncludeTax` | The changing flag of whether Prices Include Tax in the Store |

#### ValidateStoreCookiesChange

**Description:** Validation event fired when the Cookie settings of a Store are being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |
| `ChangingValue<bool>` | `CookiesEnabled` | The changing flag of whether session Cookies are enabled for the Store |
| `ChangingValue<TimeSpan?>` | `CookieTimeout` | The changing Timeout of a session Cookie for the Store |

#### ValidateStoreGiftCardSettingsChange

**Description:** Validation event fired when the Gift Card settings of a Store are being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |
| `ChangingValue<int>` | `GiftCardCodeLength` | The changing length of the auto generated Gift Card Codes of the Store |
| `ChangingValue<int>` | `GiftCardDaysValid` | The changing number of days a Gift Card is valid for in the Store |
| `ChangingValue<string>` | `GiftCardCodeTemplate` | The changing string format template to use when generating Gift Card Codes for the Store |

#### ValidateStoreNotificationEmailTemplatesChange

**Description:** Validation event fired when the Notification Email Templates of a Store are being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |
| `ChangingValue<Guid?>` | `ConfirmationEmailTemplateId` | The changing ID of the Confirmation Email Template of the Store |
| `ChangingValue<Guid?>` | `ErrorEmailTemplateId` | The changing ID of the Error Email Template of the Store |

#### ValidateStoreOrderNumberTemplatesChange

**Description:** Validation event fired when the Order Number Templates of a Store are being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |
| `ChangingValue<string>` | `CartNumberTemplate` | The changing string format template to use when generating Cart Numbers for the Store |
| `ChangingValue<string>` | `OrderNumberTemplate` | The changing string format template to use when generating Order Numbers for the Store |

#### ValidateStoreAllowUser

**Description:** Validation event fired when Allowing a User access to a Store  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |
| `string` | `UserId` | The ID of the User being allowed access to the Store |

#### ValidateStoreDisallowUser

**Description:** Validation event fired when Disallowing a User access to a Store  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |
| `string` | `UserId` | The ID of the User being disallowed access to the Store |

#### ValidateStoreAllowUserRole

**Description:** Validation event fired when Allowing a User Role access to a Store  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |
| `string` | `UserId` | The ID of the User Role being allowed access to the Store |

#### ValidateStoreDisallowUserRole

**Description:** Validation event fired when Disallowing a User Role access to a Store  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |
| `string` | `UserId` | The ID of the User Role being disallowed access to the Store |

#### ValidateStoreAddProductPropertyAlias

**Description:** Validation event fired when an automatically copied Product Property Alias is being added to a Store  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |
| `string` | `Alias` | The Alias of the Property to add to the Stores Product Property Aliases collection |

#### ValidateStoreRemoveProductPropertyAlias

**Description:** Validation event fired when an automatically copied Product Property Alias is being removed from a Store  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |
| `string` | `Alias` | The Alias of the Property to remove from the Stores Product Property Aliases collection |

#### ValidateStoreAddProductPropertyUniquenessAlias

**Description:** Validation event fired when Product Uniqueness Property Alias is being added to a Store  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |
| `string` | `Alias` | The Alias of the Property to add to the Stores Product Uniqueness Property Aliases collection |

#### ValidateStoreRemoveProductPropertyUniquenessAlias

**Description:** Validation event fired when Product Uniqueness Property Alias is being removed from a Store  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |
| `string` | `Alias` | The Alias of the Property to remove from the Stores Product Uniqueness Property Aliases collection |

#### ValidateStoreOrderEditorConfigChange

**Description:** Validation event fired when Order Editor Config path of a Store is changing  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |
| `ChangingValue<string>` | `ConfigPath` | The changing Order Editor Config path of the Store |

#### ValidateStoreShareStockFromStoreChange

**Description:** Validation event fired when Stock Sharing Store of a Store is changing  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |
| `ChangingValue<Guid?>` | `ShareStockFromStoreId` | The changing ID of the Store to share Stock from for the Store |

### Notification Events

#### StoreCreatingNotification

**Description:** Notification event fired before an Store is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Store` | `Store` | The Store associated with this event |

#### StoreCreatedNotification

**Description:** Notification event fired after an Store is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |

#### StoreUpdatingNotification

**Description:** Notification event fired before an Store is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Store` | `Store` | The Store associated with this event |

#### StoreUpdatedNotification

**Description:** Notification event fired after an Store is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |

#### StoreSavingNotification

**Description:** Notification event fired before an Store is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Store` | `Store` | The Store associated with this event |

#### StoreSavedNotification

**Description:** Notification event fired after an Store is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |

#### StoreDeletingNotification

**Description:** Notification event fired before an Store is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Store` | `Store` | The Store associated with this event |

#### StoreDeletedNotification

**Description:** Notification event fired after an Store is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |