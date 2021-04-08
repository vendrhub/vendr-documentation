---
title: ITemplateEngine
description: API reference for ITemplateEngine in Vendr, the eCommerce solution for Umbraco v8+
---
## ITemplateEngine

```csharp
public interface ITemplateEngine
```

**Namespace**
* [Vendr.Core.Templating](../)

### Methods

#### GetTemplateViews

```csharp
public IEnumerable<string> GetTemplateViews()
```


---

#### RenderTemplateView

```csharp
public string RenderTemplateView(string templateViewPath, object model, string languageIsoCode)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->