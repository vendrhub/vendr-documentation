---
title: OrderCalculationPipelineArgs
description: API reference for OrderCalculationPipelineArgs in Vendr, the eCommerce solution for Umbraco
---
## OrderCalculationPipelineArgs

```csharp
public class OrderCalculationPipelineArgs : PipelineArgs<OrderCalculation>
```

**Inheritance**

* class [PipelineArgs&lt;!0&gt;](../../../vendr-common/vendr-common-pipelines/pipelineargs-1/)

**Namespace**
* [Vendr.Core.Pipelines.Order](../)

### Constructors

#### OrderCalculationPipelineArgs

```csharp
public OrderCalculationPipelineArgs(IUnitOfWork uow, OrderCalculation model, OrderReadOnly order)
```


### Properties

#### Calculation

```csharp
public OrderCalculation Calculation { get; }
```


---

#### Currency

```csharp
public CurrencyReadOnly Currency { get; }
```


---

#### Order

```csharp
public OrderReadOnly Order { get; }
```


---

#### PaymentCountry

```csharp
public CountryReadOnly PaymentCountry { get; }
```


---

#### PaymentMethod

```csharp
public PaymentMethodReadOnly PaymentMethod { get; }
```


---

#### PaymentRegion

```csharp
public RegionReadOnly PaymentRegion { get; }
```


---

#### ShippingCountry

```csharp
public CountryReadOnly ShippingCountry { get; }
```


---

#### ShippingMethod

```csharp
public ShippingMethodReadOnly ShippingMethod { get; }
```


---

#### ShippingRegion

```csharp
public RegionReadOnly ShippingRegion { get; }
```


---

#### Store

```csharp
public StoreReadOnly Store { get; }
```


---

#### TaxClass

```csharp
public TaxClassReadOnly TaxClass { get; }
```


---

#### TaxSource

```csharp
public TaxSource TaxSource { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
