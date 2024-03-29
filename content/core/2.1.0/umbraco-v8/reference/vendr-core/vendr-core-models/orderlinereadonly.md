---
title: OrderLineReadOnly
description: API reference for OrderLineReadOnly in Vendr, the eCommerce solution for Umbraco
---
## OrderLineReadOnly

A Vendr read only Order Line entity

```csharp
public class OrderLineReadOnly : EntityBase<OrderLineState>, IHasReadableOrderLines, 
    IHasReadableProperties
```

**Inheritance**

* class [EntityBase&lt;TState&gt;](../entitybase-1/)
* interface [IHasReadableOrderLines](../ihasreadableorderlines/)
* interface [IHasReadableProperties](../ihasreadableproperties/)

**Namespace**
* [Vendr.Core.Models](../)

### Properties

#### Attributes

Gets the attributes of the order line

```csharp
public IReadOnlyCollection<AttributeCombination> Attributes { get; }
```


---

#### BundleId

Gets bundle ID of the of the order line

```csharp
public string BundleId { get; }
```


---

#### CopiedFromOrderLineId

Gets the ID of a parent order line this order line was copied from

```csharp
public Guid? CopiedFromOrderLineId { get; }
```


---

#### Name

Gets the name of the product of the order line

```csharp
public string Name { get; }
```


---

#### OrderId

Gets the ID of the [`Order`](../order/) this entity belongs to

```csharp
public Guid OrderId { get; }
```


---

#### OrderLines

Gets the child order lines of the order line

```csharp
public IReadOnlyCollection<OrderLineReadOnly> OrderLines { get; }
```


---

#### ProductReference

Gets the unique product reference of the product of the order line

```csharp
public string ProductReference { get; }
```


---

#### ProductVariantReference

Gets the unique product variant reference of the product of the order line, if it is a product variant order line

```csharp
public string ProductVariantReference { get; }
```


---

#### Properties

Gets the properties of the order line

```csharp
public IReadOnlyDictionary<string, PropertyValue> Properties { get; }
```


---

#### Quantity

Gets the quantity of the product of the order line

```csharp
public decimal Quantity { get; }
```


---

#### Sku

Gets the unique SKU of the product of the order line

```csharp
public string Sku { get; }
```


---

#### StoreId

Gets the ID of the [`Store`](../store/) this entity belongs to

```csharp
public Guid StoreId { get; }
```


---

#### TaxClassId

Gets ID of the [`TaxClass`](../taxclass/) of the order line

```csharp
public Guid? TaxClassId { get; }
```


---

#### TaxRate

Gets the `TaxRate` of the order line

```csharp
public TaxRate TaxRate { get; }
```


---

#### TotalPrice

Gets the total price of the order line

```csharp
public ReadOnlyOrderLineTotalPrice TotalPrice { get; }
```


---

#### UnitPrice

Gets the unit price of the order line

```csharp
public ReadOnlyOrderLineUnitPrice UnitPrice { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
