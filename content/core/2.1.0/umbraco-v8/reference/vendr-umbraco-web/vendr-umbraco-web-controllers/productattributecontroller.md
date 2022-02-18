---
title: ProductAttributeController
description: API reference for ProductAttributeController in Vendr, the eCommerce solution for Umbraco
---
## ProductAttributeController

```csharp
public class ProductAttributeController : VendrAuthorizedJsonControllerBase
```

**Inheritance**

* class [VendrAuthorizedJsonControllerBase](../vendrauthorizedjsoncontrollerbase/)

**Namespace**
* [Vendr.Umbraco.Web.Controllers](../)

### Constructors

#### ProductAttributeController

```csharp
public ProductAttributeController(VendrContext vendrContext)
```


### Methods

#### CreateProductAttribute

```csharp
public IHttpActionResult CreateProductAttribute(Guid storeId)
```


---

#### CreateProductAttributePreset

```csharp
public IHttpActionResult CreateProductAttributePreset(Guid storeId)
```


---

#### DeleteProductAttribute

```csharp
public IHttpActionResult DeleteProductAttribute(Guid productAttributeId)
```


---

#### DeleteProductAttributePreset

```csharp
public IHttpActionResult DeleteProductAttributePreset(Guid productAttributePresetId)
```


---

#### GetProductAttribute

```csharp
public IHttpActionResult GetProductAttribute(Guid productAttributeId)
```


---

#### GetProductAttributePreset

```csharp
public IHttpActionResult GetProductAttributePreset(Guid productAttributePresetId)
```


---

#### GetProductAttributePresets

```csharp
public IHttpActionResult GetProductAttributePresets(Guid storeId)
```


---

#### GetProductAttributePresetsWithAllowedAttributes

```csharp
public IHttpActionResult GetProductAttributePresetsWithAllowedAttributes(Guid storeId)
```


---

#### GetProductAttributes

```csharp
public IHttpActionResult GetProductAttributes(Guid storeId)
```


---

#### GetProductAttributesWithValues

```csharp
public IHttpActionResult GetProductAttributesWithValues(Guid storeId)
```


---

#### SaveProductAttribute

```csharp
public IHttpActionResult SaveProductAttribute(ProductAttributeSaveDto productAttribute)
```


---

#### SaveProductAttributePreset

```csharp
public IHttpActionResult SaveProductAttributePreset(
    ProductAttributePresetSaveDto productAttributePreset)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.Web.dll -->