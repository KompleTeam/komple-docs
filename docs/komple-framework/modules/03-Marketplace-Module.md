# Marketplace Module

Marketplace Module is used for selling/buying tokens within a project.

Marketplace Module can access any collection that is created under the [Mint Module](/komple-framework/modules/Mint-Module) as long as the collection is not blacklisted.

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

This part will cover fixed listing only. Fixed listing can be defined as:

```json
{
    collection_id: 1,
    token_id: 1,
    price: 10,
    owner: "juno1..."
}
```

### Listing

There are a couple of prerequisites before listing tokens:

1. The collection must be created within the same project. Cross-project listings are not supported yet.
2. The collection must not be blacklisted.
3. The collection must not have transfer, send and burn locked.
4. The tokens not have transfer, send and burn locked.
5. Users must own the tokens that they want to list.
6. The tokens must not be listed already.
7. Users need to authorize the Marketplace Module to transfer the tokens.

If all of the prerequisites are met, the tokens can be listed and they are locked from transferring, sending or burning.

### Buying

There are some checks that are done before buying a token:

1. Buying user cannot be the owner of the token.
2. Exact amount of funds must be sent.
3. If there is a [Fee Module](/komple-framework/modules/Fee-Module) present in the project, fees and royalties is calculated and deducted from the funds if available in the module.

If all of the checks are passed: 

- The token is transferred to the buyer.
- The funds are transferred to the seller.
- If there is a fee, it is transferred to the addresses defined in the module.
- If there is a royalty, it is transferred to the addresses defined in the module.
- Token is unlocked and can be transferred, sent or burned again.

## Permissions

Just like in [Mint Module](/komple-framework/modules/Mint-Module) and [Merge Module](/komple-framework/modules/Merge-Module), Marketplace Module can also access permissioning system.

Normal buy operation can be locked from usage and it can be routed through the permissioned buy endpoint. Permissions must be set in [Permission Module](/komple-framework/modules/Permission-Module) prior to usage for this endpoint to work. 