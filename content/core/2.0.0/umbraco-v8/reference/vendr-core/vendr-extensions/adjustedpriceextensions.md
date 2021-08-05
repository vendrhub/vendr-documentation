---
title: AdjustedPriceExtensions
description: API reference for AdjustedPriceExtensions in Vendr, the eCommerce solution for Umbraco
---
## AdjustedPriceExtensions

Extensions methods for !:DiscountedPrice entities

```csharp
public static class AdjustedPriceExtensions
```

**Namespace**
* [Vendr.Extensions](../)

### Methods

#### Formatted

Formats the [`AdjustedPrice`](../../vendr-core-models/adjustedprice/) value for the given prices [`Currency`](../../vendr-core-models/currency/)

```csharp
public static FormattedPrice Formatted(this AdjustedPrice price)
```

**Parameters**

| Parameter | Description |
| --- | --- |
|  | The [`AdjustedPrice`](../../vendr-core-models/adjustedprice/) to format |

**Returns**

A [`FormattedAmount`](../../vendr-core-models/formattedamount/) instance


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->