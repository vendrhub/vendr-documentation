---
title: CalculateOrderLineTaxRateTask
description: API reference for CalculateOrderLineTaxRateTask in Vendr, the eCommerce solution for Umbraco
---
## CalculateOrderLineTaxRateTask

```csharp
public class CalculateOrderLineTaxRateTask : 
    PipelineTaskWithTypedArgsBase<OrderLineCalculationPipelineArgs, OrderLineCalculation>
```

**Inheritance**

* class [PipelineTaskWithTypedArgsBase&lt;!0,!1&gt;](../../../vendr-common/vendr-common-pipelines/pipelinetaskwithtypedargsbase-2/)

**Namespace**
* [Vendr.Core.Pipelines.OrderLine.Tasks](../)

### Constructors

#### CalculateOrderLineTaxRateTask

```csharp
public CalculateOrderLineTaxRateTask(IOrderLineCalculator orderLineCalculator)
```


### Methods

#### Execute

```csharp
public override PipelineResult<OrderLineCalculation> Execute(OrderLineCalculationPipelineArgs args)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
