---
title: ValidateOrderPaymentCountryRegionAllowedByOrderCurrency
description: API reference for ValidateOrderPaymentCountryRegionAllowedByOrderCurrency in Vendr, the eCommerce solution for Umbraco v8+
---
## ValidateOrderPaymentCountryRegionAllowedByOrderCurrency

```csharp
public class ValidateOrderPaymentCountryRegionAllowedByOrderCurrency : 
    ValidationEventHandlerBase<ValidateOrderPaymentCountryRegionChange>
```

**Inheritance**

* class [ValidationEventHandlerBase&lt;TValidationEvent&gt;](../validationeventhandlerbase-1/)

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
