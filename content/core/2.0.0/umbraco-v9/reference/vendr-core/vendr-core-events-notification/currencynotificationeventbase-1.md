---
title: CurrencyNotificationEventBase<TEntity>
description: API reference for CurrencyNotificationEventBase<TEntity> in Vendr, the eCommerce solution for Umbraco
---
## CurrencyNotificationEventBase&lt;TEntity&gt;

```csharp
public abstract class CurrencyNotificationEventBase<TEntity> : NotificationEventBase
    where TEntity : CurrencyReadOnly
```

**Inheritance**

* class [NotificationEventBase](../../../vendr-common/vendr-common-events/notificationeventbase/)

**Namespace**
* [Vendr.Core.Events.Notification](../)

### Constructors

#### CurrencyNotificationEventBase&lt;TEntity&gt;

```csharp
public CurrencyNotificationEventBase(TEntity currency)
```


### Properties

#### Currency

```csharp
public TEntity Currency { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
