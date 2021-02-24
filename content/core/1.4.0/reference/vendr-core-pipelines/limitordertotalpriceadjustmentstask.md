---
title: LimitOrderTotalPriceAdjustmentsTask
description: API reference for LimitOrderTotalPriceAdjustmentsTask in Vendr, the eCommerce solution for Umbraco v8+
---
## LimitOrderTotalPriceAdjustmentsTask

```csharp
public class LimitOrderTotalPriceAdjustmentsTask : 
    PipelineTaskWithTypedArgsBase<OrderCalculationPipelineArgs, OrderCalculation>
```

**Inheritance**

* class [PipelineTaskWithTypedArgsBase&lt;TArgs,T&gt;](../pipelinetaskwithtypedargsbase-2/)

**Namespace**
* [Vendr.Core.Pipelines.Order.Tasks](../)

### Constructors

#### LimitOrderTotalPriceAdjustmentsTask

The default constructor.

```csharp
public LimitOrderTotalPriceAdjustmentsTask()
```


### Methods

#### Execute

```csharp
public override PipelineResult<OrderCalculation> Execute(OrderCalculationPipelineArgs args)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->