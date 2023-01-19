# Adding Metadata

:::info
This section is under:  
https://playground.komple.io/modules/token/execute  
https://playground.komple.io/modules/metadata/execute
:::

This guide is only for metadata information, not for the NFT images. In any way, your NFT images should be stored in IPFS for best practice.

There are two ways to add metadata to your collection:

- IPFS Metadata
- Metadata Module

## IPFS Metadata

If you are using [Standard Collection](/docs/komple-framework/modules/06-Mint-Module.md#collections) type for your collection, you will use IPFS link to add metadata to your collection.

:::tip
Check out XXX to learn how to work with metadata schema using IPFS.
:::

This information is asked when you create a collection but you can also edit this information later on using the Token Module.

To change the IFPS link for a collection, select `Update Collection Config` from the dropdown in Token Module page and update the IPFS link.

![Update IPFS Link](/playground-guides/collections/update-ipfs-link.png)

Click on the **Execute Token Module** button to update the IPFS link for your collection.

## Metadata Module

If you are using [Komple Collection](/docs/komple-framework/modules/06-Mint-Module.md#collections) type for your collection, you will use the Metadata Module to add metadata to your collection.

There is no difference between different metadata types when adding metadata to your collection.

To add metadata to your collection, select `Add Metadata` from the dropdown in Metadata Module page and fill the following information:

- Description
- Image
- External URL
- Animation URL
- Youtube URL
- Attributes

### Description (_Optional_)

This is the field to describe your NFT. It will give more information about your NFT to the users.

### Image (_Optional_)

This is the field to add an image to your NFT. It will be used as a thumbnail for your NFT. Ideally this link will be an IPFS link.

### External URL (_Optional_)

This is the field to add an external link to your NFT. This can be a link to your NFT's website or any other link.

### Animation URL (_Optional_)

This is the field to add an animation to your NFT. It will be used as a thumbnail for your NFT. Ideally this link will be an IPFS link.

### Youtube URL (_Optional_)

This is the field to add a youtube video to your NFT.

### Attributes (_Optional_)

Attributes are the properties of your NFT. You can add any number of attributes in the list.

To add an attribute, click on `Add` button after filling both the `Attribute Name` and `Attribute Value` fields.

![Add Meta Info](/playground-guides/collections/add-meta-info.png)

![Add Attributes](/playground-guides/collections/add-attributes.png)

Click on the **Execute Metadata Module** button to add metadata to your collection.

For each NFT in your collection, you need to add metadata using this method. Additionally, we are going to implement batch addition in the upcoming releases.
