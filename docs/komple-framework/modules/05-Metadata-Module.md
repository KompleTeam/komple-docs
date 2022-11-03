# Metadata Module

Metadata Module is used to store NFT metadata on-chain. 

Main use case of an on-chain metadata that it allows you to store metadata in a decentralized way and it can be updated to work with custom logic that needs mutable information.

#### Related Modules

- [Token Module](/docs/komple-framework/modules/08-Token-Module.md) is the parent module of Metadata Module. 

## Metadata Types

There are several types of metadata for different use cases.

### Standard Metadata

This type of metadata is the most basic one. Every token and their metadata is unique and matched to the same token ID.

Some examples would be:

- A single playing card NFT in a deck collection
- A single color NFT in colors collection

### Shared Metadata

This type of metadata is mainly used for linking a single metadata to multiple tokens. Every token is still unique but the metadata is shared between them.

Some examples would be:

- A knife NFT that is minted by 100 users
- A spell NFT that is minted by 50 users

In these cases, the metadata will be same for all the tokens but the token IDs will be different.

### Dynamic Metadata

This type of metadata is used for metadata updates based on some custom logic. Both tokens and their metadatas are unique.

Some examples would be:

- A sword NFT that is minted but upgraded over time
- A hero NFT that engages in battles and loses health

These metadatas come from a single source just like shared metadata but duplicated on minting for each token. If updates are needed, the metadata is updated on-chain and the changes are reflected on the token.

## Adding Metadata

Metadata about the tokens must be created before minting. Based on the metadata type, addition is different.

On [Standard](#standard-metadata), metadata is **automatically** added to Metadata Module on minting. It is created from the IPFS url that is configured in the [Token Module](/docs/komple-framework/modules/08-Token-Module.md).

On [Shared](#shared-metadata) and [Dynamic](#dynamic-metadata), metadata **must** be created beforehand for each token.

## Linking Metadata

Because metadata lives on Metadata Module, it has to be linked to a token. Based on the metadata type, linking is different.

On [Standard](/docs/komple-framework/modules/08-Token-Module.md), metadata is **automatically** linked with the token id.

- If token ID is 10 on minting, metadata ID will be 10
- If token ID is 100 on minting, metadata ID will be 100

On [Shared](#shared-metadata) and [Dynamic](#dynamic-metadata), additional metadata ID **must** be provided on minting.

- If token ID is 10 on minting, metadata ID can be 5
- If token ID is 100 on minting, metadata ID can be 50

## Contract State

Three different state variables are used for storing metadata.

```rust
// All the raw metadatas that are available on the contract
pub const METADATA: Map<u32, Metadata> = Map::new(METADATA_NAMESPACE);

// Metadatas that are linked to a token
// This is used for standard and shared metadata
pub const LINKED_METADATA: Map<u32, u32> = Map::new(LINKED_METADATA_NAMESPACE);

// Metadatas that are linked to a token
// This is used for dynamic metadata
pub const DYNAMIC_LINKED_METADATA: Map<u32, Metadata> = Map::new(DYNAMIC_LINKED_METADATA_NAMESPACE);
```

When a new metadata is created, it is added to the `METADATA` map.

On linking a metadata to a token, based on the metadata type it is added to either `LINKED_METADATA` or `DYNAMIC_LINKED_METADATA`.

### Linked Metadata

This state map links the token ID to the metadata ID. When a metadata is updated, it will be reflected in each token that is linked to it as `METADATA` state map is used for updates.

### Dynamic Linked Metadata

This state map links the token ID to the metadata itself. When a metadata is updated, it will be reflected in only that token as this state map is used for updates.

