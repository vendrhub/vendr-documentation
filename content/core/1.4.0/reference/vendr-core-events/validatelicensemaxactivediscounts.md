---
title: ValidateLicenseMaxActiveDiscounts
description: API reference for ValidateLicenseMaxActiveDiscounts in Vendr, the eCommerce solution for Umbraco v8+
---
## ValidateLicenseMaxActiveDiscounts

```csharp
public class ValidateLicenseMaxActiveDiscounts : ValidationEventHandlerBase<ValidateDiscountSave>
```

**Inheritance**

* class [ValidationEventHandlerBase&lt;TValidationEvent&gt;](../validationeventhandlerbase-1/)

**Namespace**
* [Vendr.Core.Events.Validation.Handlers.Discount](../)

### Constructors

#### ValidateLicenseMaxActiveDiscounts

```csharp
public ValidateLicenseMaxActiveDiscounts(ILicensingService licensingService, 
    IDiscountService discountService)
```


### Methods

#### Validate

```csharp
public override void Validate(ValidateDiscountSave evt)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
