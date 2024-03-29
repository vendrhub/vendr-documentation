---
title: IOrderStatusService
description: API reference for IOrderStatusService in Vendr, the eCommerce solution for Umbraco
---
## IOrderStatusService

Defines the Vendr Order Status service

```csharp
public interface IOrderStatusService : ICachedEntityService<OrderStatusReadOnly>, IService
```

**Inheritance**

* interface [ICachedEntityService&lt;TEntityType&gt;](../icachedentityservice-1/)
* interface [IService](../iservice/)

**Namespace**
* [Vendr.Core.Services](../)

### Methods

#### DeleteOrderStatus (1 of 2)

Deletes a [`OrderStatus`](../../vendr-core-models/orderstatus/)

```csharp
public void DeleteOrderStatus(Guid id)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| id | The ID of the [`OrderStatus`](../../vendr-core-models/orderstatus/) to delete |

---

#### DeleteOrderStatus (2 of 2)

Deletes a [`OrderStatus`](../../vendr-core-models/orderstatus/)

```csharp
public void DeleteOrderStatus(OrderStatus entity)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| entity | The [`OrderStatus`](../../vendr-core-models/orderstatus/) to delete |


---

#### GetOrderStatus (1 of 2)

Get a [`OrderStatusReadOnly`](../../vendr-core-models/orderstatusreadonly/) entity by ID

```csharp
public OrderStatusReadOnly GetOrderStatus(Guid id)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| id | The ID of the [`OrderStatusReadOnly`](../../vendr-core-models/orderstatusreadonly/) entity to fetch |

**Returns**

A [`OrderStatusReadOnly`](../../vendr-core-models/orderstatusreadonly/) entity

---

#### GetOrderStatus (2 of 2)

Get a [`OrderStatusReadOnly`](../../vendr-core-models/orderstatusreadonly/) entity by [`Store`](../../vendr-core-models/store/) and Alias

```csharp
public OrderStatusReadOnly GetOrderStatus(Guid storeId, string alias)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| storeId | The ID of the [`Store`](../../vendr-core-models/store/) the [`OrderStatusReadOnly`](../../vendr-core-models/orderstatusreadonly/) entity belongs to |
| alias | The Alias of the [`OrderStatusReadOnly`](../../vendr-core-models/orderstatusreadonly/) entity to fetch |

**Returns**

A [`OrderStatusReadOnly`](../../vendr-core-models/orderstatusreadonly/) entity


---

#### GetOrderStatuses (1 of 2)

Get a list of all [`OrderStatusReadOnly`](../../vendr-core-models/orderstatusreadonly/) entities from the given [`Store`](../../vendr-core-models/store/)

```csharp
public IEnumerable<OrderStatusReadOnly> GetOrderStatuses(Guid storeId)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| storeId | The ID of the [`Store`](../../vendr-core-models/store/) the [`OrderStatusReadOnly`](../../vendr-core-models/orderstatusreadonly/) entities belong to |

**Returns**

A list of [`OrderStatusReadOnly`](../../vendr-core-models/orderstatusreadonly/) entities

---

#### GetOrderStatuses (2 of 2)

Get a list of [`OrderStatusReadOnly`](../../vendr-core-models/orderstatusreadonly/) entities with the given IDs

```csharp
public IEnumerable<OrderStatusReadOnly> GetOrderStatuses(Guid[] ids)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| ids | The IDs of the [`OrderStatusReadOnly`](../../vendr-core-models/orderstatusreadonly/) entities to fetch |

**Returns**

A list of [`OrderStatusReadOnly`](../../vendr-core-models/orderstatusreadonly/) entities


---

#### OrderStatusExists

Check to see if a [`OrderStatusReadOnly`](../../vendr-core-models/orderstatusreadonly/) exists in the given [`Store`](../../vendr-core-models/store/) with the given Alias

```csharp
public bool OrderStatusExists(Guid storeId, string alias)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| storeId | The ID of the [`Store`](../../vendr-core-models/store/) the [`OrderStatusReadOnly`](../../vendr-core-models/orderstatusreadonly/) entity belongs to |
| alias | The Alias of the [`OrderStatusReadOnly`](../../vendr-core-models/orderstatusreadonly/) entity to check |

**Returns**

Returns `true` if the [`OrderStatusReadOnly`](../../vendr-core-models/orderstatusreadonly/) exists, otherwise returns `false`.


---

#### SaveOrderStatus

Saves a [`OrderStatus`](../../vendr-core-models/orderstatus/)

```csharp
public void SaveOrderStatus(OrderStatus entity)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| entity | The [`OrderStatus`](../../vendr-core-models/orderstatus/) to save |


---

#### SortOrderStatuses

Sorts a list of [`OrderStatus`](../../vendr-core-models/orderstatus/) entities by ID according to the order of those IDs

```csharp
public void SortOrderStatuses(Guid[] sortedIds)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| sortedIds | The IDs of the [`OrderStatus`](../../vendr-core-models/orderstatus/) entities to sort, in the order by which to sort them |


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
