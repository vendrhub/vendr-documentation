---
title: ConfigConnectionStringResolverBase
description: API reference for ConfigConnectionStringResolverBase in Vendr, the eCommerce solution for Umbraco
---
## ConfigConnectionStringResolverBase

```csharp
public abstract class ConfigConnectionStringResolverBase : IConnectionStringResolver
```

**Inheritance**

* interface [IConnectionStringResolver](../iconnectionstringresolver/)

**Namespace**
* [Vendr.Core.Data](../)

### Constructors

#### ConfigConnectionStringResolverBase

```csharp
public ConfigConnectionStringResolverBase(IConfiguration configuration)
```


### Methods

#### Resolve

```csharp
public abstract ConnectionStringConfig Resolve()
```


---

#### ResolveFromConfig

```csharp
public ConnectionStringConfig ResolveFromConfig(string connectionStringName)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
