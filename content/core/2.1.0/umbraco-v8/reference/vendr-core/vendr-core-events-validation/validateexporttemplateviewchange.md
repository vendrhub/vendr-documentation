---
title: ValidateExportTemplateViewChange
description: API reference for ValidateExportTemplateViewChange in Vendr, the eCommerce solution for Umbraco
---
## ValidateExportTemplateViewChange

```csharp
public class ValidateExportTemplateViewChange : ValidationEventBase
```

**Inheritance**

* class [ValidationEventBase](../../../vendr-common/vendr-common-events/validationeventbase/)

**Namespace**
* [Vendr.Core.Events.Validation](../)

### Constructors

#### ValidateExportTemplateViewChange

```csharp
public ValidateExportTemplateViewChange(ExportTemplateReadOnly exportTemplate, 
    ChangingValue<string> templateView)
```


### Properties

#### ExportTemplate

```csharp
public ExportTemplateReadOnly ExportTemplate { get; }
```


---

#### TemplateView

```csharp
public ChangingValue<string> TemplateView { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
