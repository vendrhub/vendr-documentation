---
title: ValidateOrderTaxClassChange
description: API reference for ValidateOrderTaxClassChange in Vendr, the eCommerce solution for Umbraco
---
## ValidateOrderTaxClassChange

```csharp
public class ValidateOrderTaxClassChange : ValidationEventBase
```

**Inheritance**

* class [ValidationEventBase](../../../vendr-common/vendr-common-events/validationeventbase/)

**Namespace**
* [Vendr.Core.Events.Validation](../)

### Constructors

#### ValidateOrderTaxClassChange

```csharp
public ValidateOrderTaxClassChange(OrderReadOnly order, ChangingValue<Guid> taxClassId)
```


### Properties

#### Order

```csharp
public OrderReadOnly Order { get; }
```


---

#### TaxClassId

```csharp
public ChangingValue<Guid> TaxClassId { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
