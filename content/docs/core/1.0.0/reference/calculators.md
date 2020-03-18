---
title: Calculators
description: Calculator related APIs in Vendr, the eCommerce solution for Umbraco v8+
---

## Order Calculator

### IOrderCalculator

**Description:** Interface of the Vendr Order Calculator   
**Namespace:** Vendr.Core.Calculators  
**Assembly:** Vendr.Core

#### CalculateOrder

Calculate an Order

***Signature:***

````csharp
OrderCalculation CalculateOrder(OrderReadOnly order);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `OrderReadOnly` | `order` | The Order to Calculate |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderCalculation` | The [Order Calculation](#ordercalculation) |

### OrderCalculator

**Description:** Default implementation of the [Vendr Order Calculator Interface](#iordercalculator)  
**Namespace:** Vendr.Core.Calculators  
**Assembly:** Vendr.Core

<div class="mb-48"></div>

## Order Line Calculator

### IOrderLineCalculator

**Description:** Interface of the Vendr Order Line Calculator   
**Namespace:** Vendr.Core.Calculators  
**Assembly:** Vendr.Core

#### CalculateOrderLineTaxRate

Calculate an Order Line Tax Rate

***Signature:***

````csharp
TaxRate CalculateOrderLineTaxRate(OrderReadOnly order, OrderLineReadOnly orderLine, TaxSource taxSource, TaxRate fallbackTaxRate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `OrderReadOnly` | `order` | The Order the Order Line belongs to |
| `OrderLineReadOnly` | `orderLine` | The Order Line to Calculate |
| `TaxSource` | `taxSource` | The Tax Source to Calculate against |
| `TaxRate` | `fallbackTaxRate` | A fallback Tax Rate to use if one can't be Calculated |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxRate` | The Calculated Tax Rate |

#### CalculateOrderLineUnitPrice

Calculate an Order Line Unit Price

***Signature:***

