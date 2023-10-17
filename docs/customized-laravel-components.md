---
sidebar_position: 8
title: Customized Laravel Components
---

Apiato provides a refined organization for Laravel default class locations.
Here, you can find the default Laravel components and their corresponding locations within Apiato.

## Kernels

- **Http Kernel** is moved from `app/Http` to `app/Ship/Kernels` and renamed to `HttpKernel`.

- **Console Kernel** is moved from `app/Console` to `app/Ship/Kernels` and renamed to `ConsoleKernel`.

## Middlewares

- **Middlewares** are moved from `app/Http/Middleware` to `app/Ship/Middlewares`.

## Handler

- Exception **Handler** is moved from `app/Exceptions` to `app/Ship/Exceptions/Handlers` and renamed to `ExceptionsHandler`.

## Providers

- For information about the new locations of **Providers**, please refer to [this link](components/optional-components/service-providers.md#laravel-service-providers).

## Routes

### Web and API

Apiato introduces a new approach to route organization and does not use the default `routes/web.php` and `routes/api.php` files. Therefore, you won't find these files in Apiato. To learn more, please visit [this link](components/main-components/routes.md).

### Channels

- The **channels.php** file has been relocated from `routes` to `app/Ship/Broadcasts`.

### Console

- The **console.php** file has been moved from `routes` to `app/Ship/Commands` and renamed to `closures.php`.
