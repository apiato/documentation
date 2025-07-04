---
sidebar_position: 30
title: Code Generator
tags:
  - the-basics
  - code-generator
---

Apiato comes with a powerful code generator that can help you to generate all the boilerplate code for your containers.
Apiato code generator is a valuable tool
that can significantly speed up the development process
by automating the creation of boilerplate code based on user inputs.
For example, with the `apiato:make:container` command,
you can quickly generate a complete container with fully functional CRUD operations,
complete with test coverage.

To access the latest list of code generator commands, you may run the following command:

```
php artisan list apiato:make
```

## Available Commands

```
php artisan apiato:make:action           Create a Action file for a Container
php artisan apiato:make:configuration    Create a Configuration file for a Container
php artisan apiato:make:container        Create a Container for apiato from scratch
php artisan apiato:make:container:api    Create a Container for apiato from scratch (API Part)
php artisan apiato:make:container:web    Create a Container for apiato from scratch (WEB Part)
php artisan apiato:make:controller       Create a controller for a container
php artisan apiato:make:event            Create a new Event class and its corresponding Listener
php artisan apiato:make:exception        Create a new Exception class
php artisan apiato:make:factory          Create a new Model Factory class for a given Model
php artisan apiato:make:job              Create a new Job class
php artisan apiato:make:listener         Create a new Event Listener class
php artisan apiato:make:mail             Create a new Mail class
php artisan apiato:make:middleware       Create a new Middleware class
php artisan apiato:make:migration        Create an "empty" migration file for a Container
php artisan apiato:make:model            Create a new Model class
php artisan apiato:make:notification     Create a new Notification class
php artisan apiato:make:policy           Create a new Policy class
php artisan apiato:make:provider         Create a Service Provider for a Container
php artisan apiato:make:readme           Create a README file for a Container
php artisan apiato:make:repository       Create a new Repository class
php artisan apiato:make:request          Create a new Request class
php artisan apiato:make:route            Create a new Route class
php artisan apiato:make:seeder           Create a new Seeder class
php artisan apiato:make:subaction        Create a new SubAction class
php artisan apiato:make:task             Create a Task file for a Container
php artisan apiato:make:test:functional  Create a Functional Test file.
php artisan apiato:make:test:testcase    Create the TestCase file.
php artisan apiato:make:test:unit        Create a Unit Test file.
php artisan apiato:make:transformer      Create a new Transformer class for a given Model
php artisan apiato:make:value            Create a new Value class
```

## Stub Customization

The `apiato:make` commands use "stub" files that are pre-filled with values based on your input.
If you wish to make modifications to the files generated by Apiato,
you can create your own custom stub files and place them in the `app/Ship/Generators/CustomStubs` directory.
These custom stubs will then override the default stubs used by Apiato.
However, it is crucial to adhere to one essential rule:

- The name of the file and the folder structure in `app/Ship/Generators/CustomStubs` MUST exactly match those in `vendor/apiato/core/Generator/Stubs`.

To illustrate the process, let's assume you want to customize the creation of an `action`. Follow these steps:

1. Locate the `action.stub` file in `vendor/apiato/core/Generator/Stubs/actions`.
2. Copy the `action.stub` file and paste it into the `app/Ship/Generators/CustomStubs/actions` directory.
3. Make the desired changes to the copied `action.stub` file according to your requirements.

By completing these steps, whenever you run the `php artisan apiato:make:action` command,
your customized stub file will be employed instead of the default one,
applying your modifications to the generated `action` files.

