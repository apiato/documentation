---
title: "Upgrade Guide"
category: "General"
order: 3
---

- [Upgrade from 8.0 to 9.0](#upgrade-apiato-from-version80To90)
- [Upgrade from 7.4 to 8.0](#upgrade-apiato-from-version74To80)
- [Upgrade from 7.3 to 7.4](#upgrade-apiato-from-version73To74)
- [Upgrade from 7.2 to 7.3](#upgrade-apiato-from-version72To73)
- [Upgrade from 7.1 to 7.2](#upgrade-apiato-from-version71To72)
- [Upgrade from 7.0 to 7.1](#upgrade-apiato-from-version70To71)
- [Upgrade from 5.0 to 7.0](#upgrade-apiato-from-version50To70)
- [Upgrade from 4.1 to 5.0](#upgrade-apiato-from-version-41To50)
- [How to manually upgrade older versions to 4.1?](#how-to-manually-upgrade-older-versions-to-41)
- [Manual Upgrading Guide](#Manual-Upgrading-Guide)
- [Upcoming Release Notes](#Upcoming-Release)

<a name="upgrade-apiato-from-version74To80"></a>
## Upgrade from 8.0 to 9.0

> Estimated upgrading time: 30 minutes.

1) Follow the steps in the [Manual Upgrading Guide](#Manual-Upgrading-Guide) below. 

You can view [all changes here](https://github.com/apiato/apiato/compare/8.0...9.0).

- Running `php artisan apiato` should return `9.0.0`
- Running `php artisan -V` should return `7.*.*`  


<a name="upgrade-apiato-from-version74To80"></a>
## Upgrade from 7.4 to 8.0

> Estimated upgrading time: 30 minutes.

1) Move the `WePay` Container away until the upgrade is done, or delete it if you're not using it. This container was removed in Apiato 8.0.

2) Follow the steps in the [Manual Upgrading Guide](#Manual-Upgrading-Guide) below.

3) Use `.test` instead of `.develop` for the URL's.

<a name="upgrade-apiato-from-version73To74"></a>
## Upgrade from 7.3 to 7.4

> Estimated upgrading time: 30 minutes.

**IMPORTANT NOTE 1** : Before upgrading, please review **all** of your own dependencies, if respective "Laravel 5.6
compatible versions" are already published!

**IMPORTANT NOTE 2** : Before upgrading, please `git commit` all of your changes in order to rollback if something breaks!

Key Changes:
- Apiato now requires PHP 7.1.3 to run - this is because of Laravel's dependency!
- Added Laravel 5.6. See the [Laravel Upgrade Guide](https://laravel.com/docs/master/upgrade) for more details.

Most of the changes introduced by Laravel 5.6 are easy to integrate. However, the following might be a **BREAKING CHANGE**
to your application. Please review the following changes with caution:

> Database: Index Order Of Morph Columns
>
> The indexing of the columns built by the morphs migration method has been reversed for better performance. If you are
> using the morphs method in one of your migrations, you may receive an error when attempting to run the migration's
> down method. If the application is still in development, you may use the migrate:fresh command to rebuild the database
> from scratch. If the application is in production, you should pass an explicit index name to the morphs method.

Manual Tasks to do:
- Update your own dependencies to new L5.6 compatible versions!
- Add the new `LOG_CHANNEL=stack` to your environment file.
- Copy the 2 new Laravel config files (`hashing.php` and `logging.php`) to `/config/` folder in your main project tree.
- Adjust the `TrustProxies` in `App/Ship/Middlewares` accordingly.
- **Check, if the described "breaking change" may affect your application!**
- Check (and eventually manually set) the dependency to `apiato/core : 2.4.*` in your `App/Ship/composer.json` file

Use the [Manual Upgrading Guide](#Manual-Upgrading-Guide) below.

<a name="upgrade-apiato-from-version72To73"></a>
## Upgrade from 7.2 to 7.3

> Estimated upgrading time: 20 minutes.

Use the [Manual Upgrading Guide](#Manual-Upgrading-Guide) below.

<a name="upgrade-apiato-from-version71To72"></a>
## Upgrade from 7.1 to 7.2

> Estimated upgrading time: 10 minutes.

Use the [Manual Upgrading Guide](#Manual-Upgrading-Guide) below.


<a name="upgrade-apiato-from-version70To71"></a>
## Upgrade from 7.0 to 7.1

> Estimated upgrading time: 45 minutes.

Use the [Manual Upgrading Guide](#Manual-Upgrading-Guide) below.




<a name="upgrade-apiato-from-version50To70"></a>
## Upgrade from 5.0 to 7.0

> Estimated upgrading time: 30 minutes.

By upgrading to `Apiato 7.0` you can benefit from all the features provided by `Laravel 5.5`.

*This upgrade is simple.*

You just have to do the following changes found at the [GitHub Comparison Tool](https://github.com/apiato/apiato/compare/5.0...7.0).

Note: Some of the files are not required to be upgraded. And some of them, can be simply replaced by the new files
(copy a file content from the Apiato repository and replace it with your older version).

Hint: You can do a git merge and solve the conflicts, if you don't want to manually do the changes commit by commit.

> **Important Information**: Laravel 5.5 introduces an `auto-discovery` feature that lets you automatically register `ServiceProviders`.
Due to the nature and structure of Apiato applications, this features **is turned off**, because it messes up how `config` files are loaded
in apiato. This means, that you still need to **manually** register 3rd-party `ServiceProviders` in the `ServiceProvider` of a `Container`. (This should be a temporary situation)



<a name="upgrade-apiato-from-version-41To50"></a>
## Upgrade from 4.1 to 5.0

> Estimated upgrading time: 15 minutes.


This guide will show you how to freshly install the new Apiato 5.0, then migrate your old project (built with Apiato 4.1)
to the freshly installed one (Apiato 5.0).

*In the guide w'll be using the term **Old Project** (referring to your old project that was built with Apiato 4.1),
and the term New **Project** (referring to the new freshly installed Apiato 5.0).*

1) Download and install Apiato 5.0. See [Application Setup]({{ site.baseurl }}{% link _docs/getting-started/installation.md %}).

2) Delete the Containers directory `app/Containers` from the new project.

3) Move the Containers directory `app/Containers` from the old project to the new project.

4) Open this file `app/Ship/composer.json` in your old project and only copy the required dependencies, from the old project to the same file in the new project.

5) Again, open the `app/Ship/composer.json` file in the new project, and remove the following dependencies:
`guzzlehttp/guzzle`, `prettus/l5-repository`, `barryvdh/laravel-cors`, `spatie/laravel-fractal`, `vinkla/hashids` and `johannesschobel/apiato-container-installer`.

6) Move and replace the following directories from the old project to the new project: `config`, `public`, `resources`, `database` and `storage`.

7) Open `config/app.php` and replace `App\Ship\Engine\Providers\PortoServiceProvider::class` with `Apiato\Core\Providers\ApiatoProvider::class`.

8) Move `.gitignore`, `phpunit.xml` and `.env` files, from the old project to the new project.

9) Open the `.env` file on the new project and append this to it `API_RATE_LIMIT_ENABLED=true`.

10) Open `phpunit.xml` file of the new project and delete this line from the file `<file>./app/Ship/Engine/Loaders/FactoryMixer/FactoriesLoader.php</file>`.

11) If you had live testing data in your old project inside `app/Ship/Seeders/Data/Testing/Seeders/TestingDataSeeder.php` file, then copy that file content and past it in the new project inside `app/Ship/Seeders/SeedTestingData.php`. You will need to rename the class (not the file) from `TestingDataSeeder` to `SeedTestingData`,
and you will need to update the namespace from `namespace App\Ship\Seeders\Data\Testing\Seeders;` to `namespace App\Ship\Seeders;`.

12) If you ever used the `HashIdTrait`, you need to search and replace this namespace `App\Ship\Engine\Traits\HashIdTrait` with this `Apiato\Core\Traits\HashIdTrait`.

13) Run `composer update`. If you got any error at this step, try to solve it or open an [Issue](https://github.com/apiato/apiato/issues).

14) Move the `.git` directory from the old project to the new one. Add all changes `git add .` then commit `git commit -m 'upgrade Apiato from 4.1 to 5.0'`.

15) Run your tests `vendor/bin/phpunit`.

That's it :)

<a name="how-to-manually-upgrade-older-versions-to-41"></a>
## How to manually upgrade older versions to 4.1?

Use the [Manual Upgrading Guide](#Manual-Upgrading-Guide) below.

<a name="Manual-Upgrading-Guide"></a>
## Manual Upgrading Guide:

> These commands and examples, are compatible with the Apiato 8.0 upgrade. You can just copy/past.

1) Checkout a new branch from your stable branch, to perform the upgrade.

```shell
❯ git checkout -b upgrade-apiato
```

2) Configure a new remote (upstream) that points to the official Apiato repository.

```shell
❯ git remote add upstream https://github.com/apiato/apiato
```

Verify the new upstream repository was added, by listing the current configured remote repositories.

```shell
❯ git remote -vv

origin      git@bitbucket.org:username/my-awesome-api.git (fetch)
origin      git@bitbucket.org:username/my-awesome-api.git (push)
upstream    git@github.com:apiato/apiato.git (fetch)
upstream    git@github.com:apiato/apiato.git (push)
```

3) Checkout a new branch to hold the latest Apiato changes. *This branch will be merged into your `upgrade-apiato` branch created above.*

