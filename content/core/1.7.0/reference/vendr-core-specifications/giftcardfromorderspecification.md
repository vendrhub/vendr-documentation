---
title: GiftCardFromOrderSpecification
description: API reference for GiftCardFromOrderSpecification in Vendr, the eCommerce solution for Umbraco v8+
---
## GiftCardFromOrderSpecification

```csharp
public class GiftCardFromOrderSpecification : IQuerySpecification<GiftCardReadOnly>
```

**Inheritance**

* interface [IQuerySpecification&lt;T&gt;](../iqueryspecification-1/)

**Namespace**
* [Vendr.Core.Specifications.GiftCard.Implement](../)

### Constructors

#### GiftCardFromOrderSpecification (1 of 2)

```csharp
public GiftCardFromOrderSpecification(Guid orderId)
```

---

#### GiftCardFromOrderSpecification (2 of 2)

```csharp
public GiftCardFromOrderSpecification(string orderNumber)
```


### Properties

#### OrderId

```csharp
public Guid? OrderId { get; }
```


---

#### OrderNumber

```csharp
public string OrderNumber { get; }
```


### Methods

#### Accept

```csharp
public void Accept(IVisitor visitor, IVisitContext context)
```


---

#### IsSatisfiedBy

```csharp
public bool IsSatisfiedBy(GiftCardReadOnly item)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
