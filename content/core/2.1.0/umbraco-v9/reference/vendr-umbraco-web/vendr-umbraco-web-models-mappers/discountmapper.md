---
title: DiscountMapper
description: API reference for DiscountMapper in Vendr, the eCommerce solution for Umbraco
---
## DiscountMapper

```csharp
public static class DiscountMapper
```

**Namespace**
* [Vendr.Umbraco.Web.Models.Mappers](../)

### Methods

#### DiscountEntitiesToBasicDtos

```csharp
public static IEnumerable<DiscountBasicDto> DiscountEntitiesToBasicDtos(
    IEnumerable<DiscountReadOnly> entities)
```


---

#### DiscountEntityToBasicDto

```csharp
public static DiscountBasicDto DiscountEntityToBasicDto(DiscountReadOnly entity, 
    DiscountBasicDto dto = null)
```


---

#### DiscountEntityToEditDto

```csharp
public static DiscountEditDto DiscountEntityToEditDto(DiscountReadOnly entity, 
    DiscountEditDto dto = null)
```


---

#### DiscountSaveDtoToEntity

```csharp
public static Discount DiscountSaveDtoToEntity(DiscountSaveDto dto, Discount entity)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.Web.dll -->
