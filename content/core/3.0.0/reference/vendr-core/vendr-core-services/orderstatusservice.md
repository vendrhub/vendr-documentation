---
title: OrderStatusService
description: API reference for OrderStatusService in Vendr, the eCommerce solution for Umbraco
---
## OrderStatusService

```csharp
public class OrderStatusService : ServiceBase<OrderStatusService>, 
    ICachedEntityService<OrderStatusReadOnly>, IOrderStatusService
```

**Inheritance**

* class [ServiceBase&lt;TSelf&gt;](../servicebase-1/)
* interface [ICachedEntityService&lt;TEntityType&gt;](../icachedentityservice-1/)
* interface [IOrderStatusService](../iorderstatusservice/)

**Namespace**
* [Vendr.Core.Services](../)

### Constructors

#### OrderStatusService

```csharp
public OrderStatusService(LicensingService licensingService, IRepositoryFactory repositoryFactory, 
    IUnitOfWorkProvider uowProvider, ILogger<OrderStatusService> logger, 
    ICacheAccessor cacheAccessor)
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
