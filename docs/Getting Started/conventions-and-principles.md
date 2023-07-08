---
title: Conventions
---

* [HTTP Methods usage in RESTful API's](#http-methods-usage-in-restful-apis)
* [Naming Conventions for Routes & Actions](#naming-conventions-for-routes-and-actions)
* [General guidelines and principles for RESTful URLs](#general-guidelines-and-principles-for-restful-urls)
* [Good URL examples](#good-url-examples)
* [General principles for HTTP methods](#general-principles-for-http-methods)

### HTTP Methods usage in RESTful API's {#http-methods-usage-in-restful-apis}
- GET (SELECT): retrieve a specific resource from the server, or a listing of resources.
- POST (CREATE): create a new resource on the server.
- PUT (UPDATE): update a resource on the server, providing the entire resource.
- PATCH (UPDATE): update a resource on the server, providing only changed attributes.
- DELETE (DELETE): remove a resource from the server.

### Naming Conventions for Routes & Actions {#naming-conventions-for-routes-and-actions}

- **GetAllResource**: to fetch all resources.
- **FindResourceByID**: to search for single resource by its unique identifier.
- **CreateResource**: to create a new resource.
- **UpdateResource**: to update/edit existing resource.
- **DeleteResource**: to delete a resource.

### General guidelines and principles for RESTful URLs {#general-guidelines-and-principles-for-restful-urls}

- A URL identifies a resource.
- URLs should include nouns, not verbs.
- Use plural nouns only for consistency (no singular nouns).
- Use HTTP verbs (GET, POST, PUT, DELETE) to operate on the collections and elements.
- You should not need to go deeper than resource/identifier/resource.
- Put the version number at the base of your URL, for example `http://apiato.test/v1/path/to/resource`.
- If an input data changes the logic of the endpoint, it should be passed in the URL. If not can go in the header "like Auth Token".
- Don't use query parameters to alter state.
- Don't use mixed-case paths if you can help it; lowercase is best.
- Don't use implementation-specific extensions in your URIs (.php, .py, .pl, etc.)
- Limit your URI space as much as possible. And keep path segments short.
- Don't put metadata in the body of a response that should be in a header

### Good URL examples {#good-url-examples}

- Find a single Car by its unique identifier (ID):
	- `GET http://www.api.apiato.test/v1/cars/123`
- Get all Cars:
	- `GET http://www.api.apiato.test/v1/cars`
- Find/Search cars by one or more fields:
	- `GET http://www.api.apiato.test/v1/cars?search=maker:mercedes`
	- `GET http://www.api.apiato.test/v1/cars?search=maker:mercedes;color:white`
- Order and Sort query result:
	- `GET http://www.api.apiato.test/v1/cars?orderBy=created_at&sortedBy=desc`
	- `GET http://www.api.apiato.test/v1/cars?search=maker:mercedes&orderBy=created_at&sortedBy=desc`
- Specify optional fields:
	- `GET http://www.api.apiato.test/v1/cars?filter=id;name;status`
	- `GET http://www.api.apiato.test/v1/cars/123?filter=id;name;status`
- Get all Drivers belonging to a Car:
	- `GET http://www.api.apiato.test/v1/cars/123/drivers`
	- `GET http://www.api.apiato.test/v1/cars/123/drivers/123/addresses`
- Include Drivers objects relationship with the car response:
	- `GET http://www.api.apiato.test/v1/cars/123?include=drivers`
	- `GET http://www.api.apiato.test/v1/cars/123?include=drivers,owner`
- Add new Car:
	- `POST http://www.api.apiato.test/v1/cars`
- Add new Driver to a Car:
	- `POST http://www.api.apiato.test/v1/cars/123/drivers`

### General principles for HTTP methods {#general-principles-for-http-methods}

- Don't ever use GET to alter state; to prevent Googlebot from corrupting your data. And use GET as much as possible.
- Don't use PUT unless you are updating an entire resource. And unless you can also legitimately do a GET on the same URI.
- Don't use POST to retrieve information that is long-lived or that might be reasonable to cache.
- Don't perform an operation that is not idempotent with PUT.
- Use GET for things like calculations, unless your input is large, in which case use POST.
- Use POST in preference to PUT when in doubt.
- Use POST whenever you have to do something that feels RPC-like.
- Use PUT for classes of resources that are larger or hierarchical.
- Use DELETE in preference to POST to remove resources.
