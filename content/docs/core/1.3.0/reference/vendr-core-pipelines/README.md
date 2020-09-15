---
title: Vendr.Core.Pipelines
description: API reference for Vendr.Core.Pipelines in Vendr, the eCommerce solution for Umbraco v8+
---
## Vendr.Core.Pipelines namespace

| Public Type | Description |
| --- | --- |
| class [CancelledPipelineException](cancelledpipelineexception/) |  |
| class [InProcPipelineInvoker](inprocpipelineinvoker/) |  |
| interface [IPipelineAction&lt;T&gt;](ipipelineaction-1/) |  |
| interface [IPipelineAction](ipipelineaction/) |  |
| interface [IPipelineBuilder&lt;TCollection,T&gt;](ipipelinebuilder-2/) |  |
| interface [IPipelineBuilder&lt;TCollection,T,TResult&gt;](ipipelinebuilder-3/) |  |
| interface [IPipelineBuilder](ipipelinebuilder/) |  |
| interface [IPipelineFactory](ipipelinefactory/) |  |
| interface [IPipelineInvoker](ipipelineinvoker/) |  |
| interface [IPipelineTask&lt;T&gt;](ipipelinetask-1/) |  |
| interface [IPipelineTask&lt;T,TResult&gt;](ipipelinetask-2/) |  |
| interface [IPipelineTask](ipipelinetask/) |  |
| interface [IPipelineTaskCollection&lt;T&gt;](ipipelinetaskcollection-1/) |  |
| interface [IPipelineTaskCollection&lt;T,TResult&gt;](ipipelinetaskcollection-2/) |  |
| interface [IPipelineTaskCollection](ipipelinetaskcollection/) |  |
| interface [IPiplineTask](ipiplinetask/) |  |
| class [Pipeline](pipeline/) |  |
| class [PipelineArgs&lt;T&gt;](pipelineargs-1/) |  |
| class [PipelineArgs](pipelineargs/) |  |
| class [PipelineBuilder&lt;TCollection,TItem&gt;](pipelinebuilder-2/) |  |
| class [PipelineBuilder&lt;TCollection,TItem,TResult&gt;](pipelinebuilder-3/) |  |
| class [PipelineException](pipelineexception/) |  |
| class [PipelineFactory](pipelinefactory/) |  |
| class [PipelineResult&lt;TResult&gt;](pipelineresult-1/) |  |
| class [PipelineResult](pipelineresult/) |  |
| abstract class [PipelineTaskBase&lt;T&gt;](pipelinetaskbase-1/) |  |
| abstract class [PipelineTaskBase&lt;T,TResult&gt;](pipelinetaskbase-2/) |  |
| abstract class [PipelineTaskBase](pipelinetaskbase/) |  |
| class [PipelineTaskCollection&lt;T&gt;](pipelinetaskcollection-1/) |  |
| class [PipelineTaskCollection&lt;T,TResult&gt;](pipelinetaskcollection-2/) |  |
| abstract class [PipelineTaskWithTypedArgsBase&lt;TArgs,T&gt;](pipelinetaskwithtypedargsbase-2/) |  |
| abstract class [PipelineTaskWithTypedArgsBase&lt;TArgs,T,TResult&gt;](pipelinetaskwithtypedargsbase-3/) |  |
| abstract class [RaiseNotificationEventTaskBase&lt;TModel&gt;](raisenotificationeventtaskbase-1/) |  |
| abstract class [RaiseNotificationEventTaskBase&lt;TEvent,TModel&gt;](raisenotificationeventtaskbase-2/) |  |
| abstract class [SubPipelineTaskBase&lt;TPipeline,TItem&gt;](subpipelinetaskbase-2/) |  |
| class [ValidationPipelineException](validationpipelineexception/) |  |

## Vendr.Core.Pipelines.Email namespace

| Public Type | Description |
| --- | --- |
| class [EmailSendPipelineArgs](emailsendpipelineargs/) |  |
| class [SendEmailPipeline](sendemailpipeline/) |  |

## Vendr.Core.Pipelines.Email.Tasks namespace

| Public Type | Description |
| --- | --- |
| class [ConstructEmailMessageTask](constructemailmessagetask/) |  |
| class [RaiseFailedEventTask](raisefailedeventtask/) |  |
| class [RaiseSendingEventTask](raisesendingeventtask/) |  |
| class [RaiseSentEventTask](raisesenteventtask/) |  |
| class [RenderEmailTemplateTask](renderemailtemplatetask/) |  |
| class [ReplaceEmailTokens](replaceemailtokens/) |  |
| class [SendSmtpEmailTask](sendsmtpemailtask/) |  |

## Vendr.Core.Pipelines.Order namespace

