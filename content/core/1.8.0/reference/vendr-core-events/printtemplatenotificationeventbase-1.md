---
title: PrintTemplateNotificationEventBase<TEntity>
description: API reference for PrintTemplateNotificationEventBase<TEntity> in Vendr, the eCommerce solution for Umbraco v8+
---
## PrintTemplateNotificationEventBase&lt;TEntity&gt;

```csharp
public abstract class PrintTemplateNotificationEventBase<TEntity> : NotificationEventBase
    where TEntity : PrintTemplateReadOnly
```

**Inheritance**

* class [NotificationEventBase](../notificationeventbase/)

**Namespace**
* [Vendr.Core.Events.Notification](../)

### Constructors

#### PrintTemplateNotificationEventBase&lt;TEntity&gt;

```csharp
public PrintTemplateNotificationEventBase(TEntity printTemplate)
```


### Properties

#### PrintTemplate

```csharp
public TEntity PrintTemplate { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->