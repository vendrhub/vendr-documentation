---
title: ActivityLogEntriesRenderingNotification
description: API reference for ActivityLogEntriesRenderingNotification in Vendr, the eCommerce solution for Umbraco
---
## ActivityLogEntriesRenderingNotification

```csharp
public class ActivityLogEntriesRenderingNotification : NotificationEventBase
```

**Inheritance**

* class [NotificationEventBase](../../../vendr-common/vendr-common-events/notificationeventbase/)

**Namespace**
* [Vendr.Umbraco.Web.Events.Notification](../)

### Constructors

#### ActivityLogEntriesRenderingNotification

```csharp
public ActivityLogEntriesRenderingNotification(Guid storeId, 
    IReadOnlyCollection<ActivityLogEntryDto> logEntries)
```


### Properties

#### LogEntries

```csharp
public IReadOnlyCollection<ActivityLogEntryDto> LogEntries { get; set; }
```


---

#### StoreId

```csharp
public Guid StoreId { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.Web.dll -->
