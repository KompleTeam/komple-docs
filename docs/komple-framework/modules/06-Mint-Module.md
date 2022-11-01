# Mint Module

Mint Module is responsible for managing collections and minting operations.

There are several operations that can be executed:

- Collection creation
- Minting new tokens
- Linking collections to other collections
- Blacklisting collections

Mint Module utilizes two different modules:

- Token module
- Permission module

## Collection Creation

One collection is equal to one token module. So in order to get a collection, token module must be instantiated with the mint module.

After collection creation, all the new collection addresses (token module addresses) are saved in the mint module. This allows the framework to resolve collection addresses by id.

After mint module instantiation, public collection creation is set as **false**. This prevents addresses any other than admin and module operators from creating a new collection. 

If this is set as **true** any address can create a collection within the mint module.

## Minting Tokens

After collection creation, mint module is the only module that has minting privileges over that collection. This means no other contract can be used to mint tokens in a collection.

Because of this every mint message must be relayed from mint module to token module.

There are three methods used for minting new tokens on collections.

- Mint
- Admin Mint
- Permission Mint

### Mint

Mint is the standard entry point for users to mint tokens on collections. This method can also be locked to prevent project level minting. 

### Admin Mint

Admin Mint is the same as as Mint message but it can only be called by admin.

### Permission Mint

This is basically the same as **Mint** method but with permission checks running before the mint operation.

Different permissions can be plugged in for the mint module.

More info can be read under [Permission Module](/docs/komple-framework/modules/07-Permission-Module.md).

## Linking Collections

Some collections can be linked to other collections for minting and more complex actions. When we link a collection to another collection, its id is saved in a list of ids.

Example would be:

- Linking a **Flame Sword** to a **Flame Spell** and a **Normal Sword**
