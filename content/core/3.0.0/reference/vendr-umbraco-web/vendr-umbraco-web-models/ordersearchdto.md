---
title: OrderSearchDto
description: API reference for OrderSearchDto in Vendr, the eCommerce solution for Umbraco
---
## OrderSearchDto

```csharp
public class OrderSearchDto : SearchDtoBase
```

**Inheritance**

* class [SearchDtoBase](../searchdtobase/)

**Namespace**
* [Vendr.Umbraco.Web.Models](../)

### Constructors

#### OrderSearchDto

The default constructor.

```csharp
public OrderSearchDto()
```


### Properties

#### IsFinalized

```csharp
public bool IsFinalized { get; set; }
```


---

#### OrderStatusIds

```csharp
public Guid[] OrderStatusIds { get; set; }
```


---

#### PaymentStatuses

```csharp
public PaymentStatus[] PaymentStatuses { get; set; }
```


---

#### SearchTerm

```csharp
public string SearchTerm { get; set; }
```


---

#### StoreId

```csharp
public Guid StoreId { get; set; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.Web.dll -->
