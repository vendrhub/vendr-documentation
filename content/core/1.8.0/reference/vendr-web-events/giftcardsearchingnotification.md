---
title: GiftCardSearchingNotification
description: API reference for GiftCardSearchingNotification in Vendr, the eCommerce solution for Umbraco v8+
---
## GiftCardSearchingNotification

```csharp
public class GiftCardSearchingNotification : NotificationEventBase
```

**Inheritance**

* class [NotificationEventBase](../../vendr-core-events/notificationeventbase/)

**Namespace**
* [Vendr.Web.Events.Notification](../)

### Constructors

#### GiftCardSearchingNotification

The default constructor.

```csharp
public GiftCardSearchingNotification()
```


### Properties

#### Filter

```csharp
public Func<IGiftCardQuerySpecificationFactory, IQuerySpecification<GiftCardReadOnly>> 
    Filter { get; set; }
```


---

#### SearchTermFilter

```csharp
public Func<IGiftCardQuerySpecificationFactory, string, IQuerySpecification<GiftCardReadOnly>> 
    SearchTermFilter { get; set; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Web.dll -->