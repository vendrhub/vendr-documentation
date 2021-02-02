---
title: Configuring Yourpay
description: Documentation for the Yourpay Checkout (One Time) payment provider for Vendr, the eCommerce solution for Umbraco v8+
---

## Sign up & Sign in

If you haven't done so yet, head on over to [yourpay.eu/create-account](https://www.yourpay.eu/create-account/) to register for a Yourpay account.

![Yourpay Signup](~/assets/images/screenshots/yourpay/yourpay_signup.png)

Or, if you already have an account, you can head over to [admin.yourpay.io/login](https://admin.yourpay.io/login) to sign in to your account.


![Yourpay Sign in](~/assets/images/screenshots/yourpay/yourpay_signin.png)


## API Keys

In order for Vendr to communicate with Yourpay securely we will need to use a series of keys that Vendr can use to authenticate with.

In the sidebar, click the **Account Information** heading. Here you will find your **Merchant ID** (use for test payments) and **Production Merchant ID** (used for payments in production). Furthermore you will find a **Merchant Token** and a **Integration Key**. The **Integration Key** is user defined (empty by default) and is used in verification of the payment in the callback.

![Yourpay API Keys](~/assets/images/screenshots/yourpay/yourpay_api_keys.png)
