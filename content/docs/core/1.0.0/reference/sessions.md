---
title: Session
description: Session related APIs in Vendr, the eCommerce solution for Umbraco v8+
---

## Session Manager

### ISessionManager

#### GetCurrentOrder

Gets the Current Order of the current Session

***Signature:***

````csharp
OrderReadOnly GetCurrentOrder(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderReadOnly` | The current Order for the current Session, or `null` if there is no current Order |

#### GetOrCreateCurrentOrder

Gets or Creates a Current Order of the current Session

***Signature:***

````csharp
OrderReadOnly GetOrCreateCurrentOrder(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderReadOnly` | The current Order for the current Session, or `null` if there is no current Order |

---

***Signature:***

````csharp
OrderReadOnly GetOrCreateCurrentOrder(Guid storeId, string customerReference);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |
| `string` | `customerReference` | The unique Reference of a Customer to associate the Order with |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderReadOnly` | The current Order for the current Session, or `null` if there is no current Order |

#### GetCurrentFinalizedOrder

Gets the Current Finalized Order of the current Session

***Signature:***

````csharp
OrderReadOnly GetCurrentFinalizedOrder(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderReadOnly` | The current finalized Order for the current Session, or `null` if there is no current finalized Order |

#### SetCurrentOrder

Set the Current Order of the current Session

***Signature:***

````csharp
void SetCurrentOrder(Guid storeId, OrderReadOnly order);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |
| `OrderReadOnly` | `order` | The Order to set the current Order of the current Session to |

---

***Signature:***

````csharp
void SetCurrentOrder(Guid storeId, Guid orderId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |
| `Guid` | `orderId` | The ID of the Order to set the current Order of the current Session to |

#### ClearCurrentOrder

Clear the Current Order of the current Session

***Signature:***

````csharp
void ClearCurrentOrder(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session should be cleared for |

#### GetDefaultCurrency
Get the default Currency of the current Session

***Signature:***

````csharp
CurrencyReadOnly GetDefaultCurrency(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `CurrencyReadOnly` | The default Currency of the current Session |

#### SetDefaultCurrency
Set the default Currency of the current Session

***Signature:***

````csharp
void SetDefaultCurrency(Guid storeId, CurrencyReadOnly currency, bool applyToCurrentOrder = false);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |
| `CurrencyReadOnly` | `currency` | The default Currency to set the current Session to |
| `bool` | `applyToCurrentOrder` | Flag indicating whether to apply to change to the current Order of the Session |

---

***Signature:***

````csharp
void SetDefaultCurrency(Guid storeId, Guid currencyId, bool applyToCurrentOrder = false);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |
| `Guid` | `currencyId` | The ID of the default Currency to set the current Session to |
| `bool` | `applyToCurrentOrder` | Flag indicating whether to apply to change to the current Order of the Session |

#### ClearDefaultCurrency
Clear the default Currency of the current Session

***Signature:***

````csharp
void ClearDefaultCurrency(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |

#### GetDefaultPaymentCountry
Get the default Payment Country of the current Session

***Signature:***

````csharp
CountryReadOnly GetDefaultPaymentCountry(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `CountryReadOnly` | The default Payment Country of the current Session |

#### SetDefaultPaymentCountry
Set the default Payment Country of the current Session

***Signature:***

````csharp
void SetDefaultPaymentCountry(Guid storeId, CountryReadOnly country, bool applyToCurrentOrder = false);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |
| `CountryReadOnly` | `country` | The default Payment Country to set the current Session to |
| `bool` | `applyToCurrentOrder` | Flag indicating whether to apply to change to the current Order of the Session |

---

***Signature:***

````csharp
void SetDefaultPaymentCountry(Guid storeId, Guid countryId, bool applyToCurrentOrder = false);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |
| `Guid` | `countryId` | The ID of the default Payment Country to set the current Session to |
| `bool` | `applyToCurrentOrder` | Flag indicating whether to apply to change to the current Order of the Session |

#### ClearDefaultPaymentCountry
Clear the default PaymentCountry of the current Session

***Signature:***

````csharp
void ClearDefaultPaymentCountry(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |

#### GetDefaultPaymentRegion
Get the default Payment Region of the current Session

***Signature:***

````csharp
RegionReadOnly GetDefaultPaymentRegion(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `RegionReadOnly` | The default Payment Region of the current Session |

#### SetDefaultPaymentRegion
Set the default Payment Region of the current Session

***Signature:***

````csharp
void SetDefaultPaymentRegion(Guid storeId, RegionReadOnly region, bool applyToCurrentOrder = false);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |
| `RegionReadOnly` | `region` | The default Payment Region to set the current Session to |
| `bool` | `applyToCurrentOrder` | Flag indicating whether to apply to change to the current Order of the Session |

---

***Signature:***

````csharp
void SetDefaultPaymentRegion(Guid storeId, Guid regionId, bool applyToCurrentOrder = false);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |
| `Guid` | `regionId` | The ID of the default Payment Region to set the current Session to |
| `bool` | `applyToCurrentOrder` | Flag indicating whether to apply to change to the current Order of the Session |

#### ClearDefaultPaymentRegion
Clear the default PaymentRegion of the current Session

***Signature:***

````csharp
void ClearDefaultPaymentRegion(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |

#### GetDefaultPaymentMethod
Get the default Payment Method of the current Session

***Signature:***

````csharp
PaymentMethodReadOnly GetDefaultPaymentMethod(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentMethodReadOnly` | The default Payment Method of the current Session |

#### SetDefaultPaymentMethod
Set the default Payment Method of the current Session

***Signature:***

````csharp
void SetDefaultPaymentMethod(Guid storeId, PaymentMethodReadOnly paymentMethod, bool applyToCurrentOrder = false);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |
| `PaymentMethodReadOnly` | `paymentMethod` | The default Payment Method to set the current Session to |
| `bool` | `applyToCurrentOrder` | Flag indicating whether to apply to change to the current Order of the Session |

---

***Signature:***

````csharp
void SetDefaultPaymentMethod(Guid storeId, Guid paymentMethodId, bool applyToCurrentOrder = false);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |
| `Guid` | `paymentMethodId` | The ID of the default Payment Method to set the current Session to |
| `bool` | `applyToCurrentOrder` | Flag indicating whether to apply to change to the current Order of the Session |

#### ClearDefaultPaymentMethod
Clear the default PaymentMethod of the current Session

***Signature:***

````csharp
void ClearDefaultPaymentMethod(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |

#### GetDefaultShipppingCountry
Get the default Shippping Country of the current Session

***Signature:***

````csharp
CountryReadOnly GetDefaultShipppingCountry(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `CountryReadOnly` | The default Shippping Country of the current Session |

#### SetDefaultShipppingCountry
Set the default Shippping Country of the current Session

***Signature:***

````csharp
void SetDefaultShipppingCountry(Guid storeId, CountryReadOnly country, bool applyToCurrentOrder = false);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |
| `CountryReadOnly` | `country` | The default Shippping Country to set the current Session to |
| `bool` | `applyToCurrentOrder` | Flag indicating whether to apply to change to the current Order of the Session |

---

***Signature:***

````csharp
void SetDefaultShipppingCountry(Guid storeId, Guid countryId, bool applyToCurrentOrder = false);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |
| `Guid` | `countryId` | The ID of the default Shippping Country to set the current Session to |
| `bool` | `applyToCurrentOrder` | Flag indicating whether to apply to change to the current Order of the Session |

#### ClearDefaultShipppingCountry
Clear the default ShipppingCountry of the current Session

***Signature:***

````csharp
void ClearDefaultShipppingCountry(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |

#### GetDefaultShipppingRegion
Get the default Shippping Region of the current Session

***Signature:***

````csharp
RegionReadOnly GetDefaultShipppingRegion(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `RegionReadOnly` | The default Shippping Region of the current Session |

#### SetDefaultShipppingRegion
Set the default Shippping Region of the current Session

***Signature:***

````csharp
void SetDefaultShipppingRegion(Guid storeId, RegionReadOnly region, bool applyToCurrentOrder = false);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |
| `RegionReadOnly` | `region` | The default Shippping Region to set the current Session to |
| `bool` | `applyToCurrentOrder` | Flag indicating whether to apply to change to the current Order of the Session |

---

***Signature:***

````csharp
void SetDefaultShipppingRegion(Guid storeId, Guid regionId, bool applyToCurrentOrder = false);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |
| `Guid` | `regionId` | The ID of the default Shippping Region to set the current Session to |
| `bool` | `applyToCurrentOrder` | Flag indicating whether to apply to change to the current Order of the Session |

#### ClearDefaultShipppingRegion
Clear the default ShipppingRegion of the current Session

***Signature:***

````csharp
void ClearDefaultShipppingRegion(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |

#### GetDefaultShipppingMethod
Get the default Shippping Method of the current Session

***Signature:***

````csharp
ShipppingMethodReadOnly GetDefaultShipppingMethod(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ShipppingMethodReadOnly` | The default Shippping Method of the current Session |

#### SetDefaultShipppingMethod
Set the default Shippping Method of the current Session

***Signature:***

````csharp
void SetDefaultShipppingMethod(Guid storeId, ShipppingMethodReadOnly shippingMethod, bool applyToCurrentOrder = false);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |
| `ShipppingMethodReadOnly` | `shippingMethod` | The default Shippping Method to set the current Session to |
| `bool` | `applyToCurrentOrder` | Flag indicating whether to apply to change to the current Order of the Session |

---

***Signature:***

````csharp
void SetDefaultShipppingMethod(Guid storeId, Guid shippingMethodId, bool applyToCurrentOrder = false);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |
| `Guid` | `shippingMethodId` | The ID of the default Shippping Method to set the current Session to |
| `bool` | `applyToCurrentOrder` | Flag indicating whether to apply to change to the current Order of the Session |

#### ClearDefaultShipppingMethod
Clear the default ShipppingMethod of the current Session

***Signature:***

````csharp
void ClearDefaultShipppingMethod(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |

#### GetDefaultTaxClass
Get the default Tax Class of the current Session

***Signature:***

````csharp
TaxClassReadOnly GetDefaultTaxClass(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `TaxClassReadOnly` | The default Tax Class of the current Session |

#### SetDefaultTaxClass
Set the default Tax Class of the current Session

***Signature:***

````csharp
void SetDefaultTaxClass(Guid storeId, TaxClassReadOnly taxClass, bool applyToCurrentOrder = false);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |
| `TaxClassReadOnly` | `taxClass` | The default Tax Class to set the current Session to |
| `bool` | `applyToCurrentOrder` | Flag indicating whether to apply to change to the current Order of the Session |

---

***Signature:***

````csharp
void SetDefaultTaxClass(Guid storeId, Guid taxClassId, bool applyToCurrentOrder = false);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |
| `Guid` | `taxClassId` | The ID of the default Tax Class to set the current Session to |
| `bool` | `applyToCurrentOrder` | Flag indicating whether to apply to change to the current Order of the Session |

#### ClearDefaultTaxClass
Clear the default Tax Class of the current Session

***Signature:***

````csharp
void ClearDefaultTaxClass(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Session belongs to |



### SessionManager

**Description:** Default implementation of the [Vendr Session Manager Interface](#isessionmanager)  
**Namespace:** Vendr.Core.Services  
**Assembly:** Vendr.Core