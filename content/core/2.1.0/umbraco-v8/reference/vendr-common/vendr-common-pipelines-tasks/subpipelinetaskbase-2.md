---
title: SubPipelineTaskBase<TPipeline,TItem>
description: API reference for SubPipelineTaskBase<TPipeline,TItem> in Vendr, the eCommerce solution for Umbraco
---
## SubPipelineTaskBase&lt;TPipeline,TItem&gt;

```csharp
public abstract class SubPipelineTaskBase<TPipeline, TItem> : PipelineTaskBase<TItem>
    where TPipeline : IPipelineTaskCollection
```

**Inheritance**

* class [PipelineTaskBase&lt;T&gt;](../pipelinetaskbase-1/)

**Namespace**
* [Vendr.Common.Pipelines.Tasks](../)

### Properties

#### Condition

```csharp
public virtual Func<TItem, bool> Condition { get; }
```


### Methods

#### Execute

```csharp
public override PipelineResult<TItem> Execute(PipelineArgs<TItem> input)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Common.dll -->
