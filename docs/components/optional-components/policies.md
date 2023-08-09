---
title: Policies
tags:
  - component
  - optional-component
  - policy
  - authorization
  - request
---

Apiato policies are just Laravel policies,
and they function in the exact same way as Laravel policies.
However, they come with additional rules and conventions specific to the Apiato.

To generate new policies you may use the `apiato:generate:policy` interactive command.

```
php artisan apiato:generate:policy
```

## Rules

- All Policies MUST be placed in the `app/Containers/{section}/{container}/Policies` directory.
- All Policies MUST extend the `App\Ship\Parents\Policies\Policy` class.
  - The parent extension SHOULD be aliased as `ParentPolicy`.
- All Policies MUST be named `{Model}Policy.php`.

## Folder Structure

```markdown
app
└── Containers
    └── Section
        └── Container
            └── Policies
                ├── UserPolicy.php
                └── ...
```

## Code Example

policies are defined exactly as you would define them in Laravel.
