---
title: OrderController
description: API reference for OrderController in Vendr, the eCommerce solution for Umbraco
---
## OrderController

```csharp
public class OrderController : OrderControllerBase
```

**Inheritance**

* class [OrderControllerBase](../ordercontrollerbase/)

**Namespace**
* [Vendr.Umbraco.Web.Controllers](../)

### Constructors

#### OrderController

```csharp
public OrderController(IBackOfficeSecurityAccessor backOfficeSecurityAccesor, 
    VendrContext vendrContext, OrderAdvancedFilterCollection advancedFilters)
```


### Methods

#### CancelPayment

```csharp
public Task<IActionResult> CancelPayment(Guid orderId)
```


---

#### CapturePayment

```csharp
public Task<IActionResult> CapturePayment(Guid orderId)
```


---

#### ChangeOrderStatus

```csharp
public IActionResult ChangeOrderStatus(Guid orderId, Guid orderStatusId)
```


---

#### DeleteOrder

```csharp
public IActionResult DeleteOrder(Guid orderId)
```


---

#### GetOrder

```csharp
public IActionResult GetOrder(Guid orderId)
```


---

#### GetOrderAdvancedFilters

```csharp
public IActionResult GetOrderAdvancedFilters()
```


---

#### GetOrderEditorConfig

```csharp
public IActionResult GetOrderEditorConfig(Guid storeId)
```


---

#### GetOrderEmailConfig

```csharp
public IActionResult GetOrderEmailConfig(Guid orderId)
```


---

#### GetOrderHistoryByOrder

```csharp
public IActionResult GetOrderHistoryByOrder(Guid orderId)
```


---

#### GetOrderRegisteredCustomerInfo

```csharp
public IActionResult GetOrderRegisteredCustomerInfo(Guid orderId)
```


---

#### GetOrderTransactionInfo

```csharp
public IActionResult GetOrderTransactionInfo(Guid orderId)
```


---

#### RefundPayment

```csharp
public Task<IActionResult> RefundPayment(Guid orderId)
```


---

#### SaveOrder

```csharp
public IActionResult SaveOrder(OrderSaveDto order)
```


---

#### SearchOrders

```csharp
public IActionResult SearchOrders(OrderSearchDto model)
```


---

#### SyncPaymentStatus

```csharp
public Task<IActionResult> SyncPaymentStatus(Guid orderId)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.Web.dll -->
