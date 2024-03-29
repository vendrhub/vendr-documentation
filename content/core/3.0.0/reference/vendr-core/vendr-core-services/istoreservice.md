---
title: IStoreService
description: API reference for IStoreService in Vendr, the eCommerce solution for Umbraco
---
## IStoreService

Define the Vendr Store service

```csharp
public interface IStoreService : ICachedEntityService<StoreReadOnly>, IService
```

**Inheritance**

* interface [ICachedEntityService&lt;TEntityType&gt;](../icachedentityservice-1/)
* interface [IService](../iservice/)

**Namespace**
* [Vendr.Core.Services](../)

### Methods

#### DeleteStore (1 of 2)

Deletes an [`Store`](../../vendr-core-models/store/)

```csharp
public void DeleteStore(Guid id)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| id | The ID of the [`Store`](../../vendr-core-models/store/) to delete |

---

#### DeleteStore (2 of 2)

Deletes an [`Store`](../../vendr-core-models/store/)

```csharp
public void DeleteStore(Store entity)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| entity | The [`Store`](../../vendr-core-models/store/) to delete |


---

#### GetStore (1 of 2)

Get an [`StoreReadOnly`](../../vendr-core-models/storereadonly/) entity by ID

```csharp
public StoreReadOnly GetStore(Guid id)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| id | The ID of the [`StoreReadOnly`](../../vendr-core-models/storereadonly/) entity to fetch |

**Returns**

An [`StoreReadOnly`](../../vendr-core-models/storereadonly/) entity

---

#### GetStore (2 of 2)

Get an [`StoreReadOnly`](../../vendr-core-models/storereadonly/) entity by Alias

```csharp
public StoreReadOnly GetStore(string alias)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| alias | The Alias of the [`StoreReadOnly`](../../vendr-core-models/storereadonly/) entity to fetch |

**Returns**

An [`StoreReadOnly`](../../vendr-core-models/storereadonly/) entity


---

#### GetStores

Get a list of all [`StoreReadOnly`](../../vendr-core-models/storereadonly/) entities

```csharp
public IEnumerable<StoreReadOnly> GetStores()
```

**Returns**

A list of [`StoreReadOnly`](../../vendr-core-models/storereadonly/) entities


---

#### GetStores

Get a list of [`StoreReadOnly`](../../vendr-core-models/storereadonly/) entities with the given IDs

```csharp
public IEnumerable<StoreReadOnly> GetStores(Guid[] ids)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| ids | The IDs of the [`StoreReadOnly`](../../vendr-core-models/storereadonly/) entities to fetch |

**Returns**

A list of [`StoreReadOnly`](../../vendr-core-models/storereadonly/) entities


---

#### SaveStore

Saves an [`Store`](../../vendr-core-models/store/)

```csharp
public void SaveStore(Store entity)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| entity | The [`Store`](../../vendr-core-models/store/) to save |


---

#### SortStores

Sorts a list of [`Store`](../../vendr-core-models/store/) entities by ID according to the order of those IDs

```csharp
public void SortStores(Guid[] sortedIds)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| sortedIds | The IDs of the [`Store`](../../vendr-core-models/store/) entities to sort, in the order by which to sort them |


---

#### StoreExists

Check to see if a [`StoreReadOnly`](../../vendr-core-models/storereadonly/) exists with the given Alias

```csharp
public bool StoreExists(string alias)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| alias | The Alias of the [`StoreReadOnly`](../../vendr-core-models/storereadonly/) entity to check |

**Returns**

Returns `true` if the [`StoreReadOnly`](../../vendr-core-models/storereadonly/) exists, otherwise returns `false`.


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
