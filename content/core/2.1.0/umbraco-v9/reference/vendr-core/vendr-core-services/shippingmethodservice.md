---
title: ShippingMethodService
description: API reference for ShippingMethodService in Vendr, the eCommerce solution for Umbraco
---
## ShippingMethodService

```csharp
public class ShippingMethodService : ServiceBase<ShippingMethodService>, 
    ICachedEntityService<ShippingMethodReadOnly>, IShippingMethodService
```

**Inheritance**

* class [ServiceBase&lt;TSelf&gt;](../servicebase-1/)
* interface [ICachedEntityService&lt;TEntityType&gt;](../icachedentityservice-1/)
* interface [IShippingMethodService](../ishippingmethodservice/)

**Namespace**
* [Vendr.Core.Services](../)

### Constructors

#### ShippingMethodService

```csharp
public ShippingMethodService(LicensingService licensingService, 
    IRepositoryFactory repositoryFactory, IUnitOfWorkProvider uowProvider, 
    ILogger<ShippingMethodService> logger, ICacheAccessor cacheAccessor)
```


### Methods

#### DeleteShippingMethod (1 of 2)

```csharp
public void DeleteShippingMethod(Guid id)
```

---

#### DeleteShippingMethod (2 of 2)

```csharp
public void DeleteShippingMethod(ShippingMethod entity)
```


---

#### GetShippingMethod (1 of 2)

```csharp
public ShippingMethodReadOnly GetShippingMethod(Guid id)
```

---

#### GetShippingMethod (2 of 2)

```csharp
public ShippingMethodReadOnly GetShippingMethod(Guid storeId, string alias)
```


---

#### GetShippingMethods (1 of 2)

```csharp
public IEnumerable<ShippingMethodReadOnly> GetShippingMethods(Guid storeId)
```

---

#### GetShippingMethods (2 of 2)

```csharp
public IEnumerable<ShippingMethodReadOnly> GetShippingMethods(Guid[] ids)
```


---

#### GetShippingMethodsAllowedIn

```csharp
public IEnumerable<ShippingMethodReadOnly> GetShippingMethodsAllowedIn(Guid countryId, 
    Guid? regionId)
```


---

#### SaveShippingMethod

```csharp
public void SaveShippingMethod(ShippingMethod entity)
```


---

#### ShippingMethodExists

```csharp
public bool ShippingMethodExists(Guid storeId, string alias)
```


---

#### SortShippingMethods

```csharp
public void SortShippingMethods(Guid[] sortedIds)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
