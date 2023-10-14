---
title: Configuring Checkout.com
description: Documentation for the Checkout.com (One Time) payment provider for Vendr, the eCommerce solution for Umbraco v8+
---

## Sign up & Sign in

If you haven't done so yet, head on over to [checkout.com/get-test-account](https://www.checkout.com/get-test-account) to register for a Checkout.com account.

Or, if you already have an account, you can head over to [hub.checkout.com/login](https://hub.checkout.com/login) to sign in to your account. Note for testing the you need to login at the sandbox domain at [sandbox.checkout.com/login](https://sandbox.checkout.com/login)

![Checkout.com sign in](/media/screenshots/checkout-dot-com/checkout-dot-com_signin.png)

## API Keys

In order for Vendr to communicate with Checkout.com securely we will need to generate a series of API keys that Vendr can use to authenticate with.

In the sidebar, click the **Channels** heading and then select the **Business Name**. At the top you will find your **API keys** consisting of **Secret key** and **Public key**. You'll also find a button "Regenerate" next to these to generate new keys and labels indicating the environment (sandbox/test or live).

![Checkout.com API Keys](/media/screenshots/checkout-dot-com/checkout-dot-com_api_keys.png)

## Webhook 

In order for Checkout.com to notify Vendr of a successful transaction, Checkout.com makes use of webhook technology to directly send notifications of the changing statuses of a transaction. By using webhooks it ensures that the system will always be notified of these status changes, even if the customer decides not to return to the store once a transaction is complete.

To register a webhook, in the sidebar, click the **Channels** heading and then select the **Business Name**. At the bottom click the **New webhook** button and enter the Vendr callback URL as follows (replacing the parameters in curly brackets with the corresponding values taken from your store):

````
https://{store_domain}/umbraco/vendr/payment/callback/checkout-dot-com/{payment_method_id}/
````

![Checkout.com Webhook](/media/screenshots/checkout-dot-com/checkout-dot-com_webhook.png)

Furthermore check **API - v2.0** and select the following event type:

* `Payment approved`
* `Payment canceled`
* `Payment captured`
* `Payment refunded`
* `Payment voided`

Click **Create webhook** to create the webhook endpoint registration.