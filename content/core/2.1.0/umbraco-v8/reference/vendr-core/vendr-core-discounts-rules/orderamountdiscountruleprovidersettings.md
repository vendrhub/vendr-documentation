---
title: OrderAmountDiscountRuleProviderSettings
description: API reference for OrderAmountDiscountRuleProviderSettings in Vendr, the eCommerce solution for Umbraco
---
## OrderAmountDiscountRuleProviderSettings

```csharp
public class OrderAmountDiscountRuleProviderSettings
```

**Namespace**
* [Vendr.Core.Discounts.Rules](../)

### Constructors

#### OrderAmountDiscountRuleProviderSettings

The default constructor.

```csharp
public OrderAmountDiscountRuleProviderSettings()
```


### Properties

#### Amounts

```csharp
public IDictionary<Guid, decimal?> Amounts { get; set; }
```


---

#### AmountsIncludeTax

```csharp
public bool AmountsIncludeTax { get; set; }
```


---

#### ComparisonOperator

```csharp
public ComparisonOperator ComparisonOperator { get; set; }
```


---

#### PriceType

```csharp
public OrderPriceType PriceType { get; set; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
