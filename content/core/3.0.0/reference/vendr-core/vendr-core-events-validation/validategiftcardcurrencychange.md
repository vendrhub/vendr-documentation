---
title: ValidateGiftCardCurrencyChange
description: API reference for ValidateGiftCardCurrencyChange in Vendr, the eCommerce solution for Umbraco
---
## ValidateGiftCardCurrencyChange

```csharp
public class ValidateGiftCardCurrencyChange : ValidationEventBase
```

**Inheritance**

* class [ValidationEventBase](../../../vendr-common/vendr-common-events/validationeventbase/)

**Namespace**
* [Vendr.Core.Events.Validation](../)

### Constructors

#### ValidateGiftCardCurrencyChange

```csharp
public ValidateGiftCardCurrencyChange(GiftCardReadOnly giftCard, ChangingValue<Guid> currencyId)
```


### Properties

#### CurrencyId

```csharp
public ChangingValue<Guid> CurrencyId { get; }
```


---

#### GiftCard

```csharp
public GiftCardReadOnly GiftCard { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
