---
title: IProductService
description: API reference for IProductService in Vendr, the eCommerce solution for Umbraco
---
## IProductService

Defines the Vendr Product service

```csharp
public interface IProductService
```

**Namespace**
* [Vendr.Core.Services](../)

### Methods

#### GetProduct (1 of 2)

Get a [`IProductSnapshot`](../../vendr-core-models/iproductsnapshot/) of a given product

```csharp
public IProductSnapshot GetProduct(string productReference, string languageIsoCode)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product to snapshot |
| languageIsoCode | The ISO Code of the language of the snapshot to create |

**Returns**

An [`IProductSnapshot`](../../vendr-core-models/iproductsnapshot/) of the given product

---

#### GetProduct (2 of 2)

Get a [`IProductSnapshot`](../../vendr-core-models/iproductsnapshot/) of a given product

```csharp
public IProductSnapshot GetProduct(string productReference, string productVariantReference, 
    string languageIsoCode)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product to snapshot |
| productVariantReference | The unique reference of the variant of the product to snapshot |
| languageIsoCode | The ISO Code of the language of the snapshot to create |

**Returns**

An [`IProductSnapshot`](../../vendr-core-models/iproductsnapshot/) of the given product


---

#### GetProductStock (1 of 2)

Gets the stock level of a given product

```csharp
public decimal? GetProductStock(string productReference)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to retrieve |

**Returns**

The stock level of the product

---

#### GetProductStock (2 of 2)

Gets the stock level of a given product

```csharp
public decimal? GetProductStock(string productReference, string productVariantReference)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to retrieve |
| productVariantReference | The unique reference of the variant of the product who's stock level to retrieve |

**Returns**

The stock level of the product


---

#### IncreaseProductStock (1 of 2)

Increases the stock level of a given product

```csharp
public void IncreaseProductStock(string productReference, decimal increaseBy)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to increase |
| increaseBy | The amount to increase the stock level by |

---

#### IncreaseProductStock (2 of 2)

Increases the stock level of a given product

```csharp
public void IncreaseProductStock(string productReference, string productVariantReference, 
    decimal increaseBy)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to increase |
| productVariantReference | The unique reference of variant of the product who's stock level to increase |
| increaseBy | The amount to increase the stock level by |


---

#### ReduceProductStock (1 of 2)

Reduces the stock level of a given product

```csharp
public void ReduceProductStock(string productReference, decimal reduceBy)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to reduce |
| reduceBy | The amount to reduce the stock level by |

---

#### ReduceProductStock (2 of 2)

Reduces the stock level of a given product

```csharp
public void ReduceProductStock(string productReference, string productVariantReference, 
    decimal reduceBy)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to reduce |
| productVariantReference | The unique reference of the variant of the product who's stock level to reduce |
| reduceBy | The amount to reduce the stock level by |


---

#### SetProductStock (1 of 2)

Sets the stock level of a given product

```csharp
public void SetProductStock(string productReference, decimal value)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to set |
| value | The value to set the stock level to |

---

#### SetProductStock (2 of 2)

Sets the stock level of a given product

```csharp
public void SetProductStock(string productReference, string productVariantReference, decimal value)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to set |
| productVariantReference | The unique reference of the variant of the product who's stock level to set |
| value | The value to set the stock level to |


---

#### TryGetProductStock (1 of 2)

Try to get the stock level of a given product

```csharp
public bool TryGetProductStock(string productReference, out decimal? stock)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to retrieve |
| stock | The output stock level of the product |

**Returns**

True if the stock level was retrieved, false if not

---

#### TryGetProductStock (2 of 2)

Try to get the stock level of a given product

```csharp
public bool TryGetProductStock(string productReference, string productVariantReference, 
    out decimal? stock)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to retrieve |
| productVariantReference | The unique reference of the variant of the product who's stock level to retrieve |
| stock | The output stock level of the product |

**Returns**

True if the stock level was retrieved, false if not


---

#### TryIncreaseProductStock (1 of 2)

Try to increase the stock level of a given product

```csharp
public bool TryIncreaseProductStock(string productReference, decimal increaseBy)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to retrieve |
| increaseBy | The amount to increase the stock level by |

**Returns**

True if the stock level was increased, false if not

---

#### TryIncreaseProductStock (2 of 2)

Try to increase the stock level of a given product

```csharp
public bool TryIncreaseProductStock(string productReference, string productVariantReference, 
    decimal increaseBy)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to retrieve |
| productVariantReference | The unique reference of variant of the product who's stock level to increase |
| increaseBy | The amount to increase the stock level by |

**Returns**

True if the stock level was increased, false if not


---

#### TryReduceProductStock (1 of 2)

Try to reduce the stock level of a given product

```csharp
public bool TryReduceProductStock(string productReference, decimal reduceBy)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to retrieve |
| reduceBy | The amount to reduce the stock level by |

**Returns**

True if the stock level was reduced, false if not

---

#### TryReduceProductStock (2 of 2)

Try to reduce the stock level of a given product

```csharp
public bool TryReduceProductStock(string productReference, string productVariantReference, 
    decimal reduceBy)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to retrieve |
| productVariantReference | The unique reference of the variant of the product who's stock level to reduce |
| reduceBy | The amount to reduce the stock level by |

**Returns**

True if the stock level was reduced, false if not


---

#### TrySetProductStock (1 of 2)

Try to set the stock level of a given product

```csharp
public bool TrySetProductStock(string productReference, decimal value)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to retrieve |
| value | The value to set the stock level to |

**Returns**

True if the stock level was set, false if not

---

#### TrySetProductStock (2 of 2)

Try to set the stock level of a given product

```csharp
public bool TrySetProductStock(string productReference, string productVariantReference, 
    decimal value)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to retrieve |
| productVariantReference | The unique reference of the variant of the product who's stock level to set |
| value | The value to set the stock level to |

**Returns**

True if the stock level was set, false if not


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
