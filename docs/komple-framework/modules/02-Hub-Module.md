# Hub Module

Hub Module is the heart of the Komple Framework. It's main purpose is to act as a registry for different modules and their addresses.

Every projects starts out with a Hub Module and has only one.

## Module Registry

Module registry is a way of adding modules to be used by the framework.

After registration, the new module's address is saved to Hub Module's storage. This address is later used in internal messages between contracts within the framework.

While the framework provides the tools to develop projects, in some cases those modules might not be enough for making applications work the way they are imagined. Sometimes there needs to be some custom logic added to the framework.

Just like the official modules, additional custom modules can be registered too. See [Custom Modules](/docs/komple-framework/modules/10-Custom-Modules.md) to learn more about developing custom modules.

## Removing Modules

When a module's address is removed, it cannot be added back to the registry without registering it again. Because of this, it's important to make sure that the module is not needed anymore before removing it.

After removing a module, the execute messages on that module will be locked and will not be callable anymore. Also the contract's admin will be set to `None` to prevent any further changes.

## Hub Communication Framework

:::info

This is not a live feature. Still in thought progress.

:::

As described above, Hub module is the center piece of Komple Framework. 

With that said, it will be possible to open communication between two different hubs for implementing complex application logic. Minting, merging, swapping and other kinds of operations will be invoked by an outside Hub. 

This will allow the projects to collaborate on a decentralized level.