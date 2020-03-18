---
title: Payment Providers
description: Payment Provider related APIs in Vendr, the eCommerce solution for Umbraco v8+
---

## Payment Provider

### PaymentProviderBase&lt;TSettingsModel&gt;

**Description:** Base class of a Vendr Payment Provider  
**Namespace:** Vendr.Core.Web.PaymentProviders  
**Assembly:** Vendr.Core.Web

***Parameters:***

| Type | Description |
| ---- | ----------- |
| `TSettingsModel` | A [Settings Object](../../key-concepts/settings-objects/) type for the Payment Provider |

#### Constructor
Create a new Payment Provider instance

***Signature:***

````csharp
public PaymentProviderBase(VendrContext vendr) : base(vendr)
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `VendrContext` | `vendr` | A Vendr Context |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentProviderBase` | A new instance of the Payment Provider |

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `string` | `Icon` | The Icon of the Payment Provider |
| `string` | `Alias` | The Alias of the Payment Provider |
| `string` | `Name` | The Name of the Payment Provider |
| `string` | `Description` | A Description for the Payment Provider |
| `bool` | `CanFetchPaymentStatus` | Flag indicating whether the Payment Provider supports fetching a Payment Status |
| `bool` | `CanCapturePayments` | Flag indicating whether the Payment Provider supports Capturing Payments |
| `bool` | `CanRefundPayments` | Flag indicating whether the Payment Provider supports Refunding Payments |
| `bool` | `CanCancelPayments` | Flag indicating whether the Payment Provider supports Canceling Payments |
| `bool` | `FinalizeAtContinueUrl` | Flag indicating whether the Payment Provider should Finalize on Continue |
| `IEnumerable <TransactionMetaDataDefinition>` | `TransactionMetaDataDefinitions` | A collection of [Transaction Meta Data Definitions](#transactionmetadatadefinition) |
| `IEnumerable <PaymentProviderSettingDefinition>` | `SettingDefinitions` | A collection of [Setting Definitions](#paymentprovidersettingdefinition) |
| `IDictionary<string, string>` | `DefaultSettings` | A dictionary of default Settings |

#### GetContinueUrl
Get a Continue URL for a Payment Provider

***Signature:***

````csharp
string GetContinueUrl(OrderReadOnly order, TSettingsModel settings);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `OrderReadOnly` | `order` | The Order to get the Continue URL for |
| `TSettingsModel` | `settings` | The settings for the Payment Provider |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `string` | The Continue URL |

#### GetCancelUrl
Get a Cancel URL for a Payment Provider

***Signature:***

````csharp
string GetCancelUrl(OrderReadOnly order, TSettingsModel settings);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `OrderReadOnly` | `order` | The Order to get the Cancel URL for |
| `TSettingsModel` | `settings` | The settings for the Payment Provider |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `string` | The Cancel URL |

#### GetErrorUrl
Get a Error URL for a Payment Provider

***Signature:***

````csharp
string GetErrorUrl(OrderReadOnly order, TSettingsModel settings);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `OrderReadOnly` | `order` | The Order to get the Error URL for |
| `TSettingsModel` | `settings` | The settings for the Payment Provider |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `string` | The Error URL |

#### GenerateForm
Generate a Payment Form

***Signature:***

````csharp
PaymentFormResult GenerateForm(OrderReadOnly order, string continueUrl, string cancelUrl, string callbackUrl, TSettingsModel settings);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `OrderReadOnly` | `order` | The Order to generate the Payment Form for |
| `string` | `continueUrl` | The Vendr generated Continue URL to continue to on successful payment |
| `string` | `cancelUrl` | The Vendr generated Cancel URL to return to if payment is canceled |
| `string` | `callbackUrl` | The Vendr generated Callback URL to call for webhook notifications |
| `TSettingsModel` | `settings` | The settings for the Payment Provider |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentFormResult` | A Payment Form result |

#### ProcessCallback
Process a Callback

***Signature:***

````csharp
CallbackResult ProcessCallback(OrderReadOnly order, HttpRequestBase request, TSettingsModel settings);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `OrderReadOnly` | `order` | The Order to associated with the Request |
| `HttpRequestBase` | `request` | The raw Request object |
| `TSettingsModel` | `settings` | The settings for the Payment Provider |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `CallbackResult` | A Callback result |

