---
title: Data Caching
---

### Enable Eloquent Query Caching

:::info
This feature is **disabled** By default. 
:::

To enable it, go to `app/Ship/Configs/repository.php` config file and set `cache` > `enabled  => true`, or set it from the `.env` file using `ELOQUENT_QUERY_CACHE`.

More details can be found [here](https://github.com/andersao/l5-repository#cache-config).

Users can skip the query caching and request new data by passing specific parameter to the Endpoint. Checkout its documentation [here](query-parameters.md#skip-caching).

### Change different caching settings {#change-different-caching-settings}

You can use different cache setting for each repository.

To set cache settings on each repository, first the caching must be enabled, second you need to set some properties on the repository class to override the default values.

For more details about all the properties refer to [the L5 repository package documentation](https://github.com/andersao/l5-repository#cache-config).

Note:
you don't need to use the `CacheableRepository` trait
or implement the `CacheableInterface` since they both exist in the `App\Ship\Parents\Repositories\Repository` class.
