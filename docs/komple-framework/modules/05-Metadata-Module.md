# Metadata Module

Metadata contract allows projects to have several types of metadata for different needs.

Usually the metadata for a token can be stored either on-chain or in a decentralized storage service. In either case it's important that the data is stored in a decentralized platform.

## Metadata Types

There are several types of metadata for different use cases.

### Standard Metadata

One to One metadata is used for normal NFTs that we are all familiar with. Every token is linked to a single metadata.

Some examples would be:

- A single playing card token in a deck collection
- A single color token in colors collection

These are all unique - tokens don't share metadata with other tokens and can be minted by a single user.

### Shared Metadata

Static metadata is used for using the same metadata for multiple tokens.

Some examples would be:

- A knife token that is minted by 100 users
- A spell token that is minted by 50 users

Still the tokens are unique when minted but the metadata are the same. Instead of duplicating the metadata for every token, it uses a base metadata for each one.

### Dynamic Metadata

Dynamic metadata is used for using a base metadata for tokens but dynamically change their attributes.

Some examples would be:

- A sword token that is minted but upgraded over time
- A hero token that engages in battles and loses health

This is similar to static metadata in a way that these can be minted by many users but with extra possibilities. Since it's designed to be dynamic, it is not linked to the original metadata - making updates easier.
