---
title: "Actions"
category: "Main Components"
order: 4
---
- [Definition & Principles](#definition-principles)
- [Rules](#rules)
- [Folder Structure](#folder-structure)
- [Code Sample](#code-sample)

<a name="definition-principles"></a>

### Definition & Principles

Read the section in the  [**Porto SAP Documentation (#Actions)**](https://github.com/Mahmoudz/Porto#Actions).

<a name="rules"></a>

### Rules

- All Actions MUST extend `App\Ship\Parents\Actions\Action`.

<a name="folder-structure"></a>

### Folder Structure

```
 - app
    - Containers
        - {container-name}
            - Actions
                - CreateUserAction.php
                - DeleteUserAction.php
                - ...
```

<a name="code-sample"></a>

### Code Sample

**Delete User Action:**

```php
<?php

namespace App\Containers\User\Actions;

use Apiato\Core\Foundation\Facades\Apiato;
use App\Containers\User\Models\User;
use App\Ship\Parents\Actions\Action;

class CreateAdminAction extends Action
{

    /**
     * @param string $email
     * @param string $password
     * @param string $name
     * @param bool   $isClient
     *
     * @return  \App\Containers\User\Models\User
     */
    public function run(string $email, string $password, string $name, bool $isClient = false): User
    {
        $admin = Apiato::call('User@CreateUserByCredentialsTask', [
            $isClient,
            $email,
            $password,
            $name
        ]);

        Apiato::call('Authorization@AssignUserToRoleTask', [$admin, ['admin']]);

        return $admin;
    }
}
```

> Note: instead of passing these parameters `string $email, string $password, string $name, bool $isClient = false` from place to another over and over.
> Consider using the Transporters classes (simple DTO's "Data Transfer Objects"), for more details read the [Transporters Page]({{ site.baseurl }}{% link _docs/components/transporters.md %}).

Injecting each Task in the constructor and then using it below through its property is really boring and the more Tasks you use the worse it gets. So instead you can use the function `call` to call whichever Task you want and then pass any parameters to it.


The Action itself was also called using `Apiato::call()` which triggers the `run` function in it.


Refer to the [**Magical Call**]({{ site.baseurl }}{% link _docs/miscellaneous/magical-call.md %})  page for more info and examples on how to use the call function.



**Same Example using the `call` function:**


```php
<?php

namespace App\Containers\User\Actions;

use App\Containers\User\Tasks\DeleteUserTask;
use App\Ship\Parents\Actions\Action;

class DeleteUserAction extends Action
{

    public function run($userId)
    {
        return Apiato::call(DeleteUserTask::class, [$userId]); // <<<<<
    }

}
```


**Example: Calling multiple Tasks:**

```php
<?php

namespace App\Containers\Email\Actions;

use App\Containers\Xxx\Tasks\Sample111Task;
use App\Containers\Xxx\Tasks\Sample222Task;
use App\Ship\Parents\Actions\Action;

class DemoAction extends Action
{

    public function run($xxx, $yyy, $zzz)
    {

        $foo = Apiato::call(Sample111Task::class, [$xxx, $yyy]);

        $bar = Apiato::call(Sample222Task::class, [$zzz]);

        // ...

    }

}

```


**Action usage from a Controller:**

```php
 <?php
    //...

    public function deleteUser(DeleteUserRequest $request)
    {
        $user = Apiato::call(DeleteUserAction::class, [$request->xxx, $request->yyy]);

        return $this->deleted($user);
    }

    //...
```

The same Action MAY be called by multiple Controllers (Web, Api, Cli).
