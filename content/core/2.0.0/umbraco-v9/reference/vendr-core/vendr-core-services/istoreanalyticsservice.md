---
title: IStoreAnalyticsService
description: API reference for IStoreAnalyticsService in Vendr, the eCommerce solution for Umbraco
---
## IStoreAnalyticsService

```csharp
public interface IStoreAnalyticsService
```

**Namespace**
* [Vendr.Core.Services](../)

### Methods

#### GetStoreStatsForDateRange

```csharp
public StoreStats GetStoreStatsForDateRange(Guid storeId, DateTime fromUtc, DateTime toUtc)
```


---

#### GetStoreSummariesFor

```csharp
public IEnumerable<StoreSummary> GetStoreSummariesFor(string userId, string[] roles)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
