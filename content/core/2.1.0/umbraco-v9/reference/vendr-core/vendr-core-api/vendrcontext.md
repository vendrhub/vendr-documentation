---
title: VendrContext
description: API reference for VendrContext in Vendr, the eCommerce solution for Umbraco
---
## VendrContext

```csharp
public class VendrContext
```

**Namespace**
* [Vendr.Core.Api](../)

### Constructors

#### VendrContext

```csharp
public VendrContext(Lazy<VendrServiceContext> services, Lazy<VendrSecurityContext> security, 
    Lazy<SessionManagerAccessor> session, Lazy<IUnitOfWorkProvider> uowProvider, 
    Lazy<IIOHelper> ioHelper)
```


### Properties

#### IO

Gets the IIOHelper

```csharp
public IIOHelper IO { get; }
```


---

#### Security

Gets the [`VendrSecurityContext`](../../vendr-core-security/vendrsecuritycontext/)

```csharp
public VendrSecurityContext Security { get; }
```


---

#### Services

Gets the [`VendrServiceContext`](../../vendr-core-services/vendrservicecontext/)

```csharp
public VendrServiceContext Services { get; }
```


---

#### Session

Gets the [`ISessionManager`](../../vendr-core-session/isessionmanager/)

```csharp
public ISessionManager Session { get; }
```


---

#### Uow

Gets the IUnitOfWorkProvider

```csharp
public IUnitOfWorkProvider Uow { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
