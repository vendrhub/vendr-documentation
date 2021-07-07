---
title: Existing Pipelines
description: Details of the default pipelines in Vendr, the eCommerce solution for Umbraco v8+
---

[Pipelines](../pipelines/) are a Vendr feature that allow a series of tasks to be performed in a set sequence with the input of a given task being the output of the preceding task. Out of the box, Vendr comes with distinct pipelines which comprise of various tasks. These pipelines and their respective tasks are detailed below:

## Store Pipeline

The Store Pipeline is triggered when a new store is created and are used for setting up the various defaults that are required, including items such as default currency, country, tax, and various others.

### Store Pipeline Tasks

* CreateDefaultCurrencyTask
* CreateDefaultCountryTask
* CreateDefaultTaxClassTask
* CreateDefaultOrderStatusesTask
* CreateDefaultEmailTemplatesTask
* CreateDefaultPaymentMethodTask
* CreateDefaultShippingMethodTask
* SetDefaultCountryDefaultsTask

## Order Pipelines

There are multiple different Order Pipelines that are configured in Vendr, each with different tasks, these are then grouped together into an overarching pipeline.

### Calculate Order Tax Rates Pipeline Tasks

* CalculateOrderTaxRateTask
* CalculateOrderLineTaxRatesTask
* CalculateOrderShippingTaxRateTask
* CalculateOrderPaymentTaxRateTask

### Calculate Order Prices Pipeline Tasks

* CalculateOrderLinePricesTask
* CalculateOrderSubtotalPriceWithoutDiscountsTask
* CalculateOrderShippingTotalPriceWithoutDiscountsTask
* CalculateOrderPaymentTotalPriceWithoutDiscountsTask
* CalculateOrderTotalPriceWithoutDiscountTask
* CalculateOrderDiscountedPricesTask
 
### Calculate Order Discounted Prices Pipeline Tasks

* CalculateOrderLineDiscountedPricesTask
* CalculateOrderSubtotalPricePreviousDiscountsTask
* CalculateOrderSubtotalPriceWithPreviousDiscountsTask
* CalculateOrderSubtotalPriceDiscountTask
* CalculateOrderSubtotalPriceTotalDiscountTask 
* CalculateOrderSubtotalPriceValueTask
* CalculateOrderShippingTotalPriceDiscountTask
* CalculateOrderShippingTotalPriceValueTask
* CalculateOrderPaymentTotalPriceDiscountTask
* CalculateOrderPaymentTotalPriceValueTask
* CalculateOrderTotalPricePreviousDiscountTask
* CalculateOrderTotalPriceWithPreviousDiscountsTask
* CalculateOrderTotalPriceDiscountTask
* CalculateOrderTotalPriceWithDiscountsTask
* CalculateOrderTotalPriceTotalDiscountTask

### Limited Order Discounts Pipeline Tasks

* LimitOrderLineDiscountsTask
* LimitOrderSubtotalPriceDiscountsTask
* LimitOrderShippingTotalPriceDiscountsTask
* LimitOrderPaymentTotalPriceDiscountsTask
* LimitOrderTotalPriceDiscountsTask

### Calculate Order Gift Cards Pipeline Tasks

* CalculateOrderGiftCardAmountsTask
* CalculateOrderTotalPriceGiftCardsAmountTask

### Calculate Order Total Price Pipeline Tasks

* CalculateOrderTotalPriceValueTask

### Calculate Order Pipeline Tasks

This pipeline wraps all of the above pipelines together:

* ResovleOrderCalculationDependenciesTask
* CalculateOrderTaxRatesTask
* CalculateOrderPricesTask
* CalculateOrderDiscountsTask
* LimitOrderDiscountsTask
* CalculateOrderGiftCardsTask
* CalculateOrderTotalPriceTask

## Send Email Pipeline

The Send Email Pipeline is triggered when using the Vendr email service to generate and send e-mails, including order confirmation emails.

### Send Email Pipeline Tasks

* ConstructEmailMessageTask
* ReplaceEmailTokens
* RenderEmailTemplateTask
* RaiseSendingEventTask
* SendSmtpEmailTask
* RaiseSentEventTask

As well as the above tasks, it also has a failure task that is triggered when something goes wrong.

* RaiseFailedEventTask
