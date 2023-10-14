---
title: Configuring Umbraco
description: Documentation for the Checkout.com (One Time) payment provider for Vendr, the eCommerce solution for Umbraco v8+
---

## Create Payment Method

In the Umbraco back-office, in the **Settings > Vendr > Stores > {Store Name} > Payment Methods** section, click the **Create Payment Method** button to create a new payment method, choosing **Checkout.com (One Time)** from the list of available payment providers.

![Create Payment Method](/media/screenshots/checkout-dot-com/umbraco_create_payment_method.png)

## Configure Payment Provider Settings

In the payment method editor, configure the standard payment method settings as required, then configure the Checkout.com payment provider settings as follows:

| Name | Description |
| ---- | ----------- |
| Continue URL | The URL of the page to navigate to after payment is successful - e.g. `/confirmation/` |
| Cancel URL | The URL of the page to navigate to if the customer cancels the payment - e.g. `/cart/` |
| Error URL | The URL of the page to navigate to if there is an error with the payment - e.g. `/error/` |
| Billing Address (Line 1) Property Alias | The alias of the property containing line 1 of the billing address - e.g. addressLine1. |
| Billing Address (Line 2) Property Alias | The alias of the property containing line 2 of the billing address - e.g. addressLine2. |
| Billing Address City Property Alias | The alias of the property containing the city of the billing address - e.g. city. |
| Billing Address State Property Alias | The alias of the property containing the state of the billing address - e.g. state. |
| Billing Address Zip Code Property Alias | The alias of the property containing the zip code of the billing address - e.g. zip. |
| Billing Phone Property Alias | The alias of the property containing the phone of the billing - e.g. phone. |
| Secret Key | The Checkout.com secret API key |
| Test Mode | Toggle indicating whether this provider should run in test mode |

![Create Payment Provider Settings](/media/screenshots/checkout-dot-com/umbraco_configure_checkout-dot-com_settings.png)
