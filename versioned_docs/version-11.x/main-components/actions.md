---
title: Actions
---
- [Definition & Principles](#definition-principles)
- [Rules](#rules)
- [Folder Structure](#folder-structure)
- [Code Sample](#code-sample)
- [Transactional Run](#transactional-run)

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

### Transactional Run {#transactional-run}

Sometimes, you want to wrap a call into one `Database Transaction` (see
[Laravel Documentation](https://laravel.com/docs/master/database#database-transactions)).

Consider the following example: You want to create a new `Team` and automatically assign yourself (i.e., your own
`User`) to this newly created `Team`. Your `CreateTeamAction` may call a dedicated `CreateTeamTask` and a
`AssignMemberToTeamTask` afterwards.

However, if the `AssignMemberToTeamTask` fails, for unknown reasons, you may want to "rollback" (i.e., remove) the
newly created `Team` from the database in order to keep the database in a valid state.

That's where `DB::transactions` comes into play!

Apiato provides a `transactionalRun(...$arguments)` method which internally just wraps the `run()` method of the action in a `DB::Transaction` and passes all the parameters `as is` to it.

If any `Exception` occurs during the execution of the `run()`, everything done in this context is
automatically rolled-back from the database. However, respective operations on the file system (e.g., you may also
have uploaded a profile picture for this `Team` already) need to be performed
manually!

Typically, you may want to use the `transactionalRun()` on the `Controller` level!
