---
sidebar_position: 6
title: Executing Contracts
---

# Executing Contracts

The execute client object can be found in each module and permission objects:

```typescript
const hubModuleQueryClient = kompleClient.hubModule("CONTRACT_ADDRESS").client
```

All the available messages in the execute interface of the contract can be found in the `client` object.

```typescript
// Registering Mint Module to Hub Module
const data = kompleClient
    .hubModule("CONTRACT_ADDRESS")
    .client.registerModule({ codeId: 250, module: "mint" })

// Listing a token for sale in Marketplace Module
const data = kompleClient
    .marketplaceModule("CONTRACT_ADDRESS")
    .client.listFixedToken({
        collectionId: 10,
        tokenId: 5,
        price: "1000000"
    })
```