```shell
❯ git checkout -b apiato-{version}
// Example:   git checkout -b apiato-8.0
```

4) Configure this branch to track an upstream specific branch.

*Replace `{upstream-branch-name}` with the [branch](https://github.com/apiato/apiato/branches) name you want to upgrade to (for example `8.0`).*

```shell
❯ git fetch upstream {upstream-branch-name}
// Example:   git fetch upstream 8.0

❯ git branch --set-upstream-to upstream/{upstream-branch-name}
// Example:   git branch --set-upstream-to upstream/8.0
```

Verify your local branch is tracking the Apiato specified upstream branch.

```shell
❯ git branch -vv

 apiato          77b4d945 [upstream/{upstream-branch-name}] ...
 master          77d302aa [origin/master] ...
```

5) Make this branch identical to the remote upstream branch

```shell
❯ git reset --hard upstream/{upstream-branch-name}
// Example:   git reset --hard upstream/8.0
```

Verify this branch now contains the latest changes from the upstream branch.

```shell
❯ git log
```

6) Switch back to the `upgrade-apiato` branch

```shell
❯ git checkout upgrade-apiato
```

7) Now lets merge the 2 branches. This step can be done in two ways:

**Option A**: Merge all the changes together and solve the conflicts if any. (Recommended)

You can execute the next command with different different parameters, below are 2 options to pick whatever feels safer to you. Do not execute both of them.

