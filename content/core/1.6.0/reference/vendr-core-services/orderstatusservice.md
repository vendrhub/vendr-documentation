---
title: OrderStatusService
description: API reference for OrderStatusService in Vendr, the eCommerce solution for Umbraco v8+
---
## OrderStatusService

```csharp
public class OrderStatusService : EntityServiceBase, IOrderStatusService
```

**Inheritance**

* class [EntityServiceBase](../entityservicebase/)
* interface [IOrderStatusService](../iorderstatusservice/)

**Namespace**
* [Vendr.Core.Services](../)

### Constructors

#### OrderStatusService

```csharp
public OrderStatusService(ILicensingService licensingService, IRepositoryFactory repositoryFactory, 
    IUnitOfWorkProvider uowProvider, ILogger logger, ICache cache, 
    IEntityStateCacheAccessor entityStateCacheAccessor)
```


### Methods

#### DeleteOrderStatus (1 of 2)

```csharp
public void DeleteOrderStatus(Guid id)
```

---

#### DeleteOrderStatus (2 of 2)

```csharp
public void DeleteOrderStatus(OrderStatus entity)
```


---

#### GetOrderStatus (1 of 2)

```csharp
public OrderStatusReadOnly GetOrderStatus(Guid id)
```

---

#### GetOrderStatus (2 of 2)

```csharp
public OrderStatusReadOnly GetOrderStatus(Guid storeId, string alias)
```


---

#### GetOrderStatuses (1 of 2)

```csharp
public IEnumerable<OrderStatusReadOnly> GetOrderStatuses(Guid storeId)
```

---

#### GetOrderStatuses (2 of 2)

```csharp
public IEnumerable<OrderStatusReadOnly> GetOrderStatuses(Guid[] ids)
```


---

#### OrderStatusExists

```csharp
public bool OrderStatusExists(Guid storeId, string alias)
```


---

#### SaveOrderStatus

```csharp
public void SaveOrderStatus(OrderStatus entity)
```


---

#### SortOrderStatuses

```csharp
public void SortOrderStatuses(Guid[] sortedIds)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
