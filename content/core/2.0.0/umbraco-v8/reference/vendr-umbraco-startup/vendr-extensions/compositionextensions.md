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
public static AmountAdjusterCollectionBuilder WithAmountAdjusters(this Composition composer)
```


---

#### WithCalculateOrderAdjustedPricesPipeline

```csharp
public static PipelineTaskCollectionBuilder<CalculateOrderAdjustedPricesPipeline, OrderCalculation> 
    WithCalculateOrderAdjustedPricesPipeline(this Composition composer)
```


---

#### WithCalculateOrderAdjustedTransactionAmountPipeline

```csharp
public static PipelineTaskCollectionBuilder<CalculateOrderAdjustedTransactionAmountPipeline, OrderCalculation> 
    WithCalculateOrderAdjustedTransactionAmountPipeline(this Composition composer)
```


---

#### WithCalculateOrderLineAdjustedPricesPipeline

```csharp
public static PipelineTaskCollectionBuilder<CalculateOrderLineAdjustedPricesPipeline, OrderLineCalculation> 
    WithCalculateOrderLineAdjustedPricesPipeline(this Composition composer)
```


---

#### WithCalculateOrderLinePricesPipeline

```csharp
public static PipelineTaskCollectionBuilder<CalculateOrderLinePricesPipeline, OrderLineCalculation> 
    WithCalculateOrderLinePricesPipeline(this Composition composer)
```


---

#### WithCalculateOrderLineTaxRatesPipeline

```csharp
public static PipelineTaskCollectionBuilder<CalculateOrderLineTaxRatesPipeline, OrderLineCalculation> 
    WithCalculateOrderLineTaxRatesPipeline(this Composition composer)
```


---

#### WithCalculateOrderPipeline

```csharp
public static PipelineTaskCollectionBuilder<CalculateOrderPipeline, OrderCalculation> 
    WithCalculateOrderPipeline(this Composition composer)
```


---

#### WithCalculateOrderPricesPipeline

```csharp
public static PipelineTaskCollectionBuilder<CalculateOrderPricesPipeline, OrderCalculation> 
    WithCalculateOrderPricesPipeline(this Composition composer)
```


---

#### WithCalculateOrderTaxRatesPipeline

```csharp
public static PipelineTaskCollectionBuilder<CalculateOrderTaxRatesPipeline, OrderCalculation> 
    WithCalculateOrderTaxRatesPipeline(this Composition composer)
```


---

#### WithCalculateOrderTotalPricePipeline

```csharp
public static PipelineTaskCollectionBuilder<CalculateOrderTotalPricePipeline, OrderCalculation> 
    WithCalculateOrderTotalPricePipeline(this Composition composer)
```


---

#### WithCalculateOrderTotalTransactionAmountPipeline

```csharp
public static PipelineTaskCollectionBuilder<CalculateOrderTotalTransactionAmountPipeline, OrderCalculation> 
    WithCalculateOrderTotalTransactionAmountPipeline(this Composition composer)
```


---

#### WithCalculateOrderTransactionAmountPipeline

```csharp
public static PipelineTaskCollectionBuilder<CalculateOrderTransactionAmountPipeline, OrderCalculation> 
    WithCalculateOrderTransactionAmountPipeline(this Composition composer)
```


---

#### WithDomainEvent&lt;TEvent&gt;

```csharp
public static VendrEventHandlerComposer<TEvent, IDomainEvent> WithDomainEvent<TEvent>(
    this Composition composer)
    where TEvent : IDomainEvent
```


---

#### WithInitStorePipeline

```csharp
public static PipelineTaskCollectionBuilder<InitStorePipeline, Store> WithInitStorePipeline(
    this Composition composer)
```


---

#### WithLimitOrderDiscountsPipeline

```csharp
public static PipelineTaskCollectionBuilder<LimitOrderDiscountsPipeline, OrderCalculation> 
    WithLimitOrderDiscountsPipeline(this Composition composer)
```


---

#### WithNotificationEvent&lt;TEvent&gt;

```csharp
public static VendrEventHandlerComposer<TEvent, INotificationEvent> WithNotificationEvent<TEvent>(
    this Composition composer)
    where TEvent : INotificationEvent
```


---

#### WithOrderFinders

```csharp
public static OrderFinderCollectionBuilder WithOrderFinders(this Composition composer)
```


---

#### WithPipeline&lt;TCollection,TItem&gt;

```csharp
public static PipelineTaskCollectionBuilder<TCollection, TItem> WithPipeline<TCollection, TItem>(
    this Composition composer)
    where TCollection : class, IPipelineTaskCollection<TItem>
```


---

#### WithPriceAdjusters

```csharp
public static PriceAdjusterCollectionBuilder WithPriceAdjusters(this Composition composer)
```


---

#### WithRegisteredCustomerInfoProviders

```csharp
public static RegisteredCustomerInfoProviderCollectionBuilder WithRegisteredCustomerInfoProviders(
    this Composition composer)
```


---

#### WithSendEmailPipeline

```csharp
public static PipelineTaskCollectionBuilder<SendEmailPipeline, EmailContext> WithSendEmailPipeline(
    this Composition composer)
```


---

#### WithTelemetryDataPipeline

```csharp
public static PipelineTaskCollectionBuilder<TelemetryDataPipeline, TelemetryData> 
    WithTelemetryDataPipeline(this Composition composer)
```


---

#### WithValidationEvent&lt;TEvent&gt;

```csharp
public static VendrEventHandlerComposer<TEvent, IValidationEvent> WithValidationEvent<TEvent>(
    this Composition composer)
    where TEvent : IValidationEvent
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.Startup.dll -->
