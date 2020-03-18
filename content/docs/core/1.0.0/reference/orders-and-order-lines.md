---
title: Orders & Order Lines
description: Order and Order Line related APIs in Vendr, the eCommerce solution for Umbraco v8+
---

## Order Service

### IOrderService

**Description:** Interface of the Vendr Order Service  
**Namespace:** Vendr.Core.Services  
**Assembly:** Vendr.Core

#### SearchOrders
Searches for Orders with the given parameters

***Signature:***

````csharp
PagedResult<OrderReadOnly> SearchOrders(Guid storeId, string searchTerm = null, string cartOrOrderNumber = null, string firstName = null, string lastName = null, bool? isFinalized = null, Guid? orderStatusId = null, PaymentStatus? paymentStatus = null, DateTime? fromDate = null, DateTime? toDate = null, long currentPage = 1, long itemsPerPage = 50);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store to search against  |
| `string` | `searchTerm` | A term to search for across all searchable fields  |
| `string` | `cartOrOrderNumber` | A Cart or Order Number to search for |
| `string` | `firstName` | A customer first name to search for |
| `string` | `lastName` | A customer last name to search for |
| `bool?` | `isFinalized` | Flag to search against all Orders, or just finalized ones |
| `Guid?` | `orderStatusId` | Only find Orders with the given Order Status ID |
| `PaymentStatus?` | `paymentStatus` | Only find Orders with the given Payment Status |
| `DateTime?` | `fromDate` | Only find after the given date |
| `DateTime?` | `toDate` | Only find up to the given date |
| `long` | `currentPage` | The current page of results to fetch |
| `long` | `itemsPerPage` | The total number of items per page to fetch |


***Returns:***

| Type | Description |
| ---- | ----------- |
| `PagedResult<OrderReadOnly>` | A paged list of read only Order entities matching the provided criteria  |


#### GetOrders
Gets a list of Orders with the given IDs

***Signature:***

````csharp
IEnumerable<OrderReadOnly> GetOrders(Guid[] ids);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid[]` | `ids` | The list of Order IDs to fetch  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `IEnumerable<OrderReadOnly>` | A list of read only Order entities matching the provided criteria  |

#### GetFinalizedOrdersForCustomer
Gets a list of finalized Orders assigned to a given Customer

***Signature:***

````csharp
IEnumerable<OrderReadOnly> GetFinalizedOrdersForCustomer(Guid storeId, string customerReference);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store to fetch against |
| `string` | `customerReference` | The unique reference of the Customer |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `IEnumerable<OrderReadOnly>` | A list of read only Order entities matching the provided criteria  |

#### GetOrder
Gets a specific Order entity

***Signature:***

````csharp
OrderReadOnly GetOrder(Guid orderId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `orderId` | The ID of the Order to fetch |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderReadOnly` | A read only Order entity matching the provided criteria  |

---

***Signature:***

````csharp
OrderReadOnly GetOrder(Guid storeId, string cartOrOrderNumber);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store the Order belongs to |
| `string` | `cartOrOrderNumber` | The Orders unique Cart or Order Number |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderReadOnly` | A read only Order entity matching the provided criteria  |

#### GetFinalizedOrderCount
Gets the total number of finalized Orders for the given Store

***Signature:***

````csharp
long GetFinalizedOrderCount(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store to count against |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `long` | The total number of finalized Orders |

#### SaveOrder
Persists the given Order to the database

***Signature:***

````csharp
void SaveOrder(Order entity);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Order` | `entity` | The Order to save |

#### DeleteOrder
Deletes the given Order.

***Signature:***

