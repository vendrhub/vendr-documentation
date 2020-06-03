---
title: Constants
description: API reference for Constants in Vendr, the eCommerce solution for Umbraco v8+
---
## Constants

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

#### OrderAppliedDiscount

The Order Applied Discount database table name

```csharp
public const string OrderAppliedDiscount;
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

#### OrderLineProperty

The Order Line Property database table name

```csharp
public const string OrderLineProperty;
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

#### MasterRelationPropertyAlias

The property alias of the product Master Relation property

```csharp
public const string MasterRelationPropertyAlias;
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


---

#### TrialMaxOrders

The total number of Orders a trial license is allowed to process before a full license is required

```csharp
public const int TrialMaxOrders;
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
