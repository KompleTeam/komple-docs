# Fee Module

Fee Module is used for the configuration and distribution of fees to be used by different modules.

From setting a minting price to setting up marketplace fees, it can be utilized in different contracts for the configuration of revenue and payment streams.

## Setting a Fee

All of the fees set within Fee Module has four properties.

- **Fee Type** - used as an identifier for the type of fee - Percentage or Fixed
- **Module Name** - used as an identifier for matching the correct module
- **Fee Name** - used as an identifier for matching the correct fee within a module
- **Payment Info** - used as an identifier for payment information

Simple examples such as 5 $JUNO minting price on a collection or %5 marketplace owner fee on every purchase can be defined as:

|  Fee Type  | Module Name |        Fee Name       | Payment Info             |
|:----------:|:-----------:|:---------------------:|--------------------------|
|    Fixed   |     Mint    | Price_(Collection ID) | (Optional Payment Address, 5)    |
| Percentage | Marketplace |   Marketplace_Owner   | (Optional Payment Address, 0.05) |

:::caution

The total amount of fees under a module must be under 100%. If the fees are over 100% upon setting, operation will fail.

:::

## Removing a Fee

Fees can also be easily removed and reset by using the same fee type, module name and fee name.

## Fee Types

Currently there are two types of fees that can be set within the Fee Module.

- Percentage Fees
- Fixed Fees

### Percentage Fees

These types of fees are used as decimal values. On distribution method or other calculations, this percentage value will be multiplied with a number to get the final fee amount.

- X% fee on marketplace sales that goes to the marketplace owner. If the price is 100 $JUNO, the fee will be X $JUNO

### Fixed Fees

These types of fees are used as integer values. As these are fixed values, they can be used as is.

- X $JUNO minting price on a collection

## Distribution

After setting the desired fees, distribution message can be executed to distribute the fees according to the configuration.

Since fees have an optional payment address and amount, distribution only happens if there is a payment address.

- If the payment address is present on distribution, that address will be used.
- If the payment address is not present on distribution
    - If a valid payment address is supplied, that address will be used.
    - If no valid payment address is supplied, that fee will be skipped.
