---
title: OrderHasCustomerLastNameSpecification
description: API reference for OrderHasCustomerLastNameSpecification in Vendr, the eCommerce solution for Umbraco
---
## OrderHasCustomerLastNameSpecification

```csharp
public class OrderHasCustomerLastNameSpecification : IQuerySpecification<OrderReadOnly>, 
    ISpecification<OrderReadOnly>
```

**Inheritance**

* interface [IQuerySpecification&lt;!0&gt;](../../../vendr-common/vendr-common-specifications/iqueryspecification-1/)
* interface [ISpecification&lt;!0&gt;](../../../vendr-common/vendr-common-specifications/ispecification-1/)

**Namespace**
* [Vendr.Core.Specifications.Order](../)

### Constructors

#### OrderHasCustomerLastNameSpecification

```csharp
public OrderHasCustomerLastNameSpecification(string lastName, StringComparisonType comparisonType)
```


### Properties

#### ComparisonType

```csharp
public StringComparisonType ComparisonType { get; }
```


---

#### LastName

```csharp
public string LastName { get; }
```


### Methods

#### Accept

```csharp
public void Accept(IVisitor visitor, IVisitContext context)
```


---

#### IsSatisfiedBy

```csharp
public bool IsSatisfiedBy(OrderReadOnly item)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
