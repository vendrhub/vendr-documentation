---
title: WebSessionStore
description: API reference for WebSessionStore in Vendr, the eCommerce solution for Umbraco
---
## WebSessionStore

```csharp
public class WebSessionStore : WebStoreBase, ISessionStore
```

**Inheritance**

* class [WebStoreBase](../webstorebase/)
* interface [ISessionStore](../../../vendr-core/vendr-core-session/isessionstore/)

**Namespace**
* [Vendr.Web.Session](../)

### Constructors

#### WebSessionStore

```csharp
public WebSessionStore(Lazy<IStoreService> storeService, IVendrSettings vendrSettings)
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