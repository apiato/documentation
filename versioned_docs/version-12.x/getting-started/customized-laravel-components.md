---
sidebar_position: 3
title: Customized Laravel Components
---

## Customized Laravel Component Locations in Apiato

Apiato organizes Laravel's core components differently for a more modular and refined structure. Below is a guide to the default Laravel components and their locations within Apiato.

---

### Kernels

- **Http Kernel**  
  - Moved from `app/Http` to `app/Ship/Kernels`  
  - Renamed to `HttpKernel`

- **Console Kernel**  
  - Moved from `app/Console` to `app/Ship/Kernels`  
  - Renamed to `ConsoleKernel`

### Middlewares

- **Middlewares**  
  - Relocated from `app/Http/Middleware` to `app/Ship/Middlewares`

### Exception Handler

- **Exception Handler**  
  - Moved from `app/Exceptions` to `app/Ship/Exceptions/Handlers`  
  - Renamed to `ExceptionsHandler`

### Service Providers

For information about the new locations of **Providers**, please refer to the [Service Providers Documentation](../components/optional-components/service-providers.md#laravel-service-providers).

---

## Routes

### Web and API Routes

Apiato introduces an organized approach for route management, removing the default `routes/web.php` and `routes/api.php` files. To learn more about how routes are structured in Apiato, refer to the [Routing Documentation](../components/main-components/routes.md).

### Additional Route Files

- **Channels**  
  - The `channels.php` file has been moved from `routes` to `app/Ship/Broadcasts`.

- **Console Commands**  
  - The `console.php` file has been moved from `routes` to `app/Ship/Commands` and renamed to `closures.php`.

---

This new organization makes it easier to locate, maintain, and manage Apiato's core components while aligning with Laravel’s functionality.
