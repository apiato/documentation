---
title: Tests
---

* [Definition](#definition)
* [Principles](#principles)
* [Rules](#rules)
* [Folder Structure](#folder-structure)
* [Code Sample](#code-sample)

### Definition {#definition}

Tests classes are created to test if the Application classes are working as expected.

The two most essential Test types for this architecture are the Unit Tests and the Functional Tests. However, Integration and Acceptance Tests can be used as well.

### Principles {#principles}

- Containers MAY be covered by all types of Tests.

- Use Functional Tests to test Container Routes are doing what's expected from them.

- Use Unit Tests to test Container Actions and Tasks are doing what's expected from them.

### Rules {#rules}

- All Container Test classes SHOULD extend a Container Internal TestCase class `{container-name}/Tests/TestCase.php`. The container **TestCase** MUST extend main TestCase on Ship layer `App\Ship\Parents\Tests\PhpUnit\TestCase`. *(Adding functions to the container TestCase allows sharing those functions between all Test classes of the Container)*.

### Folder Structure {#folder-structure}

```
 - app
    - Containers
        - {section-name}
            - {container-name}
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

### Code Sample {#code-sample}

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
