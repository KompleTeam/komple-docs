---
sidebar_position: 5
title: Querying Contracts
---

# Querying Contracts

The query client object can be found in each module and permission objects:

```typescript
const hubModuleQueryClient = kompleClient.hubModule("CONTRACT_ADDRESS").queryClient
```

All the available messages in the query interface of the contract can be found in the `queryClient` object.

```typescript
// Querying Mint Module address registered in Hub Module
const data = kompleClient
    .hubModule("CONTRACT_ADDRESS")
    .queryClient.moduleAddress({ module: "mint" })

// Getting the list of tokens on sale for a collection in Marketplace Module
const data = kompleClient
    .marketplaceModule("CONTRACT_ADDRESS")
    .queryClient.fixedListings({
        collectionId: 10
    })
```
