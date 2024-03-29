---
title: StoreService
description: API reference for StoreService in Vendr, the eCommerce solution for Umbraco
---
## StoreService

```csharp
public class StoreService : ServiceBase<StoreService>, ICachedEntityService<StoreReadOnly>, 
    IStoreAnalyticsService, IStoreService
```

**Inheritance**

* class [ServiceBase&lt;TSelf&gt;](../servicebase-1/)
* interface [ICachedEntityService&lt;TEntityType&gt;](../icachedentityservice-1/)
* interface [IStoreAnalyticsService](../istoreanalyticsservice/)
* interface [IStoreService](../istoreservice/)

**Namespace**
* [Vendr.Core.Services](../)

### Constructors

#### StoreService

```csharp
public StoreService(LicensingService licensingService, IRepositoryFactory repositoryFactory, 
    IUnitOfWorkProvider uowProvider, ILogger<StoreService> logger, ICacheAccessor cacheAccessor)
```


### Methods

#### DeleteStore (1 of 2)

```csharp
public void DeleteStore(Guid entityId)
```

---

#### DeleteStore (2 of 2)

```csharp
public void DeleteStore(Store entity)
```


---

#### GetStore (1 of 2)

```csharp
public StoreReadOnly GetStore(Guid id)
```

---

#### GetStore (2 of 2)

```csharp
public StoreReadOnly GetStore(string alias)
```


---

#### GetStores

```csharp
public IEnumerable<StoreReadOnly> GetStores()
```


---

#### GetStores

```csharp
public IEnumerable<StoreReadOnly> GetStores(Guid[] ids)
```


---

#### GetStoreStatsForDateRange

```csharp
public StoreStats GetStoreStatsForDateRange(Guid storeId, DateTime fromUtc, DateTime toUtc)
```


---

#### GetStoreSummariesFor

```csharp
public IEnumerable<StoreSummary> GetStoreSummariesFor(string userId, string[] userRoles)
```


---

#### SaveStore

```csharp
public void SaveStore(Store entity)
```


---

#### SortStores

```csharp
public void SortStores(Guid[] sortedIds)
```


---

#### StoreExists

```csharp
public bool StoreExists(string alias)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
