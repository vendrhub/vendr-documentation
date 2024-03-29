---
title: IAnalyticsService
description: API reference for IAnalyticsService in Vendr, the eCommerce solution for Umbraco
---
## IAnalyticsService

```csharp
public interface IAnalyticsService : IService
```

**Inheritance**

* interface [IService](../iservice/)

**Namespace**
* [Vendr.Core.Services](../)

### Methods

#### GetAverageOrderValueReport

```csharp
public DateReportData<Amount> GetAverageOrderValueReport(Guid storeId, DateTime from, DateTime to, 
    DateTime? compareFrom, DateTime? compareTo, int localTimezoneOffset)
```


---

#### GetCartConversionRatesReport

```csharp
public CartConversionRatesReportData GetCartConversionRatesReport(Guid storeId, DateTime from, 
    DateTime to, DateTime? compareFrom, DateTime? compareTo, int localTimezoneOffset)
```


---

#### GetRepeatCustomerRatesReport

```csharp
public RepeatCustomerRatesReportData GetRepeatCustomerRatesReport(Guid storeId, DateTime from, 
    DateTime to, DateTime? compareFrom, DateTime? compareTo, int localTimezoneOffset)
```


---

#### GetTopSellingProducts

```csharp
public ProductSalesReportData GetTopSellingProducts(Guid storeId, DateTime from, DateTime to, 
    DateTime? compareFrom, DateTime? compareTo, int localTimezoneOffset)
```


---

#### GetTotalOrdersReport

```csharp
public DateReportData<long> GetTotalOrdersReport(Guid storeId, DateTime from, DateTime to, 
    DateTime? compareFrom, DateTime? compareTo, int localTimezoneOffset)
```


---

#### GetTotalRevenueReport

```csharp
public DateReportData<Amount> GetTotalRevenueReport(Guid storeId, DateTime from, DateTime to, 
    DateTime? compareFrom, DateTime? compareTo, int localTimezoneOffset)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
