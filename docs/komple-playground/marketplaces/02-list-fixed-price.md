# Fixed Price Listing

:::info
This section is under:  
https://playground.komple.io/modules/token/execute  
https://playground.komple.io/modules/marketplace/execute
:::

In this section, you will learn how to create a fixed price listing in your marketplace.

But before starting out with this section, there are a few **prerequisites** that you need to complete:

:::caution
### Giving Admin Access to Marketplace Module on Token Module

In order for the Marketplace Module to lock the tokens that will be listed, it needs to have operator access on the Token Module.

This can be done by executing the `Update Contract Operators` message in the Token Module.

**This must be done only once for each collection that will be listed on the marketplace.**

**Must be executed by project admin.**

---

### Giving Operator Access to Marketplace Module on Token Module on Behalf of User

In order for the Marketplace Module to change the owner of NFT during a sale, it needs to have explicit operator access on the Token Module on behalf of the user.

This can be done in two ways:

- Executing `Give Operator Access to NFT` with a given token ID for a one time operation
- Executing `Give Operator Access to All NFTs` for a permanent operation

**If operator access is given to a single NFT, this step needs to be repeated for each NFT that you want to list.**

**Must be executed by the user that wants to list NFTs.**

:::

After going through the prerequisites, you can start creating a fixed price listing.

Select `List Fixed Price NFT` from the dropdown and fill the following information:

- Collection ID
- Token ID
- Listing Price

### Collection ID

This is the ID of the collection that you want to list.

### Token ID

This is the ID of the token that you want to list.

### Listing Price

This is the price that you want to list the token for.

![List Fixed Price NFT](/playground-guides/marketplaces/list-fixed-price.png)

Click on the **Execute Marketplace Module** button to create a fixed price listing. Now you have your token listed on the marketplace!
