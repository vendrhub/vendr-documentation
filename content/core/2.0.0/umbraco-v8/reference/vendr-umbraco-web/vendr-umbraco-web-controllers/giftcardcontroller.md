---
title: GiftCardController
description: API reference for GiftCardController in Vendr, the eCommerce solution for Umbraco
---
## GiftCardController

```csharp
public class GiftCardController : VendrAuthorizedJsonControllerBase
```

**Inheritance**

* class [VendrAuthorizedJsonControllerBase](../vendrauthorizedjsoncontrollerbase/)

**Namespace**
* [Vendr.Umbraco.Web.Controllers](../)

### Constructors

#### GiftCardController

```csharp
public GiftCardController(VendrContext vendrContext)
```


### Methods

#### CreateGiftCard

```csharp
public IHttpActionResult CreateGiftCard(Guid storeId)
```


---

#### DeleteGiftCard

```csharp
public IHttpActionResult DeleteGiftCard(Guid giftCardId)
```


---

#### GenerateGiftCardCode

```csharp
public IHttpActionResult GenerateGiftCardCode(Guid storeId)
```


---

#### GetGiftCard

```csharp
public IHttpActionResult GetGiftCard(Guid giftCardId)
```


---

#### GetGiftCards

```csharp
public IHttpActionResult GetGiftCards(Guid storeId)
```


---

#### SaveGiftCard

```csharp
public IHttpActionResult SaveGiftCard(GiftCardSaveDto giftCard)
```


---

#### SearchGiftCards

```csharp
public IHttpActionResult SearchGiftCards(GiftCardSearchDto model)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.Web.dll -->
