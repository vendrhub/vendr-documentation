---
title: EmailTemplateEditDto
description: API reference for EmailTemplateEditDto in Vendr, the eCommerce solution for Umbraco
---
## EmailTemplateEditDto

```csharp
public class EmailTemplateEditDto : EmailTemplateDto, IHasPath, INotificationModel
```

**Inheritance**

* class [EmailTemplateDto](../emailtemplatedto/)
* interface [IHasPath](../ihaspath/)

**Namespace**
* [Vendr.Umbraco.Web.Models](../)

### Constructors

#### EmailTemplateEditDto

The default constructor.

```csharp
public EmailTemplateEditDto()
```


### Properties

#### Notifications

```csharp
public List<Notification> Notifications { get; set; }
```


---

#### Path

```csharp
public List<string> Path { get; set; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.Web.dll -->