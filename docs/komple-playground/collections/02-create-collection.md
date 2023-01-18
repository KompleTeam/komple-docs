# Creating a Collection

:::info
This section is under https://playground.komple.io/modules/mint/execute
:::

After registering the Mint Module, it's time to create a collection in your project.

Select `Create Collection` from the dropdown and fill the following information:

- Collection Info
- Collection Configuration
- Metadata Info
- Minting Currency Info

These information will define your project and will be used to display your project in [Marbu](/docs/marbu/overview.md) and other websites that uses the framework.

---

## Collection Info

### Collection Type

Each collection can be either **Standard** or **Komple** collection. 

#### Standard Collection

Standard collection is a collection that uses standard IPFS metadata. Every token will be tied to a single IPFS metadata. 

:::caution
For the standard collection to work:

- Metadata type must be set as standard
- IPFS link must be set
:::

:::tip
If we set the IPFS link as: **ipfs://my-ipfs-hash**

Every minted token's metadata will be saved as `ipfs://my-ipfs-hash/1`, `ipfs://my-ipfs-hash/2`, `ipfs://my-ipfs-hash/3` and so on.
:::

#### Komple Collection

Komple collection is a collection that uses the Metadata Module. Metadata can be either shared or dynamic. Every token can be tied to a different metadata to suit the project's needs.

:::tip
A single metadata like a non-unique weapon in a game can be defined as a shared metadata to be used my multiple tokens.

Different characters in a game can be defined as dynamic metadata to be used by a single token and to be updated if needed.
:::

### Collection Name

Name of the collection you want to create.

### Collection Description

Description of the collection you want to create.

### Collection Image

Image of the collection you want to create. This will be used as a thumbnail for your collection.

### Collection External Link (_Optional_)

External link to your collection. This can be a link to your collection's website or any other link.

![Collection Info](/playground-guides/collections/create/collection-info.png)

---

## Collection Configuration

### Tokens Per Address Limit (_Optional_)

This is the maximum number of tokens that can be minted by a single address. If this field is not set, there is no limit for minting.

### Minting Start Time

This is the time when minting will start. If this field is not set, minting will start immediately after collection creation.

### Maximum Token Limit

This is the maximum number of tokens that can be minted in the collection. If this field is not set, there is no limit for minting.

### IPFS Link

This is the IPFS link of the collection. This will be used to store the collection's metadata.

:::caution
IPFS link is used used only in the **Standard Collection**. If you are creating a standard collection, you must set this field.
:::

![Collection Config](/playground-guides/collections/create/collection-config.png)

---

## Metadata Info

### Metadata Type

Metadata types are a way of defining the metadata for a collection.

Based on the project's needs, metadata can be:

- Standard
- Shared
- Dynamic

Check out the [Metadata Module](/docs/komple-framework/modules/05-Metadata-Module.md) documentation for more information on different types.

:::caution
If you are creating a **Standard Collection**, you must set the metadata type as **Standard**.
:::

---

## Minting Currency Info

This is the currency information that will be used to mint new tokens. Token type can either be **Native** or **CW20**.

:::caution
Once you set the token type, you can't change it later.
:::

### Native Token

If native token type is selected, you need to enter the denom information.

![Native Token](/playground-guides/collections/create/native-token.png)

### CW20 Token

If CW20 token type is selected, you need to enter both the denom and the cw20 token contract address.

![CW20 Token](/playground-guides/collections/create/cw20-token.png)

---

After filling all the required fields, click on the **Execute Hub Module** button to create your first collection.

![Create Collection Response](/playground-guides/collections/create/response.png)

Congratulations! You have successfully created your first collection. You can see the Token Module and Metadata Module address in the response. You don't need to worry about these addresses for now. We will use them in the coming sections.
