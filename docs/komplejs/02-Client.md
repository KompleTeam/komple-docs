---
sidebar_position: 3
title: Creating Komple Client
---

# Creating Komple Client

The client object can be created with:

```typescript
// Importing the library
import KompleClient from "komplejs"
// Importing CosmWasmJS related logic
import { SigningCosmWasmClient, Secp256k1HdWallet } from "cosmwasm"

// Creating the signer using mnemonic
let signer = await Secp256k1HdWallet.fromMnemonic("SOME_MNEMONIC");
// Creating a signing client with RPC and signer
let signingClient = await SigningCosmWasmClient.connectWithSigner(
    "https://rpc.juno-1.deuslabs.fi",
    signer,
)

// Initializing the Komple client object
const kompleClient = new KompleClient(signingClient, signer)
```

This client can be used for doing any action that is possible with Komple Framework. After getting the client we can get a module by calling it's getter method:

```typescript
// Getting the hub module for creating a project
const hubModule = kompleClient.getHubModule()

// Getting the token module for sending a query to a collection
const tokenModule = kompleClient.getTokenModule("CONTRACT_ADDRESS")
```

Client and signer objects can be accessed using:

```typescript
// SigningCosmWasmClient
const signingClient = kompleClient.client

// OfflineSigner
const signer = kompleClient.signer
```
