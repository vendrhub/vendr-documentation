---
title: OrderPropertiesAdvancedFilter
description: API reference for OrderPropertiesAdvancedFilter in Vendr, the eCommerce solution for Umbraco
---
## OrderPropertiesAdvancedFilter

```csharp
public class OrderPropertiesAdvancedFilter : OrderAdvancedFilterBase
```

**Inheritance**

* class [OrderAdvancedFilterBase](../../vendr-umbraco-filters/orderadvancedfilterbase/)

**Namespace**
* [Vendr.Umbraco.Filters.Implement](../)

### Constructors

#### OrderPropertiesAdvancedFilter

The default constructor.

```csharp
public OrderPropertiesAdvancedFilter()
```


### Methods

#### Apply

```csharp
public override IQuerySpecification<OrderReadOnly> Apply(IQuerySpecification<OrderReadOnly> query, 
    IOrderQuerySpecificationFactory where, string value)
```


---

#### CanApply

```csharp
public override bool CanApply(string value)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.dll -->
