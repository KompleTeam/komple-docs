# Permission Module

Permission Module is used to perform some actions - execute or query - in front of some of the operations.

Instead of hard coding commonly used pieces of logic into every module that it will be utilized, this system allows the framework to call these features from different modules without effecting their code base.

#### Related Permissions

- [Attribute Permission](/docs/komple-framework/permissions/01-Attribute.md) is utilized for comparing attributes of NFTs.
- [Link Permission](/docs/komple-framework/permissions/02-Link.md) is utilized for checking the link status of collections.
- [Ownership Permission](/docs/komple-framework/permissions/03-Ownership.md) is utilized for checking the ownership of a user for a NFT.

## Permission Types

There are several types of official permissions available:

- Attribute Permission
- Link Permission
- Ownership Permission

These permissions can be used in different modules for different purposes. More info is available in the related permission pages.

## Permission Registry

Just like in Hub Module, Permission Module also has a registery for storing different permissions.

Permission registry is a way of adding custom permissions without needing to change the core framework logic. These permissions must be registered before usage.

After successfully registering the new permission, it can be used just like other permissions. Permission module will relay the message to the correct contract based on the message and run permission checks.

## Removing Permissions

When a permission is removed, it cannot be added back to the registry without registering it again. Because of this, it's important to make sure that the permission is not needed anymore before removing it.

After removing a permission, the execute messages on that permission will be locked and will not be callable anymore. Also the contract's admin will be set to `None` to prevent any further changes.

## Permission Checks

Permission check message takes a `Binary` parameter and decodes it to match the permissions.

```rust
// msg is a Binary value
let data: Vec<PermissionCheckMsg> = from_binary(&msg)?;
```

The `PermissionCheckMsg` is a struct that contains the following fields:

```rust
struct PermissionCheckMsg {
    // Type of the permission
    pub permission_type: String,
    // Data that will be sent to the permission contract
    pub data: Binary,
}
```

:::danger

Permissions that will be used by a module must be set for that module before usage. If a permission is not set and that permission is sent along the permission check message, an error will be thrown.

:::

After decoding the message and making sure that the permissions are valid for that module, the execute messages for each of the permissions are created and sent to perform the checks.
