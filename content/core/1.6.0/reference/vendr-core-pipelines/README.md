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
| class [CalculateOrderAdjustedPricesPipeline](calculateorderadjustedpricespipeline/) |  |
| class [CalculateOrderAdjustedTransactionAmountPipeline](calculateorderadjustedtransactionamountpipeline/) |  |
| class [CalculateOrderPipeline](calculateorderpipeline/) |  |
| class [CalculateOrderPricesPipeline](calculateorderpricespipeline/) |  |
| class [CalculateOrderTaxRatesPipeline](calculateordertaxratespipeline/) |  |
| class [CalculateOrderTotalPricePipeline](calculateordertotalpricepipeline/) |  |
| class [CalculateOrderTotalTransactionAmountPipeline](calculateordertotaltransactionamountpipeline/) |  |
| class [CalculateOrderTransactionAmountPipeline](calculateordertransactionamountpipeline/) |  |
| class [LimitOrderDiscountsPipeline](limitorderdiscountspipeline/) |  |
| class [OrderCalculationPipelineArgs](ordercalculationpipelineargs/) |  |

## Vendr.Core.Pipelines.Order.Tasks namespace

| Public Type | Description |
| --- | --- |
| class [ApplyOrderAmountAdjustmentsTask](applyorderamountadjustmentstask/) |  |
| class [ApplyOrderPriceAdjustmentsTask](applyorderpriceadjustmentstask/) |  |
| class [CalculateOrderAdjustedPricesTask](calculateorderadjustedpricestask/) |  |
| class [CalculateOrderAdjustedTransactionAmountTask](calculateorderadjustedtransactionamounttask/) |  |
| class [CalculateOrderLineAdjustedPricesTask](calculateorderlineadjustedpricestask/) |  |
| class [CalculateOrderLinePricesTask](calculateorderlinepricestask/) |  |
| class [CalculateOrderLineTaxRatesTask](calculateorderlinetaxratestask/) |  |
| class [CalculateOrderPaymentTaxRateTask](calculateorderpaymenttaxratetask/) |  |
| class [CalculateOrderPaymentTotalPriceAdjustmentTask](calculateorderpaymenttotalpriceadjustmenttask/) |  |
| class [CalculateOrderPaymentTotalPriceValueTask](calculateorderpaymenttotalpricevaluetask/) |  |
| class [CalculateOrderPaymentTotalPriceWithoutAdjustmentsTask](calculateorderpaymenttotalpricewithoutadjustmentstask/) |  |
| class [CalculateOrderPricesTask](calculateorderpricestask/) |  |
| class [CalculateOrderShippingTaxRateTask](calculateordershippingtaxratetask/) |  |
| class [CalculateOrderShippingTotalPriceAdjustmentTask](calculateordershippingtotalpriceadjustmenttask/) |  |
| class [CalculateOrderShippingTotalPriceValueTask](calculateordershippingtotalpricevaluetask/) |  |
| class [CalculateOrderShippingTotalPriceWithoutAdjustmentsTask](calculateordershippingtotalpricewithoutadjustmentstask/) |  |
| class [CalculateOrderSubtotalPriceAdjustmentTask](calculateordersubtotalpriceadjustmenttask/) |  |
| class [CalculateOrderSubtotalPricePreviousAdjustmentsTask](calculateordersubtotalpricepreviousadjustmentstask/) |  |
| class [CalculateOrderSubtotalPriceTotalAdjustmentTask](calculateordersubtotalpricetotaladjustmenttask/) |  |
| class [CalculateOrderSubtotalPriceValueTask](calculateordersubtotalpricevaluetask/) |  |
| class [CalculateOrderSubtotalPriceWithoutAdjustmentsTask](calculateordersubtotalpricewithoutadjustmentstask/) |  |
| class [CalculateOrderSubtotalPriceWithPreviousAdjustmentsTask](calculateordersubtotalpricewithpreviousadjustmentstask/) |  |
| class [CalculateOrderTaxRatesTask](calculateordertaxratestask/) |  |
| class [CalculateOrderTaxRateTask](calculateordertaxratetask/) |  |
| class [CalculateOrderTotalPriceAdjustmentTask](calculateordertotalpriceadjustmenttask/) |  |
| class [CalculateOrderTotalPricePreviousAdjustmentTask](calculateordertotalpricepreviousadjustmenttask/) |  |
| class [CalculateOrderTotalPriceTask](calculateordertotalpricetask/) |  |
| class [CalculateOrderTotalPriceTotalAdjustmentTask](calculateordertotalpricetotaladjustmenttask/) |  |
| class [CalculateOrderTotalPriceValueTask](calculateordertotalpricevaluetask/) |  |
| class [CalculateOrderTotalPriceWithoutAdjustmentsTask](calculateordertotalpricewithoutadjustmentstask/) |  |
| class [CalculateOrderTotalPriceWithPreviousAdjustmentsTask](calculateordertotalpricewithpreviousadjustmentstask/) |  |
| class [CalculateOrderTotalTransactionAmountTask](calculateordertotaltransactionamounttask/) |  |
| class [CalculateOrderTransactionAmountAdjustmentTask](calculateordertransactionamountadjustmenttask/) |  |
| class [CalculateOrderTransactionAmountTask](calculateordertransactionamounttask/) |  |
| class [CalculateOrderTransactionAmountValueTask](calculateordertransactionamountvaluetask/) |  |
| class [CalculateOrderTransactionAmountWithoutAdjustmentsTask](calculateordertransactionamountwithoutadjustmentstask/) |  |
| class [LimitOrderAdjustmentsTask](limitorderadjustmentstask/) |  |
| class [LimitOrderPaymentTotalPriceAdjustmentsTask](limitorderpaymenttotalpriceadjustmentstask/) |  |
| class [LimitOrderShippingTotalPriceAdjustmentsTask](limitordershippingtotalpriceadjustmentstask/) |  |
| class [LimitOrderSubtotalPriceAdjustmentsTask](limitordersubtotalpriceadjustmentstask/) |  |
| class [LimitOrderTotalPriceAdjustmentsTask](limitordertotalpriceadjustmentstask/) |  |
| class [LimitOrderTransactionAmountAdjustmentsTask](limitordertransactionamountadjustmentstask/) |  |
| abstract class [OrderLinesCalculationPipelineTaskBase&lt;TOrderLinePipeline&gt;](orderlinescalculationpipelinetaskbase-1/) |  |
| class [ResovleOrderCalculationDependenciesTask](resovleordercalculationdependenciestask/) |  |

