---
title: ETag
---

### ETag Middleware
Apiato provides an ETag Middleware (`ProcessETagHeadersMiddleware`) that implements the Shallow technique. 
It can be used to reduce bandwidth on the client side (especially for Mobile devices).

### Enable / Disable ETag

This feature is **disabled** By default. To enable it go to `app/Ship/Configs/apiato.php` and set `use-etag` to `true`.
Of course your client should send the `If-None-Match` HTTP Header `(= etag)` in his request for this feature to work properly.
