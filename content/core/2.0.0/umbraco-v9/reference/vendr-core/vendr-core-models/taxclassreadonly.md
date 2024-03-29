---
title: TaxClassReadOnly
description: API reference for TaxClassReadOnly in Vendr, the eCommerce solution for Umbraco
---
## TaxClassReadOnly

```csharp
public class TaxClassReadOnly : StoreAggregateBase<TaxClassReadOnly, TaxClass, TaxClassState>, 
    IHasName
```

**Inheritance**

* class [StoreAggregateBase&lt;TReadOnlySelf,TWritableSelf,TState&gt;](../storeaggregatebase-3/)
* interface [IHasName](../ihasname/)

**Namespace**
* [Vendr.Core.Models](../)

### Properties

#### Alias

```csharp
public string Alias { get; }
```


---

#### CountryRegionTaxRates

```csharp
public IReadOnlyCollection<CountryRegionTaxRate> CountryRegionTaxRates { get; }
```


---

#### DefaultTaxRate

```csharp
public TaxRate DefaultTaxRate { get; }
```


---

#### IsDeleted

```csharp
public bool IsDeleted { get; }
```


---

#### Name

```csharp
public string Name { get; }
```


---

#### SortOrder

```csharp
public int SortOrder { get; }
```


### Methods

#### GetTaxRate

```csharp
public TaxRate GetTaxRate(TaxSource taxSource)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
