---
title: FAQ
---

* [How to change API URL?](#how-to-change-the-default-api-url)
* [Where do I define my Composer dependencies?](#where-do-i-define-my-composer-dependencies)

### How to change the default API URL (Subdomain and Prefix)? {#how-to-change-the-default-api-url}

By default, Apiato uses `api.` as subdomain for all endpoints and adds only the `v1` API version as prefix.

To change this from `api.apiato.test` to `apiato.test/api/`, do the following:

1. Edit `.env`, change your api domain to `API_URL=http://apiato.test` instead of `API_URL=http://api.apiato.test` to
remove the subdomain.
2. Edit `app/Ship/Configs/apiato.php`, set prefix to `'prefix' => 'api/',`.
3. Set `enable_version_prefix` to `false` in `app/Ship/Configs/apiato.php`.

### Where do I define my Composer dependencies? {#where-do-i-define-my-composer-dependencies}

All the Composer dependencies should be defined in their Containers, in a `composer.json` file.

*The Ship layer dependencies live on the root of the Ship layer in a `composer.json` file.
Finally, the Framework core dependencies live on the project root `composer.json` file*.

Basically using any of the `composer.json` will do the same job. It's up to you to pick the most relevant location.

