---
title: LoggerExtensions
description: API reference for LoggerExtensions in Vendr, the eCommerce solution for Umbraco v8+
---
## LoggerExtensions

Provides extension methods for the [`ILogger`](../../vendr-core-logging/ilogger/) interface.

```csharp
public static class LoggerExtensions
```

**Namespace**
* [Vendr.Core](../)

### Methods

#### Debug&lt;T&gt; (1 of 2)

Logs a debugging message.

```csharp
public static void Debug<T>(this ILogger logger, string message)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| T | The reporting type. |
| logger | The logger. |
| message | A message. |

---

#### Debug&lt;T&gt; (2 of 2)

Logs a debugging message.

```csharp
public static void Debug<T>(this ILogger logger, string messageTemplate, 
    params object[] propertyValues)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| T | The reporting type |
| logger | The logger. |
| messageTemplate | A message template. |
| propertyValues | Property values. |


---

#### Error&lt;T&gt; (1 of 5)

Logs an error message with an exception.

```csharp
public static void Error<T>(this ILogger logger, Exception exception, string message)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| T | The reporting type. |
| logger | The logger. |
| message | A message. |
| exception | An exception. |

---

#### Error&lt;T&gt; (2 of 5)

Logs an error message with an exception.

```csharp
public static void Error<T>(this ILogger logger, Exception exception, string messageTemplate, 
    params object[] propertyValues)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| T | The reporting type. |
| logger | The logger. |
| exception | An exception. |
| messageTemplate | A message template. |
| propertyValues | Property values. |

---

#### Error&lt;T&gt; (3 of 5)

Logs an error exception.

```csharp
public static void Error<T>(this ILogger logger, Exception exception)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| T | The reporting type. |
| logger | The logger. |
| exception | An exception. |

---

#### Error&lt;T&gt; (4 of 5)

Logs an error message.

```csharp
public static void Error<T>(this ILogger logger, string message)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| T | The reporting type. |
| logger | The logger. |
| message | A message. |

---

#### Error&lt;T&gt; (5 of 5)

Logs an error message.

```csharp
public static void Error<T>(this ILogger logger, string messageTemplate, 
    params object[] propertyValues)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| T | The reporting type. |
| logger | The logger. |
| messageTemplate | A message template. |
| propertyValues | Property values. |


---

#### Fatal&lt;T&gt; (1 of 2)

Logs a fatal message.

```csharp
public static void Fatal<T>(this ILogger logger, Exception exception, string message)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| T | The reporting type. |
| logger | The logger. |
| exception | An exception. |
| message | A message. |

---

#### Fatal&lt;T&gt; (2 of 2)

Logs a fatal message.

```csharp
public static void Fatal<T>(this ILogger logger, Exception exception, string messageTemplate, 
    params object[] propertyValues)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| T | The reporting type. |
| logger | The logger. |
| exception | An exception. |
| messageTemplate | A message template. |
| propertyValues | Property values. |


---

#### Info&lt;T&gt; (1 of 2)

Logs an information message.

```csharp
public static void Info<T>(this ILogger logger, string message)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| T | The reporting type. |
| logger | The logger. |
| message | A message. |

---

#### Info&lt;T&gt; (2 of 2)

Logs a information message.

```csharp
public static void Info<T>(this ILogger logger, string messageTemplate, 
    params object[] propertyValues)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| T | The reporting type |
| logger | The logger. |
| messageTemplate | A message template. |
| propertyValues | Property values. |


---

#### IsEnabled&lt;T&gt;

Determines if logging is enabled at a specified level, for a reporting type.

```csharp
public static bool IsEnabled<T>(this ILogger logger, LogLevel level)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| T | The reporting type. |
| logger | The logger. |
| level | The level. |


---

#### Verbose&lt;T&gt; (1 of 2)

Logs a verbose message.

```csharp
public static void Verbose<T>(this ILogger logger, string message)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| T | The reporting type. |
| logger | The logger. |
| message | A message. |

---

#### Verbose&lt;T&gt; (2 of 2)

Logs a verbose message.

```csharp
public static void Verbose<T>(this ILogger logger, string messageTemplate, 
    params object[] propertyValues)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| T | The reporting type. |
| logger | The logger. |
| messageTemplate | A message template. |
| propertyValues | Property values. |


---

#### Warn&lt;T&gt; (1 of 4)

Logs a warning message.

```csharp
public static void Warn<T>(this ILogger logger, string message)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| T | The reporting type. |
| logger | The logger. |
| message | A message. |

---

#### Warn&lt;T&gt; (2 of 4)

Logs a warning message.

```csharp
public static void Warn<T>(this ILogger logger, string messageTemplate, 
    params object[] propertyValues)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| T | The reporting type. |
| logger | The logger. |
| messageTemplate | A message template. |
| propertyValues | Property values. |

---

#### Warn&lt;T&gt; (3 of 4)

Logs a warning message with an exception.

```csharp
public static void Warn<T>(this ILogger logger, Exception exception, string message)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| T | The reporting type. |
| logger | The logger. |
| exception | An exception. |
| message | A message. |

---

#### Warn&lt;T&gt; (4 of 4)

Logs a warning message with an exception.

```csharp
public static void Warn<T>(this ILogger logger, Exception exception, string messageTemplate, 
    params object[] propertyValues)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| T | The reporting type. |
| logger | The logger. |
| exception | An exception. |
| messageTemplate | A message template. |
| propertyValues | Property values. |


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
