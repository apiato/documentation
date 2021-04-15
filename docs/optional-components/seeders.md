---
title: Seeders
---

* [Definition](#definition)
* [Principles](#principles)
* [Rules](#rules)
* [Folder Structure](#folder-structure)
* [Code Samples](#code-samples)
* [Run the Seeders](#run-the-seeders)
* [Testing seeder command](#apiato-testing-seeder-command)

### Definition {#definition}

Seeders (are a short name for Database Seeders).

Seeders are classes made to seed the database with real data, this data usually should exist in the Application after the installation (Example: the default Users Roles and Permissions or the list of Countries).

### Principles {#principles}

- Seeders SHOULD be created in the Containers. (If the container is using a package that publishes a Seeder class, this class should be manually placed in the Container that make use of it. Do not reply on the package to place it on its right location).

### Rules {#rules}

- Seeders should be in the right directory inside the container to be loaded.

- To avoid any conflict between containers seeders classes, you SHOULD always prepend the Seeders of each container with the container name. (Example: `UserPermissionsSeeder`, `ItemPermissionsSeeder`). *If 2 seeders classes have the same name but live in different containers, one of them will not be loaded.*

- If you wish to order the seeding of the classes, you can just append `_1`, `_2` to your classes.

### Folder Structure {#folder-structure}

```
 - App
    - Containers
        - {container-name}
             - Data
                - Seeders
                    - ContainerNameRolesSeeder_1.php
                    - ContainerNamePermissionsSeeder_2.php
                    - ...
```

### Code Samples {#code-samples}

**Roles `Seeder`:**

```php
namespace App\Containers\Order\Data\Seeders;

use App\Ship\Parents\Seeders\Seeder;
use Apiato\Core\Foundation\Facades\Apiato;

class OrderPermissionsSeeder_1 extends Seeder
{

    public function run()
    {
        Apiato::call('Authorization@CreatePermissionTask', ['approve-reject-orders']);
        Apiato::call('Authorization@CreatePermissionTask', ['find-orders']);
        Apiato::call('Authorization@CreatePermissionTask', ['list-orders']);
        Apiato::call('Authorization@CreatePermissionTask', ['update-orders']);
        Apiato::call('Authorization@CreatePermissionTask', ['delete-orders']);

        // ...

    }
}

```

Note: Same `Seeder` class is allowed to contain seeding for multiple `Models`.

### Run the Seeders {#run-the-seeders}

After registering the `Seeders` you can run this command:

```shell
php artisan db:seed
```

To run specific Seeder class you can specify its class in the parameter as follows:

```bash
php artisan db:seed --class="your\single\seeder\goes-here"
```

Migrate & seed at the same time

```shell
php artisan migrate --seed
```

For more information about the Database Seeders read [this](https://laravel.com/docs/master/seeding).

## Apiato testing seeder command {#apiato-testing-seeder-command}

It's useful sometimes to create a big set of testing data. apiato facilitates this task:

1. Open `app/Ship/Seeders/SeedTestingData.php` and write your testing data here.
2. Run this command any time you want this data available (example at staging servers):

```shell
php artisan apiato:seed-test
```
