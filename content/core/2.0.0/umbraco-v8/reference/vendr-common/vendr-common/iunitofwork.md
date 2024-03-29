---
title: IUnitOfWork
description: API reference for IUnitOfWork in Vendr, the eCommerce solution for Umbraco
---
## IUnitOfWork

Defines a Unit of Work

```csharp
public interface IUnitOfWork : IDisposable
```

**Namespace**
* [Vendr.Common](../)

### Methods

#### Complete

Marks the completion of a successful Unit of Work

```csharp
public void Complete()
```


---

#### ScheduleNotification

Schedules a Notification Event to be raised once the Unit of Work is complete

```csharp
public void ScheduleNotification(INotificationEvent notificationEvent)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| notificationEvent | The Notification Event to raise |


---

#### ScheduleNotifications (1 of 2)

Schedules a series of Notification Events to be raised once the Unit of Work is complete

```csharp
public void ScheduleNotifications(params INotificationEvent[] notificationEvents)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| notificationEvents | The list of Notification Events to raise |

---

#### ScheduleNotifications (2 of 2)

Schedules a series of Notification Events to be raised once the Unit of Work is complete

```csharp
public void ScheduleNotifications(IEnumerable<INotificationEvent> notificationEvents)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| notificationEvents | The list of Notification Events to raise |


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Common.dll -->
