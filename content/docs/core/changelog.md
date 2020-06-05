---
title: Changelog
description: Changelog for the Core Vendr product
---

## v1.2.3  
**Date:** 2020-06-05  
**Description:** Patch release with minor bug fixes / enhancements  
---  

<changelog>
<changelog-group category="Fixed">  

* Fixed issue with recent gift card config settings not being copied when a store is deep cloned.
* Fixed issue with store "allowed users" not persisting due to incorrect variable name in views.
* Fixed issue where domain events that affect the saving entity model were not being persisted due to a variable reference issue and deep comparisons not working.
* Fixed issue with the sort dialog close button not working ([#123](https://github.com/vendrhub/vendr/issues/123)).
* Fixed issue where deleted gift cards were still showing in list view ([#124](https://github.com/vendrhub/vendr/issues/124)).
* Fixed issue where stock values were being cached at the page level where they should be at the request level ([#125](https://github.com/vendrhub/vendr/issues/125)).

</changelog-group>
<changelog-group category="Changed">  

* Only show payment / shipping "via" in the back-office if a payment / shipping method is known.
* Added script to NuGet packages to auto increment client dependency version.
* Order calculation now rounds prices to the currencies defined decimal places level after each calculation step in order to prevent rounding issues ([#126](https://github.com/vendrhub/vendr/issues/126)).
* Payment Provider cancel, continue and callback URL hashes now include the actual URL, and not just the reference as part of the hash. This is to prevent tampering of the the URLs.
* Session cookies are now flagged as `HttpOnly` (this can be disabled by setting an app setting `Vendr:Cookies:HttpOnly` to `false`), and when the site is accessed over https, also flagged as `Secure`. This is to protect the session cookies from being hijacked from malicious entities. 
* The current finalized order is now stored in it's own session cookie with a limited lifetime of 5 minutes providing enough time to display a confirmation page, but no longer persisting until a new order took it's place.

</changelog-group>
</changelog> 

## v1.2.1/2  
**Date:** 2020-05-28  
**Description:** Patch release with minor bug fixes / enhancements   
---  

<changelog>
<changelog-group category="Fixed">  

    
* Fixed bug in discount service preventing discount / gift cards from being redeemed 🤦‍♂️
* Reverted fix for ([#116](https://github.com/vendrhub/vendr/issues/116)) as it was preventing clean installs so needs investigating further 🤦‍♂️

</changelog-group>
</changelog> 


## v1.2.0  
**Date:** 2020-05-28  
**Description:** Minor version release predominantly for the Gift Cards feature with a few bug fixes too  
--- 

<changelog>
<changelog-group category="Added">  

    
* Added gift cards feature which includes a new sub-section in the commerce section along with the ability to create gift cards manually and additional automations for automatically creating gift cards and sending gift card emails when a gift card is purchased.
* Added `IGiftCardCodeGenerator` to allow for custom gift card code generation strategy.
* Added Zero Value payment provider in core to allow the passing through of orders who's final value is 0 and thus no payment needs to be taken. This will be up to the implementer however to setup and select this payment method accordingly.
* Added gift card service methods to the global `IVendrApi` helper.
* Added support of dynamic lambda statements in the syntax of `{Model.Value}` in email template subject lines ([#107](https://github.com/vendrhub/vendr/issues/107)).
* Added validation to the `AddProduct` method to ensure a price for the order currency exists.
* Added `_ViewStart.cshtml` file to the Vendr views folder to reset any global layout that might have been defined ([#117](https://github.com/vendrhub/vendr/issues/117)).


</changelog-group>
<changelog-group category="Fixed">  

    
* Fixed NullReference exception when adding a product to an order when missing a price ([#112](https://github.com/vendrhub/vendr/issues/112)).
* Fixed a number of migration SQL errors when upgrading using SQL Server ([#116](https://github.com/vendrhub/vendr/issues/116)).
* Fixed error with discount property rule not working correctly when a property doesn't exist ([#115](https://github.com/vendrhub/vendr/issues/115)).
* Fixed bug with discount code validation incorrectly reporting the discount code is already in use.


</changelog-group>
<changelog-group category="Changed">  

    
* Store configuration now has additional gift card configuration fields.
* Email Templates now have a category used to filter the email templates to display in "send email" dialogs.
* Updated store create pipeline to auto create the default gift card email.
* Updated store create pipeline to assign generated emails to the relevant categories.
* Send email dialogs now have an ability to override the `To` address before sending.
* Improved the `PricePropertyValue` models `HasValue` method to also check for null values.
* Updated the `UmbracoProductSnapshot.Prices` property to check for values for the given currency before assuming it has a value.


</changelog-group>
<changelog-group category="Breaking">  

    
* `IProductAdapater` interface now has a new `IsGiftCard` property.


</changelog-group>
</changelog>

## v1.1.4
**Date:** 2020-05-19   
**Description:** Patch release with minor bug fixes / enhancements  
--- 

<changelog>
<changelog-group category="Fixed">  

    
* Fixed javaScript error when refreshing order list view after an order is deleted ([#96](https://github.com/vendrhub/vendr/issues/96)).
* Fixed formatting issue in table view selection message where `X of Y` message was being displayed without spaces.
* Fixed YSOD when deleting an order line that has discounts applied to it  ([#98](https://github.com/vendrhub/vendr/issues/98)).
* Fixed order lines being limited to a max of 100 quantity ([#101](https://github.com/vendrhub/vendr/issues/101)).
* Fixed YSOD in back-office when displaying the transaction info dialog when some keys have an empty value ([#104](https://github.com/vendrhub/vendr/issues/104)).
* Fixed YSOD when adding a sub order line to a bundle ([#106](https://github.com/vendrhub/vendr/issues/106)).


</changelog-group>
</changelog>

## v1.1.3
**Date:** 2020-05-06   
**Description:** Patch release with minor bug fixes / enhancements  
--- 

<changelog>
<changelog-group category="Fixed">  

    
* Patch release dll timestamp not formatted in the correct way.
* Fixed bug in TaxClassRepository.GetIdByAlias method which had a malformed SQL statement.
* Fixed NuGet install script not working correctly in directories containing spaces.


</changelog-group>
<changelog-group category="Changed">  

    
* When saving a product node with a stock property, only sync the value back to the stock database table if the property is dirty ([#93](https://github.com/vendrhub/vendr/issues/93)).


</changelog-group>
</changelog>

## v1.1.2  
**Date:** 2020-05-05   
**Description:** Patch release with minor bug fixes / enhancements  
--- 

<changelog>
<changelog-group category="Added">  

    
* Added `*.xip.io`, `*.nip.io` and `*.sslip.io` as valid test domains.
* Added strongly typed value converter for the store entity picker property editor.
* Added missing validation events for Discount code add/update/remove.
* Added validation events to all entities to validate the uniqueness of aliases / codes.
* Added `Exists` methods to all entity services to make it easier to check for the existence of an entity.


</changelog-group>
<changelog-group category="Fixed">  

    
* Fixed bug in product uniqueness logic throwing a YSOD if you add a product with no uniqueness properties after one that has is already in the cart ([#88](https://github.com/vendrhub/vendr/issues/88)).
* Fixed build script formatting the patch release timestamp incorrectly.
* Fixed YSOD when removing items from a cart and using SQL CE. This was due to a SQL statement that doesn't work on SQL CE. Now updated to work across the board ([#89](https://github.com/vendrhub/vendr/issues/89)).
* Fixed bug where discount codes declared on deleted discounts couldn't be reused ([#91](https://github.com/vendrhub/vendr/issues/91)).
* Discount aliases are now validated before save and display a friendly error message ([#91](https://github.com/vendrhub/vendr/issues/91)).


</changelog-group>
<changelog-group category="Changed">  

    
* Changed picker property editor 'add' buttons to use a button element, rather than a link tag ([#86](https://github.com/vendrhub/vendr/issues/86)).
* Changed table view 'create' buttons to use a button element, rather than a link tag ([#87](https://github.com/vendrhub/vendr/issues/87)).
* Implemented friendlier display of validation errors ([#91](https://github.com/vendrhub/vendr/issues/91)).


</changelog-group>
</changelog>

## v1.1.1  
**Date:** 2020-04-29  
**Description:** Patch release with minor bug fixes / enhancements  
--- 

<changelog>
<changelog-group category="Fixed">  

    
* Fixed issue with v1.1.0 NuGet package not copying email templates to the Views folder 🤦‍♂️.


</changelog-group>
</changelog>

## v1.1.0 
**Date:** 2020-04-29  
**Description:** Minor release with new features and some minor bug fixes / enhancements
--- 

<changelog>
<changelog-group category="Added">  

    
* Added "Unlimited" checkbox to discount codes to allow them to have unlimited usage ([#50](https://github.com/vendrhub/vendr/issues/50)).
* Added basic Order/Payment Status filters to Order list ([#63](https://github.com/vendrhub/vendr/issues/63)).
* Added escape key shortcut to close Discount rule/rewards settings editor dialog ([#60](https://github.com/vendrhub/vendr/issues/60)).
* Added feedback when copying order details to clipboard ([#22](https://github.com/vendrhub/vendr/issues/22)).
* Added new store entity picker property editor to merge together all store entity pickers. Tax Class picker is now obsolete in favour of this new picker.
* Added email templates for the default Confirmation / Error emails.


</changelog-group>
<changelog-group category="Fixed">  

    
* Fixed YSOD when accessing transaction info for an order where the Payment Provider no longer existed. Now perform null checks on data ([#58](https://github.com/vendrhub/vendr/issues/58)).
* Fixed issue with NuGet packages not copying content files on upgrade. Added a PowerShell script to perform the copy.
* Fixed bug where customer details weren't being persisted into the dedicated fields in the database table (they are still present in the properties collection where they are referenced from 99% of the time) ([#85](https://github.com/vendrhub/vendr/issues/85)).


</changelog-group>
<changelog-group category="Changed">  

    
* Rule / Reward builders now support infinite editing when creating a rule so closing the editor via the 'close' link now goes back to the rule / reward picker. ([#81](https://github.com/vendrhub/vendr/issues/81)).


</changelog-group>
<changelog-group category="Removed">  

    
* Removed code for shipping method / payment method picker property editors in favour of the new store entity picker. These were never made public as actual property editors, as they were only used by the rule / reward builder so this won't be classed as a breaking change.


</changelog-group>
</changelog>

## v1.0.3 
**Date:** 2020-04-24  
**Description:** Patch release with minor bug fixes / enhancements
--- 

<changelog>
<changelog-group category="Added">  

    
* Added missing Product discount rule to discounts rule builder ([#76](https://github.com/vendrhub/vendr/issues/76)).
* Added basic Order Line Amount Reward that applies to all Order Lines.


</changelog-group>
<changelog-group category="Fixed">  

    
* Product prices now thaw when the last product of a type is removed from the cart ([#71](https://github.com/vendrhub/vendr/issues/71)).
* Fixed YSOD when saving a property with a null value. Property is now removed if the value is null  ([#78](https://github.com/vendrhub/vendr/issues/78)).


</changelog-group>
<changelog-group category="Changed">  

    
* Changed the name of the Products Order Line Amount Reward to Order Line (with Product) Amount Reward as it's more descriptive of it's purpose.


</changelog-group>
</changelog>

## v1.0.2 
**Date:** 2020-04-15  
**Description:** Patch release with minor bug fixes / enhancements
--- 

<changelog>
<changelog-group category="Added">  

    
* Added ability to delete an order from the action menu.
* Added permission checks to all entity controller actions.


</changelog-group>
<changelog-group category="Fixed">  

    
* Fixed ability to delete orders ([#49](https://github.com/vendrhub/vendr/issues/49)).
* Fixed issue with orders not finalizing if an error occurs sending emails. Email sending is now wrapped in a try catch that logs errors to the error log instead ([#52](https://github.com/vendrhub/vendr/issues/52)).
* Fixed bug in EmailTemplateService.SendEmail where it wasn't sending to the supplied To email address unless "Send to Customer" on the email template was checked. This setting now only applies if you call the SendEmail method version that accepts an Order. The signature with the explicit toEmailAddress parameter will always send to the provided email address ([#54](https://github.com/vendrhub/vendr/issues/54)).
* Percentage reward inputs now only accept decimals ([#59](https://github.com/vendrhub/vendr/issues/59)).
* Fixed property discount rule, property alias field description describing the wrong thing ([#62](https://github.com/vendrhub/vendr/issues/62)).


</changelog-group>
<changelog-group category="Changed">  

    
* Changed payment status colours so Authorized is now blue and Refunded is orange so that Refunded doesn't look like an error ([#61](https://github.com/vendrhub/vendr/issues/61)).


</changelog-group>
</changelog>

## v1.0.1 
**Date:** 2020-04-06  
**Description:** Patch release with minor fixes found post launch
--- 

<changelog>
<changelog-group category="Fixed">  

    
* Fixed wrong license URL displayed in installer.
* Fixed stock input field not allowing a stock level greater than 100 ([#44](https://github.com/vendrhub/vendr/issues/44)).
* Fixed stock input field rounding decimal stock levels on save ([#45](https://github.com/vendrhub/vendr/issues/45)).

</changelog-group>
<changelog-group category="Changed">  

    
* Updated all caches to use a `GetOrAddIfNotNull` method to ensure null entities don't end up in the internal cache.


</changelog-group>
</changelog>

## v1.0.0  
**Date:** 2020-03-30  
**Description:** Initial Vendr release 