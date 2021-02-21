---
title: Constants
description: API reference for Constants in Vendr, the eCommerce solution for Umbraco v8+
---
## Constants

Vendr constant variables

Vendr constant variables

```csharp
public static class Constants
```

**Namespace**
* [Vendr.Core](../)

### Classes

#### Constants.Cache

Cache related constants

```csharp
public static class Cache
```

##### Classes

#### Constants.Cache.CacheKeys

Cache key constants

```csharp
public static class CacheKeys
```

##### Fields

#### Countries

Cache key for the Countries cache

```csharp
public const string Countries;
```


---

#### Currencies

Cache key for the Currencies cache

```csharp
public const string Currencies;
```


---

#### Discounts

Cache key for the Discounts cache

```csharp
public const string Discounts;
```


---

#### EmailTemplates

Cache key for the Email Templates cache

```csharp
public const string EmailTemplates;
```


---

#### FrozenPrices

Cache key for the Frozen Prices cache

```csharp
public const string FrozenPrices;
```


---

#### GiftCards

Cache key for the Gift Cards cache

```csharp
public const string GiftCards;
```


---

#### Orders

Cache key for the Orders cache

```csharp
public const string Orders;
```


---

#### OrderStatuses

Cache key for the Order Statuses cache

```csharp
public const string OrderStatuses;
```


---

#### PaymentMethods

Cache key for the Payment Methods cache

```csharp
public const string PaymentMethods;
```


---

#### ProductAttributePresets

Cache key for the Product Attribute Presets cache

```csharp
public const string ProductAttributePresets;
```


---

#### ProductAttributes

Cache key for the Product Attributes cache

```csharp
public const string ProductAttributes;
```


---

#### Regions

Cache key for the Regions cache

```csharp
public const string Regions;
```


---

#### ShippingMethods

Cache key for the Shipping Methods cache

```csharp
public const string ShippingMethods;
```


---

#### Stores

Cache key for the Stores cache

```csharp
public const string Stores;
```


---

#### TaxClasses

Cache key for the Tax Classes cache

```csharp
public const string TaxClasses;
```




---

#### Constants.DatabaseSchema

Database schema constants

```csharp
public static class DatabaseSchema
```

##### Fields

#### TableNamePrefix

The prefix to prepend on to all Vendr database table names

```csharp
public const string TableNamePrefix;
```


##### Classes

#### Constants.DatabaseSchema.Tables

Database table constants

```csharp
public static class Tables
```

##### Fields

#### ActivityLog

The Activity Log database table name

```csharp
public const string ActivityLog;
```


---

#### Country

The Country database table name

```csharp
public const string Country;
```


---

#### Currency

The Currency database table name

```csharp
public const string Currency;
```


---

#### CurrencyAllowedCountry

The Currency Allowed Country database table name

```csharp
public const string CurrencyAllowedCountry;
```


---

#### Discount

The Discount database table name

```csharp
public const string Discount;
```


---

#### DiscountCode

The Discount Code database table name

```csharp
public const string DiscountCode;
```


---

#### EmailTemplate

The Email Template database table name

```csharp
public const string EmailTemplate;
```


---

#### FrozenPrice

The Frozen Price database table name

```csharp
public const string FrozenPrice;
```


---

#### GiftCard

The Gift Card database table name

```csharp
public const string GiftCard;
```


---

#### GiftCardProperty

The Gift Card Property database table name

```csharp
public const string GiftCardProperty;
```


---

#### Order

The Order database table name

```csharp
public const string Order;
```


---

#### OrderAmountAdjustment

The Order Amount Adjustment database table name

```csharp
public const string OrderAmountAdjustment;
```


---

#### OrderAppliedDiscountCode

The Order Applied Discount Code database table name

```csharp
public const string OrderAppliedDiscountCode;
```


---

#### OrderAppliedGiftCard

The Order Applied Gift Card database table name

```csharp
public const string OrderAppliedGiftCard;
```


---

#### OrderLine

The Order Line database table name

```csharp
public const string OrderLine;
```


---

#### OrderLineAttribute

The Order Line Attribute database table name

```csharp
public const string OrderLineAttribute;
```


