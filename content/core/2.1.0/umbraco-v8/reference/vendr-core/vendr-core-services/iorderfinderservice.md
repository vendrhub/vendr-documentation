---
title: IOrderFinderService
description: API reference for IOrderFinderService in Vendr, the eCommerce solution for Umbraco
---
## IOrderFinderService

```csharp
public interface IOrderFinderService
```

**Namespace**
* [Vendr.Core.Services](../)

### Methods

#### FindOrder

Find an active order for the given customer.

```csharp
public OrderReadOnly FindOrder(string customerReference)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| customerReference | The reference of the customer to find the order of |


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
