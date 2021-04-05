---
title: Transporters
---

- [Definition & Principles](#definition-principles)
- [Rules](#rules)
- [Folder Structure](#folder-structure)
- [Code Sample](#code-sample)
- [Requests and Transporters](#Requests-and-Transporters)
- [Set Data](#set-data)
- [Get Data](#get-data)


<a name="definition-principles"></a>
### Definition & Principles

Transporters is a name chosen by Apiato for DTO's (Data Transfer Objects). 
Transporters are used to pass user data (coming from Requests, Commands, or other places) from place to another (Actions to Tasks / Controller to Action / Command to Action / ...).

They are very useful for reducing the number of parameters in functions, which prevents the duplication of the long parameters.   

Apiato uses [this package](https://github.com/fireproofsocks/dto) for the DTO. Refer to the [dto package wiki](https://github.com/fireproofsocks/dto/wiki) for more details.


<a name="rules"></a>
### Rules

- All Models MUST extend from `App\Ship\Parents\Transporters\Transporter`.

<a name="folder-structure"></a>
### Folder Structure

```
 - App
    - Containers
        - {container-name}
            - Data
                - Transporters
                    - CreateUserTransporter.php
                    - ...
```


<a name="code-sample"></a>
### Code Sample

**Transporter class**

```php
<?php

namespace App\Containers\Authentication\Transporters;

use App\Ship\Parents\Transporters\Transporter;

class ProxyApiLoginTransporter extends Transporter
{

    /**
     * @var array
     */
    protected $schema = [
        'properties' => [
            'email',
            'password',
            'client_id',
            'client_password',
            'grant_type',
            'scope',
        ],
        'required'   => [
            'email',
            'password',
            'client_id',
            'client_password',
        ],
        'default'    => [
            'scope' => '',
        ]
    ];
}

```

**Usage from Controller**

Normally you would use it like this

```php
$dataTransporter = new DataTransporter($request);
$dataTransporter->bearerToken = $request->bearerToken();

Apiato::call('Authentication@ApiLogoutAction', [$dataTransporter]);
```

Since this example above has some required data, that data must be sent to the constructor:

```php
$dataTransporter = new ProxyApiLoginTransporter(
    array_merge($request->all(), [
        'client_id'       => Config::get('authentication-container.clients.web.admin.id'),
        'client_password' => Config::get('authentication-container.clients.web.admin.secret')
    ])
);

$result = Apiato::call('Authentication@ProxyApiLoginAction', [$dataTransporter]);
```



**Creating a Transporter from Test**

```php
$data = [
	'foo' => 'bar'
];

$transporter = new DataTransporter($data);
$action = App::make(RegisterUserAction::class);

$user = $action->run($transporter);
```	
 



<a name="Requests-and-Transporters"></a>
### Optionally switch between Requests and Transporters 

```php
// if you have the following function signature
public function run(DataTransporter $data)

// you would pass a DataTransporter to it
$user = Apiato::call('MyContainer@myAction', [new DataTransporter($request)]);
```

```php
// if you have the following function signature
public function run(Request $data)

// you would pass a Request to it
$user = Apiato::call('MyContainer@myAction', [$request]);

// if request has Transporter defined on it, it will be the one passed to the Action. So the Action can even type hint the custom Transporter defined on the Request.
```

Here where the magic happens:

```php
// if you have the following function signature
public function run(Request $data)

// you can pass a DataTransporter to it, only if you are using the magical call function, for the magic to work
$user = Apiato::call('MyContainer@myAction', [new DataTransporter($request)]);
```

```php
// if you have the following function signature
public function run(DataTransporter $data)

// you can pass a DataTransporter to it, only if you are using the magical call function, for the magic to work
$user = Apiato::call('MyContainer@myAction', [$request]);

// if request has Transporter defined on it, it will be the one passed to the Action. So the Action can even type hint the custom Transporter defined on the Request.
```

#### Transforming a Request to a Transporter

If you want to directly transform a `Request` to a `Transporter` you can simply call

```php
$transporter = $request->toTransporter();
```

This method does take the `protected $transporter` of the `Request` class into account. If none is defined, a regular `DataTransporter` will be created.

Note, that `$transporter` will now have all fields from `$request` - so you can directly access them. In order to do so, 
you can call:
```php
// "simple" access via direct properties
$name = $transporter->name;

// complex access via method
$username = $transporter->getInputByKey('your.nested.username.field');
```

Of course, you can also "sanitize" the data, like you would have done in the `Request` classes by using `sanitizeInput(array)`.

Finally, if you need to access the original `Request` object, you can access it via
```php
$originalRequest = $transporter->request;
```


<a name="set-data"></a>
### Set Data

You can set data in many ways

```php
$dataTransporter = new DataTransporter($request);
$dataTransporter->bearerToken = $request->bearerToken();
```

If the data is defined as required like this on the Transporter:

```php
    protected $schema = [
        'type' => 'object',
        'properties' => [
            'email',
            'password',
            'clientId',
            'clientPassword',
        ],
        'required'   => [
            'email',
            'password',
            'clientId',
            'clientPassword',
        ],
    ];
```
 
Then can set data on the Transporter like this:
 
```php
$dataTransporter = new ProxyApiLoginTransporter(
    array_merge($request->all(), [
        'clientId'       => Config::get('authentication-container.clients.web.admin.id'),
        'clientPassword' => Config::get('authentication-container.clients.web.admin.secret')
    ])
);
```
 
 
 
#### Set Instance

Passing Objects does not work!, because the third party package cannot hydrate it. So to pass instances from a place to 
another on the Transporter object, you can do the following:

```php
$transporter = new DataTransporter();
$transporter->setInstance("command_instance", $this);
```

**Warning:** you can set instances, but they do not appear when calling `toArray()` or other similar functions, since 
they cannot be hydrated. See below how you can get the instance form the Transporter object.

#### Get Instance:

```php
$console = $data->command_instance;
```
 
<a name="get-data"></a>
### Get Data
 
To get all data from the Transporter you can call `$data->toArray()` or `$data->toJson()`... there are many other functions on the class.

To get specific data just call the data name, as you would when accessing data from a Request object `$data->username`.
 








 
 
 









