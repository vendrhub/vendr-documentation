---
title: EntityMapperAdapter
description: API reference for EntityMapperAdapter in Vendr, the eCommerce solution for Umbraco
---
## EntityMapperAdapter

```csharp
public class EntityMapperAdapter
```

**Namespace**
* [Vendr.Umbraco.Web.Models.Mappers](../)

### Constructors

#### EntityMapperAdapter

```csharp
public EntityMapperAdapter(Func<EntityBase, EntityBasicDto> entityMapper)
```


### Methods

#### EntitiesToBasicDtos

```csharp
public IEnumerable<EntityBasicDto> EntitiesToBasicDtos(IEnumerable<EntityBase> entities)
```


---

#### EntityToBasicDto

```csharp
public EntityBasicDto EntityToBasicDto(EntityBase entity)
```


### Operators

#### EntityMapperAdapter Implicit

```csharp
public static implicit operator EntityMapperAdapter(Func<EntityBase, EntityBasicDto> fnc)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.Web.dll -->
