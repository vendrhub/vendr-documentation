---
title: CalculateOrderLineUnitPriceWithPreviousAdjustmentsTask
description: API reference for CalculateOrderLineUnitPriceWithPreviousAdjustmentsTask in Vendr, the eCommerce solution for Umbraco
---
## CalculateOrderLineUnitPriceWithPreviousAdjustmentsTask

```csharp
public class CalculateOrderLineUnitPriceWithPreviousAdjustmentsTask : 
    PipelineTaskWithTypedArgsBase<OrderLineCalculationPipelineArgs, OrderLineCalculation>
```

**Inheritance**

* class [PipelineTaskWithTypedArgsBase&lt;!0,!1&gt;](../../../vendr-common/vendr-common-pipelines/pipelinetaskwithtypedargsbase-2/)

**Namespace**
* [Vendr.Core.Pipelines.OrderLine.Tasks](../)

### Constructors

#### CalculateOrderLineUnitPriceWithPreviousAdjustmentsTask

The default constructor.

```csharp
public CalculateOrderLineUnitPriceWithPreviousAdjustmentsTask()
```


### Methods

#### Execute

```csharp
public override PipelineResult<OrderLineCalculation> Execute(OrderLineCalculationPipelineArgs args)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
