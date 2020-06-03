---
title: OrderExtensions
description: API reference for OrderExtensions in Vendr, the eCommerce solution for Umbraco v8+
---
## OrderExtensions

Extension methods for a Vendr Order

```csharp
public static class OrderExtensions
```

**Namespace**
* [Vendr.Core](../)

### Methods

#### AddProduct (1 of 8)

Adds a product to the order

```csharp
public static Order AddProduct(this Order order, string productReference, decimal qty)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| order | The [`Order`](../../vendr-core-models/order/) instance |
| productReference | The unique reference of the product |
| qty | The quantity of the product to add to the order |

**Returns**

The updated [`Order`](../../vendr-core-models/order/) entity

---

#### AddProduct (2 of 8)

Adds a product to the order

```csharp
public static Order AddProduct(this Order order, string productReference, decimal qty, 
    string bundleId)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| order | The [`Order`](../../vendr-core-models/order/) instance |
| productReference | The unique reference of the product |
| qty | The quantity of the product to add to the order |
| bundleId | A bundle ID to assign to the product order line to identify it as a bundle |

**Returns**

The updated [`Order`](../../vendr-core-models/order/) entity

---

#### AddProduct (3 of 8)

Adds a product to the order

```csharp
public static Order AddProduct(this Order order, string productReference, decimal qty, 
    IDictionary<string, string> properties)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| order | The [`Order`](../../vendr-core-models/order/) instance |
| productReference | The unique reference of the product |
| qty | The quantity of the product to add to the order |
| properties | A collection of properties to assign to the product order line |

**Returns**

The updated [`Order`](../../vendr-core-models/order/) entity

---

#### AddProduct (4 of 8)

Adds a product to the order

```csharp
public static Order AddProduct(this Order order, string productReference, decimal qty, 
    IDictionary<string, string> properties, string bundleId)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| order | The [`Order`](../../vendr-core-models/order/) instance |
| productReference | The unique reference of the product |
| qty | The quantity of the product to add to the order |
| properties | A collection of properties to assign to the product order line |
| bundleId | A bundle ID to assign to the product order line to identify it as a bundle |

**Returns**

The updated [`Order`](../../vendr-core-models/order/) entity

---

#### AddProduct (5 of 8)

Adds a product to the order

```csharp
public static Order AddProduct(this Order order, IProductSnapshot productSnapshot, decimal qty)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| order | The [`Order`](../../vendr-core-models/order/) instance |
| productSnapshot | A snapshot of the product to add |
| qty | The quantity of the product to add to the order |

**Returns**

The updated [`Order`](../../vendr-core-models/order/) entity

---

#### AddProduct (6 of 8)

Adds a product to the order

```csharp
public static Order AddProduct(this Order order, IProductSnapshot productSnapshot, decimal qty, 
    string bundleId)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| order | The [`Order`](../../vendr-core-models/order/) instance |
| productSnapshot | A snapshot of the product to add |
| qty | The quantity of the product to add to the order |
| bundleId | A bundle ID to assign to the product order line to identify it as a bundle |

**Returns**

The updated [`Order`](../../vendr-core-models/order/) entity

---

#### AddProduct (7 of 8)

Adds a product to the order

```csharp
public static Order AddProduct(this Order order, IProductSnapshot productSnapshot, decimal qty, 
    IDictionary<string, string> properties)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| order | The [`Order`](../../vendr-core-models/order/) instance |
| productSnapshot | A snapshot of the product to add |
| qty | The quantity of the product to add to the order |
| properties | A collection of properties to assign to the product order line |

**Returns**

The updated [`Order`](../../vendr-core-models/order/) entity

---

#### AddProduct (8 of 8)

Adds a product to the order

```csharp
public static Order AddProduct(this Order order, IProductSnapshot productSnapshot, decimal qty, 
    IDictionary<string, string> properties, string bundleId)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| order | The [`Order`](../../vendr-core-models/order/) instance |
