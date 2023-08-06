---
title: Validation
---

Apiato uses the powerful [Laravel validation](https://laravel.com/docs/validation) system.

In Apiato, validation must be defined in [Request](../components/main-components/requests) component, since every request might have different rules.

Validation rules are automatically applied, once injecting the Request in the Controller.

Requests help validating User data, accessibility, ownership and more.

**Example Request with Validation rules:**

```php
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
    public function registerUser(RegisterUserRequest $request)
    {
        $user = app(RegisterUserAction::class)->run($request);
        return $this->transform($user, UserTransformer::class);
    }
```

## Responses

Validation Error response format:

Single Field:

```json
{
  "message": "The given data was invalid.",
  "errors": {
    "email": [
      "The email has already been taken."
    ]
  }
}
```

Multiple Fields:

```json
{
  "message": "The given data was invalid.",
  "errors": {
    "email": [
      "The email has already been taken."
    ],
    "password": [
      "The password field is required."
    ]
  }
}
```

More details about requests in the [Requests](../components/main-components/requests) Page.
