---
title: AnalyticsController
description: API reference for AnalyticsController in Vendr, the eCommerce solution for Umbraco v8+
---
## AnalyticsController

```csharp
public class AnalyticsController : VendrAuthorizedJsonControllerBase
```

**Inheritance**

* class [VendrAuthorizedJsonControllerBase](../vendrauthorizedjsoncontrollerbase/)

**Namespace**
* [Vendr.Web.Controllers](../)

### Constructors

#### AnalyticsController

```csharp
public AnalyticsController(UmbracoControllerContext vendrContext, 
    IAnalyticsService analyticsService, IStoreService storeService, IIOHelper ioHelper)
```


### Methods

#### GetAnalyticsDashboardConfig

```csharp
public object GetAnalyticsDashboardConfig(Guid storeId)
```


---

#### GetAverageOrderValueReport

```csharp
public ChartReportDataDto<decimal> GetAverageOrderValueReport(Guid storeId, DateTime from, 
    DateTime to, DateTime? compareFrom = default(DateTime?), 
    DateTime? compareTo = default(DateTime?), int localTimezoneOffset = 0)
```


---

#### GetCartConversionRatesReport

```csharp
public CartConversionRatesReportDataDto GetCartConversionRatesReport(Guid storeId, DateTime from, 
    DateTime to, DateTime? compareFrom = default(DateTime?), 
    DateTime? compareTo = default(DateTime?), int localTimezoneOffset = 0)
```


---

#### GetRepeatCustomerRatesReport

```csharp
public ChartReportDataDto<decimal> GetRepeatCustomerRatesReport(Guid storeId, DateTime from, 
    DateTime to, DateTime? compareFrom = default(DateTime?), 
    DateTime? compareTo = default(DateTime?), int localTimezoneOffset = 0)
```


---

#### GetTopSellingProductsReport

```csharp
public ProductSalesReportDataDto GetTopSellingProductsReport(Guid storeId, DateTime from, 
    DateTime to, DateTime? compareFrom = default(DateTime?), 
    DateTime? compareTo = default(DateTime?), int localTimezoneOffset = 0)
```


---

#### GetTotalOrdersReport

```csharp
public ChartReportDataDto<long> GetTotalOrdersReport(Guid storeId, DateTime from, DateTime to, 
    DateTime? compareFrom = default(DateTime?), DateTime? compareTo = default(DateTime?), 
    int localTimezoneOffset = 0)
```


---

#### GetTotalRevenueReport

```csharp
public ChartReportDataDto<decimal> GetTotalRevenueReport(Guid storeId, DateTime from, DateTime to, 
    DateTime? compareFrom = default(DateTime?), DateTime? compareTo = default(DateTime?), 
    int localTimezoneOffset = 0)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Web.dll -->
