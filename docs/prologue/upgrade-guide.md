---
sidebar_position: 2
title: Upgrade Guide
---

#### Upgrading Laravel to 11.0 from 10.x

Follow the official [Laravel 11 upgrade guide](https://laravel.com/docs/11.x/upgrade) to update your codebase accordingly.

#### Upgrading Apiato to 13.0 from 12.x and Core to 13.0 from 8.x

This guide will walk you through upgrading Apiato and your project to the latest versions.

## Upgrade Utilities

### Legacy Bridge

The Legacy Bridge is a set of utilities to help you gradually upgrade your codebase.

TODO: extract this doc to the legacy bridge repo and link the repo here.

#### Testing

To access removed testing methods, use the `TestCaseTrait` in your parent TestCase class:

```php
namespace App\Ship\Parents\Tests;

use Apiato\Core\Testing\TestCase as AbstractTestCase;
use App\Ship\Compatibility\Testing\TestCaseTrait; TODO change this after package is released
use Illuminate\Foundation\Testing\LazilyRefreshDatabase;

abstract class TestCase extends AbstractTestCase
{
    use LazilyRefreshDatabase;
    use TestCaseTrait {
        TestCaseTrait::afterRefreshingDatabase insteadof LazilyRefreshDatabase;
    }
}
```

#### Request

To access removed Request methods, use the `RequestTrait` in your parent Request class:

```php
namespace App\Ship\Parents\Requests;

use Apiato\Core\Requests\Request as AbstractRequest;
use App\Ship\Compatibility\RequestTrait; TODO change this after package is released

abstract class Request extends AbstractRequest
{
    use RequestTrait;
}
```

### Rector Rules

Apiato provides custom Rector rules to help automate some aspects of the upgrade process.

TODO: extract this doc to the rector rules repo and link the repo here.

#### Setup

Use [Rector](https://getrector.com) for automated refactoring. You can install custom Apiato rules via:

For more details, see the Rector documentation and any instructions in the [Apiato Rector rules repository](https://openforests.atlassian.net/wiki/spaces/EL/pages/3181445160/Upgrade+Guide#Rector-Rules).

```bash
composer require --dev mohammad-alavi/apiato-rector:dev-latest
```

Also ensure you have Rector itself:

```bash
composer require --dev rector/rector
```

#### `RefactorHttpExceptionRector`

Helps refactor exception classes to the new HTTP exception signature.

```php
->withConfiguredRule(RefactorHttpExceptionRector::class, [
    'parent_class' => \App\Ship\Parents\Exceptions\HttpException::class,
]);
```
#### `TransformMethodToResponseCreateRector`

Converts `$this->transform(...)` calls to `Response::create(...)`.

## Updating Dependencies

### PHP 8.2.0 Required

PHP 8.2.0 or greater is now required.

### Composer Dependencies

Perform these steps to update your dependencies:

1. **Remove First-Party Apiato Packages**
   Delete all Apiato first-party packages in `app/Containers/Vendor` to avoid dependency conflicts.
   These packages will be reinstalled after running `composer update`.
2. **Consolidate Dependencies**  
   If the following dependencies are defined in any Ship or Container `composer.json` file,
   move them to your application’s root `composer.json` file:
   - `apiato/core`
   - `laravel/passport`
3. **Update Dependency Versions**  
   In your root `composer.json` file, update the versions as follows:
   - `apiato/core` to `^13.0`
   - `laravel/passport` to `^12.0`
   - `spatie/laravel-permission` to `^6.0`
   - `nunomaduro/collision` to `^8.1`
   - `apiato/documentation-generator-container` to `^4.0`
   - `apiato/localization` to `x` (if installed)
   - `apiato/social-auth` to `x` (if installed)
   - `phpunit/phpunit` to `^11.0`
   - `barryvdh/laravel-ide-helper` to `^3.0`
   - `vimeo/psalm` to `^6.0`  
     Don’t forget to also update `psalm` plugins if you have them:
     ```json
     "psalm/plugin-laravel": "^3.0",
     "psalm/plugin-mockery": "^1.2",
     "psalm/plugin-phpunit": "^0.19.2",
     ```
4. **Remove Unnecessary Dependencies**  
   Remove these dependencies from your root `composer.json` file:
   - `spatie/laravel-ignition`  (Laravel now provides its own error page)
   - All Apiato-specific dependencies no longer required as they are now managed via `apiato/core`, including:
     - PHP extensions: `ext-curl`, `ext-gettext`, `ext-imagick`, `ext-mbstring`, `ext-openssl`, `ext-pdo`, `ext-sodium`, `ext-tokenizer`
     - Packages: `guzzlehttp/guzzle`, `laravel/framework`, `laravel/tinker`
5. **Review Package Upgrade Guides**  
   Check the upgrade guides for each dependency to be aware of additional breaking changes:
   - [phpunit/phpunit](https://github.com/sebastianbergmann/phpunit/blob/11.0.0/ChangeLog-11.0.md#1100---2024-02-02)
   - [spatie/laravel-permission](https://spatie.be/docs/laravel-permission/v6/upgrading)

Remove the existing `vendor` directory for a clean start:
```bash
rm -rf vendor
```
Pull in the latest dependencies:
```bash
composer update
```
Because of the merging behavior of `wikimedia/composer-merge-plugin`,
run the command a second time to ensure that all dependencies are correctly installed:
```bash
composer update
```

## Abstract Namespace

The Core abstract classes have been relocated from `Apiato\Core\Abstracts` to `Apiato\Core`.

Existing classes extending these abstract classes should be updated accordingly.

## App Configuration

Laravel 11 and Apiato 13 now use a configuration class for setup.
Replace the contents of `bootstrap/app.php` file with the following as a base, and customize it as needed:

```php
use Apiato\Foundation\Apiato;
use Apiato\Http\Middleware\ProcessETag;
use Apiato\Http\Middleware\ValidateJsonContent;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

$basePath = dirname(__DIR__);
$apiato = Apiato::configure(basePath: $basePath)->create();

return Application::configure(basePath: $basePath)
    ->withProviders($apiato->providers())
    ->withEvents($apiato->events())
    ->withRouting(
        web: $apiato->webRoutes(),
        channels: __DIR__ . '/../app/Ship/Broadcasts/channels.php',
        health: '/up',
        then: static fn () => $apiato->registerApiRoutes(),
    )
    ->withMiddleware(function (Middleware $middleware) {
        // Previously applied via app/Ship/Kernels/HttpKernel class
        $middleware->api(append: [
            ValidateJsonContent::class,
            ProcessETag::class,
        ]);

        // Uncomment and adjust these if using web routes:
        // $middleware->redirectUsersTo(fn ($request): string => action(HomePageController::class));
        // $middleware->redirectGuestsTo(fn ($request): string => action([LoginController::class, 'showForm']));
    })
    ->withCommands($apiato->commands())
    ->withExceptions(static function (Exceptions $exceptions) {})
    ->create();
```

## Service Providers

The `Apiato\Core\Abstracts\Providers\MainServiceProvider` class has been removed.

Existing service providers extending this class should be refactored
to extend `Apiato\Core\Providers\ServiceProvider` instead.
e.g, `App\Ship\Parents\Providers\ServiceProvider`

### Autoloading

All providers within the `Providers` directories of Containers and Ship are now autoloaded.
There is no longer a requirement to have a specifically named `MainServiceProvider` service provider per container.

:::note
Any parent providers under `app/Ship/Parents/Providers` will **NOT** be registered automatically.
If you need to do something in a provider’s `register` or `boot` methods,
extend those providers in a Container or Ship `Providers` directory.
:::

### Removed Properties

The `$serviceProviders` and `$aliases` properties have been removed.
Refactor your service providers to register or alias dependencies within the `register` and `boot` methods.

```php
// before
public array $serviceProviders = [
    ThirdPartyServiceProvider::class,
];

public array $aliases = [
    'something' => ThirdPartyServiceProvider::class,
];

// after
public function register(): void
{
    // Reminder: providers under Containers or Ship are autoloaded
    // and don't need to be registered manually.
    $this->app->register(ThirdPartyServiceProvider::class);
    $this->app->alias(ThirdPartyServiceProvider::class, 'something');
}
```

### Parent Method Calls

You no longer need to call `parent::register()` or `parent::boot()` in your service providers.
All service providers’ `register` and `boot` methods are now invoked independently.

### Specific Provider Changes

#### BroadcastServiceProvider
- Removed: `Apiato\Core\Abstracts\Providers\BroadcastServiceProvider`
- Action:
  Remove your custom `App\Ship\Parents\Providers\BroadcastServiceProvider` and configure channels in `bootstrap/app.php`
  as shown [above](#app-configuration).

#### AuthServiceProvider
- Removed: `Apiato\Core\Abstracts\Providers\AuthServiceProvider`
- Action: 
  - If you were manually registering policies outside Laravel’s policy discovery, follow the [Laravel manual registration guide](https://laravel.com/docs/11.x/authorization#manually-registering-policies).
  - Move any custom registrations from `AuthServiceProvider` to another service provider.
  - Remove all classes extending the old `AuthServiceProvider`.
  - Refactor any service providers extending the following service providers to extend `App\Ship\Parents\Providers\ServiceProvider`:
    - `App\Ship\Parents\Providers\AuthServiceProvider`
    - `Apiato\Core\Providers\AuthServiceProvider`
    - `Illuminate\Foundation\Support\Providers\AuthServiceProvider`

#### MiddlewareServiceProvider
- Removed: `Apiato\Core\Abstracts\Providers\MiddlewareServiceProvider`
- Action:
  Migrate any middleware configurations
  to `bootstrap/app.php` file as per [Laravel’s middleware registration documentation](https://laravel.com/docs/11.x/middleware#registering-middleware).
  Then, remove your old `MiddlewareServiceProvider` classes.

## Middleware

The following classes have been moved or renamed:
| From | To |
|:-----------------------------------------------------------------------|:---------------------------------------------|
| `Apiato\Core\Abstracts\Middlewares`                                    | `Apiato\Core\Middleware`                     |
| `Apiato\Core\Abstracts\Middlewares\Http\ProcessETagHeadersMiddleware`  | `Apiato\Http\Middleware\ProcessETag`         |
| `Apiato\Core\Abstracts\Middlewares\Http\ValidateJsonContent`           | `Apiato\Http\Middleware\ValidateJsonContent` |

The `Apiato\Core\Abstracts\Middlewares\Http\ProfilerMiddleware` class has been removed.

The `Apiato\Core\Middleware\Http\Authenticate` class has been removed.
Use `Illuminate\Auth\Middleware\Authenticate` instead.

## Laravel Passport

### Migration Adjustments
Passport 12.0 no longer loads its own migrations automatically.

Copy Passport migrations from the [Apiato 13.x branch](https://github.com/apiato/apiato/tree/13.x/app/Containers/AppSection/Authentication/Data/Migrations) into your application
(create the `Data/Migrations` directory if it doesn’t exist).

### Password Grant

As of Passport 12.0, the password grant is disabled by default.

Enable it by calling `enablePasswordGrant` in the `boot` method of one of your service providers:

```php
public function boot(): void
{
    Passport::enablePasswordGrant();
}
```

## Carbon 3

In Carbon v3, PHPDoc annotations have been converted to real types. Methods that previously accepted different argument types may now throw a `TypeError`.

For instance, this example will now throw an error if `config('apiato.api.expires-in')` returns a string:

```php
Passport::tokensExpireIn(Carbon::now()->addMinutes(config('apiato.api.expires-in')));
```

To fix it, explicitly cast the string to an integer:

```php
Passport::tokensExpireIn(Carbon::now()->addMinutes((int)config('apiato.api.expires-in')));
```

:::info
Review Carbon’s [release notes](https://github.com/briannesbitt/Carbon/releases/tag/3.0.0) and [documentation](https://carbon.nesbot.com/docs/#api-carbon-3) for more details.
:::

## ModelTrait

The `Apiato\Core\Traits\ModelTrait` trait has been renamed
and moved to `Apiato\Core\Models\InteractsWithApiato`.

## ResourceKey

#### `HasResourceKey` Interface {#hasResourceKeyInterface}

The `Apiato\Core\Contracts\HasResourceKey` interface has been renamed
and moved to `Apiato\Http\Resources\ResourceKeyAware`.

#### `HasResourceKey` Trait {#hasResourceKeyTrait}

The `Apiato\Core\Traits\HasResourceKeyTrait` trait has been renamed
and moved to `Apiato\Http\Resources\HasResourceKey`.

## Value Objects

`Apiato\Core\Values\Value` abstract class is now declared as `readonly`.

Add the `readonly` keyword to your parent Value Object class and all Value Objects that extend it.

[HasResourceKeyTrait](#hasResourceKeyTrait) has been removed from the Core Value Object (`Apiato\Core\Values\Value`).

If your Value Objects are relying on the `HasResourceKeyTrait`,
you need to refactor them to use the new [HasResourceKey](#hasResourceKeyTrait) trait
and implement the [ResourceKeyAware](#hasResourceKeyInterface) interface.

## Testing

The testing utilities provided by Apiato have been simplified to embrace Laravel’s testing approach.

The following methods are no longer available:
- `makeCall`
- `injectId`
- `endpoint`
- ...and others TODO add other methods

:::tip
For a gradual upgrade in large codebases, refer to the [Apiato Legacy Bridge](#upgrade-utilities).
:::

#### `TestCase` Class

The `Apiato\Core\Abstracts\Tests\PhpUnit\TestCase` class namespace has changed to `Apiato\Core\Testing\TestCase`.

#### `LazilyRefreshDatabase` Trait

The `LazilyRefreshDatabase` trait has been removed from the Core parent TestCase.

Add `LazilyRefreshDatabase` to your `App\Ship\Parents\Tests\TestCase` if you require this functionality.

## Request

:::tip
For a gradual upgrade in large codebases, refer to the [Apiato Legacy Bridge](#upgrade-utilities).
:::

### Authorization

All custom authorization properties and methods have been removed:
- `$access`
- `hasAccess`
- `hasAnyPermissionAccess`
- `hasAnyRoleAccess`
- `check`

Use [Laravel Policies](https://laravel.com/docs/11.x/authorization#creating-policies) for authorization.

Remove the `$access` property from your request classes.

**Example Conversion:**
```php
// before
use App\Ship\Parents\Requests\Request as ParentRequest;

final class DeleteUserRequest extends ParentRequest
{
    protected array $access = [
        'permissions' => 'delete',
        'roles' => '',
    ];

    public function authorize(): bool
    {
        return $this->check(['hasAccess']);
    }
}

// after
use App\Containers\AppSection\User\Models\User;
use App\Ship\Parents\Requests\Request as ParentRequest;

final class DeleteUserRequest extends ParentRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('delete', [User::class]);
    }
}
```

### URL Parameter Validation

The `$urlParameters` property and the `getUrlParametersArray` method have been removed.
URL parameters are no longer available for validation in the `rules` method.

- Remove validations based on URL parameters.
- Remove any reference to the `$urlParameters` property.
- Remove calls to `getUrlParametersArray`.

:::note
Note that invalid URL parameters now result in a 404 error rather than a 422 error.
:::

### Hashed ID Decoding

The `$decode` property now also decodes URL parameters automatically.

```php
// before
protected array $decode = ['id'];
protected array $urlParameters = ['id'];

// after
protected array $decode = ['id'];
// $urlParameters is no longer needed and
// $request->id will return the decoded value.
```

TODO: are decoded values still available in the all() method? Or they have to be pulled from the route?
You can still retrieve decoded URL parameters via `$request->id`, `$request->input('id')`, or `$request->route('id')`.

### Removed Methods
TODO: check that we haven't missed any methods.

The following methods have been removed from requests:
- `injectData`
- `withUrlParameters`
- `mapInput`
- `getInputByKey`

### Sanitization Method

`sanitizeInput` has been renamed to `sanitize`.

## Error Handling
All Apiato custom error-handling logics has been removed.

### Removed Methods on Exceptions
- `debug`
- `withErrors`
- `getErrors`

### ExceptionsHandler

The custom `App\Ship\Exceptions\Handlers\ExceptionsHandler` is no longer used.

Remove this class and configure exception handling in `bootstrap/app.php` file.

### HTTP vs. Non-HTTP Exceptions
Exceptions are now divided into two groups: **HTTP Exceptions** and **Non-HTTP Exceptions**.

Create a parent HTTP exception class in `app/Ship/Parents/Exceptions/HttpException.php`:

```php
namespace App\Ship\Parents\Exceptions;

use Apiato\Core\Exceptions\HttpException as AbstractException;

abstract class HttpException extends AbstractException {}
```
   
You now have two parent classes: `Exception` (non-HTTP) and `HttpException` (HTTP).

Update your custom exceptions:
- Extend `App\Ship\Parents\Exceptions\HttpException` for HTTP errors.
- Extend `App\Ship\Parents\Exceptions\Exception` for non-HTTP errors.

### Exception Instantiation

Exceptions now require mandatory constructor parameters.
For example, calling `new NotFoundHttpException()` with no arguments no longer works.
You have to pass the `$message` and the `$code` arguments.

Refactor your exception instantiations accordingly.

:::tip Automate this process using Rector
See [Upgrade Utilities](#upgrade-utilities) for automated refactoring utilities.
:::

### Removed Core Exceptions
All exceptions under the `Apiato\Core\Exceptions` namespace have been removed.

Remove their usages from your application.
- `Apiato\Core\Exceptions\AuthenticationException`
- `Apiato\Core\Exceptions\GeneratorErrorException`
- `Apiato\Core\Exceptions\IncorrectIdException`
- `Apiato\Core\Exceptions\InvalidTransformerException`
- `Apiato\Core\Exceptions\MissingJSONHeaderException`
- `Apiato\Core\Exceptions\MissingTestEndpointException`
- `Apiato\Core\Exceptions\UndefinedMethodException`
- `Apiato\Core\Exceptions\UnsupportedFractalIncludeException`
- `Apiato\Core\Exceptions\WrongConfigurationsException`
- `Apiato\Core\Exceptions\WrongEndpointFormatException`

:::note
Apiato now returns `401` instead of `403` when a user is unauthenticated (matching Laravel’s default behavior).
:::

## Response

### Transformation

The `$this->transform` method in API Controllers is removed. Use the `Apiato\Support\Facades\Response` facade instead.

TODO: write the docs and link it here
Its API closely mirrors the old `$this->transform` methods. Refer to the new `Response` facade documentation for details.

- Replace all `$this->transform` calls with the Response facade.
- Update your `app/Ship/Configs/fractal.php` file to use the Apiato Response class
  ```php
  'fractal_class' => \Apiato\Http\Response::class
  ```

**Example**:
```php
// before
return $this->transform($data, Transformer::class);

// after
use Apiato\Support\Facades\Response;

return Response::create($data, Transformer::class);
```

:::tip Automate this process using Rector
See [Upgrade Utilities](#upgrade-utilities) for automated refactoring utilities.
:::

### Filtering

TODO: write the docs and link it here
The approach for filtering responses has changed. Refer to the new documentation on filtering responses, then update your code accordingly.

## Repository

Some repository methods are strongly typed or behave differently.

#### `boot` Method

`boot` now has a `void` return type.

If you have overridden the `boot` method, adjust your method signature accordingly.

#### `getById` Method

`getById` has been renamed to `findOrFail`.

#### `delete` Method

`delete` method now returns `bool` or throws an exception.

If you have overridden the `delete` method, adjust your method signature accordingly.

#### `create` Method

`create` now throws `Apiato\Core\Repositories\Exceptions\ResourceCreationFailed` instead of `\Exception`.

#### `update` Method

`update` now throws `Apiato\Core\Repositories\Exceptions\ResourceNotFound` instead of `\Illuminate\Database\Eloquent\ModelNotFoundException`.

#### `find` Method

`find` now returns `null` if no result is found (mirroring Laravel’s default `find` behavior). Previously, it might have thrown an exception.

:::info Maintaining Previous Behavior
To maintain the previous behavior of the `find`, `create`, and `update` methods,
use the [Legacy Bridge](#upgrade-utilities).
:::

### Criteria

The `Apiato\Core\Abstracts\Criteria` class has been moved to `Apiato\Core\Criteria`.

## Hash IDs

`Apiato\Core\Traits\HashIdTrait` is removed. Use the `hashids()` helper function instead.

- `$this->decode(...)` → `hashids()->decode(...)`
- `$this->encode(...)` → `hashids()->encode(...)`
- `Hashids::decode(...)` → `hashids()->decode(...)`
- `Hashids::encode(...)` → `hashids()->encode(...)`

:::warning
`decode` now can return an `int` or an `array` depending on the input. Previously, it always returned an array.
:::

## Jobs

The Core Job class (Apiato\Core\Jobs\Job) no longer includes any traits or implements interfaces.

Add the necessary traits and interfaces in your Ship’s parent Job class. For example:

```php
namespace App\Ship\Parents\Jobs;

use Apiato\Core\Jobs\Job as AbstractJob;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

abstract class Job extends AbstractJob implements ShouldQueue
{
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;
}
```

## Validation

The custom `no_spaces` validation rule has been removed.

Remove its usage or register it manually in the boot method of your service provider.

See the [source code](https://github.com/apiato/core/blob/8.x/src/Traits/ValidationTrait.php) for reference.

## Database Seeding

Apiato no longer uses Laravel’s `database/seeders/DatabaseSeeder.php`. Instead, place your seeders in the Ship or any Container’s `database/seeders` directory:

- Remove `database/seeders/DatabaseSeeder.php` if present.
- Move your seeding logic into `Ship` or `Container` seeder classes.

## Commands

The `Apiato\Core\Abstracts\Commands\ConsoleCommand` class has been renamed
and moved to `Apiato\Core\Console\Command`.

## Miscellaneous

We recommend
reviewing changes in [apiato/apiato](https://github.com/apiato/apiato) and [apiato/core](https://github.com/apiato/core) repositories between versions 12.x and 13.x and 8.x and 13.x respectively,
using GitHub’s comparison tools.
Not all changes are mandatory.
Some involve configuration or comments you may wish to sync:

- [Comparison for apiato/apiato](https://github.com/apiato/apiato/compare/12.x...13.x)
- [Comparison for apiato/core](https://github.com/apiato/core/compare/8.x...13.x)

## Optional

### Namespaces

Consider renaming these directories for consistency with the new Apiato structure:

- `app/Ship/Middlewares` → `app/Ship/Middleware`
- `app/Ship/Parents/Middlewares` → `app/Ship/Parents/Middleware`

### Testing

- Use Laravel’s `fake()` helper for generating fake data instead of `$this->faker`.
- Remove old Apiato-specific code from `App\Ship\Parents\Tests\TestCase`. Keep any custom logic you still need.

**Example**:
```php
// Remove all code that's no longer necessary for Apiato testing
// e.g., makeCall, transform method usage, setUp methods from older versions, etc.
```

### Added Items

- Copy the new `ValidateAppId` middleware from [Apiato 13.x](https://github.com/apiato/apiato/blob/13.x/app/Ship/Middleware/ValidateAppId.php) into `app/Ship/Middleware` if you need this feature.
