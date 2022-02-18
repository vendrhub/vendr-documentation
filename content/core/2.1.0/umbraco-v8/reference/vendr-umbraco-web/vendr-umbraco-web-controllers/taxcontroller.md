---
title: TaxController
description: API reference for TaxController in Vendr, the eCommerce solution for Umbraco
---
## TaxController

```csharp
public class TaxController : VendrAuthorizedJsonControllerBase
```

**Inheritance**

* class [VendrAuthorizedJsonControllerBase](../vendrauthorizedjsoncontrollerbase/)

**Namespace**
* [Vendr.Umbraco.Web.Controllers](../)

### Constructors

#### TaxController

```csharp
public TaxController(VendrContext vendrContext)
```


### Methods

#### CreateTaxClass

```csharp
public IHttpActionResult CreateTaxClass(Guid storeId)
```


---

#### DeleteTaxClass

```csharp
public IHttpActionResult DeleteTaxClass(Guid taxClassId)
```


---

#### GetTaxClass

```csharp
public IHttpActionResult GetTaxClass(Guid taxClassId)
```


---

#### GetTaxClasses

```csharp
public IHttpActionResult GetTaxClasses(Guid storeId)
```


---

#### SaveTaxClass

```csharp
public IHttpActionResult SaveTaxClass(TaxClassSaveDto taxClass)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.Web.dll -->