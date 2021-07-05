---
title: ProductAttributePresetReadOnly
description: API reference for ProductAttributePresetReadOnly in Vendr, the eCommerce solution for Umbraco v8+
---
## ProductAttributePresetReadOnly

A Vendr read only Product Attribute Preset entity

```csharp
public class ProductAttributePresetReadOnly : 
    StoreAggregateBase<ProductAttributePresetReadOnly, ProductAttributePreset, ProductAttributePresetState>, 
    IHasName
```

**Inheritance**

* class [StoreAggregateBase&lt;TReadOnlySelf,TWritableSelf,TState&gt;](../storeaggregatebase-3/)
* interface [IHasName](../ihasname/)

**Namespace**
* [Vendr.Core.Models](../)

### Properties

#### Alias

Gets the Alias of the Product Attribute Preset

```csharp
public string Alias { get; }
```


---

#### AllowedAttributes

Gets the list of allowed Product Attribtues for this Product Attribute Preset

```csharp
public IReadOnlyCollection<AllowedProductAttribute> AllowedAttributes { get; }
```


---

#### Description

Gets the Description of the Product Attribute Preset

```csharp
public string Description { get; }
```


---

#### Icon

Gets the Icon of the Product Attribute Preset

```csharp
public string Icon { get; }
```


---

#### IsDeleted

Gets a flag indicating whether the Product Attribute Preset is deleted or not

```csharp
public bool IsDeleted { get; }
```


---

#### Name

Gets the Name of the Product Attribute Preset

```csharp
public string Name { get; }
```


---

#### SortOrder

Gets the Sort Order of the Product Attribute Preset

```csharp
public int SortOrder { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->