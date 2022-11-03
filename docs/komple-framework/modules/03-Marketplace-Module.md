# Marketplace Module

Marketplace Module is used for selling/buying tokens within a project.

Marketplace Module can access any collection that is created under the same project as long as the collection is not blacklisted.

#### Related Modules

- [Fee Module](/docs/komple-framework/modules/01-Fee-Module.md) is utilized for determining the fee for selling/buying tokens.
- [Token Module](/docs/komple-framework/modules/08-Token-Module.md) is utilized for the royalty address resolution.
- [Permission Module](/docs/komple-framework/modules/07-Permission-Module.md) is utilized for buying with permissions.

## Listing Types

There are two types of listings available in the Marketplace Module:

- Fixed listing
- Auction listing

### Fixed Listing

Fixed listings are listings that are sold for a fixed price. This is the most common type of listing.

**10 $JUNO** for a single NFT is a fixed listing.

### Auction Listing

:::info

This is not a live feature. Still in development process.

:::

Auction listings are listings that are sold for a price that is determined by the highest bidder. These listings are usually active in a time frame.

## Listing and Buying Tokens

This part will cover fixed listing only. Auction listing will be covered in the future.

### Listing Tokens

There are a couple of prerequisites before listing tokens:

#### Collections

- Collections must be in the same project as the Marketplace Module
- Collections must not be blacklisted
- Collections must not have transfer, send and burn locked

#### Tokens

- Tokens not have transfer, send and burn locked
- Users must own the tokens they want to list
- Tokens must not be listed already

#### Authorization

- Users need to authorize the Marketplace Module to transfer the tokens

If all of the prerequisites are met, tokens can be listed and they are locked from transferring, sending or burning.

### Buying Tokens

There are some checks that are done before buying a token:

#### Funds

- Exact amount of funds must be sent
- If there is a Fee Module present in the project
    - If fees are enabled, fee amount is calculated and deducted from the funds
    - If royalties are enabled, royalty amount is calculated and deducted from the funds

#### Ownership

- Buying user cannot be the owner of the token.

If all of the checks are passed: 

- The token is transferred to the buyer.
- The funds are transferred to the seller.
- If there is a fee, it is transferred to the addresses defined in the module.
- If there is a royalty, it is transferred to the addresses defined in the module.
- Token is unlocked and can be transferred, sent or burned again.

## Permissions

Just like in Mint Module and Merge Module, Marketplace Module can also access permissioning system.

Normal buy operation can be locked from usage and it can be routed through the permissioned buy endpoint. Permissions must be set in Permission Module prior to usage for this endpoint to work. 