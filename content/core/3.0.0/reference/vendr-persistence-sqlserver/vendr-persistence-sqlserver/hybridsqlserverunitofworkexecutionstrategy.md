---
title: HybridSqlServerUnitOfWorkExecutionStrategy
description: API reference for HybridSqlServerUnitOfWorkExecutionStrategy in Vendr, the eCommerce solution for Umbraco
---
## HybridSqlServerUnitOfWorkExecutionStrategy

```csharp
public class HybridSqlServerUnitOfWorkExecutionStrategy : IUnitOfWorkExecutionStrategy
```

**Inheritance**

* interface [IUnitOfWorkExecutionStrategy](../../../vendr-common/vendr-common/iunitofworkexecutionstrategy/)

**Namespace**
* [Vendr.Persistence.Sqlserver](../)

### Constructors

#### HybridSqlServerUnitOfWorkExecutionStrategy

```csharp
public HybridSqlServerUnitOfWorkExecutionStrategy(
    IConnectionStringResolver connectionStringResolver)
```


### Methods

#### Execute&lt;TResult&gt;

```csharp
public TResult Execute<TResult>(Func<TResult> operation, 
    Func<ExecutionResult<TResult>> verifySucceeded = null)
```


---

#### ExecuteAsync&lt;TResult&gt;

```csharp
public Task<TResult> ExecuteAsync<TResult>(Func<CancellationToken, Task<TResult>> operation, 
    Func<CancellationToken, Task<ExecutionResult<TResult>>> verifySucceeded = null, 
    CancellationToken cancellationToken = default(CancellationToken))
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Persistence.SqlServer.dll -->
