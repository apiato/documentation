---
title: Routes
---

- [Definition & Principles](#definition-principles)
- [Rules](#rules)
- [Folder Structure](#folder-structure)
- [Examples](#examples)
- [Protect your Endpoints](#protect-your-endpoints)
- [Difference between Public & Private routes files](#difference-between-public-private-route-files)

### Definition & Principles {#definition-principles}

Read [**Porto SAP Documentation (#Routes)**](https://github.com/Mahmoudz/Porto#Routes).

### Rules {#rules}

- API Route files MUST be named according to their API's version, exposure and functionality. e.g. `CreateOrder.v1.public.php`, `FulfillOrder.v2.public.php`, `CancelOrder.v1.private.php`...

- Web Route files are pretty similar to API web files, but they can be named anything.

### Folder Structure {#folder-structure}

```
 - app
    - Containers
        - {section-name}
            - {container-name}
                - UI
                    - API
                       - Routes
                          - CreateItem.v1.public.php
                          - DeleteItem.v1.public.php
                          - CreateItem.v2.public.php
                          - DeleteItem.v1.private.php
                          - ApproveItem.v1.private.php
                          - ...
                    - WEB
                       - Routes
                          - main.php
                          - ...
```

### Examples {#examples}

#### Web & API route
Routes are defined exactly like the way you defined them in Laravel.

```php
Route::post('hello', [Controller::class, 'sayHello']);
```

#### Protected Route (API)

```php
Route::get('users', [Controller::class, 'listAllUsers'])
    ->middleware(['auth:api']);
```

## Protect your Endpoints: {#protect-your-endpoints}

Checkout the [Authorization](../core-features/authorization) Page.

## Difference between Public & Private routes files {#difference-between-public-private-route-files}

Apiato has 2 types of endpoint, Public (External) mainly for third parties clients, and Private (Internal) for your own Apps. This will help to generate separate documentations for each and keep your internal API private.
