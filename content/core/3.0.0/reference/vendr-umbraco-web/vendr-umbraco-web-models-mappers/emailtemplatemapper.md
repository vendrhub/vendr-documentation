---
title: EmailTemplateMapper
description: API reference for EmailTemplateMapper in Vendr, the eCommerce solution for Umbraco
---
## EmailTemplateMapper

```csharp
public static class EmailTemplateMapper
```

**Namespace**
* [Vendr.Umbraco.Web.Models.Mappers](../)

### Methods

#### EmailTemplateEntitiesToBasicDtos

```csharp
public static IEnumerable<EmailTemplateBasicDto> EmailTemplateEntitiesToBasicDtos(
    IEnumerable<EmailTemplateReadOnly> entities)
```


---

#### EmailTemplateEntityToBasicDto

```csharp
public static EmailTemplateBasicDto EmailTemplateEntityToBasicDto(EmailTemplateReadOnly entity, 
    EmailTemplateBasicDto dto = null)
```


---

#### EmailTemplateEntityToEditDto

```csharp
public static EmailTemplateEditDto EmailTemplateEntityToEditDto(EmailTemplateReadOnly entity, 
    EmailTemplateEditDto dto = null)
```


---

#### EmailTemplateSaveDtoToEntity

```csharp
public static EmailTemplate EmailTemplateSaveDtoToEntity(EmailTemplateSaveDto dto, 
    EmailTemplate entity)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.Web.dll -->
