---
title: Changelog
description: Changelog for the Core Vendr product
---

## v1.1.1  
**Date:** 2020-04-29  
**Description:** Patch fix release with minor bug fixes / enhancements.  
--- 

<changelog>
<changelog-group category="Fixed">  

    
* Fixed issue with v1.1.0 NuGet package not copying email templates to the Views folder 🤦‍♂️.


</changelog-group>
</changelog>

## v1.1.0 
**Date:** 2020-04-29  
**Description:** Minor release with new features and some minor bug fixes / enhancements.
--- 

<changelog>
<changelog-group category="Added">  

    
* Added "Unlimited" checkbox to discount codes to allow them to have unlimited usage ([#50](https://github.com/vendrhub/vendr/issues/50)).
* Added basic Order/Payment Status filters to Order list ([#63](https://github.com/vendrhub/vendr/issues/63)).
* Added "esc" key shortcut to close Discount rule/rewards settings editor dialog ([#60](https://github.com/vendrhub/vendr/issues/60)).
* Added feedback when copying order details to clipboard ([#22](https://github.com/vendrhub/vendr/issues/22)).
* Added new store entity picker property editor to merge together all store entity pickers. Tax Class picker is now obsolete in favour of this new picker.
* Added email templates for the default Confirmation / Error emails.


</changelog-group>
<changelog-group category="Fixed">  

    
* Fixed YSOD when accessing transaction info for an order where the Payment Provider no longer existed. Now perform null checks on data ([#58](https://github.com/vendrhub/vendr/issues/58)).
* Fixed issue with NuGet packages not copying content files on upgrade. Added a powershell script to perform the copy.
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
**Description:** Patch fix release with minor bug fixes / enhancements.
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
**Description:** Patch fix release with minor bug fixes / enhancements.
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
**Description:** Patch fix release with minor fixes found post launch.
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
**Description:** Initial Vendr release.