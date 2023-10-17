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

[Routes](https://laravel.com/docs/routing) are responsible for mapping incoming HTTP requests to their corresponding controller functions.

To generate new routes you may use the `apiato:generate:route` interactive command:

```
php artisan apiato:generate:route
```

## Definition & Principles

Read [**Porto SAP Documentation (#Routes)**](https://github.com/Mahmoudz/Porto#definitions--principles).

## Rules

- All API Routes:
  - MUST be placed in the `app/Containers/{Section}/{Container}/UI/API/Routes` directory.
  - MUST follow a specific [naming convention](#api-routes).
- All Web Routes MUST be placed in the `app/Containers/{Section}/{Container}/UI/WEB/Routes` directory.
- Each Route file MUST contain only one Route.

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

## Route File Naming Convention

### API Routes

API Route files MUST be named based on their functionality, API version and exposure level (public/private).

#### Examples of valid API Route file names:

- `CreateOrder.v1.public.php`
- `FulfillOrder.v2.public.php`
- `CancelOrder.v1.private.php`

### Web Routes

Web Route files can have any appropriate name.

## API Versioning

Apiato provides a streamlined approach to implementing API versioning within your application.
This feature is enabled by default.

If you wish to disable API versioning,
navigate to the `app/Ship/Configs/apiato.php` configuration file and set the `enable_version_prefix` to `false`.

Once API versioning is enabled,
you can create new API endpoints and define their version numbers directly in the route file names.
The route file names must adhere to the following naming convention:
* `{endpoint-name}.{version-number}.{endpoint-visibility}.php`

By following to this naming convention,
the endpoint inside the specified route file will automatically become accessible by appending the version number to the URL.

#### Some Examples:
| Route File Name             | Route File Content                                            | Generated Route                            |
|-----------------------------|---------------------------------------------------------------|--------------------------------------------|
| `CreateOrder.v1.public.php` | `Route::post('orders', CreateOrderController::class);`        | [POST] `http://api.apiato.test/v1/orders` |
| `CreateOrder.v2.public.php` | `Route::post('orders', AnotherCreateOrderController::class);` | [POST] `http://api.apiato.test/v2/orders` |
| `ListOrders.v1.private.php` | `Route::get('orders', ListOrdersController::class);`          | [GET] `http://api.apiato.test/v1/orders`  |


## Public & Private Routes

Apiato supports two types of endpoints, `Public` and `Private`, out of the box.
Maintaining this distinction enables the generation of separate documentations for each type,
ensuring that your internal API remains private and secure.
This feature can be configured through the [Documentation Generator](../../pacakges/documentation.md) package.

#### Public Routes:
- Accessible to third parties.
- May or may not require authentication.

#### Private Routes:
- Accessible only to your own apps.
- May or may not require authentication.
