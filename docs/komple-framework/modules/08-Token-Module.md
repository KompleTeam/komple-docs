# Token Module

Token module used for representing collections with the framework.

This module is made as a wrapper around the cw721 contract with added functionality such as:

- Operation level locks for minting, burning, transferring and sending tokens
- Token level locks for minting, burning, transferring and sending tokens
- Royalty info for the collection
- Metadata and whitelist contract creation

All the existing cw721 execute messages and queries can be used with the token module.

## Token Types