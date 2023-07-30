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

### Definition & Principles {#definition-principles}

Read [**Porto SAP Documentation (#Routes)**](https://github.com/Mahmoudz/Porto#definitions--principles).

### Rules {#rules}

- All Routes MUST be placed in the `App\Containers\{Section}\{Container}\UI\{API|WEB}\Routes` directory.
- Each Route file MUST contain only one Route.
- API Route files MUST be named based on their API version, exposure level (public/private), and functionality.  
  Examples of valid API Route file names:
  - `CreateOrder.v1.public.php`
  - `FulfillOrder.v2.public.php`
  - `CancelOrder.v1.private.php`

:::note
Web Route files, can have any appropriate name.
:::

### Folder Structure {#folder-structure}

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

### Code Example {#code-example}

Routes are defined exactly like the way you defined them in Laravel.

```php
use Illuminate\Support\Facades\Route;

Route::post('/profile', Controller::class);
```

## Public & Private Routes {#public-private-routes}

Apiato supports two types of endpoints, `Public` and `Private`, out of the box.
Maintaining this distinction enables the generation of separate documentations for each type,
ensuring that your internal API remains private and secure.

#### Public Routes:
- Accessible to third parties.
- May or may not require authentication.

#### Private Routes:
- Accessible only to your own apps.
- May or may not require authentication.
