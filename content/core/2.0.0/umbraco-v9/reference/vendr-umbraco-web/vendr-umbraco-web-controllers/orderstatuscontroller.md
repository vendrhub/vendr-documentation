---
title: OrderStatusController
description: API reference for OrderStatusController in Vendr, the eCommerce solution for Umbraco
---
## OrderStatusController

```csharp
public class OrderStatusController : VendrAuthorizedJsonControllerBase
```

**Inheritance**

* class [VendrAuthorizedJsonControllerBase](../vendrauthorizedjsoncontrollerbase/)

**Namespace**
* [Vendr.Umbraco.Web.Controllers](../)

### Constructors

#### OrderStatusController

```csharp
public OrderStatusController(IBackOfficeSecurityAccessor backOfficeSecurityAccesor, 
    VendrContext vendrContext)
```


### Methods

#### CreateOrderStatus

```csharp
public IActionResult CreateOrderStatus(Guid storeId)
```


---

#### DeleteOrderStatus

```csharp
public IActionResult DeleteOrderStatus(Guid orderStatusId)
```


---

#### GetOrderStatus

```csharp
public IActionResult GetOrderStatus(Guid orderStatusId)
```


---

#### GetOrderStatuses

```csharp
public IActionResult GetOrderStatuses(Guid storeId)
```


---

#### SaveOrderStatus

```csharp
public IActionResult SaveOrderStatus(OrderStatusSaveDto orderStatus)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.Web.dll -->
