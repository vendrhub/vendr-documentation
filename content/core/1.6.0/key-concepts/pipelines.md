---
title: Pipelines
description: Performing sequential tasks with Pipelines in Vendr, the eCommerce solution for Umbraco v8+
---

Pipelines are a Vendr feature that allow a series of tasks to be performed in a set sequence with the input of a given task being the output of the preceding task. In this way it allows an overall result to be built up as an input is passed through these individual tasks, rather than being calculated in one go via one larger task.

The advantage of using a Pipeline is that it makes it much easier to insert additional steps into the process as pipeline tasks can be added or removed from the pipeline sequence.

How this benefits Vendr developers is that where we make use of Pipelines for certain tasks, it allows an additional point at which developers can interject some custom logic, tweaking how Vendr works. For example, an additional task could be injected into the `CalculateOrderPipeline` to alter how an Order is calculated, or a task could be injected into the `EmailSendPipeline` to add a dynamic attachment to an email.

## Example Pipeline task

An example of a Pipeline task would look something like this:

````csharp
public class AddCustomAttachmentTask : PipelineTaskWithTypedArgsBase<EmailSendPipelineArgs, EmailContext>
{
    public override PipelineResult<EmailContext> Execute(EmailSendPipelineArgs args)
    {
        var attachment = new Attachment(File.OpenRead("path\to\license.lic"), "license.lic");

        args.EmailContext.MailMessage.Attachments.Add(attachment);

        return Ok(args.EmailContext);
    }
}

````

All Pipeline tasks inherit from a base class `PipelineTaskWithTypedArgsBase<TPipelineArgs, TModel>` where `TPipelineArgs` is the Type of the arguments supported by the pipeline and `TModel` is the pipelines return model Type. You then need to implement an `Execute` method which accepts an instance of the arguments type as input and expects a `PipelineResult<TModel>` as it's output. Inside this method you can perform your custom logic as required and then to complete the pipeline task, if the task was successful you can call `Ok(TModel)` passing in the updated `TModel` instance to return, otherwise you can call `Fail()` to fail the whole pipeline.

All pipelines occur within a [Unit of Work](../unit-of-work/) and so should any Pipeline task fail, the whole pipeline will fail and no changes will the persisted.

## Registering a Pipeline task

Pipeline tasks are [registered via a Composer](../dependency-injection/#registering-dependencies) using the appropriate `With{PipelineName}Pipeline()` composition extension method to identify the pipeline you want to extend and then calling the `Append<TTask>()` method to append your task onto the end of that pipeline.


````csharp
public void Compose(Composition composition)
{
    composition.WithSendEmailPipeline()
        .Append<AddCustomAttachmentTask>();
}
````

You can also control the order of when Pipeline tasks run, before or after another task, by appending them via the `InsertBefore<TTask>()` or `InsertAfter<TTask>()` methods respectively.

````csharp
public void Compose(Composition composition)
{
    // Register AddCustomAttachmentTask to execute before the SomeOtherTask handler
    composition.WithSendEmailPipeline()
        .InsertBefore<SomeOtherTask, AddCustomAttachmentTask>();

    // Register AddCustomAttachmentTask to execute after the SomeOtherTask handler
    composition.WithSendEmailPipeline()
        .InsertAfter<SomeOtherTask, AddCustomAttachmentTask>();
}
````