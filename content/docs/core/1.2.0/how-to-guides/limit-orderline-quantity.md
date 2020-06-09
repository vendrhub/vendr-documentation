---
title: Limit Orderline Quantity in Vendr
description: How-To Guide to limit orderline quantity in Vendr, the eCommerce solution for Umbraco v8+
---

In this guide we wil be looking at Validation events in Vendr to be able to limit orderline quantity based on the existing stock value on the product and the existing quantities of the product in the cart.

## ProductAddValidationHandler

When adding a product to cart we need to verify the product is in stock and the customer not already has the remaining quantities in cart.

````csharp
public class ProductAddValidationHandler : ValidationEventHandlerBase<ValidateOrderProductAdd>
{
    private readonly IUmbracoContextAccessor _context;

    public ProductAddValidationHandler(IUmbracoContextAccessor context)
    {
        _context = context;
    }

    public override void Validate(ValidateOrderProductAdd evt)
    {
        var order = evt.Order;
        var productReference = evt.ProductReference;

        var product = _context.UmbracoContext.Content.GetById(new Guid(productReference));
        var stock = product.Value<decimal?>("stock");

        var totalQuantities = order?.OrderLines.Where(x => x.ProductReference == productReference).Sum(x => x.Quantity) ?? 0;

        if (stock.HasValue && totalQuantities >= stock.Value)
            evt.Fail($"Only {stock} quantities can be purchased for {productReference}");
    }
}

````

## OrderLineQuantityValidationHandler

Furthermore when changing orderline quantity on cart page, we need to ensure to quantities being changed to are in stock.

````csharp
public class OrderLineQuantityValidationHandler : ValidationEventHandlerBase<ValidateOrderLineQuantityChange>
{
    private readonly IUmbracoContextAccessor _context;

    public OrderLineQuantityValidationHandler(IUmbracoContextAccessor context)
    {
        _context = context;
    }

    public override void Validate(ValidateOrderLineQuantityChange evt)
    {
        var orderLine = evt.OrderLine;
        var productReference = orderLine.ProductReference;

        var product = _context.UmbracoContext.Content.GetById(new Guid(productReference));
        var stock = product.Value<decimal?>("stock");

        if (stock.HasValue && evt.Quantity.To > stock.Value)
            evt.Fail($"Only {stock} quantities can be purchased for {productReference}.");
    }
}

````