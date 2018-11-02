---
title: "Routes"
category: "Main Components"
order: 1
---

* [Definition & Principles](#definition-principles)
* [Rules](#rules)
* [Folder Structure](#folder-structure)
* [Web Routes](#web-routes)
* [API Routes](#api-routes)
- [Protect your Endpoints:](#protect-your-endpoints)
* [Difference between Public & Private routes files](#difference-between-public-private-routes-files)

<a name="definition-principles"></a>

### Definition & Principles

Read from the [**Porto SAP Documentation (#Routes)**](https://github.com/Mahmoudz/Porto#Routes).

<a name="rules"></a>

### Rules

- The API Routes files MUST be named according to their API's versions, exposure and functionality. Example `CreateOrder.v1.public.php`, `FulfillOrder.v2.public.php`, `CancelOrder.v1.private.php`...

- Web Routes files are pretty similar to API web files but they can be named anything.

<a name="folder-structure"></a>

### Folder Structure

```
 - app
    - Containers
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

<a name="web-routes"></a>

### Web Routes

**Example: Endpoint to display a Hello View in the browser**

```php
<?php

$router->get('/hello', [
    'uses' => 'Controller@sayHello',
]);
```

In all the Web `Routes` files the `$router` variable is an instance of the default Laravel Router `Illuminate\Routing\Router`.

<a name="api-routes"></a>

### API Routes

**Example: User Login API Endpoint**

```php
<?php

$router->post('login', [
    'uses' => 'Controller@loginUser',
]);
```

**Example: Protected List All Users API Endpoint, for an API Routes file**

```php
<?php

$router->get('users', [
    'uses'       => 'Controller@listAllUsers',
    'middleware' => [
        'api.auth',
    ]
]);
```

<a name="protect-your-endpoints"></a>

## Protect your Endpoints:

Checkout the [Authorization]({{ site.baseurl }}{% link _docs/features/authorization.md %}) Page.


<a name="difference-between-public-private-routes-files"></a>

### Difference between Public & Private routes files

apiato has 2 types of endpoints, Public (External) mainly for third parties clients, and Private (Internal) for your own Apps. This will help generating separate documentations for each and keep your internal API private.
