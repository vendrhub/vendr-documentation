---
title: OrderCodeNotificationBase<TEntity>
description: API reference for OrderCodeNotificationBase<TEntity> in Vendr, the eCommerce solution for Umbraco
---
## OrderCodeNotificationBase&lt;TEntity&gt;

```csharp
public abstract class OrderCodeNotificationBase<TEntity> : OrderNotificationEventBase<TEntity>
    where TEntity : OrderReadOnly
```

**Inheritance**

* class [OrderNotificationEventBase&lt;TOrder&gt;](../ordernotificationeventbase-1/)

**Namespace**
* [Vendr.Core.Events.Notification](../)

### Constructors

#### OrderCodeNotificationBase&lt;TEntity&gt;

```csharp
public OrderCodeNotificationBase(TEntity order, string code)
```


### Properties

#### Code

```csharp
public string Code { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
