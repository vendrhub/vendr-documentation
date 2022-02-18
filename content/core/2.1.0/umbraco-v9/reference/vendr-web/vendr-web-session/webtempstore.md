---
title: WebTempStore
description: API reference for WebTempStore in Vendr, the eCommerce solution for Umbraco
---
## WebTempStore

```csharp
public class WebTempStore : WebStoreBase, ITempStore
```

**Inheritance**

* class [WebStoreBase](../webstorebase/)
* interface [ITempStore](../../../vendr-core/vendr-core-session/itempstore/)

**Namespace**
* [Vendr.Web.Session](../)

### Constructors

#### WebTempStore

```csharp
public WebTempStore(IVendrSettings vendrSettings, IHttpContextAccessor httpContextAccessor)
```


### Methods

#### GetStoreIds

```csharp
public Guid[] GetStoreIds()
```


---

#### GetValue&lt;T&gt;

```csharp
public T? GetValue<T>(Guid storeId, string key)
    where T : struct
```


---

#### SetValue&lt;T&gt;

```csharp
public void SetValue<T>(Guid storeId, string key, T? value)
    where T : struct
```


---

#### TrySetValue&lt;T&gt;

```csharp
public bool TrySetValue<T>(Guid storeId, string key, T? value)
    where T : struct
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Web.dll -->