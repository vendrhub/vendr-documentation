---
title: OrderPaymentInfo
description: API reference for OrderPaymentInfo in Vendr, the eCommerce solution for Umbraco
---
## OrderPaymentInfo

The payment information for a Vendr order

```csharp
public class OrderPaymentInfo
```

**Namespace**
* [Vendr.Core.Models](../)

### Properties

#### CountryId

Gets the ID of the payment [`Country`](../country/) of the order

```csharp
public Guid? CountryId { get; }
```


---

#### PaymentMethodId

Gets the ID of the [`PaymentMethod`](../paymentmethod/) of the order

```csharp
public Guid? PaymentMethodId { get; }
```


---

#### RegionId

Gets the ID of the payment [`Region`](../region/) of the order

```csharp
public Guid? RegionId { get; }
```


---

#### TaxRate

Gets the `TaxRate` of the payment of the order

```csharp
public TaxRate TaxRate { get; }
```


---

#### TotalPrice

Gets the total price of the payment of the order

```csharp
public ReadOnlyTotalPrice TotalPrice { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
