---
title: ValidateOrderPaymentCountryRegionAllowedByOrderCurrency
description: API reference for ValidateOrderPaymentCountryRegionAllowedByOrderCurrency in Vendr, the eCommerce solution for Umbraco
---
## ValidateOrderPaymentCountryRegionAllowedByOrderCurrency

```csharp
public class ValidateOrderPaymentCountryRegionAllowedByOrderCurrency : 
    ValidationEventHandlerBase<ValidateOrderPaymentCountryRegionChange>
```

**Inheritance**

* class [ValidationEventHandlerBase&lt;!0&gt;](../../../vendr-common/vendr-common-events/validationeventhandlerbase-1/)

**Namespace**
* [Vendr.Core.Events.Validation.Handlers.Order](../)

### Constructors

#### ValidateOrderPaymentCountryRegionAllowedByOrderCurrency

```csharp
public ValidateOrderPaymentCountryRegionAllowedByOrderCurrency(ICurrencyService currencyService)
```


### Methods

#### Validate

```csharp
public override void Validate(ValidateOrderPaymentCountryRegionChange evt)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->