| productSnapshot | A snapshot of the product to add |
| qty | The quantity of the product to add to the order |
| properties | A collection of properties to assign to the product order line |
| bundleId | A bundle ID to assign to the product order line to identify it as a bundle |

**Returns**

The updated [`Order`](../../vendr-core-models/order/) entity


---

#### AddProductToBundle (1 of 8)

Adds a product to a bundle in the order

```csharp
public static Order AddProductToBundle(this Order order, string parentBundleId, 
    string productReference, decimal qty)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| order | The [`Order`](../../vendr-core-models/order/) instance |
| parentBundleId | The bundle ID of an existing bundle order line to assign the product order line to as a bundle item |
| productReference | The unique reference of the product |
| qty | The quantity of the product to add to the order |

**Returns**

The updated [`Order`](../../vendr-core-models/order/) entity

---

#### AddProductToBundle (2 of 8)

Adds a product to a bundle in the order

```csharp
public static Order AddProductToBundle(this Order order, string parentBundleId, 
    string productReference, decimal qty, string bundleId)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| order | The [`Order`](../../vendr-core-models/order/) instance |
| parentBundleId | The bundle ID of an existing bundle order line to assign the product order line to as a bundle item |
| productReference | The unique reference of the product |
| qty | The quantity of the product to add to the order |
| bundleId | A bundle ID to assign to the product order line to identify it as a bundle |

**Returns**

The updated [`Order`](../../vendr-core-models/order/) entity

---

#### AddProductToBundle (3 of 8)

Adds a product to a bundle in the order

```csharp
public static Order AddProductToBundle(this Order order, string parentBundleId, 
    string productReference, decimal qty, IDictionary<string, string> properties)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| order | The [`Order`](../../vendr-core-models/order/) instance |
| parentBundleId | The bundle ID of an existing bundle order line to assign the product order line to as a bundle item |
| productReference | The unique reference of the product |
| qty | The quantity of the product to add to the order |
| properties | A collection of properties to assign to the product order line |

**Returns**

The updated [`Order`](../../vendr-core-models/order/) entity

---

#### AddProductToBundle (4 of 8)

Adds a product to a bundle in the order

```csharp
public static Order AddProductToBundle(this Order order, string parentBundleId, 
    string productReference, decimal qty, IDictionary<string, string> properties, string bundleId)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| order | The [`Order`](../../vendr-core-models/order/) instance |
| parentBundleId | The bundle ID of an existing bundle order line to assign the product order line to as a bundle item |
| productReference | The unique reference of the product |
| qty | The quantity of the product to add to the order |
| properties | A collection of properties to assign to the product order line |
| bundleId | A bundle ID to assign to the product order line to identify it as a bundle |

**Returns**

The updated [`Order`](../../vendr-core-models/order/) entity

---

#### AddProductToBundle (5 of 8)

Adds a product to a bundle in the order

```csharp
public static Order AddProductToBundle(this Order order, string parentBundleId, 
    IProductSnapshot productSnapshot, decimal qty)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| order | The [`Order`](../../vendr-core-models/order/) instance |
| parentBundleId | The bundle ID of an existing bundle order line to assign the product order line to as a bundle item |
| productSnapshot | A snapshot of the product to add |
| qty | The quantity of the product to add to the order |

**Returns**

The updated [`Order`](../../vendr-core-models/order/) entity

---

#### AddProductToBundle (6 of 8)

Adds a product to a bundle in the order

```csharp
public static Order AddProductToBundle(this Order order, string parentBundleId, 
    IProductSnapshot productSnapshot, decimal qty, string bundleId)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| order | The [`Order`](../../vendr-core-models/order/) instance |
| parentBundleId | The bundle ID of an existing bundle order line to assign the product order line to as a bundle item |
| productSnapshot | A snapshot of the product to add |
| qty | The quantity of the product to add to the order |
| bundleId | A bundle ID to assign to the product order line to identify it as a bundle |

