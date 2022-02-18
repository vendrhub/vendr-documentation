---
title: EntityController
description: API reference for EntityController in Vendr, the eCommerce solution for Umbraco
---
## EntityController

```csharp
public class EntityController : VendrAuthorizedJsonControllerBase
```

**Inheritance**

* class [VendrAuthorizedJsonControllerBase](../vendrauthorizedjsoncontrollerbase/)

**Namespace**
* [Vendr.Umbraco.Web.Controllers](../)

### Constructors

#### EntityController

```csharp
public EntityController(IBackOfficeSecurityAccessor backOfficeSecurityAccesor, 
    VendrContext vendrContext)
```


### Methods

#### DeleteEntity

```csharp
public IActionResult DeleteEntity(string entityType, Guid entityId)
```


---

#### GetEntities

```csharp
public IActionResult GetEntities(string entityType, Guid? storeId = default(Guid?), 
    Guid? parentId = default(Guid?))
```


---

#### GetEntity

```csharp
public IActionResult GetEntity(string entityType, Guid entityId)
```


---

#### GetStoreByEntityId

```csharp
public IActionResult GetStoreByEntityId(string entityType, Guid entityId)
```


---

#### SortEntities

```csharp
public IActionResult SortEntities(SortEntitiesPostDto model)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.Web.dll -->