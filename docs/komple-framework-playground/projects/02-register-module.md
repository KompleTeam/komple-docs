# Registering a Module

:::info
This section is under https://playground.komple.io/modules/hub/execute
:::

In order to register a module you need to select `Register Module` from the dropdown and have the following information:

- Code ID of the module
- Module name
- Register message

To make it easier to register official modules, we have abstracted these information from the UI.

![Register Module Dropdown](/playground-guides/projects/register-modules/dropdown.png)

Just select an item from the dropdown to register the module you want. We will cover the official modules later on so let's focus on the custom module registration.

### Code ID

Code ID is the identifier of the contract on the network. You can get it after uploading the contract on [Upload Contract](https://playground.komple.io/upload) page.

### Module Name

Every module has a name that is used to identify the module. For example, the Hub Module has a name of `hub`. 

Write an unique name for your module.

### Register Message

Your custom module may or may not need to have a register message. If it does, you can define the json message here.

![Custom Module Information](/playground-guides/projects/register-modules/custom-information.png)

After you have filled in the information, click on the **Execute Hub Module** button to register your module.

Now you have your module registered in the project! Let's move on to the next step to search for a module's address.
