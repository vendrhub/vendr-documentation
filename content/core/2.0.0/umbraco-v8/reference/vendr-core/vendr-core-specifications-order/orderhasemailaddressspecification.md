---
title: OrderHasEmailAddressSpecification
description: API reference for OrderHasEmailAddressSpecification in Vendr, the eCommerce solution for Umbraco
---
## OrderHasEmailAddressSpecification

```csharp
public class OrderHasEmailAddressSpecification : IQuerySpecification<OrderReadOnly>, 
    ISpecification<OrderReadOnly>
```

**Inheritance**

* interface [IQuerySpecification&lt;!0&gt;](../../../vendr-common/vendr-common-specifications/iqueryspecification-1/)
* interface [ISpecification&lt;!0&gt;](../../../vendr-common/vendr-common-specifications/ispecification-1/)

**Namespace**
* [Vendr.Core.Specifications.Order](../)

### Constructors

#### OrderHasEmailAddressSpecification

The default constructor.

```csharp
public OrderHasEmailAddressSpecification()
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
