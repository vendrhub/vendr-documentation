---
title: Constants
description: API reference for Constants in Vendr, the eCommerce solution for Umbraco v8+
---
## Constants

```csharp
public static class Constants
```

**Namespace**
* [Vendr.Web](../)

### Fields

#### InstanceId

Defines a unique instance ID for this instance of Vendr.

```csharp
public static string InstanceId;
```


### Classes

#### Constants.DistributedCache

Defines the alias identifiers for Vendr's distributed cache control.

```csharp
public static class DistributedCache
```

##### Fields

#### CampaignCacheRefresherGuid

```csharp
public static readonly Guid CampaignCacheRefresherGuid;
```


---

#### CampaignCacheRefresherId

```csharp
public const string CampaignCacheRefresherId;
```


---

#### CountryCacheRefresherGuid

```csharp
public static readonly Guid CountryCacheRefresherGuid;
```


---

#### CountryCacheRefresherId

```csharp
public const string CountryCacheRefresherId;
```


---

#### CurrencyCacheRefresherGuid

```csharp
public static readonly Guid CurrencyCacheRefresherGuid;
```


---

#### CurrencyCacheRefresherId

```csharp
public const string CurrencyCacheRefresherId;
```


---

#### DiscountCacheRefresherGuid

```csharp
public static readonly Guid DiscountCacheRefresherGuid;
```


---

#### DiscountCacheRefresherId

```csharp
public const string DiscountCacheRefresherId;
```


---

#### EmailTemplateCacheRefresherGuid

```csharp
public static readonly Guid EmailTemplateCacheRefresherGuid;
```


---

#### EmailTemplateCacheRefresherId

```csharp
public const string EmailTemplateCacheRefresherId;
```


---

#### GiftCardCacheRefresherGuid

```csharp
public static readonly Guid GiftCardCacheRefresherGuid;
```


---

#### GiftCardCacheRefresherId

```csharp
public const string GiftCardCacheRefresherId;
```


---

#### OrderCacheRefresherGuid

```csharp
public static readonly Guid OrderCacheRefresherGuid;
```


---

#### OrderCacheRefresherId

```csharp
public const string OrderCacheRefresherId;
```


---

#### OrderStatusCacheRefresherGuid

```csharp
public static readonly Guid OrderStatusCacheRefresherGuid;
```


---

#### OrderStatusCacheRefresherId

```csharp
public const string OrderStatusCacheRefresherId;
```


---

#### PaymentMethodCacheRefresherGuid

```csharp
public static readonly Guid PaymentMethodCacheRefresherGuid;
```


---

#### PaymentMethodCacheRefresherId

```csharp
public const string PaymentMethodCacheRefresherId;
```


---

#### RegionCacheRefresherGuid

```csharp
public static readonly Guid RegionCacheRefresherGuid;
```


---

#### RegionCacheRefresherId

```csharp
public const string RegionCacheRefresherId;
```


---

#### ShippingMethodCacheRefresherGuid

```csharp
public static readonly Guid ShippingMethodCacheRefresherGuid;
```


---

#### ShippingMethodCacheRefresherId

```csharp
public const string ShippingMethodCacheRefresherId;
```


---

#### StoreCacheRefresherGuid

```csharp
public static readonly Guid StoreCacheRefresherGuid;
```


---

#### StoreCacheRefresherId

```csharp
public const string StoreCacheRefresherId;
```


---

#### TaxClassCacheRefresherGuid

```csharp
public static readonly Guid TaxClassCacheRefresherGuid;
```


---

#### TaxClassCacheRefresherId

```csharp
public const string TaxClassCacheRefresherId;
```



---

#### Constants.Sections

Defines the alias identifiers for Vendr's core sections.

```csharp
public static class Sections
```

##### Fields

#### Commerce

Application alias for the commerce section.

```csharp
public const string Commerce;
```



---

#### Constants.Trees

Defines the alias identifiers for vendr's core trees.

```csharp
public static class Trees
```

##### Classes

#### Constants.Trees.Settings

Defines the alias identifiers for vendr's core settings trees.

```csharp
public static class Settings
```

##### Fields

#### Alias

Tree alias for the store settings tree.

```csharp
public const string Alias;
```


---

#### Icons

Defines the maps of icons for vendr's core settings tree node types.

```csharp
public static readonly IReadOnlyDictionary<NodeType, string> Icons;
```


---

#### Ids

Defines the maps of fixed IDs for vendr's core settings tree node types.

```csharp
public static readonly IReadOnlyDictionary<NodeType, int> Ids;
```


##### Enumerations

#### Constants.Trees.Settings.NodeType

Defines the aliases for vendr's core settings tree node types.

```csharp
public enum NodeType
```

**Values**

| Name | Value | Description |
| --- | --- | --- |
| Settings | `0` | Alias for the settings node. |
| Stores | `1` | Alias for the stores node. |
| Store | `2` | Alias for a single store node. |
| OrderStatuses | `3` | Alias for the order statuses node. |
| OrderStatus | `4` | Alias for a single order status node. |
| ShippingMethods | `5` | Alias for the shipping methods node. |
| ShippingMethod | `6` | Alias for a single shipping method node. |
| PaymentMethods | `7` | Alias for the payment methods node. |
| PaymentMethod | `8` | Alias for a single payment method node. |
| Countries | `9` | Alias for the countries node. |
| Country | `10` | Alias for a single country node. |
| Region | `11` | Alias for a single region node. |
| Currencies | `12` | Alias for the currencies node. |
| Currency | `13` | Alias for a single currency node. |
| TaxClasses | `14` | Alias for the tax classes node. |
| TaxClass | `15` | Alias for a single tax class node. |
| EmailTemplates | `16` | Alias for the email templates node. |
| EmailTemplate | `17` | Alias for a single email template node. |


##### Classes

#### Constants.Trees.Settings.Groups

Defines the tree group alias identifiers for vendr's core settings trees.

```csharp
public static class Groups
```

##### Fields

#### Commerce

Alias for the commerce tree settings group.

```csharp
public const string Commerce;
```




---

#### Constants.Trees.Stores

Defines the alias identifiers for vendr's stores trees.

```csharp
public static class Stores
```

##### Fields

#### Alias

Tree alias for the commerce section.

```csharp
public const string Alias;
```


---

#### Icons

Defines the maps of icons for vendr's core tree node types.

```csharp
public static readonly IReadOnlyDictionary<NodeType, string> Icons;
```


---

#### Ids

Defines the maps of fixed IDs for vendr's core settings tree node types.

```csharp
public static readonly IReadOnlyDictionary<NodeType, int> Ids;
```


##### Enumerations

#### Constants.Trees.Stores.NodeType

Defines the aliases for vendr's core tree node types.

```csharp
public enum NodeType
```

**Values**

| Name | Value | Description |
| --- | --- | --- |
| Stores | `0` | Alias for the stores node. |
| Store | `1` | Alias for a single store node. |
| Orders | `2` | Alias for the orders node. |
| Order | `3` | Alias for a single order node. |
| Discounts | `4` | Alias for the discounts node. |
| Discount | `5` | Alias for a single discount node. |
| GiftCards | `6` | Alias for the gift cards node. |
| GiftCard | `7` | Alias for a single gift card node. |




<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Web.dll -->
