# Searching a Collection's Address

:::info
This section is under https://playground.komple.io/modules/mint/query
:::

All the collection addresses are saved in Mint Module's registry. There are two queries to get the address of a collection:

- Get Collection Address
- List Collections

## Get Collection Address

With this query, you can get the address of a collection by providing the collection's ID. This will only return the address of the collection.

Select `Get Collection Address` from the dropdown and fill the following information:

- Collection ID

### Collection ID

Collections in Mint Module are identified by their ID. With each created collection, the ID will be incremented by 1.

To find out the address of a collection, enter the ID in this field.

![Search Collection](/playground-guides/collections/search-collection.png)

After you have filled in the information, click on the **Query Mint Module** button to search for the collection's address.

![Search Collection Response](/playground-guides/collections/search-collection-response.png)

## List Collections

With this query, you can get a list of whitelisted collections available in Mint Module. This will return the collection's ID and address.

It is not possible to get a single address for a collection ID so you might need to send multiple queries to get the address of a collection.

Select `List Collections` from the dropdown and fill the following informations:

- Show Blacklisted Collections
- Start After (_Optional_)
- Limit (_Optional_)

### Show Blacklisted Collections

You can choose to list blacklisted collections or not.

### Start After

This is the ID of the collection you want to start the list from. This is used for pagination.

### Limit

This is the number of collections you want to list. This is used for pagination.

![List Collections](/playground-guides/collections/list-collections.png)

After you have filled in the information, click on the **Query Mint Module** button to search for the collection's address.

![List Collections](/playground-guides/collections/list-collections-response.png)

Now that you have the collection address, you can use it to update the collection details or configuration.

We already have our collection at this point so let's move on to minting tokens!
