---
title: Installation
description: Installing Vendr Reviews, an add-on package for Vendr, the eCommerce solution for Umbraco v8+
---

There are currently two ways to install the Vendr Reviews package for Vendr into your solution. Using the Umbraco package distribution, installed via the Umbraco back-office, or using our NuGet packages, installed directly into your projects code base via the NuGet Package Manager. 

## Umbraco Package Installation

To install the Vendr Reviews Umbraco package, you will need to download the package file manually from the Vendr package page on the [Umbraco Developer Portal](https://our.umbraco.com/packages/website-utilities/vendr-reviews/). On this page, scroll down to the **Package Files** section and locate the Vendr Reviews package, clicking it to initiate a download.

![Umbraco package files list](/media/screenshots/reviews/our_package_list.png)

Once downloaded you should manually install the package by uploading it to the **local package installer** located in your back-office **Packages > Install Local** section. Once uploaded, follow the on-screen instructions provided to complete the install.

![Installing an Umbraco Package via Local Umbraco Package](/media/screenshots/umbraco_local_package_install.png)

## NuGet Package Installation

To install the Vendr Reviews package via NuGet you can run the following command directly in the NuGet Manager Console window:

```bash
PM> Install-Package Vendr.Contrib.Reviews
```

Alternatively, you can also find and install the NuGet package via the NuGet Package Manager GUI.

![Installing Vendr Reviews via the NuGet Package Manager GUI](/media/screenshots/reviews/nuget_package.png)

## Installing the Reviews Snippet

To add the reviews snippet to your front end, in your product pages template you should add a using statement at the top as follows:

````csharp
@using Vendr.Contrib.Reviews.Web;
````

And then where you wish to render the reviews, add the following code snippet:

````csharp
@Html.RenderVendrReviews(storeId, productReference)
````

Vendr Reviews will then handle rendering the reviews list and the new review form for you.

![Vendr Reviews](/media/screenshots/reviews/reviews.png)

## Upgrading

<message-box type="warn" heading="Before you upgrade">

Before upgrading, it is always advisable to take a complete backup of your site/database. Every effort has been made to ensure that Vendr Reviews will upgrade gracefully, but there is always a risk that something may not install as expected.

</message-box>

Vendr Reviews uses database migrations for both installs and upgrades. Upgrading is generally a case of installing the latest version over the top of the existing package and running through the installation steps again.