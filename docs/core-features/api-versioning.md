---
title: API Versioning
tags:
  - core-feature
  - api
  - route
---

Apiato offers a convenient method to implement API versioning seamlessly.
To enable API versioning,
navigate to the `app/Ship/Configs/apiato.php` config file and set the `enable_version_prefix` to `true`.

Once enabled, you can create a new API endpoint and define its version number in the route file name.
Follow this naming convention: `{endpoint-name}.{version-number}.{endpoint-visibility}.php`.
By adhering to this naming convention,
the endpoint inside the specified route file will automatically become accessible by appending the version number to the URL.

| Route File Name             | Route File Content                                            | Generated Route                            |
|-----------------------------|---------------------------------------------------------------|--------------------------------------------|
| `CreateOrder.v1.public.php` | `Route::post('orders', CreateOrderController::class);`        | [POST] `https://api.apiato.test/v1/orders` |
| `CreateOrder.v2.public.php` | `Route::post('orders', AnotherCreateOrderController::class);` | [POST] `https://api.apiato.test/v2/orders` |
| `ListOrders.v1.private.php` | `Route::get('orders', ListOrdersController::class);`          | [GET] `https://api.apiato.test/v1/orders`  |
