---
title: ValidateOrderCurrencyChange
description: API reference for ValidateOrderCurrencyChange in Vendr, the eCommerce solution for Umbraco
---
## ValidateOrderCurrencyChange

```csharp
public class ValidateOrderCurrencyChange : ValidationEventBase
```

**Inheritance**

* class [ValidationEventBase](../../../vendr-common/vendr-common-events/validationeventbase/)

**Namespace**
* [Vendr.Core.Events.Validation](../)

### Constructors

#### ValidateOrderCurrencyChange

```csharp
public ValidateOrderCurrencyChange(OrderReadOnly order, ChangingValue<Guid> currencyId)
```


### Properties

#### CurrencyId

```csharp
public ChangingValue<Guid> CurrencyId { get; }
```


---

#### Order

```csharp
public OrderReadOnly Order { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
