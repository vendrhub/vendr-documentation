---
title: GiftCardInCurrencySpecification
description: API reference for GiftCardInCurrencySpecification in Vendr, the eCommerce solution for Umbraco
---
## GiftCardInCurrencySpecification

```csharp
public class GiftCardInCurrencySpecification : IQuerySpecification<GiftCardReadOnly>, 
    ISpecification<GiftCardReadOnly>
```

**Inheritance**

* interface [IQuerySpecification&lt;!0&gt;](../../../vendr-common/vendr-common-specifications/iqueryspecification-1/)
* interface [ISpecification&lt;!0&gt;](../../../vendr-common/vendr-common-specifications/ispecification-1/)

**Namespace**
* [Vendr.Core.Specifications.GiftCard](../)

### Constructors

#### GiftCardInCurrencySpecification (1 of 2)

```csharp
public GiftCardInCurrencySpecification(Guid currencyId)
```

---

#### GiftCardInCurrencySpecification (2 of 2)

```csharp
public GiftCardInCurrencySpecification(IEnumerable<Guid> currencyIds)
```


### Properties

#### CurrencyIds

```csharp
public IEnumerable<Guid> CurrencyIds { get; }
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
