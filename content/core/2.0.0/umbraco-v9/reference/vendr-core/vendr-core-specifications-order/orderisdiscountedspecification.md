---
title: OrderIsDiscountedSpecification
description: API reference for OrderIsDiscountedSpecification in Vendr, the eCommerce solution for Umbraco
---
## OrderIsDiscountedSpecification

```csharp
public class OrderIsDiscountedSpecification : IQuerySpecification<OrderReadOnly>, 
    ISpecification<OrderReadOnly>
```

**Inheritance**

* interface [IQuerySpecification&lt;!0&gt;](../../../vendr-common/vendr-common-specifications/iqueryspecification-1/)
* interface [ISpecification&lt;!0&gt;](../../../vendr-common/vendr-common-specifications/ispecification-1/)

**Namespace**
* [Vendr.Core.Specifications.Order](../)

### Constructors

#### OrderIsDiscountedSpecification (1 of 2)

```csharp
public OrderIsDiscountedSpecification(Guid discountId)
```

---

#### OrderIsDiscountedSpecification (2 of 2)

```csharp
public OrderIsDiscountedSpecification(IEnumerable<Guid> discountIds)
```


### Properties

#### DiscountIds

```csharp
public IEnumerable<Guid> DiscountIds { get; }
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
