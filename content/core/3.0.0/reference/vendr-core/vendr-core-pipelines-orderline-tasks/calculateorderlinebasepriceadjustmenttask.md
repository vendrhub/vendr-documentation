---
title: CalculateOrderLineBasePriceAdjustmentTask
description: API reference for CalculateOrderLineBasePriceAdjustmentTask in Vendr, the eCommerce solution for Umbraco
---
## CalculateOrderLineBasePriceAdjustmentTask

```csharp
public class CalculateOrderLineBasePriceAdjustmentTask : 
    PipelineTaskWithTypedArgsBase<OrderLineCalculationPipelineArgs, OrderLineCalculation>
```

**Inheritance**

* class [PipelineTaskWithTypedArgsBase&lt;!0,!1&gt;](../../../vendr-common/vendr-common-pipelines/pipelinetaskwithtypedargsbase-2/)

**Namespace**
* [Vendr.Core.Pipelines.OrderLine.Tasks](../)

### Constructors

#### CalculateOrderLineBasePriceAdjustmentTask

The default constructor.

```csharp
public CalculateOrderLineBasePriceAdjustmentTask()
```


### Methods

#### Execute

```csharp
public override PipelineResult<OrderLineCalculation> Execute(OrderLineCalculationPipelineArgs args)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
