---
title: ValidateTaxClassNameChange
description: API reference for ValidateTaxClassNameChange in Vendr, the eCommerce solution for Umbraco
---
## ValidateTaxClassNameChange

```csharp
public class ValidateTaxClassNameChange : ValidationEventBase
```

**Inheritance**

* class [ValidationEventBase](../../../vendr-common/vendr-common-events/validationeventbase/)

**Namespace**
* [Vendr.Core.Events.Validation](../)

### Constructors

#### ValidateTaxClassNameChange

```csharp
public ValidateTaxClassNameChange(TaxClassReadOnly taxClass, ChangingValue<string> name)
```


### Properties

#### Name

```csharp
public ChangingValue<string> Name { get; }
```


---

#### TaxClass

```csharp
public TaxClassReadOnly TaxClass { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
