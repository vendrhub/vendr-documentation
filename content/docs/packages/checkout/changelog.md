---
title: Changelog
description: Changelog for the Checkout package for Vendr, the eCommerce solution for Umbraco v8+
---

## 1.1.4 
**Date:** 2020-06-12  
**Description:** Path release with minor bug fixes / enhancements 
---  

<changelog>
<changelog-group category="Changed">  

* Fixed more null reference exceptions in the SyncZeroValuePaymentProviderContinueUrl logic.

</changelog-group>
</changelog>

## 1.1.3 
**Date:** 2020-06-10  
**Description:** Path release with minor bug fixes / enhancements 
---  

<changelog>
<changelog-group category="Changed">  

* Removed the use of instant.pages as it's not relevant for the checkout process.

</changelog-group>
</changelog>

## 1.1.2 
**Date:** 2020-06-05  
**Description:** Path release with minor bug fixes / enhancements 
---  

<changelog>
<changelog-group category="Added">  

* Added anti-forgery tokens to http post requests.
* Added IP Address to order properties.
* Added the ability to customize the root path of the view helper so that you can change where views are searched for.

</changelog-group>
<changelog-group category="Fixed">  

* Fixed some null reference exceptions in the SyncZeroValuePaymentProviderContinueUrl logic.

</changelog-group>
</changelog>

## 1.1.1 
**Date:** 2020-06-02  
**Description:** Path release with minor bug fixes / enhancements 
---  

<changelog>
<changelog-group category="Fixed">  

* Fixed issue with 1.1.0 release having the wrong Vendr NuGet dependency.

</changelog-group>
</changelog>

## 1.1.0 
**Date:** 2020-06-02  
**Description:** Minor release with new features and some minor bug fixes / enhancements 
---  

<changelog>
<changelog-group category="Added">  

* Added gift cards support.

</changelog-group>
<changelog-group category="Changed">  

* Improved install script to try and add any missing doc type properties if the doc type already exists.
* Improved install script to try and add any missing data type settings if the data type already exists.

</changelog-group>
</changelog>

## 1.0.0 
**Date:** 2020-05-08  
**Description:** Initial release of the Vendr Checkout Package  