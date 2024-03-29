---
title: ProductAttributePresetCacheRefresher
description: API reference for ProductAttributePresetCacheRefresher in Vendr, the eCommerce solution for Umbraco
---
## ProductAttributePresetCacheRefresher

```csharp
public class ProductAttributePresetCacheRefresher : 
    VendrEntityStateCacheRefresherBase<ProductAttributePresetCacheRefresher, IProductAttributeService, ProductAttributePresetReadOnly>
```

**Inheritance**

* class [VendrEntityStateCacheRefresherBase&lt;TInstanceType,TService,TEntity&gt;](../vendrentitystatecacherefresherbase-3/)

**Namespace**
* [Vendr.Umbraco.Cache.Refreshers](../)

### Constructors

#### ProductAttributePresetCacheRefresher

```csharp
public ProductAttributePresetCacheRefresher(AppCaches appCaches, IJsonSerializer serializer, 
    IEventAggregator eventAggregator, ICacheRefresherNotificationFactory factory, 
    Lazy<IProductAttributeService> entityService, 
    Lazy<ILogger<ProductAttributePresetCacheRefresher>> logger)
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
