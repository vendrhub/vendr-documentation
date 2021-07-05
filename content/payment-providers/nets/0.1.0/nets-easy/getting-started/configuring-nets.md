---
title: Configuring Nets
description: Documentation for the Nets Easy payment provider for Vendr, the eCommerce solution for Umbraco v8+
---


## Sign up & Sign in

If you haven't done so yet, head on over to [portal.dibspayment.eu/registration](https://portal.dibspayment.eu/registration) to register for a Nets Easy account.

![Nets Easy sign up](/media/screenshots/nets/nets-easy_signup.png)

Or, if you already have an account, you can head over to [portal.dibspayment.eu/dashboard](https://portal.dibspayment.eu/dashboard) to sign in to your account.


![Nets Easy sign in](/media/screenshots/nets/nets-easy_signin.png)

## API Keys

In order for Vendr to communicate with Nets Easy securely we will need to generate an API key that Vendr can use to authenticate with.

## Webhook 

In order for Nets Easy to notify Vendr of a successful transaction, Nets Easy makes use of webhook technology to directly send notifications of the changing statuses of a transaction. By using webhooks it ensures that the system will always be notified of these status changes, even if the customer decides not to return to the store once a transaction is complete.

Registration of webhook notifications are handles as part of the payment request using the Vendr callback URL as follows (replacing the parameters in curly brackets with the corresponding values taken from your store):

````
https://{store_domain}/umbraco/vendr/payment/callback/nets-easy-checkout/{payment_method_id}/
````

![Nets Easy Webhook](/media/screenshots/nets/nets-easy_webhook.png)
