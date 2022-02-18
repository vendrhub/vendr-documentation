---
title: GiftCardSearchableFieldsMatchSpecification
description: API reference for GiftCardSearchableFieldsMatchSpecification in Vendr, the eCommerce solution for Umbraco
---
## GiftCardSearchableFieldsMatchSpecification

```csharp
public class GiftCardSearchableFieldsMatchSpecification : IQuerySpecification<GiftCardReadOnly>, 
    ISpecification<GiftCardReadOnly>
```

**Inheritance**

* interface [IQuerySpecification&lt;!0&gt;](../../../vendr-common/vendr-common-specifications/iqueryspecification-1/)
* interface [ISpecification&lt;!0&gt;](../../../vendr-common/vendr-common-specifications/ispecification-1/)

**Namespace**
* [Vendr.Core.Specifications.GiftCard](../)

### Constructors

#### GiftCardSearchableFieldsMatchSpecification

```csharp
public GiftCardSearchableFieldsMatchSpecification(string searchTerm, 
    StringComparisonType comparisonType)
```


### Properties

#### ComparisonType

```csharp
public StringComparisonType ComparisonType { get; }
```


---

#### SearchTerm

```csharp
public string SearchTerm { get; }
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