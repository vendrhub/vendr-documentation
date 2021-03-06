---
title: OrderReference
description: API reference for OrderReference in Vendr, the eCommerce solution for Umbraco v8+
---
## OrderReference

```csharp
public class OrderReference : ValueObjectBase
```

**Inheritance**

* class [ValueObjectBase](../../vendr-core-models/valueobjectbase/)

**Namespace**
* [Vendr.Core.Web.PaymentProviders](../)

### Constructors

#### OrderReference

```csharp
public OrderReference(Guid orderId, string orderNumber)
```


### Properties

#### OrderId

```csharp
public Guid OrderId { get; }
```


---

#### OrderNumber

```csharp
public string OrderNumber { get; }
```


### Methods

#### Parse

```csharp
public static OrderReference Parse(string input)
```


---

#### DeepClone

```csharp
public override object DeepClone()
```


---

#### ToString

```csharp
public override string ToString()
```


---

#### TryParse

```csharp
public static bool TryParse(string input, out OrderReference orderReference)
```


### Operators

#### OrderReference Implicit

```csharp
public static implicit operator string(OrderReference or)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.Web.dll -->
