---
title: IDiscountRuleProvider<TSettingsType>
description: API reference for IDiscountRuleProvider<TSettingsType> in Vendr, the eCommerce solution for Umbraco
---
## IDiscountRuleProvider&lt;TSettingsType&gt;

```csharp
public interface IDiscountRuleProvider<TSettingsType> : IDiscountRuleProvider
    where TSettingsType : new()
```

**Inheritance**

* interface [IDiscountRuleProvider](../idiscountruleprovider/)

**Namespace**
* [Vendr.Core.Discounts.Rules](../)

### Methods

#### ValidateRule

```csharp
public DiscountRuleResult ValidateRule(DiscountRuleContext context, TSettingsType settings)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
