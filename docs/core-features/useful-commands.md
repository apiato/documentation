---
title: Useful Commands
---

- [Available Commands](#available-commands)

Apiato is loaded with many useful commands to help you speed up the development process.
You can see list of all commands, by typing `php artisan` and look for **Apiato** section.

### Available Commands {#available-commands}
  - `php artisan apiato`                           Display the current Apiato version.
  - `php artisan apiato:apidoc`                    Generate API Documentations with apidoc from your routes Docblock. [More details](../core-features/documentation).
  - `php artisan apiato:create:admin `             Create a new User with the ADMIN role
  - `php artisan apiato:generate:{component}`      Generate a specific component for the framework (e.g., `Action`, `Task`, ...). For more details on the `Code Generator` [click here](../core-features/code-generator).
  - `php artisan apiato:list:actions`              List all Actions in the Application.
  - `php artisan apiato:list:tasks`                List all Tasks in the Application.
  - `php artisan apiato:permissions:toRole`        Give all system Permissions to a specific Role.
  - `php artisan apiato:seed-deploy`               Seeds your custom deployment data from `app/Ship/Seeders/SeedDeploymentData.php`.
  - `php artisan apiato:seed-test`                 Seeds your custom testing data from `app/Ship/Seeders/SeedTestingData.php`.
  - `php artisan apiato:welcome`                   Just saying welcome from a container.

