---
title: "Useful Commands"
category: "Features"
order: 103
---

- [Available Commands](#available-commands)
- [List All Actions Command](#list-all-actions-command)
- [List All Tasks Command](#list-all-tasks-command)
- [List Container Dependencies Command](#list-container-dependencies-command)

<br>
<br>

Apiato is shipped with many useful commands to help you speed up the development process.
You can see list of all commands, by typing `php artisan` and look for **Apiato** section.

<a name="available-commands"></a>
## Available Commands

- `php artisan apiato:actions` List all Actions in the Application.
- `php artisan apiato:encode` Encode a hashed ID.
- `php artisan apiato:permissions:toRole {role-name}` Give all system Permissions to a specific Role.
- `php artisan apiato:seed-test` Seeds your custom testing data from `app/Ship/Seeders/SeedTestingData.php`.
- `php artisan apiato:seed-deploy` Seeds your custom deployment data from `app/Ship/Seeders/SeedDeploymentData.php`.
- `php artisan apiato:docs` Generate API Documentations from your routes Docblock. [More details]({{ site.baseurl }}{% link _docs/features/api-docs-generator.md %}). 
- `php artisan apiato:generate:X` Generate a specific component for the framework (e.g., `Action`, `Task`, ...). For more details on the `Code Generator` [click here]({{ site.baseurl }}{% link _docs/features/code-generator.md %}).


<a name="list-all-actions-command"></a>
## List All Actions Command

It's useful to be able to see all the implemented use cases in your application. To do so type
`php artisan apiato:actions`

You can also pass `--withfilename` flag to see all Actions with the files names.  
`apiato:actions --withfilename`

![]({{ site.baseurl }}/images/documentation/actions-commands.png)

<a name="list-all-tasks-command"></a>
## List All Tasks Command

It's useful to be able to see all the implemented tasks in your application. To do so type
`php artisan apiato:list:tasks`

You can also pass `--withfilename` flag to see all Tasks with the files names.  
`apiato:list:tasks --withfilename`

<a name="list-container-dependencies-command"></a>
## List Container Dependencies Command

Sometimes it is required to show dependencies between containers (e.g., how they are _interlinked_ amongst each others). 
Apiato provides a command to list all dependencies for one specific container. The command does take the `Apiato::call()` and `$this->call()` (with `use X`) into account.

If you want to get the dependencies for one container, you can call 

```bash
php artisan apiato:list:dependencies app/Containers/X
```

where `X` is the name of the requested container (e.g., `User`).

