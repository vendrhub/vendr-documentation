---
title: ReadOnlyOrderLineUnitPrice
description: API reference for ReadOnlyOrderLineUnitPrice in Vendr, the eCommerce solution for Umbraco
---
## ReadOnlyOrderLineUnitPrice

```csharp
public class ReadOnlyOrderLineUnitPrice : ReadOnlyAdjustedPrice
```

**Inheritance**

* class [ReadOnlyAdjustedPrice](../readonlyadjustedprice/)

**Namespace**
* [Vendr.Core.Models](../)

### Properties

#### Base

```csharp
public virtual Price Base { get; }
```


### Methods

#### ZeroValue

```csharp
public static ReadOnlyOrderLineUnitPrice ZeroValue(Guid currencyId)
```


---

#### DeepClone

```csharp
public override object DeepClone()
```


---

#### GetHashCode

```csharp
public override int GetHashCode()
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
