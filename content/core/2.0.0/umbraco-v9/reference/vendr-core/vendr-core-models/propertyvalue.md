---
title: PropertyValue
description: API reference for PropertyValue in Vendr, the eCommerce solution for Umbraco
---
## PropertyValue

```csharp
public sealed class PropertyValue : ValueObjectBase
```

**Inheritance**

* class [ValueObjectBase](../../../vendr-common/vendr-common-models/valueobjectbase/)

**Namespace**
* [Vendr.Core.Models](../)

### Constructors

#### PropertyValue

```csharp
public PropertyValue(string value, bool isServerSideOnly = false, bool isReadOnly = false)
```


### Properties

#### IsReadOnly

```csharp
public bool IsReadOnly { get; }
```


---

#### IsServerSideOnly

```csharp
public bool IsServerSideOnly { get; }
```


---

#### Value

```csharp
public string Value { get; }
```


### Methods

#### DeepClone

```csharp
public override object DeepClone()
```


---

#### ToString

```csharp
public override string ToString()
```


### Operators

#### PropertyValue Implicit

```csharp
public static implicit operator string(PropertyValue propertyValue)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
