---
title: OrderStatusEditDto
description: API reference for OrderStatusEditDto in Vendr, the eCommerce solution for Umbraco
---
## OrderStatusEditDto

```csharp
public class OrderStatusEditDto : OrderStatusDto, IHasPath, INotificationModel
```

**Inheritance**

* class [OrderStatusDto](../orderstatusdto/)
* interface [IHasPath](../ihaspath/)

**Namespace**
* [Vendr.Umbraco.Web.Models](../)

### Constructors

#### OrderStatusEditDto

The default constructor.

```csharp
public OrderStatusEditDto()
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
