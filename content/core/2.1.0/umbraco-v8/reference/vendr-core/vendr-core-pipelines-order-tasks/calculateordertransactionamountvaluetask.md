---
title: CalculateOrderTransactionAmountValueTask
description: API reference for CalculateOrderTransactionAmountValueTask in Vendr, the eCommerce solution for Umbraco
---
## CalculateOrderTransactionAmountValueTask

```csharp
public class CalculateOrderTransactionAmountValueTask : 
    PipelineTaskWithTypedArgsBase<OrderCalculationPipelineArgs, OrderCalculation>
```

**Inheritance**

* class [PipelineTaskWithTypedArgsBase&lt;!0,!1&gt;](../../../vendr-common/vendr-common-pipelines/pipelinetaskwithtypedargsbase-2/)

**Namespace**
* [Vendr.Core.Pipelines.Order.Tasks](../)

### Constructors

#### CalculateOrderTransactionAmountValueTask

The default constructor.

```csharp
public CalculateOrderTransactionAmountValueTask()
```


### Methods

#### Execute

```csharp
public override PipelineResult<OrderCalculation> Execute(OrderCalculationPipelineArgs args)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
