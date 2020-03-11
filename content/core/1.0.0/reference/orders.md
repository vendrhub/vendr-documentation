---
title: Orders
description: The system defined constant properties available in Vendr, the eCommerce solution for Umbraco v8+
---

## Order Service

### IOrderService

**Description:** Interface of the Vendr Order Service  
**Namespace:** Vendr.Core.Services  
**Assembly:** Vendr.Core

#### SearchOrders
Searches for Orders with the given parameters.

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
Gets a list of Orders with the given IDs.

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
Gets a list of finalized Orders assigned to a given Customer.

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
Gets a specific Order entity.

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
Gets the total number of finalized Orders for the given Store.

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
Persists the given Order to the database.

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
| `IReadOnlyDictionary <string, PropertyValue>` | `Properties` | Collection of [Order Properties](../../key-concepts/properties/) associated with this Order |
| `IReadOnlyCollection <AppliedDiscountCode>` | `DiscountCodes` | Collection of [Applied Discount Codes](#applieddiscountcode) associated with this Order |
| `IReadOnlyCollection <AppliedGiftCard>` | `GiftCards` | Collection of [Applied Gift Cards](#appliedgiftcard) associated with this Order |
| `IReadOnlyCollection <FulfilledDiscount>` | `Discounts` | Collection of [Fulfilled Discounts](#fulfilleddiscount) associated with this Order |
| `TaxRate` | `TaxRate` | The Tax Rate of the Order |
| `double` | `TotalQuantity` | The total quantity of Order Line items in the Order |
| `ReadOnlyOrderSubtotalPrice` | `SubtotalPrice` | The subtotal price of the Order |
| `ReadOnlyOrderTotalPrice` | `TotalPrice` | The total price of the Order |
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

### Order

**Description:** Writable Order entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

See [Vendr.Core.Models.OrderReadOnly Properties](#properties)

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

<div class="mb-48"></div>

## Order Line Entities

### OrderLineReadOnly

**Description:** Order Line owned entity  
**Namespace:** Vendr.Core.Models  
**Assembly:** Vendr.Core

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid?` | `CountryId` | The ID of the payment Country |
| `Guid?` | `RegionId` | The ID of the payment Region |
| `Guid?` | `PaymentMethodId` | The ID of the payment Method |
| `TaxRate` | `TaxRate` | The Tax Rate of the payment fee |
| `ReadOnlyTotalPrice` | `TotalPrice` | The total price of the payment fee |

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
OrderLineContext SetProperties(IDictionary<string, string> properties, SetBehaviour setBehaviour);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IDictionary<string, string>` | `properties` | The properties to set |
| `SetBehaviour` | `setBehaviour` | The behaviour of the set operation, whether to `MERGE` the properties, or `REPLACE` them entirely |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderLineContext` | The Order Line fluent write context |

---

***Signature:***

````csharp
OrderLineContext SetProperties(IDictionary<string, PropertyValue> properties, SetBehaviour setBehaviour);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `IDictionary<string, PropertyValue>` | `properties` | The properties to set |
| `SetBehaviour` | `setBehaviour` | The behaviour of the set operation, whether to `MERGE` the properties, or `REPLACE` them entirely |

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
| `TaxRate` | `TaxRate` | The Tax Rate of the payment fee |
| `ReadOnlyTotalPrice` | `TotalPrice` | The total price of the payment fee |

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
| `TaxRate` | `TaxRate` | The Tax Rate of the shipping fee |
| `ReadOnlyTotalPrice` | `TotalPrice` | The total price of the shipping fee |

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

<div class="mb-48"></div>

## Order Events

### Validation Events

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

### Notification Events

| Type | Description |
| ---- | ----------- |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |

<div class="mb-48"></div>

## Order Line Events

### Validation Events

### Notification Events