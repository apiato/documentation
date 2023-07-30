---
title: Code Generator
---

- [Introduction](#introduction)
- [Available Code Generator Commands](#available-code-generator-commands)
- [Demo](#demo)
- [Custom Code Stubs](#custom-code-stubs)
- [Contributing](#contributing)

## Introduction {#introduction}

Code Generators are a nice way to speed up development by creating boiler-plate code based on your inputs. You may
already be familiar with the Laravel code generators (`php artisan make:controller`). 

Apiato code generator works the same way. In addition, it can generate a full Container with fully working CRUD operations, including routes, requests, controller, Actions, Repositories, Models, Migrations, documentation.... and much more)

## Available Code Generator Commands {#available-code-generator-commands}

To see the list of code generators type `php artisan` and look for `apiato`.

``` text
  php artisan apiato:generate:container        Create a Container for apiato from scratch
  php artisan apiato:generate:action           Create an Action file for a Container
  php artisan apiato:generate:configuration    Create a Configuration file for a Container
  php artisan apiato:generate:container:api    Create a Container for apiato from scratch (API Part)
  php artisan apiato:generate:container:web    Create a Container for apiato from scratch (WEB Part)
  php artisan apiato:generate:controller       Create a controller for a container
  php artisan apiato:generate:event            Create a new Event class and (optionally) its corresponding Listener
  php artisan apiato:generate:exception        Create a new Exception class
  php artisan apiato:generate:factory          Create a new Factory class
  php artisan apiato:generate:job              Create a new Job class
  php artisan apiato:generate:listener         Create a new Event Listener class
  php artisan apiato:generate:mail             Create a new Mail class
  php artisan apiato:generate:middleware       Create a new Middleware class
  php artisan apiato:generate:migration        Create an "empty" migration file for a Container
  php artisan apiato:generate:model            Create a new Model class
  php artisan apiato:generate:notification     Create a new Notification class
  php artisan apiato:generate:policy           Create a new Policy class
  php artisan apiato:generate:readme           Create a README file for a Container
  php artisan apiato:generate:repository       Create a new Repository class
  php artisan apiato:generate:request          Create a new Request class
  php artisan apiato:generate:route            Create a new Route class
  php artisan apiato:generate:seeder           Create a new Seeder class
  php artisan apiato:generate:provider         Create a ServiceProvider, MiddlewareServiceProvider or an EventServiceProvider for a Container
  php artisan apiato:generate:subaction        Create a new SubAction class
  php artisan apiato:generate:task             Create a Task file for a Container
  php artisan apiato:generate:test:functional  Create a Functional Test file.
  php artisan apiato:generate:test:testcase    Create the TestCase file.
  php artisan apiato:generate:test:unit        Create a Unit Test file.
  php artisan apiato:generate:transformer      Create a new Transformer class for a given Model
  php artisan apiato:generate:value            Create a new Value class
```

To get more info about each command, add `--help` to the command. Example: `php artisan apiato:generate:route --help`. The help page shows all options, which can be directly passed to the command.

If you do not provide respective information via the command line options, a wizard will be displayed to guide you through.

For example, you can directly call `php artisan apiato:generate:controller --file=UserController` to directly specify the class
to be generated. The wizard, however, will ask you for the `--section` and `--container` as well.

Note that **all** generators automatically inherit the options `--section`, `--container` and `--file` (these are documented
as well in the help page). Furthermore, a generator may have specific options as well (e.g., the `--ui` (user-interface)
to generate something for).

## Demo {#demo}

#### Generating a Route (endpoint) file: {#generating-a-route-endpoint-file}
```text
$ php artisan apiato:generate:route

 Enter the name of the Section [AppSection]:
 >

 Enter the name of the Container:
 > Car

 Enter the name of the Route file [DefaultRoute]:
 > CreateCar

> Generating (CreateCar) in (AppSection:Car) Container.

 Select the UI for the controller [API]:
  [0] API
  [1] WEB
 > 0

 Enter the endpoint version (integer)[1]:
 > 1

 Select the type for this endpoint?[private]:
  [0] private
  [1] public
 > 1

 Enter the name of the controller function that needs to be invoked when calling this endpoint:
 > createNewCar

 Enter the HTTP verb of this endpoint (GET, POST,...):
 > POST

 Enter the endpoint URI (foo/bar/{id}):
 > cars

Route generated successfully.

```

#### Result {#result}

`CreateCar.v1.public.php` file will be created in `App\Containers\AppSection\Car\UI\API\Routes`

## Custom Code Stubs (aka. Customizing the Generator) {#custom-code-stubs}

If you don't like the automatically generated code (or would like to adapt it to your specific needs) you can do this quite easily.

The existing `Generators` allow to read `custom stubs` from the `app/Ship/Generators/CustomStubs` directory. The name of
the file and the folder structure needs to be the same as in `vendor\apiato\core\Generator\Stubs`.

Say, if you like to change the `action` -> `create.stub`, simply copy the file to `app/Ship/Generators/CustomStubs/actions/create.stub` and 
start adapting it to your needs. 

If you run the respective command (e.g., in this case `php artisan apiato:generate:action`) and choose `Create` type
this would read your specific `create.stub` file instead of the pre-defined one!

## Contributing {#contributing}

If you would like to add your own generators, please check out the [Contribution Guide](../prologue/contribution-guide.md).
