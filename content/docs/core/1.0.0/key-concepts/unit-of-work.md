---
title: Unit of Work
description: Transactional updates using the Unit of Work pattern in Vendr, the eCommerce solution for Umbraco v8+
---

When working with Vendr's API it is important that data integrity is maintained should any errors occur. In order to achieve this Vendr uses the [Unit of Work pattern](https://www.martinfowler.com/eaaCatalog/unitOfWork.html) to effectively create a transaction that wraps around sections of your code ensuring that all Vendr write operations that occur within that code block must succeed and be persisted in their entirety, otherwise non of them should, and the database should rollback to it's state prior to when those changes were made. 

## Creating a Unit of Work

To create a unit of work will require access to Vendr's `IUnitOfWorkProvider` which can be [injected into your Controller directly](../dependency-injection/), or can also be accessed via the `UoW` property on the `IVendrApi` helper.

Once you have access to either of these entry points, you can define a Unit of Work as follows

````csharp
using(var uow = _uowProvider.Create()) 
{
    // Perform your write operations here

    uow.Complete();
}

````

The anatomy of a Unit of Work then is a `using` statement, in the constructor for which we create our `uow` instance by calling the `Create()` method of the `IUnitOfWorkProvider`. Then, inside the using statement, we perform our tasks and confirm the Unit of Work as complete by calling `uow.Compelte()`. If we fail to call `uow.Complete()` either due to forgetting to add the `uow.Complete()` call, or due to an exception in our code, then any write operations that occur within that code block will **NOT** be persisted to the database.

## Unit of Work Best Practice

When using a Unit of Work it is best practice that you should perform **ALL** write operations inside a single Unit of Work and **NOT** create individual Units of Work per write operation.

<tip type="good" heading="Perform all write operations in a single Unit of Work" />

```csharp
using(var uow = _uowProvider.Create()) 
{
    // Create a Country
    var country = Country.Create(uow, storeId, "DK", "Denmark");

    _countryService.Save(country);

    // Create a Currency
    var currency = Currency.Create(uow, storeId, "DKK", "Danish Kroner", "da-DK");

    _currencyService.Save(currency);

    uow.Complete();
}
```

<tip type="bad" heading="Don't create a Unit of Work per write operation" />

```csharp
using(var uow = _uowProvider.Create()) 
{
    // Create a Country
    var country = Country.Create(uow, storeId, "DK", "Denmark");

    _countryService.Save(country);

    uow.Complete();
}

using(var uow = _uowProvider.Create()) 
{
    // Create a Currency
    var currency = Currency.Create(uow, storeId, "DKK", "Danish Kroner", "da-DK");

    _currencyService.Save(currency);

    uow.Complete();
}
```