---
title: ExportTemplateController
description: API reference for ExportTemplateController in Vendr, the eCommerce solution for Umbraco
---
## ExportTemplateController

```csharp
public class ExportTemplateController : VendrAuthorizedJsonControllerBase
```

**Inheritance**

* class [VendrAuthorizedJsonControllerBase](../vendrauthorizedjsoncontrollerbase/)

**Namespace**
* [Vendr.Umbraco.Web.Controllers](../)

### Constructors

#### ExportTemplateController

```csharp
public ExportTemplateController(IBackOfficeSecurityAccessor backOfficeSecurityAccesor, 
    VendrContext vendrContext)
```


### Methods

#### CreateExportTemplate

```csharp
public IActionResult CreateExportTemplate(Guid storeId)
```


---

#### DeleteExportTemplate

```csharp
public IActionResult DeleteExportTemplate(Guid exportTemplateId)
```


---

#### GetExportTemplate

```csharp
public IActionResult GetExportTemplate(Guid exportTemplateId)
```


---

#### GetExportTemplateCount

```csharp
public IActionResult GetExportTemplateCount(Guid storeId, TemplateCategory? category = null)
```


---

#### GetExportTemplates

```csharp
public IActionResult GetExportTemplates(Guid storeId, TemplateCategory? category = null)
```


---

#### SaveExportTemplate

```csharp
public IActionResult SaveExportTemplate(ExportTemplateSaveDto exportTemplate)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.Web.dll -->
