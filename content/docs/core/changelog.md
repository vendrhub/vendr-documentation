---
title: Changelog
description: Changelog for the Core Vendr product
---

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