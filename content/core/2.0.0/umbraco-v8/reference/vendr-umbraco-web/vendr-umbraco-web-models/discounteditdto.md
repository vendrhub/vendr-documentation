---
title: DiscountEditDto
description: API reference for DiscountEditDto in Vendr, the eCommerce solution for Umbraco
---
## DiscountEditDto

```csharp
public class DiscountEditDto : DiscountDto, IHasPath, INotificationModel
```

**Inheritance**

* class [DiscountDto](../discountdto/)
* interface [IHasPath](../ihaspath/)

**Namespace**
* [Vendr.Umbraco.Web.Models](../)

### Constructors

#### DiscountEditDto

The default constructor.

```csharp
public DiscountEditDto()
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