A1: This will overwrite your changes with the upstream changes. (Try this first and if your tests failed then you can try the second one).
```shell
❯ git merge --allow-unrelated-histories --strategy-option=theirs apiato-{version}
// Example:   git merge --allow-unrelated-histories --strategy-option=theirs apiato-8.0
```

A2: This will let you solve all the conflicts manually. (Can be the most secure choice, but it's time consuming as well.)
```shell
❯ git merge --allow-unrelated-histories apiato-{version}
// Example:   git merge --allow-unrelated-histories apiato-8.0
```

**Option B**: Manually cherry pick the commits you likes to have:

```shell
❯ git log {upstream-branch-name}
```

(copy each commit ID, one by one)

```shell
❯ git cherry-pick {commit-ID}
```

(if you get any conflict solve it and keep moving)


8) Compare your `.env` with the new `.env-example` and update it.

9) Check everything is working. By running Composer install first then re-running your tests.
- Read the changelog [releases](https://github.com/apiato/apiato/releases) page.
- You may want to update your custom containers dependencies, simply follow the `composer install` error outputs and bump each failing dependency. (Hint: visit each package [releases](https://github.com/apiato/apiato/releases) page, and use the version which supports the supported version of Laravel).
- You may need to fix the failing tests.

```shell
❯ composer install  &&  vendor/bin/phpunit
```

10) Finally, merge the upgrade-apiato (which contains the upgraded changes) with your stable branch (could be master).

```shell
❯ git checkout master
❯ git merge upgrade-apiato

❯ php artisan -V
```

Enjoy :)
