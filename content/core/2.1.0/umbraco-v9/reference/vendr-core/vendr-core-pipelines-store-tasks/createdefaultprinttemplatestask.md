---
title: CreateDefaultPrintTemplatesTask
description: API reference for CreateDefaultPrintTemplatesTask in Vendr, the eCommerce solution for Umbraco
---
## CreateDefaultPrintTemplatesTask

```csharp
public class CreateDefaultPrintTemplatesTask : 
    PipelineTaskWithTypedArgsBase<InitStorePipelineArgs, Store>
```

**Inheritance**

* class [PipelineTaskWithTypedArgsBase&lt;!0,!1&gt;](../../../vendr-common/vendr-common-pipelines/pipelinetaskwithtypedargsbase-2/)

**Namespace**
* [Vendr.Core.Pipelines.Store.Tasks](../)

### Constructors

#### CreateDefaultPrintTemplatesTask

```csharp
public CreateDefaultPrintTemplatesTask(IPrintTemplateService printTemplateService)
```


### Methods

#### Execute

```csharp
public override PipelineResult<Store> Execute(InitStorePipelineArgs args)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
