---
title: ValidateDiscountRewardsChange
description: API reference for ValidateDiscountRewardsChange in Vendr, the eCommerce solution for Umbraco
---
## ValidateDiscountRewardsChange

```csharp
public class ValidateDiscountRewardsChange : ValidationEventBase
```

**Inheritance**

* class [ValidationEventBase](../../../vendr-common/vendr-common-events/validationeventbase/)

**Namespace**
* [Vendr.Core.Events.Validation](../)

### Constructors

#### ValidateDiscountRewardsChange

```csharp
public ValidateDiscountRewardsChange(DiscountReadOnly discount, 
    ChangingValue<IReadOnlyCollection<DiscountRewardConfig>> rewards)
```


### Properties

#### Discount

```csharp
public DiscountReadOnly Discount { get; }
```


---

#### Rewards

```csharp
public ChangingValue<IReadOnlyCollection<DiscountRewardConfig>> Rewards { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
