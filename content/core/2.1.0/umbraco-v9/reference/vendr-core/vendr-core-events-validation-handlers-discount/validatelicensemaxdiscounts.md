---
title: ValidateLicenseMaxDiscounts
description: API reference for ValidateLicenseMaxDiscounts in Vendr, the eCommerce solution for Umbraco
---
## ValidateLicenseMaxDiscounts

```csharp
public class ValidateLicenseMaxDiscounts : ValidationEventHandlerBase<ValidateDiscountCreate>
```

**Inheritance**

* class [ValidationEventHandlerBase&lt;!0&gt;](../../../vendr-common/vendr-common-events/validationeventhandlerbase-1/)

**Namespace**
* [Vendr.Core.Events.Validation.Handlers.Discount](../)

### Constructors

#### ValidateLicenseMaxDiscounts

```csharp
public ValidateLicenseMaxDiscounts(LicensingService licensingService, 
    IDiscountService discountService)
```


### Methods

#### Validate

```csharp
public override void Validate(ValidateDiscountCreate evt)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->