````csharp
Price CalculateOrderLineUnitPrice(OrderReadOnly order, OrderLineReadOnly orderLine, Guid currencyId, TaxRate taxRate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `OrderReadOnly` | `order` | The Order the Order Line belongs to |
| `OrderLineReadOnly` | `orderLine` | The Order Line to Calculate |
| `Guid` | `currencyId` | The ID of the Currency of the Price to Calculate |
| `TaxRate` | `taxRate` | The Tax Rate of the Price to Calculate |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Price` | The Calculated Unit Price |

### OrderLineCalculator

**Description:** Default implementation of the [Vendr Order Line Calculator Interface](#iorderlinecalculator)  
**Namespace:** Vendr.Core.Calculators  
**Assembly:** Vendr.Core

<div class="mb-48"></div>

## Product Calculator

### IProductCalculator

**Description:** Interface of the Vendr Product Calculator   
**Namespace:** Vendr.Core.Calculators  
**Assembly:** Vendr.Core

#### CalculateProductTaxRate

Calculate a Product Tax Rate

***Signature:***

````csharp
TaxRate CalculateProductTaxRate(IProductSnapshot productSnapshot, TaxSource taxSource, TaxRate fallbackTaxRate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IProductSnapshot` | `productSnapshot` | The Product to Calculate the Tax Rate of |
| `TaxSource` | `taxSource` | The Tax Source to Calculate against |
| `TaxRate` | `fallbackTaxRate` | A fallback Tax Rate to use if one can't be Calculated |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxRate` | The Calculated Tax Rate |

#### CalculateProductPrice

Calculate a Product Price

***Signature:***

````csharp
Price CalculateProductPrice(IProductSnapshot productSnapshot, Guid currencyId, TaxRate taxRate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IProductSnapshot` | `productSnapshot` | The Product to Calculate the Price of |
| `Guid` | `currencyId` | The ID of the Currency of the Price to Calculate |
| `TaxRate` | `taxRate` | The Tax Rate of the Price to Calculate |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Price` | The Calculated Price |

### ProductCalculator

**Description:** Default implementation of the [Vendr Product Calculator Interface](#iproductcalculator)  
**Namespace:** Vendr.Core.Calculators  
**Assembly:** Vendr.Core

<div class="mb-48"></div>

## Payment Calculator

### IPaymentCalculator

**Description:** Interface of the Vendr Payment Calculator   
**Namespace:** Vendr.Core.Calculators  
**Assembly:** Vendr.Core

#### CalculatePaymentMethodTaxRate

Calculate a Payment Tax Rate

***Signature:***

````csharp
TaxRate CalculatePaymentMethodTaxRate(PaymentMethodReadOnly paymentMethod, TaxSource taxSource, TaxRate fallbackTaxRate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `PaymentMethodReadOnly` | `paymentMethod` | The Payment Method to Calculate the Tax Rate of |
| `TaxSource` | `taxSource` | The Tax Source to Calculate against |
| `TaxRate` | `fallbackTaxRate` | A fallback Tax Rate to use if one can't be Calculated |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxRate` | The Calculated Tax Rate |

#### CalculatePaymentMethodPrice

Calculate a Payment Price

***Signature:***

````csharp
Price CalculatePaymentMethodPrice(PaymentMethodReadOnly paymentMethod, Guid currencyId, TaxRate taxRate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `PaymentMethodReadOnly` | `paymentMethod` | The Payment Method to Calculate the Price of |
| `Guid` | `currencyId` | The ID of the Currency of the Price to Calculate |
| `TaxRate` | `taxRate` | The Tax Rate of the Price to Calculate |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Price` | The Calculated Price |

### PaymentCalculator

**Description:** Default implementation of the [Vendr Payment Calculator Interface](#ipaymentcalculator)  
**Namespace:** Vendr.Core.Calculators  
**Assembly:** Vendr.Core

<div class="mb-48"></div>

## Shipping Calculator

### IShippingCalculator

**Description:** Interface of the Vendr Shipping Calculator   
**Namespace:** Vendr.Core.Calculators  
**Assembly:** Vendr.Core

#### CalculateShippingMethodTaxRate

Calculate a Shipping Tax Rate

***Signature:***

````csharp
TaxRate CalculateShippingMethodTaxRate(ShippingMethodReadOnly shippingMethod, TaxSource taxSource, TaxRate fallbackTaxRate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `ShippingMethodReadOnly` | `shippingMethod` | The Shipping Method to Calculate the Tax Rate of |
| `TaxSource` | `taxSource` | The Tax Source to Calculate against |
| `TaxRate` | `fallbackTaxRate` | A fallback Tax Rate to use if one can't be Calculated |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxRate` | The Calculated Tax Rate |

#### CalculateShippingMethodPrice

Calculate a Shipping Price

***Signature:***

````csharp
Price CalculateShippingMethodPrice(ShippingMethodReadOnly shippingMethod, Guid currencyId, TaxRate taxRate);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `ShippingMethodReadOnly` | `shippingMethod` | The Shipping Method to Calculate the Price of |
| `Guid` | `currencyId` | The ID of the Currency of the Price to Calculate |
| `TaxRate` | `taxRate` | The Tax Rate of the Price to Calculate |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Price` | The Calculated Price |

### ShippingCalculator

**Description:** Default implementation of the [Vendr Shipping Calculator Interface](#ishippingcalculator)  
**Namespace:** Vendr.Core.Calculators  
**Assembly:** Vendr.Core

<div class="mb-48"></div>

## Calculation Entities

### OrderCalculation

**Description:** Order Calculation entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Dictionary<Guid, OrderLineCalculation>` | `OrderLines` | Dictionary of Order Line Calculations |
| `Dictionary<string, Amount>` | `GiftCardAmounts` | Dictionary of applied Gift Card Amounts |
| `List<string>` | `FulfilledDiscountCodes` | A list of Fulfilled Discount Codes |
| `List<FulfilledDiscount>` | `FulfilledDiscounts` | A list of Fulfilled Discounts |
| `TaxRate` | `TaxRate` | The calculated Tax Rate of the Order |
| `OrderSubtotalPrice` | `SubtotalPrice` | The calculated [Subtotal Price](#ordersubtotalprice) of the Order |
| `TaxRate` | `PaymentTaxRate` | The calculated Tax Rate of the Order Payment |
| `TotalPrice` | `PaymentTotalPrice` | The calculated [Total Price](#totalprice) of the Order Payment |
| `TaxRate` | `ShippingTaxRate` | The calculated Tax Rate of the Order Shipping |
| `TotalPrice` | `ShippingTotalPrice` | The calculated [Total Price](#totalprice) of the Order Shipping |
| `OrderTotalPrice` | `TotalPrice` | The calculated [Total Price](#ordertotalprice) of the Order |

### OrderLineCalculation

**Description:** Order Line Calculation entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Dictionary<Guid, OrderLineCalculation>` | `OrderLines` | Dictionary of sub Order Line Calculations |
| `TaxRate` | `TaxRate` | The calculated Tax Rate of the Order Line |
| `OrderLineUnitPrice` | `UnitPrice` | The calculated Unit Price of the Order Line |
| `OrderLineTotalPrice` | `TotalPrice` | The calculated Total Price of the Order Line |
| `Price` | `RollingSubOrderLinesTotalPrice` | The calculated rolling Total Price of the Order Lines |
| `Price` | `RollingSubOrderLinesTotalDiscountPrice` | The calculated Total Discount Price of the Order Lines |

<div class="mb-48"></div>

## Calculation Owned Entities

### AppliedDiscount

**Description:** Order Applied Discount owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `DiscountId` | The ID of the Discount |
| `string` | `DiscountName` | The Name of the Discount |
| `Price` | `OriginalPrice` | The original Price of the Discount |
| `Price` | `Price` | The Price of the Discount after discount prices have been capped |

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

### FulfilledDiscount

**Description:** Fulfilled Discount owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `DiscountId` | The ID of the Discount |
| `string` | `DiscountName` | The Name of the Discount |
| `DiscountType` | `DiscountType` | The Type of the Discount, `Automatic` or `Code` |

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

### TotalPrice

**Description:** Total Price owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Price` | `WithoutDiscounts` | Price without any Discounts |
| `Price` | `Discount` | The Subtotal Discount Price |
| `Price` | `Value` | The Total Price with Discounts applied |
| `List<AppliedDiscount>` | `Discounts` | A collection of  [applied discounts](#applieddiscount) |

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

### OrderSubtotalPrice

**Description:** Order Subtotal Price owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Price` | `WithoutDiscounts` | Price without any Discounts |
| `Price` | `PreviousDiscounts` | Price of any Previous Discounts |
| `Price` | `WithPreviousDiscounts` | Price including any Previous Discounts |
| `Price` | `Discount` | The Subtotal Discount Price |
| `Price` | `TotalDiscount` | The Total Discount Price |
| `Price` | `Value` | The Total Price with Discounts applied |
| `List<AppliedDiscount>` | `Discounts` | A collection of Subtotal [applied discounts](#applieddiscount) |

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

### OrderTotalPrice

**Description:** Order Total Price owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Price` | `WithoutDiscounts` | Price without any Discounts |
| `Price` | `PreviousDiscounts` | Price of any Previous Discounts |
| `Price` | `WithPreviousDiscounts` | Price including any Previous Discounts |
| `Price` | `Discount` | The Subtotal Discount Price |
| `Price` | `TotalDiscount` | The Total Discount Price |
| `Price` | `WithDiscounts` | The Total Price with Discounts applied |
| `Price` | `GiftCardsAmount` | The Total applied Gift Cards amount |
| `Price` | `Value` | The Total Price with Discounts and Gift Card applied |
| `List<AppliedDiscount>` | `Discounts` | A collection of Total [applied discounts](#applieddiscount) |

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