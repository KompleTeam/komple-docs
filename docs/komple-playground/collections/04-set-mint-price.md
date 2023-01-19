# Setting Minting Price

:::info
This section is under https://playground.komple.io/modules/fee/execute
:::

In order to set minting price for a collection, first you need to register the [Fee Module](/docs/komple-framework/modules/01-Fee-Module.md). Check out [Registering a Module](/docs/komple-playground/projects/02-register-module.md) section to learn how to register a module.

After registering and taking note of the Fee Module address you can set the minting price for your collection.

Go to Fee Module management page then select `Set Fee` from the dropdown and select `Minting Price` from the fee type dropdown. Now fill the following information:

- Collection ID
- Fixed Fee

---

## Collection ID

This is the ID for the collection you want to set the minting price for.

## Fixed Fee

This is the fixed fee you want to set for the collection. This is the fee that will be charged for each minting transaction.

![Set Minting Price](/playground-guides/collections/set-minting-price.png)

Observe that the `fee_name` is **"price:<collection_id>"** and `module_name` is **"mint"** on Keplr transaction confirmation.

![Set Minting Price Keplr](/playground-guides/collections/set-minting-price-keplr.png)

Click on the **Execute Fee Module** button to set your minting fee. Now you have a minting fee set for your collection!

This step can be executed multiple times to update the minting fee for your collection.
