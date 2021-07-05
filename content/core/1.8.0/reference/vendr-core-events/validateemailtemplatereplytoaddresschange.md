---
title: ValidateEmailTemplateReplyToAddressChange
description: API reference for ValidateEmailTemplateReplyToAddressChange in Vendr, the eCommerce solution for Umbraco v8+
---
## ValidateEmailTemplateReplyToAddressChange

```csharp
public class ValidateEmailTemplateReplyToAddressChange : ValidationEventBase
```

**Inheritance**

* class [ValidationEventBase](../validationeventbase/)

**Namespace**
* [Vendr.Core.Events.Validation](../)

### Constructors

#### ValidateEmailTemplateReplyToAddressChange

```csharp
public ValidateEmailTemplateReplyToAddressChange(EmailTemplateReadOnly emailTemplate, 
    ChangingValue<string> emailAddress)
```


### Properties

#### EmailTemplate

```csharp
public EmailTemplateReadOnly EmailTemplate { get; }
```


---

#### ReplyToAddress

```csharp
public ChangingValue<string> ReplyToAddress { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->