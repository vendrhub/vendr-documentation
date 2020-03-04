---
title: Properties
description: Order / Order Line meta data in Vendr, the eCommerce solution for Umbraco v8+
---

Out of the box, there is Very little information that Vendr really needs to know about a product in order for it to do it's job, however there are times when developers require an ability to store additional information against an Order / Order Line, such as the billing / shipping address of an Order, or any specific configuration details of a given Product on an Order Line.

To help facilitate this Vendr has the concept of a Properties collection on both the Order entity and the Order Line entity respectively. The Properties collection of these entities can be thought of as a general store for additional information required by an implementation, but not strictly required by Vendr itself.

Essentially, anything you need to remember about an Order / Order Line can be stored in it's Properties collection.

## Setting Properties

In order to set a Property on an Order / Order Line, it first needs to be [in it's Writable state](../readonly-and-writable-entities/#converting-a-readonly-entity-into-a-writable-entity), and then it's a case of calling one of the related property setting methods: 

````csharp
// Set a single property
order.SetProperty("propertyAlias", "Property Value");

// Set multiple properties at once
order.SetProperties(mew Dictionary<string, string>{
    { "propertyAlias1", "Property Value 1" },
    { "propertyAlias2", "Property Value 2" },
    { "propertyAlias3", "Property Value 3" }
})

// Remove a property
order.RemoveProperty("propertyAlias");

````

 Property values can either be a simple `string`, or a Vendr `PropertyValue` which allows you define a value as being Server Side Only meaning it won't returned via non-server APIs or Read Only meaning it can't be updated once set.

 
````csharp
// Set a simple string property
order.SetProperty("propertyAlias", "Property Value");

// Set a PropertyValue property as Read Only
order.SetProperty("propertyAlias", new PropertyValue("Property Value", isReadOnly: true));

````

## System Properties

When there are occasions that Vendr needs to capture some simple information about an Order / Order Line, it too uses the Properties collection to store this information. It's useful to know what these properties are as you should avoid using these system related property keys.

### Order System Properties

| Alias | Description |
| ----- | ----------- |
| firstName | The first name of the person placing the order. Is where `order.CustomerInfo.FirstName` reads it's value from. |
| lastName | The last name of the person placing the order. Is where `order.CustomerInfo.LastName` reads it's value from. |
| email | The email address of the person placing the order. Is where `order.CustomerInfo.Email` reads it's value from. |

### Order Line System Properties

| Alias | Description |
| ----- | ----------- |
| sku | The SKU of the product extracted from the product node. |

## Automatic Properties


## Product Uniqueness Properties