---
title: IOrderService
description: API reference for IOrderService in Vendr, the eCommerce solution for Umbraco v8+
---
## IOrderService

Defines the Vendr Order service

```csharp
public interface IOrderService : ICachedEntityService<OrderReadOnly>, IService
```

**Inheritance**

* interface [ICachedEntityService&lt;TEntityType&gt;](../icachedentityservice-1/)
* interface [IService](../iservice/)

**Namespace**
* [Vendr.Core.Services](../)

### Methods

#### DeleteOrder (1 of 4)

Deletes a [`Order`](../../vendr-core-models/order/)

```csharp
public void DeleteOrder(Guid orderId)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| orderId | The ID of the [`Order`](../../vendr-core-models/order/) to delete |

---

#### DeleteOrder (2 of 4)

Deletes a [`Order`](../../vendr-core-models/order/)

```csharp
public void DeleteOrder(Order entity)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| entity | The [`Order`](../../vendr-core-models/order/) to delete |

---

#### DeleteOrder (3 of 4)

Deletes a [`Order`](../../vendr-core-models/order/)

```csharp
public void DeleteOrder(Guid orderId, bool revertFinalized)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| orderId | The ID of the [`Order`](../../vendr-core-models/order/) to delete |
| revertFinalized | A boolean flag indicating whether to reverse the order finalization, undoing any stock reductions, discount code usages or gift card deductions |

---

#### DeleteOrder (4 of 4)

Deletes a [`Order`](../../vendr-core-models/order/)

```csharp
public void DeleteOrder(Order entity, bool revertFinalized)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| entity | The [`Order`](../../vendr-core-models/order/) to delete |
| revertFinalized | A boolean flag indicating whether to reverse the order finalization, undoing any stock reductions, discount code usages or gift card deductions |


---

#### GetFinalizedOrderCount

Get the total number of finalized [`Order`](../../vendr-core-models/order/) entities in a given [`Store`](../../vendr-core-models/store/)

```csharp
public long GetFinalizedOrderCount(Guid storeId)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| storeId | The ID of the [`Store`](../../vendr-core-models/store/) to count from |

**Returns**

A count of the number of finalized [`Order`](../../vendr-core-models/order/) entities in the given [`Store`](../../vendr-core-models/store/)


---

#### GetFinalizedOrdersForCustomer

Gets a list of finalized [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entities for a given customer

```csharp
public IEnumerable<OrderReadOnly> GetFinalizedOrdersForCustomer(Guid storeId, 
    string customerReference)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| storeId | The ID of the [`Store`](../../vendr-core-models/store/) the [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entities belong to |
| customerReference | The unique reference of the customer associated with the [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entities |

**Returns**

A list of [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entities


---

#### GetOrder (1 of 2)

Get an [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entity by ID

```csharp
public OrderReadOnly GetOrder(Guid orderId)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| orderId | The ID of the [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entity to fetch |

**Returns**

An [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entity

---

#### GetOrder (2 of 2)

Get a [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entity by [`Store`](../../vendr-core-models/store/) and cart or order number

```csharp
public OrderReadOnly GetOrder(Guid storeId, string cartOrOrderNumber)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| storeId | The ID of the [`Store`](../../vendr-core-models/store/) the [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entity belongs to |
| cartOrOrderNumber | The cart or order number to search for |

**Returns**

A [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entity


---

#### GetOrders

Gets a list of [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entities matching the given IDs

```csharp
public IEnumerable<OrderReadOnly> GetOrders(Guid[] ids)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| ids | The IDs of the [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entities to fetch |

**Returns**

A list of [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entities


---

#### SaveOrder

Saves a [`Order`](../../vendr-core-models/order/)

```csharp
public void SaveOrder(Order entity)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| entity | The [`Order`](../../vendr-core-models/order/) to save |


---

#### SearchOrders (1 of 2)

Search for [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entities in a given store matching the given criteria

```csharp
public PagedResult<OrderReadOnly> SearchOrders(Guid storeId, string searchTerm = null, 
    string cartOrOrderNumber = null, string firstName = null, string lastName = null, 
    bool? isFinalized = null, Guid? orderStatusId = default(Guid?), 
    PaymentStatus? paymentStatus = default(PaymentStatus?), 
    DateTime? fromDate = default(DateTime?), DateTime? toDate = default(DateTime?), 
    long currentPage = 1, long itemsPerPage = 50)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| storeId | The ID of the [`Store`](../../vendr-core-models/store/) the [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entities belong to |
| searchTerm | A term to search for across the cart number, order number, customer first name and customer last name fields |
| cartOrOrderNumber | A cart or order number to search for |
| firstName | A customer first name to search for |
| lastName | A customer last name to search for |
| isFinalized | A boolean flag to indicate whether to only search finalized orders |
| orderStatusId | The ID of an [`OrderStatus`](../../vendr-core-models/orderstatus/) the [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entities should be in |
| paymentStatus | The [`PaymentStatus`](../../vendr-core-models/paymentstatus/) the [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entities should be in |
| fromDate | A date after which to search from |
| toDate | A date up to which to search to |
| currentPage | The page of results of which to retrieve |
| itemsPerPage | The number of items per page to return |

**Returns**

A paginated list of [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entities

---

#### SearchOrders (2 of 2)

Search for [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entities in a given store matching the given criteria

```csharp
public PagedResult<OrderReadOnly> SearchOrders(Guid storeId, string searchTerm = null, 
    string cartOrOrderNumber = null, string firstName = null, string lastName = null, 
    bool? isFinalized = null, IEnumerable<Guid> orderStatusIds = null, 
    IEnumerable<PaymentStatus> paymentStatuses = null, DateTime? fromDate = default(DateTime?), 
    DateTime? toDate = default(DateTime?), long currentPage = 1, long itemsPerPage = 50)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| storeId | The ID of the [`Store`](../../vendr-core-models/store/) the [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entities belong to |
| searchTerm | A term to search for across the cart number, order number, customer first name and customer last name fields |
| cartOrOrderNumber | A cart or order number to search for |
| firstName | A customer first name to search for |
| lastName | A customer last name to search for |
| isFinalized | A boolean flag to indicate whether to only search finalized orders |
| orderStatusIds | The IDs of any [`OrderStatus`](../../vendr-core-models/orderstatus/) the [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entities should be in |
| paymentStatuses | A list of any [`PaymentStatus`](../../vendr-core-models/paymentstatus/) the [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entities should be in |
| fromDate | A date after which to search from |
| toDate | A date up to which to search to |
| currentPage | The page of results of which to retrieve |
| itemsPerPage | The number of items per page to return |

**Returns**

A paginated list of [`OrderReadOnly`](../../vendr-core-models/orderreadonly/) entities


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
