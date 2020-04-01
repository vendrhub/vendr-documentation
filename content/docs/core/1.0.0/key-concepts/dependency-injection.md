---
title: Dependency Injection
description: Minimising dependencies via dependency injection with Vendr, the eCommerce solution for Umbraco v8+
---

Dependency Injection can be quite an intimidating subject, however at it's heart, the main idea is to reduce the number of hard coded dependencies within a codebase by instead providing a means to define those dependencies independently (an IoC container) and have them be "injected" into your codebase dynamically. These dependencies are often exposed as interfaces, rather that concrete types, thus enabling them to be swapped out or replaced with minimal effort.

The ability to "swap out" dependencies is a very powerful concept and is used in Vendr in a number of places to allow developers to provide alternative implementations of specific features, such as the ability to swap out the default Product Calculator to change how product prices are calculated, or to swap out the default Order Number Generator should you wish to provide an alternative order numbering strategy.

Vendr makes heavy used of the dependency injection mechanism in Umbraco v8 to manage many of it's features, so it is important to understand at the very least how to work with Umbraco's registration process.

What follows are examples of common tasks you'll need to be able to perform with Umbraco's dependency injection interface in order to work effectively with Vendr, however for more detailed documentation of all of Umbraco's dependency injection features, it is highly recommended that you read the [official Umbraco documentation on IoC and Dependency Injection](https://our.umbraco.com/documentation/reference/using-ioc/) on the Umbraco developer portal.

## Registering Dependencies

Registering dependencies is an important ability to understand as we will need to be able to perform this task in order to register Vendr event handlers, or in order to extend system Pipelines.

To register a dependency you need to do so via a [Composer](https://our.umbraco.com/documentation/implementation/composing/). The recommended template for a Vendr based composer would be as follows, as this provides all the required using statements to work with Vendr's dependencies and ensures your composer is composed after Vendr's own composer.

````csharp
using Umbraco.Core;
using Umbraco.Core.Composing;
using Vendr.Core;
using Vendr.Web.Composing;

namespace MyProject
{
    [ComposeAfter(typeof(VendrWebComposer))]
    public class Composer : IUserComposer
    {
        public void Compose(Composition composition)
        {
            // Configuration goes here
        }
    }
}
````

Registering a dependency is then achieved by working with the `composition` API

````csharp
public void Compose(Composition composition)
{
    // Registering an event handler
    composition.WithNotificationEvent<OrderSavedNotification>()
        .RegisterHandler<MyNotificationEventHandler>();

    // Registering an event handler before another handler
    composition.WithNotificationEvent<OrderSavedNotification>()
        .RegisterHandlerBefore<SomeSystemEventHandler, MyNotificationEventHandler>();
}
````

## Replacing Dependencies

As well as the ability to register new dependencies, there are also times that we will want to be able to replace an existing dependency, such as the various Calculators available in Vendr.

Where a feature is replaceable, replacing that dependency is also achieved via the `composition` API

````csharp
public void Compose(Composition composition)
{
    // Replacing the product calculator implementation
    composition.RegisterUnique<IProductCalculator, MyProductCalculator>();

    // Replacing the default product adapter
    composition.RegisterUnique<IProductAdapter, MyProductAdapter>();
}
````

## Injecting Dependencies

As well as registering dependencies, you will also need to know how to access Vendr dependencies from within your Controllers. To do this, we add parameters to our Controllers constructor for the dependencies we require and then the IoC container will inject them automatically for us.

````csharp
using Vendr.Core.Api;
using System.Web.Mvc;
using Umbraco.Web.Models;
using Umbraco.Web.Mvc;

namespace MyProject.Web.Controllers
{
    public class HomeController : RenderMvcController
    {
        private readonly IVendrApi _vendrApi;

        public HomeController(IVendrApi vendrApi)
        {
            _vendrApi = vendrApi;
        }

        public ActionResult Home(ContentModel model)
        {
            // Work with the _vendrApi here

            return CurrentTemplate(model);
        }
    }
}
````