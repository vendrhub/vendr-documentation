---
title: Orders
description: The system defined constant properties available in Vendr, the eCommerce solution for Umbraco v8+
---

## Order Service

##### Vendr.Core.Services.IOrderService
Interface of the Vendr Order Service

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

--- 

***Events:***

| Type | Description |
| ---- | ----------- |
| `ValidateOrderCreate` | Validation event for creating an Order entity |
| `ValidateOrderUpdate` | Validation event for updating an Order entity |
| `ValidateOrderSave` | Validation event for saving an Order entity |
| `OrderCreatingNotification` | Notification event for creating an Order entity, prior to persistance |
| `OrderUpdatingNotification` | Notification event for updating an Order entity, prior to persistance |
| `OrderSavingNotification` | Notification event for saving an Order entity, prior to persistance |
| `OrderCreatedNotification` | Notification event for creating an Order entity, post persistance |
| `OrderUpdatedNotification` | Notification event for updating an Order entity, post persistance |
| `OrderSavedNotification` | Notification event for saving an Order entity, post persistance |

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

--- 

***Events:***

| Type | Description |
| ---- | ----------- |
| `ValidateOrderDelete` | Validation event for deleting an Order entity |
| `OrderDeletingNotification` | Notification event for deleting an Order entity, prior to persistance |
| `OrderDeletedNotification` | Notification event for deleting an Order entity, post persistance |

##### Vendr.Core.Services.OrderService

Default implementation of the [Vendr Order Service Interface](#vendrcoreservicesiorderservice)

## Order Entities

##### Vendr.Core.Models.OrderReadOnly

Read Only Order entity

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
| `CustomerInfo` | `CustomerInfo` | The [Customer Information](#vendrcoremodelscustomerinfo) associated with this Order |
| `OrderPaymentInfo` | `PaymentInfo` | The [Payment Information](#vendrcoremodelspaymentinfo) associated with this Order |
| `OrderShippingInfo` | `ShippingInfo` | The [Shipping Information](#vendrcoremodelsshippinginfo) associated with this Order |
| `OrderTransactionInfo` | `TransactionInfo` | The [Transaction Information](#vendrcoremodelstransactioninfo) associated with this Order |
| `IReadOnlyCollection <OrderLineReadOnly>` | `OrderLines` | Collection of [Order Lines](#vendrcoremodelsorderlinereadonly) associated with this Order |
| `IReadOnlyDictionary <string, PropertyValue>` | `Properties` | Collection of [Order Properties](#) associated with this Order |
| `IReadOnlyCollection <AppliedDiscountCode>` | `DiscountCodes` | Collection of [Applied Discount Codes](#) associated with this Order |
| `IReadOnlyCollection <AppliedGiftCard>` | `GiftCards` | Collection of [Applied Gift Cards](#) associated with this Order |
| `IReadOnlyCollection <FulfilledDiscount>` | `Discounts` | Collection of [Fulfilled Discounts](#) associated with this Order |
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

##### Vendr.Core.Models.Order

Writable Order entity

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
| `string` | `productReference` | An active Unit of Work to associate with this writable entity |
| `decimal` | `qty` | The ID of the Store this Order belongs to |

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
| `string` | `productReference` | An active Unit of Work to associate with this writable entity |
| `decimal` | `qty` | The ID of the Store this Order belongs to |
| `string` | `bundleId` | The ID of the Currency of the Order |

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
| `string` | `productReference` | An active Unit of Work to associate with this writable entity |
| `decimal` | `qty` | The ID of the Store this Order belongs to |
| `IDictionary<string, string>` | `properties` | The ISO Code of the Language of the Order |

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
| `string` | `productReference` | An active Unit of Work to associate with this writable entity |
| `decimal` | `qty` | The ID of the Store this Order belongs to |
| `IDictionary<string, string>` | `properties` | The ISO Code of the Language of the Order |
| `string` | `bundleId` | The ID of the Currency of the Order |

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
| `IProductSnapshot` | `productSnapshot` | An active Unit of Work to associate with this writable entity |
| `decimal` | `qty` | The ID of the Store this Order belongs to |

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
| `IProductSnapshot` | `productSnapshot` | An active Unit of Work to associate with this writable entity |
| `decimal` | `qty` | The ID of the Store this Order belongs to |
| `string` | `bundleId` | The ID of the Currency of the Order |

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
| `IProductSnapshot` | `productSnapshot` | An active Unit of Work to associate with this writable entity |
| `decimal` | `qty` | The ID of the Store this Order belongs to |
| `IDictionary<string, string>` | `properties` | The ISO Code of the Language of the Order |

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
| `IProductSnapshot` | `productSnapshot` | An active Unit of Work to associate with this writable entity |
| `decimal` | `qty` | The ID of the Store this Order belongs to |
| `IDictionary<string, string>` | `properties` | The ISO Code of the Language of the Order |
| `string` | `bundleId` | The ID of the Currency of the Order |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `Order` | The updated writable Order |

---

***Events:***

| Type | Description |
| ---- | ----------- |
| `ValidateOrderProductAdd` | Validation event for adding a Product to an Order |
| `OrderProductAddingNotification` | Notification event for adding a Product to an Order, prior to persistance |
| `OrderProductAddedNotification` | Notification event for adding a Product to an Order, post persistance |

## Order Owned Entities

##### Vendr.Core.Models.OrderLineReadOnly

Order Line owned entity

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid?` | `CountryId` | The ID of the payment Country |
| `Guid?` | `RegionId` | The ID of the payment Region |
| `Guid?` | `PaymentMethodId` | The ID of the payment Method |
| `TaxRate` | `TaxRate` | The Tax Rate of the payment fee |
| `ReadOnlyTotalPrice` | `TotalPrice` | The total price of the payment fee |

##### Vendr.Core.Models.CustomerInfo

Order Customer Information owned entity

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `string` | `CustomerReference` | A unique reference for the Customer, by default will be Umbraco Member Key |
| `string` | `FirstName` | The first name of the customer |
| `string` | `LastName` | The last name of the customer |
| `string` | `Email` | The email address of the customer |

##### Vendr.Core.Models.OrderPaymentInfo

Order Payment Information owned entity

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid?` | `CountryId` | The ID of the payment Country |
| `Guid?` | `RegionId` | The ID of the payment Region |
| `Guid?` | `PaymentMethodId` | The ID of the payment Method |
| `TaxRate` | `TaxRate` | The Tax Rate of the payment fee |
| `ReadOnlyTotalPrice` | `TotalPrice` | The total price of the payment fee |

##### Vendr.Core.Models.OrderShippingInfo

Order Shipping Information owned entity

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid?` | `CountryId` | The ID of the shipping Country |
| `Guid?` | `RegionId` | The ID of the shipping Region |
| `Guid?` | `ShippingMethodId` | The ID of the shipping Method |
| `TaxRate` | `TaxRate` | The Tax Rate of the shipping fee |
| `ReadOnlyTotalPrice` | `TotalPrice` | The total price of the shipping fee |

##### Vendr.Core.Models.OrderTransactionInfo

Order Transaction Information owned entity

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `string` | `TransactionId` | The unique ID of the transaction, obtained from the payment gateway |
| `Amount` | `AmountAuthorized` | The total amount that was authorized via the transaction |
| `Amount` | `TransactionFee` | Any fee amount associated with the transaction |
| `PaymentStatus?` | `PaymentStatus` | The current payment status of the transaction |