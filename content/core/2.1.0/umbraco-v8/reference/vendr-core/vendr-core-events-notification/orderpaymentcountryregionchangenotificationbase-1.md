---
title: OrderPaymentCountryRegionChangeNotificationBase<TEntity>
description: API reference for OrderPaymentCountryRegionChangeNotificationBase<TEntity> in Vendr, the eCommerce solution for Umbraco
---
## OrderPaymentCountryRegionChangeNotificationBase&lt;TEntity&gt;

```csharp
public abstract class OrderPaymentCountryRegionChangeNotificationBase<TEntity> : 
    OrderNotificationEventBase<TEntity>
    where TEntity : OrderReadOnly
```

**Inheritance**

* class [OrderNotificationEventBase&lt;TOrder&gt;](../ordernotificationeventbase-1/)

**Namespace**
* [Vendr.Core.Events.Notification](../)

### Constructors

#### OrderPaymentCountryRegionChangeNotificationBase&lt;TEntity&gt;

```csharp
public OrderPaymentCountryRegionChangeNotificationBase(TEntity order, 
    ChangingValue<Guid?> countryId, ChangingValue<Guid?> regionId)
```


### Properties

#### CountryId

```csharp
public ChangingValue<Guid?> CountryId { get; }
```


---

#### RegionId

```csharp
public ChangingValue<Guid?> RegionId { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
