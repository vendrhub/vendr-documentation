---
title: ValidateShippingMethodNameChange
description: API reference for ValidateShippingMethodNameChange in Vendr, the eCommerce solution for Umbraco
---
## ValidateShippingMethodNameChange

```csharp
public class ValidateShippingMethodNameChange : ValidationEventBase
```

**Inheritance**

* class [ValidationEventBase](../../../vendr-common/vendr-common-events/validationeventbase/)

**Namespace**
* [Vendr.Core.Events.Validation](../)

### Constructors

#### ValidateShippingMethodNameChange

```csharp
public ValidateShippingMethodNameChange(ShippingMethodReadOnly shippingMethod, 
    ChangingValue<string> name)
```


### Properties

#### Name

```csharp
public ChangingValue<string> Name { get; }
```


---

#### ShippingMethod

```csharp
public ShippingMethodReadOnly ShippingMethod { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
