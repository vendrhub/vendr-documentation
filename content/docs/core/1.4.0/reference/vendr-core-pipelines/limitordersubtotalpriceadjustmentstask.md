---
title: LimitOrderSubtotalPriceAdjustmentsTask
description: API reference for LimitOrderSubtotalPriceAdjustmentsTask in Vendr, the eCommerce solution for Umbraco v8+
---
## LimitOrderSubtotalPriceAdjustmentsTask

```csharp
public class LimitOrderSubtotalPriceAdjustmentsTask : 
    PipelineTaskWithTypedArgsBase<OrderCalculationPipelineArgs, OrderCalculation>
```

**Inheritance**

* class [PipelineTaskWithTypedArgsBase&lt;TArgs,T&gt;](../pipelinetaskwithtypedargsbase-2/)

**Namespace**
* [Vendr.Core.Pipelines.Order.Tasks](../)

### Constructors

#### LimitOrderSubtotalPriceAdjustmentsTask

The default constructor.

```csharp
public LimitOrderSubtotalPriceAdjustmentsTask()
```


### Methods

#### Execute

```csharp
public override PipelineResult<OrderCalculation> Execute(OrderCalculationPipelineArgs args)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->