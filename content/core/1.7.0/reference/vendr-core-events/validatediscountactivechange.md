---
title: ValidateDiscountActiveChange
description: API reference for ValidateDiscountActiveChange in Vendr, the eCommerce solution for Umbraco v8+
---
## ValidateDiscountActiveChange

```csharp
public class ValidateDiscountActiveChange : ValidationEventBase
```

**Inheritance**

* class [ValidationEventBase](../validationeventbase/)

**Namespace**
* [Vendr.Core.Events.Validation](../)

### Constructors

#### ValidateDiscountActiveChange

```csharp
public ValidateDiscountActiveChange(DiscountReadOnly discount, ChangingValue<bool> isActive)
```


### Properties

#### Discount

```csharp
public DiscountReadOnly Discount { get; }
```


---

#### IsActive

```csharp
public ChangingValue<bool> IsActive { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
