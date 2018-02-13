---
title: "Upgrade Guide"
category: "Miscellaneous"
order: 12
---

- [Upgrade from 7.3 to 7.4](#upgrade-apiato-from-version73To74)
- [Upgrade from 7.2 to 7.3](#upgrade-apiato-from-version72To73)
- [Upgrade from 7.1 to 7.2](#upgrade-apiato-from-version71To72)
- [Upgrade from 7.0 to 7.1](#upgrade-apiato-from-version70To71)
- [Upgrade from 5.0 to 7.0](#upgrade-apiato-from-version50To70)
- [Upgrade from 4.1 to 5.0](#upgrade-apiato-from-version-41To50)
- [How to manually upgrade older versions to 4.1?](#how-to-manually-upgrade-older-versions-to-41)
- [Manual Upgrading Guide](#Manual-Upgrading-Guide)
- [Upcoming Release Notes](#Upcoming-Release)

<br>

<a name="upgrade-apiato-from-version73To74"></a>
## Upgrade from 7.3 to 7.4

> Estimated upgrading time: 30 minutes.

**IMPORTANT NOTE 1** : Before upgrading, please review **all** of your own dependencies, if respective "Laravel 5.6 compatible versions" are 
already published!

**IMPORTANT NOTE 2** : Before upgrading, please `git commit` all of your changes in order to rollback if something breaks! 

Key Changes:
- Apiato now requires PHP 7.1.3 to run - this is because of Laravel's dependency!
- Added Laravel 5.6. See the [Laravel Upgrade Guide](https://laravel.com/docs/5.6/upgrade) for more details.

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

Note: Some of the files are not required to be upgraded. And some of them, can be simply replaced by the new files (copy a file content from the Apiato repository and replace it with your older version).

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

*This guide will show you, how to keep you project synced with the latest master branch of Apiato.
And the same method can be used to upgrade older version to the newer one*

1) Setup an upstream remote (to point to your fork of the apiato repository)

```shell
git remote add upstream https://github.com/apiato/apiato
```

```shell
❯ git remote -vv
origin      git@bitbucket.org:username/project-a.git (fetch)
origin      git@bitbucket.org:username/project-a.git (push)
upstream    git@github.com:apiato/apiato.git (fetch)
upstream    git@github.com:apiato/apiato.git (push)
```

2) Create apiato branch

```shell
git checkout -b apiato
```

3) Let the apiato branch track the upstream master branch

```shell
git branch --set-upstream-to upstream/master
```

> If you are upgrading to specific version (not the latest stable version "Master") select your
> version [branch](https://github.com/apiato/apiato/branches), set your upstream to track that
> branch, example if you're upgrading to 7.2 set it to `git branch --set-upstream-to upstream/7.2`.

```shell
❯ git branch -vv
 apiato          77b4d945 [upstream/{branch-name}] ...
 master          77d302aa [origin/master] ...
```

> Should an **error** occur while performing this step, execute step 4, then try again.
> Example:
```shell
❯ git branch --set-upstream-to upstream/master
error: the requested upstream branch 'upstream/master' does not exist
```
4) Fetch everything from upstream

```shell
git fetch upstream
```

5) Let your apiato branch get the upstream logs

```shell
git reset --hard upstream/master
```
> If you selected a specific branch in step 3 above, reset to that branch example (`git reset --hard upstream/7.2`)

6) Now you can move the updates to your master branch in 2 ways:


**Option A**: merge the entire apiato branch with master and solve the conflicts manually. *(easier and faster)*

```shell
git checkout master
```

The git merging can be done in many ways:

- Merge then solve the conflict manually `git merge --allow-unrelated-histories apiato`.
- Merge and keep your project changes `git merge --allow-unrelated-histories -X ours apiato`.
- Merge and overwrite your project with the apiato changes `git merge --allow-unrelated-histories -X theirs apiato`.


*-X is a shortcut for --strategy-option=*




**Option B**: Manually cherry pick from apiato to master only the commits you need:

```shell
git checkout master
```

```shell
git log apiato
```
(to copy each commit ID, one by one)

```shell
git cherry-pick {commit-ID}
```
(if you get any conflict solve it and keep moving)

<br>

Checkout the project setup in [Contributing to Apiato]({{ site.baseurl }}{% link _docs/miscellaneous/contribution.md %}).

7) Run Composer update then run all the tests, and fix the occurring problems, if there's any.
You may want to update some of your custom containers dependencies as well.

```shell
composer update && vendor/bin/phpunit
```

See the [Upcoming Release Notes](#Upcoming-Release) for details about the changes.




<a name="Upcoming-Release"></a>
## Upcoming Release Notes

Checkout the [ChangeLog](https://github.com/apiato/apiato/blob/master/CHANGELOG.md) notes, for the upcoming features and changes.
