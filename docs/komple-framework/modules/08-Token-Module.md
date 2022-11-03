# Token Module

Token Module is used for managing tokens and minting operations. 

This is module is basically a wrapper around the [cw721-base contract](https://github.com/CosmWasm/cw-nfts/tree/main/contracts/cw721-base) with added functionality such as:

- Contract level locks for minting, burning, transfering and sending tokens
- Token level locks for minting, burning, transfering and sending tokens
- Sub module support for Metadata and Whitelist Modules
- Updated mint method with checks based on configuration

All the existing cw721-base functionality is available as it is in the Token Module.

#### Related Modules

- [Mint Module](/docs/komple-framework/modules/06-Mint-Module.md) is used as the parent module of Token Module.
- [Whitelist Module](/docs/komple-framework/modules/09-Whitelist-Module.md) is utilized on checking the whitelist information. It is used as a sub module of Token Module.
- [Metadata Module](/docs/komple-framework/modules/05-Metadata-Module.md) is created on instantiation. It is used as a sub module of Token Module.

## Collections

In Komple Framework, "Token Module" and "Collections" mean the same thing. For every colletion, a new Token Module is instantiated.

While they are the same thing, it doesn't need to know every detail about a collection. Only the collection configuration is needed in Token Module.

### Collection Config

When a new collection is created, the following configuration is set:

- `per_address_limit` - The maximum number of tokens that can be minted by a single address. This is set to `None` by default so there is no limit.
- `start_time` - The start time of the collection. This is set to `None` by default so the collection is active immediately.
- `max_token_limit` - The maximum number of tokens that can be minted in total. This is set to `None` by default so there is no limit.
- `ipfs_link` - The IPFS link of the collection. This is set to `None` by default.

These are all updatable by the admin.

## Locks

Locks are a way to prevent certain operations on the contract. There are two types of locks:

- Contract level locks
- Token level locks

This locking mechanism is useful in situations where:

- Not letting users burn tokens to utilize them in a game
- Not letting users transfer tokens for a gated transfer mechanism
- Not letting users mint tokens for a gated minting mechanism

### Contract Level Locks

When contract level locks are enabled, that locked operation will not be available for any token.

### Token Level Locks

When token level locks are enabled, that locked operation will not be available for that specific token.

This is mostly used by other modules for locking tokens for specific operations:

- When listing a token on the Marketplace Module
- When using the swap feature on Swap Module

## Operations

There are four different operations can be made on Token Module:

- Minting tokens
- Burning tokens
- Transfering tokens
- Sending tokens

### Minting Tokens

On minting, the following checks are performed:

#### Configuration checks

- Making sure `per_address_limit` is not exceeded
- Making sure `max_token_limit` is not exceeded
- Making sure `start_time` has not passed

#### Lock checks

- Making sure minting is not locked contract level
- Making sure minting is not locked token level

#### Whitelist checks

- Making sure the user is whitelisted ifd whitelist is active
- Making sure `per_address_limit` is not exceeded on Whitelist Module if whitelist is active

### Burning Tokens

Burning is same as cw721-base burning but with few extra steps:

- Making sure burning is not locked contract level
- Making sure burning is not locked token level
- Unlinking the token from its metadata on Metadata Module

### Transferring and Sending Tokens

Transfer and send works the same as cw721-base transfer and send but with few extra steps:

- Making sure the operation locked contract level
- Making sure the operation locked token level

## Sub Modules

Metadata and Whitelist Modules are connected to the Token Module as sub modules.

### Metadata Module

Metadata Module is created when the Token Module is instantiated. 

When a token is minted, the metadata is automatically linked in the Metadata Module. Based on the configuration, the metadata can be added with IFPS link before linking it to the token.

### Whitelist Module

Whitelist Module can be created at any time after the Token Module is instantiated. 
