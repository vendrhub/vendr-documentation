---
title: CalculateOrderTransactionAmountAdjustmentTask
description: API reference for CalculateOrderTransactionAmountAdjustmentTask in Vendr, the eCommerce solution for Umbraco
---
## CalculateOrderTransactionAmountAdjustmentTask

```csharp
public class CalculateOrderTransactionAmountAdjustmentTask : 
    PipelineTaskWithTypedArgsBase<OrderCalculationPipelineArgs, OrderCalculation>
```

**Inheritance**

* class [PipelineTaskWithTypedArgsBase&lt;!0,!1&gt;](../../../vendr-common/vendr-common-pipelines/pipelinetaskwithtypedargsbase-2/)

**Namespace**
* [Vendr.Core.Pipelines.Order.Tasks](../)

### Constructors

#### CalculateOrderTransactionAmountAdjustmentTask

The default constructor.

```csharp
public CalculateOrderTransactionAmountAdjustmentTask()
```


### Methods

#### Execute

```csharp
public override PipelineResult<OrderCalculation> Execute(OrderCalculationPipelineArgs args)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