#### GetOrderReference
Get an Order Reference from the given Request

***Signature:***

````csharp
OrderReference GetOrderReference(HttpRequestBase request, TSettingsModel settings);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `HttpRequestBase` | `request` | The raw Request object |
| `TSettingsModel` | `settings` | The settings for the Payment Provider |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderReference` | An Order Reference |

#### FetchPaymentStatus
Fetch teh Payment Status of a Payment

***Signature:***

````csharp
ApiResult FetchPaymentStatus(OrderReadOnly order, TSettingsModel settings);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `OrderReadOnly` | `order` | The Order associated with the Payment |
| `TSettingsModel` | `settings` | The settings for the Payment Provider |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ApiResult` | An API Result |

#### CapturePayment
Capture an Authorized Payment

***Signature:***

````csharp
ApiResult CapturePayment(OrderReadOnly order, TSettingsModel settings);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `OrderReadOnly` | `order` | The Order associated with the Payment |
| `TSettingsModel` | `settings` | The settings for the Payment Provider |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ApiResult` | An API Result |

#### CancelPayment
Cancel an Authorized Payment

***Signature:***

````csharp
ApiResult CancelPayment(OrderReadOnly order, TSettingsModel settings);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `OrderReadOnly` | `order` | The Order associated with the Payment |
| `TSettingsModel` | `settings` | The settings for the Payment Provider |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ApiResult` | An API Result |

#### RefundPayment
Refund a Captured Payment

***Signature:***

````csharp
ApiResult RefundPayment(OrderReadOnly order, TSettingsModel settings);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `OrderReadOnly` | `order` | The Order associated with the Payment |
| `TSettingsModel` | `settings` | The settings for the Payment Provider |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `ApiResult` | An API Result |

<div class="mb-48"></div>


## Payment Provider Entities

### OrderReference 

**Description:** A Vendr Order Reference  
**Namespace:** Vendr.Core.Web.PaymentProviders  
**Assembly:** Vendr.Core.Web

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `Guid` | `OrderId` | The ID of the Order |
| `string` | `OrderNumber` | The Order Number of the Order |

#### Parse
Parse an Order Reference

***Signature:***

````csharp
static OrderReference Parse(string input);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `input` | A string Order Reference in the format `vendr://order/{ORDER-ID}/{ORDER-NUMBER}` |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `OrderReference` | An Order Reference |

#### TryParse
Try to Parse an Order Reference

***Signature:***

````csharp
static bool TryParse(string input, out OrderReference orderReference);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `input` | A string Order Reference in the format `vendr://order/{ORDER-ID}/{ORDER-NUMBER}` |
| `OrderReference` | `orderReference` | The parsed Order Reference |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `bool` | Flag indicating whether it was a successful parse or not |

#### ToString
Convert the Order Reference to a String

***Signature:***

````csharp
string ToString();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `string` | A string Order Reference in the format `vendr://order/{ORDER-ID}/{ORDER-NUMBER}` |

#### DeepClone
Deep Clone the Entity

***Signature:***

````csharp
object DeepClone();
````

***Returns:***

| Type | Description |
| ---- | ----------- |
| `object` | A deep clone of the Entity as an object |

### PaymentFormResult 

**Description:** A Vendr Payment Form Result  
**Namespace:** Vendr.Core.Web.PaymentProviders  
**Assembly:** Vendr.Core.Web

 #### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `PaymentForm` | `Form` | The [Payment Form](#paymentform) to Render |
| `IDictionary<string, string>` | `MetaData` | Additional Meta Data to store against the Order |

### PaymentForm 

**Description:** A Payment Form owned entity  
**Namespace:** Vendr.Core.Web.PaymentProviders  
**Assembly:** Vendr.Core.Web

#### Constructor
Create a new Payment Form instance

***Signature:***

