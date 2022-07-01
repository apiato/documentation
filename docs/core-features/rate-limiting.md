---
title: Rate Limiting
---

Apiato uses the default Laravel middleware for rate limiting (throttling).

All REST API requests are throttled to prevent abuse and ensure stability. 
The exact number of calls that your application can make per day varies based on the type of request you are making.

The rate limit window is `1` minute per endpoint, with most individual calls allowing for `30` requests in each window.

*In other words, each user is allowed to make `30` calls per endpoint every `1` minute. (For each unique access token).*

To update these values go to `app/Ship/Configs/apiato.php` config file, or to the `ENV` file.

```php
'throttle' => [
    'enabled' => env('GLOBAL_API_RATE_LIMIT_ENABLED', true),
    'attempts' => env('GLOBAL_API_RATE_LIMIT_ATTEMPTS_PER_MIN', '30'),
    'expires' => env('GLOBAL_API_RATE_LIMIT_EXPIRES_IN_MIN', '1'),
]
```

```php
GLOBAL_API_RATE_LIMIT_ENABLED=true
GLOBAL_API_RATE_LIMIT_ATTEMPTS_PER_MIN=30
GLOBAL_API_RATE_LIMIT_EXPIRES_IN_MIN=1
```

For how many hits you can preform on an endpoint, you can always check the header:

```
X-RateLimit-Limit →30
X-RateLimit-Remaining →29
```

## Enable/Disable Rate Limiting: {#enable-disable-rate-limiting}

The global API rate limiting middleware name is `api` and is enabled and applied to all the Container API Endpoints by default.

### Disable on specific endpoint: 
This middleware can be bypassed using `withoutMiddleware()` method on a specific route.

### Disable on all endpoints (globally):
To disable it set `GLOBAL_API_RATE_LIMIT_ENABLED` to `false` in the `.env` file.
