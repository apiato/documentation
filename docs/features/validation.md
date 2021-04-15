---
title: Validation
---

Apiato uses the powerful [Laravel validation](https://laravel.com/docs/validation) system.

In Apiato, validation must be defined in [Request](../main-components/requests) component, since every request might have different rules.

Validation rules are automatically applied, once injecting the Request in the Controller.

Requests help validating User data, accessibility, ownership and more can be added if needed.

**Example Request with Validation rules:**

```php
<?php

namespace App\Containers\AppSection\User\UI\API\Requests;

use App\Ship\Parents\Requests\Request;

class RegisterUserRequest extends Request
{
    /**
     * @return  array
     */
    public function rules()
    {
        return [
            'email'    => 'required|email|max:200|unique:users,email',
            'password' => 'required|min:20|max:300',
            'name'     => 'required|min:2|max:400',
        ];
    }

}
```

**Usage from Controller Example:**

```php
    public function registerUser(RegisterUserRequest $request, CreateUserAction $action)
    {
        // if the actions takes the request object, you can pass the entire request instance as parameter
        $user = Apiato::call('User@RegisterUserAction', [
            [
                $request['email'],
                $request['password'],
                $request['name'],
                $request['gender'],
                $request['birth']
            ]
        ]);
        
        return $this->transform($user, UserTransformer::class);
    }
```

## Responses {#responses}

Validation Error response format:

Single Field:

```json
{
  "errors": {
    "email": [
      "The email has already been taken."
    ]
  },
  "status_code": 422,
  "message": "The given data failed to pass validation."
}
```

Multiple Fields:

```json
{
  "errors": {
    "email": [
      "The email field is required."
    ],
    "password": [
      "The password field is required."
    ]
  },
  "status_code": 422,
  "message": "The given data failed to pass validation."
}
```

More details about requests in the [Requests](../main-components/requests) Page.
