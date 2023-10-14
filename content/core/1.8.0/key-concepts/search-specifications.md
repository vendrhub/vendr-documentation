---
title: Search Specifications
description: Flexible searching in Vendr, the eCommerce solution for Umbraco v8+
---

Providing a search API for developers to be able to search for entities that match a given criteria is a bit of a balancing act. You want to provide a flexible API to allow for meaningful results to be returned but at the same time you don't want to allow every possible search combination as this can lead to performance problems.

The way we have addressed this is by using the Specification pattern.

## Specifications

Specifications are a programming design pattern that allow you to encapsulate business rules in blocks that can be chained together to define boolean logic.

What this means is we that we can provide a series of specifications for the types of queries we are able to support in a performant way and allow developers to chain these together in whatever combination they require in order to create dynamic filters for entity searches.

## Searching

To perform a search using specifications you'll need to use one of the search methods on the given entity service that accepts a `Func<IEntityQuerySpecificationFactory, IQuerySpecification<Entity>>` parameter. This parameter type might look complex, but it's use should be pretty straight forward thanks to the use of delegates.

To use one of the search methods, the implementation will look something like the following:

````csharp
var results = _orderService.SearchOrders(
    (where) => where
        .FromStore(storeId)
        .And(where.HasOrderNumber(orderNumber).Or(where.ByCustomer(customerEmail))))
````

The above is a relatively simple example, but it demonstrates the use of a delegate method that then uses a fluent specifications API to build up a query filter. The query filter itself can be made up of many different individual queries, which themselves can be grouped using AND and OR query logic.

Because the API is fluent, it is also self-documenting, with Visual Studio Intellisense able to guide developers through all the available specifications.

## Ordering Results

Along side the query specifications documented above, we also have to concept of sort specifications which allow a similar fluent API for defining the order in which results are returned. These are passed in a similar way to the search methods as demonstrated below.

````csharp
var results = _orderService.SearchOrders(
    (where) => where
        .FromStore(storeId)
        .And(where.HasOrderNumber(orderNumber).Or(where.ByCustomer(customerEmail))),
    (orderBy) => orderBy
        .FinalizedDate(Sort.Descending)
        .Then(orderBy.CreateDate(Sort.Descending)))
````
