---
title: CalculateOrderLineUnitPriceAdjustmentTask
description: API reference for CalculateOrderLineUnitPriceAdjustmentTask in Vendr, the eCommerce solution for Umbraco
---
## CalculateOrderLineUnitPriceAdjustmentTask

```csharp
public class CalculateOrderLineUnitPriceAdjustmentTask : 
    PipelineTaskWithTypedArgsBase<OrderLineCalculationPipelineArgs, OrderLineCalculation>
```

**Inheritance**

* class [PipelineTaskWithTypedArgsBase&lt;!0,!1&gt;](../../../vendr-common/vendr-common-pipelines/pipelinetaskwithtypedargsbase-2/)

**Namespace**
* [Vendr.Core.Pipelines.OrderLine.Tasks](../)

### Constructors

#### CalculateOrderLineUnitPriceAdjustmentTask

The default constructor.

```csharp
public CalculateOrderLineUnitPriceAdjustmentTask()
```


### Methods

#### Execute

```csharp
public override PipelineResult<OrderLineCalculation> Execute(OrderLineCalculationPipelineArgs args)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
