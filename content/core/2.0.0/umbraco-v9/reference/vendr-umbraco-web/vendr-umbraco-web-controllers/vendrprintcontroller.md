---
title: VendrPrintController
description: API reference for VendrPrintController in Vendr, the eCommerce solution for Umbraco
---
## VendrPrintController

```csharp
public class VendrPrintController : UmbracoController
```

**Namespace**
* [Vendr.Umbraco.Web.Controllers](../)

### Constructors

#### VendrPrintController

```csharp
public VendrPrintController(VendrContext vendr, ITemplateEngine templateEngine)
```


### Methods

#### Preview

```csharp
public ActionResult Preview(Guid templateId, Guid entityId, string entityType, 
    string languageIsoCode = null)
```


---

#### Print

```csharp
public ActionResult Print(PrintPostModel model)
```


### Classes

#### VendrPrintController.PrintPostModel

```csharp
public class PrintPostModel
```

##### Constructors

#### VendrPrintController.PrintPostModel

The default constructor.

```csharp
public PrintPostModel()
```


##### Properties

#### EntityIds

```csharp
public Guid[] EntityIds { get; set; }
```


---

#### EntityType

```csharp
public string EntityType { get; set; }
```


---

#### LanguageIsoCode

```csharp
public string LanguageIsoCode { get; set; }
```


---

#### TemplateIds

```csharp
public Guid[] TemplateIds { get; set; }
```



<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.Web.dll -->
