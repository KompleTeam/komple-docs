# Setting Whitelist on Collection

:::info
This section is under https://playground.komple.io/modules/token/execute
:::

You can set a whitelist for people to be able to mint your NFTs before minting start time. In this period of time, only whitelisted addresses can mint your NFTs.

This process is done through the Token Module page, if you need your collection address you can find it using [Search Collection](/docs/komple-playground/collections/03-search-collection.md) section.

Select `Add Whitelist Module` from the dropdown and fill the following information:

- Whitelist Members
- Whitelist Start Time
- Whitelist End Time
- Tokens Per Address Limit
- Whitelist Member Limit

### Whitelist Members

This is the list of addresses that will be whitelisted to mint your NFTs. Addition is done by entering the addresses one by one at the moment. TXT file upload will be available soon.

### Whitelist Start Time

This is the time when the whitelist will start.

### Whitelist End Time

This is the time when the whitelist will end. After this time, anyone can mint your NFTs.

### Tokens Per Address Limit

This is the maximum number of tokens that can be minted by a single address during the whitelist period.

### Whitelist Member Limit

This is the maximum number of addresses that can be whitelisted. During the whitelist period, additional addresses can be added and removed from the whitelist.

![Set Whitelist](/playground-guides/collections/set-whitelist.png)

After filling the whitelist details, click on the **Execute Token Module** button to create your whitelist.

![Set Whitelist Response](/playground-guides/collections/set-whitelist-response.png)

You've successfully created a whitelist for your collection! You can update your whitelist anytime by using the address that is displayed in the response.
