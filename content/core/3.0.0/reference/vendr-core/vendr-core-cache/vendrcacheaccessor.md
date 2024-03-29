---
title: VendrCacheAccessor
description: API reference for VendrCacheAccessor in Vendr, the eCommerce solution for Umbraco
---
## VendrCacheAccessor

```csharp
public class VendrCacheAccessor : ICacheAccessor
```

**Inheritance**

* interface [ICacheAccessor](../icacheaccessor/)

**Namespace**
* [Vendr.Core.Cache](../)

### Constructors

#### VendrCacheAccessor

```csharp
public VendrCacheAccessor(IPolicyCache runtimeCache, ICache requestCache, 
    EntityCaches entityCaches, Lazy<IUnitOfWorkAccessor> uowAccessor)
```


### Properties

#### EntityCaches

```csharp
public EntityCaches EntityCaches { get; }
```


---

#### RequestCache

```csharp
public ICache RequestCache { get; }
```


---

#### RuntimeCache

```csharp
public IPolicyCache RuntimeCache { get; }
```


---

#### ScopedEntityCaches

```csharp
public EntityCaches ScopedEntityCaches { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