| Public Type | Description |
| --- | --- |
| class [CalculateOrderDiscountedPricesPipeline](calculateorderdiscountedpricespipeline/) |  |
| class [CalculateOrderGiftCardsPipeline](calculateordergiftcardspipeline/) |  |
| class [CalculateOrderPipeline](calculateorderpipeline/) |  |
| class [CalculateOrderPricesPipeline](calculateorderpricespipeline/) |  |
| class [CalculateOrderTaxRatesPipeline](calculateordertaxratespipeline/) |  |
| class [CalculateOrderTotalPricePipeline](calculateordertotalpricepipeline/) |  |
| class [LimitOrderDiscountsPipeline](limitorderdiscountspipeline/) |  |
| class [OrderCalculationPipelineArgs](ordercalculationpipelineargs/) |  |

## Vendr.Core.Pipelines.Order.Tasks namespace

| Public Type | Description |
| --- | --- |
| class [CalculateOrderDiscountedPricesTask](calculateorderdiscountedpricestask/) |  |
| class [CalculateOrderDiscountsTask](calculateorderdiscountstask/) |  |
| class [CalculateOrderGiftCardAmountsTask](calculateordergiftcardamountstask/) |  |
| class [CalculateOrderGiftCardsTask](calculateordergiftcardstask/) |  |
| class [CalculateOrderLineDiscountedPricesTask](calculateorderlinediscountedpricestask/) |  |
| class [CalculateOrderLinePricesTask](calculateorderlinepricestask/) |  |
| class [CalculateOrderLineTaxRatesTask](calculateorderlinetaxratestask/) |  |
| class [CalculateOrderPaymentTaxRateTask](calculateorderpaymenttaxratetask/) |  |
| class [CalculateOrderPaymentTotalPriceDiscountTask](calculateorderpaymenttotalpricediscounttask/) |  |
| class [CalculateOrderPaymentTotalPriceValueTask](calculateorderpaymenttotalpricevaluetask/) |  |
| class [CalculateOrderPaymentTotalPriceWithoutDiscountsTask](calculateorderpaymenttotalpricewithoutdiscountstask/) |  |
| class [CalculateOrderPricesTask](calculateorderpricestask/) |  |
| class [CalculateOrderShippingTaxRateTask](calculateordershippingtaxratetask/) |  |
| class [CalculateOrderShippingTotalPriceDiscountTask](calculateordershippingtotalpricediscounttask/) |  |
| class [CalculateOrderShippingTotalPriceValueTask](calculateordershippingtotalpricevaluetask/) |  |
| class [CalculateOrderShippingTotalPriceWithoutDiscountsTask](calculateordershippingtotalpricewithoutdiscountstask/) |  |
| class [CalculateOrderSubtotalPriceDiscountTask](calculateordersubtotalpricediscounttask/) |  |
| class [CalculateOrderSubtotalPricePreviousDiscountsTask](calculateordersubtotalpricepreviousdiscountstask/) |  |
| class [CalculateOrderSubtotalPriceTotalDiscountTask](calculateordersubtotalpricetotaldiscounttask/) |  |
| class [CalculateOrderSubtotalPriceValueTask](calculateordersubtotalpricevaluetask/) |  |
| class [CalculateOrderSubtotalPriceWithoutDiscountsTask](calculateordersubtotalpricewithoutdiscountstask/) |  |
| class [CalculateOrderSubtotalPriceWithPreviousDiscountsTask](calculateordersubtotalpricewithpreviousdiscountstask/) |  |
| class [CalculateOrderTaxRatesTask](calculateordertaxratestask/) |  |
| class [CalculateOrderTaxRateTask](calculateordertaxratetask/) |  |
| class [CalculateOrderTotalPriceDiscountTask](calculateordertotalpricediscounttask/) |  |
| class [CalculateOrderTotalPriceGiftCardsAmountTask](calculateordertotalpricegiftcardsamounttask/) |  |
| class [CalculateOrderTotalPricePreviousDiscountTask](calculateordertotalpricepreviousdiscounttask/) |  |
| class [CalculateOrderTotalPriceTask](calculateordertotalpricetask/) |  |
| class [CalculateOrderTotalPriceTotalDiscountTask](calculateordertotalpricetotaldiscounttask/) |  |
| class [CalculateOrderTotalPriceValueTask](calculateordertotalpricevaluetask/) |  |
| class [CalculateOrderTotalPriceWithDiscountsTask](calculateordertotalpricewithdiscountstask/) |  |
| class [CalculateOrderTotalPriceWithoutDiscountTask](calculateordertotalpricewithoutdiscounttask/) |  |
| class [CalculateOrderTotalPriceWithPreviousDiscountsTask](calculateordertotalpricewithpreviousdiscountstask/) |  |
| class [LimitOrderDiscountsTask](limitorderdiscountstask/) |  |
| class [LimitOrderLineDiscountsTask](limitorderlinediscountstask/) |  |
| class [LimitOrderPaymentTotalPriceDiscountsTask](limitorderpaymenttotalpricediscountstask/) |  |
| class [LimitOrderShippingTotalPriceDiscountsTask](limitordershippingtotalpricediscountstask/) |  |
| class [LimitOrderSubtotalPriceDiscountsTask](limitordersubtotalpricediscountstask/) |  |
| class [LimitOrderTotalPriceDiscountsTask](limitordertotalpricediscountstask/) |  |
| abstract class [OrderLinesCalculationPipelineTaskBase&lt;TOrderLinePipeline&gt;](orderlinescalculationpipelinetaskbase-1/) |  |
| class [ResovleOrderCalculationDependenciesTask](resovleordercalculationdependenciestask/) |  |

