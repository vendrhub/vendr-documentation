---
title: ValidateExportTemplateNameChange
description: API reference for ValidateExportTemplateNameChange in Vendr, the eCommerce solution for Umbraco
---
## ValidateExportTemplateNameChange

```csharp
public class ValidateExportTemplateNameChange : ValidationEventBase
```

**Inheritance**

* class [ValidationEventBase](../../../vendr-common/vendr-common-events/validationeventbase/)

**Namespace**
* [Vendr.Core.Events.Validation](../)

### Constructors

#### ValidateExportTemplateNameChange

```csharp
public ValidateExportTemplateNameChange(ExportTemplateReadOnly exportTemplate, 
    ChangingValue<string> name)
```


### Properties

#### ExportTemplate

```csharp
public ExportTemplateReadOnly ExportTemplate { get; }
```


---

#### Name

```csharp
public ChangingValue<string> Name { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
