---
title: OrderLineChangeNotification<TEntity>
description: API reference for OrderLineChangeNotification<TEntity> in Vendr, the eCommerce solution for Umbraco
---
## OrderLineChangeNotification&lt;TEntity&gt;

```csharp
public class OrderLineChangeNotification<TEntity> : OrderNotificationEventBase<TEntity>, 
    IHasEventKey
    where TEntity : OrderReadOnly
```

**Inheritance**

* class [OrderNotificationEventBase&lt;TOrder&gt;](../ordernotificationeventbase-1/)
* interface [IHasEventKey](../../../vendr-common/vendr-common-events/ihaseventkey/)

**Namespace**
* [Vendr.Core.Events.Notification](../)

### Constructors

#### OrderLineChangeNotification&lt;TEntity&gt;

```csharp
public OrderLineChangeNotification(TEntity order, OrderLineReadOnly orderLine, 
    ChangingValue<decimal> quantity, DictionaryDiff<string, PropertyValue> properties)
```


### Properties

#### Key

```csharp
public string Key { get; }
```


---

#### OrderLine

```csharp
public OrderLineReadOnly OrderLine { get; }
```


---

#### Properties

```csharp
public DictionaryDiff<string, PropertyValue> Properties { get; }
```


---

#### Quantity

```csharp
public ChangingValue<decimal> Quantity { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
