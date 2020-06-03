---
title: ILogger
description: API reference for ILogger in Vendr, the eCommerce solution for Umbraco v8+
---
## ILogger

Defines the logging service.

```csharp
public interface ILogger
```

**Namespace**
* [Vendr.Core.Logging](../)

### Methods

#### Debug (1 of 2)

Logs a debugging message.

```csharp
public void Debug(Type reporting, string message)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| reporting | The reporting type. |
| message | A message. |

---

#### Debug (2 of 2)

Logs a debug message.

```csharp
public void Debug(Type reporting, string messageTemplate, params object[] propertyValues)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| reporting | The reporting type. |
| messageTemplate | A message template. |
| propertyValues | Property values. |


---

#### Error (1 of 5)

Logs an error message with an exception.

```csharp
public void Error(Type reporting, Exception exception, string message)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| reporting | The reporting type. |
| exception | An exception. |
| message | A message. |

---

#### Error (2 of 5)

Logs an error exception.

```csharp
public void Error(Type reporting, Exception exception)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| reporting | The reporting type. |
| exception | An exception. |

**Remarks**

The message string is unspecified and is implementation-specific.

---

#### Error (3 of 5)

Logs an error message.

```csharp
public void Error(Type reporting, string message)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| reporting | The reporting type. |
| message | A message. |

---

#### Error (4 of 5)

Logs an error message with an exception.

```csharp
public void Error(Type reporting, Exception exception, string messageTemplate, 
    params object[] propertyValues)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| reporting | The reporting type. |
| exception | An exception. |
| messageTemplate | A message template. |
| propertyValues | Property values. |

---

#### Error (5 of 5)

Logs an error message.

```csharp
public void Error(Type reporting, string messageTemplate, params object[] propertyValues)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| reporting | The reporting type. |
| messageTemplate | A message template. |
| propertyValues | Property values. |


---

#### Fatal (1 of 5)

Logs a fatal message with an exception.

```csharp
public void Fatal(Type reporting, Exception exception, string message)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| reporting | The reporting type. |
| exception | An exception. |
| message | A message. |

---

#### Fatal (2 of 5)

Logs a fatal exception.

```csharp
public void Fatal(Type reporting, Exception exception)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| reporting | The reporting type. |
| exception | An exception. |

**Remarks**

The message string is unspecified and is implementation-specific.

---

#### Fatal (3 of 5)

Logs a fatal message.

```csharp
public void Fatal(Type reporting, string message)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| reporting | The reporting type. |
| message | A message. |

---

#### Fatal (4 of 5)

Logs a fatal message with an exception.

```csharp
public void Fatal(Type reporting, Exception exception, string messageTemplate, 
    params object[] propertyValues)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| reporting | The reporting type. |
| exception | An exception. |
| messageTemplate | A message template. |
| propertyValues | Property values. |

---

#### Fatal (5 of 5)

Logs a fatal message.

```csharp
public void Fatal(Type reporting, string messageTemplate, params object[] propertyValues)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| reporting | The reporting type. |
| messageTemplate | A message template. |
| propertyValues | Property values. |


---

#### Info (1 of 2)

Logs an information message.

```csharp
public void Info(Type reporting, string message)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| reporting | The reporting type. |
| message | A message. |

---

#### Info (2 of 2)

Logs a info message.

```csharp
public void Info(Type reporting, string messageTemplate, params object[] propertyValues)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| reporting | The reporting type. |
| messageTemplate | A message template. |
| propertyValues | Property values. |


---

#### IsEnabled

Determines if logging is enabled at a specified level, for a reporting type.

```csharp
public bool IsEnabled(Type reporting, LogLevel level)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| reporting | The reporting type. |
| level | The level. |


---

#### Verbose (1 of 2)

Logs a verbose message.

```csharp
public void Verbose(Type reporting, string message)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| reporting | The reporting type. |
| message | A message. |

---

#### Verbose (2 of 2)

Logs a verbose message.

```csharp
public void Verbose(Type reporting, string messageTemplate, params object[] propertyValues)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| reporting | The reporting type. |
| messageTemplate | A message template. |
| propertyValues | Property values. |


---

#### Warn (1 of 4)

Logs a warning message.

```csharp
public void Warn(Type reporting, string message)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| reporting | The reporting type. |
| message | A message. |

---

#### Warn (2 of 4)

Logs a warning message.

```csharp
public void Warn(Type reporting, string messageTemplate, params object[] propertyValues)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| reporting | The reporting type. |
| messageTemplate | A message template. |
| propertyValues | Property values. |

---

#### Warn (3 of 4)

Logs a warning message with an exception.

```csharp
public void Warn(Type reporting, Exception exception, string message)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| reporting | The reporting type. |
| exception | An exception. |
| message | A message. |

---

#### Warn (4 of 4)

Logs a warning message with an exception.

```csharp
public void Warn(Type reporting, Exception exception, string messageTemplate, 
    params object[] propertyValues)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| reporting | The reporting type. |
| exception | An exception. |
| messageTemplate | A message template. |
| propertyValues | Property values. |


**Remarks**

Message templates in logging methods follow the Message Templates specification available at https://messagetemplates.org/ in order to support structured logging.

Implementations must ensure that they support these templates. Note that the specification includes support for traditional C# numeric placeholders.

For instance, "Processed {Input} in {Time}ms."

<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->
