---
title: Installation
description: Installing Vendr, the eCommerce solution for Umbraco v8+
---

There are currently two ways to install Vendr into your solution. Using the Umbraco package distribution of Vendr, installed via the Umbraco back-office, or using our NuGet packages, installed directly into the projects code base via the NuGet Package Manager. Where possible, it is our recomendation to use the NuGet packages as these allow a great level of ease/control when upgrading later on.

## Umbraco Package Installation

To install the Vendr Umbraco package, you can navigate to the **Packages** section in your back-office and then search to find the Vendr package in the central Umbraco package repository. Once located, you can click the package entry and follow the on-screen instructions provided to complete the install.

![Installing Vendr via Local Umbraco Package](~/assets/images/screenshots/umbraco_packages_install.png)

Alternatively, you can download the Umbraco package file from the [Umbraco Developer Portal](https://our.umbraco.com/packages/website-utilities/vendr/) and install it manually by uploading it to the local package installer located in your back-office **Packages > Install Local** section. Once uploaded, follow the on-screen instructions provided to complete the install.

![Installing Vendr via Local Umbraco Package](~/assets/images/screenshots/umbraco_local_package_install.png)

## NuGet Package Installation

To install Vendr via NuGet you can run the following command directly in the NuGet Manager Console window:

```bash
PM> Install-Package Vendr
```

Alternatively, you can also find and install the NuGet package via the NuGet Package Manager GUI. You will see a number of packages available, however you will want to install the main **Vendr** package.

![Installing Vendr via the NuGet Package Manager GUI](~/assets/images/screenshots/nuget_package_manager_gui.png)

For most basic sites using a single solution/project, this should be all you need to install Vendr into your project. If you have a more complex solution structure however, consisting of multiple projects, Vendr is available in multiple sub-packages with varying dependencies.

* **Vendr.Core** The core Vendr functionality that doesn't require a web context.
* **Vendr.Web** The core Vendr functionality that requires a web context.
* **Vendr** The main Vendr package containing all DLL's and web project files.

## Upgrading

<message-box type="warn" heading="Before you upgrade">

Before upgrading, it is always advisable to take a complete backup of your site/database, just in case. Every effort has been made to ensure that Vendr will upgrade gracefully, but there is always a risk that something may not install as expected.

</message-box>

Vendr uses Umbraco Migrations to install all of it's features meaning upgrades follow the exact same process as the installtion processes detailed above, installing the latest version of a package over the top of the existing package installation. Vendr is then clever enough to detect the current state of your site and only install the features that are missing.

## Installing a License 

Once you have purchased a license you can install it by dropping the license file directly into your sites `App_Data` folder. Vendr will automatically scan this directory for any valid licenses.

<message-box type="info" heading="When do i need a license?">

You only need to install a license when you are ready to go live. 

Vendr is fully functional during development, and whilst it is hosted on a local server.

You can also host a staging site on a `*.azurewebsite.net` or `*.umbraco.io` domain without the need of a license. However, if you wish to host the site on your own staging URL, then an appropriate license file will be required.

</message-box>