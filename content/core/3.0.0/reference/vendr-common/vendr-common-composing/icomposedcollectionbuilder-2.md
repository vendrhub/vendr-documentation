---
title: IComposedCollectionBuilder<TCollection,TItem>
description: API reference for IComposedCollectionBuilder<TCollection,TItem> in Vendr, the eCommerce solution for Umbraco
---
## IComposedCollectionBuilder&lt;TCollection,TItem&gt;

```csharp
public interface IComposedCollectionBuilder<out TCollection, TItem> : IComposedCollectionBuilder
    where TCollection : IComposedCollection<TItem>
```

**Inheritance**

* interface [IComposedCollectionBuilder](../icomposedcollectionbuilder/)

**Namespace**
* [Vendr.Common.Composing](../)

### Methods

#### CreateCollection

```csharp
public TCollection CreateCollection(IServiceProvider factory)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Common.dll -->
