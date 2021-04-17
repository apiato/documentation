---
title: Actions
---
- [Definition & Principles](#definition-principles)
- [Rules](#rules)
- [Folder Structure](#folder-structure)
- [Code Sample](#code-sample)

### Definition & Principles {#definition-principles}

Read [**Porto SAP Documentation (#Actions)**](https://github.com/Mahmoudz/Porto#Actions).

### Rules {#rules}

- All Actions MUST extend `App\Ship\Parents\Actions\Action`.

### Folder Structure {#folder-structure}

```
 - app
    - Containers
        - {section-name}
            - {container-name}
                - Actions
                    - CreateUserAction.php
                    - DeleteUserAction.php
                    - ...
```

### Code Sample {#code-sample}

#### Action

```php
class CreateAdminAction extends Action
{
    public function run(string $email, string $password, string $name, bool $isClient = false): User
    {
        $admin = app(CreateUserByCredentialsTask::class)->run(
            $isClient,
            $email,
            $password,
            $name
        );

        app(AssignUserToRoleTask::class)->run($admin, ['admin']);

        return $admin;
    }
}
```

#### Calling multiple Tasks

```php
class DemoAction extends Action
{
    public function run($xxx, $yyy, $zzz)
    {
        $foo = app(Sample111Task::class)->run($xxx, $yyy);
        $bar = app(Sample222Task::class)->run($zzz);
    }
}
```

#### Usage from a Controller

```php
    public function deleteUser(DeleteUserRequest $request)
    {
        $user = app(DeleteUserAction::class)->run($request);
        return $this->deleted($user);
    }
```
:::tip
The same Action MAY be called by multiple Controllers (Web, Api, Cli).
:::
