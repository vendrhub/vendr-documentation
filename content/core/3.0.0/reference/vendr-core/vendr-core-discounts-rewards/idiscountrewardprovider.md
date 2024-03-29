---
title: IDiscountRewardProvider
description: API reference for IDiscountRewardProvider in Vendr, the eCommerce solution for Umbraco
---
## IDiscountRewardProvider

```csharp
public interface IDiscountRewardProvider
```

**Namespace**
* [Vendr.Core.Discounts.Rewards](../)

### Properties

#### Alias

```csharp
public string Alias { get; }
```


---

#### Description

```csharp
public string Description { get; }
```


---

#### Icon

```csharp
public string Icon { get; }
```


---

#### LabelView

```csharp
public string LabelView { get; }
```


---

#### Name

```csharp
public string Name { get; }
```


---

#### SettingDefinitions

```csharp
public IEnumerable<DiscountRewardProviderSettingDefinition> SettingDefinitions { get; }
```


### Methods

#### CalculateReward

```csharp
public DiscountRewardCalculation CalculateReward(DiscountRewardContext context, 
    IReadOnlyDictionary<string, string> settings)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
