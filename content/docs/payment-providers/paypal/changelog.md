---
title: Changelog
description: Changelog for the PayPal Payment Provider for Vendr, the eCommerce solution for Umbraco v8+
---

## v1.0.3  
**Date:** 2020-07-10  
**Description:** Patch release with minor bug fixes / enhancements 
--- 

<changelog>
<changelog-group category="Added">  

    
* Added support for listening for all Payment related webhooks to ensure the payment status is kept in sync.


</changelog-group>
<changelog-group category="Fixed">  

    
* Fixed bug where cancel action was actually capturing payment.


</changelog-group>
</changelog>

## v1.0.2  
**Date:** 2020-04-24  
**Description:** Patch release with minor bug fixes / enhancements 
--- 

<changelog>
<changelog-group category="Added">  

    
* Added check to ensure currency code is ISO4217 compatible.
* Added required meta data to Umbraco package file.


</changelog-group>
</changelog>

## v1.0.1  
**Date:** 2020-04-09  
**Description:** Change of PayPal settings  
--- 

<changelog>
<changelog-group category="Breaking">  

    
* Removed the mode dropdown in favour of a "Sandbox Mode" checkbox as this is the standard we have been implementing in other providers.


</changelog-group>
</changelog>

## v1.0.0  
**Date:** 2020-03-30  
**Description:** Initial Vendr PayPal Payment Provider release  
