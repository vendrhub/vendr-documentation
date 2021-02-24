---
title: StoreEditDto
description: API reference for StoreEditDto in Vendr, the eCommerce solution for Umbraco v8+
---
## StoreEditDto

```csharp
public class StoreEditDto : StoreDto, IHasPath, INotificationModel
```

**Inheritance**

* class [StoreDto](../storedto/)
* interface [IHasPath](../ihaspath/)

**Namespace**
* [Vendr.Web.Models](../)

### Constructors

#### StoreEditDto

The default constructor.

```csharp
public StoreEditDto()
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


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Web.dll -->