---
title: SubOrderLinesCalculationPipelineBase<TSelf,TSubOrderLinePipeline>
description: API reference for SubOrderLinesCalculationPipelineBase<TSelf,TSubOrderLinePipeline> in Vendr, the eCommerce solution for Umbraco
---
## SubOrderLinesCalculationPipelineBase&lt;TSelf,TSubOrderLinePipeline&gt;

```csharp
public class SubOrderLinesCalculationPipelineBase<TSelf, TSubOrderLinePipeline> : 
    PipelineTaskWithTypedArgsBase<OrderLineCalculationPipelineArgs, OrderLineCalculation>
    where TSelf : SubOrderLinesCalculationPipelineBase<TSelf, TSubOrderLinePipeline>
    where TSubOrderLinePipeline : IEnumerable<IPipelineTask>, IPipelineTaskCollection
```

**Inheritance**

* class [PipelineTaskWithTypedArgsBase&lt;!0,!1&gt;](../../../vendr-common/vendr-common-pipelines/pipelinetaskwithtypedargsbase-2/)

**Namespace**
* [Vendr.Core.Pipelines.OrderLine.Tasks](../)

### Constructors

#### SubOrderLinesCalculationPipelineBase&lt;TSelf,TSubOrderLinePipeline&gt;

```csharp
public SubOrderLinesCalculationPipelineBase(ILogger<TSelf> logger)
```


### Methods

#### AdditionalProcessing

```csharp
public virtual void AdditionalProcessing(OrderLineCalculationPipelineArgs parentPipelineArgs, 
    OrderLineCalculation orderLineCalculation)
```


---

#### Execute

```csharp
public override PipelineResult<OrderLineCalculation> Execute(OrderLineCalculationPipelineArgs args)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
