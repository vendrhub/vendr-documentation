---
title: OrderPropertiesChangedNotification
description: API reference for OrderPropertiesChangedNotification in Vendr, the eCommerce solution for Umbraco
---
## OrderPropertiesChangedNotification

```csharp
public class OrderPropertiesChangedNotification : 
    OrderPropertiesChangeNotificationBase<OrderReadOnly>
```

**Inheritance**

* class [OrderPropertiesChangeNotificationBase&lt;TEntity&gt;](../orderpropertieschangenotificationbase-1/)

**Namespace**
* [Vendr.Core.Events.Notification](../)

### Constructors

#### OrderPropertiesChangedNotification

```csharp
public OrderPropertiesChangedNotification(OrderReadOnly order, 
    DictionaryDiff<string, PropertyValue> properties)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
