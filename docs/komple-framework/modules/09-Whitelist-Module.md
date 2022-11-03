# Whitelist Module

Whitelist Module is used for keeping track of whitelisted addresses and whitelist details for a single collection.

#### Related Modules

- [Mint Module](/docs/komple-framework/modules/06-Mint-Module.md) is utilized on minting to check the whitelist status.
- [Token Module](/docs/komple-framework/modules/08-Token-Module.md) is the parent module of the Whitelist Module.

## Creating Whitelist

On whitelist creation projects must provide:

- A valid whitelist configuration
- A valid whitelist member list

### Whitelist Configuration

There are a few configuration options that can be set for the Whitelist Module:

- `start_time` - The start time of the whitelist. This is used to determine if the whitelist is active or not.
- `end_time` - The end time of the whitelist. This is used to determine if the whitelist is active or not.
- `per_address_limit` - The maximum number of tokens that can be minted by a single address on whitelist period.
- `member_limit` - The maximum number of whitelisted addresses.

### Member List

- All the addresses in the member list must be valid juno addresses.
- Member list size must be less than or equal to the `member_limit` set in the whitelist configuration.

## Minting Tokens

Mint and Token Module uses Whitelist Module to determine if the whitelist is active and the address is whitelisted.

### Mint Module

Mint Module uses Whitelist Module to determine if the whitelist is active and the address is in whitelist `member_list`.

### Token Module

Token Module uses Whitelist Module to determine if `per_address_limit` is reached.