---
title: SortSpecificationBase<T>
description: API reference for SortSpecificationBase<T> in Vendr, the eCommerce solution for Umbraco
---
## SortSpecificationBase&lt;T&gt;

```csharp
public abstract class SortSpecificationBase<T> : ISortSpecification<T>, ISpecification<T>
```

**Inheritance**

* interface [ISortSpecification&lt;T&gt;](../isortspecification-1/)
* interface [ISpecification&lt;T&gt;](../ispecification-1/)

**Namespace**
* [Vendr.Common.Specifications](../)

### Properties

#### Sort

```csharp
public Sort Sort { get; }
```


### Methods

#### Accept

```csharp
public abstract void Accept(IVisitor visitor, IVisitContext context)
```


---

#### InvokeSort (1 of 2)

```csharp
public abstract IOrderedEnumerable<T> InvokeSort(IEnumerable<T> collection)
```

---

#### InvokeSort (2 of 2)

```csharp
public abstract IOrderedEnumerable<T> InvokeSort(IOrderedEnumerable<T> collection)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Common.dll -->