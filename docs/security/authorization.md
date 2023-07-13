---
title: Authorization
---

- [How it works](#how-it-works)
- [Responses](#responses)
- [Assign Roles & Permission to the Testing User](#assign-roles-permission-to-the-testing-user)
- [Seeding some users (Admins)](#seeding-some-users-admins)
- [Roles & Permissions guards](#roles-permissions-guards)

Apiato provides a Role-Based Access Control (RBAC) through its Authorization Container.

Behind the scenes apiato is using the [Laravel's authorization](https://laravel.com/docs/authorization) functionality that was introduced in version 5.1.11 with the helper package [laravel-permission](https://github.com/spatie/laravel-permission). So you can always refer to the correspond documentation for more information.

## How it works {#how-it-works}

Authorization in apiato is very simple and easy.

1) Create some Roles and permissions. By default, an `admin` role and some permissions are provided by Apiato. You can find the code in `app/Containers/AppSection/Authorization/Data/Seeders/*` directory.

2) Attach some permissions to the roles.

3) Now start creating users (or use existing users), to assign them to the new created Roles.

4) Finally, you need to protect your endpoints by Permissions (or/and Roles). The right place to do that is the Requests class.

**Example protecting the (delete user) endpoint with `delete-users` permission:**

```php
class DeleteUserRequest extends Request
{
    protected array $access = [
        'permissions' => 'delete-users',
        'roles' => '',
    ];

    public function authorize(): bool
    {
        return $this->check([
            'hasAccess',
        ]);
    }
}

```

**For detailed explanation of this example, please visit the [Requests](../the-basics/requests) Page.**

## Responses {#responses}

**Authorization failed JSON response:**

```json
{
  "message": "This action is unauthorized."
}
```

## Assign Roles & Permission to the Testing User {#assign-roles-permission-to-the-testing-user}

You will need to set `$access` property in your test class, check out the [Tests Helpers](../testing/tests-helpers) page for more details.

## Seeding some users (Admins) {#seeding-some-users-admins}

By default, Apiato comes with a `Super Admin`.

This Super Admin Credentials are:

+ email: admin@admin.com
+ password: admin

This Admin seeded by `app/Containers/Authorization/Data/Seeders/AuthorizationDefaultUsersSeeder_3.php`.

The Default Super User, has a default role `admin`.

The `admin` default role **has no permissions given to it**.

To give permissions to the `admin` role (or any other role), you can use the dedicated endpoints (from your custom Admin Interface).

Checkout each container **Seeders** directory `app/Containers/AppSection/{container-name}/Data/Seeders/`, to edit the default **Users**, **Roles** and **Permissions**.

## Roles & Permissions guards {#roles-permissions-guards}

By default, Apiato uses a single guard called `web` for all it's roles and permissions, you can add/edit this behavior and support multiple guards at any time. Refer to the [laravel-permission](https://github.com/spatie/laravel-permission#using-multiple-guards) package for more details.
