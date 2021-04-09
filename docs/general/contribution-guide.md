---
title: Contribution Guide
---

> Thank you for your consideration to contribute. This project is powered and driven by its users, and contributions
are **welcome** and will be fully **credited**.

* [Code of Conduct](#code-of-conduct)
* [Versioning](#versioning)
* [Coding Standards](#coding-standards)
* [Git Branching Strategy](#git-branches)
* [Adding New Features](#adding-new-features)
* [Security Vulnerabilities](#security-vulnerabilities)
* [Contribution Guides](#contributing-apiato)
    * [Contribution General Guidelines](#contribution-guidelines)
    * [Contributing to the Apiato Project](#contributing-project)
    * [Contributing to the Documentation](#contributing-documentation)
    * [Contributing to the Code Generator](#contributing-generator)
    * [Making a new Release](#new-release)

## Code of Conduct {#code-of-conduct}

Apiato follows the [Contributor Covenant](https://www.contributor-covenant.org/version/1/4/code-of-conduct) Code of Conduct.

## Versioning {#versioning}

The project is versioned under the [Semantic Versioning](http://semver.org/) guidelines.

## Coding Standards {#coding-standards}

The project is compliant with [PSR-1](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md) Coding Standard,
[PSR-2](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md) Coding Style and some of the
[PSR-12](https://github.com/php-fig/fig-standards/blob/master/proposed/extended-coding-style-guide.md) Styles.

As well as it is compliant with [PSR-4](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md) Autoloader.
*If you notice any compliance oversights, you can send a pull request to address this issue.*

## Git Branching Strategy {#git-branches}

The `master` branch contains the upcoming Apiato release.
While the other branches are for all the stable releases (`7.0`, `7.1`, `8.0`...).

Bug fixes should be sent to both (the latest stable branch) and to `master` branch, unless they fix features that exist only in the upcoming release, then they should only be sent to `master`.

Major new features (and big changes) should always be sent to the `master` branch, which contains the upcoming release.

**Example:**

Assuming that the current stable version is `8.0`. The repository would have at least the following two branches `master` and `8.0`.

If your PR contains a major change, or a braking change, or a new Container then it must be sent to `master` branch.
If your PR fixes a bug in the existing stable release then it should be sent to the latest release branch `8.0`.

> If you always contribute to Apiato, it's better to use the master branch instead of the latest release
branch, to always have the latest features and updates and would be good to merge the latest stable branch into your master from time to time, in case it has some bug fixes.

## Adding New Features {#adding-new-features}

If you have an idea for a new feature, it's a good idea to check out our [issues](https://github.com/apiato/apiato/issues)
or active [pull requests](https://github.com/apiato/apiato/pulls) first to see if the feature is already being worked on.
If not, feel free to submit an issue first (proposing the new feature), asking whether the feature is beneficial to the project. Then go ahead and submit your PR to the master branch.

## Security Vulnerabilities {#security-vulnerabilities}

If you discover a security vulnerability, please email `support@apiato.io`.

___

## Contribution Guides {#contributing-apiato}

### Contribution General Guidelines {#contribution-guidelines}

Important things to remember when contributing:

* **Run tests first** before writing any line of code, run the tests `vendor/bin/phpunit`, and make sure all the tests are passing in your machine.
* **Keep your commits atomic** Each commit should represent a single unit of change. (Also, remember to write helpful commit messages.)
* **Write as many tests** Your changes must be covered with Tests (Functional or Unit). (Code without tests could be accepted in some cases).
* **Ensure updating the documentation** the doc repo is there `https://github.com/apiato/documentation`.
* **Submit one feature/change per pull request.** If you have multiple features/changes you wish to submit, please break them up into separate pull requests.

### Contributing to the Apiato Project {#contributing-project}

This guide will help you contribute to the Apiato project, while working on your personal project.

If you added a feature/function to your local project or created a useful container or fixed a bug. This guide will
show you how to submit that change to Apiato.

#### SETUP

**One time setup**

In this scenario let's assume we have the following:

* `Apiato`     # is the starter/framework project
* `Project-A`  # your personal project your building on top of apiato

1) Create Project A from Apiato

If you want to fix a bug on the latest stable release your PR should be sent to the latest stable branch, thus you need
to pull the latest stable release of Apiato.

`composer create-project apiato/apiato project-a`

If you want to add new features or do anything else, that should be added to the next stable release, you need to pull
the master branch and submit your PR there.

`composer create-project apiato/apiato project-a dev-master`

2) Initialize git in Project A

`git init`

3.a) Set up your origin remote (to point to your project private repository url)

`git remote add origin git@bitbucket.org:username/repo.git`

*if you already have origin remote then update it with*

`git remote set-url origin git@bitbucket.org:username/project-a.git`


3.b) Set up an upstream remote (to point to your fork of the apiato repository)

*assuming you already forked the repository*

`git remote add upstream git@github.com:username/apiato.git`

Now you should have the following remotes:

```
❯ git remote -vv
origin      git@bitbucket.org:username/project-a.git (fetch)
origin      git@bitbucket.org:username/project-a.git (push)
upstream    git@github.com:username/apiato.git (fetch)
upstream    git@github.com:username/apiato.git (push)
```

4) Do your first commit

`git add . && git commit -m 'first commit'`

5.a) Create apiato branch

`git checkout -b apiato`

5.b) Let the apiato branch track the upstream master branch

`git checkout apiato`

`git branch --set-upstream-to upstream/master`

Now you should have the following branches:

```
❯ git branch -vv
 apiato           77b4d945 [upstream/master] ...
 master           77d302aa [origin/master] ...
```

#### USAGE (Contribution Steps)

**Must do every time before you contribute**

1) Update remotes (fetch)

`git fetch --all`

2) Go to the apiato branch

`git checkout apiato`

3) Sync apiato branch with upstream/master

`git reset --hard upstream/master`

4) Now you can cherry-pick the commits you'd like to contribute

4.a) First go to the apiato branch

`git checkout apiato`

4.b) Create a custom branch for your PR

`git checkout -b feature-awesome`  (must be created from apiato)

4.c) Do the cherry-picking

`git log master`      (copy the commit ID)

`git cherry-pick {commit-ID}`

*(repeat for all commits you want to submit)*

5) Push apiato branch to the upstream

`git push upstream feature-awesome`   (replace feature-awesome with your custom branch name)

6) Create a Pull Request (PR) from your forked repository to the apiato official repository.

