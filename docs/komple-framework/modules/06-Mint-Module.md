# Mint Module

Mint Module is responsible for managing collections and minting operations.

#### Related Modules

- [Token Module](/docs/komple-framework/modules/08-Token-Module.md) is utilized for creating a new collection.
- [Permission Module](/docs/komple-framework/modules/07-Permission-Module.md) is utilized for minting with permissions.
- [Fee Module](/docs/komple-framework/modules/01-Fee-Module.md) is utilized for determining the fee for minting.
- [Whitelist Module](/docs/komple-framework/modules/09-Whitelist-Module.md) is utilized for checking the whitelist information.

## Collections

There are two type of collections in Komple Framework:

- Standard collection
- Komple collection

## Collection Creation

All the collections are created within the Mint Module. 

After creation, the new collection's address (Token Module address) is saved in the contract state. This allows the framework to resolve a collection's address by collection ID.

### Public Collection Creation

Without changing the default configuration, only the users that have admin privileges will be able to create new collections. This can be changed by updating the public collection creation setting in the module.

After changing the setting, anyone can create a new collection in the module.

## Minting Tokens

Mint Module is the only contract that can mint tokens in Komple Framework. Every collection's minter is set as the Mint Module's address. Because of this every mint message must be relayed from Mint to Token Module.

There are three methods used for minting new tokens on collections.

- Mint
- Admin Mint
- Permission Mint

### Mint

Mint is the standard entry point for users to mint tokens on collections.

Before minting, the following whitelist and price checks are performed:

#### Whitelist Checks

Whitelist Module is used to check for the whitelist status.

If the whitelist is active:

- If user is whitelisted this check passes.
- If user is not whitelisted this minting fails.

If whitelist is not active, this continues to the next check.

#### Price Checks

Fee Module is used to check for two type of prices:

- If whitelist is enabled, the whitelist minting price is checked.
- If whitelist is disabled, the normal minting price is checked.

If there is no price set for the collection, the minting is free.

### Admin Mint

On admin mint, the whitelist and price checks are ignored. This message is only callable by admin and it does not affected by minting lock.

### Permission Mint

This is basically the same as `Admin Mint` method but with permission system.

Different permissions can be plugged in for the mint module. Just like the admin mint, this method is always callable by the admin and will not be affected by the lock.

## Whitelist/Blacklist Collections

By default collections are automatically whitelisted on creation. If needed, they can be blacklisted by the admins.

When a collection is blacklisted, it's address cannot be resolved by the framework. This means no other module can interact with that collection.

The collection can be whitelisted again by the admins.

## Linking Collections

Some collections can be linked to other collections for showing they related in some way. This linked collections can be used for permission checks and in some operations.

When we link a collection to another collection, its ID is saved in a list of IDs.

Some examples would be:

- Merging two tokens and minting a new one but making sure the one that is minted is **linked** to the other two.
- While minting a new token on a collection, also minting a new token on another **linked** collection.

## Permissions

Just like in [Merge Module](/docs/komple-framework/modules/04-Merge-Module.md) and [Marketplace Module](/docs/komple-framework/modules/03-Marketplace-Module.md), Mint Module can also access permissioning system.

Normal mint operation can be locked from usage and it can be routed through the permissioned mint endpoint. Permissions must be set in [Permission Module](/komple-framework/modules/Permission-Module) prior to usage for this endpoint to work.