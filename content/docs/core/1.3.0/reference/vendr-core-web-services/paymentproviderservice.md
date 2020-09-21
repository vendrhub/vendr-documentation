---
title: PaymentProviderService
description: API reference for PaymentProviderService in Vendr, the eCommerce solution for Umbraco v8+
---
## PaymentProviderService

```csharp
public class PaymentProviderService : IPaymentProviderService
```

**Inheritance**

* interface [IPaymentProviderService](../ipaymentproviderservice/)

**Namespace**
* [Vendr.Core.Web.Services](../)

### Constructors

#### PaymentProviderService

```csharp
public PaymentProviderService(PaymentProviderCollection paymentProviders)
```


### Methods

#### GetPaymentProvider

```csharp
public IPaymentProvider GetPaymentProvider(string alias)
```


---

#### GetPaymentProviderDefinitions

```csharp
public IEnumerable<PaymentProviderDefinition> GetPaymentProviderDefinitions()
```


---

#### GetPaymentProviderScaffold

```csharp
public PaymentProviderScaffold GetPaymentProviderScaffold(string alias)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.Web.dll -->