````csharp
void DeleteOrder(Guid orderId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `orderId` | The ID of the Order to delete |

---

***Signature:***

````csharp
void DeleteOrder(Guid orderId, bool revertFinalized);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Order` | `entity` | The Order to delete |
| `bool` | `revertFinalized` | Flag to set whether to revert finalized changes, such as stock levels, discount code usages, etc |

---

***Signature:***

````csharp
void DeleteOrder(Order entity);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Order` | `entity` | The Order to delete |

---

***Signature:***

````csharp
void DeleteOrder(Order entity, bool revertFinalized);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Order` | `entity` | The Order to delete |
| `bool` | `revertFinalized` | Flag to set whether to revert finalized changes, such as stock levels, discount code usages, etc |

### OrderService

**Description:** Default implementation of the [Vendr Order Service Interface](#iorderservice)  
**Namespace:** Vendr.Core.Services  
**Assembly:** Vendr.Core

## Order Number Generator

### IOrderNumberGenerator

**Description:** Interface of the Vendr Order Number Generator    
**Namespace:** Vendr.Core.Generators  
**Assembly:** Vendr.Core

#### GenerateCartNumber
Generate a Cart Number

***Signature:***

````csharp
string GenerateCartNumber(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store associated with the Order  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `string` | A unique Cart Number  |

#### GenerateOrderNumber
Generate a Order Number

***Signature:***

````csharp
string GenerateOrderNumber(Guid storeId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `storeId` | The ID of the Store associated with the Order  |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `string` | A unique Order Number  |

### DateHashOrderNumberGenerator

**Description:** Default implementation of the [Vendr Order Number Generator](#iordernumbergenerator) using a date hash for the numbers  
**Namespace:** Vendr.Core.Generators  
**Assembly:** Vendr.Core

<div class="mb-48"></div>

## Order Entities

### OrderReadOnly

**Description:** Read Only Order entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `Id` | The Orders unique ID |
| `Guid` | `StoreId` | The ID of the Store this Order belongs to |
| `Guid` | `CurrencyId` | The ID of the Currency of this Order |
| `Guid` | `OrderStatusId` | The ID of the Order Status of this Order |
| `Guid` | `OrderStatusCode` | The Status Code of the Order Status of this Order |
| `Guid` | `TaxClassId` | The ID of the Tax Class of this Order |
| `string` | `LanguageIsoCode` | The ISO Code of the Language of this Order |
| `string` | `CartNumber` | The Orders unique Cart Number |
| `string` | `OrderNumber` | The Orders unique Order Number, generated at checkout |
| `CustomerInfo` | `CustomerInfo` | The [Customer Information](#customerinfo) associated with this Order |
| `OrderPaymentInfo` | `PaymentInfo` | The [Payment Information](#paymentinfo) associated with this Order |
| `OrderShippingInfo` | `ShippingInfo` | The [Shipping Information](#shippinginfo) associated with this Order |
| `OrderTransactionInfo` | `TransactionInfo` | The [Transaction Information](#transactioninfo) associated with this Order |
| `IReadOnlyCollection <OrderLineReadOnly>` | `OrderLines` | Collection of [Order Lines](#orderlinereadonly) associated with this Order |
| `IReadOnlyDictionary <string, PropertyValue>` | `Properties` | Collection of [Properties](../../key-concepts/properties/) associated with this Order |
| `IReadOnlyCollection <AppliedDiscountCode>` | `DiscountCodes` | Collection of [Applied Discount Codes](#applieddiscountcode) associated with this Order |
| `IReadOnlyCollection <AppliedGiftCard>` | `GiftCards` | Collection of [Applied Gift Cards](#appliedgiftcard) associated with this Order |
| `IReadOnlyCollection <FulfilledDiscount>` | `Discounts` | Collection of [Fulfilled Discounts](#fulfilleddiscount) associated with this Order |
| `TaxRate` | `TaxRate` | The calculated Tax Rate of the Order |
| `double` | `TotalQuantity` | The calculated total quantity of Order Line items in the Order |
| `ReadOnlyOrderSubtotalPrice` | `SubtotalPrice` | The calculated [subtotal price](#readonlyordersubtotalprice) of the Order |
| `ReadOnlyOrderTotalPrice` | `TotalPrice` | The calculated [total price](#readonlyordertotalprice) of the Order |
| `DateTime` | `CreateDate` | The date the Order was created |
| `DateTime` | `UpdateDate` | The date the Order was last modified |
| `DateTime?` | `FinalizedDate` | The date the Order was finalized |
| `bool` | `IsProcessing` | Flag to indicate whether the Order is currently being processed |
| `bool` | `IsFinalizing` | Flag to indicate whether the Order is currently being finalized |
| `bool` | `IsFinalized` | Flag to indicate whether the Order is finalized |

#### GetOrderLine
Gets an Order Line from the associated Order

***Signature:***

````csharp
OrderLineReadOnly GetOrderLine(Guid orderLineId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `orderLineId` | The ID of the Order Line to fetch |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderLineReadOnly` | A read only Order Line entity matching the provided criteria |

#### GetBundle
Gets a Bundle Order Line from the associated Order

***Signature:***

````csharp
OrderLineReadOnly GetBundle(string bundleId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `bundleId` | The Bundle ID of the Order Line to fetch |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderLineReadOnly` | A read only Order Line entity matching the provided criteria |

#### AsWritable
Gets a writable version of the associated Order

***Signature:***

````csharp
Order AsWritable(IUnitOfWork uow);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUnitOfWork` | `uow` | An active Unit of Work to associate with this writable entity |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | A writable version of the Order |

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

### Order

**Description:** Writable Order entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core  
**Inherits:** [ OrderReadOnly](#orderreadonly)

#### Create
Creates an Order entity

***Signature:***

````csharp
static Order Create(IUnitOfWork uow, Guid storeId, string languageIsoCode, Guid currencyId, Guid taxClassId, Guid orderStatusId, Guid? paymentMethodId = null, Guid? paymentCountryId = null, Guid? paymentRegionId = null, Guid? shippingMethodId = null, Guid? shippingCountryId = null, Guid? shippingRegionId = null, string customerReference = null);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IUnitOfWork` | `uow` | An active Unit of Work to associate with this writable entity |
| `Guid` | `storeId` | The ID of the Store this Order belongs to |
| `string` | `languageIsoCode` | The ISO Code of the Language of the Order |
| `Guid` | `currencyId` | The ID of the Currency of the Order |
| `Guid` | `taxClassId` | The ID of the Tax Class of the Order |
| `Guid` | `orderStatusId` | The ID of the Order Status of the Order |
| `Guid?` | `paymentMethodId` | The ID of the Payment Method of the Order |
| `Guid?` | `paymentCountryId` | The ID of the Payment Country of the Order |
| `Guid?` | `paymentRegionId` | The ID of the Payment Region of the Order |
| `Guid?` | `shippingMethodId` | The ID of the Shipping Method of the Order |
| `Guid?` | `shippingCountryId` | The ID of the Shipping Country of the Order |
| `Guid?` | `shippingRegionId` | The ID of the Shipping Region of the Order |
| `string` | `customerReference` | Reference of the Customer this Order belongs to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | A writable Order |

#### AddProduct
Adds a Product to an Order

***Signature:***

````csharp
Order AddProduct(string productReference, decimal qty);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `productReference` | The unique reference of the Product to add to the Order |
| `decimal` | `qty` | The quantity of the Product to add to the Order |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order AddProduct(string productReference, decimal qty, string bundleId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `productReference` | The unique reference of the Product to add to the Order |
| `decimal` | `qty` | The quantity of the Product to add to the Order |
| `string` | `bundleId` | An ID to assign to the Product Order Line to identify it as a Bundle |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order AddProduct(string productReference, decimal qty, IDictionary<string, string> properties);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `productReference` | The unique reference of the Product to add to the Order |
| `decimal` | `qty` | The quantity of the Product to add to the Order |
| `IDictionary<string, string>` | `properties` | A collection of properties to assign to the Product Order Line |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order AddProduct(string productReference, decimal qty, IDictionary<string, string> properties, string bundleId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `productReference` | The unique reference of the Product to add to the Order |
| `decimal` | `qty` | The quantity of the Product to add to the Order |
| `IDictionary<string, string>` | `properties` | A collection of properties to assign to the Product Order Line |
| `string` | `bundleId` | An ID to assign to the Product Order Line to identify it as a Bundle |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

--- 

***Signature:***

````csharp
Order AddProduct(IProductSnapshot productSnapshot, decimal qty);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IProductSnapshot` | `productSnapshot` | A Vendr snapshot of the Product to add to the Order |
| `decimal` | `qty` | The quantity of the Product to add to the Order |
***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order AddProduct(IProductSnapshot productSnapshot, decimal qty, string bundleId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IProductSnapshot` | `productSnapshot` | A Vendr snapshot of the Product to add to the Order |
| `decimal` | `qty` | The quantity of the Product to add to the Order |
| `string` | `bundleId` | An ID to assign to the Product Order Line to identify it as a Bundle |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order AddProduct(IProductSnapshot productSnapshot, decimal qty, IDictionary<string, string> properties);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IProductSnapshot` | `productSnapshot` | A Vendr snapshot of the Product to add to the Order |
| `decimal` | `qty` | The quantity of the Product to add to the Order |
| `IDictionary<string, string>` | `properties` | A collection of properties to assign to the Product Order Line |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order AddProduct(IProductSnapshot productSnapshot, decimal qty, IDictionary<string, string> properties, string bundleId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IProductSnapshot` | `productSnapshot` | A Vendr snapshot of the Product to add to the Order |
| `decimal` | `qty` | The quantity of the Product to add to the Order |
| `IDictionary<string, string>` | `properties` | A collection of properties to assign to the Product Order Line |
| `string` | `bundleId` | An ID to assign to the Product Order Line to identify it as a Bundle |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### AddProductToBundle
Adds a Product to a Bundle

***Signature:***

````csharp
Order AddProductToBundle(string parentBundleId, string productReference, decimal qty);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `parentBundleId` | The ID of the Bundle to assign this Product to |
| `string` | `productReference` | The unique reference of the Product to add to the Order |
| `decimal` | `qty` | The quantity of the Product to add to the Order |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order AddProductToBundle(string parentBundleId, string productReference, decimal qty, string bundleId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `parentBundleId` | The ID of the Bundle to assign this Product to |
| `string` | `productReference` | The unique reference of the Product to add to the Order |
| `decimal` | `qty` | The quantity of the Product to add to the Order |
| `string` | `bundleId` | An ID to assign to the Product Order Line to identify it as a sub Bundle |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order AddProductToBundle(string parentBundleId, string productReference, decimal qty, IDictionary<string, string> properties);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `parentBundleId` | The ID of the Bundle to assign this Product to |
| `string` | `productReference` | The unique reference of the Product to add to the Order |
| `decimal` | `qty` | The quantity of the Product to add to the Order |
| `IDictionary<string, string>` | `properties` | A collection of properties to assign to the Product Order Line |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order AddProductToBundle(string parentBundleId, string productReference, decimal qty, IDictionary<string, string> properties, string bundleId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `parentBundleId` | The ID of the Bundle to assign this Product to |
| `string` | `productReference` | The unique reference of the Product to add to the Order |
| `decimal` | `qty` | The quantity of the Product to add to the Order |
| `IDictionary<string, string>` | `properties` | A collection of properties to assign to the Product Order Line |
| `string` | `bundleId` | An ID to assign to the Product Order Line to identify it as a sub Bundle |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

--- 

***Signature:***

````csharp
Order AddProductToBundle(string parentBundleId, IProductSnapshot productSnapshot, decimal qty);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `parentBundleId` | The ID of the Bundle to assign this Product to |
| `IProductSnapshot` | `productSnapshot` | A Vendr snapshot of the Product to add to the Order |
| `decimal` | `qty` | The quantity of the Product to add to the Order |
***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order AddProductToBundle(string parentBundleId, IProductSnapshot productSnapshot, decimal qty, string bundleId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `parentBundleId` | The ID of the Bundle to assign this Product to |
| `IProductSnapshot` | `productSnapshot` | A Vendr snapshot of the Product to add to the Order |
| `decimal` | `qty` | The quantity of the Product to add to the Order |
| `string` | `bundleId` | An ID to assign to the Product Order Line to identify it as a sub Bundle |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order AddProductToBundle(string parentBundleId, IProductSnapshot productSnapshot, decimal qty, IDictionary<string, string> properties);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `parentBundleId` | The ID of the Bundle to assign this Product to |
| `IProductSnapshot` | `productSnapshot` | A Vendr snapshot of the Product to add to the Order |
| `decimal` | `qty` | The quantity of the Product to add to the Order |
| `IDictionary<string, string>` | `properties` | A collection of properties to assign to the Product Order Line |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order AddProductToBundle(string parentBundleId, IProductSnapshot productSnapshot, decimal qty, IDictionary<string, string> properties, string bundleId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `parentBundleId` | The ID of the Bundle to assign this Product to |
| `IProductSnapshot` | `productSnapshot` | A Vendr snapshot of the Product to add to the Order |
| `decimal` | `qty` | The quantity of the Product to add to the Order |
| `IDictionary<string, string>` | `properties` | A collection of properties to assign to the Product Order Line |
| `string` | `bundleId` | An ID to assign to the Product Order Line to identify it as a sub Bundle |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### WithOrderLine
Switches the Fluent write context from the Order to the defined Order Line

***Signature:***

````csharp
OrderLineContext WithOrderLine(OrderLineReadOnly orderLine);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `OrderLineReadOnly` | `orderLine` | The Order Line to set the write context to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderLineContext` | [The Order Line fluent context](#orderlinecontext) |

---

***Signature:***

````csharp
OrderLineContext WithOrderLine(Guid orderLineId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `orderLineId` | The ID of the Order Line to set the write context to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderLineContext` | [The Order Line fluent context](#orderlinecontext) |

#### RemoveOrderLine
Removes and Order Line from the Order

***Signature:***

````csharp
Order RemoveOrderLine(OrderLineReadOnly orderLine);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `OrderLineReadOnly` | `orderLine` | The Order Line to remove |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order RemoveOrderLine(Guid orderLineId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `orderLineId` | The ID of the Order Line to remove |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### SetProperty
Sets a given Order Property

***Signature:***

````csharp
Order SetProperty(string alias, string value);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `alias` | The alias of the property to set |
| `string` | `value` | The value of the property to set |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order SetProperty(string alias, PropertyValue value);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `alias` | The alias of the property to set |
| `PropertyValue` | `value` | The value of the property to set |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### SetProperties
Sets a series of Order Properties

***Signature:***

````csharp
Order SetProperties(IDictionary<string, string> properties, SetBehavior setBehavior);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IDictionary<string, string>` | `properties` | The properties to set |
| `SetBehavior` | `setBehavior` | The Behavior of the set operation, whether to `Merge` the properties, or `Replace` them entirely |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order SetProperties(IDictionary<string, PropertyValue> properties, SetBehavior setBehavior);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IDictionary<string, PropertyValue>` | `properties` | The properties to set |
| `SetBehavior` | `setBehavior` | The Behavior of the set operation, whether to `Merge` the properties, or `Replace` them entirely |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### RemoveProperty
Removes an Order Property

***Signature:***

````csharp
Order RemoveProperty(string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `alias` | The alias of the Property to remove |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### RemoveProperties
Removes a a series of Order Properties

***Signature:***

````csharp
Order RemoveProperties(IEnumerable<string> aliases);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IEnumerable<string>` | `alias` | The aliases of the Properties to remove |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### SetLanguage
Sets the Language of the Order

***Signature:***

````csharp
Order SetLanguage(string languageIsoCode);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `languageIsoCode` | The ISO Code of the Language to set the Order to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### SetCurrency
Sets the Currency of the Order

***Signature:***

````csharp
Order SetCurrency(CurrencyReadOnly currency);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CurrencyReadOnly` | `currency` | The Currency to set the Order to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order SetCurrency(Guid currencyId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `currencyId` | The ID of the Currency to set the Order to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### SetTaxClass
Sets the Tax Class of the Order

***Signature:***

````csharp
Order SetTaxClass(TaxClassReadOnly taxClass);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `TaxClassReadOnly` | `taxClass` | The Tax Class to set the Order to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order SetTaxClass(Guid taxClassId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `taxClassId` | The ID of the Tax Class to set the Order to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### SetPaymentMethod
Sets the Payment Method of the Order

***Signature:***

````csharp
Order SetPaymentMethod(PaymentMethodReadOnly paymentMethod);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `PaymentMethodReadOnly` | `paymentMethod` | The Payment Method to set the Order to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order SetPaymentMethod(Guid? paymentMethodId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid?` | `paymentMethodId` | The ID of the Payment Method to set the Order to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### ClearPaymentMethod
Clears the Payment Method of the Order

***Signature:***

````csharp
Order ClearPaymentMethod();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### SetPaymentCountryRegion
Sets the Payment Country and Region of the Order

***Signature:***

````csharp
Order SetPaymentCountryRegion(CountryReadOnly country, RegionReadOnly region = null);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country to set the Payment Country of the Order to |
| `RegionReadOnly` | `region` | The Region to set the Payment Region of the Order to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order SetPaymentCountryRegion(Guid? countryId, Guid? regionId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid?` | `countryId` | The ID of the Country to set the Payment Country of the Order to |
| `Guid?` | `regionId` | The ID of the Region to set the Payment Region of the Order to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### ClearPaymentCountryRegion
Clears the Payment Country and Region of the Order

***Signature:***

````csharp
Order ClearPaymentCountryRegion();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### SetShippingMethod
Sets the Shipping Method of the Order

***Signature:***

````csharp
Order SetShippingMethod(ShippingMethodReadOnly shippingMethod);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `ShippingMethodReadOnly` | `shippingMethod` | The Shipping Method to set the Order to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order SetShippingMethod(Guid? shippingMethodId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid?` | `shippingMethodId` | The ID of the Shipping Method to set the Order to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### ClearShippingMethod
Clears the Shipping Method of the Order

***Signature:***

````csharp
Order ClearShippingMethod();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### SetShippingCountryRegion
Sets the Shipping Country and Region of the Order

***Signature:***

````csharp
Order SetShippingCountryRegion(CountryReadOnly country, RegionReadOnly region = null);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `CountryReadOnly` | `country` | The Country to set the Shipping Country of the Order to |
| `RegionReadOnly` | `region` | The Region to set the Shipping Region of the Order to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order SetShippingCountryRegion(Guid? countryId, Guid? regionId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid?` | `countryId` | The ID of the Country to set the Shipping Country of the Order to |
| `Guid?` | `regionId` | The ID of the Region to set the Shipping Region of the Order to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### ClearShippingCountryRegion
Clears the Shipping Country and Region of the Order

***Signature:***

````csharp
Order ClearShippingCountryRegion();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### Redeem
Redeems a Discount Code or Gift Card against the Order

***Signature:***

````csharp
Order Redeem(string discountOrGiftCardCode);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `discountOrGiftCardCode` | The Code of the Discount or Gift Card to redeem against the Order |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### Unredeem
Unredeems a Discount Code or Gift Card from the Order

***Signature:***

````csharp
Order Unredeem(string discountOrGiftCardCode);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `discountOrGiftCardCode` | The Code of the Discount or Gift Card to unredeem from the Order |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### Finalize
Finalizes the Order

***Signature:***

````csharp
Order Finalize(decimal amountAuthorized, string transactionId, PaymentStatus paymentStatus);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `decimal` | `amountAuthorized` | The amount authorized by the Payment Gateway |
| `string` | `transactionId` | The unique ID of the transaction provided by the Payment Gateway |
| `PaymentStatus` | `paymentStatus` | The status of the transaction |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order Finalize(decimal amountAuthorized, decimal transactionFee, string transactionId, PaymentStatus paymentStatus);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `decimal` | `amountAuthorized` | The amount authorized by the Payment Gateway |
| `decimal` | `transactionFee` | A fee amount charged by the Payment Gateway |
| `string` | `transactionId` | The unique ID of the transaction provided by the Payment Gateway |
| `PaymentStatus` | `paymentStatus` | The status of the transaction |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### FinalizeOrUpdateTransaction
Finalizes or Updates the Orders Transaction info

***Signature:***

````csharp
Order FinalizeOrUpdateTransaction(decimal amountAuthorized, string transactionId, PaymentStatus paymentStatus);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `decimal` | `amountAuthorized` | The amount authorized by the Payment Gateway |
| `string` | `transactionId` | The unique ID of the transaction provided by the Payment Gateway |
| `PaymentStatus` | `paymentStatus` | The status of the transaction |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order FinalizeOrUpdateTransaction(decimal amountAuthorized, decimal transactionFee, string transactionId, PaymentStatus paymentStatus);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `decimal` | `amountAuthorized` | The amount authorized by the Payment Gateway |
| `decimal` | `transactionFee` | A fee amount charged by the Payment Gateway |
| `string` | `transactionId` | The unique ID of the transaction provided by the Payment Gateway |
| `PaymentStatus` | `paymentStatus` | The status of the transaction |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### UpdateTransaction
Updates the Orders Transaction info

***Signature:***

````csharp
Order UpdateTransaction(decimal amountAuthorized, string transactionId, PaymentStatus paymentStatus);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `decimal` | `amountAuthorized` | The amount authorized by the Payment Gateway |
| `string` | `transactionId` | The unique ID of the transaction provided by the Payment Gateway |
| `PaymentStatus` | `paymentStatus` | The status of the transaction |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order UpdateTransaction(decimal amountAuthorized, decimal transactionFee, string transactionId, PaymentStatus paymentStatus);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `decimal` | `amountAuthorized` | The amount authorized by the Payment Gateway |
| `decimal` | `transactionFee` | A fee amount charged by the Payment Gateway |
| `string` | `transactionId` | The unique ID of the transaction provided by the Payment Gateway |
| `PaymentStatus` | `paymentStatus` | The status of the transaction |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### SetOrderStatus
Updates the Orders Status

***Signature:***

````csharp
Order SetOrderStatus(OrderStatusReadOnly orderStatus);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `OrderStatusReadOnly` | `orderStatus` | The Order Status to set the Order to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order SetOrderStatus(Guid orderStatusId);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `orderStatusId` | The ID of the Order Status to set the Order to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order SetOrderStatus(OrderStatusReadOnly orderStatus, OrderStatusCode orderStatusCode);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `OrderStatusReadOnly` | `orderStatus` | The Order Status to set the Order to |
| `OrderStatusCode` | `orderStatusCode` | An Order Status Code to assigned to the Order |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order SetOrderStatus(Guid orderStatusId, OrderStatusCode orderStatusCode);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `Guid` | `orderStatusId` | The ID of the Order Status to set the Order to |
| `OrderStatusCode` | `orderStatusCode` | An Order Status Code to assigned to the Order |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### AssignToCustomer
Assigns the Order to a Customer

***Signature:***

````csharp
Order AssignToCustomer(string customerReference);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `customerReference` | The unique Reference of the Customer to assign the Order to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### Recalculate
Recalculates the Customer

***Signature:***

````csharp
Order Recalculate();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Signature:***

````csharp
Order Recalculate(bool force);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `bool` | `force` | Force the Order to recalculate even if it's Finalized |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

#### AsReadOnly
Converts a writable Order into a read only Order

***Signature:***

````csharp
OrderReadOnly AsReadOnly();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderReadOnly` | A read only version of the Order |

<div class="mb-48"></div>

## Order Line Entities

### OrderLineReadOnly

**Description:** Order Line owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `Id` | The ID of the Order Line |
| `Guid` | `OrderId` | The ID of Order Lines parent Order |
| `Guid` | `StoreId` | The ID of parent Orders Store |
| `string` | `ProductReference` | The unique reference of the Product associated with the Order Line |
| `string` | `Sku` | The unique SKU of the Product associated with the Order Line |
| `string` | `Name` | The Name the Product associated with the Order Line |
| `decimal` | `Quantity` | The Quantity of the Product associated with the Order Line |
| `Guid?` | `TaxClassId` | The ID of the Tax Class associated with the Order Line |
| `string` | `BundleId` | An ID to identify this Order Line by as a Bundle |
| `IReadOnlyCollection <OrderLineReadOnly>` | `OrderLines` | Collection of Child / Bundle Order Lines associated with this Order Line |
| `IReadOnlyDictionary<string, PropertyValue>` | `Properties` | Collection of [Properties](../../key-concepts/properties/) associated with this Order Line |
| `ReadOnlyOrderLineUnitPrice` | `UnitPrice` | The calculated [Unit Price of the Order Line](#readonlyorderlineunitprice) |
| `TaxRate` | `TaxRate` | The calculated Tax Rate of the Order Line |
| `ReadOnlyOrderLineTotalPrice` | `TotalPrice` | The calculated [Total Price of the Order Line](#readonlyorderlinetotalprice) |

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

### OrderLineContext

**Description:** Order Line fluent write context  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

<message-box type="info" heading="Note">

An Order Line context cannot simply be created, it must be retrieved by calling [WithOrderLine](#withorderline) on the Order Lines parent writable Order.

</message-box>

#### IncrementQuantity
Increments the quantity of the current contextual Order Line by a given amount

***Signature:***

````csharp
OrderLineContext IncrementQuantity(decimal qty);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `decimal` | `qty` | The amount to increase the Order Line quantity by |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderLineContext` | The Order Line fluent write context |

#### DecrementQuantity
Decrements the quantity of the current contextual Order Line by a given amount

***Signature:***

````csharp
OrderLineContext DecrementQuantity(decimal qty);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `decimal` | `qty` | The amount to decrease the Order Line quantity by |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderLineContext` | The Order Line fluent write context |

#### SetQuantity
Sets the quantity of the current contextual Order Line to a given amount

***Signature:***

````csharp
OrderLineContext SetQuantity(decimal qty);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `decimal` | `qty` | The amount to set the Order Line quantity to |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderLineContext` | The Order Line fluent write context |

#### SetProperty
Sets a given Order Line Property

***Signature:***

````csharp
OrderLineContext SetProperty(string alias, string value);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `alias` | The alias of the property to set |
| `string` | `value` | The value of the property to set |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderLineContext` | The Order Line fluent write context |

---

***Signature:***

````csharp
OrderLineContext SetProperty(string alias, PropertyValue value);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `alias` | The alias of the property to set |
| `PropertyValue` | `value` | The value of the property to set |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderLineContext` | The Order Line fluent write context |

#### SetProperties
Sets a series of Order Line Properties

***Signature:***

````csharp
OrderLineContext SetProperties(IDictionary<string, string> properties, SetBehavior setBehavior);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IDictionary<string, string>` | `properties` | The properties to set |
| `SetBehavior` | `setBehavior` | The Behavior of the set operation, whether to `Merge` the properties, or `Replace` them entirely |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderLineContext` | The Order Line fluent write context |

---

***Signature:***

````csharp
OrderLineContext SetProperties(IDictionary<string, PropertyValue> properties, SetBehavior setBehavior);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IDictionary<string, PropertyValue>` | `properties` | The properties to set |
| `SetBehavior` | `setBehavior` | The Behavior of the set operation, whether to `Merge` the properties, or `Replace` them entirely |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderLineContext` | The Order Line fluent write context |

#### RemoveProperty
Removes an Order Line Property

***Signature:***

````csharp
OrderLineContext RemoveProperty(string alias);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `alias` | The alias of the Property to remove |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderLineContext` | The Order Line fluent write context |

#### RemoveProperties
Removes a a series of Order Line Properties

***Signature:***

````csharp
OrderLineContext RemoveProperties(IEnumerable<string> aliases);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IEnumerable<string>` | `alias` | The aliases of the Properties to remove |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderLineContext` | The Order Line fluent write context |

### ReadOnlyOrderLineUnitPrice

**Description:** Read Only Order Line Unit Price owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Price` | `WithoutDiscounts` | Price without any Discounts |
| `Price` | `Discount` | The Subtotal Discount Price |
| `Price` | `Value` | The Total Price with Discounts applied |
| `IReadOnlyCollection <AppliedDiscount>` | `Discounts` | A collection of  [applied discounts](#applieddiscount) |

### ReadOnlyOrderLineTotalPrice

**Description:** Read Only Order Line Total Price owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Price` | `WithoutDiscounts` | Price without any Discounts |
| `Price` | `PreviousDiscounts` | Price of any Previous Discounts |
| `Price` | `WithPreviousDiscounts` | Price including any Previous Discounts |
| `Price` | `Discount` | The Order Line Total Discount Price |
| `Price` | `TotalDiscount` | The Total Discount Price |
| `Price` | `Value` | The Total Price with Discounts applied |
| `IReadOnlyCollection <AppliedDiscount>` | `Discounts` | A collection of Order Line Total [applied discounts](#applieddiscount) |

<div class="mb-48"></div>

## Order Owned Entities

### CustomerInfo

**Description:** Order Customer Information owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `string` | `CustomerReference` | A unique reference for the Customer, by default will be Umbraco Member Key |
| `string` | `FirstName` | The first name of the customer |
| `string` | `LastName` | The last name of the customer |
| `string` | `Email` | The email address of the customer |

### OrderPaymentInfo

**Description:** Order Payment Information owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core


#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid?` | `CountryId` | The ID of the payment Country |
| `Guid?` | `RegionId` | The ID of the payment Region |
| `Guid?` | `PaymentMethodId` | The ID of the payment Method |
| `TaxRate` | `TaxRate` | The calculated Tax Rate of the payment fee |
| `ReadOnlyTotalPrice` | `TotalPrice` | The calculated [total price](#readonlytotalprice) of the payment fee |

### OrderShippingInfo

**Description:** Order Shipping Information owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid?` | `CountryId` | The ID of the shipping Country |
| `Guid?` | `RegionId` | The ID of the shipping Region |
| `Guid?` | `ShippingMethodId` | The ID of the shipping Method |
| `TaxRate` | `TaxRate` | The calculated Tax Rate of the shipping fee |
| `ReadOnlyTotalPrice` | `TotalPrice` | The calculated [total price](#readonlytotalprice) of the shipping fee |

### OrderTransactionInfo

**Description:** Order Transaction Information owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `string` | `TransactionId` | The unique ID of the transaction, obtained from the payment gateway |
| `Amount` | `AmountAuthorized` | The total amount that was authorized via the transaction |
| `Amount` | `TransactionFee` | Any fee amount associated with the transaction |
| `PaymentStatus?` | `PaymentStatus` | The current payment status of the transaction |

### AppliedDiscountCode

**Description:** Order Applied Discount Code owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `DiscountId` | The ID of the Discount this code is associated with |
| `string` | `Code` | The Code that was applied |
| `bool` | `IsFulfilled` | Flag indicating whether the code is fulfilled by the Order |

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

### AppliedGiftCard

**Description:** Order Applied Gift Card owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `GiftCardId` | The ID of the Gift Card this code is associated with |
| `string` | `Code` | The Code that was applied |
| `Amount` | `Amount` | The calculated amount deducted from the Order by this Gift Card |

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

**Description:** Order Fulfilled Discount owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `DiscountId` | The ID of the Discount |
| `string` | `DiscountName` | The Name of the Discount |
| `DiscountType` | `DiscountType` | The Type of the Discount, either `Automatic` or `Code` |

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

### ReadOnlyTotalPrice

**Description:** Read Only Total Price owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Price` | `WithoutDiscounts` | Price without any Discounts |
| `Price` | `Discount` | The Subtotal Discount Price |
| `Price` | `Value` | The Total Price with Discounts applied |
| `IReadOnlyCollection <AppliedDiscount>` | `Discounts` | A collection of  [applied discounts](#applieddiscount) |

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

### ReadOnlyOrderSubtotalPrice

**Description:** Read Only Order Subtotal Price owned entity  
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
| `IReadOnlyCollection <AppliedDiscount>` | `Discounts` | A collection of Subtotal [applied discounts](#applieddiscount) |

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

### ReadOnlyOrderTotalPrice

**Description:** Read Only Order Total Price owned entity  
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
| `IReadOnlyCollection <AppliedDiscount>` | `Discounts` | A collection of Total [applied discounts](#applieddiscount) |

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

## Shared Owned Entities

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

<div class="mb-48"></div>

## Order Events

### Validation Events

#### ValidateOrderCreate

**Description:** Validation event fired when an Order is being created  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |

#### ValidateOrderUpdate

**Description:** Validation event fired when an Order is being updated  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |

#### ValidateOrderSave

**Description:** Validation event fired when an Order is being saved  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |

#### ValidateOrderDelete

**Description:** Validation event fired when an Order is being deleted  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |

#### ValidateOrderLanguageChange

**Description:** Validation event fired when the Language of an Order is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `ChangingValue<string>` | `LanguageIsoCode` | The changing Language ISO Code of the Order |

#### ValidateOrderCurrencyChange

**Description:** Validation event fired when the Currency of an Order is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `ChangingValue<Guid>` | `CurrencyId` | The changing ID of the Currency of the Order |

#### ValidateOrderTaxClassChange

**Description:** Validation event fired when the Tax Class of an Order is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `ChangingValue<Guid>` | `TaxClassId` | The changing ID of the Tax Class of the Order |

#### ValidateOrderPaymentMethodChange

**Description:** Validation event fired when the Payment Method of an Order is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `ChangingValue<Guid?>` | `PaymentMethodId` | The changing ID of the Payment Method of the Order |

#### ValidateOrderPaymentCountryRegionChange

**Description:** Validation event fired when the Payment Country / Region of an Order is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `ChangingValue<Guid?>` | `CountryId` | The changing ID of the Payment Country of the Order |
| `ChangingValue<Guid?>` | `RegionId` | The changing ID of the Payment Region of the Order |

#### ValidateOrderShippingMethodChange

**Description:** Validation event fired when the Shipping Method of an Order is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `ChangingValue<Guid?>` | `ShippingMethodId` | The changing ID of the Shipping Method of the Order |

#### ValidateOrderShippingCountryRegionChange

**Description:** Validation event fired when the Shipping Country / Region of an Order is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `ChangingValue<Guid?>` | `CountryId` | The changing ID of the Shipping Country of the Order |
| `ChangingValue<Guid?>` | `RegionId` | The changing ID of the Shipping Region of the Order |

#### ValidateOrderDiscountCodeRedeem

**Description:** Validation event fired when a Discount Code is being redeemed against an Order  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `string` | `Code` | The Code being redeemed against the Order |

#### ValidateOrderDiscountCodeUnredeem

**Description:** Validation event fired when a Discount Code is being unredeemed against an Order  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `string` | `Code` | The Code being unredeemed against the Order |

#### ValidateOrderGiftCardRedeem

**Description:** Validation event fired when a Gift Card Code is being redeemed against an Order  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `string` | `Code` | The Code being redeemed against the Order |

#### ValidateOrderGiftCardUnredeem

**Description:** Validation event fired when a Gift Card Code is being unredeemed against an Order  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `string` | `Code` | The Code being unredeemed against the Order |

#### ValidateOrderProductAdd

**Description:** Validation event fired when a Product is being added to an Order  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `string` | `ProductReference` | The Product Reference of the Product being added |
| `decimal` | `Quantity` | The Quantity of the Product being added |
| `IDictionary<string, string>` | `Properties` | Any Properties being added with the Product |
| `string` | `BundleId` | The Bundle ID of the Product being added |
| `string` | `ParentBundleId` | The Parent Bundle ID of the Product being added |

#### ValidateOrderFinalize

**Description:** Validation event fired when an Order is about to Finalize  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `decimal` | `AmountAuthorized` | The Authorized Amount of the Transaction |
| `decimal` | `TransactionFee` | The Fee charged by the Payment Gateway for the Transaction |
| `string` | `TransactionId` | The unique ID of the Transaction |
| `PaymentStatus` | `PaymentStatus` | The Payment Status of the Transaction |

#### ValidateOrderTransactionUpdate

**Description:** Validation event fired when an Orders Transaction Info is being updated  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `ChangingValue<decimal>` | `AmountAuthorized` | The changing Authorized Amount of the Transaction |
| `ChangingValue<decimal>` | `TransactionFee` | The changing Fee charged by the Payment Gateway for the Transaction |
| `ChangingValue<string>` | `TransactionId` | The changing unique ID of the Transaction |
| `ChangingValue<PaymentStatus?>` | `PaymentStatus` | The changing Payment Status value of the Transaction |

#### ValidateOrderStatusChange

**Description:** Validation event fired when an Orders Status is changing  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `ChangingValue<Guid>` | `OrderStatusId` | The changing ID of the Order Status of the Order |
| `ChangingValue<OrderStatusCode>` | `OrderStatusCode` | The changing Code of the Order Status of the Order |

#### ValidateOrderAssignToCustomer

**Description:** Validation event fired when an Order is being assigned to a Customer  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `ChangingValue<string>` | `CustomerReference` | The changing unique Reference of the Customer the Order is being assigned to |

#### ValidateOrderPropertyChange

**Description:** Validation event fired when an Order Property is changing  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `string` | `Alias` | The Alias of the Order Property that is changing |
| `ChangingValue<PropertyValue>` | `Value` | The changing Value of the Order Property that is changing |

### Notification Events

#### OrderCreatingNotification

**Description:** Notification event fired before an Order is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |

#### OrderCreatedNotification

**Description:** Notification event fired after an Order is created   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |

#### OrderUpdatingNotification

**Description:** Notification event fired before an Order is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |

#### OrderUpdatedNotification

**Description:** Notification event fired after an Order is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |

#### OrderSavingNotification

**Description:** Notification event fired before an Order is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |

#### OrderSavedNotification

**Description:** Notification event fired after an Order is saved   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |

#### OrderDeletingNotification

**Description:** Notification event fired before an Order is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |

#### OrderDeletedNotification

**Description:** Notification event fired after an Order is deleted   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |

#### OrderFinalizingNotification

**Description:** Notification event fired before an Order is finalized   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |

#### OrderFinalizedNotification

**Description:** Notification event fired after an Order is finalized   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |

#### OrderLanguageChangingNotification

**Description:** Notification event fired before an Order Language is changed   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |
| `ChangingValue<string>` | `LanguageIsoCode` | The changing ISO Code of the Language of the Order |

#### OrderLanguageChangedNotification

**Description:** Notification event fired after an Order Language is changed   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `ChangingValue<string>` | `LanguageIsoCode` | The changing ISO Code of the Language of the Order |

#### OrderCurrencyChangingNotification

**Description:** Notification event fired before an Order Currency is changed   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |
| `ChangingValue<Guid?>` | `CurrencyId` | The changing ID of the Currency of the Order |

#### OrderCurrencyChangedNotification

**Description:** Notification event fired after an Order Currency is changed   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `ChangingValue<Guid?>` | `CurrencyId` | The changing ID of the Currency of the Order |

#### OrderTaxClassChangingNotification

**Description:** Notification event fired before an Order Tax Class is changed   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |
| `ChangingValue<Guid?>` | `TaxClassId` | The changing ID of the Tax Class of the Order |

#### OrderTaxClassChangedNotification

**Description:** Notification event fired after an Order Tax Class is changed   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `ChangingValue<Guid?>` | `TaxClassId` | The changing ID of the Tax Class of the Order |

#### OrderPaymentMethodChangingNotification

**Description:** Notification event fired before an Order Payment Method is changed   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |
| `ChangingValue<Guid?>` | `PaymentMethodId` | The changing ID of the Payment Method of the Order |

#### OrderPaymentMethodChangedNotification

**Description:** Notification event fired after an Order Payment Method is changed   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `ChangingValue<Guid?>` | `PaymentMethodId` | The changing ID of the Payment Method of the Order |

#### OrderPaymentCountryRegionChangingNotification

**Description:** Notification event fired before an Order Payment CountryRegion is changed   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |
| `ChangingValue<Guid?>` | `CountryId` | The changing ID of the Payment Country of the Order |
| `ChangingValue<Guid?>` | `RegionId` | The changing ID of the Payment Region of the Order |

#### OrderPaymentCountryRegionChangedNotification

**Description:** Notification event fired after an Order Payment CountryRegion is changed   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `ChangingValue<Guid?>` | `CountryId` | The changing ID of the Payment Country of the Order |
| `ChangingValue<Guid?>` | `RegionId` | The changing ID of the Payment Region of the Order |

#### OrderShippingMethodChangingNotification

**Description:** Notification event fired before an Order Shipping Method is changed   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |
| `ChangingValue<Guid?>` | `ShippingMethodId` | The changing ID of the Shipping Method of the Order |

#### OrderShippingMethodChangedNotification

**Description:** Notification event fired after an Order Shipping Method is changed   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `ChangingValue<Guid?>` | `ShippingMethodId` | The changing ID of the Shipping Method of the Order |

#### OrderShippingCountryRegionChangingNotification

**Description:** Notification event fired before an Order Shipping CountryRegion is changed   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |
| `ChangingValue<Guid?>` | `CountryId` | The changing ID of the Shipping Country of the Order |
| `ChangingValue<Guid?>` | `RegionId` | The changing ID of the Shipping Region of the Order |

#### OrderShippingCountryRegionChangedNotification

**Description:** Notification event fired after an Order Shipping CountryRegion is changed   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `ChangingValue<Guid?>` | `CountryId` | The changing ID of the Shipping Country of the Order |
| `ChangingValue<Guid?>` | `RegionId` | The changing ID of the Shipping Region of the Order |

#### OrderProductAddingNotification

**Description:** Notification event fired before a Product is added to an Order   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |
| `string` | `ProductReference` | The Product Reference of the Product being added |
| `decimal` | `Quantity` | The Quantity of the Product being added |
| `IDictionary<string, string>` | `Properties` | Any Properties being added with the Product |
| `string` | `BundleId` | The Bundle ID of the Product being added |
| `string` | `ParentBundleId` | The Parent Bundle ID of the Product being added |

#### OrderProductAddedNotification

**Description:** Notification event fired after a Product is added to an Order   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `string` | `ProductReference` | The Product Reference of the Product being added |
| `decimal` | `Quantity` | The Quantity of the Product being added |
| `IDictionary<string, string>` | `Properties` | Any Properties being added with the Product |
| `string` | `BundleId` | The Bundle ID of the Product being added |
| `string` | `ParentBundleId` | The Parent Bundle ID of the Product being added |

#### OrderStatusChangingNotification

**Description:** Notification event fired before an Order Status is changed   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |
| `ChangingValue<Guid?>` | `OrderStatusId` | The changing ID of the Order Status of the Order |
| `ChangingValue<OrderStatusCode>` | `OrderStatusCode` | The changing Code of the Order Status of the Order |

#### OrderStatusChangedNotification

**Description:** Notification event fired after an Order Status is changed    
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `ChangingValue<Guid?>` | `OrderStatusId` | The changing ID of the Order Status of the Order |
| `ChangingValue<OrderStatusCode>` | `OrderStatusCode` | The changing Code of the Order Status of the Order |

#### OrderTransactionUpdatingNotification

**Description:** Notification event fired before an Orders Transaction is updated   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |
| `ChangingValue<decimal>` | `AmountAuthorized` | The changing Authorized Amount of the Transaction |
| `ChangingValue<decimal>` | `TransactionFee` | The changing Fee charged by the Payment Gateway for the Transaction |
| `ChangingValue<string>` | `TransactionId` | The changing unique ID of the Transaction |
| `ChangingValue<PaymentStatus?>` | `PaymentStatus` | The changing Payment Status value of the Transaction |

#### OrderTransactionUpdatedNotification

**Description:** Notification event fired after an Orders Transaction is updated    
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `ChangingValue<decimal>` | `AmountAuthorized` | The changing Authorized Amount of the Transaction |
| `ChangingValue<decimal>` | `TransactionFee` | The changing Fee charged by the Payment Gateway for the Transaction |
| `ChangingValue<string>` | `TransactionId` | The changing unique ID of the Transaction |
| `ChangingValue<PaymentStatus?>` | `PaymentStatus` | The changing Payment Status value of the Transaction |

#### OrderAssigningToCustomerNotification

**Description:** Notification event fired before an Order is assigned to a Customer   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |
| `ChangingValue<string>` | `OrderStatusCode` | The changing unique Reference of the Customer the Order is being assigned to |

#### OrderAssignedToCustomerNotification

**Description:** Notification event fired after an Order is assigned to a Customer    
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `ChangingValue<string>` | `OrderStatusCode` | The changing unique Reference of the Customer the Order is being assigned to |

#### OrderDiscountCodeRedeemingNotification

**Description:** Notification event fired before a Discount Code is redeemed against an Order   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |
| `string` | `Code` | The Code being redeemed |

#### OrderDiscountCodeRedeemedNotification

**Description:** Notification event fired after a Discount Code is redeemed against an Order    
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `string` | `Code` | The Code being redeemed |

#### OrderDiscountCodeUnredeemingNotification

**Description:** Notification event fired before a Discount Code is unredeemed from an Order   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |
| `string` | `Code` | The Code being unredeemed |

#### OrderDiscountCodeUnredeemedNotification

**Description:** Notification event fired after a Discount Code is unredeemed from an Order    
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `string` | `Code` | The Code being unredeemed |

#### OrderGiftCardRedeemingNotification

**Description:** Notification event fired before a Gift Card is redeemed against an Order   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |
| `string` | `Code` | The Code being redeemed |

#### OrderGiftCardRedeemedNotification

**Description:** Notification event fired after a Gift Card is redeemed against an Order    
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `string` | `Code` | The Code being redeemed |

#### OrderGiftCardUnredeemingNotification

**Description:** Notification event fired before a Gift Card is unredeemed from an Order   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |
| `string` | `Code` | The Code being unredeemed |

#### OrderGiftCardUnredeemedNotification

**Description:** Notification event fired after a Gift Card is unredeemed from an Order    
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `string` | `Code` | The Code being unredeemed |

#### OrderPropertiesChangingNotification

**Description:** Notification event fired before the Properties of an Order change   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |
| `DictionaryDiff<string, PropertyValue>` | `Properties` | A diff of the changing Order Properties |

#### OrderPropertiesChangedNotification

**Description:** Notification event fired after the Properties of an Order change    
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `DictionaryDiff<string, PropertyValue>` | `Properties` | A diff of the changing Order Properties |

<div class="mb-48"></div>

## Order Line Events

### Validation Events

#### ValidateOrderLineQuantityChange

**Description:** Validation event fired when the Quantity of an Order Line is being changed  
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `OrderLineReadOnly` | `OrderLine` | The Order Line associated with this event |
| `ChangingValue<decimal>` | `Quantity` | The changing Quantity of the Order Line |

#### ValidateOrderLinePropertyChange

**Description:** Validation event fired when an Order Line Property is changing   
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `OrderLineReadOnly` | `OrderLine` | The Order Line associated with this event |
| `string` | `Alias` | The Alias of the Order Line Property that is changing |
| `ChangingValue<PropertyValue>` | `Value` | The changing Value of the Order Line Property that is changing |

#### ValidateOrderLineRemove

**Description:** Validation event fired when an Order Line is being removed   
**Namespace:** Vendr.Core.Events.Validation   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `OrderLineReadOnly` | `OrderLine` | The Order Line associated with this event |

### Notification Events

#### OrderLineChangingNotification

**Description:** Notification event fired before an Order Line change   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |
| `OrderLineReadOnly` | `OrderLine` | The Order Line associated with this event |
| `ChangingValue<decimal>` | `Quantity` | The changing Quantity of the Order Line |
| `DictionaryDiff<string, PropertyValue>` | `Properties` | A diff of changing Properties on the Order Line |

#### OrderLineChangedNotification

**Description:** Notification event fired after an Order Line change   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `OrderLineReadOnly` | `OrderLine` | The Order Line associated with this event |
| `ChangingValue<decimal>` | `Quantity` | The changing Quantity of the Order Line |
| `DictionaryDiff<string, PropertyValue>` | `Properties` | A diff of changing Properties on the Order Line |

#### OrderLineRemovingNotification

**Description:** Notification event fired before an Order Line is removed   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Order` | `Order` | The Order associated with this event |
| `OrderLineReadOnly` | `OrderLine` | The Order Line associated with this event |

#### OrderLineRemovedNotification

**Description:** Notification event fired after an Order Line is removed   
**Namespace:** Vendr.Core.Events.Notification   
**Assembly:** Vendr.Core

***Properties:***

| Type | Name | Description |
| ---- | ---- | ----------- |
| `OrderReadOnly` | `Order` | The Order associated with this event |
| `OrderLineReadOnly` | `OrderLine` | The Order Line associated with this event |