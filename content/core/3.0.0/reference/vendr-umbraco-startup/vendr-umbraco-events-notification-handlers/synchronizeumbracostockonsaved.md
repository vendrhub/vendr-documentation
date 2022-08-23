---
title: SynchronizeUmbracoStockOnSaved
description: API reference for SynchronizeUmbracoStockOnSaved in Vendr, the eCommerce solution for Umbraco
---
## SynchronizeUmbracoStockOnSaved

```csharp
public class SynchronizeUmbracoStockOnSaved : INotificationHandler<ContentSavedNotification>
```

**Namespace**
* [Vendr.Umbraco.Events.Notification.Handlers](../)

### Constructors

#### SynchronizeUmbracoStockOnSaved

```csharp
public SynchronizeUmbracoStockOnSaved(IContentService contentService, UmbracoStockSynchronizer sync)
```


### Methods

#### Handle

```csharp
public void Handle(ContentSavedNotification notification)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.Startup.dll -->