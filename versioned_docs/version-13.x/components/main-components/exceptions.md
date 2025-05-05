---
sidebar_position: 9
title: Exceptions
tags:
  - component
  - main-component
  - exception
---

Exceptions are used to handle errors and exceptions in the application.

To generate new exceptions, you may use the `apiato:make:exception` interactive command:

```
php artisan apiato:make:exception
```

## Definition and Principles

Read [**Porto SAP Documentation (#Exceptions)**](https://github.com/Mahmoudz/Porto#definitions--principles).

## Rules

- All container-specific Exceptions MUST be placed in the `app/Containers/{Section}/{Container}/Exceptions` directory.
- All general Exceptions MUST be placed in the `app/Ship/Exceptions` directory.
- All application Exceptions MUST extend the `App\Ship\Parents\Exceptions\Exception` class.
  - The parent extension SHOULD be aliased as `ParentException`.
- All Http Exceptions MUST extend the `App\Ship\Parents\Exceptions\HttpException` class.
  - The parent extension SHOULD be aliased as `ParentHttpException`.

## Folder Structure

```markdown
app
├── Containers
│   └── Section
│       └── Container
│           └── Exceptions
│               ├── SpecificException.php
│               ├── AnotherSpecificException.php
│               └── ...
└── Ship
    └── Exceptions
        ├── GeneralException.php
        ├── AnotherGeneralException.php
        └── ...
```

## Code Example

Exceptions are defined exactly as you would define them in Laravel.
