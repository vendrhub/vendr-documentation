---
title: ViewRenderer
description: API reference for ViewRenderer in Vendr, the eCommerce solution for Umbraco v8+
---
## ViewRenderer

Class that renders MVC views to a string using the standard MVC View Engine to render the view. Requires that ASP.NET HttpContext is present to work, but works outside of the context of MVC

```csharp
public class ViewRenderer
```

**Namespace**
* [Vendr.Core.Web.Mvc](../)

### Constructors

#### ViewRenderer

Initializes the ViewRenderer with a Context.

```csharp
public ViewRenderer(ControllerContext controllerContext = null)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| controllerContext | If you are running within the context of an ASP.NET MVC request pass in the controller's context. Only leave out the context if no context is otherwise available. |


### Methods

#### RenderPartialView

Renders a partial MVC view to given Writer. Use this method to render a partial view that doesn't merge with _Layout and doesn't fire _ViewStart.

```csharp
public void RenderPartialView(string viewPath, object model, TextWriter writer)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| viewPath | The path to the view to render. Either in same controller, shared by name or as fully qualified ~/ path including extension |
| model | The model to pass to the viewRenderer |
| writer | Writer to render the view to |


---

#### RenderPartialViewToString

Renders a partial MVC view to string. Use this method to render a partial view that doesn't merge with _Layout and doesn't fire _ViewStart.

```csharp
public string RenderPartialViewToString(string viewPath, object model = null)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| viewPath | The path to the view to render. Either in same controller, shared by name or as fully qualified ~/ path including extension |
| model | The model to pass to the viewRenderer |

**Returns**

String of the rendered view or null on error


---

#### RenderView

Renders a full MVC view to a writer. Will render with the full MVC View engine including running _ViewStart and merging into _Layout

```csharp
public void RenderView(string viewPath, object model, TextWriter writer)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| viewPath | The path to the view to render. Either in same controller, shared by name or as fully qualified ~/ path including extension |
| model | The model to render the view with |

**Returns**

String of the rendered view or null on error


---

#### RenderViewToString

Renders a full MVC view to a string. Will render with the full MVC View engine including running _ViewStart and merging into _Layout

```csharp
public string RenderViewToString(string viewPath, object model = null)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| viewPath | The path to the view to render. Either in same controller, shared by name or as fully qualified ~/ path including extension |
| model | The model to render the view with |

**Returns**

String of the rendered view or null on error


---

#### CreateController&lt;T&gt;

Creates an instance of an MVC controller from scratch when no existing ControllerContext is present

```csharp
public static T CreateController<T>(RouteData routeData = null, params object[] parameters)
    where T : Controller, new()
```

**Parameters**

| Parameter | Description |
| --- | --- |
| T | Type of the controller to create |

**Returns**

Controller for T

**Exceptions**

| Exception | Condition |
| --- | --- |
| InvalidOperationException | thrown if HttpContext not available |


---

#### RenderPartialView (1 of 2)

Renders a partial MVC view to string. Use this method to render a partial view that doesn't merge with _Layout and doesn't fire _ViewStart.

```csharp
public static string RenderPartialView(string viewPath, object model = null, 
    ControllerContext controllerContext = null)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| viewPath | The path to the view to render. Either in same controller, shared by name or as fully qualified ~/ path including extension |
| model | The model to pass to the viewRenderer |
| controllerContext | Active controller context |

**Returns**

String of the rendered view or null on error

---

#### RenderPartialView (2 of 2)

Renders a partial MVC view to string. Use this method to render a partial view that doesn't merge with _Layout and doesn't fire _ViewStart.

```csharp
public static void RenderPartialView(string viewPath, TextWriter writer, object model = null, 
    ControllerContext controllerContext = null)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| viewPath | The path to the view to render. Either in same controller, shared by name or as fully qualified ~/ path including extension |
| model | The model to pass to the viewRenderer |
| controllerContext | Active controller context |
| writer | Text writer to render view to |
| errorMessage | optional output parameter to receive an error message on failure |


---

#### RenderView (1 of 4)

Renders a full MVC view to a writer. Will render with the full MVC View engine including running _ViewStart and merging into _Layout

```csharp
public static string RenderView(string viewPath, object model = null, 
    ControllerContext controllerContext = null)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| viewPath | The path to the view to render. Either in same controller, shared by name or as fully qualified ~/ path including extension |
| model | The model to pass to the viewRenderer |
| controllerContext | Active Controller context |

**Returns**

String of the rendered view or null on error

---

#### RenderView (2 of 4)

Renders a full MVC view to a writer. Will render with the full MVC View engine including running _ViewStart and merging into _Layout

```csharp
public static void RenderView(string viewPath, TextWriter writer, object model, 
    ControllerContext controllerContext)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| viewPath | The path to the view to render. Either in same controller, shared by name or as fully qualified ~/ path including extension |
| model | The model to pass to the viewRenderer |
| writer | Writer to render the view to |
| controllerContext | Active Controller context |

**Returns**

String of the rendered view or null on error

---

#### RenderView (3 of 4)

Renders a full MVC view to a writer. Will render with the full MVC View engine including running _ViewStart and merging into _Layout

```csharp
public static string RenderView(string viewPath, object model, ControllerContext controllerContext, 
    out string errorMessage)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| viewPath | The path to the view to render. Either in same controller, shared by name or as fully qualified ~/ path including extension |
| model | The model to pass to the viewRenderer |
| controllerContext | Active Controller context |
| errorMessage | optional out parameter that captures an error message instead of throwing |

**Returns**

String of the rendered view or null on error

---

#### RenderView (4 of 4)

Renders a full MVC view to a writer. Will render with the full MVC View engine including running _ViewStart and merging into _Layout

```csharp
public static void RenderView(string viewPath, object model, TextWriter writer, 
    ControllerContext controllerContext, out string errorMessage)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| viewPath | The path to the view to render. Either in same controller, shared by name or as fully qualified ~/ path including extension |
| model | The model to pass to the viewRenderer |
| controllerContext | Active Controller context |
| writer | Writer to render the view to |
| errorMessage | optional out parameter that captures an error message instead of throwing |

**Returns**

String of the rendered view or null on error


**Remarks**

https://github.com/RickStrahl/WestwindToolkit/blob/master/Westwind.Web.Mvc/Utils/ViewRenderer.cs

<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.Web.dll -->
