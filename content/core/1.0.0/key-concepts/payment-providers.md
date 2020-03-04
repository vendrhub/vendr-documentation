---
title: Payment Providers
description: Accepting payments via Payment Providers in Vendr, the eCommerce solution for Umbraco v8+
---

Payment Providers are how Vendr is able to accept multiple different methods of payment on a Site. Their job is to provide a standard interface between 3rd party payment gateways and Vendr itself in order to allow the passing of information between the two platforms.

How these integrations work are usually different per payment gateway, however Vendr Payment Providers provide a flexible interface that should be able to work with most payment gateways.

There are two main responsibilities of a Payment Provider, and those are:

* **Payment Capture** - Capturing the initial Order payment and finalizing the Order.
* **Payment Management** - Managing a payment post Order finalization, such as being able to Capture authorized payments or Refunding captured payments.

## Payment Capture

The Payment Capture workflow can be the hardest part of a Payment Provider, often due to the fact that no two payment gateways are alike, and so it can be difficult to figure out how best to implement the gateway into the provider format.

Generally there are three methods within a Payment Provider that you may need to implement, and each one has a specific responsibility.

* **GenerateForm \*** - The `GenerateForm` method is responsible for generating a HTML form which will redirect the customer to the given payment gateways payment form. In this method you may need to communicate with the payment gateway in order to initialize a payment, letting the payment gateway know how much to capture. This often results in some kind of code or redirect URL being returned which will need to be embedded in to the generated form. The generated form is then usually displayed on a checkout **Review** page, the last page before payment is captured, and will have an implementor defined **Continue to Payment** button to submit the form and redirect the customer to the gateway.

* **ProcessCallback \*** - The `ProcessCallback` method is responsible for handling the response coming back from the payment gateway and processing whether the payment was successful or not. This can sometimes be *synchronously*, if the payment gateway sends information back as part of the confirmation page redirect, or can be *asynchronously*, if the payment gateway sends the information back via an out of band webhook request.

* **GetOrderReference** - The `GetOrderReference` method is responsible for extracting an order reference number from a request when the payment gateway uses an asynchronous webhook to finalize an Order **AND** it uses a global webhook URL strategy for all notifications rather than a notification URL per transaction. Where a webhook URL can be passed per transaction, then Vendr provides you with a unique callback URL you can register with the gateway that already identifies the order reference as part of the URL parameters. 

*\* denotes a required method implementation*.

What follows is a generalized diagram in order to help in visualizing when each of these methods are called withing a regular checkout flow.

[![Payment Provider Capture Workflow](~/assets/images/screenshots/payment_provider_capture_flow.png)](/assets/images/screenshots/payment_provider_capture_flow.png)

## Payment Management



## Payment Provider Settings