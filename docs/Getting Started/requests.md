---
title: Requests
---

* [Form content types](#form-content-types)
* [HTTP Request Headers](#http-request-headers)

## Form content types (W3C) {#form-content-types}

By default, Apiato is configured to encode simple text/ASCII data `x-www-form-urlencoded`. However, it does support
other types as well.

### ASCII payload {#ascii-payload}

To tell the web server that you are posting simple text/ASCII payload (`name=John+Doe&age=18`), you need to include
`Content-Type : x-www-form-urlencoded` in the request header.

### JSON payload {#json-payload}

To tell the web server that you are posting JSON-formatted payload (`{name : 'John Doe', age: 18}`), you need to
include `Content-Type = application/json` in the request header.

*(you may wish return Json data in this case as well, you can do so by changing the response serializer from
`DataArraySerializer` to `JsonApiSerializer`, more about that in the [response page](./responses)).*

## HTTP Request Headers {#http-request-headers}

| Header        | Value Sample                        | When to send it                                                              |
|---------------|-------------------------------------|------------------------------------------------------------------------------|
| Accept        | `application/json`                  | MUST be sent with every endpoint.                                            |
| Content-Type  | `application/x-www-form-urlencoded` | MUST be sent when passing Data.                                              |
| Authorization | `Bearer {Access-Token-Here}`        | MUST be sent whenever the endpoint requires (Authenticated User).            |
| If-None-Match | `811b22676b6a4a0489c920073c0df914`  | MAY be sent to indicate a specific **ETag** of an prior Request to this Endpoint. If both ETags match (i.e., are the same) a HTTP 304 (not modified) is returned. |


> #### Heads Up!
>
> Normally you should include the `Accept : application/json` HTTP header when you call a JSON API. However, in Apiato
> you can force your users to send `application/json` by setting `'force-accept-header' => true,` in
> `app/Ship/Configs/apiato.php` or allow them to skip it completely by setting the `'force-accept-header' => false,`.
> By default this flag is set to false.
