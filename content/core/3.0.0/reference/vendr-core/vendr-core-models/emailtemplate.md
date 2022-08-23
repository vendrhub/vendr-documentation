---
title: EmailTemplate
description: API reference for EmailTemplate in Vendr, the eCommerce solution for Umbraco
---
## EmailTemplate

```csharp
public class EmailTemplate : EmailTemplateReadOnly
```

**Inheritance**

* class [EmailTemplateReadOnly](../emailtemplatereadonly/)

**Namespace**
* [Vendr.Core.Models](../)

### Methods

#### Create (1 of 2)

```csharp
public static EmailTemplate Create(IUnitOfWork uow, Guid storeId, string alias, string name)
```

---

#### Create (2 of 2)

```csharp
public static EmailTemplate Create(IUnitOfWork uow, Guid id, Guid storeId, string alias, 
    string name)
```


---

#### SetAlias

```csharp
public EmailTemplate SetAlias(string alias)
```


---

#### SetBccAddress

```csharp
public EmailTemplate SetBccAddress(string emailAddress)
```


---

#### SetBccAddresses (1 of 2)

```csharp
public EmailTemplate SetBccAddresses(IEnumerable<string> emailAddresses)
```

---

#### SetBccAddresses (2 of 2)

```csharp
public EmailTemplate SetBccAddresses(string emailAddresses)
```


---

#### SetCategory

```csharp
public EmailTemplate SetCategory(TemplateCategory category)
```


---

#### SetCcAddress

```csharp
public EmailTemplate SetCcAddress(string emailAddress)
```


---

#### SetCcAddresses (1 of 2)

```csharp
public EmailTemplate SetCcAddresses(IEnumerable<string> emailAddresses)
```

---

#### SetCcAddresses (2 of 2)

```csharp
public EmailTemplate SetCcAddresses(string emailAddresses)
```


---

#### SetName (1 of 2)

```csharp
public EmailTemplate SetName(string name)
```

---

#### SetName (2 of 2)

```csharp
public EmailTemplate SetName(string name, string alias)
```


---

#### SetReplyToAddress

```csharp
public EmailTemplate SetReplyToAddress(string emailAddress)
```


---

#### SetReplyToAddresses (1 of 2)

```csharp
public EmailTemplate SetReplyToAddresses(IEnumerable<string> emailAddresses)
```

---

#### SetReplyToAddresses (2 of 2)

```csharp
public EmailTemplate SetReplyToAddresses(string emailAddresses)
```


---

#### SetSender

```csharp
public EmailTemplate SetSender(string name, string emailAddress)
```


---

#### SetSenderAddress

```csharp
public EmailTemplate SetSenderAddress(string emailAddress)
```


---

#### SetSenderName

```csharp
public EmailTemplate SetSenderName(string name)
```


---

#### SetSendToCustomer

```csharp
public EmailTemplate SetSendToCustomer(bool sendToCustomer)
```


---

#### SetSortOrder

```csharp
public EmailTemplate SetSortOrder(int sortOrder)
```


---

#### SetSubject

```csharp
public EmailTemplate SetSubject(string subject)
```


---

#### SetTemplateView

```csharp
public EmailTemplate SetTemplateView(string templateViewPath)
```


---

#### SetToAddress

```csharp
public EmailTemplate SetToAddress(string emailAddress)
```


---

#### SetToAddresses (1 of 2)

```csharp
public EmailTemplate SetToAddresses(IEnumerable<string> emailAddresses)
```

---

#### SetToAddresses (2 of 2)

```csharp
public EmailTemplate SetToAddresses(string emailAddresses)
```


<!-- DO NOT EDIT: generated by xmldocmd for Vendr.Core.dll -->