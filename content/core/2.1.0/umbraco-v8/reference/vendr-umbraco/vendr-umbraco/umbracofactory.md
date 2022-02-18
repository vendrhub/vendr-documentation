---
title: UmbracoFactory
description: API reference for UmbracoFactory in Vendr, the eCommerce solution for Umbraco
---
## UmbracoFactory

```csharp
public class UmbracoFactory : IFactory
```

**Inheritance**

* interface [IFactory](../../../vendr-common/vendr-common/ifactory/)

**Namespace**
* [Vendr.Umbraco](../)

### Constructors

#### UmbracoFactory

```csharp
public UmbracoFactory(IFactory factory)
```


### Methods

#### GetAllInstances

```csharp
public IEnumerable<object> GetAllInstances(Type type)
```


---

#### GetAllInstances&lt;T&gt;

```csharp
public IEnumerable<T> GetAllInstances<T>()
```


---

#### GetInstance

```csharp
public object GetInstance(Type type)
```


---

#### GetInstance&lt;T&gt;

```csharp
public T GetInstance<T>()
```


---

#### TryGetInstance

```csharp
public object TryGetInstance(Type type)
```


---

#### TryGetInstance&lt;T&gt;

```csharp
public T TryGetInstance<T>()
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.dll -->