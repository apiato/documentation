---
title: Seeders
tags:
  - component
  - optional-component
  - seeder
  - migration
---

Apiato seeders are just [Laravel Seeders](https://laravel.com/docs/seeding),
and they function in the exact same way as Laravel seeders.
However, they come with additional rules and conventions specific to Apiato.

To generate new seeders you may use the `apiato:make:seeder` interactive command:

```
php artisan apiato:make:seeder
```

## Rules

- All container-specific and third-party package Seeders MUST be placed in the `app/Containers/{Section}/{Container}/Data/Seeders` directory.
- All non-Laravel or third-party package Seeders MUST extend the `App\Ship\Parents\Seeders\Seeder` class.

## Folder Structure

```markdown
app
└── Containers
    └── Section
        └── Container
            └── Data
                └── Seeders
                    ├── DemoSeeder_1.php
                    ├── AnotherDemoSeeder_2.php
                    └── ...
```

## Code Example

Seeders are defined exactly as you would define them in Laravel.

## Naming Conventions

To avoid conflicts between containers' seeder classes, it is crucial to follow specific naming conventions.
If two seeder classes have the same name but exist in different containers, Apiato will not be able to load one of them,
leading to unintended consequences and potential data inconsistencies.

To ensure smooth and error-free seeding, adhere to the following naming conventions:

#### Prepend Container Name

Always prepend the seeders of each container with the container name.
For example, if you have containers named `User` and `Item`,
the seeder classes should be named `UserPermissionsSeeder` and `ItemPermissionsSeeder`, respectively.

#### Prepend Section Name

In situations where two seeder classes have the same name but exist in different containers,
manually prepend the seeder name with the section name to distinguish them.

## Loading Order

Apiato enables the loading of seeders in a specific order.
To organize the seeding of classes, simply add `_1`, `_2`, and so on, to your class names.
For instance, `UserPermissionsSeeder_1` will be loaded before `UserPermissionsSeeder_2`.

1. By default, Laravel invokes the `run` method of the `database/seeders/DatabaseSeeder.php` class.
2. The `run` method within `DatabaseSeeder` calls the `runLoadingSeeders` method of the `Apiato\Core\Loaders\SeederLoaderTrait.php` trait.
3. The `runLoadingSeeders` method, in turn, loads all the seeders within each container following this sequence:
   1. It first loads all the seeders whose names contain `_1`.
   2. Subsequently, it proceeds to load seeders with names containing `_2`.
   3. This pattern continues until it loads all seeders with names containing `_n`.
   4. Lastly, any remaining seeders without the `_n` suffix are loaded.
