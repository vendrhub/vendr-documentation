---
title: CreateDefaultCountryTask
description: API reference for CreateDefaultCountryTask in Vendr, the eCommerce solution for Umbraco
---
## CreateDefaultCountryTask

```csharp
public class CreateDefaultCountryTask : PipelineTaskWithTypedArgsBase<InitStorePipelineArgs, Store>
```

**Inheritance**

* class [PipelineTaskWithTypedArgsBase&lt;!0,!1&gt;](../../../vendr-common/vendr-common-pipelines/pipelinetaskwithtypedargsbase-2/)

**Namespace**
* [Vendr.Core.Pipelines.Store.Tasks](../)

### Constructors

#### CreateDefaultCountryTask

```csharp
public CreateDefaultCountryTask(ICountryService countryService)
```


### Methods

#### Execute

```csharp
public override PipelineResult<Store> Execute(InitStorePipelineArgs args)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
