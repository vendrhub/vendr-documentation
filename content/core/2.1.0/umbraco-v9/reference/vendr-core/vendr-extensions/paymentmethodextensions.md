---
title: PaymentMethodExtensions
description: API reference for PaymentMethodExtensions in Vendr, the eCommerce solution for Umbraco
---
## PaymentMethodExtensions

```csharp
public static class PaymentMethodExtensions
```

**Namespace**
* [Vendr.Extensions](../)

### Methods

#### CalculatePrice (1 of 2)

```csharp
public static Price CalculatePrice(this PaymentMethodReadOnly paymentMethod)
```

---

#### CalculatePrice (2 of 2)

```csharp
public static Price CalculatePrice(this PaymentMethodReadOnly paymentMethod, 
    SessionManagerAccessor sessionAccessor, IPaymentCalculator calculator, 
    ITaxSourceFactory taxSourceFactory)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
