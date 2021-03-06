---
title: VendrServiceContext
description: API reference for VendrServiceContext in Vendr, the eCommerce solution for Umbraco v8+
---
## VendrServiceContext

A central service context for easy access to all of Vendr's services

```csharp
public class VendrServiceContext
```

**Namespace**
* [Vendr.Core.Services](../)

### Constructors

#### VendrServiceContext

Instantiates a new VendrServiceContext instance

```csharp
public VendrServiceContext(Lazy<ICountryService> countryService, 
    Lazy<ICurrencyService> currencyService, Lazy<IEmailTemplateService> emailTemplateService, 
    Lazy<IPrintTemplateService> printTemplateService, 
    Lazy<IExportTemplateService> exportTemplateService, Lazy<IOrderService> orderService, 
    Lazy<IOrderStatusService> orderStatusService, Lazy<IPaymentMethodService> paymentMethodService, 
    Lazy<IShippingMethodService> shippingMethodService, Lazy<IStoreService> storeService, 
    Lazy<ITaxService> taxService, Lazy<IProductService> productService, 
    Lazy<IDiscountService> discountService, Lazy<IGiftCardService> giftCardService, 
    Lazy<ITranslationService> translationService, 
    Lazy<IProductAttributeService> productAttributeService, Lazy<IEntityService> entityService)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| countryService |  |
| currencyService |  |
| emailTemplateService |  |
| printTemplateService |  |
| exportTemplateService |  |
| orderService |  |
| orderStatusService |  |
| paymentMethodService |  |
| shippingMethodService |  |
| storeService |  |
| taxService |  |
| productService |  |
| discountService |  |
| giftCardService |  |
| translationService |  |
| productAttributeService |  |
| entityService |  |


### Properties

#### CountryService

Gets the [`ICountryService`](../icountryservice/)

```csharp
public ICountryService CountryService { get; }
```


---

#### CurrencyService

Gets the [`ICurrencyService`](../icurrencyservice/)

```csharp
public ICurrencyService CurrencyService { get; }
```


---

#### DiscountService

Gets the [`IDiscountService`](../idiscountservice/)

```csharp
public IDiscountService DiscountService { get; }
```


---

#### EmailTemplateService

Gets the [`IEmailTemplateService`](../iemailtemplateservice/)

```csharp
public IEmailTemplateService EmailTemplateService { get; }
```


---

#### EntityService

Gets the [`IEntityService`](../ientityservice/)

```csharp
public IEntityService EntityService { get; }
```


---

#### ExportTemplateService

Gets the [`IExportTemplateService`](../iexporttemplateservice/)

```csharp
public IExportTemplateService ExportTemplateService { get; }
```


---

#### GiftCardService

Gets the [`IGiftCardService`](../igiftcardservice/)

```csharp
public IGiftCardService GiftCardService { get; }
```


---

#### OrderService

Gets the [`IOrderService`](../iorderservice/)

```csharp
public IOrderService OrderService { get; }
```


---

#### OrderStatusService

Gets the [`IOrderStatusService`](../iorderstatusservice/)

```csharp
public IOrderStatusService OrderStatusService { get; }
```


---

#### PaymentMethodService

Gets the [`IPaymentMethodService`](../ipaymentmethodservice/)

```csharp
public IPaymentMethodService PaymentMethodService { get; }
```


---

#### PrintTemplateService

Gets the [`IPrintTemplateService`](../iprinttemplateservice/)

```csharp
public IPrintTemplateService PrintTemplateService { get; }
```


---

#### ProductAttributeService

Gets the [`IProductAttributeService`](../iproductattributeservice/)

```csharp
public IProductAttributeService ProductAttributeService { get; }
```


---

#### ProductService

Gets the [`IProductService`](../iproductservice/)

```csharp
public IProductService ProductService { get; }
```


---

#### ShippingMethodService

Gets the [`IShippingMethodService`](../ishippingmethodservice/)

```csharp
public IShippingMethodService ShippingMethodService { get; }
```


---

#### StoreService

Gets the [`IStoreService`](../istoreservice/)

```csharp
public IStoreService StoreService { get; }
```


---

#### TaxService

Gets the [`ITaxService`](../itaxservice/)

```csharp
public ITaxService TaxService { get; }
```


---

#### TranslationService

Gets the [`ITranslationService`](../itranslationservice/)

```csharp
public ITranslationService TranslationService { get; }
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
