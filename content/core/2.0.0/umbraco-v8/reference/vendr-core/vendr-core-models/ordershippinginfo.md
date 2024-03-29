---
title: OrderShippingInfo
description: API reference for OrderShippingInfo in Vendr, the eCommerce solution for Umbraco
---
## OrderShippingInfo

The shipping information for a Vendr order

```csharp
public class OrderShippingInfo
```

**Namespace**
* [Vendr.Core.Models](../)

### Properties

#### CountryId

Gets the ID of the shipping [`Country`](../country/) of the order

```csharp
public Guid? CountryId { get; }
```


---

#### RegionId

Gets the ID of the shipping [`Region`](../region/) of the order

```csharp
public Guid? RegionId { get; }
```


---

#### ShippingMethodId

Gets the ID of the [`ShippingMethod`](../shippingmethod/) of the order

```csharp
public Guid? ShippingMethodId { get; }
```


---

#### TaxRate

Gets the `TaxRate` of the shipping of the order

```csharp
public TaxRate TaxRate { get; }
```


---

#### TotalPrice

Gets the total price of the shipping of the order

```csharp
public ReadOnlyTotalPrice TotalPrice { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
