---
title: Configuring Umbraco
description: Documentation for the Yourpay Checkout (One Time) payment provider for Vendr, the eCommerce solution for Umbraco v8+
---

## Create Payment Method

In the Umbraco back-office, in the **Settings > Vendr > Stores > {Store Name} > Payment Methods** section, click the **Create Payment Method** button to create a new payment method, choosing **Yourpay Checkout (One Time)** from the list of available payment providers.

![Create Payment Method](/media/screenshots/yourpay/umbraco_create_payment_method.png)

## Configure Payment Provider Settings

In the payment method editor, configure the standard payment method settings as required, then configure the Yourpay payment provider settings as follows:

| Name | Description |
| ---- | ----------- |
| Continue URL | The URL of the page to navigate to after payment is successful - e.g. `/confirmation/` |
| Cancel URL | The URL of the page to navigate to if the customer cancels the payment - e.g. `/cart/` |
| Error URL | The URL of the page to navigate to if there is an error with the payment - e.g. `/error/` |
| Merchant ID | The Merchant ID used for test payments |
| Production Merchant ID | The Merchant ID used for payments in production |
| Merchant Token | The Merchant Token used to communicate with Yourpay API |
| Language | Specify the language used in the payment window |
| Auto Capture | Toggle indicating whether to immediately capture the payment, or whether to authorize the payment for later (manual) capturing |
| Test Mode | Toggle indicating whether this provider should run in test mode |

![Create Payment Provider Settings](/media/screenshots/yourpay/umbraco_configure_yourpay_settings.png)
