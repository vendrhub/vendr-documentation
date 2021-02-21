---
title: Installation
description: Installing Vendr uSync, an add-on package for Vendr, the eCommerce solution for Umbraco v8+
---

There are currently two ways to install the Vendr uSync package for Vendr into your solution. Using the Umbraco package distribution, installed via the Umbraco back-office, or using our NuGet packages, installed directly into your projects code base via the NuGet Package Manager. 

## Umbraco Package Installation

To install the Vendr uSync Umbraco package, you will need to download the package file manually from the Vendr package page on the [Umbraco Developer Portal](https://our.umbraco.com/packages/website-utilities/vendr-usync/). On this page, scroll down to the **Package Files** section and locate the Vendr uSync package, clicking it to initiate a download.

![Umbraco package files list](/media/screenshots/usync/our_package_list.png)

Once downloaded you should manually install the package by uploading it to the **local package installer** located in your back-office **Packages > Install Local** section. Once uploaded, follow the on-screen instructions provided to complete the install.

![Installing an Umbraco Package via Local Umbraco Package](/media/screenshots/umbraco_local_package_install.png)

## NuGet Package Installation

To install the Vendr uSync package via NuGet you can run the following command directly in the NuGet Manager Console window:

```bash
PM> Install-Package Vendr.uSync
```

Alternatively, you can also find and install the NuGet package via the NuGet Package Manager GUI.

![Installing Vendr uSync via the NuGet Package Manager GUI](/media/screenshots/usync/nuget_package.png)

## Upgrading

Vendr uSync doesn't consist of any UI files, or database changes so it is generally ok to install the upgrade over the top of a previous install.