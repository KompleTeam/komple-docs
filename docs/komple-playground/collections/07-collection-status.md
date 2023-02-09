# Changing Collection Status

:::info
This section is under https://playground.komple.io/modules/mint/execute
:::

You can change the status of your collection to either **Whitelisted** or **Blacklisted**.

## Whitelisting a Collection

When a collection is created, it is already set as whitelisted. This means the collection address can be resolved by the framework and can be used by other modules.

## Blacklisting a Collection

When a collection is blacklisted, it's address will not be resolved by the framework. This means the collection address can not be used by other modules.

---

To change the status of a collection, select `Blacklist/Whitelist Collection` from the dropdown and fill the following information:

- Collection ID
- Blacklist Collection

### Collection ID

This is the identifier of the collection you want to change the status of.

### Blacklist Collection

This is the switch to change the status of the collection. If it is set to active, the collection will be blacklisted. If it is set to inactive, the collection will be whitelisted.

![Collection Info](/playground-guides/collections/blacklist-whitelist.png)

After filling all the required fields, click on the **Execute Mint Module** button to change the collection status.

At any time, you can change the status of your collection again.

