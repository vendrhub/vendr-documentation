---
title: OrderEditorConfigParsingNotification
description: API reference for OrderEditorConfigParsingNotification in Vendr, the eCommerce solution for Umbraco
---
## OrderEditorConfigParsingNotification

```csharp
public class OrderEditorConfigParsingNotification : NotificationEventBase
```

**Inheritance**

* class [NotificationEventBase](../../../vendr-common/vendr-common-events/notificationeventbase/)

**Namespace**
* [Vendr.Umbraco.Web.Events.Notification](../)

### Constructors

#### OrderEditorConfigParsingNotification

```csharp
public OrderEditorConfigParsingNotification(Guid storeId, JObject config)
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
