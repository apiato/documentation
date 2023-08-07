---
sidebar_position: 1
title: Routes
tags:
  - component
  - main-component
  - route
  - controller
  - request
---

Routes are responsible for mapping incoming HTTP requests to their corresponding controller functions.

To generate new routes you may use the `apiato:generate:route` interactive command.

```
php artisan apiato:generate:route
```

## Definition & Principles

Read [**Porto SAP Documentation (#Routes)**](https://github.com/Mahmoudz/Porto#definitions--principles).

## Rules

- All API Routes MUST be placed in the `app/Containers/{Section}/{Container}/UI/API/Routes` directory.
- All Web Routes MUST be placed in the `app/Containers/{Section}/{Container}/UI/WEB/Routes` directory.
- Each Route file MUST contain only one Route.
- All API Route files MUST be named based on their API version, exposure level (public/private), and functionality.  
  Examples of valid API Route file names:
  - `CreateOrder.v1.public.php`
  - `FulfillOrder.v2.public.php`
  - `CancelOrder.v1.private.php`

:::note
Web Route files, can have any appropriate name.
:::

## Folder Structure

```markdown
app
└── Containers
    └── Section
        └── Container
            └── UI
                ├── API
                │   └── Routes
                │       ├── RouteA.v1.public.php
                │       ├── RouteB.v2.public.php
                │       ├── RouteC.v1.private.php
                │       └── ...
                └── WEB
                    └── Routes
                        ├── main.php
                        └── ...
```

## Code Example

Routes are defined exactly as you would define them in Laravel.

## Public & Private Routes

Apiato supports two types of endpoints, `Public` and `Private`, out of the box.
Maintaining this distinction enables the generation of separate documentations for each type,
ensuring that your internal API remains private and secure.

#### Public Routes:
- Accessible to third parties.
- May or may not require authentication.

#### Private Routes:
- Accessible only to your own apps.
- May or may not require authentication.
