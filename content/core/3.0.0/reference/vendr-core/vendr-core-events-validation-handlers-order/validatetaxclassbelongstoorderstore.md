---
title: ValidateTaxClassBelongsToOrderStore
description: API reference for ValidateTaxClassBelongsToOrderStore in Vendr, the eCommerce solution for Umbraco
---
## ValidateTaxClassBelongsToOrderStore

```csharp
public class ValidateTaxClassBelongsToOrderStore : 
    ValidationEventHandlerBase<ValidateOrderTaxClassChange>
```

**Inheritance**

* class [ValidationEventHandlerBase&lt;!0&gt;](../../../vendr-common/vendr-common-events/validationeventhandlerbase-1/)

**Namespace**
* [Vendr.Core.Events.Validation.Handlers.Order](../)

### Constructors

#### ValidateTaxClassBelongsToOrderStore

```csharp
public ValidateTaxClassBelongsToOrderStore(ITaxService taxService)
```


### Methods

#### Validate

```csharp
public override void Validate(ValidateOrderTaxClassChange evt)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
