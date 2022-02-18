---
title: CountryController
description: API reference for CountryController in Vendr, the eCommerce solution for Umbraco
---
## CountryController

```csharp
public class CountryController : VendrAuthorizedJsonControllerBase
```

**Inheritance**

* class [VendrAuthorizedJsonControllerBase](../vendrauthorizedjsoncontrollerbase/)

**Namespace**
* [Vendr.Umbraco.Web.Controllers](../)

### Constructors

#### CountryController

```csharp
public CountryController(VendrContext vendrContext)
```


### Methods

#### CreateAllCountryRegions

```csharp
public IHttpActionResult CreateAllCountryRegions(Guid storeId, Guid defaultCurrencyId)
```


---

#### CreateCountry

```csharp
public IHttpActionResult CreateCountry(Guid storeId)
```


---

#### CreateRegion

```csharp
public IHttpActionResult CreateRegion(Guid storeId, Guid countryId)
```


---

#### DeleteCountry

```csharp
public IHttpActionResult DeleteCountry(Guid countryId)
```


---

#### DeleteRegion

```csharp
public IHttpActionResult DeleteRegion(Guid regionId)
```


---

#### GetCountries

```csharp
public IHttpActionResult GetCountries(Guid storeId)
```


---

#### GetCountriesWithRegions

```csharp
public IHttpActionResult GetCountriesWithRegions(Guid storeId)
```


---

#### GetCountry

```csharp
public IHttpActionResult GetCountry(Guid countryId)
```


---

#### GetIso3166CountryRegions

```csharp
public IHttpActionResult GetIso3166CountryRegions()
```


---

#### GetRegion

```csharp
public IHttpActionResult GetRegion(Guid regionId)
```


---

#### GetRegions

```csharp
public IHttpActionResult GetRegions(Guid storeId, Guid? countryId)
```


---

#### SaveCountry

```csharp
public IHttpActionResult SaveCountry(CountrySaveDto country)
```


---

#### SaveRegion

```csharp
public IHttpActionResult SaveRegion(RegionSaveDto region)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.Web.dll -->