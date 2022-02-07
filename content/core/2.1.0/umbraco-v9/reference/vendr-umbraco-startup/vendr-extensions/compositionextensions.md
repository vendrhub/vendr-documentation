---
title: CompositionExtensions
description: API reference for CompositionExtensions in Vendr, the eCommerce solution for Umbraco
---
## CompositionExtensions

```csharp
public static class CompositionExtensions
```

**Namespace**
* [Vendr.Extensions](../)

### Methods

#### WithAmountAdjusters

```csharp
public static AmountAdjusterCollectionBuilder WithAmountAdjusters(this IUmbracoBuilder composer)
```


---

#### WithCalculateOrderAdjustedPricesPipeline

```csharp
public static PipelineTaskCollectionBuilder<CalculateOrderAdjustedPricesPipeline, OrderCalculation> 
    WithCalculateOrderAdjustedPricesPipeline(this IUmbracoBuilder composer)
```


---

#### WithCalculateOrderAdjustedTransactionAmountPipeline

```csharp
public static PipelineTaskCollectionBuilder<CalculateOrderAdjustedTransactionAmountPipeline, OrderCalculation> 
    WithCalculateOrderAdjustedTransactionAmountPipeline(this IUmbracoBuilder composer)
```


---

#### WithCalculateOrderLineAdjustedPricesPipeline

```csharp
public static PipelineTaskCollectionBuilder<CalculateOrderLineAdjustedPricesPipeline, OrderLineCalculation> 
    WithCalculateOrderLineAdjustedPricesPipeline(this IUmbracoBuilder composer)
```


---

#### WithCalculateOrderLinePricesPipeline

```csharp
public static PipelineTaskCollectionBuilder<CalculateOrderLinePricesPipeline, OrderLineCalculation> 
    WithCalculateOrderLinePricesPipeline(this IUmbracoBuilder composer)
```


---

#### WithCalculateOrderLineTaxRatesPipeline

```csharp
public static PipelineTaskCollectionBuilder<CalculateOrderLineTaxRatesPipeline, OrderLineCalculation> 
    WithCalculateOrderLineTaxRatesPipeline(this IUmbracoBuilder composer)
```


---

#### WithCalculateOrderPipeline

```csharp
public static PipelineTaskCollectionBuilder<CalculateOrderPipeline, OrderCalculation> 
    WithCalculateOrderPipeline(this IUmbracoBuilder composer)
```


---

#### WithCalculateOrderPricesPipeline

```csharp
public static PipelineTaskCollectionBuilder<CalculateOrderPricesPipeline, OrderCalculation> 
    WithCalculateOrderPricesPipeline(this IUmbracoBuilder composer)
```


---

#### WithCalculateOrderTaxRatesPipeline

```csharp
public static PipelineTaskCollectionBuilder<CalculateOrderTaxRatesPipeline, OrderCalculation> 
    WithCalculateOrderTaxRatesPipeline(this IUmbracoBuilder composer)
```


---

#### WithCalculateOrderTotalPricePipeline

```csharp
public static PipelineTaskCollectionBuilder<CalculateOrderTotalPricePipeline, OrderCalculation> 
    WithCalculateOrderTotalPricePipeline(this IUmbracoBuilder composer)
```


---

#### WithCalculateOrderTotalTransactionAmountPipeline

```csharp
public static PipelineTaskCollectionBuilder<CalculateOrderTotalTransactionAmountPipeline, OrderCalculation> 
    WithCalculateOrderTotalTransactionAmountPipeline(this IUmbracoBuilder composer)
```


---

#### WithCalculateOrderTransactionAmountPipeline

```csharp
public static PipelineTaskCollectionBuilder<CalculateOrderTransactionAmountPipeline, OrderCalculation> 
    WithCalculateOrderTransactionAmountPipeline(this IUmbracoBuilder composer)
```


---

#### WithDomainEvent&lt;TEvent&gt;

```csharp
public static VendrEventHandlerComposer<TEvent, IDomainEvent> WithDomainEvent<TEvent>(
    this IUmbracoBuilder composer)
    where TEvent : IDomainEvent
```


---

#### WithInitStorePipeline

```csharp
public static PipelineTaskCollectionBuilder<InitStorePipeline, Store> WithInitStorePipeline(
    this IUmbracoBuilder composer)
```


---

#### WithLimitOrderDiscountsPipeline

```csharp
public static PipelineTaskCollectionBuilder<LimitOrderDiscountsPipeline, OrderCalculation> 
    WithLimitOrderDiscountsPipeline(this IUmbracoBuilder composer)
```


---

#### WithNotificationEvent&lt;TEvent&gt;

```csharp
public static VendrEventHandlerComposer<TEvent, INotificationEvent> WithNotificationEvent<TEvent>(
    this IUmbracoBuilder composer)
    where TEvent : INotificationEvent
```


---

#### WithOrderFinders

```csharp
public static OrderFinderCollectionBuilder WithOrderFinders(this IUmbracoBuilder composer)
```


---

#### WithPipeline&lt;TCollection,TItem&gt;

```csharp
public static PipelineTaskCollectionBuilder<TCollection, TItem> WithPipeline<TCollection, TItem>(
    this IUmbracoBuilder composer)
    where TCollection : class, IPipelineTaskCollection<TItem>
```


---

#### WithPriceAdjusters

```csharp
public static PriceAdjusterCollectionBuilder WithPriceAdjusters(this IUmbracoBuilder composer)
```


---

#### WithRegisteredCustomerInfoProviders

```csharp
public static RegisteredCustomerInfoProviderCollectionBuilder WithRegisteredCustomerInfoProviders(
    this IUmbracoBuilder composer)
```


---

#### WithSendEmailPipeline

```csharp
public static PipelineTaskCollectionBuilder<SendEmailPipeline, EmailContext> WithSendEmailPipeline(
    this IUmbracoBuilder composer)
```


---

#### WithTelemetryDataPipeline

```csharp
public static PipelineTaskCollectionBuilder<TelemetryDataPipeline, TelemetryData> 
    WithTelemetryDataPipeline(this IUmbracoBuilder composer)
```


---

#### WithUmbracoNodeStoreFinders

```csharp
public static UmbracoNodeStoreFinderCollectionBuilder WithUmbracoNodeStoreFinders(
    this IUmbracoBuilder composer)
```


---

#### WithValidationEvent&lt;TEvent&gt;

```csharp
public static VendrEventHandlerComposer<TEvent, IValidationEvent> WithValidationEvent<TEvent>(
    this IUmbracoBuilder composer)
    where TEvent : IValidationEvent
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.Startup.dll -->
