---
title: Order Statuses
description: Order Status related APIs in Vendr, the eCommerce solution for Umbraco v8+
---

## OrderStatus Service

### IOrderStatusService

**Description:** Interface of the Vendr Order Status Service  
**Namespace:** Vendr.Core.Services  
**Assembly:** Vendr.Core

#### GetOrderStatuses

Gets a collection of all Order Status entities in a Store

***Signature:***

````csharp
IEnumerable<OrderStatusReadOnly> GetOrderStatuses(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Order Statuses belong to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `IEnumerable<OrderStatusReadOnly>` | A list of read only Order Status entities |

#### GetOrderStatus

Gets a specific Order Status entity

***Signature:***

````csharp
OrderStatusReadOnly GetOrderStatus(Guid id);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `id` | The ID of the Order Status to fetch  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderStatusReadOnly` | A read only Order Status entity matching the provided criteria  |

---

***Signature:***

````csharp
OrderStatusReadOnly GetOrderStatus(Guid storeId, string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Order Status belong to |
| `string` | `alias` | The unique Alias of the Order Status to fetch  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderStatusReadOnly` | A read only Order Status entity matching the provided criteria  |

#### SaveOrderStatus

Persists the given Order Status to the database

***Signature:***

````csharp
void SaveOrderStatus(OrderStatus orderStatus);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `OrderStatus` | `orderStatus` | The Order Status to save  |

#### DeleteOrderStatus

Deletes the given Order Status

***Signature:***

````csharp
void DeleteOrderStatus(Guid orderStatusId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `orderStatusId` | The ID of the OrderStatus to delete |

---

***Signature:***

````csharp
void DeleteOrderStatus(OrderStatus orderStatus);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `OrderStatus` | `orderStatus` | The Order Status to delete |

#### SortOrderStatuses

Sorted the Order Statuses with the given IDs, by the given ID sequence

***Signature:***

````csharp
void SortOrderStatuses(Guid[] sortedIds);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid[]` | `sortedIds` | Sequence of Order Status IDs to sort in the given order |

### OrderStatusService

**Description:** Default implementation of the [Vendr Order Status Service Interface](#iorderstatusservice)  
**Namespace:** Vendr.Core.Services  
**Assembly:** Vendr.Core

<div class="mb-48"></div>

## OrderStatus Entities

### OrderStatusReadOnly

**Description:** Read Only Order Status entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `Id` | The Order Status unique ID |
| `Guid` | `StoreId` | The ID of the Store this Order Status belongs to |
| `string` | `Alias` | A unique Alias for the Order Status |
| `string` | `Name` | The Name of the Order Status |
| `string` | `Color` | A Color for the Order Status |
| `int` | `SortOrder` | The Sort Order of the Order Status |
| `bool` | `IsDeleted` | Flag indicating whether the Order Status is deleted |

#### AsWritable
Gets a writable version of the associated Order Status

***Signature:***

````csharp
OrderStatus AsWritable(IUnitOfWork uow);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUnitOfWork` | `uow` | An active Unit of Work to associate with this writable entity |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderStatus` | A writable version of the Order Status |

### OrderStatus

**Description:** Writable Order Status entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core  
**Inherits:** [ OrderStatusReadOnly](#orderstatusreadonly) 

#### Create
Creates a Order Status entity

***Signature:***

````csharp
static OrderStatus Create(IUnitOfWork uow, Guid storeId, string alias, string name);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUnitOfWork` | `uow` | An active Unit of Work to associate with this writable entity |
| `Guid` | `storeId` | The ID of the Store this Order Status belongs to |
| `string` | `alias` | A unique Alias for the Order Status |
| `string` | `name` | The Name of the Order Status |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderStatus` | A writable OrderStatus |

#### SetAlias
Set the Alias of the Order Status

***Signature:***

````csharp
OrderStatus SetAlias(string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `alias` | A unique Alias for the Order Status |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderStatus` | A read only version of the Order Status |

#### SetName
Set the Name of the Order Status

***Signature:***

````csharp
OrderStatus SetName(string name);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `name` | The Name of the Order Status |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderStatus` | A read only version of the Order Status |

---

***Signature:***

````csharp
OrderStatus SetName(string name, string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `name` | The Name of the Order Status |
| `string` | `alias` | A unique Alias for the Order Status |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderStatus` | A read only version of the Order Status |

#### SetColor
Set the Color of the Order Status

***Signature:***

````csharp
OrderStatus SetColor(string color);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `color` | A Color for the Order Status. Can be `"grey"`, `"brown"`, `"blue"`, `"light-blue"`, `"indigo"`, `"purple"`, `"deep-purple"`, `"cyan"`, `"green"`, `"light-green"`, `"lime"`, `"yellow"`, `"amber"`, `"orange"`, `"deep-orange"`, `"red"` or `"pink"` |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderStatus` | A read only version of the Order Status |

#### SetSortOrder
Sets the Sort Order of a Order Status

***Signature:***

````csharp
OrderStatus SetSortOrder(int order);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `int` | `order` | The Order position of the Order Status |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderStatus` | An updated writable Order Status |


#### AsReadOnly
Converts a writable Order Status into a read only Order Status

***Signature:***

````csharp
OrderStatusReadOnly AsReadOnly();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderStatusReadOnly` | A read only version of the Order Status |

<div class="mb-48"></div>

## OrderStatus Events

### Validation Events

#### ValidateOrderStatusCreate

**Description:** Validation event fired when an Order Status is being created  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderStatusReadOnly` | `OrderStatus` | The Order Status associated with this event |

#### ValidateOrderStatusUpdate

**Description:** Validation event fired when an Order Status is being updated  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderStatusReadOnly` | `OrderStatus` | The Order Status associated with this event |

#### ValidateOrderStatusSave

**Description:** Validation event fired when an Order Status is being saved  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderStatusReadOnly` | `OrderStatus` | The Order Status associated with this event |

#### ValidateOrderStatusDelete

**Description:** Validation event fired when an Order Status is being deleted  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderStatusReadOnly` | `OrderStatus` | The Order Status associated with this event |

#### ValidateOrderStatusAliasChange

**Description:** Validation event fired when an Order Status Alias is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderStatusReadOnly` | `OrderStatus` | The Order Status associated with this event |
| `ChangingValue<string>` | `Alias` | The changing Alias of the Order Status |

#### ValidateOrderStatusNameChange

**Description:** Validation event fired when an Order Status Name is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderStatusReadOnly` | `OrderStatus` | The Order Status associated with this event |
| `ChangingValue<string>` | `Name` | The changing Name of the Order Status |

#### ValidateOrderStatusColorChange

**Description:** Validation event fired when an Order Status Color is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderStatusReadOnly` | `OrderStatus` | The Order Status associated with this event |
| `ChangingValue<string>` | `Color` | The changing Color of the Order Status |

### Notification Events

#### OrderStatusCreatingNotification

**Description:** Notification event fired before an Order Status is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderStatus` | `OrderStatus` | The Order Status associated with this event |

#### OrderStatusCreatedNotification

**Description:** Notification event fired after an Order Status is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderStatusReadOnly` | `OrderStatus` | The Order Status associated with this event |

#### OrderStatusUpdatingNotification

**Description:** Notification event fired before an Order Status is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderStatus` | `OrderStatus` | The Order Status associated with this event |

#### OrderStatusUpdatedNotification

**Description:** Notification event fired after an Order Status is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderStatusReadOnly` | `OrderStatus` | The Order Status associated with this event |

#### OrderStatusSavingNotification

**Description:** Notification event fired before an Order Status is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderStatus` | `OrderStatus` | The Order Status associated with this event |

#### OrderStatusSavedNotification

**Description:** Notification event fired after an Order Status is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderStatusReadOnly` | `OrderStatus` | The Order Status associated with this event |

#### OrderStatusDeletingNotification

**Description:** Notification event fired before an Order Status is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderStatus` | `OrderStatus` | The Order Status associated with this event |

#### OrderStatusDeletedNotification

**Description:** Notification event fired after an Order Status is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderStatusReadOnly` | `OrderStatus` | The Order Status associated with this event |