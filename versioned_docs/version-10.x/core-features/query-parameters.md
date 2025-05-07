---
title: Query Parameters
---

- [Sorting & Ordering](#sorting-ordering)
- [Using the RequestCriteria](#using-the-request-criteria)
  - [Searching](#searching)
    - [Search any field for multiple keywords](#search-any-field-for-multiple-keywords)
    - [Search in a specific field](#search-in-a-specific-field)
    - [Search in specific fields for multiple keywords](#search-in-specific-fields-for-multiple-keywords)
    - [Search Hashed IDs](#search-hashed-ids)
    - [Define query condition](#define-query-condition)
    - [Define search fields for search](#define-search-fields-for-search)
    - [Define the query condition for search](#define-the-query-condition-for-search)
    - [Search Join](#search-join)
  - [Filtering](#filtering)
- [Pagination](#pagination)
- [Relationships (include)](#relationships-include)
- [Skip caching](#skip-caching)
- [Configuration](#configuration)
- [See the Query parameters from the User Developer perspective](#see-the-query-parameters-from-the-user-developer-perspective)
- [More Information](#more-information)

Users often need to control the response data, thus the apiato supports some useful and common query parameters:

## Sorting & Ordering {#sorting-ordering}
*(provided by the [L5 Repository](https://github.com/andersao/l5-repository))*

The `?sortedBy=` parameter is usually used with the `orderBy` parameter.

By default, the `orderBy` sorts the data in **Ascending** order, if you want the data sorted in **Descending** order, you can add `&sortedBy=desc`.

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

## Using the RequestCriteria {#using-the-request-criteria}
*(provided by the [L5 Repository](https://github.com/andersao/l5-repository))*

RequestCriteria is a standard Criteria implementation. It enables filters to perform in the repository from parameters sent in the request.

You can perform a dynamic search, filter the data and customize the queries.

Apiato provides `addRequestCriteria()` & `removeRequestCriteria()` methods which are available in both `Actions` and `Tasks` provided by the `Apiato\Core\Traits\HasRequestCriteriaTrait`.  

Usage example:
```php
class GetAllAdminsAction extends Action
{
    public function run()
    {
        return app(GetAllUsersTask::class)->addRequestCriteria()->run();
//        return app(GetAllUsersTask::class)->removeRequestCriteria()->run();
    }
}
```
Using `removeRequestCriteria()` is only meaningful if you have applied RequestCriteria using below methods, otherwise RequestCriteria is not applied automatically thus you don't need to remove it if it is not needed.

To use the Criteria in your repository, you can add a new criteria in the boot method of your repository, or directly use in your controller, in order to filter out only a few requests.
Read more about it [here](https://github.com/andersao/l5-repository#using-the-requestcriteria).
### Searching {#searching}

If the [RequestCriteria](#using-the-request-criteria) is enabled on a route then the `?search=` parameter can be 
applied to **`GET`** HTTP requests on that specific route.

For the search to work you need to define which fields from the model can be searchable.  
In your repository set $fieldSearchable with the name of the fields to be searchable or a relation to fields.
```php
protected $fieldSearchable = [
    'name',
    'email',
    'product.name'
];
```
You can set the type of condition which will be used to perform the query, the default condition is "="

```php
protected $fieldSearchable = [
    'name'=>'like',
    'email', // Default Condition "="
    'your_field'=>'condition'
];
```
```
?search=John
?search=name:John
?search=name:John%20Doe
```

Notice should replace the space with `%20`.

> Space should be replaced with `%20` (search=keyword%20here).

#### Search any field for multiple keywords {#search-any-field-for-multiple-keywords}

```
api.domain.test/endpoint?search=first keyword;second keyword
```

#### Search in a specific field {#search-in-a-specific-field}

```
api.domain.test/endpoint?search=field:keyword here
```

#### Search in specific fields for multiple keywords {#search-in-specific-fields-for-multiple-keywords}

```
api.domain.test/endpoint?search=field1:first field keyword;field2:second field keyword
```

#### Search Hashed IDs {#search-hashed-ids}
If you have [Hash ID](./hash-id) enabled, and you want to search a hashed field (e.g. user ID) `?search=id:XbPW7awNkzl83LD6`
you need to tell the [RequestCriteria](#using-the-request-criteria) to decode it before it can be searched.  
Let's say we have this search query `?search=id:XbPW7awNkzl83LD6;parent_id:aYOxlpzRMwrX3gD7;some_hashed_id:NxOpZowo9GmjKqdR`.
Then you have to update your `addRequestCriteria` method like this:
```php
   app(GetAllUsersTask::class)->addRequestCriteria(null, ['id', 'parent_id', 'some_hashed_id'])->run();
```
By default, two things will be decoded:  
1. Single value search (e.g. `search=something`)  
This will only be decoded if it is a hash id so `search=NxOpZowo9GmjKqdR` will become `search=1` but `search=something` will
not be decoded and will stay same (`search=something`).
2. The `id` field  
   If you are searching only by `id` field, you do not need to add it to decode array above. This will be decoded `?search=id:XbPW7awNkzl83LD6` automatically.

#### Define query condition {#define-query-condition}

```
api.domain.test/endpoint?search=field:keyword&searchFields=name:like
```

Checkout the Search Page for full implementation example.

#### Define search fields for search {#define-search-fields-for-search}

```
?search=name:John&email:john@main.com
?search=name:John;email:john@main.com
```

#### Define the query condition for search {#define-the-query-condition-for-search}

```
?searchFields=name:like
?searchFields=email:=
?searchFields=name:like;email:=
?search=git&searchFields=url:like
```


#### Search Join: {#search-join}
By default, search makes its queries using the OR comparison operator for each query parameter.

```
api.domain.test/v1/endpoint?search=age:17;email:john@gmail.com
```

The above example will execute the following query:

```sql
SELECT * FROM users WHERE age = 17 OR email = 'john@gmail.com';
```
In order for it to query using the AND, pass the `searchJoin` parameter as shown below:

```
api.domain.test/v1/endpoint?search=age:17;email:john@gmail.com&searchJoin=and
```

### Filtering {#filtering}

`?filter=` parameter can be applied to any HTTP request and is used to control the response size, by defining what
data you want back in the response.

**Usage:**

Return only ID and Name from that Model, (everything else will be returned as `null`).

```
api.domain.test/endpoint?filter=id;status
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

Note that the transformer, which is used to output / format the data is also filtered. This means, that only the fields
to be filtered are present - all other fields are excluded. This also applies for all relationships (i.e., includes)
of the object.

## Pagination {#pagination}
*(provided by the [L5 Repository](https://github.com/andersao/l5-repository))*

See [Pagination](pagination).

## Relationships (include) {#relationships-include}
*(provided by the [Fractal Transformer](https://fractal.thephpleague.com/transformers/))*

Include relationships for complex data structures.

Get an object with its relationships:

For this to work, your `Transformer` should have the relationships defined on it.
*Check the [Transformers](../main-components/transformers) for more details on how to define such relationships.*

You can include such relationships by adding the `include` query parameter with comma `,` separated names, like so:

```
?include=tags,user
```

It is also possible to

`?include=` parameter can be used with any endpoint if it is supported.

### How to use it {#relationships-include-how-to-use-it}
Let's say there is a `Driver` and a `Car` object. Also, there is an `/cars` endpoint that returns all `Car` objects.
The `?include` parameter allows getting all cars with their respective drivers in one request by calling `/cars?include=driver`.

However, for this parameter to work, the `CarTransformer`, which handles the `/cars` endpoint should clearly define that it
accepts `driver` as relationship ([$availableIncludes](#where-to-define-the-includes) in Transformer).

### Nested Includes {#relationships-include-nested-includes}
It is also possible to request "nested includes". Extend the example from above. Imagine, that a `Driver` may also have a
relationship to an `Address` object. You can access this information as well by calling `?include=driver,driver.address`.

Of course, the `address` include is defined in the respective `DriverTransformer` that is used here.

#### Where to define the includes: {#where-to-define-the-includes}

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

Visit the [Transformers](../main-components/transformers) page for more details.

## Skip caching {#skip-caching}
*(provided by the [L5 Repository](https://github.com/andersao/l5-repository))*

Note: You need to turn the Eloquent Query Caching ON for this feature to work. `ELOQUENT_QUERY_CACHE=true` in `.env`.

To run a new query and force disabling the cache on certain endpoints, you can use this parameter

```
?skipCache=true
```

It's not recommended to keep skipping cache as it has bad impact on the performance.

## Configuration {#configuration}

Most of these parameters are provided by the L5 Repository and configurable from the `Ship/Configs/repository.php` file.
Some of them are built in house, or inherited from other packages such as Fractal.

## See the Query parameters from the User Developer perspective {#see-the-query-parameters-from-the-user-developer-perspective}

1) Generate the Default API documentation

2) Visit the documentation URL

More details in the [API Docs Generator](../additional-features/apiato-containers/documentation) page.

## More Information {#more-information}

For more details on these parameters check out these links:

- [l5-repository](https://github.com/andersao/l5-repository#example-the-criteria)

- [Fractal Transformers](http://fractal.thephpleague.com/transformers/)
