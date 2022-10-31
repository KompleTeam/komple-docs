# Fee Module

Fee module is used for the configuration and distribution of fees to be used in by different modules.

From setting a minting price to setting up marketplace fees, it can be utilized in different contracts for the configuration of revenue and payment streams.

## Setting a Fee

All of the fees created within Fee Module has 3 properties.

- Fee Type
- Module Name
- Fee Name

:::info

**Fee Type** is used as an identifier for fee values.  
**Module Name** is used as an identifier for matching modules.  
**Fee Type** is used as an identifier for matching fees within a module.

:::

5 $JUNO minting price on a collection and %5 marketplace owner fee on every purchase can be defined as:

|  Fee Type  | Module Name |        Fee Name       |
|:----------:|:-----------:|:---------------------:|
|    Fixed   |     Mint    | Price_(Collection_ID) |
| Percentage | Marketplace |   Marketplace_Owner   |

## Fee Types

Currently there are two types of fees that can be set within the Fee Module.

- Percentage Fees
- Fixed Fees

### Percentage Fees

These types of fees are used as decimal values.

**%2** Community Pool Fee in Marbu is possible with percentage fees.

### Fixed Fees

These types of fees are used as integer values.

**1 $JUNO** marketplace creation fee in Marbu is possible with fixed fees.

## Distribution

After setting the desired fees in the module, distribution message can be executed to distribute the fees according to the correct configuration.

Some funds must be sent along with the message for the distribution to work.

Let's take a look at some examples with each type of fees:

### Percentage Fees

Image we have 25% for **X** fee, 25% for **Y** fee and 50% for **Z** fee.

If we send 100 $JUNO for distribution:

- 25 $JUNO goes to **X**
- 25 $JUNO goes to **Y**
- 50 $JUNO goes to **Z**

### Fixed Fees

Image we have 6 for **X** fee, 12 for **Y** fee and 12 for **Z** fee.

If we send 20 $JUNO for distribution:

- 6 $JUNO goes to **X**
- 12 $JUNO goes to **Y**
- 12 $JUNO goes to **Z**