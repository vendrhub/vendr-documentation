---
title: RegionNotificationEventBase<TEntity>
description: API reference for RegionNotificationEventBase<TEntity> in Vendr, the eCommerce solution for Umbraco
---
## RegionNotificationEventBase&lt;TEntity&gt;

```csharp
public abstract class RegionNotificationEventBase<TEntity> : NotificationEventBase
    where TEntity : RegionReadOnly
```

**Inheritance**

* class [NotificationEventBase](../../../vendr-common/vendr-common-events/notificationeventbase/)

**Namespace**
* [Vendr.Core.Events.Notification](../)

### Constructors

#### RegionNotificationEventBase&lt;TEntity&gt;

```csharp
public RegionNotificationEventBase(TEntity region)
```


### Properties

#### Region

```csharp
public TEntity Region { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
