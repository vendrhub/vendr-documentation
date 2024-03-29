---
title: ComposedCollection<T>
description: API reference for ComposedCollection<T> in Vendr, the eCommerce solution for Umbraco
---
## ComposedCollection&lt;T&gt;

Represents the base class of a collection composed by the DI container

```csharp
public class ComposedCollection<T> : ReadOnlyCollection<T>, IComposedCollection<T>
```

**Inheritance**

* interface [IComposedCollection&lt;T&gt;](../icomposedcollection-1/)

**Namespace**
* [Vendr.Common.Collections](../)

**Parameters**

| Parameter | Description |
| --- | --- |
| T | The type of the items in the collection |

### Constructors

#### ComposedCollection&lt;T&gt;

Constructs an instance of a composed collection

```csharp
public ComposedCollection(IEnumerable<T> items)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| items | The items to add to the collection |


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Common.dll -->
