---
title: ITaxService
description: API reference for ITaxService in Vendr, the eCommerce solution for Umbraco
---
## ITaxService

Defines the Vendr Tax service

```csharp
public interface ITaxService : ICachedEntityService<TaxClassReadOnly>, IService
```

**Inheritance**

* interface [ICachedEntityService&lt;TEntityType&gt;](../icachedentityservice-1/)
* interface [IService](../iservice/)

**Namespace**
* [Vendr.Core.Services](../)

### Methods

#### DeleteTaxClass (1 of 2)

Deletes a [`TaxClass`](../../vendr-core-models/taxclass/)

```csharp
public void DeleteTaxClass(Guid id)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| id | The ID of the [`TaxClass`](../../vendr-core-models/taxclass/) to delete |

---

#### DeleteTaxClass (2 of 2)

Deletes a [`TaxClass`](../../vendr-core-models/taxclass/)

```csharp
public void DeleteTaxClass(TaxClass entity)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| entity | The [`TaxClass`](../../vendr-core-models/taxclass/) to delete |


---

#### GetTaxClass (1 of 2)

Get a [`TaxClassReadOnly`](../../vendr-core-models/taxclassreadonly/) entity by ID

```csharp
public TaxClassReadOnly GetTaxClass(Guid id)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| id | The ID of the [`TaxClassReadOnly`](../../vendr-core-models/taxclassreadonly/) entity to fetch |

**Returns**

A [`TaxClassReadOnly`](../../vendr-core-models/taxclassreadonly/) entity

---

#### GetTaxClass (2 of 2)

Get a [`TaxClassReadOnly`](../../vendr-core-models/taxclassreadonly/) entity by [`Store`](../../vendr-core-models/store/) and Alias

```csharp
public TaxClassReadOnly GetTaxClass(Guid storeId, string alias)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| storeId | The ID of the [`Store`](../../vendr-core-models/store/) the [`TaxClassReadOnly`](../../vendr-core-models/taxclassreadonly/) entity belongs to |
| alias | The Alias of the [`TaxClassReadOnly`](../../vendr-core-models/taxclassreadonly/) entity to fetch |

**Returns**

A [`TaxClassReadOnly`](../../vendr-core-models/taxclassreadonly/) entity


---

#### GetTaxClasses (1 of 2)

Get a list of all [`TaxClassReadOnly`](../../vendr-core-models/taxclassreadonly/) entities from the given [`Store`](../../vendr-core-models/store/)

```csharp
public IEnumerable<TaxClassReadOnly> GetTaxClasses(Guid storeId)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| storeId | The ID of the [`Store`](../../vendr-core-models/store/) the [`TaxClassReadOnly`](../../vendr-core-models/taxclassreadonly/) entities belong to |

**Returns**

A list of [`TaxClassReadOnly`](../../vendr-core-models/taxclassreadonly/) entities

---

#### GetTaxClasses (2 of 2)

Get a list of [`TaxClassReadOnly`](../../vendr-core-models/taxclassreadonly/) entities with the given IDs

```csharp
public IEnumerable<TaxClassReadOnly> GetTaxClasses(Guid[] ids)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| ids | The IDs of the [`TaxClassReadOnly`](../../vendr-core-models/taxclassreadonly/) entities to fetch |

**Returns**

A list of [`TaxClassReadOnly`](../../vendr-core-models/taxclassreadonly/) entities


---

#### SaveTaxClass

Saves a [`TaxClass`](../../vendr-core-models/taxclass/)

```csharp
public void SaveTaxClass(TaxClass entity)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| entity | The [`TaxClass`](../../vendr-core-models/taxclass/) to save |


---

#### SortTaxClasses

Sorts a list of [`TaxClass`](../../vendr-core-models/taxclass/) entities by ID according to the order of those IDs

```csharp
public void SortTaxClasses(Guid[] sortedIds)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| sortedIds | The IDs of the [`TaxClass`](../../vendr-core-models/taxclass/) entities to sort, in the order by which to sort them |


---

#### TaxClassExists

Check to see if a [`TaxClassReadOnly`](../../vendr-core-models/taxclassreadonly/) exists in the given [`Store`](../../vendr-core-models/store/) with the given Alias

```csharp
public bool TaxClassExists(Guid storeId, string alias)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| storeId | The ID of the [`Store`](../../vendr-core-models/store/) the [`TaxClassReadOnly`](../../vendr-core-models/taxclassreadonly/) entity belongs to |
| alias | The Alias of the [`TaxClassReadOnly`](../../vendr-core-models/taxclassreadonly/) entity to check |

**Returns**

Returns `true` if the [`TaxClassReadOnly`](../../vendr-core-models/taxclassreadonly/) exists, otherwise returns `false`.


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
