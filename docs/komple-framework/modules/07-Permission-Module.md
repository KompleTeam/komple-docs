# Permission Module

Permission module is a way of enforcing certain queries or custom logic without needing to include them directly in a module.

Projects can integrate different permission types to certain modules for fine tuning the core logic for their application.

## Permission Types

There are several types of permissions available:

- Attribute Permission
- Link Permission
- Ownership Permission

These permissions can be used in different modules for different purposes.

## Permission Registry

Permission registry is a way of adding custom permissions without needing to change the core framework logic.

Just like in the [Hub Module](/docs/komple-framework/modules/02-Hub-Module.md), permissions must be registered before usage.

After successfully registering the new permission, it can be used just like other permissions. Permission module will relay the message to the correct contract based on the message and run permission checks.