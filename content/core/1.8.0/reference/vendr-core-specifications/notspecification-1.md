---
title: NotSpecification<T>
description: API reference for NotSpecification<T> in Vendr, the eCommerce solution for Umbraco v8+
---
## NotSpecification&lt;T&gt;

```csharp
public class NotSpecification<T> : IQuerySpecification<T>
```

**Inheritance**

* interface [IQuerySpecification&lt;T&gt;](../iqueryspecification-1/)

**Namespace**
* [Vendr.Core.Specifications.Common.Implement](../)

### Constructors

#### NotSpecification&lt;T&gt;

```csharp
public NotSpecification(IQuerySpecification<T> specification)
```


### Properties

#### Specification

```csharp
public IQuerySpecification<T> Specification { get; set; }
```


### Methods

#### Accept

```csharp
public void Accept(IVisitor visitor, IVisitContext context)
```


---

#### IsSatisfiedBy

```csharp
public bool IsSatisfiedBy(T item)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
