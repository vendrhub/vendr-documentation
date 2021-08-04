---
title: IOrderQuerySpecificationFactory
description: API reference for IOrderQuerySpecificationFactory in Vendr, the eCommerce solution for Umbraco
---
## IOrderQuerySpecificationFactory

```csharp
public interface IOrderQuerySpecificationFactory
```

**Namespace**
* [Vendr.Core.Specifications.Order](../)

### Methods

#### ByCustomer

```csharp
public IQuerySpecification<OrderReadOnly> ByCustomer(string customerReferenceOrEmail)
```


---

#### FromStore

```csharp
public IQuerySpecification<OrderReadOnly> FromStore(Guid storeId)
```


---

#### HasCartNumber

```csharp
public IQuerySpecification<OrderReadOnly> HasCartNumber(string cartNumber, 
    StringComparisonType comparisonType = StringComparisonType.Equals)
```


---

#### HasEmailAddress

```csharp
public IQuerySpecification<OrderReadOnly> HasEmailAddress()
```


---

#### HasOrderLines

```csharp
public IQuerySpecification<OrderReadOnly> HasOrderLines()
```


---

#### HasOrderLineWithProduct (1 of 2)

```csharp
public IQuerySpecification<OrderReadOnly> HasOrderLineWithProduct(string productReferenceOrSku)
```

---

#### HasOrderLineWithProduct (2 of 2)

```csharp
public IQuerySpecification<OrderReadOnly> HasOrderLineWithProduct(string productReferenceOrSku, 
    string productVariantReferenceOrSku)
```


---

#### HasOrderLineWithProperty (1 of 2)

```csharp
public IQuerySpecification<OrderReadOnly> HasOrderLineWithProperty(string key, string value, 
    StringComparisonType comparisonType = StringComparisonType.Equals)
```

---

#### HasOrderLineWithProperty (2 of 2)

```csharp
public IQuerySpecification<OrderReadOnly> HasOrderLineWithProperty(
    KeyValuePair<string, string> property, 
    StringComparisonType comparisonType = StringComparisonType.Equals)
```


---

#### HasOrderNumber

```csharp
public IQuerySpecification<OrderReadOnly> HasOrderNumber(string orderNumber, 
    StringComparisonType comparisonType = StringComparisonType.Equals)
```


---

#### HasOrderStatus (1 of 2)

```csharp
public IQuerySpecification<OrderReadOnly> HasOrderStatus(Guid orderStatusId)
```

---

#### HasOrderStatus (2 of 2)

```csharp
public IQuerySpecification<OrderReadOnly> HasOrderStatus(IEnumerable<Guid> orderStatusIds)
```


---

#### HasPaymentMethod (1 of 2)

```csharp
public IQuerySpecification<OrderReadOnly> HasPaymentMethod(Guid paymentMethodId)
```

---

#### HasPaymentMethod (2 of 2)

```csharp
public IQuerySpecification<OrderReadOnly> HasPaymentMethod(IEnumerable<Guid> paymentMethodIds)
```


---

#### HasPaymentStatus (1 of 2)

```csharp
public IQuerySpecification<OrderReadOnly> HasPaymentStatus(PaymentStatus paymentStatus)
```

---

#### HasPaymentStatus (2 of 2)

```csharp
public IQuerySpecification<OrderReadOnly> HasPaymentStatus(
    IEnumerable<PaymentStatus> paymentStatuses)
```


---

#### HasProperty (1 of 2)

```csharp
public IQuerySpecification<OrderReadOnly> HasProperty(string key, string value, 
    StringComparisonType comparisonType = StringComparisonType.Equals)
```

---

#### HasProperty (2 of 2)

```csharp
public IQuerySpecification<OrderReadOnly> HasProperty(KeyValuePair<string, string> property, 
    StringComparisonType comparisonType = StringComparisonType.Equals)
```


---

#### HasShippingMethod (1 of 2)

```csharp
public IQuerySpecification<OrderReadOnly> HasShippingMethod(Guid paymentMethodId)
```

---

#### HasShippingMethod (2 of 2)

```csharp
public IQuerySpecification<OrderReadOnly> HasShippingMethod(IEnumerable<Guid> paymentMethodIds)
```


---

#### InCurrency (1 of 2)

```csharp
public IQuerySpecification<OrderReadOnly> InCurrency(Guid currencyId)
```

---

#### InCurrency (2 of 2)

```csharp
public IQuerySpecification<OrderReadOnly> InCurrency(IEnumerable<Guid> currencyIds)
```


---

#### IsDiscounted (1 of 2)

```csharp
public IQuerySpecification<OrderReadOnly> IsDiscounted(Guid discountId)
```

---

#### IsDiscounted (2 of 2)

```csharp
public IQuerySpecification<OrderReadOnly> IsDiscounted(IEnumerable<Guid> discountIds)
```


---

#### IsFinalized

```csharp
public IQuerySpecification<OrderReadOnly> IsFinalized()
```


---

#### LastUpdatedAfter

```csharp
public IQuerySpecification<OrderReadOnly> LastUpdatedAfter(DateTime date)
```


---

#### LastUpdatedBefore

```csharp
public IQuerySpecification<OrderReadOnly> LastUpdatedBefore(DateTime date)
```


---

#### LastUpdatedBetween

```csharp
public IQuerySpecification<OrderReadOnly> LastUpdatedBetween(DateTime fromDate, DateTime toDate)
```


---

#### PlacedAfter

```csharp
public IQuerySpecification<OrderReadOnly> PlacedAfter(DateTime date)
```


---

#### PlacedBefore

```csharp
public IQuerySpecification<OrderReadOnly> PlacedBefore(DateTime date)
```


---

#### PlacedBetween

```csharp
public IQuerySpecification<OrderReadOnly> PlacedBetween(DateTime fromDate, DateTime toDate)
```


---

#### Redeems (1 of 2)

```csharp
public IQuerySpecification<OrderReadOnly> Redeems(string discountOrGiftCardCode)
```

---

#### Redeems (2 of 2)

```csharp
public IQuerySpecification<OrderReadOnly> Redeems(IEnumerable<string> discountOrGiftCardCodes)
```


---

#### SearchableFieldsMatch

```csharp
public IQuerySpecification<OrderReadOnly> SearchableFieldsMatch(string searchTerm, 
    StringComparisonType comparisonType = StringComparisonType.Contains)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
