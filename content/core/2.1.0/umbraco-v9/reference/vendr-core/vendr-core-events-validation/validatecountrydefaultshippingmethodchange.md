---
title: ValidateCountryDefaultShippingMethodChange
description: API reference for ValidateCountryDefaultShippingMethodChange in Vendr, the eCommerce solution for Umbraco
---
## ValidateCountryDefaultShippingMethodChange

```csharp
public class ValidateCountryDefaultShippingMethodChange : ValidationEventBase
```

**Inheritance**

* class [ValidationEventBase](../../../vendr-common/vendr-common-events/validationeventbase/)

**Namespace**
* [Vendr.Core.Events.Validation](../)

### Constructors

#### ValidateCountryDefaultShippingMethodChange

```csharp
public ValidateCountryDefaultShippingMethodChange(CountryReadOnly country, 
    ChangingValue<Guid?> shippingMethodId)
```


### Properties

#### Country

```csharp
public CountryReadOnly Country { get; }
```


---

#### ShippingMethodId

```csharp
public ChangingValue<Guid?> ShippingMethodId { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
