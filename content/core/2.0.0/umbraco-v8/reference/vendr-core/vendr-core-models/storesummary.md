---
title: StoreSummary
description: API reference for StoreSummary in Vendr, the eCommerce solution for Umbraco
---
## StoreSummary

```csharp
public class StoreSummary : ValueObjectBase
```

**Inheritance**

* class [ValueObjectBase](../../../vendr-common/vendr-common-models/valueobjectbase/)

**Namespace**
* [Vendr.Core.Models](../)

### Properties

#### BaseCurrencyCode

```csharp
public string BaseCurrencyCode { get; }
```


---

#### BaseCurrencyId

```csharp
public Guid? BaseCurrencyId { get; }
```


---

#### BaseCurrencyName

```csharp
public string BaseCurrencyName { get; }
```


---

#### DefaultCountryId

```csharp
public Guid? DefaultCountryId { get; }
```


---

#### DefaultCountryName

```csharp
public string DefaultCountryName { get; }
```


---

#### Id

```csharp
public Guid Id { get; }
```


---

#### Name

```csharp
public string Name { get; }
```


---

#### TotalOrdersToDate

```csharp
public long TotalOrdersToDate { get; }
```


---

#### TotalRevenueToDate

```csharp
public Amount TotalRevenueToDate { get; }
```


### Methods

#### DeepClone

```csharp
public override object DeepClone()
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
