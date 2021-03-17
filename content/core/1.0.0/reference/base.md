---
title: Stores
description: Store related APIs in Vendr, the eCommerce solution for Umbraco v8+
---

## Store Service

### IStoreService

**Description:** Interface of the Vendr Store Service  
**Namespace:** Vendr.Core.Services  
**Assembly:** Vendr.Core

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

Sorted the Stores with the given IDs, by the given ID sequence

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
| `Guid` | `StoreId` | The ID of the Store this Store belongs to |
| `string` | `Alias` | A unique Alias for the Store |
| `string` | `Name` | The Name of the Store |
| `int` | `SortOrder` | The Sort Order of the Store |
| `bool` | `IsDeleted` | Flag indicating whether the Store is deleted |

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
**Inherits:** [ StoreReadOnly](#storereadonly)

#### Create
Creates a Store entity

***Signature:***

````csharp
static Store Create(IUnitOfWork uow);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUnitOfWork` | `uow` | An active Unit of Work to associate with this writable entity |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Store` | A writable Store |

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

<div class="mb-48"></div>

## Store Events

### Validation Events

#### ValidateStoreCreate

**Description:** Validation event fired when a Store is being created  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |

#### ValidateStoreUpdate

**Description:** Validation event fired when a Store is being updated  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |

#### ValidateStoreSave

**Description:** Validation event fired when a Store is being saved  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |

#### ValidateStoreDelete

**Description:** Validation event fired when a Store is being deleted  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |

### Notification Events

#### StoreCreatingNotification

**Description:** Notification event fired before a Store is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Store` | `Store` | The Store associated with this event |

#### StoreCreatedNotification

**Description:** Notification event fired after a Store is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |

#### StoreUpdatingNotification

**Description:** Notification event fired before a Store is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Store` | `Store` | The Store associated with this event |

#### StoreUpdatedNotification

**Description:** Notification event fired after a Store is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |

#### StoreSavingNotification

**Description:** Notification event fired before a Store is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Store` | `Store` | The Store associated with this event |

#### StoreSavedNotification

**Description:** Notification event fired after a Store is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |

#### StoreDeletingNotification

**Description:** Notification event fired before a Store is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Store` | `Store` | The Store associated with this event |

#### StoreDeletedNotification

**Description:** Notification event fired after a Store is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `StoreReadOnly` | `Store` | The Store associated with this event |