---

#### OrderLineProperty

The Order Line Property database table name

```csharp
public const string OrderLineProperty;
```


---

#### OrderPriceAdjustment

The Order Price Adjustment database table name

```csharp
public const string OrderPriceAdjustment;
```


---

#### OrderProperty

The Order Property database table name

```csharp
public const string OrderProperty;
```


---

#### OrderStatus

The Order Status database table name

```csharp
public const string OrderStatus;
```


---

#### PaymentMethod

The Payment Method database table name

```csharp
public const string PaymentMethod;
```


---

#### PaymentMethodAllowedCountryRegion

The Payment Method Allowed Country Region database table name

```csharp
public const string PaymentMethodAllowedCountryRegion;
```


---

#### PaymentMethodCountryRegionPrice

The Payment Method Country Region Price database table name

```csharp
public const string PaymentMethodCountryRegionPrice;
```


---

#### PaymentMethodPaymentProviderSetting

The Payment Method Payment Provider Setting database table name

```csharp
public const string PaymentMethodPaymentProviderSetting;
```


---

#### ProductAttribute

The Product Attribute database table name

```csharp
public const string ProductAttribute;
```


---

#### ProductAttributePreset

The Product Attribute Preset database table name

```csharp
public const string ProductAttributePreset;
```


---

#### ProductAttributePresetAllowedAttribute

The Product Attribute Preset Allowed Attribute database table name

```csharp
public const string ProductAttributePresetAllowedAttribute;
```


---

#### ProductAttributeValue

The Product Attribute Value database table name

```csharp
public const string ProductAttributeValue;
```


---

#### Region

The Region database table name

```csharp
public const string Region;
```


---

#### ShippingMethod

The Shipping Method database table name

```csharp
public const string ShippingMethod;
```


---

#### ShippingMethodAllowedCountryRegion

The Shipping Method Allowed Country Region database table name

```csharp
public const string ShippingMethodAllowedCountryRegion;
```


---

#### ShippingMethodCountryRegionPrice

The Shipping Method Country Region Price database table name

```csharp
public const string ShippingMethodCountryRegionPrice;
```


---

#### Stock

The Stock database table name

```csharp
public const string Stock;
```


---

#### Store

The Store database table name

```csharp
public const string Store;
```


---

#### StoreAllowedUser

The Store Allowed User database table name

```csharp
public const string StoreAllowedUser;
```


---

#### StoreAllowedUserRole

The Store Allowed User Role database table name

```csharp
public const string StoreAllowedUserRole;
```


---

#### TaxClass

The Tax Class database table name

```csharp
public const string TaxClass;
```


---

#### TaxClassCountryRegionTaxRate

The Tax Class Country Region Tax Rate database table name

```csharp
public const string TaxClassCountryRegionTaxRate;
```


---

#### TranslatedValue

The Translated Value database table name

```csharp
public const string TranslatedValue;
```




---

#### Constants.Entities

Entity related constants

```csharp
public static class Entities
```

##### Classes

#### Constants.Entities.EntityTypes

Entity type constants

```csharp
public static class EntityTypes
```

##### Fields

#### Country

Country entity type

```csharp
public const string Country;
```


---

#### Currency

Currency entity type

```csharp
public const string Currency;
```


---

#### Discount

Discount entity type

```csharp
public const string Discount;
```


---

#### EmailTemplate

Email Template entity type

```csharp
public const string EmailTemplate;
```


---

#### GiftCard

Gift Card entity type

```csharp
public const string GiftCard;
```


---

#### Order

Order entity type

```csharp
public const string Order;
```


---

#### OrderStatus

Order Status entity type

```csharp
public const string OrderStatus;
```


---

#### PaymentMethod

Payment Method entity type

```csharp
public const string PaymentMethod;
```


---

#### ProductAttribute

Product Attribute entity type

```csharp
public const string ProductAttribute;
```


---

#### ProductAttributePreset

Product Attribute Preset entity type

```csharp
public const string ProductAttributePreset;
```


---

#### ProductAttributeValue

Product Attribute Value entity type

```csharp
public const string ProductAttributeValue;
```


---

#### Region

