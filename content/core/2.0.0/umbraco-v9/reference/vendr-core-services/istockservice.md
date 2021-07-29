---
title: IStockService
description: API reference for IStockService in Vendr, the eCommerce solution for Umbraco v8+
---
## IStockService

```csharp
public interface IStockService
```

**Namespace**
* [Vendr.Core.Services](../)

### Methods

#### GetStock (1 of 2)

Gets the stock level of a given product

```csharp
public decimal? GetStock(string productReference)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to retrieve |

**Returns**

The stock level of the product

---

#### GetStock (2 of 2)

Gets the stock level of a given product

```csharp
public decimal? GetStock(string productReference, string productVariantReference)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to retrieve |
| productVariantReference | The unique reference of the variant of the product who's stock level to retrieve |

**Returns**

The stock level of the product


---

#### IncreaseStock (1 of 2)

Increases the stock level of a given product

```csharp
public void IncreaseStock(string productReference, decimal increaseBy)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to increase |
| increaseBy | The amount to increase the stock level by |

---

#### IncreaseStock (2 of 2)

Increases the stock level of a given product

```csharp
public void IncreaseStock(string productReference, string productVariantReference, 
    decimal increaseBy)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to increase |
| productVariantReference | The unique reference of variant of the product who's stock level to increase |
| increaseBy | The amount to increase the stock level by |


---

#### InvalidateStockCache

Invalidate the whole stock cache

```csharp
public void InvalidateStockCache()
```


---

#### InvalidateStockCache

Invalidates the stock cache for the given product / product variant

```csharp
public void InvalidateStockCache(string productReference, string productVariantReference)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to increase |
| productVariantReference | The unique reference of variant of the product who's stock level to increase |


---

#### ReduceStock (1 of 2)

Reduces the stock level of a given product

```csharp
public void ReduceStock(string productReference, decimal reduceBy)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to reduce |
| reduceBy | The amount to reduce the stock level by |

---

#### ReduceStock (2 of 2)

Reduces the stock level of a given product

```csharp
public void ReduceStock(string productReference, string productVariantReference, decimal reduceBy)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to reduce |
| productVariantReference | The unique reference of the variant of the product who's stock level to reduce |
| reduceBy | The amount to reduce the stock level by |


---

#### SetStock (1 of 2)

Sets the stock level of a given product

```csharp
public void SetStock(string productReference, decimal value)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to set |
| value | The value to set the stock level to |

---

#### SetStock (2 of 2)

Sets the stock level of a given product

```csharp
public void SetStock(string productReference, string productVariantReference, decimal value)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to set |
| productVariantReference | The unique reference of the variant of the product who's stock level to set |
| value | The value to set the stock level to |


---

#### TryGetStock (1 of 2)

Trys to get the stock level of a given product

```csharp
public bool TryGetStock(string productReference, out decimal? stock)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to retrieve |
| stock | The stock level of the product |

**Returns**

True if the stock level was retrieved, false if not

---

#### TryGetStock (2 of 2)

Trys to get the stock level of a given product

```csharp
public bool TryGetStock(string productReference, string productVariantReference, out decimal? stock)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to retrieve |
| productVariantReference | The unique reference of the variant of the product who's stock level to retrieve |
| stock | The stock level of the product |

**Returns**

True if the stock level was retrieved, false if not


---

#### TryIncreaseStock (1 of 2)

Trys to increase the stock level of a given product

```csharp
public bool TryIncreaseStock(string productReference, decimal increaseBy)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to retrieve |
| increaseBy | The amount to increase the stock level by |

**Returns**

True if the stock level was increased, false if not

---

#### TryIncreaseStock (2 of 2)

Trys to increase the stock level of a given product

```csharp
public bool TryIncreaseStock(string productReference, string productVariantReference, 
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

#### TryReduceStock (1 of 2)

Trys to reduce the stock level of a given product

```csharp
public bool TryReduceStock(string productReference, decimal reduceBy)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to retrieve |
| reduceBy | The amount to reduce the stock level by |

**Returns**

True if the stock level was reduced, false if not

---

#### TryReduceStock (2 of 2)

Trys to reduce the stock level of a given product

```csharp
public bool TryReduceStock(string productReference, string productVariantReference, 
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

#### TrySetStock (1 of 2)

Trys to set the stock level of a given product

```csharp
public bool TrySetStock(string productReference, decimal value)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| productReference | The unique reference of the product who's stock level to retrieve |
| value | The value to set the stock level to |

**Returns**

True if the stock level was set, false if not

---

#### TrySetStock (2 of 2)

Trys to set the stock level of a given product

```csharp
public bool TrySetStock(string productReference, string productVariantReference, decimal value)
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