## Vendr.Core.Pipelines.OrderLine namespace

| Public Type | Description |
| --- | --- |
| class [CalculateOrderLineAdjustedPricesPipeline](calculateorderlineadjustedpricespipeline/) |  |
| class [CalculateOrderLinePricesPipeline](calculateorderlinepricespipeline/) |  |
| class [CalculateOrderLineTaxRatesPipeline](calculateorderlinetaxratespipeline/) |  |
| class [LimitOrderLineAdjustmentsPipeline](limitorderlineadjustmentspipeline/) |  |
| class [OrderLineCalculationPipelineArgs](orderlinecalculationpipelineargs/) |  |

## Vendr.Core.Pipelines.OrderLine.Tasks namespace

| Public Type | Description |
| --- | --- |
| class [CalculateOrderLineDiscountedPricesTask](calculateorderlinediscountedpricestask/) |  |
| class [CalculateOrderLineTaxRateTask](calculateorderlinetaxratetask/) |  |
| class [CalculateOrderLineTotalPriceAdjustmentTask](calculateorderlinetotalpriceadjustmenttask/) |  |
| class [CalculateOrderLineTotalPricePreviousAdjustmentsTask](calculateorderlinetotalpricepreviousadjustmentstask/) |  |
| class [CalculateOrderLineTotalPriceTotalAdjustmentTask](calculateorderlinetotalpricetotaladjustmenttask/) |  |
| class [CalculateOrderLineTotalPriceValueTask](calculateorderlinetotalpricevaluetask/) |  |
| class [CalculateOrderLineTotalPriceWithoutAdjustmentsTask](calculateorderlinetotalpricewithoutadjustmentstask/) |  |
| class [CalculateOrderLineTotalPriceWithPreviousAdjustmentsTask](calculateorderlinetotalpricewithpreviousadjustmentstask/) |  |
| class [CalculateOrderLineUnitPriceAdjustmentTask](calculateorderlineunitpriceadjustmenttask/) |  |
| class [CalculateOrderLineUnitPriceValueTask](calculateorderlineunitpricevaluetask/) |  |
| class [CalculateOrderLineUnitPriceWithoutAdjustmentsTask](calculateorderlineunitpricewithoutadjustmentstask/) |  |
| class [CalculateSubOrderLineAdjustedPricesTask](calculatesuborderlineadjustedpricestask/) |  |
| class [CalculateSubOrderLinePricesTask](calculatesuborderlinepricestask/) |  |
| class [CalculateSubOrderLineTaxRatesTask](calculatesuborderlinetaxratestask/) |  |
| class [LimitOrderLineTotalPriceAdjustmentsTask](limitorderlinetotalpriceadjustmentstask/) |  |
| class [LimitOrderLineUnitPriceAdjustmentsTask](limitorderlineunitpriceadjustmentstask/) |  |
| class [LimitSubOrderLineAdjustmentsTask](limitsuborderlineadjustmentstask/) |  |
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
| class [CreateDefaultPrintTemplatesTask](createdefaultprinttemplatestask/) |  |
| class [CreateDefaultShippingMethodTask](createdefaultshippingmethodtask/) |  |
| class [CreateDefaultTaxClassTask](createdefaulttaxclasstask/) |  |
| class [SetDefaultCountryDefaultsTask](setdefaultcountrydefaultstask/) |  |

<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
