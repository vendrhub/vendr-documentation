---
title: IValidationEvent
description: API reference for IValidationEvent in Vendr, the eCommerce solution for Umbraco
---
## IValidationEvent

```csharp
public interface IValidationEvent : IEvent
```

**Inheritance**

* interface [IEvent](../ievent/)

**Namespace**
* [Vendr.Common.Events](../)

### Properties

#### Errors

```csharp
public IEnumerable<ValidationError> Errors { get; }
```


---

#### HasValidationErrors

```csharp
public bool HasValidationErrors { get; }
```


### Methods

#### Fail

```csharp
public void Fail(string msg)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Common.dll -->
