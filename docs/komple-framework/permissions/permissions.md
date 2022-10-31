# Permissions

Permission module is a way of enforcing certain queries or custom logic without needing to include them directly in a module.

Projects can integrate different permission types to certain modules for fine tuning the core logic for their application.

If we take a look at random game for example, we can see some core logic that is being applied:

- Checking the level for a skill to see if users can use it
- Checking the existence of a consumable item to see if users can use it
- Merging two linked items to get another item
- Checking the balance of some in-game token for some actions

These are all at its core simple checks that must be ran in order to enforce a certain logic. While these small code pieces can be written inside the contracts, Komple Framework takes another approach.

Instead of having the same code piece we want to implement written in every module, these checks can be plugged into some of the methods inside a module, making it easy to use permissions.