# Merge Module

Merge module is used for merging multiple tokens and minting new ones - burning the old tokens in the process. 

#### Related Modules

- [Mint Module](/docs/komple-framework/modules/06-Mint-Module.md) is utilized for minting new tokens.
- [Token Module](/docs/komple-framework/modules/08-Token-Module.md) is utilized for burning tokens.
- [Permission Module](/docs/komple-framework/modules/07-Permission-Module.md) is utilized for merging with permissions.

## Merge Types

There are three types of merging possible within the module:

- Normal merge
- Admin merge
- Permission merge

There are no differences on the actual merge logic between these types. Only difference is the authorization and permissioning system that is used.

## Merging Tokens

There are a couple of prerequisites before merging tokens. These are the same for all types of merges:

### Collections

- Collections must be in the same project as the Merge Module
- Collections must not be blacklisted
- Collections must not have mint and burn locked

### Tokens

- Tokens to burn must not have burn locked
- Token to mint must not have mint locked
- Tokens to burn must not be an empty list

### Authorization

- Users must own the tokens that they want to burn
- Users must authorize the Merge Module to burn the tokens
- Merge Module must have operator access on Mint Module to mint the new token

After all of the prerequisites are met, the tokens can be merged.

## Permissions

Just like in Mint Module and Marketplace Module, Merge Module can also access permissioning system.

Normal merge operation can be locked from usage and it can be routed through the permissioned merge endpoint. Permissions must be set in Permission Module prior to usage for this endpoint to work.
