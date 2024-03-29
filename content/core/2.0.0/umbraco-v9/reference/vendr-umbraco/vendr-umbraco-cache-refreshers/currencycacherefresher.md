---
title: CurrencyCacheRefresher
description: API reference for CurrencyCacheRefresher in Vendr, the eCommerce solution for Umbraco
---
## CurrencyCacheRefresher

```csharp
public class CurrencyCacheRefresher : 
    VendrEntityStateCacheRefresherBase<CurrencyCacheRefresher, ICurrencyService, CurrencyReadOnly>
```

**Inheritance**

* class [VendrEntityStateCacheRefresherBase&lt;TInstanceType,TService,TEntity&gt;](../vendrentitystatecacherefresherbase-3/)

**Namespace**
* [Vendr.Umbraco.Cache.Refreshers](../)

### Constructors

#### CurrencyCacheRefresher

```csharp
public CurrencyCacheRefresher(AppCaches appCaches, IJsonSerializer serializer, 
    IEventAggregator eventAggregator, ICacheRefresherNotificationFactory factory, 
    Lazy<ICurrencyService> entityService, Lazy<ILogger<CurrencyCacheRefresher>> logger)
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
