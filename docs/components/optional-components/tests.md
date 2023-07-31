---
title: Tests
---

* [Definition](#definition)
* [Principles](#principles)
* [Rules](#rules)
* [Folder Structure](#folder-structure)
* [Code Sample](#code-sample)

## Definition

Tests classes are created to test if the Application classes are working as expected.

The two most essential Test types for this architecture are the Unit Tests and the Functional Tests. However, Integration and Acceptance Tests can be used as well.

## Principles

- Containers MAY be covered by all types of Tests.

- Use Functional Tests to test Container Routes are doing what's expected from them.

- Use Unit Tests to test Container Actions and Tasks are doing what's expected from them.

## Rules

- All Container Test classes SHOULD extend a Container Internal TestCase class. e.g., `App\Containers\{section}\{container}\Tests\TestCase` class.
- The Container **TestCase** MUST extend the `App\Ship\Parents\Tests\PhpUnit\TestCase` class.

## Folder Structure

```
 - app
    - Containers
        - {Section}
            - {Container}
                - Tests
                    - TestCase.php // the container test case
                    - Unit
                        - CreateUserTest.php
                        - UpdateUserTest.php
                        - ...
                - UI
                    - API
                        - Tests
                            - Functional
                                - LoginTest.php
                                - LogoutTest.php
                                - ...
                    - WEB
                        - Tests
                            - Functional
                                - LoginTest.php
                                - LogoutTest.php
                                - ...
                    - CLI
                        - Tests
                            - Functional
                                - BackupDataTest.php
                                - ...
```

## Code Example

```php
class DeleteUserTest extends TestCase
{
    protected $endpoint = 'delete@v1/users/{id}';
    
    protected array $access = [
        'roles' => '',
        'permissions' => 'delete-users',
    ];
    
    public function testDeleteExistingUser()
    {
        $user = $this->getTestingUser();

        $response = $this->injectId($user->id)->makeCall();

        $response->assertStatus(204);
    }
}
```

> See the [Tests Helpers](../testing/tests-helpers) Page
