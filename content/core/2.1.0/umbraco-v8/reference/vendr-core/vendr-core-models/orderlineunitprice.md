---
title: OrderLineUnitPrice
description: API reference for OrderLineUnitPrice in Vendr, the eCommerce solution for Umbraco
---
## OrderLineUnitPrice

```csharp
public class OrderLineUnitPrice : AdjustedPrice
```

**Inheritance**

* class [AdjustedPrice](../adjustedprice/)

**Namespace**
* [Vendr.Core.Models](../)

### Properties

#### Base

```csharp
public virtual Price Base { get; set; }
```


### Methods

#### ZeroValue

```csharp
public static OrderLineUnitPrice ZeroValue(Guid currencyId)
```


---

#### AsReadOnly

```csharp
public virtual ReadOnlyOrderLineUnitPrice AsReadOnly()
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
