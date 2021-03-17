---
title: Amounts & Prices
description: The Amounts and Price entities available in Vendr, the eCommerce solution for Umbraco v8+
---

## Entities

### Amount

**Description:** Value Object for a monitory Amount in Vendr  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `CurrencyId` | The ID of the Currency of the Amount |
| `decimal` | `Value` | The Value of the Amount |

#### Constructor
Create an Amount

***Signature:***

````csharp
new Amount(Guid currencyId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `currencyId` | The ID of the Currency of the Amount |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Amount` | The Amount |

#### ZeroValue
Create a Zero Value Amount

***Signature:***

````csharp
static Amount ZeroValue(Guid currencyId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `currencyId` | The ID of the Currency of the Amount |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Amount` | The Zero Value Amount |

#### OfSameCurrency
Create a new Amount of the same Currency as an existing Amount

***Signature:***

````csharp
static Amount OfSameCurrency(Amount existingAmount, decimal value);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Amount` | `existingAmount` | The existing Amount |
| `decimal` | `value` | The Value of the new Amount |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Amount` | The new Amount of the new Value in the same Currency as the existing Amount |

#### Formatted
Creates a Formatted Amount from an Amount

***Signature:***

````csharp
FormattedAmount Formatted();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `FormattedAmount` | The [Formatted Amount](#formattedamount) of the original Amount |

#### DeepClone
Deep Clone an Amount

***Signature:***

````csharp
object DeepClone();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `object` | A deep clone of the Amount as an object |

### FormattedAmount

**Description:** Value Object for a Formatted monitory Amount in Vendr  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `CurrencyId` | The ID of the Currency of the Amount |
| `string` | `Value` | The Value of the Amount formatted for the given Currency |
| `string` | `ValueNoSymbol` | The Value of the Amount formatted for the given Currency, without a Symbol |

#### DeepClone
Deep Clone an Formatted Amount

***Signature:***

````csharp
object DeepClone();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `object` | A deep clone of the Formatted Amount as an object |

### Price

**Description:** Value Object for a monitory Price in Vendr  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `CurrencyId` | The ID of the Currency of the Price |
| `decimal` | `Tax` | The Tax amount of the Price |
| `decimal` | `WithoutTax` | The Value of the Price without Tax |
| `decimal` | `WithTax` | The Value of the Price with Tax |

#### Constructor
Create a Price

***Signature:***

````csharp
new Price(decimal valueWithoutTax, decimal tax, Guid currencyId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `decimal` | `valueWithoutTax` | The Value of the Price without Tax |
| `decimal` | `tax` | The Tax amount of the Price |
| `Guid` | `currencyId` | The ID of the Currency of the Price |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Price` | The Price |

---

***Signature:***

````csharp
new Price(decimal valueWithoutTax, decimal tax, decimal valueWithTax, Guid currencyId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `decimal` | `valueWithoutTax` | The Value of the Price without Tax |
| `decimal` | `tax` | The Tax amount of the Price |
| `decimal` | `valueWithTax` | The Value of the Price with Tax |
| `Guid` | `currencyId` | The ID of the Currency of the Price |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Price` | The Price |

#### ZeroValue
Create a Zero Value Price

***Signature:***

````csharp
static Price ZeroValue(Guid currencyId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `currencyId` | The ID of the Currency of the Price |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Price` | The Zero Value Price |

#### OfSameCurrency
Create a new Price of the same Currency as an existing Price

***Signature:***

````csharp
static Price OfSameCurrency(Price existingPrice, decimal valueWithoutTax, decimal tax);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Price` | `existingPrice` | The existing Price |
| `decimal` | `valueWithoutTax` | The Value of the new Price without Tax |
| `decimal` | `tax` | The Tax amount of the new Price |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Price` | The new Price of the new Value in the same Currency as the existing Price |

---

***Signature:***

````csharp
static Price OfSameCurrency(Price existingPrice, decimal valueWithoutTax, decimal tax, decimal valueWithTax);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Price` | `existingPrice` | The existing Price |
| `decimal` | `valueWithoutTax` | The Value of the new Price without Tax |
| `decimal` | `tax` | The Tax amount of the new Price |
| `decimal` | `valueWithTax` | The Value of the new Price with Tax |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Price` | The new Price of the new Value in the same Currency as the existing Price |

#### Calculate
Calculate a Price

***Signature:***

````csharp
static Price Calculate(decimal value, TaxRate taxRate, Guid currencyId, bool valueIncludesTax = false)
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `decimal` | `value` | The Value of the Price |
| `TaxRate` | `taxRate` | The Tax Rate of the Price |
| `Guid` | `currencyId` | The ID of the Currency of the Price |
| `bool` | `valueIncludesTax` | Flag indicating whether the supplied price already includes the Tax |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Price` | The calculated Price |

#### Formatted
Creates a Formatted Price from an Price

***Signature:***

````csharp
FormattedPrice Formatted();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `FormattedPrice` | The [Formatted Price](#formattedprice) of the original Price |

#### DeepClone
Deep Clone the Entity

***Signature:***

````csharp
object DeepClone();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `object` | A deep clone of the Entity as an object |

### FormattedPrice

**Description:** Value Object for a Formatted monitory Price in Vendr  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `CurrencyId` | The ID of the Currency of the Price |
| `string` | `WithoutTax` | The Value of the Price without Tax formatted for the given Currency |
| `string` | `WithoutTaxNoSymbol` | The Value of the Price without Tax formatted for the given Currency, without a Symbol |
| `string` | `Tax` | The Value of the Price Tax formatted for the given Currency |
| `string` | `TaxNoSymbol` | The Value of the Price Tax formatted for the given Currency, without a Symbol |
| `string` | `WithTax` | The Value of the Price with Tax formatted for the given Currency |
| `string` | `WithTaxNoSymbol` | The Value of the Price with Tax formatted for the given Currency, without a Symbol |

#### DeepClone
Deep Clone the Entity

***Signature:***

````csharp
object DeepClone();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `object` | A deep clone of the Entity as an object |

<div class="mb-48"></div>