---
title: Changelog
description: Changelog for the Core Vendr product
---

## Unreleased  
--- 

<changelog>
<changelog-group category="Added">  

    
* Added ability to delete an order from the action menu
* Added permission checks to all entity controller actions

</changelog-group>
<changelog-group category="Fixed">  

    
* Fixed ability to delete orders


</changelog-group>
</changelog>

## v1.0.1 (2020-04-06) 
Patch fix release with minor fixes found post launch
--- 

<changelog>
<changelog-group category="Fixed">  

    
* Fixed wrong license URL displayed in installer
* Fixed stock input field not allowing a stock level greater than 100
* Fixed stock input field rounding decimal stock levels on save


</changelog-group>
<changelog-group category="Changed">  

    
* Updated all caches to use a `GetOrAddIfNotNull` method to ensure null entities don't end up in the internal cache


</changelog-group>
</changelog>

## v1.0.0 (2020-03-30) 
Initial Vendr release