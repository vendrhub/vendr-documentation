---
title: Vendr.Core.Models
description: API reference for Vendr.Core.Models in Vendr, the eCommerce solution for Umbraco v8+
---
## Vendr.Core.Models namespace

| Public Type | Description |
| --- | --- |
| enum [AdjustmentType](adjustmenttype/) |  |
| abstract class [AggregateBase&lt;TReadOnlySelf,TWritableSelf,TState&gt;](aggregatebase-3/) | The base class of an aggregate entity |
| abstract class [AggregateStateBase](aggregatestatebase/) |  |
| class [AllowedCountry](allowedcountry/) |  |
| class [AllowedCountryRegion](allowedcountryregion/) |  |
| class [AllowedUser](alloweduser/) |  |
| class [AllowedUserRole](alloweduserrole/) |  |
| class [Amount](amount/) | A Vendr amount object |
| class [AppliedDiscount](applieddiscount/) |  |
| class [AppliedDiscountCode](applieddiscountcode/) |  |
| class [AppliedGiftCard](appliedgiftcard/) |  |
| class [ChangingValue&lt;T&gt;](changingvalue-1/) |  |
| enum [ComparisonOperator](comparisonoperator/) |  |
| class [Country](country/) |  |
| class [CountryReadOnly](countryreadonly/) |  |
| class [CountryRegionTaxRate](countryregiontaxrate/) |  |
| class [Currency](currency/) |  |
| class [CurrencyFormatter](currencyformatter/) |  |
| class [CurrencyReadOnly](currencyreadonly/) |  |
| class [Discount](discount/) |  |
| class [DiscountCode](discountcode/) |  |
| class [DiscountedPrice](discountedprice/) |  |
| class [DiscountReadOnly](discountreadonly/) |  |
| class [DiscountRewardConfig](discountrewardconfig/) |  |
| class [DiscountRuleConfig](discountruleconfig/) |  |
| enum [DiscountStatus](discountstatus/) |  |
| enum [DiscountType](discounttype/) |  |
| class [EmailContext](emailcontext/) |  |
| class [EmailTemplate](emailtemplate/) |  |
| enum [EmailTemplateCategory](emailtemplatecategory/) |  |
| class [EmailTemplateReadOnly](emailtemplatereadonly/) |  |
| abstract class [EntityBase&lt;TState&gt;](entitybase-1/) | Base class for a Vendr entity |
| abstract class [EntityBase](entitybase/) | Base class for a Vendr entity |
| abstract class [EntityStateBase](entitystatebase/) |  |
| class [FormattedAmount](formattedamount/) | A Vendr amount formatted for the given amount [`Currency`](vendr-core-models/currency/) |
| class [FormattedPrice](formattedprice/) | A Vendr price formatted for the given prices [`Currency`](vendr-core-models/currency/) |
| class [FreezablePrice](freezableprice/) |  |
| class [FrozenPrice](frozenprice/) |  |
| class [FulfilledDiscount](fulfilleddiscount/) |  |
| class [GiftCard](giftcard/) |  |
| enum [GiftCardActivationMethod](giftcardactivationmethod/) |  |
| class [GiftCardReadOnly](giftcardreadonly/) |  |
| enum [GiftCardStatus](giftcardstatus/) |  |
| interface [IAmount](iamount/) |  |
| interface [IChangingValue](ichangingvalue/) |  |
| interface [IDeletable](ideletable/) |  |
| interface [IHasName](ihasname/) |  |
| interface [IHasReadableAllowedCountries](ihasreadableallowedcountries/) |  |
| interface [IHasReadableAllowedCountryRegions](ihasreadableallowedcountryregions/) |  |
| interface [IHasReadableOrderLines](ihasreadableorderlines/) |  |
| interface [IHasReadableProperties](ihasreadableproperties/) |  |
| interface [IHasReadableServicePrices](ihasreadableserviceprices/) |  |
| interface [IHasStore](ihasstore/) |  |
| interface [IHasWritableServicePrices&lt;TAggregate&gt;](ihaswritableserviceprices-1/) |  |
| interface [IHasWrtiableAllowedCountries&lt;TAggregate&gt;](ihaswrtiableallowedcountries-1/) |  |
| interface [IHasWrtiableAllowedCountryRegions&lt;TAggregate&gt;](ihaswrtiableallowedcountryregions-1/) |  |
| interface [IPrice](iprice/) |  |
| interface [IProductSnapshot](iproductsnapshot/) |  |
| class [Iso3166Country](iso3166country/) |  |
| class [Iso3166CountryRegion](iso3166countryregion/) |  |
| static class [Iso4217](iso4217/) |  |
| interface [ISortable](isortable/) |  |
| class [LazyProperty](lazyproperty/) |  |
| enum [MatchType](matchtype/) |  |
| class [Order](order/) | A Vendr writable Order entity |
| class [OrderCalculation](ordercalculation/) |  |
| class [OrderCustomerInfo](ordercustomerinfo/) | The customer information for a Vendr order |
| class [OrderLineCalculation](orderlinecalculation/) |  |
| enum [OrderLinePriceType](orderlinepricetype/) |  |
| class [OrderLineReadOnly](orderlinereadonly/) | A Vendr read only Order Line entity |
| class [OrderLineTotalPrice](orderlinetotalprice/) |  |
| class [OrderLineUnitPrice](orderlineunitprice/) |  |
| class [OrderPaymentInfo](orderpaymentinfo/) | The payment information for a Vendr order |
| enum [OrderPriceType](orderpricetype/) |  |
| class [OrderReadOnly](orderreadonly/) | A Vendr read only Order entity |
| class [OrderShippingInfo](ordershippinginfo/) | The shipping information for a Vendr order |
| class [OrderStatus](orderstatus/) |  |
| enum [OrderStatusCode](orderstatuscode/) |  |
| class [OrderStatusReadOnly](orderstatusreadonly/) |  |
| class [OrderSubtotalPrice](ordersubtotalprice/) |  |
| class [OrderTotalPrice](ordertotalprice/) |  |
| class [OrderTransactionInfo](ordertransactioninfo/) | The transaction information for a Vendr order |
| class [PagedResult&lt;T&gt;](pagedresult-1/) | Represents a paged result for a model collection |
| abstract class [PagedResultBase](pagedresultbase/) | Represents a paged result for a model collection |
| class [PaymentMethod](paymentmethod/) |  |
| class [PaymentMethodReadOnly](paymentmethodreadonly/) |  |
| enum [PaymentStatus](paymentstatus/) |  |
| class [Price](price/) | A Vendr price object |
| enum [PriceAmountType](priceamounttype/) |  |
| class [ProductPrice](productprice/) |  |
| abstract class [ProductSnapshotBase](productsnapshotbase/) |  |
| enum [PropertySource](propertysource/) |  |
| class [PropertyValue](propertyvalue/) |  |
| class [ReadOnlyDiscountedPrice](readonlydiscountedprice/) |  |
| class [ReadOnlyOrderLineTotalPrice](readonlyorderlinetotalprice/) |  |
| class [ReadOnlyOrderLineUnitPrice](readonlyorderlineunitprice/) |  |
| class [ReadOnlyOrderSubtotalPrice](readonlyordersubtotalprice/) |  |
| class [ReadOnlyOrderTotalPrice](readonlyordertotalprice/) |  |
| class [ReadOnlyTotalPrice](readonlytotalprice/) |  |
| class [ReadOnlyTotalPriceWithPreviousDiscount](readonlytotalpricewithpreviousdiscount/) |  |
| class [Region](region/) |  |
| class [RegionReadOnly](regionreadonly/) |  |
| class [ServicePrice](serviceprice/) |  |
| enum [SetBehavior](setbehavior/) |  |
| class [ShippingMethod](shippingmethod/) |  |
| class [ShippingMethodReadOnly](shippingmethodreadonly/) |  |
| class [Store](store/) |  |
| abstract class [StoreAggregateBase&lt;TReadOnlySelf,TWritableSelf,TState&gt;](storeaggregatebase-3/) | The base class of [`Store`](vendr-core-models/store/) based aggregate entity |
| abstract class [StoreAggregateStateBase](storeaggregatestatebase/) |  |
| abstract class [StoreEntityStateBase](storeentitystatebase/) |  |
| class [StoreReadOnly](storereadonly/) |  |
| class [TaxClass](taxclass/) |  |
| class [TaxClassReadOnly](taxclassreadonly/) |  |
| class [TaxRate](taxrate/) |  |
| class [TaxSource](taxsource/) |  |
| class [TotalPrice](totalprice/) |  |
| class [TotalPriceWithPreviousDiscount](totalpricewithpreviousdiscount/) |  |
| abstract class [ValueObjectBase](valueobjectbase/) | Base class for an immutable Vendr value object |
| abstract class [VendrSettingDefinition](vendrsettingdefinition/) |  |

<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
