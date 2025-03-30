---
sidebar_position: 2
title: Upgrade Guide
---

Laravel Upgrade
===============

#### Upgrading Laravel To 11.0 From 10.x

Update your codebase according to the Laravel [upgrade guide](https://laravel.com/docs/11.x/upgrade).

Apiato Upgrade
==============

#### Upgrading Apiato To 13.0 From 12.x and Core To 13.0 From 8.x

Follow this guide to upgrade Apiato and your project.

Updating Dependencies
---------------------

### PHP 8.2.0 Required

Apiato now requires PHP 8.2.0 or greater.

### Composer Dependencies

Do the following steps

1.  Remove all Apiato first-party packages under `app/Containers/Vendor` to prevent some dependency conflicts. They will be installed again after we do a `composer update`.

2.  Move the following dependencies to your application's root `composer.json` file if they are in the Ship or a Container `composer.json` file.

  * `apiato/core`

  * `laravel/passport`

3.  Update the following dependencies in your application's root `composer.json` file.

  * `apiato/core` to `^13.0`

  * `laravel/passport` to `^12.0`

  * `spatie/laravel-permission` to `^6.0`

  * `nunomaduro/collision` to `^8.1`

  * `apiato/documentation-generator-container` to `^4.0`

  * `apiato/localization` to `x` (If installed)

  * `apiato/social-auth` to `x` (If installed)

  * `phpunit/phpunit` to `^11.0`

  * `barryvdh/laravel-ide-helper` to `^3.0`

  * `vimeo/psalm` to `^6.0`  
      Don’t forget to also upgrade its related dependencies if you have them in your project.

      "psalm/plugin-laravel": "^3.0",
      "psalm/plugin-mockery": "^1.2",
      "psalm/plugin-phpunit": "^0.19.2",

4.  Remove the following dependencies from your application's root `composer.json` file.

  * `spatie/laravel-ignition`

      Laravel now comes with it’s own error handling page.

  * All Apiato specific dependencies  
      These dependencies are no longer required as they are now handled by the `apiato/core` dependency.

    * `ext-curl`

    * `ext-gettext`

    * `ext-imagick`

    * `ext-mbstring`

    * `ext-openssl`

    * `ext-pdo`

    * `ext-sodium`

    * `ext-tokenizer`

    * `guzzlehttp/guzzle`

    * `laravel/framework`

    * `laravel/tinker`

5.  Review the upgrade guides for each of these packages to ensure you are aware of any additional breaking changes:

  * [phpunit/phpunit](https://github.com/sebastianbergmann/phpunit/blob/11.0.0/ChangeLog-11.0.md#1100---2024-02-02)

  * [spatie/laravel-permission](https://spatie.be/docs/laravel-permission/v6/upgrading)


#### Getting the updated dependencies

Now that we bumped all dependency versions, let’s get their latest versions pulled in.

Remove the `vendor` directory to have a clean start

`rm -rf vendor`

Now get the latest dependencies

`composer update`

At this point, since we haven’t finished the upgrade yet, you will surely get some errors while running this command. And because of the way the `wikimedia/composer-merge-plugin`, the package responsible for merging Container `composer.json` files, works we suggest you run this command again to be sure you get all the latest dependencies correctly pulled in.

`composer update`

Namespaces & Renames
--------------------

Core abstract classes namespace has been changed from `Apiato\Core\Abstracts` to `Apiato\Core`.

* `Apiato\Core\Abstracts` → `Apiato\Core`


Additionally, some classes have had their name or namespace changed further.

Update these `from` → `to`

* `Apiato\Core\Abstracts\Commands\ConsoleCommand` → `Apiato\Core\Console\Command`

* `Apiato\Core\Abstracts\Criterias` → `Apiato\Core\Criteria`

* `Apiato\Core\Abstracts\Middlewares` → `Apiato\Core\Middleware`

* `Apiato\Core\Abstracts\Middlewares\Http\ProcessETagHeadersMiddleware` → `Apiato\Http\Middleware\ProcessETag`

* `Apiato\Core\Abstracts\Middlewares\Http\ValidateJsonContent` → `Apiato\Http\Middleware\ValidateJsonContent`

* `Apiato\Core\Abstracts\Providers\MainServiceProvider` → `Apiato\Core\Providers\ServiceProvider`

* `Apiato\Core\Abstracts\Tests\PhpUnit\TestCase` → `Apiato\Core\Testing\TestCase`


### Model

Here are Model specific changes.

Update these `from` → `to`

* `Apiato\Core\Contracts\HasResourceKey` → `Apiato\Http\Resources\ResourceKeyAware`

* `Apiato\Core\Traits\ModelTrait` → `Apiato\Core\Models\InteractsWithApiato`

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

* `Apiato\Core\Traits\HasResourceKeyTrait` → `Apiato\Http\Resources\HasResourceKey`

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

From this point onward, any time we mention `Apiato\Core` namespace, we mean the old `Apiato\Core\Abstracts` namespace which you just updated.

App Configuration
-----------------

Laravel 11 and Apiato 13 configurations has been changed and both of them can be configured via a configuration class now.

Replace everything in the `bootstrap/app.php` file with following configuration. It is the new Apiato default configuration which you can use as a starting point and further customize it to your needs.

```php
use Apiato\Foundation\Apiato;
use Apiato\Http\Middleware\ProcessETag;
use Apiato\Http\Middleware\ValidateJsonContent;
// use App\Containers\AppSection\Authentication\UI\WEB\Controllers\HomePageController;
// use App\Containers\AppSection\Authentication\UI\WEB\Controllers\LoginController;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

$basePath = dirname(\_\_DIR\_\_);$apiato = Apiato::configure(basePath: $basePath)->create();

return Application::configure(basePath: $basePath)
    ->withProviders($apiato->providers())
    ->withEvents($apiato->events())
    ->withRouting(
        web: $apiato->webRoutes(),
        channels: \_\_DIR\_\_ . '/../app/Ship/Broadcasts/channels.php',
        health: '/up',
        then: static fn () => $apiato->registerApiRoutes(),
    )
    ->withMiddleware(function (Middleware $middleware) {
        // These middleware were previously applied via app/Ship/Kernels/HttpKernel class
        $middleware->api(append: \[
            ValidateJsonContent::class,
            ProcessETag::class,
        \]);
        // If you are using web routes, update the following middleware to your needs
        // $middleware->redirectUsersTo(static function (Request $request): string {
        //     return action(HomePageController::class);
        // });
        // $middleware->redirectGuestsTo(static function (Request $request): string {
        //     return action(\[LoginController::class, 'showForm'\]);
        // });
    })
    ->withCommands($apiato->commands())
    ->withExceptions(static function (Exceptions $exceptions) {})
    ->create();
```

Service Providers
-----------------

All providers under `Providers` directory in Containers and `Ship` are now loaded automatically. This removes the previous requirement of having a `MainServiceProvider` (with the exact name) per container. Your providers can have any name and it is not required to name one of them `MainServiceProvider`.

Due to the way Service Providers are registered now, parent providers under `app/Ship/Parents/Providers` won't be registered anymore. So if you want to do something in a provider’s `register` or `boot` method you have to extend from these providers and put them in your Container or Ship `Providers` directory.

* Move any bootstrapping and registrations you were doing in these Abstract Parent Providers to a Container or the Ship Service Provider.
    

#### Properties

`$serviceProviders` and `$aliases` properties are removed.

As previously mentioned, we don’t need to manually register service providers anymore. Hence, we no longer need the `$serviceProviders` property.

Refactor your code to register or alias your providers in your service provider’s `register` and `boot` methods.

```php
// before
public array $serviceProviders = \[
    ThirdPartyServiceProvider::class,
\];

public array $aliases = \[
    'something' => ThirdPartyServiceProvider::class,
\];
    
// after    
public function register(): void
{
    // remember that you don't need to manually register any of the providers
    // that are under the Containers or Ship \`Providers\` directory, because
    // those providers are now loaded automatically.
    $this->app->register(ThirdPartyServiceProvider::class);
    $this->app->alias(ThirdPartyServiceProvider::class, 'something');
}
```

#### Parent method calls

There is no need to call the `parent::register()` or `parent::boot()` methods in your service providers anymore. Just like Laravel Service Providers, all `register` and `boot` methods of all providers are now called independently and will be called without needing the manual parent call.

Remove the following method calls in your service providers

* `parent::register()`
    
* `parent::boot()`
    

#### BroadcastServiceProvider

`Apiato\Core\Abstracts\Providers\BroadcastServiceProvider` has been removed.

Remove your `App\Ship\Parents\Providers\BroadcastServiceProvider` class and instead configure your broadcasts via `bootstrap/app.php`.

return Application::configure(basePath: $basePath)
    ...
    ->withRouting(
        channels: \_\_DIR\_\_ . '/../app/Ship/Broadcasts/channels.php',
    )
    ...
    ->create();

#### AuthServiceProvider

Since Laravel is pushing toward simplifying the framework configurations and [away](https://laravel.com/docs/11.x/authorization#registering-policies) from using the `Illuminate\Foundation\Support\Providers\AuthServiceProvider`, we have removed the `Apiato\Core\Abstracts\Providers\AuthServiceProvider`. Everything that `AuthServiceProvider` was offering is now achievable with all providers.

If you have been using this provider to manually register your `Policies` and you are not using Larave’s [policy discovery](https://laravel.com/docs/11.x/authorization#policy-discovery) feature, read Laravel’s docs about the [policy manual registration](https://laravel.com/docs/11.x/authorization#manually-registering-policies) and upgrade your code accordingly.

If you were registering anything in `AuthServiceProvider` `register` and `boot` methods, move those registrations to another service provider.

Remove all classes that were extending it or it’s subclasses. e.g,

* `App\Ship\Parents\Providers\AuthServiceProvider`
    
    * `App\Containers\AppSection\Authentication\Providers\AuthServiceProvider`
        
    * etc…
        

#### MiddlewareServiceProvider

`Apiato\Core\Abstracts\Providers\MiddlewareServiceProvider` has been removed.

Move any middleware [configurations](https://laravel.com/docs/11.x/middleware#registering-middleware) that you were doing in a `MiddlewareServiceProvider`, to the `bootstrap/app.php` and then remove them in the next step.

Remove all classes that were extending it or it’s subclasses. e.g,

* `App\Ship\Parents\Providers\MiddlewareServiceProvider`
    
    * `App\Containers\AppSection\Authentication\Providers\MiddlewareServiceProvider`
        
    * etc…
        

#### TODO

Refactor your service providers that are extending from any of the following providers to extend from the `App\Ship\Parents\Providers\ServiceProvider`

* `App\Ship\Parents\Providers\AuthServiceProvider`
    
* `Apiato\Core\Providers\AuthServiceProvider`
    
* `Illuminate\Foundation\Support\Providers\AuthServiceProvider`
    

Test middleware override/replace in GESG `RedirectIfAuthenticated` to see if it really works.

Laravel Passport
----------------

### Migration Changes

Passport 12.0 no longer automatically loads migrations from its own migrations directory. Instead, you should copy the Passport's migrations from Apiato [13.x](https://github.com/apiato/apiato/tree/13.x/app/Containers/AppSection/Authentication/Data/Migrations) branch to your application.

You can find the migrations in the `app/Containers/AppSection/Authentication/Data/Migrations` directory. Create the `Data/Migrations`directory if it doesn’t exist.

#### Password Grant Type

The password grant type is disabled by default. You have to enable it by calling the `enablePasswordGrant` method in the `boot` method of one of your application's service providers:

```php
public function boot(): void
{
    Passport::enablePasswordGrant();
}
```

Carbon 3
--------

In Carbon v3, PHPDoc is moving to real types so many method calls which were working before will throw a `TypeError`.

For example this one will throw an error because we are passing a `string`.

`Passport::tokensExpireIn(Carbon::now()->addMinutes(config('apiato.api.expires-in')));`

To fix it we have to explicitly cast the string to `(int)`

`Passport::tokensExpireIn(Carbon::now()->addMinutes((int)config('apiato.api.expires-in')));`

Review Carbon's [change log](https://github.com/briannesbitt/Carbon/releases/tag/3.0.0) and [documentation](https://carbon.nesbot.com/docs/#api-carbon-3) for detailed information on how to handle these and other changes.

Value Objects
-------------

### Removed Trait

`Apiato\Core\Traits\HasResourceKeyTrait` has been removed from the Core VO (`Apiato\Core\Values\Value`).

If you were relying on the `getResourceKey` method that trait was providing, you have to add the trait and it’s related interface (`Apiato\Http\Resources\ResourceKeyAware`) to your Ship Parent VO class.

Remember that `Apiato\Core\Traits\HasResourceKeyTrait` has been renamed and relocated to `Apiato\Http\Resources\HasResourceKey`.

```php
use Apiato\Core\Values\Value as AbstractValue;
use Apiato\Http\Resources\HasResourceKey;
use Apiato\Http\Resources\ResourceKeyAware;

abstract class Value extends AbstractValue implements ResourceKeyAware {
    use HasResourceKey;
}
```

### Readonly

Value Objects are `readonly` now.

Add `readonly` to your `App\Ship\Parents\Values` class.

```php
use Apiato\Core\Values\Value as AbstractValue;

// Before
abstract class Value extends AbstractValue {}
// After
abstract readonly class Value extends AbstractValue {}
```

Refactor all your value objects extending the parent value object and add the `readonly` keyword to them.

Testing
-------

Along the idea of `embracing the Laravel way`, testing has been cleared up and simplified. Test your stuff the Laravel way. All testing features Apiato was providing before is now easily achievable via Laravel.

All Apiato custom testing methods has been removed.

* `makeCall`
    
* `injectId`
    
* `endpoint`
    
* etc…
    

Since this will be a huge, almost impossible, refactoring for large codebase, we have provided some utility tools to help you with the gradual upgrade. Read about Apiato Legacy Bridge [here](https://openforests.atlassian.net/wiki/spaces/EL/pages/3181445160/Upgrade+Guide#Upgrade-Utilities).

### LazilyRefreshDatabase

`LazilyRefreshDatabase` trait has been removed from the Core parent TestCase to give you the option of not using it.

* Add `LazilyRefreshDatabase` trait your `App\Ship\Parents\Tests\TestCase` if you want to use this feature.
    

Request
-------

If you have a large codebase and you want to do the upgrade gradually, read about Apiato Legacy Bridge [here](https://openforests.atlassian.net/wiki/spaces/EL/pages/3181445160/Upgrade+Guide#Upgrade-Utilities).

### Authorization

All Apiato custom authorization related properties and methods has been removed.

* `$access`
    
* `hasAccess`
    
* `hasAnyPermissionAccess`
    
* `hasAnyRoleAccess`
    
* `check`
    

Since `$access` is not used by Apiato anymore, Having this property on your request will not have any effect on authorization whatsoever.

Refactor your code to use Laravel Policies and optionally remove the `$access` property from your requests classes.

```php
// before
use App\Ship\Parents\Requests\Request as ParentRequest;

final class DeleteUserRequest extends ParentRequest
{
    protected array $access = \[
        'permissions' => 'delete',
        'roles' => '',
    \];
        
    public function authorize(): bool
    {
        return $this->check(\[
            'hasAccess',
        \]);
    }
}

// after
use App\Containers\AppSection\User\Models\User;
use App\Ship\Parents\Requests\Request as ParentRequest;

final class DeleteUserRequest extends ParentRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('delete', \[User::class\]);
    }
}
```

### URL Parameter Validation

`$urlParameters` property and it’s getter method, `getUrlParametersArray` has been removed.

Url parameters are not available for validation in the `rules` method anymore. [Here](https://masteringlaravel.io/daily/2024-05-29-a-nuanced-opinion-on-validating-url-request-parameters) is the reasoning behind this decision.

* Remove any validations you are doing on the url parameters in the `rules` method.  
    Keep in mind, by doing this, previously if the user was passing a wrong route/url parameter, he or she would have received a `422`validation error but now he receives a `404` not found error.
    
* Remove the `$urlParameters` property from your Requests
    
* Remove all calls to the `getUrlParametersArray` method
    

### Hashed Id Decoding

Request’s `$decode` property now also decodes url parameters without needing to add them to the (now removed) `$urlParameters` property.

```php
// before
protected array $decode = \[
    'id',
\];

// this was required
protected array $urlParameters = \[
    'id',
\];

// after
protected array $decode = \[
    'id',
\];
// $urlParameters is no longer required
```

You can access all url parameters from the request just like before.

`$request->id` // you get the decoded value, e.g, 3

### Removed Methods

The following methods has been removed.

* `injectData`
    
* `withUrlParameters`
    
* `mapInput`
    
* `getInputByKey`
    

### sanitizeInput Method

`sanitizeInput` method is renamed to `sanitize`.

Error Handling
--------------

All Apiato custom error handling logics has been removed.

### Removed methods

The following methods `debug`, `withErrors` & `getErrors` which were previously available on all exceptions via the Core [Exception](https://github.com/apiato/core/blob/8.x/src/Abstracts/Exceptions/Exception.php), are no longer available.

### ExceptionsHandler

`App\Ship\Exceptions\Handlers\ExceptionsHandler` is no longer used. Remove it and configure your exception handling via `bootstrap/app.php`

* Remove the `App\Ship\Exceptions\Handlers\ExceptionsHandler` class
    

### HTTP & non-HTTP Exceptions

Exceptions are now separated into 2 group of `Http` and `non-Http` exceptions.

* Create a parent http exception class named `HttpException` in the `app/Ship/Parents/Exceptions` directory
    
    namespace App\Ship\Parents\Exceptions;
    
    use Apiato\Core\Exceptions\HttpException as AbstractException;
    
    abstract class HttpException extends AbstractException
    {
    }
    
    Now you should have two parent exception classes to extend from. `Exception` and `HttpException`.
    
* Refactor your http exceptions to extend from `App\Ship\Parents\Exceptions\HttpException` and non-http exception to extend from `App\Ship\Parents\Exceptions\Exception`.  
    Basically, any exceptions that was extending from `App\Ship\Parents\Exceptions\Exception` should now extend `App\Ship\Parents\Exceptions\HttpException`.
    

### Exception Usage

The way exceptions could be instantiated has changed. For example, must exceptions cannot be instantiated without passing some required constructor parameters.

// this was working before but now it doesn't
throw new NotFoundHttpException();

Yea we know! Refactoring all your exceptions and their exceptions could be a daunting task! But don’t worry, we’ve got you covered!

We have created the `RefactorHttpExceptionRector` Rector rule to help you with this refactoring. With it you can easily update your http exceptions and their usages. Read about Apiato Rector rules [here](https://openforests.atlassian.net/wiki/spaces/EL/pages/3181445160/Upgrade+Guide#Rector-Rules).

### Removed Exceptions

All Exceptions under `Apiato\Core\Exceptions` namespace are removed and won’t be thrown by the Core anymore. This is probably not a breaking change since usually they were just being used in the `@throws` phpdoc blocks.

Remove the usages of them throughout your application.

* `Apiato\Core\Exceptions\AuthenticationException`
    
* `Apiato\Core\Exceptions\GeneratorErrorException`
    
* `Apiato\Core\Exceptions\GeneratorErrorException`
    
* `Apiato\Core\Exceptions\IncorrectIdException`
    
* `Apiato\Core\Exceptions\InvalidTransformerException`
    
* `Apiato\Core\Exceptions\MissingJSONHeaderException`
    
* `Apiato\Core\Exceptions\MissingTestEndpointException`
    
* `Apiato\Core\Exceptions\UndefinedMethodException`
    
* `Apiato\Core\Exceptions\UnsupportedFractalIncludeException`
    
* `Apiato\Core\Exceptions\WrongConfigurationsException`
    
* `Apiato\Core\Exceptions\WrongEndpointFormatException`
    

TODO

Instead of returning 403 for unauthenticated we return 401, default Laravel, now

Response
--------

### Transforming Responses

The `$this->transform` method is no longer available in API Controllers. All of it’s functionalities and more are now available via `Apiato\Support\Facades\Response` facade.

The `Response` facade api is almost identical to the `transform` method. You can find the `Response` facade docs here.

* Refactor all `$this->transform` usages to use the `Response` facade
    

We have created the `TransformMethodToResponseCreateRector` Rector rule to help you with this refactoring. Read about Apiato Rector rules [here](https://openforests.atlassian.net/wiki/spaces/EL/pages/3181445160/Upgrade+Guide#Rector-Rules).

### Fractal

Update `app/Ship/Configs/fractal.php` config to use the Apiato `Response` class.

* `'fractal_class' => \Apiato\Http\Response::class`
    

### Filtering Responses

TODO, link the docs

The way response filtering was working has changed. Please read the docs and update your code accordingly.

Repository
----------

Some repository methods have strong types or different behaviors now.

### boot

`boot` method now has a `void` return type.

* add the `void` return type to your repositories `boot()` methods
    

### getById

`getById` method is renamed to `findOrFail`

### delete

`delete` method now returns `bool` or throw and exception.

* add the `bool` return type to your repositories `delete()` methods if you have overridden it.
    

### create

`create` method now throws `Apiato\Core\Repositories\Exceptions\ResourceCreationFailed` exception instead of `\Exception`

### update

`update` method now throws `Apiato\Core\Repositories\Exceptions\ResourceNotFound` exception instead of `\Illuminate\Database\Eloquent\ModelNotFoundException`

### find

`find` method now returns `null` and doesn’t throw an exception if it cannot find any results (just like Laravel).

Do either one of these

* Refactor `find` method calls to `findOrFail` call to get the old behavior
    
* Or keep the old behavior by using the Apiato Legacy Bridge
    

### Keeping the Old behavior

You can use the Apiato Legacy Bridge `RepositoryTrait` trait if you would like to keep the old behavior of the following methods:

* `find`
    
* `create`
    
* `update`
    

Read about Apiato Legacy Bridge [here](https://openforests.atlassian.net/wiki/spaces/EL/pages/3181445160/Upgrade+Guide#Upgrade-Utilities).

Hash Ids
--------

`Apiato\Core\Traits\HashIdTrait` trait used in the parent TestCase, Request and some other places has been removed. You should use the `hashids()` helper function instead. It provides the same functionality and much more.

Refactor these methods and all calls to `Hashids` facade to use the `hashids` helper function instead.

* `$this->decode(...)` → `hashids()->decode(...)`
    
    * Previously, `decode` always returned and array but now it returns either an `int` or an `array` depending on passed in hashed id argument. This could be a breaking change for your if you expected it to always return an array.
        
* `$this->encode(...)` → `hashids()->encode(...)`
    
* `Hashids::decode(...)` → `hashids()->decode(...)`
    
* `Hashids::encode(...)` → `hashids()->encode(...)`
    
* etc…
    

Jobs
----

Core Job class (`Apiato\Core\Jobs\Job`) don’t use any traits or implement any interfaces anymore. Instead, you should add them to your Ship’s parent Job class based on your requirements. e.g.,

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

These traits and interface are already used on the Ship’s parent Job class in all new Apiato projects.

Validation
----------

`no_spaces` custom validation rules has been removed.

If you were using this validation rule, you have to either

* Remove it’s usages
* Or register it yourself in the `boot` method of one of your application’s service providers
* You can find this rule’s source code [here](https://github.com/apiato/core/blob/8.x/src/Traits/ValidationTrait.php)

```php
use App\Ship\Parents\Providers\ServiceProvider;
use Illuminate\Support\Facades\Validator;
        
class MyServiceProvider extends ServiceProvider
    public function boot(): void
    {
        Validator::extend('no\_spaces', function ($attribute, $value, $parameters, $validator) {
            return preg\_match('/^\S\*$/u', $value);
        }, 'String should not contain space.');
      
        // Validate composite unique ID.
        // Usage: unique\_composite:table,this-attribute-column,the-other-attribute-column
        // Example:    'values'               => 'required|unique\_composite:item\_variant\_values,value,item\_variant\_name\_id',
        //             'item\_variant\_name\_id' => 'required',
        Validator::extend('unique\_composite', function ($attribute, $value, $parameters, $validator) {
            $queryBuilder = DB::table($parameters\[0\]);
      
            $queryBuilder = is\_array($value) ? $queryBuilder->whereIn($parameters\[1\], $value) : $queryBuilder->where($parameters\[1\], $value);
      
            $queryBuilder->where($parameters\[2\], $validator->getData()\[$parameters\[2\]\]);
      
            $queryResult = $queryBuilder->get();
      
            return $queryResult->isEmpty();
        }, 'Duplicated record. This record has composite ID and it must be unique.');
    }
}
```

Database Seeding
----------------

Apiato database seeding process does not rely on the Laravel’s default `database/seeders/DatabaseSeeder.php` anymore. and `Database\Seeders\DatabaseSeeder` will not be called during the seeding operations. Instead, you should put your seeders in the Ship or Containers seeders directory.

* Remove the `database/seeders/DatabaseSeeder.php` file and move any seeding operations you might have been doing in it to the proper location like `Ship` or `Container` database seeders directories.
    

Removed
-------

* `Apiato\Core\Abstracts\Middlewares\Http\ProfilerMiddleware`
    
* `Apiato\Core\Middleware\Http\Authenticate`
    
    * Use `Illuminate\Auth\Middleware\Authenticate` instead
        

Added
-----

* Copy `ValidateAppId` middleware from [Apiato](https://github.com/apiato/apiato/blob/13.x/app/Ship/Middleware/ValidateAppId.php) to your `app/Ship/Middleware` directory
    

Miscellaneous
-------------

We also encourage you to view the changes in the [apiato/apiato](https://github.com/apiato/apiato) and [apiato/core](https://github.com/apiato/core) GitHub repositories. While many of these changes are not required, you may wish to keep these files in sync with your application. Some of these changes will be covered in this upgrade guide, but others, such as changes to configuration files or comments, will not be. You can easily view the changes with the [GitHub comparison tool](https://github.com/apiato/apiato/compare/12.x...13.x) and choose which updates are important to you.

Optional
========

Namespaces
----------

Rename these directories to be in sync with Apiato directory names

* `app/Ship/Middlewares` → `app/Ship/Middleware`
    
* `app/Ship/Parents/Middlewares → app/Ship/Parents/Middleware`
    

DRAFT

* ShipProvider → renamed to → ShipServiceProvider
    
* rename your Container’s and Ship `MainServiceProvider` to `ServiceProvider`
    

Testing
-------

To generate fake data use the Laravel’s `fake` helper function instead of `$this->faker` property.

* Remove the `$this->faker` setup from your parent TestCase. I really recommend this.
    

Remove any Apiato old code from your `App\Ship\Parents\Tests\TestCase` abstract class. You don't need any of that setups anymore. But keep your custom logics in there of course!

```php
// Remove the commented lines
// Your class might be slightly different

namespace App\Ship\Parents\Tests;

use Apiato\Core\Testing\TestCase as AbstractTestCase;
use App\Ship\Enums\AuthGuard;
use Faker\Generator;
use Illuminate\Contracts\Console\Kernel as ApiatoConsoleKernel;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Testing\LazilyRefreshDatabase;

abstract class TestCase extends AbstractTestCase
{
    use LazilyRefreshDatabase;
    
    // protected Generator $faker;

    // public function createApplication(): Application
    // {
    //     $app = require \_\_DIR\_\_ . '/../../../../bootstrap/app.php';
    //
    //     $app->make(ApiatoConsoleKernel::class)->bootstrap();
    // 
    //     // create an instance of faker and make it available in all tests
    //     $this->faker = $app->make(Generator::class);
    // 
    //     return $app;
    // }
}
```

Application Files
-----------------

Sync your project root files with Apiato [13.x](https://github.com/apiato/apiato/tree/13.x) branch  
The easiest way to do it is to just copy, paste and overwrite the new files on your current files and then check the difference in `git` and adjust them accordingly.

* /configs
    
* artisan
    
* package.json
    
* phpunit.xml
    
* vite.config.js
    
* etc…
    

Also don’t forget to add all the newly added files that might not be present in your current project. for example `tailwind.config.js`.

Upgrade Utilities
-----------------

### Legacy Bridge

#### Testing

You can use the `TestCaseTrait` on your parent TestCase to get access to all the removed testing methods in your tests classes.

```php
namespace App\Ship\Parents\Tests;

use Apiato\Core\Testing\TestCase as AbstractTestCase;
use App\Ship\Compatibility\Testing\TestCaseTrait;
use Illuminate\Foundation\Testing\LazilyRefreshDatabase;

abstract class TestCase extends AbstractTestCase
{
    use TestCaseTrait;
    
    // if you use "LazilyRefreshDatabase" trait use this instead to resolve method conflict
    use LazilyRefreshDatabase;
    use TestCaseTrait {
        TestCaseTrait::afterRefreshingDatabase insteadof LazilyRefreshDatabase;
    }
}
```

#### Request

You can use the `RequestTrait` on your parent Request to get access to all the removed methods in your request classes.

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

We are providing some rector custom rules to help you with the upgrade. Read about Rector [here](https://getrector.com/).  
You can get the custom rules via Composer:

`composer require --dev mohammad-alavi/apiato-rector:dev-latest`

TODO

// do we need to add versions for the required? check their docs.
composer required-dev mohammad-alavi/apiato-rector
composer required-dev rector/rector

`RefactorHttpExceptionRector` look at GESG rector configs and update the docs.

1.  \->withConfiguredRule(RefactorHttpExceptionRector::class, \[
        'parent\_class' => \App\Ship\Parents\Exceptions\HttpException::class,
    \]);
    

* Only refactors exceptions that are extending `App\Ship\Parents\Exceptions\HttpException`
    
    * Can be configured to look for another parent
        
* Cannot handle named parameters, if you used named params when instantiating the exception
    
* Must have both `$code` and `$message` properties set on the exception class
    
* Cannot refactor `MyException::class` and will skip them
    
    * e.g, `throw_if(true, MyException::class);`
        

`TransformMethodToResponseCreateRector`

DRAFT
-----

Remove all Apiato middleware under `app/Ship/Middleware` and/or if you have customized them, do your customization via the `bootstrap/app.php` (refer to Laravel 11 [docs](https://laravel.com/docs/11.x/middleware#registering-middleware) to learn how to do it). Do the same for any custom middleware you have added in the `app/Ship/HttpKernel` since `HttpKernel` is no longer used.

Removed

* `App\Ship\Kernels` directory and all classes within it.
    
* `App\Ship\Exceptions\Handlers\ExceptionsHandler`. All your custom exception handing configurations must be done via `bootstrap/app.php` now.
    
* string method fix removed [https://laravel.com/docs/10.x/migrations#index-lengths-mysql-mariadb](https://laravel.com/docs/10.x/migrations#index-lengths-mysql-mariadb)
    
* Core exceptions are renamed. update your code if u use them.
    
    * some are also deleted
        
* `addRequestCriteria` method updated and doesn't accept repository as first param anymore
    
    * you should use the `addRequestCriteria` on the repository
        
* remind them that ship seeders are not loaded by default.
    
    * seeder command removed. you can add it easily to your project. give link to repo.
        
    * config also removed
        
* possible BC if resource key is passed → Transformer methods parameter type-hint added
    
    * nullableItem
        
    * item
        
    * collection
        
* Possible BC if is overridden by user: ResponseHelper::`setResponseContent`() now has a return type of `string|false`. It is used in tests.
    
    * also `endpoint($endpoint)` → `endpoint(string $endpoint)`;
        
* BC: `SeederLoaderTrait` removed. remove from Apiato DatabaseSeeder
    
* BC: trait paths and directory change
    
* seeders are removed from core → deployment/testing. added to Apiato.
    
    * also configs are removed from apiato.php
        
* apiato.php config
    
    * write about all the removed configs, check core config
        
    * BC: API\_PREFIX=/ config and env var is removed.
        
        * you can configure it via Apiato:confiugre() in bootstrap/app.php
            
    * BC: `enable_version_prefix` config removed
        
        * you can configure it via Apiato:confiugre() in bootstra/app.php
            
    * `debug`/`API_DEBUG` removed. since this feature has been provided by the custom exception handing and we dont have it anymore. so it is useless.
        
* HashIds trait removed from Core, if you used $this->encode/decode methods, you have to replace them with the new hashids()->encode/decode() helper or hashIds::encode/decode() facade.
    
* $request->all()
    
    * no longer has url params in it. But url params still gets decoded if they are present in the `decode` array
        
    * Url params can still be retrieved via
        
        * $request->param\_name e,g,. $request->id
            
        * $request->input($param)
            
        * $request->route($param)
            
    * param retrieved by any of the above ways still will be decoded if it is present in the `decode` array.
        
* $request->check() removed. call method like noraml humans `return $this->hasAccess();`
    
    * also document all other removed methods from the `Request`
        
* should use either route model binding or the `decode` array. using both results in an exception.
    
    * you can mix them tho. `decode` some ids and use binding for others.
        
* makeCall removed

```php
$response = $this->patchJson(URL::action(UpdateUserController::class, $user->getHashedKey()), $data);
$response = $this->injectId($user->id, replace: '{user\_id}')->makeCall($data);
```    
        
* config: admin\_role removed
    
* request include
    
    * default and available includes must match a relation name on the model
        
        * \_ - chars are accepted. name must be able to be camelized using Str::camel then match a relation method on the model
            
    * default includes must be eager loaded manually
        
    * cannot mix csv and arrray include query param.
        
        * wrong
            
            * `['books,children.books']`
                
        * right
            
            * `'books,children.books'` or `['books', 'children.books']`
                
* request field sets  
    This feature is disabled by default now you can enable it via fractal config.
```php
'auto\_fieldsets' => \[
    'enabled' => true,
    'request\_key' => 'fields', // query parameter name used to filter the reponse
\],
```
    

For Release Notes
-----------------

`SanitizerTrait` which was providing the `sanitizeInput` to the Request, has been removed.  
`sanitizeInput` is now available as macro named `sanitize` on the Request. The sanitization behavior has not been changed, so you just need to refactor it’s usages.

* refactor `->sanitizeInput()` usages to `->sanitize()`
    

Notes
-----

It seems like that the `array` rule was not being applied correctly before, for example

`'permission_ids' => 'array|required',`

If we passed it this, we wouldn’t get any validation errors but now we do get `The permission ids field must be an array.`

```php
$data = \[
    'permission\_ids' => $permission->getHashedKey(),
\];
```