````csharp
public PaymentForm(string action)
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `action` | The Action for the Form |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentForm` | A new instance of the PaymentForm |

---

***Signature:***

````csharp
public PaymentForm(string action, FormMethod method)
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `action` | The Action for the Form |
| `FormMethod` | `method` | The Form Method for the Form, either `GET` or `POST` |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentForm` | A new instance of the PaymentForm |

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `string` | `Action` | The Action for the Form |
| `FormMethod` | `FormMethod` | The Form Method for the Form, either `GET` or `POST` |
| `IDictionary<string, string>` | `Attributes` | Additional attributes to render on the Form tag |
| `IDictionary<string, string>` | `Inputs` | The hidden Input name / value pairs to render in the Form |
| `IList<string>` | `CssFiles` | A list of CSS file URLs to render for the Form |
| `IList<string>` | `JsFiles` | A list of Javascript file URLs to render for the Form |
| `string` | `Css` | Any inline CSS to render for the Form |
| `string` | `Js` | Any inline Javascript to render for the Form |

#### WithAttribute
Fluently define an Attribute on a Form

***Signature:***

````csharp
PaymentForm WithAttribute(string key, string value);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `key` | The Key of the attribute to define on the Form |
| `string` | `value` | The Value of the attribute to define on the Form |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentForm` | The updated Payment Form |

#### WithAttributeIf
Fluently define an Attribute on a Form if a condition is met

***Signature:***

````csharp
PaymentForm WithAttributeIf(string key, Func<bool> predicate, string valueIfTrue, string valueIfFalse = null);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `key` | The Key of the attribute to define on the Form |
| `Func<bool>` | `predicate` | The condition that must be met |
| `string` | `valueIfTrue` | The Value of the attribute to define on the Form if the condition is `true` |
| `string` | `valueIfFalse` | The Value of the attribute to define on the Form if the condition is `false` |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentForm` | The updated Payment Form |

---

***Signature:***

````csharp
PaymentForm WithAttributeIf(string key, bool predicate, string valueIfTrue, string valueIfFalse = null);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `key` | The Key of the attribute to define on the Form |
| `bool` | `predicate` | The condition that must be met |
| `string` | `valueIfTrue` | The Value of the attribute to define on the Form if the condition is `true` |
| `string` | `valueIfFalse` | The Value of the attribute to define on the Form if the condition is `false` |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentForm` | The updated Payment Form |

#### WithInput
Fluently define an Input on a Form

***Signature:***

````csharp
PaymentForm WithInput(string key, string value);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `key` | The Key of the input to define on the Form |
| `string` | `value` | The Value of the input to define on the Form |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentForm` | The updated Payment Form |

#### WithInputIf
Fluently define an Input on a Form if a condition is met

***Signature:***

````csharp
PaymentForm WithInputIf(string key, Func<bool> predicate, string valueIfTrue, string valueIfFalse = null);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `key` | The Key of the input to define on the Form |
| `Func<bool>` | `predicate` | The condition that must be met |
| `string` | `valueIfTrue` | The Value of the input to define on the Form if the condition is `true` |
| `string` | `valueIfFalse` | The Value of the input to define on the Form if the condition is `false` |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentForm` | The updated Payment Form |

---

***Signature:***

````csharp
PaymentForm WithInputIf(string key, bool predicate, string valueIfTrue, string valueIfFalse = null);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `key` | The Key of the input to define on the Form |
| `bool` | `predicate` | The condition that must be met |
| `string` | `valueIfTrue` | The Value of the input to define on the Form if the condition is `true` |
| `string` | `valueIfFalse` | The Value of the input to define on the Form if the condition is `false` |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentForm` | The updated Payment Form |

#### WithJsFile
Fluently define a Javascript file to render for the Form

***Signature:***

````csharp
PaymentForm WithJsFile(string url);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `url` | The URL for the Javascript file to render for the Form |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentForm` | The updated Payment Form |

#### WithJs
Fluently define an inline Javascript block to render for the Form

***Signature:***

````csharp
PaymentForm WithJs(string script);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `script` | The Javascript to render for the Form |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentForm` | The updated Payment Form |

#### WithCssFile
Fluently define an CSS file to render for the Form

***Signature:***

