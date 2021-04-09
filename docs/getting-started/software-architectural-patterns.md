---
title: Software Architectural Patterns
---

- [Introduction](#introduction)
- [Porto](#porto)
  * [Porto Introduction](#porto-introduction)
  * [The Containers Layer](#porto-container-layer)
    + [Remove a Container (default Containers)](#porto-remove-container)
    + [Create new Container](#porto-new-containter)
      * [Option 1) Using the Code Generator](#porto-new-container-code-generator)
      * [Option 2) Manually](#porto-new-container-manually)
    + [Container Conventions](#containter-conventions)
  * [The Ship Layer](#porto-ship-layer)
- [MVC](#mvc)
  * [MVC Introduction](#mvc-introduction)
    + [Differences between Standard MVC and Apiato's MVC](#mvc-differences)
    + [Setup my Apiato MVC App](#setup-mvc)
      - [1) First get a fresh version of Apiato](#get-a-fresh-version-of-apiato)
      - [2) Create the Application](#create-the--application)
      - [3) Create route file](#create-route-file)
      - [4) Create Controller](#create-controller)
      - [5) Create Models](#create-models)
      - [6) Create Views](#create-views)
      - [7) Create Transformers](#create-transformers)
      - [8) Create Service Providers](#create-service-providers)
      - [9) Create Migrations](#create-migrations)
      - [10) Create Seeds](#create-seeds)
      - [More Classes](#more-classes)
    + [How to use Apiato features](#apiato-features)

## Introduction {#introduction}

The two most common architectures, used for building projects on top of Apiato are:

- [**Porto**](#porto) (Route Request Controller Action Task Model Transformer).
- [**MVC**](#mvc) (Model View Controller). *The Apiato MVC version is a little different than the standard MVC.*

Porto is the Apiato recommended architecture for building scalable API's with Apiato.
However, it also support building API's using the popular MVC architecture (with a little modifications).

*Apiato features are written using Porto, and can be used by any architecture.*

Below you will see how you can both any of the architectures to build your project.

## Porto {#porto}

### Porto Introduction {#porto-introduction}

Porto is an architecture that consists of 2 layers the **Containers** layer and the **Ship** layer.

The **Container** layer holds your application business logic code. Same like Modular, DDD and plugins architectures;
Apiato allows separating the business logic into multiple folders called **Containers**. While the **Ship** layer holds
the infrastructure code (your shared code between all **Containers**). You will rarely touch it anyway.

The Apiato features themselves are developed using the Porto Software Architectural Pattern. (Means the features
provided in Apiato live in Containers).

Spending 15 minutes, reading the [Porto Document](https://github.com/Mahmoudz/Porto) before getting started, is a great
investment of time.

### The Containers Layer {#porto-container-layer}

Read about the Containers layer [here](https://github.com/Mahmoudz/Porto#Containers-Layer)

#### Remove a Container (default Containers) {#porto-remove-container}

Apiato comes with some default containers. All the containers are optional, and some of them contain essential features.

Let's say you don't want to use the built in documentation generator feature of Apiato. To get rid of that feature you
can simply delete the `documentation` container.

To remove a Container, simply delete the folder then run `composer update` to remove its dependencies.

#### Create new Container {#porto-new-container}

##### Option 1) Using the Code Generator: {#porto-new-container-code-generator}

`php artisan apiato:container`

Refer to the [code generator](.././features/code-generator) page for more details.

##### Option 2) manually: {#porto-new-container-manually}

1. Create a folder in the Containers folder.
2. Start creating components and adding them in it.

*(The Ship engine will auto load and register everything automatically for you)*.

For the auto-loading to work flawlessly you MUST adhere to the component's naming conventions and directories. So you
need to refer to the `documentation page` of the component when creating it.

#### Container Conventions {#containter-conventions}

- Containers names SHOULD start with Capital. Use CamelCase to rename Containers.
- Namespace should be the same as the container name, (if container name is "Printer" the namespace should be
`App\Containers\Printer`).
- Container MAY be named to anything however. A good practice is to name it to its most important Model name.
*Example: If the User Story is (User can create a Stores and Stores can have Items) then we you could have 3
Containers (User, Store and Item).*

### The Ship Layer {#porto-ship-layer}

Read about the Ship layer **[here](https://github.com/Mahmoudz/Porto#Port-Layer)**

## MVC {#mvc}

### MVC Introduction {#mvc-introduction}

Due to the popularity of MVC, and the fact that many developers don't have enough time to learn about new architectures.
Apiato, supports the MVC architecture. That is 97% compatible with the laravel MVC.

Below you will learn how you can build your API on top of Apiato, using your previous knowledge of the Laravel MVC
framework.

#### Differences between Standard MVC and Apiato's MVC {#mvc-differences}

The Porto architecture, does not replace the MVC architecture, instead it extends it for good. So Models, Views, Routes
and Controllers all still exist, but in different places with a strict set of responsibilities for each component
`class type`.

#### Setup my Apiato MVC App {#setup-mvc}

##### 1) First get a fresh version of Apiato {#get-a-fresh-version-of-apiato}

##### 2) Create the Application {#create-the--application}

If you open `app/Containers/` you will see a list of Proto's Containers, each container provide some features for you.
However, you don't need to modify them, whether you are using the Porto or MVC architecture. So forget about all these
folders for now.

All we need is to create a new folder called `Application` (your MVC application, it's an alternative to the `app`
folder on the root of the Laravel project). This folder will hold all your Models, Views, Routes, Controllers etc files.

##### 3) Create route file {#create-route-file}

In Laravel, the routes files live in the `routes/` folder on the root of the project. But In Apiato MVC, the routes
files should live in:

- `app/Containers/Application/UI/API/Routes/` (for API Routes)
- `app/Containers/Application/UI/WEB/Routes/` (for WEB Routes)

Create `api.php` at `app/Containers/Application/UI/API/Routes/api.php` "alternative to Laravel's `routes/api.php`"
Create `web.php` at `app/Containers/Application/UI/API/Routes/web.php` "alternative to Laravel's `routes/web.php`"

In both files create all your endpoints as you would in Laravel.

> NOTE: You must use `$router->` instead of the facade `Route::` in the route files.

Example:

```php
<?php

// Use this `$router` variable
$router->get('/', function () {
    return view('welcome');
});

// DO not use the `Route` facade
Route::get('/', function () {
    return view('welcome');
});
```

##### 4) Create Controller {#create-controller}

In Laravel, the Controllers classes live in the `app/Http/Controllers/` folder. But In Apiato MVC, the `Controller`
classes should live in:

- `app/Containers/Application/UI/API/Controllers/Controller.php` (To handle API Routes) MUST extend from `App\Ship\Parents\Controllers\ApiController`
- `app/Containers/Application/UI/WEB/Controllers/Controller.php` (To handle WEB Routes) MUST extend from `App\Ship\Parents\Controllers\WebController`

##### 5) Create Models {#create-models}

In Laravel, the Models classes live in the root of the `app/` folder. But In Apiato MVC, the Models classes should
live in `app/Containers/Application/Models`.

All model must `extend` from `App\Ship\Parents\Models\Model`.

> Note the `User` Model should remain in the User Container (`app/Containers/User/Models/User.php`), to keep all the
features working without any modifications.

##### 6) Create Views {#create-views}

In Laravel, the Views files live in the `resources/views/` folder. In Apiato MVC, the Views files can live in that
same directory or/and in this container folder `app/Containers/Application/UI/WEB/Views/`.

##### 7) Create Transformers {#create-transformers}

In Laravel, the Transformers classes live in the `app/Transformers/` folder. But In Apiato MVC, the Transformers
classes should live in `app/Containers/Application/UI/API/Transformers/`.

Transformers must extend from `App\Ship\Parents\Transformers\Transformer`.

##### 8) Create Service Providers {#create-service-providers}

In Laravel, the Service Providers classes live in the `app/Providers/` folder. But In Apiato MVC, the Service Providers
classes can live in `app/Containers/Application/Providers/`, but also can live anywhere else.

If you want the Service Providers to be automatically loaded (without having to register it in the `config/app.php`
file), rename your file to  `MainServiceProvider.php` (full path `app/Containers/Application/Providers/MainServiceProvider.php`).
Otherwise you can create Service Providers anywhere and register them manually in Laravel.

##### 9) Create Migrations {#create-migrations}

In Laravel, the Migrations classes live in the `database/migrations/` folder on the root of the project. In Apiato
MVC, the Migrations classes can live in that same directory or/and in this container folder
`app/Containers/Application/Data/Migrations/`.

##### 10) Create Seeds {#create-seeds}

In Laravel, the Seeds files live in the `database/migrations/` folder on the root of the project. In Apiato MVC, the
Seeds files can live in that same directory or/and in this container folder `app/Containers/Application/Data/Seeders/`.

##### More Classes {#more-classes}

All other classes types work the same way, you can refer to the documentation for where to place them and what they
should extend. For more details you can always get in touch with us on **Slack**.

#### How to use Apiato features {#apiato-features}

Apiato features are all provided as Actions & Tasks classes.

- Each Action class has single function `run` which does one feature only.
- Each Task class has single function `run` which does one job only (a tiny piece of the business logic).

You can use Actions/Tasks classes anyway you want:

- Using Apiato Facade with Apiato caller style `$user = \Apiato::call('Car@GetDriversAction', [$request->id]);`
- Using Apiato Facade with full class name `$user = \Apiato::call(GetDriversAction::class, [$request->id]);`
- Using the helper call function with full class name `$user = $this->call(GetDriversAction::class, [$request->id]);`
- Using the helper call function with Apiato caller style `$user = $this->call('Car@GetDriversAction', [$request->id]);`
- Without Apiato involvement using plain PHP `$user = $action = new GetDriversAction::class; $action->run($request->id);`
- Without Apiato involvement using plain Laravel IoC `$user = \App::make(GetDriversAction::class)->run($request->id);`

Be creative, at the end of the day it's a class with a function.
