---
title: Tax Sources
description: Identifying the source of taxation of and Order within Vendr, the eCommerce solution for Umbraco v8+
---

A Tax Source identifies which geographic location an Order should use in order to calculate it's tax liability. Depending on the country that the web store is operating in, and the country an order is being purchased from / shipping to, this can dictate how your taxes should be calculated.

To aid with this Vendr allows the Tax Source of a Store to be configured via the implementation of a Tax Source Factory. The Tax Source Factory is responsible for determining the source of Tax given the billing and shipping country of an Order.

Out of the box, Vendr comes with two Tax Source Factory implementations:

* **DestinationTaxSourceFactory** - (Default) Sets the Tax Source as being the destination country where an Order will be shipped to.

* **OriginTaxSourceFactory** - Sets the Tax Source as the being the origin country where an Order was billed to.

## Changing the Tax Source Factory

Tax Source Factories are [registered via a Composer](../dependency-injection/#registering-dependencies) using the `RegisterUnique<ITaxSourceFactory, TReplacementTaxSourceFactory>()` method where the `TReplacementTaxSourceFactory` parameter is the Type of our replacement Tax Source Factory implementation.


````csharp
public void Compose(Composition composition)
{
    // Replacing the default Tax Source Factory implementation
    composition.RegisterUnique<ITaxSourceFactory, OriginTaxSourceFactory>();
}
````