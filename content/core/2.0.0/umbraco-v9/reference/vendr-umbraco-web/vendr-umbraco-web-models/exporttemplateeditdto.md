---
title: ExportTemplateEditDto
description: API reference for ExportTemplateEditDto in Vendr, the eCommerce solution for Umbraco
---
## ExportTemplateEditDto

```csharp
public class ExportTemplateEditDto : ExportTemplateDto, IHasPath, INotificationModel
```

**Inheritance**

* class [ExportTemplateDto](../exporttemplatedto/)
* interface [IHasPath](../ihaspath/)

**Namespace**
* [Vendr.Umbraco.Web.Models](../)

### Constructors

#### ExportTemplateEditDto

The default constructor.

```csharp
public ExportTemplateEditDto()
```


### Properties

#### Notifications

```csharp
public List<BackOfficeNotification> Notifications { get; set; }
```


---

#### Path

```csharp
public List<string> Path { get; set; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.Web.dll -->
