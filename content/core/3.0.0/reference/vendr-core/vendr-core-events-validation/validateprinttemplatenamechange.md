---
title: ValidatePrintTemplateNameChange
description: API reference for ValidatePrintTemplateNameChange in Vendr, the eCommerce solution for Umbraco
---
## ValidatePrintTemplateNameChange

```csharp
public class ValidatePrintTemplateNameChange : ValidationEventBase
```

**Inheritance**

* class [ValidationEventBase](../../../vendr-common/vendr-common-events/validationeventbase/)

**Namespace**
* [Vendr.Core.Events.Validation](../)

### Constructors

#### ValidatePrintTemplateNameChange

```csharp
public ValidatePrintTemplateNameChange(PrintTemplateReadOnly printTemplate, 
    ChangingValue<string> name)
```


### Properties

#### Name

```csharp
public ChangingValue<string> Name { get; }
```


---

#### PrintTemplate

```csharp
public PrintTemplateReadOnly PrintTemplate { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