Region entity type

```csharp
public const string Region;
```


---

#### ShippingMethod

Shipping Method entity type

```csharp
public const string ShippingMethod;
```


---

#### Store

Store entity type

```csharp
public const string Store;
```


---

#### TaxClass

Tax Class entity type

```csharp
public const string TaxClass;
```




---

#### Constants.Properties

Property constants

```csharp
public static class Properties
```

##### Fields

#### StorePropertyAlias

The property alias of the Store property

```csharp
public const string StorePropertyAlias;
```


##### Classes

#### Constants.Properties.Customer

Customer property constants

```csharp
public static class Customer
```

##### Fields

#### EmailPropertyAlias

The property alias of the customer Email property

```csharp
public const string EmailPropertyAlias;
```


---

#### FirstNamePropertyAlias

The property alias of the customer First Name property

```csharp
public const string FirstNamePropertyAlias;
```


---

#### LastNamePropertyAlias

The property alias of the customer Last Name property

```csharp
public const string LastNamePropertyAlias;
```



---

#### Constants.Properties.Product

Product property constants

```csharp
public static class Product
```

##### Fields

#### IsGiftCardPropertyAlias

The property alias of the product Is Gift Card property

```csharp
public const string IsGiftCardPropertyAlias;
```


---

#### IsRecurringPropertyAlias

The property alias of the product Is Recurring property

```csharp
public const string IsRecurringPropertyAlias;
```


---

#### NamePropertyAlias

The property alias of the product Product Name property

```csharp
public const string NamePropertyAlias;
```

**Remarks**

If a productName property isn't present, the nodes Name will be used


---

#### PricePropertyAlias

The property alias of the product Price property

```csharp
public const string PricePropertyAlias;
```


---

#### ProductSourcePropertyAlias

The property alias of the linked product source node property

```csharp
public const string ProductSourcePropertyAlias;
```


---

#### SkuPropertyAlias

The property alias of the product SKU property

```csharp
public const string SkuPropertyAlias;
```


---

#### StockPropertyAlias

The property alias of the product Stock property

```csharp
public const string StockPropertyAlias;
```


---

#### TaxClassPropertyAlias

The property alias of the product Tax Class property

```csharp
public const string TaxClassPropertyAlias;
```


---

#### VariantsPropertyAlias

The property alias of the product Variants property

```csharp
public const string VariantsPropertyAlias;
```



---

#### Constants.Properties.ProductVariant

Product Variant property constants

```csharp
public static class ProductVariant
```

##### Fields

#### PriceAdjustmentPropertyAlias

The property alias of the product variant Price Adjustment property

```csharp
public const string PriceAdjustmentPropertyAlias;
```




---

#### Constants.PropertyEditors

Property Editor constants

```csharp
public static class PropertyEditors
```

##### Classes

#### Constants.PropertyEditors.Aliases

Defines Vendr built-in property editor aliases.

```csharp
public static class Aliases
```

##### Fields

#### Price

Price.

```csharp
public const string Price;
```


---

#### Stock

Stock.

```csharp
public const string Stock;
```


---

#### StoreEntityPicker

Store Entity Picker.

```csharp
public const string StoreEntityPicker;
```


---

#### StorePicker

Store Picker.

```csharp
public const string StorePicker;
```


---

#### TaxClassPicker

Tax Class Picker.

```csharp
public const string TaxClassPicker;
```


---

#### VariantsEditor

Variants Editor.

```csharp
public const string VariantsEditor;
```




---

#### Constants.System

System constants

```csharp
public static class System
```

##### Fields

#### MigrationPlanName

The Vendr migration plan name

```csharp
public const string MigrationPlanName;
```


---

#### ProductAlias

The Vendr product alias

```csharp
public const string ProductAlias;
```


---

#### ProductName

The Vendr product name

```csharp
public const string ProductName;
```


##### Classes

#### Constants.System.Messages

System message constants

```csharp
public static class Messages
```

##### Fields

#### ScaffoldToWritableExceptionMessage

Exception message to display if a scaffold entity is attempted to be made writable

```csharp
public const string ScaffoldToWritableExceptionMessage;
```




<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
