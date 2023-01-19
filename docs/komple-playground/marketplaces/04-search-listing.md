# Listing Listed Tokens

:::info
This section is under https://playground.komple.io/modules/marketplace/query
:::

:::caution
At the moment it is only possible to list `Fixed Price` listings. `Auction` listings are not supported yet.
:::

There are two ways to search for a listing:

- Fixed Price Listing
- Fixed Price Listings

## Fixed Price Listing

With this query, you can get a single fixed listing.

Select `Fixed Price Listing` from the dropdown and fill the following information:

- Collection ID
- Token ID

### Collection ID

This is the collection identifier of the listing that you want to search for.

### Token ID

This is the token identifier of the listing that you want to search for.

![Fixed Price Listing](/playground-guides/marketplaces/fixed-price-listing.png)

After you have filled in the information, click on the **Query Marketplace Module** button to search for the listing.

![Fixed Price Listing Response](/playground-guides/marketplaces/fixed-price-listing-response.png)

## Fixed Price Listings

With this query, you can get a list of fixed price listings that are in a collection.

Select `Fixed Price Listings` from the dropdown and fill the following informations:

- Collection ID
- Start After (_Optional_)
- Limit (_Optional_)

### Collection ID

This is the collection identifier of the listings that you want to search for.

### Start After

This is the ID of the collection you want to start the list from. This is used for pagination.

### Limit

This is the number of listings you want to list. This is used for pagination.

![Fixed Price Listings](/playground-guides/marketplaces/fixed-price-listings.png)

After you have filled in the information, click on the **Query Marketplace Module** button to search for the listings.

![Fixed Price Listings Response](/playground-guides/marketplaces/fixed-price-listings-response.png)

You can use this endpoint to display it on your frontend and let people buy tokens. This is what exactly we are going to do in the next section!