---
sidebar_position: 2
title: Best Practices
---

REST APIs are one of the most common kinds of web interfaces available today.
They allow various clients, including browser apps, to communicate with services via the REST API.
Therefore, it’s very important to design REST APIs properly so that we won’t run into problems down the road.
We have to take into account security, performance, and ease of use for API consumers.

Otherwise, we create problems for clients that use our APIs,
which isn’t pleasant and detracts people from using our API.
If we don’t follow commonly accepted conventions,
then we confuse the maintainers of the API and the clients
that use them since it is different from what everyone expects.

In this article, we'll look at how to design REST APIs to be easy to understand for anyone consuming them, future-proof,
and secure and fast since they serve data to clients that may be confidential.

## What Is A RESTful API? {#what-is-a-restful-api}

A REST API is an application programming interface architecture style
that conforms to specific architectural constraints,
like stateless communication and cacheable data.
It is not a protocol or standard.
While REST APIs can be accessed through a number of communication protocols, most commonly, they are called over HTTPS,
so the guidelines below apply to REST API endpoints that will be called over the internet.

## Accept And Respond With JSON {#accept-and-respond-with-json}

Even though [some people think REST should only return hypertext](https://htmx.org/essays/how-did-rest-come-to-mean-the-opposite-of-rest/)
(including [Roy Fielding](https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven) who created the term),
REST APIs should accept JSON for request payload and also send responses to JSON.
JSON is the standard for transferring data.
Almost every networked technology can use it:
JavaScript has built-in methods to encode and decode JSON either through the Fetch API or another HTTP client.
Server-side technologies have libraries that can decode JSON without doing much work.

## HTTP Methods Usage In RESTful API's {#http-methods-usage-in-restful-apis}

The action should be indicated by the HTTP request method that we are making.

- GET: retrieve a resource.
- POST: create a new resource.
- PUT: update a resource (providing the entire resource).
- PATCH: update a resource (providing only changed attributes).
- DELETE: remove a resource.

The verbs map to [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations.

## General Principles For HTTP Methods {#general-principles-for-http-methods}

- Don't ever use GET to alter state; to prevent Googlebot from corrupting your data. And use GET as much as possible.
- Don't use PUT unless you are updating an entire resource. And unless you can also legitimately do a GET on the same URI.
- Don't use POST to retrieve information that is long-lived or that might be reasonable to cache.
- Don't perform an operation that is not idempotent with PUT.
- Use GET for things like calculations, unless your input is large, in which case use POST.
- Use POST in preference to PUT when in doubt.
- Use POST whenever you have to do something that feels RPC-like.
- Use PUT for classes of resources that are larger or hierarchical.
- Use DELETE in preference to POST to remove resources.

## General Guidelines And Principles For RESTful URLs {#general-guidelines-and-principles-for-restful-urls}

- A URL identifies a resource.
- URLs should include nouns, not verbs.
- Use plural nouns only for consistency (no singular nouns).
- Use HTTP verbs (GET, POST, PUT, PATCH, DELETE) to operate on the collections and elements.
- You should not need to go deeper than resource/identifier/resource.
- Put the version number at the base of your URL, for example `http://api.apiato.test/v1/path/to/resource`.
- If input data changes the logic of the endpoint, it should be passed in the URL. If not, it can go in the header. e.g., Auth Token.
- Don't use query parameters to alter state.
- Don't use mixed-case paths if you can help it; lowercase is best.
- Use hyphens to delimit words in the URIs.
- Don't use implementation-specific extensions in your URIs (.php, .py, .pl, etc.)
- Limit your URI space as much as possible. And keep path segments short.
- Don't put metadata in the body of a response that should be in a header

## Use Logical Nesting On Endpoints {#use-logical-nesting-on-endpoints}

When designing endpoints, it makes sense to group those that contain associated information.
That is, if one object can contain another object, you should design the endpoint to reflect that.
This is good practice regardless of whether your data is structured like this in your database.
In fact,
it may be advisable to avoid
mirroring your database structure in your endpoints to avoid giving attackers unnecessary information.

For example, if we want an endpoint to get the comments for a news article,
we should append the `/comments` path to the end of the `/articles` path.

## Good URL Examples {#good-url-examples}

With the two principles we discussed above in mind, let’s look at some examples of good URLs.

- Get all Articles:
	- `/articles`
- Find a single Article by its unique identifier (ID):
	- `/articles/:articleId`
- Find/Search Articles by one or more fields:
	- `/articles?search=author:john`
	- `/articles?search=author:john;color:white`
- Order and Sort query result:
	- `/articles?orderBy=created_at&sortedBy=desc`
	- `/articles?search=author:john&orderBy=created_at&sortedBy=desc`
- Specify optional fields:
	- `/articles?filter=id;title;status`
	- `/articles/:articleId?filter=id;title;status`
- Get all Comments belonging to an Article:
	- `/articles/:articleId/comments`
- Include objects relationship (Comments/author) with the Article response:
	- `/articles/:articleId?include=comments`
	- `/articles/:articleId?include=comments,author`
- Create new Article:
	- `/articles`
- Add new Comment to an Article:
	- `/articles/:articleId/comments`

In the code above, we use the GET method on the path `/articles/:articleId/comments`.
We get `comments` on the article identified by `articleId` and then return it in the response.
We add `comments` after the `/articles/:articleId` path segment to indicate that it’s a child resource of /articles.

This makes sense since `comments` are the children objects of the `articles`,
assuming each article has its own comments.
Otherwise, it’s confusing to the user since this structure is generally accepted to be for accessing child objects.
The same principle also applies to the PUT, PATCH and DELETE endpoints.
They can all use the same kind of nesting structure for the path names.

## Handle Errors Gracefully And Return Standard Error Codes {#handle-errors-gracefully-and-return-standard-error-codes}

To eliminate confusion for API users when an error occurs,
we should handle errors gracefully and return HTTP response codes that indicate what kind of error occurred.
This gives maintainers of the API enough information to understand the problem that’s occurred.
We don’t want errors to bring down our system, so we can leave them unhandled,
which means that the API consumer has to handle them.

Common error HTTP status codes include:
- 200 OK Server successfully returned the requested data.
- 201 CREATED Server successfully created or modified the requested resource.
- 204 NO CONTENT Server successfully deleted the requested resource.
- 400 INVALID REQUEST The request was invalid or cannot be served. The exact error should be explained in the error payload. e.g., "The JSON is not valid."
- 401 UNAUTHORIZED The request requires an user authentication.
- 403 FORBIDDEN The server understood the request, but is refusing it or the access is not allowed.
- 404 NOT FOUND There is no resource behind the URI.
- 422 Unprocessable Entity Should be used if the server cannot process the entity, e.g., if an image cannot be formatted or mandatory fields are missing in the payload.
- 500 INTERNAL SERVER ERROR Internal Server Error.
- 502 BAD GATEWAY Server received an invalid response from the upstream server while trying to fulfill the request.
- 503 SERVICE UNAVAILABLE Service unavailable.

## Naming Conventions For [Routes](../components/main-components/routes.mdx) and [Actions](../components/main-components/actions.md) {#naming-conventions-for-routes-and-actions}

- **ListResources**: to fetch all resources.
- **FindResourceByID**: to search for a single resource by its unique identifier.
- **CreateResource**: to create a new resource.
- **UpdateResource**: to update/edit existing resource.
- **DeleteResource**: to delete a resource.
