---
title: ValidateExportTemplateAliasChange
description: API reference for ValidateExportTemplateAliasChange in Vendr, the eCommerce solution for Umbraco
---
## ValidateExportTemplateAliasChange

```csharp
public class ValidateExportTemplateAliasChange : ValidationEventBase
```

**Inheritance**

* class [ValidationEventBase](../../../vendr-common/vendr-common-events/validationeventbase/)

**Namespace**
* [Vendr.Core.Events.Validation](../)

### Constructors

#### ValidateExportTemplateAliasChange

```csharp
public ValidateExportTemplateAliasChange(ExportTemplateReadOnly exportTemplate, 
    ChangingValue<string> alias)
```


### Properties

#### Alias

```csharp
public ChangingValue<string> Alias { get; }
```


---

#### ExportTemplate

```csharp
public ExportTemplateReadOnly ExportTemplate { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
