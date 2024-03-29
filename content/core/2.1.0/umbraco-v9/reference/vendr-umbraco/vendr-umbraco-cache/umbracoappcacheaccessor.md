---
title: UmbracoAppCacheAccessor
description: API reference for UmbracoAppCacheAccessor in Vendr, the eCommerce solution for Umbraco
---
## UmbracoAppCacheAccessor

```csharp
public class UmbracoAppCacheAccessor : ICacheAccessor
```

**Inheritance**

* interface [ICacheAccessor](../../../vendr-core/vendr-core-cache/icacheaccessor/)

**Namespace**
* [Vendr.Umbraco.Cache](../)

### Constructors

#### UmbracoAppCacheAccessor

```csharp
public UmbracoAppCacheAccessor(IPolicyCache runtimeCache, ICache requestCache, 
    EntityCaches isolatedCaches, IScopeProvider scopeProvider)
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


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.dll -->
