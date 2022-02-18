---
title: PaymentMethodController
description: API reference for PaymentMethodController in Vendr, the eCommerce solution for Umbraco
---
## PaymentMethodController

```csharp
public class PaymentMethodController : VendrAuthorizedJsonControllerBase
```

**Inheritance**

* class [VendrAuthorizedJsonControllerBase](../vendrauthorizedjsoncontrollerbase/)

**Namespace**
* [Vendr.Umbraco.Web.Controllers](../)

### Constructors

#### PaymentMethodController

```csharp
public PaymentMethodController(IBackOfficeSecurityAccessor backOfficeSecurityAccesor, 
    VendrContext vendrContext)
```


### Methods

#### CreatePaymentMethod

```csharp
public IActionResult CreatePaymentMethod(Guid storeId, string paymentProviderAlias)
```


---

#### DeletePaymentMethod

```csharp
public IActionResult DeletePaymentMethod(Guid paymentMethodId)
```


---

#### GetPaymentMethod

```csharp
public IActionResult GetPaymentMethod(Guid paymentMethodId)
```


---

#### GetPaymentMethods

```csharp
public IActionResult GetPaymentMethods(Guid storeId)
```


---

#### GetPaymentProviderDefinitions

```csharp
public IActionResult GetPaymentProviderDefinitions()
```


---

#### GetPaymentProviderScaffold

```csharp
public IActionResult GetPaymentProviderScaffold(string paymentProviderAlias)
```


---

#### SavePaymentMethod

```csharp
public IActionResult SavePaymentMethod(PaymentMethodSaveDto paymentMethod)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.Web.dll -->