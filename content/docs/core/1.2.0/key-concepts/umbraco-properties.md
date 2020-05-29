---
title: Umbraco Properties
description: Key Umbraco node properties used by Vendr, the eCommerce solution for Umbraco v8+
---

Unlike other Umbraco eCommerce platforms where store and product information is often held in a separate repository, Vendr uses Umbraco nodes as it's source of information. In order for Vendr to gather the information it needs however, it requires that a number of properties be defined at various locations with specific property aliases.

## Properties

| Type | Alias | Description |
| -- | -- | -- |
| Vendr.StorePicker | `store` | Often placed on the site root node, but can be placed on any node higher than the product nodes themselves, this property links the website to a specific Vendr store configuration |
| Textstring | `productName` | Optional product node property that allows you to define an explicit product name other than the product nodes `.Name` property, which will be used as fallback |
| Textstring | `sku` | Product node property defining the unique SKU of the product |
| Vendr.Price | `price` | Product node property defining the prices for the the product |
| Vendr.Stock | `stock` | Product node property defining the stock level of the product |
| Vendr.StoreEntityPicker | `taxClass` | Optional product node property that allows you to define an explicit `Tax Class` for the product, should it differ from the stores default |
| True/False | `isGiftCard` | Optional product node property that defined whether the product node should be considered a Gift Card product, in which case it triggers the automatic generation of a Gift Card in the back-office and emails it directly to the customer on checkout |
| ContentPicker | `masterRelation` | Optional product node property allowing you to link a product to another product outside of it's hierarchy to be used as it's source of product information |