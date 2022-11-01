# Merge Module

Merge module is used for merging multiple tokens and minting new ones - burning the old tokens in the process. 

## Merge Types

There are three types of merging possible within the module:

- Normal merge
- Admin merge
- Permission merge

There are no differences on the actual merge logic between these types. Only difference is the authorization and permissioning system that is used.

## Merging Tokens

There are a couple of prerequisites before merging tokens. These are the same for all types of merges:

1. The collection must be created within the same project. Cross-project merges are not supported yet.
2. The collection must not be blacklisted.
3. The collection must not have mint and burn locked.
4. The tokens to burn must not have burn locked.
5. The token to mint must not have mint locked.
6. The tokens to burn must not be an empty list.
7. Users must own the tokens that they want to burn.
8. Users must authorize the Merge Module to burn the tokens.
9. Merge Module must have operator access on Mint Module to mint the new token.

After all of the prerequisites are met, the tokens can be merged.

## Permissions

Just like in [Mint Module](/komple-framework/modules/Mint-Module) and [Marketplace Module](/komple-framework/modules/Marketplace-Module#permissions), Merge Module can also access permissioning system.

Normal merge operation can be locked from usage and it can be routed through the permissioned merge endpoint. Permissions must be set in [Permission Module](/komple-framework/modules/Permission-Module) prior to usage for this endpoint to work.

## Examples

Merge types are defined as:

```rust
pub struct MergeBurnMsg {
    // Collection ID of the collection that the tokens are in
    pub collection_id: u32,
    // Token ID of the token to burn
    pub token_id: u32
}

pub struct MergeMsg {
    // Address of the owner of the new token
    pub recipient: String,
    // Collection ID of the collection that the new token will be minted to
    pub mint_id: u32,
    // Optional field for metadata linking
    pub metadata_id: Option<u32>,
    // List of tokens to burn
    pub burn_ids: Vec<MergeBurnMsg>
}
```

Execute messages can be defined as:

```rust
pub enum ExecuteMsg::Merge { msg: MergeMsg }
```

Permission merge is the same as normal merge but with additional permission parameter:

```rust
pub enum ExecuteMsg::PermissionMerge { permission_msg: Binary, merge_msg: MergeMsg }
```