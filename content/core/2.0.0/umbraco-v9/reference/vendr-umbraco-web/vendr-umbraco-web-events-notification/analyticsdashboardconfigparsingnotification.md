---
title: AnalyticsDashboardConfigParsingNotification
description: API reference for AnalyticsDashboardConfigParsingNotification in Vendr, the eCommerce solution for Umbraco
---
## AnalyticsDashboardConfigParsingNotification

```csharp
public class AnalyticsDashboardConfigParsingNotification : NotificationEventBase
```

**Inheritance**

* class [NotificationEventBase](../../../vendr-common/vendr-common-events/notificationeventbase/)

**Namespace**
* [Vendr.Umbraco.Web.Events.Notification](../)

### Constructors

#### AnalyticsDashboardConfigParsingNotification

```csharp
public AnalyticsDashboardConfigParsingNotification(Guid storeId, JObject config)
```


### Properties

#### Config

```csharp
public JObject Config { get; set; }
```


---

#### StoreId

```csharp
public Guid StoreId { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.Web.dll -->
