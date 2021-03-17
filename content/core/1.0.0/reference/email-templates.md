---
title: Email Templates
description: Email Template related APIs in Vendr, the eCommerce solution for Umbraco v8+
---

## EmailTemplate Service

### IEmailTemplateService

**Description:** Interface of the Vendr Email Template Service  
**Namespace:** Vendr.Core.Services  
**Assembly:** Vendr.Core

#### EmailTemplateExists

Checks to see if a Email Template exists in a Store with the given Alias

***Signature:***

````csharp
bool EmailTemplateExists(Guid storeId, string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the  Email Template belong to |
| `string` | `alias` | The Alias of the Email Template to check  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `bool` | True if the Email Template exists, otherwise false |

#### GetEmailTemplates

Gets a collection of all Email Template entities in a Store

***Signature:***

````csharp
IEnumerable<EmailTemplateReadOnly> GetEmailTemplates(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Email Templates belong to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `IEnumerable<EmailTemplateReadOnly>` | A list of read only Email Template entities |

#### GetEmailTemplate

Gets a specific Email Template entity

***Signature:***

````csharp
EmailTemplateReadOnly GetEmailTemplate(Guid id);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `id` | The ID of the Email Template to fetch  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `EmailTemplateReadOnly` | A read only Email Template entity matching the provided criteria  |

---

***Signature:***

````csharp
EmailTemplateReadOnly GetEmailTemplate(Guid storeId, string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Email Template belong to |
| `string` | `alias` | The unique Alias of the Email Template to fetch  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `EmailTemplateReadOnly` | A read only Email Template entity matching the provided criteria  |

#### SaveEmailTemplate

Persists the given Email Template to the database

***Signature:***

````csharp
void SaveEmailTemplate(EmailTemplate emailTemplate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `EmailTemplate` | `emailTemplate` | The Email Template to save  |

#### DeleteEmailTemplate

Deletes the given Email Template

***Signature:***

````csharp
void DeleteEmailTemplate(Guid emailTemplateId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `emailTemplateId` | The ID of the EmailTemplate to delete |

---

***Signature:***

````csharp
void DeleteEmailTemplate(EmailTemplate emailTemplate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `EmailTemplate` | `emailTemplate` | The Email Template to delete |

#### SendEmail

Sends an Email using the Email Template

***Signature:***

````csharp
bool SendEmail(EmailTemplateReadOnly emailTemplate, OrderReadOnly order);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `EmailTemplate` | `emailTemplate` | The Email Template to save  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `bool` | A flag to indicate whether the Send was successful or not |

---

***Signature:***

````csharp
bool SendEmail<TModel>(EmailTemplateReadOnly emailTemplate, TModel model, string toEmailAddress, string languageIsoCode);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `EmailTemplateReadOnly` | `emailTemplate` | The Email Template to send  |
| `TModel` | `model` | The Model to pass to the Email Template |
| `string` | `toEmailAddress` | The Email Address to send the Email to |
| `string` | `languageIsoCode` | The ISO Code of the Language of the Email |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `bool` | A flag to indicate whether the Send was successful or not |

#### SortEmailTemplates

Sorted the Email Templates with the given IDs, by the given ID sequence

***Signature:***

````csharp
void SortEmailTemplates(Guid[] sortedIds);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid[]` | `sortedIds` | Sequence of Email Template IDs to sort in the given order |

### EmailTemplateService

**Description:** Default implementation of the [Vendr Email Template Service Interface](#iemailtemplateservice)  
**Namespace:** Vendr.Core.Services  
**Assembly:** Vendr.Core

<div class="mb-48"></div>

## EmailTemplate Entities

### EmailTemplateReadOnly

**Description:** Read Only Email Template entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `Id` | The Email Template unique ID |
| `Guid` | `StoreId` | The ID of the Store this Email Template belongs to |
| `string` | `Alias` | A unique Alias for the Email Template |
| `string` | `Name` | The Name of the Email Template |
| `bool` | `SendToCustomer` | A flag to indicate whether this Email should be send to the Customer |
| `string` | `Subject` | The Subject of the Email. Supports a [Dictionary Input](../../key-concepts/dictionary-inputs/) value |
| `string` | `SenderName` | The Name of the Sender of the Email. Supports a [Dictionary Input](../../key-concepts/dictionary-inputs/) value |
| `string` | `SenderAddress` | The Email Address of the Sender of the Email. Supports a [Dictionary Input](../../key-concepts/dictionary-inputs/) value |
| `IEnumerable<string>` | `ToAddresses` | The Email Address of the Recipient of the Email. Supports a [Dictionary Input](../../key-concepts/dictionary-inputs/) value |
| `IEnumerable<string>` | `CcAddresses` | The Email Address of the CC Recipient of the Email. Supports a [Dictionary Input](../../key-concepts/dictionary-inputs/) value |
| `IEnumerable<string>` | `BccAddresses` | The Email Address of the BCC Recipient of the Email. Supports a [Dictionary Input](../../key-concepts/dictionary-inputs/) value |
| `string` | `TemplateView` | The Path of the Razor Template View File of the Email. Supports a [Dictionary Input](../../key-concepts/dictionary-inputs/) value |
| `int` | `SortOrder` | The Sort Order of the Email Template |
| `bool` | `IsDeleted` | Flag indicating whether the Email Template is deleted |

#### AsWritable
Gets a writable version of the associated Email Template

***Signature:***

````csharp
EmailTemplate AsWritable(IUnitOfWork uow);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUnitOfWork` | `uow` | An active Unit of Work to associate with this writable entity |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `EmailTemplate` | A writable version of the Email Template |

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

### EmailTemplate

**Description:** Writable Email Template entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core  
**Inherits:** [ EmailTemplateReadOnly](#orderstatusreadonly) 

#### Create
Creates a Email Template entity

***Signature:***

````csharp
static EmailTemplate Create(IUnitOfWork uow, Guid storeId, string alias, string name);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUnitOfWork` | `uow` | An active Unit of Work to associate with this writable entity |
| `Guid` | `storeId` | The ID of the Store this Email Template belongs to |
| `string` | `alias` | A unique Alias for the Email Template |
| `string` | `name` | The Name of the Email Template |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `EmailTemplate` | A writable EmailTemplate |

#### SetAlias
Set the Alias of the Email Template

***Signature:***

````csharp
EmailTemplate SetAlias(string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `alias` | A unique Alias for the Email Template |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `EmailTemplate` | A read only version of the Email Template |

#### SetName
Set the Name of the Email Template

***Signature:***

````csharp
EmailTemplate SetName(string name);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `name` | The Name of the Email Template |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `EmailTemplate` | A read only version of the Email Template |

---

***Signature:***

````csharp
EmailTemplate SetName(string name, string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `name` | The Name of the Email Template |
| `string` | `alias` | A unique Alias for the Email Template |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `EmailTemplate` | A read only version of the Email Template |

#### SetSubject
Set the Subject of the Email Template

***Signature:***

````csharp
EmailTemplate SetSubject(string subject);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `subject` | A Subject for the Email, or the Key to a [Dictionary Input](../../key-concepts/dictionary-input/) value |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `EmailTemplate` | A read only version of the Email Template |


#### SetSenderName
Set the Sender Name of the Email Template

***Signature:***

````csharp
EmailTemplate SetSenderName(string name);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `name` | The Name of the Sender of the Email, or the Key to a [Dictionary Input](../../key-concepts/dictionary-input/) value |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `EmailTemplate` | A read only version of the Email Template |


#### SetSenderAddress
Set the Sender Address of the Email Template

***Signature:***

````csharp
EmailTemplate SetSenderAddress(string emailAddress);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `emailAddress` | The Email Address of the Sender of the Email, or the Key to a [Dictionary Input](../../key-concepts/dictionary-input/) value |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `EmailTemplate` | A read only version of the Email Template |

#### SetSender
Set the Sender of the Email Template

***Signature:***

````csharp
EmailTemplate SetSender(string name, string emailAddress);
````

***Parameters:***

| Type |  Name | Description |
| ---- | ----- | ----------- |
| `string` | `name` | The Name of the Sender of the Email, or the Key to a [Dictionary Input](../../key-concepts/dictionary-input/) value |
| `string` | `emailAddress` | The Email Address of the Sender of the Email, or the Key to a [Dictionary Input](../../key-concepts/dictionary-input/) value |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `EmailTemplate` | A read only version of the Email Template |


















#### SetSortOrder
Sets the Sort Order of a Email Template

***Signature:***

````csharp
EmailTemplate SetSortOrder(int order);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `int` | `order` | The Order position of the Email Template |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `EmailTemplate` | An updated writable Email Template |


#### AsReadOnly
Converts a writable Email Template into a read only Email Template

***Signature:***

````csharp
EmailTemplateReadOnly AsReadOnly();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `EmailTemplateReadOnly` | A read only version of the Email Template |

<div class="mb-48"></div>

## EmailTemplate Events

### Validation Events

#### ValidateEmailTemplateCreate

**Description:** Validation event fired when an Email Template is being created  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `EmailTemplateReadOnly` | `EmailTemplate` | The Email Template associated with this event |

#### ValidateEmailTemplateUpdate

**Description:** Validation event fired when an Email Template is being updated  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `EmailTemplateReadOnly` | `EmailTemplate` | The Email Template associated with this event |

#### ValidateEmailTemplateSave

**Description:** Validation event fired when an Email Template is being saved  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `EmailTemplateReadOnly` | `EmailTemplate` | The Email Template associated with this event |

#### ValidateEmailTemplateDelete

**Description:** Validation event fired when an Email Template is being deleted  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `EmailTemplateReadOnly` | `EmailTemplate` | The Email Template associated with this event |

#### ValidateEmailTemplateAliasChange

**Description:** Validation event fired when an Email Template Alias is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `EmailTemplateReadOnly` | `EmailTemplate` | The Email Template associated with this event |
| `ChangingValue<string>` | `Alias` | The changing Alias of the Email Template |

#### ValidateEmailTemplateNameChange

**Description:** Validation event fired when an Email Template Name is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `EmailTemplateReadOnly` | `EmailTemplate` | The Email Template associated with this event |
| `ChangingValue<string>` | `Name` | The changing Name of the Email Template |

#### ValidateEmailTemplateSubjectChange

**Description:** Validation event fired when an Email Template Subject is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `EmailTemplateReadOnly` | `EmailTemplate` | The Email Template associated with this event |
| `ChangingValue<string>` | `Subject` | The changing Subject of the Email Template |

### Notification Events

#### EmailTemplateCreatingNotification

**Description:** Notification event fired before an Email Template is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `EmailTemplate` | `EmailTemplate` | The Email Template associated with this event |

#### EmailTemplateCreatedNotification

**Description:** Notification event fired after an Email Template is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `EmailTemplateReadOnly` | `EmailTemplate` | The Email Template associated with this event |

#### EmailTemplateUpdatingNotification

**Description:** Notification event fired before an Email Template is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `EmailTemplate` | `EmailTemplate` | The Email Template associated with this event |

#### EmailTemplateUpdatedNotification

**Description:** Notification event fired after an Email Template is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `EmailTemplateReadOnly` | `EmailTemplate` | The Email Template associated with this event |

#### EmailTemplateSavingNotification

**Description:** Notification event fired before an Email Template is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `EmailTemplate` | `EmailTemplate` | The Email Template associated with this event |

#### EmailTemplateSavedNotification

**Description:** Notification event fired after an Email Template is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `EmailTemplateReadOnly` | `EmailTemplate` | The Email Template associated with this event |

#### EmailTemplateDeletingNotification

**Description:** Notification event fired before an Email Template is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `EmailTemplate` | `EmailTemplate` | The Email Template associated with this event |

#### EmailTemplateDeletedNotification

**Description:** Notification event fired after an Email Template is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `EmailTemplateReadOnly` | `EmailTemplate` | The Email Template associated with this event |