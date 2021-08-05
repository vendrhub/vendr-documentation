---
title: ConfigureSmtpClientTask
description: API reference for ConfigureSmtpClientTask in Vendr, the eCommerce solution for Umbraco
---
## ConfigureSmtpClientTask

```csharp
public class ConfigureSmtpClientTask : 
    PipelineTaskWithTypedArgsBase<EmailSendPipelineArgs, EmailContext>
```

**Inheritance**

* class [PipelineTaskWithTypedArgsBase&lt;!0,!1&gt;](../../../vendr-common/vendr-common-pipelines/pipelinetaskwithtypedargsbase-2/)

**Namespace**
* [Vendr.Umbraco.Pipelines.Email.Tasks](../)

### Constructors

#### ConfigureSmtpClientTask

```csharp
public ConfigureSmtpClientTask(IOptions<GlobalSettings> umbracoSettings)
```


### Methods

#### Execute

```csharp
public override PipelineResult<EmailContext> Execute(EmailSendPipelineArgs args)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Umbraco.dll -->