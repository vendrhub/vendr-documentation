---
title: ValidateNotRegionDefaultPaymentMethod
description: API reference for ValidateNotRegionDefaultPaymentMethod in Vendr, the eCommerce solution for Umbraco
---
## ValidateNotRegionDefaultPaymentMethod

```csharp
public class ValidateNotRegionDefaultPaymentMethod : 
    ValidationEventHandlerBase<ValidatePaymentMethodDelete>
```

**Inheritance**

* class [ValidationEventHandlerBase&lt;!0&gt;](../../../vendr-common/vendr-common-events/validationeventhandlerbase-1/)

**Namespace**
* [Vendr.Core.Events.Validation.Handlers.PaymentMethod](../)

### Constructors

#### ValidateNotRegionDefaultPaymentMethod

```csharp
public ValidateNotRegionDefaultPaymentMethod(ICountryService countryService, 
    ILogger<ValidateNotRegionDefaultPaymentMethod> logger)
```


### Methods

#### Validate

```csharp
public override void Validate(ValidatePaymentMethodDelete evt)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->