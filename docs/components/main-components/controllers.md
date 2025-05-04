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

To generate new controllers,
you may use the `apiato:make:controller` interactive command:

```
php artisan apiato:make:controller
```

## Definition and Principles

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
You can use the [Response](../../digging-deeper/response.mdx) facade to create a new response object.

```php
use Apiato\Support\Facades\Response;
use App\Ship\Parents\Controllers\ApiController;

class Controller extends ApiController
{
    public function __invoke(SampleRequest $request, SampleAction $sampleAction)
    {
        $sample = $sampleAction->run($request);
        
        return Response::create($sample, SampleTransformer::class);
    }
}
```

#### Web Controller

```php
use App\Ship\Parents\Controllers\WebController;

class Controller extends WebController
{
    public function show()
    {
        return view('sectionName@containerName::view-name');
    }
}
```
