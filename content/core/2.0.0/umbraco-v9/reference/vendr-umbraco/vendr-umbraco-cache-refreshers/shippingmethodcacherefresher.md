---
title: ShippingMethodCacheRefresher
description: API reference for ShippingMethodCacheRefresher in Vendr, the eCommerce solution for Umbraco
---
## ShippingMethodCacheRefresher

```csharp
public class ShippingMethodCacheRefresher : 
    VendrEntityStateCacheRefresherBase<ShippingMethodCacheRefresher, IShippingMethodService, ShippingMethodReadOnly>
```

**Inheritance**

* class [VendrEntityStateCacheRefresherBase&lt;TInstanceType,TService,TEntity&gt;](../vendrentitystatecacherefresherbase-3/)

**Namespace**
* [Vendr.Umbraco.Cache.Refreshers](../)

### Constructors

#### ShippingMethodCacheRefresher

```csharp
public ShippingMethodCacheRefresher(AppCaches appCaches, IJsonSerializer serializer, 
    IEventAggregator eventAggregator, ICacheRefresherNotificationFactory factory, 
    Lazy<IShippingMethodService> entityService, Lazy<ILogger<ShippingMethodCacheRefresher>> logger)
```


### Properties

#### Name

```csharp
public override string Name { get; }
```


---

#### RefresherUniqueId

```csharp
public override Guid RefresherUniqueId { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.dll -->
