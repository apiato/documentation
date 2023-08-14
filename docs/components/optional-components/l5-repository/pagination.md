---
title: Pagination
---

- [Limit](#limit)
- [Change the default pagination limit](#change-the-default-pagination-limit)
- [Skip the Pagination Limit](#skip-the-pagination-limit)

For pagination Apiato uses the [L5 Repository Package](https://packagist.org/packages/prettus/l5-repository) and the
pagination gets applied whenever you use the `paginate` method on any model repository
(example: `$stores = $this->storeRepository->paginate();`).

`?page=` parameter can be applied to any **`GET`** HTTP request responsible for listing records (mainly for Paginated data).

**Usage:**

```
api.domain.test/endpoint?page=200
```

*Pagination object is always returned in **meta** when pagination is available on the endpoint.*

```
  "data": [...],
  "meta": {
    "pagination": {
      "total": 2000,
      "count": 30,
      "per_page": 30,
      "current_page": 22,
      "total_pages": 1111,
      "links": {
        "previous": "https://api.domain.test/endpoint?page=21"
      }
    }
  }
```
### Limit {#limit}

The `?limit=` parameter can be applied to define, how many results should be returned on one page (also see [Pagination](query-parameters.md#pagination)).

**Usage:**

```
api.domain.test/endpoint?limit=100
```

This would return 100 resources within one page of the result. Of course, the `limit` and `page` query parameter can be
combined in order to get the next 100 resources:

```
api.domain.test/endpoint?limit=100&page=2
```

### Change the default pagination limit {#change-the-default-pagination-limit}

Open the `.env` file and set a number for `PAGINATION_LIMIT_DEFAULT`:

```env
PAGINATION_LIMIT_DEFAULT=10
```

This is used in the `config/repository.php` which is the config file of the **L5 Repository** Package.

### Skip the Pagination Limit {#skip-the-pagination-limit}

In order to allow clients to request all data that matches their criteria (e.g. search-criteria) and disable pagination,
you can do it either project wide or per repository. After that a request can get all the data 
(with no pagination applied) by applying `limit=0`.

This will return all matching entities:  
`api.domain.test/endpoint?limit=0`

### Project Wide
Set `PAGINATION_SKIP=true` in `.env` file.

### Per Repository
Override the `$allowDisablePagination` property in your specific `Repository` class.

:::note  
Per repository configs override the global config and have precedence.  
:::
