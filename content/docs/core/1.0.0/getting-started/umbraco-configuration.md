---
title: Umbraco Configuration
description: Configuring Umbraco for Vendr, the eCommerce solution for Umbraco v8+
---

Before we can start to use Vendr, we need to configure Umbraco to allow ourselves access to the relevant sections. The Vendr UI is split over three sections within the Umbraco back-office:

* **Settings** For managing the various store settings
* **Commerce** For managing store related content (orders, discounts, etc)
* **Content** For managing the Vendr products

In order to access these sections, we will need to ensure our User account has the relevant permissions to do so. If you are logged in as Administrator, you will likely already have access to the **Settings** and **Content** sections. If you are not an Administrator however, you will need to [assign your user account to the Administrators User Group](https://our.umbraco.com/documentation/getting-started/Data/Users/).

To gain access to the **Commerce** section however, will require some additional configuration.

## Creating a Commerce User Group

To gain access to the **Commerce** section, it is advised that you create a new User Group called **Commerce**, assigning our User account to that User Group and allowing that User Group access to the **Commerce** section as a whole. By creating a custom User Group in this way it provides an easier method of managing Users who have access to the **Commerce** section, rather than allowing individual Users access.

To create the **Commerce** User Group you should follow the [instructions on how to create a User Group available on the Umbraco Documentation site](https://our.umbraco.com/documentation/getting-started/Data/Users/#creating-a-user-group), ensuring you select the **Commerce** section in the **Sections** list, as well as selecting your User account in the **Users** list, as per the screenshot below.

![Creating a Commerce User Group in Umbraco](~/assets/images/screenshots/create_commerce_user_group.png)

## Accessing the Commerce Section

Once created and assigned, you should be able to refresh the back-office and see that we now have access to the new **Commerce** section.

![Commerce Section in Umbraco Navigation](~/assets/images/screenshots/commerce_section.png)