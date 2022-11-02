---
sidebar_position: 2
title: Concepts
---

Before we dive into more details about the Komple Framework, let's take a look at some of the concepts that are used throughout the contracts and documentation.

Make sure to read [CosmWasm Docs](https://docs.cosmwasm.com) for learning more about how smart contracts work in Cosmos ecosystem.

## Komple Framework Project

As we are going to see in the next chapters, Komple Framework is a set of smart contracts that are used to build projects. 

By saying "project" we mean a set of contracts that are tied to the same Hub Module. Every Hub Module equals to one project.

## Admins

There are two type of admins: 

- **Contract admin** is the address that can perform [migrations](https://docs.cosmwasm.com/docs/1.0/smart-contracts/migration). This is on contract level and can be updated or removed by the contract admin. 

- **Framework admin** is the address that can do operations within the framework such as registering modules, creating collections, etc. This is on software level and cannot be updated or removed by the config admin.

Upon creation of a new project, both the contract and framework admins are set to the address that created the project.

### Admin Privileges

Admin privileges are a way for the contract to check if the sender address has the right to perform certain operations.

Contracts check for admin privileges in the following order:

1. Check if the sender is the contract itself.
2. Check if the sender is the framework admin.
3. Check if the sender is the parent contract if it has one.
4. Check if the sender is one of the operators if the contract has any.

If the sender is not any of the above, the contract will not execute the transaction.

## Operators

Operators are the addresses that have full framework admin privileges. They can do anything that the framework admin can do.

Because this is a powerful privilege, it is recommended to set the operators carefully.
