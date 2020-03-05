---
title: Discount Rule / Rewards
description: Define when a Discount should apply and what should be the Reward in Vendr, the eCommerce solution for Umbraco v8+
---

When creating Discounts in the Vendr back-office they are defined using a series of rule and reward builders that let you configure exactly when a Discount should apply and what exactly the Reward should be for the Discount.

Out of the box these builders come with a handful of the most common Rules / Rewards that should suit the majority of web stores needs, however if you should need to create your own Rules / Rewards then these are extendable via a Provider model allowing you to incorporate your own custom logic.

## Example Custom Discount Rule Provider

An example of a Discount Rule Provider would look something like this:

````csharp
[DiscountRuleProvider("myCustomRule", "My Custom Rule")]
public class MyCustomRuleProvider : OrderDiscountRuleProviderBase<MyCustomRuleProviderSettings>
{
    public override DiscountRuleResult ValidateRule(DiscountRuleContext ctx, MyCustomRuleProviderSettings settings)
    {
        if (/* Some custom logic */)
            return Fulfilled();
        
        return Unfulfilled();
    }
}

public class MyCustomRuleProviderSettings : IDiscountRuleProviderSettings
{
    [DiscountRuleProviderSetting(Key = "priceType",
        Name = "Price Type",
        Description = "The type of price to compare against")]
    public OrderPriceType PriceType { get; set; }

    ...
}

````

## Example Custom Discount Reward Provider