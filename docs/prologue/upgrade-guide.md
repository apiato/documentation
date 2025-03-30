---
sidebar_position: 2
title: Upgrade Guide
---

#### Upgrading Laravel to 11.0 from 10.x

Follow the official [Laravel 11 upgrade guide](https://laravel.com/docs/11.x/upgrade) to update your codebase accordingly.

#### Upgrading Apiato to 13.0 from 12.x and Core to 13.0 from 8.x

This guide will walk you through upgrading Apiato and your project to the latest versions.

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

## Namespaces & Class Renames

Several Core namespaces and class names have changed:

The Core abstract classes have been relocated from `Apiato\Core\Abstracts` to `Apiato\Core`.

Old: `Apiato\Core\Abstracts`  
New: `Apiato\Core`

In addition, update the following class name or namespace changes:  

| From                                                                   | To                                           |
|:-----------------------------------------------------------------------|:---------------------------------------------|
| `Apiato\Core\Abstracts\Commands\ConsoleCommand`                        | `Apiato\Core\Console\Command`                |
| `Apiato\Core\Abstracts\Criterias`                                      | `Apiato\Core\Criteria`                       |
| `Apiato\Core\Abstracts\Middlewares`                                    | `Apiato\Core\Middleware`                     |
| `Apiato\Core\Abstracts\Middlewares\Http\ProcessETagHeadersMiddleware`  | `Apiato\Http\Middleware\ProcessETag`         |
| `Apiato\Core\Abstracts\Middlewares\Http\ValidateJsonContent`           | `Apiato\Http\Middleware\ValidateJsonContent` |
| `Apiato\Core\Abstracts\Providers\MainServiceProvider`                  | `Apiato\Core\Providers\ServiceProvider`      |
| `Apiato\Core\Abstracts\Tests\PhpUnit\TestCase`                         | `Apiato\Core\Testing\TestCase`               |

### Model Changes


- `Apiato\Core\Contracts\HasResourceKey` → `Apiato\Http\Resources\ResourceKeyAware`
- `Apiato\Core\Traits\ModelTrait` → `Apiato\Core\Models\InteractsWithApiato`

  **Example**:
  ```php
  // before
  use Apiato\Core\Contracts\HasResourceKey;
  use Apiato\Core\Traits\ModelTrait;
  
  class MyModel extends NotApiatoModel implements HasResourceKey {
      use ModelTrait;
  }

  // after
  use Apiato\Core\Models\InteractsWithApiato;
  use Apiato\Http\Resources\ResourceKeyAware;
  
  class MyModel extends NotApiatoModel implements ResourceKeyAware {
      use InteractsWithApiato;
  }
  ```

- `Apiato\Core\Traits\HasResourceKeyTrait` → `Apiato\Http\Resources\HasResourceKey`

  **Example**:
  ```php
  // before
  use Apiato\Core\Contracts\HasResourceKey;
  use Apiato\Core\Traits\HasResourceKeyTrait;
  
  class MyModel implements HasResourceKey {
      use HasResourceKeyTrait;
  }

  // after
  use Apiato\Http\Resources\HasResourceKey;
  use Apiato\Http\Resources\ResourceKeyAware;

  class MyModel implements ResourceKeyAware {
      use HasResourceKey;
  }
  ```

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

## Laravel Passport

### Migration Adjustments
Passport 12.0 no longer loads its own migrations automatically.

Copy Passport migrations from the [Apiato 13.x branch](https://github.com/apiato/apiato/tree/13.x/app/Containers/AppSection/Authentication/Data/Migrations) into your application
(create the `Data/Migrations` directory if it doesn’t exist).

### Enabling the Password Grant Type

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

Review Carbon’s [release notes](https://github.com/briannesbitt/Carbon/releases/tag/3.0.0) and [documentation](https://carbon.nesbot.com/docs/#api-carbon-3) for more details.

---

## Value Objects

### Removed Trait

`Apiato\Core\Traits\HasResourceKeyTrait` has been removed from the Core Value Object (`Apiato\Core\Values\Value`).

- If you relied on the `getResourceKey` method, add that trait and the `Apiato\Http\Resources\ResourceKeyAware` interface to your **Ship Parent VO** class:

  ```php
  use Apiato\Core\Values\Value as AbstractValue;
  use Apiato\Http\Resources\HasResourceKey;
  use Apiato\Http\Resources\ResourceKeyAware;
  
  abstract class Value extends AbstractValue implements ResourceKeyAware
  {
      use HasResourceKey;
  }
  ```

### Readonly

Value Objects are now `readonly`.

Add the `readonly` keyword to your parent Value object in `App\Ship\Parents\Values`:

```php
use Apiato\Core\Values\Value as AbstractValue;

// Before
abstract class Value extends AbstractValue {}

// After
abstract readonly class Value extends AbstractValue {}
```

Refactor all Value Objects that extend the parent Value object to also include `readonly`.

---

## Testing

Apiato has simplified its testing approach so you can test using “the Laravel way.” Many custom Apiato test methods have been removed:

- `makeCall`
- `injectId`
- `endpoint`
- ...and others

If you have a large codebase and need a gradual upgrade, use the [Apiato Legacy Bridge](#upgrade-utilities). It includes tools to restore old functionality temporarily.

### `LazilyRefreshDatabase`

The `LazilyRefreshDatabase` trait is no longer forced in the Core parent TestCase. If you want to use it, explicitly add it to `App\Ship\Parents\Tests\TestCase`.

---

## Request

If your codebase is large and you need to upgrade gradually, the [Apiato Legacy Bridge](#upgrade-utilities) can help.

### Authorization

All custom authorization properties and methods have been removed:

- `$access`
- `hasAccess`
- `hasAnyPermissionAccess`
- `hasAnyRoleAccess`
- `check`

If `$access` was on your Request class, it has no effect now. Refactor your requests to use [Laravel Policies](https://laravel.com/docs/11.x/authorization#creating-policies):

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

`$urlParameters` and its getter (`getUrlParametersArray`) are removed. **Url parameters no longer appear in `rules()`.**

- Remove any URL parameter validation you perform in `rules()`.
- Remove the `$urlParameters` property.
- Remove calls to `getUrlParametersArray`.

When a user provides a bad URL parameter, they’ll now receive a `404 Not Found` instead of a `422 Unprocessable Entity`.

### Hashed ID Decoding

The `$decode` property still decodes URL parameters automatically, **even though** `$urlParameters` is gone:

```php
// before
protected array $decode = [
    'id',
];

// was required
protected array $urlParameters = [
    'id',
];

// after
protected array $decode = [
    'id',
];

// $urlParameters is no longer needed
```

You can still retrieve decoded URL parameters via `$request->id`, `$request->input('id')`, or `$request->route('id')`.

### Removed Methods

- `injectData`
- `withUrlParameters`
- `mapInput`
- `getInputByKey`

### `sanitizeInput` Method

`sanitizeInput` has been **renamed** to `sanitize`.

---

## Error Handling

Most Apiato custom error-handling logic has been removed.

### Removed Methods on Exceptions

- `debug`
- `withErrors`
- `getErrors`

These methods were previously part of the [Core Exception](https://github.com/apiato/core/blob/8.x/src/Abstracts/Exceptions/Exception.php). They are no longer available.

### `ExceptionsHandler`

`App\Ship\Exceptions\Handlers\ExceptionsHandler` is no longer used. Remove it and configure your exception handling in `bootstrap/app.php`.

### HTTP vs. Non-HTTP Exceptions

Exceptions are now split into two categories: HTTP and non-HTTP.

1. Create a `HttpException` class in `app/Ship/Parents/Exceptions`:
   ```php
   namespace App\Ship\Parents\Exceptions;

   use Apiato\Core\Exceptions\HttpException as AbstractException;

   abstract class HttpException extends AbstractException
   {
   }
   ```
   You now have two parent classes: `Exception` (non-HTTP) and `HttpException` (HTTP).

2. Make sure your HTTP exceptions extend `App\Ship\Parents\Exceptions\HttpException`, and your non-HTTP exceptions extend `App\Ship\Parents\Exceptions\Exception`.

### Exception Instantiation

Many exceptions now require constructor parameters. For example, calling `new NotFoundHttpException()` with no arguments no longer works. You might need to pass `$message` or `$code`.

If this is cumbersome, see [Apiato Rector Rules](#upgrade-utilities) for automatic refactoring.

### Removed Exceptions

All exceptions under `Apiato\Core\Exceptions` have been removed. If you used them directly, remove and replace them:

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

**Note**: Apiato now returns `401` instead of `403` when a user is unauthenticated (matching Laravel’s default behavior).

---

## Response

### Transforming Responses

The `$this->transform` method in API Controllers is removed. Use the **`Apiato\Support\Facades\Response`** facade instead.

Its API closely mirrors the old `$this->transform` methods. Refer to the new `Response` facade documentation for details.

**Example**:
```php
// before
return $this->transform($data, Transformer::class);

// after
use Apiato\Support\Facades\Response;

return Response::create($data, Transformer::class);
```

You can automate these changes using the [TransformMethodToResponseCreateRector](#upgrade-utilities).

### Fractal

In `app/Ship/Configs/fractal.php`, update the `fractal_class` to:

```php
'fractal_class' => \Apiato\Http\Response::class
```

### Filtering Responses

The approach for filtering responses has changed. Refer to the new documentation on filtering responses, then update your code accordingly.

---

## Repository

Some repository methods are strongly typed or behave differently.

### `boot()`

`boot` now has a `void` return type:

```php
public function boot(): void
{
    // ...
}
```

### `getById` → `findOrFail`

`getById` has been renamed to `findOrFail`.

### `delete`

`delete` returns `bool` or throws an exception. If you have overridden `delete`, add the `bool` return type:

```php
public function delete($id): bool
{
    // ...
}
```

### `create`

`create` now throws `Apiato\Core\Repositories\Exceptions\ResourceCreationFailed` instead of `\Exception`.

### `update`

`update` now throws `Apiato\Core\Repositories\Exceptions\ResourceNotFound` instead of `\Illuminate\Database\Eloquent\ModelNotFoundException`.

### `find`

`find` now returns `null` if no result is found (mirroring Laravel’s default `find` behavior). Previously, it might have thrown an exception.

- Refactor calls to `find` into `findOrFail`, or
- Retain old behavior by using the Apiato Legacy Bridge.

### Keeping Old Behavior

To keep the old behavior of the `find`, `create`, and `update` methods, use the [Legacy Bridge](#upgrade-utilities) `RepositoryTrait`.

---

## Hash IDs

`Apiato\Core\Traits\HashIdTrait` is removed. Use the `hashids()` helper function directly:

- `$this->decode(...)` → `hashids()->decode(...)`
- `$this->encode(...)` → `hashids()->encode(...)`
- `Hashids::decode(...)` → `hashids()->decode(...)`
- `Hashids::encode(...)` → `hashids()->encode(...)`

**Important**:  
`decode` now can return an `int` or an `array` depending on the input. Previously, it always returned an array.

---

## Jobs

`Apiato\Core\Jobs\Job` no longer implements interfaces or traits. Move them to your Ship’s parent Job class if needed. For example:

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

---

## Validation

`no_spaces` is no longer included by default. If you used it, you can:

- Remove references to it, or
- Register it manually in your own service provider.  
  You can find the source [here](https://github.com/apiato/core/blob/8.x/src/Traits/ValidationTrait.php).

**Example**:
```php
use Illuminate\Support\Facades\Validator;
use App\Ship\Parents\Providers\ServiceProvider;

class MyServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        Validator::extend('no_spaces', function ($attribute, $value) {
            return preg_match('/^\S*$/u', $value);
        }, 'String should not contain space.');

        // Example of other custom validations...
        Validator::extend('unique_composite', ...);
    }
}
```

---

## Database Seeding

Apiato no longer uses Laravel’s `database/seeders/DatabaseSeeder.php`. Instead, place your seeders in the Ship or any Container’s `database/seeders` directory:

- Remove `database/seeders/DatabaseSeeder.php` if present.
- Move your seeding logic into `Ship` or `Container` seeder classes.

---

## Removed Items

- `Apiato\Core\Abstracts\Middlewares\Http\ProfilerMiddleware`
- `Apiato\Core\Middleware\Http\Authenticate`  
  Use `Illuminate\Auth\Middleware\Authenticate` instead.

---

## Added Items

- Copy the new `ValidateAppId` middleware from [Apiato 13.x](https://github.com/apiato/apiato/blob/13.x/app/Ship/Middleware/ValidateAppId.php) into `app/Ship/Middleware` if you need this feature.

---

## Miscellaneous

We recommend reviewing changes in [apiato/apiato](https://github.com/apiato/apiato) and [apiato/core](https://github.com/apiato/core) repositories between versions 12.x and 13.x, using GitHub’s comparison tools. Not all changes are mandatory. Some involve configuration or comments you may wish to sync:

- [Comparison for apiato/apiato](https://github.com/apiato/apiato/compare/12.x...13.x)

---

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

### Project Root Files

Sync your project’s root files with Apiato [13.x](https://github.com/apiato/apiato/tree/13.x), then check your changes with Git. This may include:

- `/configs`
- `artisan`
- `package.json`
- `phpunit.xml`
- `vite.config.js`
- …and more.

Add any new files (e.g., `tailwind.config.js`) that your project may be missing.

---

## Upgrade Utilities

### Legacy Bridge

If you need to gradually transition away from removed Apiato features, the Legacy Bridge can temporarily restore them.

#### Testing

Add `TestCaseTrait` to your parent TestCase:

```php
namespace App\Ship\Parents\Tests;

use Apiato\Core\Testing\TestCase as AbstractTestCase;
use App\Ship\Compatibility\Testing\TestCaseTrait;
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

Add `RequestTrait` to your parent Request to keep removed methods:

```php
namespace App\Ship\Parents\Requests;

use Apiato\Core\Requests\Request as AbstractRequest;
use App\Ship\Compatibility\RequestTrait;

abstract class Request extends AbstractRequest
{
    use RequestTrait;
}
```

### Rector Rules

Use [Rector](https://getrector.com) for automated refactoring. You can install custom Apiato rules via:

```bash
composer require --dev mohammad-alavi/apiato-rector:dev-latest
```

Also ensure you have Rector itself:

```bash
composer require --dev rector/rector
```

- **`RefactorHttpExceptionRector`**  
  Helps refactor exception classes to the new HTTP exception signature.

  ```php
  ->withConfiguredRule(RefactorHttpExceptionRector::class, [
      'parent_class' => \App\Ship\Parents\Exceptions\HttpException::class,
  ]);
  ```
- **`TransformMethodToResponseCreateRector`**  
  Converts `$this->transform(...)` calls to `Response::create(...)`.

For more details, see the Rector documentation and any instructions in the [Apiato Rector rules repository](https://openforests.atlassian.net/wiki/spaces/EL/pages/3181445160/Upgrade+Guide#Rector-Rules).
