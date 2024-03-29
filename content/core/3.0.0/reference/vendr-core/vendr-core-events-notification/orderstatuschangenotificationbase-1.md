---
title: OrderStatusChangeNotificationBase<TEntity>
description: API reference for OrderStatusChangeNotificationBase<TEntity> in Vendr, the eCommerce solution for Umbraco
---
## OrderStatusChangeNotificationBase&lt;TEntity&gt;

```csharp
public abstract class OrderStatusChangeNotificationBase<TEntity> : 
    OrderNotificationEventBase<TEntity>
    where TEntity : OrderReadOnly
```

**Inheritance**

* class [OrderNotificationEventBase&lt;TOrder&gt;](../ordernotificationeventbase-1/)

**Namespace**
* [Vendr.Core.Events.Notification](../)

### Constructors

#### OrderStatusChangeNotificationBase&lt;TEntity&gt;

```csharp
public OrderStatusChangeNotificationBase(TEntity order, ChangingValue<Guid?> orderStatusId, 
    ChangingValue<OrderStatusCode> orderStatusCode)
```


### Properties

#### OrderStatusCode

```csharp
public ChangingValue<OrderStatusCode> OrderStatusCode { get; }
```


---

#### OrderStatusId

```csharp
public ChangingValue<Guid?> OrderStatusId { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
