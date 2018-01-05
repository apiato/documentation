---
title: "Query Parameters"
category: "Features"
order: 10
---

- [Sorting & Ordering](#sorting-ordering)
- [Searching](#searching)
    - [Search any field for multiple keywords](#search-any-field-for-multiple-keywords)
    - [Search in specific field](#search-in-specific-field)
    - [Search in specific fields for multiple keywords](#search-in-specific-fields-for-multiple-keywords)
    - [Define query condition](#define-query-condition)
    - [Define search fields for search](#define-search-fields-for-search)
    - [Define the query condition for search](#define-the-query-condition-for-search)
- [Filtering](#filtering)
- [Pagination](#pagination)
- [Limit](#limit)
- [Relationships (include)](#relationships-include)
- [Caching skipping](#caching-skipping)
- [Configuration](#configuration)
- [See the Query parameters from the User Developer perspective](#see-the-query-parameters-from-the-user-developer-perspective)
- [More Information](#more)

<br>
<br>

Users often need to control the response data, thus the apiato supports some useful and common query parameters:

<a name="sorting-ordering"></a>
## Sorting & Ordering

The `?sortedBy=` parameter is usually used with the `orderBy` parameter.

By default the `orderBy` sorts the data in **Ascending** order, if you want the data sorted in **Descending** order, you can add `&sortedBy=desc`.

```
?orderBy=id&sortedBy=asc
```

```
?orderBy=created_at&sortedBy=desc
?orderBy=name&sortedBy=asc
```

Accepts:

- `asc` for Ascending.
- `desc` for Descending.

*(provided by the L5 Repository)*

<a name="Searching"></a>

## Searching

The `?search=` parameter can be applied to any **`GET`** HTTP request.

For the search to work you need to add `fieldSearchable` to the Repository of the Model.

```php
<?php

protected $fieldSearchable = [
    'name',
    'email',
    // ...
];

// OR

protected $fieldSearchable = [
    'name'  => 'like',
    'email' => '=',
    // ...
];
```


```
?search=John
?search=name:John
?search=name:John%20Doe
```

Notice should replace the space with `%20`.

> Space should be replaced with `%20` (search=keyword%20here).

<a name="search-any-field-for-multiple-keywords"></a>

#### Search any field for multiple keywords

```
api.domain.dev/endpoint?search=first keyword;second keyword
```

<a name="search-in-specific-field"></a>

#### Search in specific field
```
api.domain.dev/endpoint?search=field:keyword here
```

<a name="search-any-field-for-multiple-keywords"></a>

#### Search in specific fields for multiple keywords
```
api.domain.dev/endpoint?search=field1:first field keyword;field2:second field keyword
```

<a name="define-query-condition"></a>

#### Define query condition

```
api.domain.dev/endpoint?search=field:keyword&searchFields=name:like
```

Checkout the Search Page for full implementation example.

*(provided by the L5 Repository)*

<a name="define-search-fields-for-search"></a>

### Define search fields for search

```
?search=name:John&email:john@main.com
?search=name:John;email:john@main.com
```

*(provided by the L5 Repository)*

See the [Search query parameter]({{ site.baseurl }}{% link _docs/features/search-query-parameter.md %}) page, for how to set it up and control the searchability.

<a name="define-the-query-condition-for-search"></a>

### Define the query condition for search

```
?searchFields=name:like
?searchFields=email:=
?searchFields=name:like;email:=
?search=git&searchFields=url:like
```

*(provided by the L5 Repository)*


<a name="filtering"></a>

## Filtering

The `?filter=` parameter can be applied to any HTTP request. And is used to control the response size, by defining what
data you want back in the response.

**Usage:**

Return only ID and Name from that Model, (everything else will be returned as `null`).

```
api.domain.dev/endpoint?filter=id;status
```

Example Response, including only id and status:

```json
{
  "data": [
    {
      "id": "0one37vjk49rp5ym",
      "status": "approved",
      "products": {
        "data": [
          {
            "id": "bmo7y84xpgeza06k",
            "status": "pending"
          },
          {
            "id": "o0wzxbg0q4k7jp9d",
            "status": "fulfilled"
          }
        ]
      },
      "recipients": {
        "data": [
          {
            "id": "r6lbekg8rv5ozyad"
          }
        ]
      },
      "store": {
        "data": {
          "id": "r6lbekg8rv5ozyad"
        }
      }
    }...
```


*(provided by the L5 Repository)*

Note that the transformer, which is used to output / format the data is also filtered. This means, that only the fields
to be filtered are present - all other fields are excluded. This also applies for all (!) relationships (i.e., includes)
of the object.

<a name="pagination"></a>

## Pagination

The `?page=` parameter can be applied to any **`GET`** HTTP request responsible for listing records (mainly for Paginated data).

**Usage:**

```
api.domain.dev/endpoint?page=200
```

*The pagination object is always returned in the **meta** when pagination is available on the endpoint.*

```shell
  "data": [...],
  "meta": {
    "pagination": {
      "total": 2000,
      "count": 30,
      "per_page": 30,
      "current_page": 22,
      "total_pages": 1111,
      "links": {
        "previous": "http://api.domain.dev/endpoint?page=21"
      }
    }
  }
```

*(provided by the Laravel Paginator)*

<a name="limit"></a>

## Limit

The `?limit=` parameter can be applied to define, how many results should be returned on one page (see also `Pagination`!).

**Usage:**

```
api.domain.dev/endpoint?limit=100
```

This would return 100 resources within one page of the result. Of course, the `limit` and `page` query parameter can be
combined in order to get the next 100 resources:

```
api.domain.dev/endpoint?limit=100&page=2
```

In order to allow clients to request all data that matches their criteria (e.g., search-criteria) and disable pagination,
you can manually override the `$allowDisablePagination` property in your specific `Repository` class. A requester can then
get all data (with no pagination applied) by requesting `api.domain.dev/endpoint?limit=0`. This will return all matching
entities.

<a name="relationships-include"></a>

## Relationships (include)

Include relationships for complex data structures.

Get an object with its relationships:

For this to work, your `Transformer` should have the relationships defined on it. 
*Check the [Transformers]({{ site.baseurl }}{% link _docs/components/transformers.md %}) for more details on how to define such relationships.*

You can include such relationships by adding the `include` query parameter with comma `,` separated names, like so:

```
?include=tags,user
```

It is also possible to 


The `?include=` parameter can be used with any endpoint if it is supported.

### How to use it
Let's say there is a `Driver` and a `Car` object. Also, there is an `/cars` endpoint that returns all `Car` objects.
The `?include` parameter allows getting all cars with their respective drivers in one request by calling `/cars?include=driver`.

However, for this parameter to work, the `CarTransformer`, which handles the `/cars` endpoint should clearly define that it
accepts `driver` as relationship (in the **Available Relationships** section).

### Nested Includes
It is also possible to request "nested includes". Extend the example from above. Imagine, that a `Driver` may also have a 
relationship to an `Address` object. You can access this information as well by calling `?include=driver,driver.address`.

Of course, the `address` include is defined in the respective `DriverTransformer` that is used here.

**Usage:**

```
api.domain.dev/endpoint?include=relationship
```

**Where to define the includes:**

Every Transformer can have 2 types of includes `$availableIncludes` and `$defaultIncludes`:

```php
    protected $availableIncludes = [
        'products',
        'store',
        'recipients',
    ];

    protected $defaultIncludes = [
        'invoice',
    ];
```

`$defaultIncludes` will not be listed in the response, only the `$availableIncludes` will be.

Visit the [Transformers]({{ site.baseurl }}{% link _docs/components/transformers.md %}) page for more details.

*(provided by the Fractal Transformer)*

<a name="caching-skipping"></a>

## Caching skipping

Note: You need to turn the Eloquent Query Caching ON for this feature to work. Checkout the Configuration Page "ELOQUENT_QUERY_CACHE".

To run a new query and force disabling the cache on certain endpoints, you can use this parameter

```
?skipCache=true
```

It's not recommended to keep skipping cache as it has bad impact on the performance.


*(provided by the L5 Repository)*

<a name="configuration"></a>

## Configuration

Most of these parameters are provided by the L5 Repository and configurable from the `Ship/Configs/repository.php` file.
Some of them are built in house, or inherited from other packages such as Fractal.

<a name="see-the-query-parameters-from-the-user-developer-perspective"></a>

## See the Query parameters from the User Developer perspective

1) Generate the Default API documentation

2) Visit the documentation URL

More details in the [API Docs Generator]({{ site.baseurl }}{% link _docs/features/api-docs-generator.md %}) page.

<a name="more"></a>

## More Information

For more details on these parameters check out these links:

- [l5-repository](https://github.com/andersao/l5-repository#example-the-criteria)

- [Fractal Transformers](http://fractal.thephpleague.com/transformers/)