````csharp
PaymentForm WithCssFile(string url);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `url` | The URL for the CSS file to render for the Form |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentForm` | The updated Payment Form |

#### WithCss
Fluently define an inline CSS block to render for the Form

***Signature:***

````csharp
PaymentForm WithCss(string styles);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `string` | `styles` | The CSS to render for the Form |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `PaymentForm` | The updated Payment Form |

### CallbackResult 

**Description:** A Vendr Callback Result  
**Namespace:** Vendr.Core.Web.PaymentProviders  
**Assembly:** Vendr.Core.Web

 #### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `TransactionInfo` | `TransactionInfo` | The [Transaction Info](#transactioninfo) processed by the Callback |
| `IDictionary<string, string>` | `MetaData` | Additional Meta Data to store against the Order |
| `HttpResponseMessage` | `HttpResponse` | A HTTP Response message to return as a Response to the Request |

#### Ok
Create an OK Callback Result

***Signature:***

````csharp
static CallbackResult Ok(TransactionInfo transactionInfo = null, IDictionary<string, string> metaData = null);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `TransactionInfo` | `transactionInfo` | The [Transaction Info](#transactioninfo) processed by the Callback |
| `IDictionary<string, string>` | `metaData` | Additional Meta Data to store against the Order |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `CallbackResult` | The Callback Response |

#### BadRequest
Create a Bad Request Callback Result

***Signature:***

````csharp
static CallbackResult BadRequest(TransactionInfo transactionInfo = null, IDictionary<string, string> metaData = null);
````

***Parameters:***

| Type | Name | Description |
| ---- | ----- | ----------- |
| `TransactionInfo` | `transactionInfo` | The [Transaction Info](#transactioninfo) processed by the Callback |
| `IDictionary<string, string>` | `metaData` | Additional Meta Data to store against the Order |

***Returns:***

| Type | Description |
| ---- | ----------- |
| `CallbackResult` | The Callback Response |

### TransactionInfo 

**Description:** Transaction Info  
**Namespace:** Vendr.Core.Web.PaymentProviders  
**Assembly:** Vendr.Core.Web

 #### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `decimal` | `AmountAuthorized` | The Amount Authorized by the Payment Gateway |
| `decimal?` | `TransactionFee` | Any Transaction Fee charged by the Payment Gateway |
| `string` | `TransactionId` | The ID of the Transaction from the Payment Gateway |
| `PaymentStatus` | `PaymentStatus` | The Payment Status of the Transaction, either `Initialized`, `Authorized`, `Captured`, `Cancelled`, `Refunded`, `PendingExternalSystem` or `Error` |

### ApiResult 

**Description:** A Vendr API Result  
**Namespace:** Vendr.Core.Web.PaymentProviders  
**Assembly:** Vendr.Core.Web

 #### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `TransactionInfoUpdate` | `TransactionInfo` | The [Transaction Info Update](#transactioninfoupdate) processed by the API call |
| `IDictionary<string, string>` | `MetaData` | Additional Meta Data to store against the Order |

### TransactionInfoUpdate 

**Description:** Transaction Info Update  
**Namespace:** Vendr.Core.Web.PaymentProviders  
**Assembly:** Vendr.Core.Web

 #### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `string` | `TransactionId` | The ID of the Transaction from the Payment Gateway |
| `PaymentStatus` | `PaymentStatus` | The Payment Status of the Transaction, either `Initialized`, `Authorized`, `Captured`, `Cancelled`, `Refunded`, `PendingExternalSystem` or `Error` |


### TransactionMetaDataDefinition 

**Description:** Transaction Meta Data Definition  
**Namespace:** Vendr.Core.Web.PaymentProviders  
**Assembly:** Vendr.Core.Web

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `string` | `PropertyAlias` | The Property Alias of the piece of Meta Data |
| `string` | `Name` | A Name to display for the piece of Meta Data |
| `string` | `Description` | A Description to display for the piece of Meta Data |

### PaymentProviderSettingDefinition

**Description:** Payment Provider Setting Definition  
**Namespace:** Vendr.Core.Web.PaymentProviders  
**Assembly:** Vendr.Core.Web

#### Properties

| Type | Name | Description |
| ---- | ---- | ----------- |
| `string` | `Key` | The Key of the Setting |
| `string` | `Name` | A Name of the Setting |
| `string` | `Description` | A Description for the Setting |
| `string` | `PropertyName` | The Property Name of the Setting |
| `string` | `PropertyType` | The Property Type of the Setting |
| `string` | `View` | An AngularJS View file to use to edit the Setting |
| `object` | `Config` | A config object to pass to the View file to use to edit the Setting |
| `int` | `SortOrder` | The Sort Order of the Setting |