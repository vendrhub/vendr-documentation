---
title: Payment Providers
description: Accepting payments via Payment Providers in Vendr, the eCommerce solution for Umbraco v8+
---

Payment Providers are how Vendr is able to accept multiple different methods of payment on a Site. Their job is to provide a standard interface between 3rd party payment gateways and Vendr itself in order to allow the passing of information between the two platforms.

How these integrations work are usually different per payment gateway, however Vendr Payment Providers provide a flexible interface that should be able to work with most payment gateways.

## Example Payment Provider

An example of a bare-bones Payment Provider would look something like this:

````csharp
[PaymentProvider("my-payment-provider-alias", "My Payment Provider Name", "My Payment Provider Description")]
public class MyPaymentProvider :  PaymentProviderBase<MyPaymentProviderSettings>
{
    public MyPaymentProvider(VendrContext vendr)
        : base(vendr)
    { }

    ...
}

public class MyPaymentProviderSettings
{
    [PaymentProviderSetting(Name = "Continue URL", 
        Description = "The URL to continue to after this provider has done processing. eg: /continue/",
        SortOrder = 100)]
    public string ContinueUrl { get; set; }

    ...
}

````

All Payment Providers inherit from a base class `PaymentProviderBase<TSettings>` where `TSettings` is the Type of a POCO model representing the Payment Providers settings. The class must be decorated with `PaymentProviderAttribute` which defines the Payment Providers alias, name and description, and can also specify an icon to be displayed in the Vendr back-office.

The settings class itself consists of a series of properties, each decorated with a `PaymentProviderSettingAttribute` defining a name, description, and possible angular editor view file which will all be used to dynamically build an editor interface for the given settings in the back-office.

## Payment Provider Responsibilities 

There are two main responsibilities of a Payment Provider, and those are:

* **Payment Capture** - Capturing the initial Order payment and finalizing the Order.
* **Payment Management** - Managing a payment post Order finalization, such as being able to Capture authorized payments or Refunding captured payments.

### Payment Capture

The Payment Capture workflow can be the hardest part of a Payment Provider, often due to the fact that no two payment gateways are alike, and so it can be difficult to figure out how best to implement the gateway into the provider format.

Generally there are three methods within a Payment Provider that you may need to implement, and each one has a specific responsibility.

* **GenerateForm \*** - The `GenerateForm` method is responsible for generating a HTML form which will redirect the customer to the given payment gateways payment form. In this method you may need to communicate with the payment gateway in order to initialize a payment, letting the payment gateway know how much to capture. This often results in some kind of code or redirect URL being returned which will need to be embedded in to the generated form. The generated form is then usually displayed on a checkout **Review** page, the last page before payment is captured, and will have an implementor defined **Continue to Payment** button to submit the form and redirect the customer to the gateway.

* **ProcessCallback \*** - The `ProcessCallback` method is responsible for handling the response coming back from the payment gateway and processing whether the payment was successful or not. This can sometimes be *synchronously*, if the payment gateway sends information back as part of the confirmation page redirect, or can be *asynchronously*, if the payment gateway sends the information back via an out of band webhook request.

* **GetOrderReference** - The `GetOrderReference` method is responsible for extracting an order reference number from a request when the payment gateway uses an asynchronous webhook to finalize an Order **AND** it uses a global webhook URL strategy for all notifications rather than a notification URL per transaction. Where a webhook URL can be passed per transaction, then Vendr provides you with a unique callback URL you can register with the gateway that already identifies the order reference as part of the URL parameters, making implementing this method unnecessary. 

*\* denotes a required method implementation*.

What follows is a generalized diagram in order to help in visualizing when each of these methods are called withing a regular checkout flow.

[![Payment Provider Capture Workflow](~/assets/images/screenshots/payment_provider_capture_flow.png)](/assets/images/screenshots/payment_provider_capture_flow.png)

### Payment Management

In addition to the initial payment capture flow, Payment Providers can also be set up to manage the payment post checkout, such as being able to Capture and Authorized transaction, or Refund a Captured transaction.

These features are optional, so are not required for Payment Provider developers to implement, however they do provide a much nicer user experience as it allows the store owner to manage payments directly in the back-office rather than having to log into the payment gateway's portal should they need to perform these types of actions.



## Payment Provider Settings