---
title: Vendr.Core.Models
description: API reference for Vendr.Core.Models in Vendr, the eCommerce solution for Umbraco v8+
---
## Vendr.Core.Models namespace

| Public Type | Description |
| --- | --- |
| class [ActivityLogEntry](activitylogentry/) |  |
| class [AdjustedAmount](adjustedamount/) |  |
| class [AdjustedPrice](adjustedprice/) |  |
| static class [AdjustedPriceExtensions](adjustedpriceextensions/) | Extensions methods for DiscountedPrice entities |
| enum [AdjustmentType](adjustmenttype/) |  |
| abstract class [AggregateBase&lt;TReadOnlySelf,TWritableSelf,TState&gt;](aggregatebase-3/) | The base class of an aggregate entity |
| abstract class [AggregateStateBase](aggregatestatebase/) |  |
| abstract class [AliasNamePair](aliasnamepair/) | Represents an Alias + Name combination |
| class [AllowedCountry](allowedcountry/) |  |
| class [AllowedCountryRegion](allowedcountryregion/) |  |
| class [AllowedProductAttribute](allowedproductattribute/) |  |
| class [AllowedUser](alloweduser/) |  |
| class [AllowedUserRole](alloweduserrole/) |  |
| class [Amount](amount/) | A Vendr amount object |
| abstract class [AmountAdjustment&lt;TSelf&gt;](amountadjustment-1/) |  |
| abstract class [AmountAdjustment](amountadjustment/) |  |
| class [AppliedDiscountCode](applieddiscountcode/) |  |
| class [AppliedGiftCard](appliedgiftcard/) |  |
| class [AttributeCombination](attributecombination/) |  |
| class [AttributeName](attributename/) |  |
| class [AttributeValue](attributevalue/) |  |
| class [ChangingValue&lt;T&gt;](changingvalue-1/) |  |
| enum [ComparisonOperator](comparisonoperator/) |  |
| class [Country](country/) |  |
| class [CountryReadOnly](countryreadonly/) |  |
| class [CountryRegionTaxRate](countryregiontaxrate/) |  |
| class [Currency](currency/) |  |
| static class [CurrencyExtensions](currencyextensions/) |  |
| class [CurrencyFormatter](currencyformatter/) |  |
| class [CurrencyReadOnly](currencyreadonly/) |  |
| class [Discount](discount/) |  |
| class [DiscountAdjustment](discountadjustment/) |  |
| class [DiscountCode](discountcode/) |  |
| class [DiscountReadOnly](discountreadonly/) |  |
| class [DiscountRewardConfig](discountrewardconfig/) |  |
| class [DiscountRuleConfig](discountruleconfig/) |  |
| enum [DiscountStatus](discountstatus/) |  |
| enum [DiscountType](discounttype/) |  |
| class [EmailContext](emailcontext/) |  |
| class [EmailTemplate](emailtemplate/) |  |
| class [EmailTemplateReadOnly](emailtemplatereadonly/) |  |
| abstract class [EntityBase&lt;TState&gt;](entitybase-1/) | Base class for a Vendr entity |
| abstract class [EntityBase](entitybase/) | Base class for a Vendr entity |
| abstract class [EntityStateBase](entitystatebase/) |  |
| enum [ExportStrategy](exportstrategy/) |  |
| class [ExportTemplate](exporttemplate/) |  |
| class [ExportTemplateReadOnly](exporttemplatereadonly/) |  |
| class [FormattedAmount](formattedamount/) | A Vendr amount formatted for the given amount [`Currency`](vendr-core-models/currency/) |
| class [FormattedPrice](formattedprice/) | A Vendr price formatted for the given prices [`Currency`](vendr-core-models/currency/) |
| class [FormattedValue&lt;TValue&gt;](formattedvalue-1/) |  |
| class [FreezablePrice](freezableprice/) |  |
| class [FrozenPrice](frozenprice/) |  |
| class [FulfilledDiscount](fulfilleddiscount/) |  |
| class [GiftCard](giftcard/) |  |
| enum [GiftCardActivationMethod](giftcardactivationmethod/) |  |
| class [GiftCardAdjustment](giftcardadjustment/) |  |
| class [GiftCardReadOnly](giftcardreadonly/) |  |
| enum [GiftCardStatus](giftcardstatus/) |  |
| interface [IAmount](iamount/) |  |
| interface [IChangingValue](ichangingvalue/) |  |
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
| class [InUseProductAttribute](inuseproductattribute/) |  |
| class [InUseProductAttributeValue](inuseproductattributevalue/) |  |
| interface [IPrice](iprice/) |  |
| interface [IProductSnapshot](iproductsnapshot/) |  |
| class [Iso3166Country](iso3166country/) |  |
| class [Iso3166CountryRegion](iso3166countryregion/) |  |
| static class [Iso4217](iso4217/) |  |
| interface [ISoftDeletable](isoftdeletable/) |  |
| interface [ISortable](isortable/) |  |
| class [LazyProperty](lazyproperty/) |  |
| enum [MatchType](matchtype/) |  |
| class [Order](order/) | A Vendr writable Order entity |
| class [OrderCalculation](ordercalculation/) |  |
| class [OrderCustomerInfo](ordercustomerinfo/) | The customer information for a Vendr order |
| class [OrderLineCalculation](orderlinecalculation/) |  |
| enum [OrderLinePriceType](orderlinepricetype/) |  |
| class [OrderLineReadOnly](orderlinereadonly/) | A Vendr read only Order Line entity |
| enum [OrderLineSource](orderlinesource/) |  |
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
| class [OrderTransactionAmount](ordertransactionamount/) |  |
| class [OrderTransactionInfo](ordertransactioninfo/) | The transaction information for a Vendr order |
| class [PagedResult&lt;T&gt;](pagedresult-1/) | Represents a paged result for a model collection |
| abstract class [PagedResultBase](pagedresultbase/) | Represents a paged result for a model collection |
| class [PaymentMethod](paymentmethod/) |  |
| class [PaymentMethodReadOnly](paymentmethodreadonly/) |  |
| enum [PaymentStatus](paymentstatus/) |  |
| class [Price](price/) | A Vendr price object |
| abstract class [PriceAdjustment&lt;TSelf&gt;](priceadjustment-1/) |  |
| abstract class [PriceAdjustment](priceadjustment/) |  |
| enum [PriceAmountType](priceamounttype/) |  |
| class [PrintTemplate](printtemplate/) |  |
| class [PrintTemplateReadOnly](printtemplatereadonly/) |  |
| class [ProductAttribute](productattribute/) | A Vendr Product Attribute entity |
| class [ProductAttributePreset](productattributepreset/) |  |
| class [ProductAttributePresetReadOnly](productattributepresetreadonly/) | A Vendr read only Product Attribute Preset entity |
| class [ProductAttributeReadOnly](productattributereadonly/) | A Vendr read only Product Attribute entity |
| class [ProductAttributeValueReadOnly](productattributevaluereadonly/) |  |
| class [ProductPrice](productprice/) |  |
| abstract class [ProductSnapshotBase](productsnapshotbase/) |  |
| class [ProductVariantCollection](productvariantcollection/) |  |
| class [ProductVariantConfig](productvariantconfig/) |  |
| class [ProductVariantItem](productvariantitem/) |  |
| class [Property](property/) |  |
| enum [PropertySource](propertysource/) |  |
| class [PropertyValue](propertyvalue/) |  |
| class [ReadOnlyAdjustedAmount](readonlyadjustedamount/) |  |
| class [ReadOnlyAdjustedPrice](readonlyadjustedprice/) |  |
| class [ReadOnlyOrderLineTotalPrice](readonlyorderlinetotalprice/) |  |
| class [ReadOnlyOrderLineUnitPrice](readonlyorderlineunitprice/) |  |
| class [ReadOnlyOrderSubtotalPrice](readonlyordersubtotalprice/) |  |
| class [ReadOnlyOrderTotalPrice](readonlyordertotalprice/) |  |
| class [ReadOnlyOrderTransactionAmount](readonlyordertransactionamount/) |  |
| class [ReadOnlyTotalPrice](readonlytotalprice/) |  |
| class [ReadOnlyTotalPriceWithPreviousAdjustment](readonlytotalpricewithpreviousadjustment/) |  |
| class [ReadOnlyTranslatedValue&lt;T&gt;](readonlytranslatedvalue-1/) |  |
| class [Region](region/) |  |
| class [RegionReadOnly](regionreadonly/) |  |
| class [RegisteredCustomerInfo](registeredcustomerinfo/) |  |
| class [RegisteredCustomerInfoBuilder](registeredcustomerinfobuilder/) |  |
| class [ServicePrice](serviceprice/) |  |
| enum [SetBehavior](setbehavior/) |  |
| class [ShippingMethod](shippingmethod/) |  |
| class [ShippingMethodReadOnly](shippingmethodreadonly/) |  |
| enum [Sort](sort/) |  |
| class [Store](store/) |  |
| abstract class [StoreAggregateBase&lt;TReadOnlySelf,TWritableSelf,TState&gt;](storeaggregatebase-3/) | The base class of [`Store`](vendr-core-models/store/) based aggregate entity |
| abstract class [StoreAggregateStateBase](storeaggregatestatebase/) |  |
| abstract class [StoreEntityStateBase](storeentitystatebase/) |  |
| class [StoreReadOnly](storereadonly/) |  |
| enum [StringComparisonType](stringcomparisontype/) |  |
| class [TaxClass](taxclass/) |  |
| class [TaxClassReadOnly](taxclassreadonly/) |  |
| class [TaxRate](taxrate/) |  |
| class [TaxSource](taxsource/) |  |
| enum [TemplateCategory](templatecategory/) |  |
| class [TotalPrice](totalprice/) |  |
| class [TotalPriceWithPreviousAdjustment](totalpricewithpreviousadjustment/) |  |
| class [TranslatedValue&lt;T&gt;](translatedvalue-1/) |  |
| class [ValidationError](validationerror/) |  |
| abstract class [ValueObjectBase](valueobjectbase/) | Base class for an immutable Vendr value object |
| abstract class [VendrSettingDefinition](vendrsettingdefinition/) |  |

## Vendr.Core.Models.Reporting namespace

| Public Type | Description |
| --- | --- |
| class [CartConversionRateData](cartconversionratedata/) |  |
| class [CartConversionRatesReportData](cartconversionratesreportdata/) |  |
| class [CartTotals](carttotals/) |  |
| class [DateRecord&lt;TValue&gt;](daterecord-1/) |  |
| class [DateReportData&lt;TValue&gt;](datereportdata-1/) |  |
| class [ProductSalesData](productsalesdata/) |  |
| class [ProductSalesReportData](productsalesreportdata/) |  |
| class [RepeatCustomerRates](repeatcustomerrates/) |  |
| class [RepeatCustomerRatesReportData](repeatcustomerratesreportdata/) |  |

<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
