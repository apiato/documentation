---
sidebar_position: 1
title: Release Notes
---

## Versioning Scheme

Apiato and its other first-party packages follow [Semantic Versioning](https://semver.org/).
Major framework releases are released every year (~Q1),
while minor and patch releases may be released as often as every week.
Minor and patch releases should never contain breaking changes.

When referencing the Apiato framework or its components from your application or package,
you should always use a version constraint such as `^12.0`,
since major releases of Apiato do include breaking changes.
However, we strive to always ensure you may update to a new major release in one day or less.

## Support Policy {#support-policy}

For all Apiato releases, bug fixes are provided for 18 months and security fixes are provided for 2 years.

| Version | PHP (*)   | Release          | Bug Fixes Until    | Security Fixes Until |
|---------|-----------|------------------|--------------------|----------------------|
| 10      | 7.3 - 8.1 | April 25th, 2021 | October 25th, 2022 | April 25th, 2023     |
| 11      | 8.0 - 8.2 | April 27th, 2022 | October 27th, 2023 | April 27th, 2024     |
| 12      | 8.1 - 8.2 | June 4th, 2023   | December 4th, 2024 | June 4th, 2025       |
| 13      | 8.2       | Q1 2024          | August 5th, 2025   | February 3rd, 2026   |

(*) Supported PHP versions

## Apiato 12

**Full Changelog**: https://github.com/apiato/apiato/compare/v11.3.2...v12.0.0

#### PHP 8.1
Apiato 12.x requires a minimum PHP version of 8.1.

### Breaking Changes

* Upgraded to Laravel v10 (All Laravel files (e.g. configs, .env, etc...) are now synced with the latest Laravel changes)
* Updated Composer dependencies to their latest version
* Laravel Passport route registration & customization has changed. Passport routes are now reside in a dedicated [route file](https://github.com/apiato/apiato/blob/3d368c0ead610bfd9d5566ad7652419346732e53/app/Containers/AppSection/Authentication/UI/API/Routes/Passport.v1.private.php) (Instead of registering them in the provider).
* Middleware `$routeMiddleware` field is renamed to `$middlewareAliases`
* Trimmed down the TestCase by removing some useless traits including:
```
TestsMockHelperTrait
TestsResponseHelperTrait
```
* `encode()` method return value has changed -> In case of unencodable value (e.g. `null`), now returns `null` instead of `''`
* `decode()` method return value has changed -> In case of undecodable value (e.g. `null`), now returns `null` instead of `[]`
* [StateKeeperTrait](https://github.com/apiato/core/blob/cbf2acacf42ee442db5a301773c26944a049bfc1/Traits/StateKeeperTrait.php) is removed from `Request`

### None Breaking Changes

* Everything is refactored to use `constructor` injection instead of directly using the Service Container like so `app(CreateUserByCredentialsTask::class)->run()`
* Added more tests and refactored the rest
* Switched to `invokable` controllers
```php
\\ from
Route::get('profile', [GetAuthenticatedUserController::class, 'getAuthenticatedUser']);
\\ to
Route::get('profile', GetAuthenticatedUserController::class);
```
* All rotues are moved into the private documentation. e.g.
  `RefreshProxyForWebClient.v1.public.php` -> `RefreshProxyForWebClient.v1.private.php`
* Added some getter methods to the [Request](https://github.com/apiato/core/blob/789606b41f1024c2da506bb6765d2fbfa85897cd/Abstracts/Requests/Request.php) including:
```
withUrlParameters()
getAccessArray()
getDecodeArray()
getUrlParametersArray()
```
* Added a `TestAssertionHelperTrait` to the TestCase which provides some usefull assertions

### Bug Fixes
* `withMeta()` method on [ResponseTrait](https://github.com/apiato/core/blob/789606b41f1024c2da506bb6765d2fbfa85897cd/Traits/ResponseTrait.php) now correctly includes added meta data
* Calling invokable controllers from routes [#174](https://github.com/apiato/core/issues/174)
* Exception when try to generate an WEB CRUD Controller from generator [#171](https://github.com/apiato/core/issues/171)
* PHP 8.1 warning on passing null to explode [#176](https://github.com/apiato/core/issues/176)
