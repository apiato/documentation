---
sidebar_position: 5
title: Tasks
---

- [Definition & Principles](#definition-principles)
- [Rules](#rules)
- [Folder Structure](#folder-structure)
- [Code Sample](#code-sample)

### Definition & Principles {#definition-principles}

Read [**Porto SAP Documentation (#Tasks)**](https://github.com/Mahmoudz/Porto#definitions--principles).

### Rules {#rules}

- All Tasks MUST extend `App\Ship\Parents\Tasks\Task`.
- The parent extension should be aliased as `ParentTask`.

### Folder Structure {#folder-structure}

```
 - app
    - Containers
        - {Section}
            - {Container}
                - Tasks
                    - ConfirmUserEmailTask.php
                    - GenerateEmailConfirmationUrlTask.php
                    - SendConfirmationEmailTask.php
                    - ValidateConfirmationCodeTask.php
                    - SetUserEmailTask.php
                    - ...
```

### Code Sample {#code-sample}

#### Task

```php
class FindUserByIdTask extends Task
{
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function run($id)
    {
        try {
            $user = $this->userRepository->find($id);
        } catch (Exception $e) {
            throw new UserNotFoundException();
        }

        return $user;
    }
}
```

#### Task usage from an Action

```php
class ValidateUserEmailByConfirmationCodeAction extends Action
{
    public function run($userId, $code)
    {
        app(ValidateConfirmationCodeTask::class)->run($userId, $code);
        $user = app(FindUserByIdTask::class)->run($userId);
        app(ConfirmUserEmailTask::class)->run($user);
    }
}
```
