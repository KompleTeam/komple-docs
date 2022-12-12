---
sidebar_position: 3
title: Creating Komple Client
---

# Creating Komple Client

The `kompleClient` object can be used to access official modules and permissions and can be created created with:

```typescript
// Importing the library
import KompleClient from "komplejs"

// This is the client and signer used for signing transactions
let signingClient, signer

// Initializing the Komple client object
const kompleClient = new KompleClient(signingClient, signer)
```

Additionally client and signer objects can be accessed using:

```typescript
// SigningCosmWasmClient
const signingClient = kompleClient.client

// OfflineSigner
const signer = kompleClient.signer
```
