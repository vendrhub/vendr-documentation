---
title: ValidateEmailTemplateToAddressChange
description: API reference for ValidateEmailTemplateToAddressChange in Vendr, the eCommerce solution for Umbraco
---
## ValidateEmailTemplateToAddressChange

```csharp
public class ValidateEmailTemplateToAddressChange : ValidationEventBase
```

**Inheritance**

* class [ValidationEventBase](../../../vendr-common/vendr-common-events/validationeventbase/)

**Namespace**
* [Vendr.Core.Events.Validation](../)

### Constructors

#### ValidateEmailTemplateToAddressChange

```csharp
public ValidateEmailTemplateToAddressChange(EmailTemplateReadOnly emailTemplate, 
    ChangingValue<string> toAddress)
```


### Properties

#### EmailTemplate

```csharp
public EmailTemplateReadOnly EmailTemplate { get; }
```


---

#### ToAddress

```csharp
public ChangingValue<string> ToAddress { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
