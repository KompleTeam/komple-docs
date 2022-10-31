# Hub Module

Hub Module is the heart of the Komple Framework. It's used for the creation of different modules and used for address resolution.

Several things can be done with Hub Module:

- Module instantiation
- Module address resolution

Every projects starts out with a Hub Module and has only one.

## Module Registry

Module registry is a way of adding modules to be used in the Hub module. 

After registration, the new module's address is saved to hub storage. This address is later used in internal messages between contracts within the framework.

All of the Komple Framework modules can be registered through the hub.

While the modules provided by Komple is going to grow in time, in some cases those modules might not be enough for making applications work the way they are imagined. Sometimes there needs to be some custom logic added to the framework.

Just like the official modules, additional modules can be registered too.

## Removing Modules

When a module needs to be removed, this is a one way operation. 

After a module's address is removed it cannot be added back to the registry. These module addresses come from registration only.

If the module is needed again, it needs to be registered again.

## Hub Communication Framework

:::info

This is not a live feature. Still in thought progress.

:::

As described above, Hub module is the center piece of Komple Framework. 

With that said, it will be possible to open communication between two different hubs for implementing complex application logic. Minting, merging, swapping and other kinds of operations will be invoked by an outside Hub. 

This will allow the projects to collaborate on a decentralized level.