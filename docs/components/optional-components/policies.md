---
title: Policies
tags:
  - component
  - optional-component
  - policy
  - authorization
  - request
---

Apiato policies are just [Laravel Policies](https://laravel.com/docs/authorization),
and they function in the exact same way as Laravel policies.
However, they come with additional rules and conventions specific to Apiato.

To generate new policies, you may use the `apiato:make:policy` interactive command:

```
php artisan apiato:make:policy
```

## Rules

- All Policies:
  - MUST be placed in the `app/Containers/{section}/{container}/Policies` directory.
  - MUST extend the `App\Ship\Parents\Policies\Policy` class.
    - The parent extension SHOULD be aliased as `ParentPolicy`.
  - SHOULD be named after the model they are associated with, followed by the `Policy` suffix. For instance, `UserPolicy.php`.


## Folder Structure

```php
app
└── Containers
    └── Section
        └── Container
            └── Policies
                ├── UserPolicy.php
                └── ...
```

## Code Example

Policies are defined exactly as you would define them in Laravel.

### Policy Auto-Discovery

Apiato offers a policy auto-discovery feature that eliminates the need for manual registration of model policies.
This automatic discovery process relies on adhering to standard Apiato naming conventions for policies.

By following the [rules](#rules) outlined above, you allow Apiato to automatically discover your policies.

To summarize:

- Policies must be stored within the `app/Containers/{section}/{container}/Policies` directory.
- The policy name should mirror the corresponding model's name while appending a `Policy` suffix. For instance, a `User` model corresponds to a `UserPolicy` policy class.
