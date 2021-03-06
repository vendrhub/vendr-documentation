---
title: OrderHasOrderLineWithPropertySpecification
description: API reference for OrderHasOrderLineWithPropertySpecification in Vendr, the eCommerce solution for Umbraco v8+
---
## OrderHasOrderLineWithPropertySpecification

```csharp
public class OrderHasOrderLineWithPropertySpecification : IQuerySpecification<OrderReadOnly>
```

**Inheritance**

* interface [IQuerySpecification&lt;T&gt;](../iqueryspecification-1/)

**Namespace**
* [Vendr.Core.Specifications.Order.Implement](../)

### Constructors

#### OrderHasOrderLineWithPropertySpecification (1 of 2)

```csharp
public OrderHasOrderLineWithPropertySpecification(string key, string value, 
    StringComparisonType comparisonType)
```

---

#### OrderHasOrderLineWithPropertySpecification (2 of 2)

```csharp
public OrderHasOrderLineWithPropertySpecification(KeyValuePair<string, string> property, 
    StringComparisonType comparisonType)
```


### Properties

#### ComparisonType

```csharp
public StringComparisonType ComparisonType { get; }
```


---

#### Property

```csharp
public KeyValuePair<string, string> Property { get; }
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
