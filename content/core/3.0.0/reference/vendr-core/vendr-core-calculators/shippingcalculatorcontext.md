---
title: ShippingCalculatorContext
description: API reference for ShippingCalculatorContext in Vendr, the eCommerce solution for Umbraco
---
## ShippingCalculatorContext

```csharp
public class ShippingCalculatorContext
```

**Namespace**
* [Vendr.Core.Calculators](../)

### Constructors

#### ShippingCalculatorContext

The default constructor.

```csharp
public ShippingCalculatorContext()
```


---

#### ShippingCalculatorContext (1 of 2)

```csharp
public ShippingCalculatorContext(OrderReadOnly order)
```

---

#### ShippingCalculatorContext (2 of 2)

```csharp
public ShippingCalculatorContext(OrderReadOnly order, OrderCalculation orderCalculation)
```


### Properties

#### Order

```csharp
public OrderReadOnly Order { get; }
```


---

#### OrderCalculation

```csharp
public OrderCalculation OrderCalculation { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
