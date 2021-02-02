---
title: Installation
description: Installing Vendr Reviews, an add-on package for Vendr, the eCommerce solution for Umbraco v8+
---

When hosting open forms on a website, it's often desirable to add a level of protection to prevent abuse from spambots. To help with this Vendr Reviews comes with out of the box support for [hCaptcha](https://hcaptcha.com), a free to use captcha service, to ensure that your reviewers are indeed human.

## Sign up For hCaptcha

To enable the hCaptcha feature, you will first of all need to head to the [hCaptcha](https://hcaptcha.com) site to sign up for a hCaptcha account.

![hCaptcha Website](~/assets/images/screenshots/reviews/hcaptcha_website.png)

In the top right hand corner, click the **Signup** button and on the options screen, select the **Add hCaptcha to your service (free)** option.

![hCaptcha Signup Options](~/assets/images/screenshots/reviews/hcaptcha_signup_options.png)

On the next screen, you can enter your credentials to sign up with, or use a GitHub account to gain access.

![hCaptcha Signup](~/assets/images/screenshots/reviews/hcaptcha_signup.png)

## hCaptcha Settings

Once signed up you can navigate to [https://dashboard.hcaptcha.com/](https://dashboard.hcaptcha.com/) to access the hCaptcha dashboard where you will need to locate two required settings. The first is the **Secret Key** which can be found in the **Settings** section.

![hCaptcha Settings](~/assets/images/screenshots/reviews/hcaptcha_settings.png)

The second setting is a **Site Key** which you'll need to navigate to the **Sites** section and define a new site entry for your website. From within your site entries settings you'll be able to access it's **Site Key**.

![hCaptcha Site Settings](~/assets/images/screenshots/reviews/hcaptcha_site_settings.png)

## App Settings

With both settings located, enabling hCaptcha support in Vendr Reviews is as purely a matter of defining two app settings in your `Web.config`

````xml
<appSettings>
    <add key="VendrReviews:hCaptcha:SiteKey" value="YOUR_SITE_KEY" />
    <add key="VendrReviews:hCaptcha:SecretKey" value="YOUR_SECRET_KEY" />
</appSettings>
````

With the app settings defined, your review form will automatically display the hCaptcha widget and the relevant server side logic will be activated to validate the hCaptcha widgets response.

![Vendr Review Form](~/assets/images/screenshots/reviews/write_review.png)

<message-box type="warn" heading="Testing Locally">

Please note that when testing Vendr Reviews locally with hCaptcha enabled you must access the website via a non-localhost URL. If you access the site on localhost you will likely see a hCaptcha error of **Rates limited or network error. Please retry**. Please see the [hCaptcha Docs](https://docs.hcaptcha.com/#localdev) for workaround solutions.

</message-box>
