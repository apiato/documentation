---
title: API Versioning
---

- [How it works](#how-it-works)
- [Versioning API in header instead of URL](#version-the-api-in-header-instead-of-url)

Since Laravel does not support API versioning, Apiato provide a very easy way to implement versioning for your API.

### How it works {#how-it-works}

**Create:**

When creating a new API endpoint, specify the version number in the route file name following this naming format `{endpoint-name}.{version-number}.{documentation-name}.php`.

Example:

- `MakeOrder.v1.public.php`
- `MakeOrder.v2.public.php`
- `ListOrders.v1.private.php`

**Use:**

Automatically the endpoint inside that route file will be accessible by adding the version number to the URL.

Example:

- `https://api.apiato.test/v1/register`
- `https://api.apiato.test/v1/orders`
- `https://api.apiato.test/v2/stores/123`

## Version the API in header instead of URL{#version-the-api-in-header-instead-of-url}

First remove the URL version prefix:

1. Edit `app/Ship/Configs/apiato.php`, set prefix to `'enable_version_prefix' => 'false',`.
2. Implement the Header versioning anyway you prefer. (this is not implemented in Apiato yet. _Consider a contribution_).
