---
title: IPipelineTaskCollection<T,TResult>
description: API reference for IPipelineTaskCollection<T,TResult> in Vendr, the eCommerce solution for Umbraco
---
## IPipelineTaskCollection&lt;T,TResult&gt;

```csharp
public interface IPipelineTaskCollection<T, TResult> : 
    IComposedCollection<IPipelineTask<T, TResult>>, IComposedCollection<IPipelineTask>, 
    IEnumerable<IPipelineTask<T, TResult>>, IEnumerable<IPipelineTask>, IPipelineTaskCollection, 
    IReadOnlyCollection<IPipelineTask<T, TResult>>, IReadOnlyCollection<IPipelineTask>
```

**Inheritance**

* interface [IComposedCollection&lt;T&gt;](../../vendr-common-collections/icomposedcollection-1/)
* interface [IPipelineTaskCollection](../ipipelinetaskcollection/)

**Namespace**
* [Vendr.Common.Pipelines](../)

### Properties

#### OnFail

```csharp
public IPipelineAction<T> OnFail { get; set; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Common.dll -->
