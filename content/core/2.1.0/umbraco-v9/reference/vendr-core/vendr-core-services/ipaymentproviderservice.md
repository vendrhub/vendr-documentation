---
title: IPaymentProviderService
description: API reference for IPaymentProviderService in Vendr, the eCommerce solution for Umbraco
---
## IPaymentProviderService

```csharp
public interface IPaymentProviderService : IService
```

**Inheritance**

* interface [IService](../iservice/)

**Namespace**
* [Vendr.Core.Services](../)

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


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
