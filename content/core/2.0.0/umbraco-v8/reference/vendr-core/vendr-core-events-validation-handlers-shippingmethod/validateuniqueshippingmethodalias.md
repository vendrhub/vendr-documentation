---
title: ValidateUniqueShippingMethodAlias
description: API reference for ValidateUniqueShippingMethodAlias in Vendr, the eCommerce solution for Umbraco
---
## ValidateUniqueShippingMethodAlias

```csharp
public class ValidateUniqueShippingMethodAlias : 
    ValidationEventHandlerBase<ValidateShippingMethodAliasChange>
```

**Inheritance**

* class [ValidationEventHandlerBase&lt;!0&gt;](../../../vendr-common/vendr-common-events/validationeventhandlerbase-1/)

**Namespace**
* [Vendr.Core.Events.Validation.Handlers.ShippingMethod](../)

### Constructors

#### ValidateUniqueShippingMethodAlias

```csharp
public ValidateUniqueShippingMethodAlias(IShippingMethodService shippingMethodService)
```


### Methods

#### Validate

```csharp
public override void Validate(ValidateShippingMethodAliasChange evt)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->