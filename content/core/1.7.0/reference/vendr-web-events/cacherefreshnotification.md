---
title: CacheRefreshNotification
description: API reference for CacheRefreshNotification in Vendr, the eCommerce solution for Umbraco v8+
---
## CacheRefreshNotification

```csharp
public class CacheRefreshNotification : NotificationEventBase
```

**Inheritance**

* class [NotificationEventBase](../../vendr-core-events/notificationeventbase/)

**Namespace**
* [Vendr.Web.Events.Notification](../)

### Constructors

#### CacheRefreshNotification

```csharp
public CacheRefreshNotification(Type entityType, VendrEntityCacheRefresherPayload payload)
```


### Properties

#### EntityType

```csharp
public Type EntityType { get; set; }
```


---

#### Payload

```csharp
public VendrEntityCacheRefresherPayload Payload { get; set; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Web.dll -->
