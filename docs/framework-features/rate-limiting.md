---
sidebar_position: 7
title: Rate Limiting
tags:
  - framework-feature
  - rate-limiting
---

Apiato uses [Laravel Rate Limiting](https://laravel.com/docs/rate-limiting) feature
to protect your API from abuse and to ensure stability.

:::note
This feature is only applied to API requests, and not to web requests and is _enabled_ by default.
:::

## How it works

Given the rate limit window is `1` minute per endpoint,
with individual calls allowing for `30` requests in each window each user is allowed
to make `30` calls per endpoint every `1` minute
(for each unique access token).

## Configuration

Rate limiting configuration is done in the `app/Ship/Configs/apiato.php` config file.

## Rate Limiting Headers {#rate-limiting-headers}
For how many hits you can perform on an endpoint, you can always check the header:

```
X-RateLimit-Limit → 30
X-RateLimit-Remaining → 29
```

## Disable Rate Limiting {#disable-rate-limiting}
The API rate limiting middleware name is `api` and is assigned to all API endpoints by default.
You can disable it on specific endpoints or globally.

### On a specific endpoint
Rate limiting can be disabled
by removing the `api` middleware from an endpoint using `withoutMiddleware('throttle:api')` method.
[Read More](https://laravel.com/docs/middleware#excluding-middleware).

### Globally
To disable rate limiting completely, set `GLOBAL_API_RATE_LIMIT_ENABLED` to `false` in the `.env` file.
