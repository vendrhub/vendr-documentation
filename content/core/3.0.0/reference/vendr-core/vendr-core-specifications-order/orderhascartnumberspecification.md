---
title: OrderHasCartNumberSpecification
description: API reference for OrderHasCartNumberSpecification in Vendr, the eCommerce solution for Umbraco
---
## OrderHasCartNumberSpecification

```csharp
public class OrderHasCartNumberSpecification : IQuerySpecification<OrderReadOnly>, 
    ISpecification<OrderReadOnly>
```

**Inheritance**

* interface [IQuerySpecification&lt;!0&gt;](../../../vendr-common/vendr-common-specifications/iqueryspecification-1/)
* interface [ISpecification&lt;!0&gt;](../../../vendr-common/vendr-common-specifications/ispecification-1/)

**Namespace**
* [Vendr.Core.Specifications.Order](../)

### Constructors

#### OrderHasCartNumberSpecification

```csharp
public OrderHasCartNumberSpecification(string cartNumber, StringComparisonType comparisonType)
```


### Properties

#### CartNumber

```csharp
public string CartNumber { get; }
```


---

#### ComparisonType

```csharp
public StringComparisonType ComparisonType { get; }
```


### Methods

#### Accept

```csharp
public void Accept(IVisitor visitor)
```


---

#### IsSatisfiedBy

```csharp
public bool IsSatisfiedBy(OrderReadOnly item)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
