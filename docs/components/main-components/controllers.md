---
sidebar_position: 2
title: Controllers
tags:
  - component
  - main-component
  - controller
  - action
  - view
  - request
  - route
  - transformer
---

[Controllers](https://laravel.com/docs/controllers) are tasked with two primary responsibilities:
serving the requested data and constructing the corresponding response.

To generate new controllers
you may use the `apiato:make:controller` interactive command:

```
php artisan apiato:make:controller
```

## Definition & Principles

Read [**Porto SAP Documentation (#Controllers)**](https://github.com/Mahmoudz/Porto#definitions--principles).

## Rules

- All API Controllers:
  - MUST be placed in the `app/Containers/{Section}/{Container}/UI/API/Controllers` directory.
  - MUST extend the `App\Ship\Parents\Controllers\ApiController` class.
  - MUST format their responses via a [Transformer](transformers.md).
- All Web Controllers:
  - MUST be placed in the `app/Containers/{Section}/{Container}/UI/WEB/Controllers` directory.
  - MUST extend the `App\Ship\Parents\Controllers\WebController` class.
- Controllers:
  - MUST only call the `run` or `transactionalRun` method of Actions.

## Folder Structure

```markdown
app
└── Containers
    └── Section
        └── Container
            └── UI
                ├── API
                │   └── Controllers
                │       ├── ControllerA.php
                │       ├── ControllerB.php
                │       └── ...
                └── WEB
                    └── Controllers
                        ├── ControllerA.php
                        ├── ControllerB.php
                        └── ...
```

## Code Example

#### API Controller

```php
use App\Ship\Parents\Controllers\ApiController;

class Controller extends ApiController
{
    public function __construct(
        private readonly SampleAction $sampleAction,
    ) {
    }
    
    public function __invoke(SampleRequest $request): array
    {
        $sample = $this->sampleAction->run($request);
        
        return $this->transform($sample, SampleTransformer::class);
    }
}
```

#### Web Controller

```php
use App\Ship\Parents\Controllers\WebController;

class Controller extends WebController
{
    public function show(): Factory|View|Application
    {
        return view('sectionName@containerName::view-name');
    }
}
```

## Response

You can use the `Apiato\Support\Facades\Response` facade to create a new response object.

The `Response` class extends `Spatie\Fractal\Fractal` to enhance its functionality for API responses.
It adds methods for resource key management, meta information, and standardized HTTP responses.

:::info Further Reading
For more detailed information,
please refer to [Fractal](https://fractal.thephpleague.com/transformers/) and [Laravel Fractal Wrapper](https://github.com/spatie/laravel-fractal) documentations.
:::

Here are some examples of how to use the `Response` facade:

```php
Response::create($user)->transformWith(UserTransformer::class)->json(null, 200);

Response::create()->transformWith(UserTransformer::class)->ok($user);

Response::create($user, UserTransformer::class)->created();

Response::create($user, UserTransformer::class)->parseIncludes(['permissions'])->toArray();

Response::ok();
```
