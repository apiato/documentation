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

### Definition & Principles {#definition-principles}

Read [**Porto SAP Documentation (#Controllers)**](https://github.com/Mahmoudz/Porto#definitions--principles).

### Rules {#rules}

- All Controllers MUST be placed in the `App\Containers\{Section}\{Container}\UI\{API|WEB}\Controllers` directory.
- All API Controllers MUST extend the `App\Ship\Parents\Controllers\ApiController` class.
- All Web Controllers MUST extend the `App\Ship\Parents\Controllers\WebController` class.
- Controllers MUST only call the `run` or `transactionalRun` method of Actions.
- Controllers SHOULD pass the Request object to the Action instead of passing data from the request.

### Folder Structure {#folder-structure}

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

### Code Sample {#code-sample}

#### API Controller

```php
use App\Ship\Parents\Controllers\ApiController;

class Controller extends ApiController
{
    public function __construct(
        private readonly SampleAction $sampleAction,
    ) {
    }
    
    public function __invoke(SampleRequest $request): JsonResponse
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

:::tip
In case you want to handle the same Action differently based on the UI type (e.g., API, Web, CLI), you can set the
UI on Action with `setUI` method.

```php
$action = app(Action::class);
$action->setUI('web');
```

and get the UI in your Action with `getUI` method.

```php
$action->getUI(); // will return 'web'
```
:::

### Response Helpers Methods {#response-helpers-methods}

[transform](#transform)  
[withMeta](#withMeta)  
[json](#json)  
[created](#created)  
[deleted](#deleted)  
[accepted](#accepted)  
[noContent](#noContent)  

#### transform {#transform}
This method is incredibly useful and will be used in most cases.

- The first required parameter accepts data as an object or a Collection of objects.
- The second required parameter is the transformer class.
- The third optional parameter allows you to specify the [includes](transformers#relationships-include) that should be returned in the response.
- The fourth optional parameter lets you include metadata in the response. This metadata will be returned under the `meta` key in the `custom` key.

```php
// With Includes
$this->transform($resouce, ResourceTransformer::class, ['foo', 'bar']);
```
```php
// With Meta
$this->transform($resouce, ResourceTransformer::class, meta: ['foo' => 'bar', 'baz' => 1]);

// Response
{
  "data": {},
  "meta": {
    "include": [...],
    "custom": {
      "foo": "bar",
      "baz": 1
    },
    "pagination": {}
  }
}
```
#### withMeta {#withMeta}
This method enables you to add metadata to the response,
and it MUST be used in conjunction with the `transform` method.
This is different from the `meta` parameter in the `transform` method.
This metadata will be returned directly under the `meta` key.

You can use this method in conjunction with the `meta` parameter in the `transform` method.

```php
$metaData = ['foo' => 999, 'bar'];

$this->withMeta($metaData)->transform($sample, SampleTransformer::class, meta: ['foo' => 'bar', 'baz' => 1]);

// Response
{
  "data": {},
	"meta": {
	  "foo": 999,
	  "0": "bar",
	  "include": [...],
	  "custom": {
	    "foo": "bar",
	    "baz": 1
	  },
	  "pagination": {}
  }
}
```

#### json {#json}
This method allows you to pass an array of data that will be represented as JSON.
```php
$this->json($data)
```

#### created {#created}
This method allows you to return a response with a `201` status code.
```php
$this->created($data)
```

#### deleted {#deleted}
This method allows you to return a response with a `202` status code.
```php
$this->deleted($deletedModel)

// Response
{
  "message": "Model (1) Deleted Successfully."
}
```

#### accepted {#accepted}
This method allows you to return a response with a `202` status code.
```php
$this->accepted($data)
```

#### noContent {#noContent}
This method allows you to return a response with a `204` status code.
```php
$this->noContent()
```
