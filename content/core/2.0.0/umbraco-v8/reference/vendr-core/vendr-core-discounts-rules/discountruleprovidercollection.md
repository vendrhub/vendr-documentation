---
title: DiscountRuleProviderCollection
description: API reference for DiscountRuleProviderCollection in Vendr, the eCommerce solution for Umbraco
---
## DiscountRuleProviderCollection

```csharp
public class DiscountRuleProviderCollection : ComposedCollection<IDiscountRuleProvider>
```

**Inheritance**

* class [ComposedCollection&lt;!0&gt;](../../../vendr-common/vendr-common-collections/composedcollection-1/)

**Namespace**
* [Vendr.Core.Discounts.Rules](../)

### Constructors

#### DiscountRuleProviderCollection

```csharp
public DiscountRuleProviderCollection(IEnumerable<IDiscountRuleProvider> providers)
```


### Indexers

#### DiscountRuleProviderCollection

```csharp
public IDiscountRuleProvider this[string alias] { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
