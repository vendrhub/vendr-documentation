---
title: Fluent API
description: Faster development thanks to the Fluent API of Vendr, the eCommerce solution for Umbraco v8+
---

An added side effect of having [ReadOnly and Writable entities](../readonly-and-wrtiable-entities/) is that all of an entities write opperations are now performed via methods, rather than property setters, enabling to us convert Vendr's write API in a fluent API.

## Writing fluently

Where we could perform a write opperation as follows

````csharp
using(var uow = _uowProvider.Create())
{
    // Fetch the currency
    var currency = _currencyService.GetCurrency(currencyId);

    // Convert the currency into it's Writable form
    var writableCurrency = currency.AsWritable(uow);

    // Peform our write opperation
    writableCurrency.SetName("New Name");

    // Persist the changes to the database
    _currencyService.SaveCurrency(currency);

    // Close our transaction
    uow.Complete();
}

````

...if we prefered, we could simplify this further by defining these actions fluently, chaining all of the entity methods into a succinct command sequence as follows

````csharp
using(var uow = _uowProvider.Create())
{
    var currency = _currencyService.GetCurrency(currencyId)
        .AsWritable(uow)
        .SetName("New Name");

    _currencyService.SaveCurrency(currency);

    uow.Complete();
}

````

<message-box type="info" heading="Fluent API Optional">

We know not everyone likes to write their code fluently and so the Vendr Fluent API is a completely optional feature. Both code examples above are valid coding styles which will both work just as well as each other. The Fluent API simply provides an additional layer of syntax sugar that developers can use depending on their prefered style of coding.

</message-box>