**Returns**

The updated [`Order`](../../vendr-core-models/order/) entity

---

#### AddProductToBundle (7 of 8)

Adds a product to a bundle in the order

```csharp
public static Order AddProductToBundle(this Order order, string parentBundleId, 
    IProductSnapshot productSnapshot, decimal qty, IDictionary<string, string> properties)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| order | The [`Order`](../../vendr-core-models/order/) instance |
| parentBundleId | The bundle ID of an existing bundle order line to assign the product order line to as a bundle item |
| productSnapshot | A snapshot of the product to add |
| qty | The quantity of the product to add to the order |
| properties | A collection of properties to assign to the product order line |

**Returns**

The updated [`Order`](../../vendr-core-models/order/) entity

---

#### AddProductToBundle (8 of 8)

Adds a product to a bundle in the order

```csharp
public static Order AddProductToBundle(this Order order, string parentBundleId, 
    IProductSnapshot productSnapshot, decimal qty, IDictionary<string, string> properties, 
    string bundleId)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| order | The [`Order`](../../vendr-core-models/order/) instance |
| parentBundleId | The bundle ID of an existing bundle order line to assign the product order line to as a bundle item |
| productSnapshot | A snapshot of the product to add |
| qty | The quantity of the product to add to the order |
| properties | A collection of properties to assign to the product order line |
| bundleId | A bundle ID to assign to the product order line to identify it as a bundle |

**Returns**

The updated [`Order`](../../vendr-core-models/order/) entity


---

#### FinalizeOrUpdateTransaction (1 of 2)

Finalizes or updates the transaction info of the order

```csharp
public static Order FinalizeOrUpdateTransaction(this Order order, decimal amountAuthorized, 
    string transactionId, PaymentStatus paymentStatus)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| order | The [`Order`](../../vendr-core-models/order/) instance |
| amountAuthorized | The amount authorized by the payment gateway |
| transactionId | The ID of the transaction from the payment gateway |
| paymentStatus | The status of the payment |

**Returns**

The updated [`Order`](../../vendr-core-models/order/) entity

---

#### FinalizeOrUpdateTransaction (2 of 2)

Finalizes or updates the transaction info of the order

```csharp
public static Order FinalizeOrUpdateTransaction(this Order order, decimal amountAuthorized, 
    decimal transactionFee, string transactionId, PaymentStatus paymentStatus)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| order | The [`Order`](../../vendr-core-models/order/) instance |
| amountAuthorized | The amount authorized by the payment gateway |
| transactionFee | The transaction fee charged by the payment gateway |
| transactionId | The ID of the transaction from the payment gateway |
| paymentStatus | The status of the payment |

**Returns**

The updated [`Order`](../../vendr-core-models/order/) entity


---

#### Recalculate (1 of 2)

Recalculates the order

```csharp
public static Order Recalculate(this Order order)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| order | The [`Order`](../../vendr-core-models/order/) instance |

**Returns**

The updated [`Order`](../../vendr-core-models/order/) entity

---

#### Recalculate (2 of 2)

Recalculates the order

```csharp
public static Order Recalculate(this Order order, bool force)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| order | The [`Order`](../../vendr-core-models/order/) instance |
| force | A boolean flag indicating whether to force recalculation whether the order needs recalculating or not |

**Returns**

The updated [`Order`](../../vendr-core-models/order/) entity


---

#### Redeem

Redeems a [`Discount`](../../vendr-core-models/discount/) or [`GiftCard`](../../vendr-core-models/giftcard/) against the order

```csharp
public static Order Redeem(this Order order, string discountOrGiftCardCode)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| order | The [`Order`](../../vendr-core-models/order/) instance |
| discountOrGiftCardCode | The [`Discount`](../../vendr-core-models/discount/) or [`GiftCard`](../../vendr-core-models/giftcard/) code |

**Returns**

The updated [`Order`](../../vendr-core-models/order/) entity


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