Make sure you create a PR from your custom branch `feature-awesome` to `master` (or the latest stable release).

*We'll do our best to merge your PR in the shortest time possible. Thanks in advance :)*

Checkout [How to upgrade apiato]({{ site.baseurl }}{% link _docs/miscellaneous/faq.md %}).

### Contributing to the Documentation {#contributing-documentation}

The documentation is generated using [Jekyll](https://jekyllrb.com/) and its content lives in its own repository
[(apiato/documentation)](https://github.com/apiato/documentation), in the `_docs/` folder.

All you have to do is navigate to `_docs/` folder, find the markdown `.md` file that you want to update *(all files
are named as they are in the site menu)*, update or add the text, the commit.

> You do not need to build the site locally. Just edit the markdown files and submit your PR. GitHub will build the site for us.

#### Documentation Tips:

- The styles are in `main.scss` and `_sass/*`.
- The Layout `_layouts/default.html`.
- The docs folders `_docs/*` do not represent the categories displayed in the site.
- To add a new category for a file `category: "New Category"` (usually defined in each documentation readme), you must
add the category name to `_config.yml` under `categories-order` in order to appear in the site.
- To set a link, use the internal links as follows: `[your-text]( { { site.baseurl } } { % link _docs/path/file.md % } )`.
NOTE: remove the spaces between the tags.

#### Run the docs locally:

##### In Docker:

1. `git clone https://github.com/apiato/documentation .`
2. `docker run -v $PWD:/srv/jekyll -p 4000:4000 -it jekyll/jekyll bash`
3. `bundle install`
4. `jekyll serve`
5. Browse `http://localhost:4000`

##### Natively:

1. Install [Jekyll](https://jekyllrb.com/) and its dependencies.
2. `git clone https://github.com/apiato/documentation .`
3. `bundle install`
4. `bundle exec jekyll serve`
5. Browse `http://localhost:4000`
6. Finally `jekyll build`

### Contributing to the Code Generator {#contributing-generator}

The Code generator is in `app/Ship/core/Generator`.

Each component command, "Except the Containers Generator" must extend from the `Apiato\Core\Generator\GeneratorCommand.php`.
This abstract class does all the work for you.

#### Add new component generator.

General Info: the only function that gets called whenever a command is executed is the `handle()` function. This
function exists on the abstract class `Apiato\Core\Generator\GeneratorCommand` which does all the common job for all
the generator commands. For better understanding of how things work. Make sure you read that function.

1 - Add create new command by copying and pasting any of the existing components commands already supported. The
`Generator/Commands/RouteGenerator.php` is a great example.

For each generator you need to implement exactly one method (as it is defined in the respective interface)

- `getUserInputs:`
    This method reads all parameters from the command line or provides a wizard to get information from the user.
    The available options for this generator are specified using the `public $inputs = []` variable in respective generator.
    Note that you do not need to specify the options for `--container` or `--file`, as both are handled directly by the
    Generator itself. Simply add the options that are specifically needed for this generator.

    Be sure to read input with the `checkParameterOrXYZ()` methods, as they automatically check if an option is available.
    Otherwise, they will ask the user for additional input.

    The method must return an array of 3 keys:
  - `path-parameters` are used to replace variables within the path where the generator creates the file.
  - `file-parameters` are used to replace variables within the name of the file to be created.
  - `stub-parameters` are used to replace variables within the stub.


2 - Create the stub to be loaded in `Generator/Stubs`, copy any real component code and build the stub out of it.

3 - Finally register the command in `Generator/GeneratorsServiceProvider.php` using `registerGenerators`, example:

```php
        $this->registerGenerators([
            ActionGenerator::class,
            RouteGenerator::class,
            TaskGenerator::class,
            // ...
        ]);
```

4 - Default FileName & FileExtension(optional)

You may provide another default filename or extension by overriding the `getDefaultFileName()` or `getDefaultFileExtension()`
method, which simply returns a `string`.

### Making a new Release (for admins) {#new-release}

1 - Merge the last [stable branch](https://github.com/apiato/apiato/branches) in the master branch. (To get any new bug fixes.)  
2 - Decide on the next version number for the new release. By checking the current [releases](https://github.com/apiato/apiato/releases).  
3 - Update `VERSION` value in `app/Ship/core/Foundation/Apiato.php` (example: `const VERSION = '8.1.0';`).

#### Minor Release 

Your PR with that minor changes should be submitted and merged into master.

1 - Go to [releases](https://github.com/apiato/apiato/releases) and create a new one from the master branch.  
2 - Make sure you write a complete Changelog, in the release description.  
3 - If you updated the documentation and you should! then visit the [documentation](https://github.com/apiato/documentation) repository and merge the PR into master.

#### Major Release 

Master is the branch that contains all the new changes. 
So we need to create a new branch from master then make a release from that new branch.

1 - From master, checkout a new branch named as the version number you want to release. (Example `8.1`).  
2 - Go to [releases](https://github.com/apiato/apiato/releases) and create a new one from the branch created in the step above. (Example `8.1`).  
3 - Make sure you write a complete Changelog, in the release description.  
4 - Change the [default branch](https://github.com/apiato/apiato/settings/branches) on github to that new branch.  
5 - If you updated the documentation and you should! then visit the [documentation](https://github.com/apiato/documentation) repository and merge the PR into master.
