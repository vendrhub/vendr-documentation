---
title: SendFinalizedOrderEmail
description: API reference for SendFinalizedOrderEmail in Vendr, the eCommerce solution for Umbraco
---
## SendFinalizedOrderEmail

```csharp
public class SendFinalizedOrderEmail : NotificationEventHandlerBase<OrderFinalizedNotification>
```

**Inheritance**

* class [NotificationEventHandlerBase&lt;!0&gt;](../../../vendr-common/vendr-common-events/notificationeventhandlerbase-1/)

**Namespace**
* [Vendr.Core.Events.Notification.Handlers.Order](../)

### Constructors

#### SendFinalizedOrderEmail

```csharp
public SendFinalizedOrderEmail(IOrderService orderService, IStoreService storeService, 
    IEmailTemplateService emailTemplateService, ILogger<SendFinalizedOrderEmail> logger)
```


### Methods

#### Handle

```csharp
public override void Handle(OrderFinalizedNotification evt)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
