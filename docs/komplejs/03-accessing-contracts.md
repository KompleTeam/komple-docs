---
sidebar_position: 4
title: Accessing Contracts
---

# Accessing Contracts

After getting the `kompleClient` object, you can access the modules and permissions with:

```typescript
// Getting the hub module for creating a project
const hubModule = kompleClient.hubModule()

// Getting the token module for sending a query to a collection
const tokenModule = kompleClient.tokenModule("CONTRACT_ADDRESS")
```

These modules and permission getter methods take a contract address as a parameter.

After getting the correct module/permission, following methods for a contract can be called:

- **Instantiate**
- **Query**
- **Execute**


If the contract address is not provided, only **Instantiate** method will be available for the module.