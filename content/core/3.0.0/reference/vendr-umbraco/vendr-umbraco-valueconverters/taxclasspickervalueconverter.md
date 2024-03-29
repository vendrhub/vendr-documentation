---
title: TaxClassPickerValueConverter
description: API reference for TaxClassPickerValueConverter in Vendr, the eCommerce solution for Umbraco
---
## TaxClassPickerValueConverter

```csharp
public class TaxClassPickerValueConverter : PropertyValueConverterBase
```

**Namespace**
* [Vendr.Umbraco.ValueConverters](../)

### Constructors

#### TaxClassPickerValueConverter

```csharp
public TaxClassPickerValueConverter(Lazy<ITaxService> taxService)
```


### Methods

#### ConvertIntermediateToObject

```csharp
public override object ConvertIntermediateToObject(IPublishedElement owner, 
    IPublishedPropertyType propertyType, PropertyCacheLevel cacheLevel, object source, bool preview)
```


---

#### ConvertSourceToIntermediate

```csharp
public override object ConvertSourceToIntermediate(IPublishedElement owner, 
    IPublishedPropertyType propertyType, object source, bool preview)
```


---

#### GetPropertyCacheLevel

```csharp
public override PropertyCacheLevel GetPropertyCacheLevel(IPublishedPropertyType propertyType)
```


---

#### GetPropertyValueType

```csharp
public override Type GetPropertyValueType(IPublishedPropertyType propertyType)
```


---

#### IsConverter

```csharp
public override bool IsConverter(IPublishedPropertyType propertyType)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.dll -->
