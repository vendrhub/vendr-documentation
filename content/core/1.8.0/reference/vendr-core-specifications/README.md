---
title: Vendr.Core.Specifications
description: API reference for Vendr.Core.Specifications in Vendr, the eCommerce solution for Umbraco v8+
---
## Vendr.Core.Specifications namespace

| Public Type | Description |
| --- | --- |
| interface [IQuerySpecification&lt;T&gt;](iqueryspecification-1/) |  |
| interface [IQuerySpecificationVisitor&lt;T&gt;](iqueryspecificationvisitor-1/) |  |
| interface [ISortSpecification&lt;T&gt;](isortspecification-1/) |  |
| interface [ISortSpecificationVisitor&lt;T&gt;](isortspecificationvisitor-1/) |  |
| interface [ISpecification&lt;T&gt;](ispecification-1/) |  |
| abstract class [SortSpecificationBase&lt;T&gt;](sortspecificationbase-1/) |  |

## Vendr.Core.Specifications.Common.Implement namespace

| Public Type | Description |
| --- | --- |
| class [AndSpecification&lt;T&gt;](andspecification-1/) |  |
| class [NotSpecification&lt;T&gt;](notspecification-1/) |  |
| class [OrSpecification&lt;T&gt;](orspecification-1/) |  |
| class [ThenSpecification&lt;T&gt;](thenspecification-1/) |  |

## Vendr.Core.Specifications.GiftCard namespace

| Public Type | Description |
| --- | --- |
| interface [IGiftCardQuerySpecificationFactory](igiftcardqueryspecificationfactory/) |  |
| interface [IGiftCardSortSpecificationFactory](igiftcardsortspecificationfactory/) |  |
| interface [IGiftCardSpecificationVisitor](igiftcardspecificationvisitor/) |  |

## Vendr.Core.Specifications.GiftCard.Implement namespace

| Public Type | Description |
| --- | --- |
| class [GiftCardCreatedBetweenSpecification](giftcardcreatedbetweenspecification/) |  |
| class [GiftCardFromOrderSpecification](giftcardfromorderspecification/) |  |
| class [GiftCardFromStoreSpecification](giftcardfromstorespecification/) |  |
| class [GiftCardHasCodeSpecification](giftcardhascodespecification/) |  |
| class [GiftCardHasPropertySpecification](giftcardhaspropertyspecification/) |  |
| class [GiftCardInCurrencySpecification](giftcardincurrencyspecification/) |  |
| class [GiftCardQuerySpecificationFactory](giftcardqueryspecificationfactory/) |  |
| class [GiftCardSearchableFieldsMatchSpecification](giftcardsearchablefieldsmatchspecification/) |  |
| class [GiftCardSortByCreateDateSpecification](giftcardsortbycreatedatespecification/) |  |
| class [GiftCardSortByOrderNumberSpecification](giftcardsortbyordernumberspecification/) |  |
| class [GiftCardSortSpecificationFactory](giftcardsortspecificationfactory/) |  |

## Vendr.Core.Specifications.Order namespace

| Public Type | Description |
| --- | --- |
| interface [IOrderQuerySpecificationFactory](iorderqueryspecificationfactory/) |  |
| interface [IOrderSortSpecificationFactory](iordersortspecificationfactory/) |  |
| interface [IOrderSpecificationVisitor](iorderspecificationvisitor/) |  |

## Vendr.Core.Specifications.Order.Implement namespace

| Public Type | Description |
| --- | --- |
| class [OrderByCustomerSpecification](orderbycustomerspecification/) |  |
| class [OrderFromStoreSpecification](orderfromstorespecification/) |  |
| class [OrderHasCartNumberSpecification](orderhascartnumberspecification/) |  |
| class [OrderHasEmailAddressSpecification](orderhasemailaddressspecification/) |  |
| class [OrderHasOrderLinesSpecification](orderhasorderlinesspecification/) |  |
| class [OrderHasOrderLineWithProductSpecification](orderhasorderlinewithproductspecification/) |  |
| class [OrderHasOrderLineWithPropertySpecification](orderhasorderlinewithpropertyspecification/) |  |
| class [OrderHasOrderNumberSpecification](orderhasordernumberspecification/) |  |
| class [OrderHasOrderStatusSpecification](orderhasorderstatusspecification/) |  |
| class [OrderHasPaymentMethodSpecification](orderhaspaymentmethodspecification/) |  |
| class [OrderHasPaymentStatusSpecification](orderhaspaymentstatusspecification/) |  |
| class [OrderHasPropertySpecification](orderhaspropertyspecification/) |  |
| class [OrderHasShippingMethodSpecification](orderhasshippingmethodspecification/) |  |
| class [OrderInCurrencySpecification](orderincurrencyspecification/) |  |
| class [OrderIsDiscountedSpecification](orderisdiscountedspecification/) |  |
| class [OrderIsFinalizedSpecification](orderisfinalizedspecification/) |  |
| class [OrderLastUpdatedBetweenSpecification](orderlastupdatedbetweenspecification/) |  |
| class [OrderPlacedBetweenSpecification](orderplacedbetweenspecification/) |  |
| class [OrderQuerySpecificationFactory](orderqueryspecificationfactory/) |  |
| class [OrderRedeemsSpecification](orderredeemsspecification/) |  |
| class [OrderSearchableFieldsMatchSpecification](ordersearchablefieldsmatchspecification/) |  |
| class [OrderSortByCreateDateSpecification](ordersortbycreatedatespecification/) |  |
| class [OrderSortByFinalizedDateSpecification](ordersortbyfinalizeddatespecification/) |  |
| class [OrderSortByOrderNumberSpecification](ordersortbyordernumberspecification/) |  |
| class [OrderSortSpecificationFactory](ordersortspecificationfactory/) |  |

<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
