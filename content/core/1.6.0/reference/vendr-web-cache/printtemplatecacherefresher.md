---
title: PrintTemplateCacheRefresher
description: API reference for PrintTemplateCacheRefresher in Vendr, the eCommerce solution for Umbraco v8+
---
## PrintTemplateCacheRefresher

```csharp
public class PrintTemplateCacheRefresher : 
    VendrEntityStateCacheRefresherBase<PrintTemplateCacheRefresher, IPrintTemplateService, PrintTemplateReadOnly>
```

**Inheritance**

* class [VendrEntityStateCacheRefresherBase&lt;TInstanceType,TService,TEntity&gt;](../vendrentitystatecacherefresherbase-3/)

**Namespace**
* [Vendr.Web.Cache](../)

### Constructors

#### PrintTemplateCacheRefresher

```csharp
public PrintTemplateCacheRefresher(AppCaches appCaches, IPrintTemplateService entityService, 
    ILogger logger)
```


### Properties

#### CacheKey

```csharp
public override string CacheKey { get; }
```


---

#### Name

```csharp
public override string Name { get; }
```


---

#### RefresherUniqueId

```csharp
public override Guid RefresherUniqueId { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Web.dll -->