## Vendr.Core.Pipelines.OrderLine namespace

| Public Type | Description |
| --- | --- |
| class [CalculateOrderLineDiscountedPricesPipeline](calculateorderlinediscountedpricespipeline/) |  |
| class [CalculateOrderLinePricesPipeline](calculateorderlinepricespipeline/) |  |
| class [CalculateOrderLineTaxRatesPipeline](calculateorderlinetaxratespipeline/) |  |
| class [LimitOrderLineDiscountsPipeline](limitorderlinediscountspipeline/) |  |
| class [OrderLineCalculationPipelineArgs](orderlinecalculationpipelineargs/) |  |

## Vendr.Core.Pipelines.OrderLine.Tasks namespace

| Public Type | Description |
| --- | --- |
| class [CalculateOrderLineDiscountedPricesTask](calculateorderlinediscountedpricestask/) |  |
| class [CalculateOrderLineTaxRateTask](calculateorderlinetaxratetask/) |  |
| class [CalculateOrderLineTotalPriceDiscountTask](calculateorderlinetotalpricediscounttask/) |  |
| class [CalculateOrderLineTotalPricePreviousDiscountsTask](calculateorderlinetotalpricepreviousdiscountstask/) |  |
| class [CalculateOrderLineTotalPriceTotalDiscountTask](calculateorderlinetotalpricetotaldiscounttask/) |  |
| class [CalculateOrderLineTotalPriceValueTask](calculateorderlinetotalpricevaluetask/) |  |
| class [CalculateOrderLineTotalPriceWithoutDiscountsTask](calculateorderlinetotalpricewithoutdiscountstask/) |  |
| class [CalculateOrderLineTotalPriceWithPreviousDiscountsTask](calculateorderlinetotalpricewithpreviousdiscountstask/) |  |
| class [CalculateOrderLineUnitPriceDiscountTask](calculateorderlineunitpricediscounttask/) |  |
| class [CalculateOrderLineUnitPriceValueTask](calculateorderlineunitpricevaluetask/) |  |
| class [CalculateOrderLineUnitPriceWithoutDiscountsTask](calculateorderlineunitpricewithoutdiscountstask/) |  |
| class [CalculateSubOrderLineDiscountedPricesTask](calculatesuborderlinediscountedpricestask/) |  |
| class [CalculateSubOrderLinePricesTask](calculatesuborderlinepricestask/) |  |
| class [CalculateSubOrderLineTaxRatesTask](calculatesuborderlinetaxratestask/) |  |
| class [LimitOrderLineTotalPriceDiscountsTask](limitorderlinetotalpricediscountstask/) |  |
| class [LimitOrderLineUnitPriceDiscountsTask](limitorderlineunitpricediscountstask/) |  |
| class [LimitSubOrderLineDiscountsTask](limitsuborderlinediscountstask/) |  |
| class [SubOrderLinesCalculationPipelineBase&lt;TSubOrderLinePipeline&gt;](suborderlinescalculationpipelinebase-1/) |  |

## Vendr.Core.Pipelines.Store namespace

| Public Type | Description |
| --- | --- |
| class [InitStorePipeline](initstorepipeline/) |  |
| class [InitStorePipelineArgs](initstorepipelineargs/) |  |

## Vendr.Core.Pipelines.Store.Tasks namespace

| Public Type | Description |
| --- | --- |
| class [CreateDefaultCountryTask](createdefaultcountrytask/) |  |
| class [CreateDefaultCurrencyTask](createdefaultcurrencytask/) |  |
| class [CreateDefaultEmailTemplatesTask](createdefaultemailtemplatestask/) |  |
| class [CreateDefaultOrderStatusesTask](createdefaultorderstatusestask/) |  |
| class [CreateDefaultPaymentMethodTask](createdefaultpaymentmethodtask/) |  |
| class [CreateDefaultShippingMethodTask](createdefaultshippingmethodtask/) |  |
| class [CreateDefaultTaxClassTask](createdefaulttaxclasstask/) |  |
| class [SetDefaultCountryDefaultsTask](setdefaultcountrydefaultstask/) |  |

<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
