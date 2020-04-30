---
title: "Installation"
category: "Getting Started"
order: 2
---

* [A) Apiato Installation](#App)
	* [1) Code Setup](#Code-Setup)
		* [Option 1: Automatically via Composer](#App-Composer)
		* [Option 2: Manually](#App-Git)
	* [2) Database Setup](#Setup-Database)
	* [3) OAuth Setup](#Prepare-OAuth)
	* [4) Documentation Setup](#Documentation)
	* [5) Testing Setup](#Testing)
* [B) Environment Setup](#Development-Environment)
	* [Option 1: Using Docker and Laradock](#Dev-Env-Opt-A)
	* [Option 2: Using Vagrant and Homestead](#Dev-Env-Opt-B)
	* [Option 3: Using MAMP/WAMP or something else](#Dev-Env-Opt-C)
* [C) Play](#Play)


<a name="App"></a>
## A) Apiato Application Installation

**Apiato** can be installed automatically with Composer (recommended) or manually (with Git or direct download):

<a name="Code-Setup"></a>
### 1) Code Setup

<a name="App-Composer"></a>
#### 1.A) Automatically via Composer

1) Clone the repo, install dependencies and setup the project:

Option 1: Latest [stable](https://github.com/apiato/apiato/releases/latest):

```shell
composer create-project apiato/apiato my-api
```

Option 2: On going [development](https://github.com/apiato/apiato/commits/master) branch "dev master" *(unstable)*:
*This gives you features from the upcoming releases. But you need to keep syncing your project with the upstream master
branch and running `composer install` when changes occurs.*

```shell
composer create-project apiato/apiato my-api dev-master
```

2) Edit your `.env` variables to match with your environment (Set Database credentials, App URL, ...).

3) Continue from [2) Database Setup](#Setup-Database) below.

<a name="App-Git"></a>
#### 1.B) Manually

You can download the Code directly from the repository as `.ZIP` file or clone the repository using `Git` (recommended):

1) Clone the repository using `Git`:

 ```shell
git clone https://github.com/apiato/apiato.git
 ```

> **Hint** <br>
> If using [Laradock](http://laradock.io/), you can run all the commands below from the `workspace` Container. <br>
> First you need to run the required tools by running `docker-compose up -d nginx mysql php-fpm workspace redis` from the Laradock folder _(of course you can add any other tools you need)_. <br>
> Then enter the  `workspace` Container by running `docker-compose exec workspace bash`. <br>
> For more details see the section **Using Docker (with Laradock)** below.

2) Install all dependency packages (including Containers dependencies):

```shell
composer install
```

3) Create `.env` file and copy the content of `.env.example` inside it.

```shell
cp .env.example .env
```

*Check all the variables and edit whatever you want.*

4) Generate a random key `APP_KEY`

```shell
php artisan key:generate
```

5) delete the `.git` folder from the root directory and initialize your own with `git init`.

<a name="Setup-Database"></a>
### 2) Database Setup

1) Migrate the Database:

Run the migration artisan command:

```shell
php artisan migrate
```

2) Seed the database with the artisan command:

```shell
php artisan db:seed
```

3) Optional. By default Apiato seeds a "Super User", given the default `admin` role (the role has no Permissions set
to it).

To give the `admin` role, access to all the seeded permissions in the system, run the following command, at any time.

```
php artisan apiato:permissions:toRole admin
```

<a name="Prepare-OAuth"></a>
### 3) OAuth 2.0 Setup

1) Create encryption keys to generate secure access tokens and create "personal access" and "password grant" clients
which will be used to generate access tokens:

```shell
php artisan passport:install
```

<a name="Documentation"></a>
### 4) Documentation Setup

If you are planning to use ApiDoc JS then proceed with this setup, else skip this and use whatever you prefer:

1) Install [ApiDocJs](http://apidocjs.com/) using NPM or your favorite dependencies manager:

```shell
npm install
```

Or install it alone by just running `npm install apidoc` on the root of the project, after checking the `package.json` file on the root.

2) Run `php artisan apiato:apidoc`

Behind the scene `apiato:apidoc` is executing a command like this

```
apidoc -c app/Containers/Documentation/ApiDocJs/public -f public.php -i app -o public/api/documentation
```

Alternatively you can generate a swagger doc from the apidoc comments, to do so run `php artisan apiato:swagger`.

##### Visit [API Docs Generator]({{ site.baseurl }}{% link _docs/features/api-docs-generator.md %}) for more details.

<a name="Testing"></a>
### 5) Testing Setup

1) Open `phpunit.xml` and make sure the environments are correct for your domain.

2) run the tests

```shell
vendor/bin/phpunit
```

<a name="Development-Environment"></a>
## B) Development Environment Setup

You can run **Apiato** on your favorite environment. Below you'll see how you can run it on top of
[Vagrant](https://www.vagrantup.com/) (using [Laravel Homestead](https://laravel.com/docs/master/homestead)) or
[Docker](https://www.docker.com/) (using [Laradock](https://github.com/Laradock/laradock)).

We'll see how to use both tools and you can pick one, or you can use other options like
[Larvel Valet](https://laravel.com/docs/valet), [Laragon](https://laragon.org/) or even run it directly on your machine.

> **Heads up!** <br>
> The ICANN has now officially approved `.dev` as a generic top level domain (gTLD). Therefore, it is **not** recommended
> to use `.dev` domains any more in your local development setup! Our docs has been changed to use `.test`
> instead of `.dev`, however, you may change it to `.example`, or `.localhost` or whatever suits your needs. [Read more](http://www.faqs.org/rfcs/rfc2606.html).

<a name="Dev-Env-Opt-A"></a>
### A.1) Using Docker (with Laradock)

**Laradock** is a Docker PHP development environment. It facilitate running PHP Apps on Docker.

1) Install [Laradock](https://github.com/LaraDock/laradock#installation).

2) Navigate into the `laradock` directory:

```shell
cd laradock
```
This directory contains a `docker-compose.yml` file. (From the LaraDock project).

2.1) If you haven't done so, rename `env-example` to `.env`.

```shell
cp env-example .env
```

3) Run the Docker containers:

```shell
docker-compose up -d nginx mysql redis beanstalkd
```

4) Make sure you are setting the `Docker IP` as `Host` for the `DB` and `Redis`  in your `.env` file.

5) Add the domain to the Hosts file:

5.1) Open the hosts file on your local machine `/etc/hosts`.

*We'll be using `apiato.test` as local domain (you can change it if you want).*

5.2) Map the domain and its subdomains to 127.0.0.1:

```text
127.0.0.1  apiato.test
127.0.0.1  api.apiato.test
127.0.0.1  admin.apiato.test
```

If you're using NGINX or Apache, make sure the **server_name** (in case of NGINX) or **ServerName** (in case of Apache)
in your the server config file, is set to the following `apiato.test api.apiato.test admin.apiato.test`.
*(Also don't forget to point the **Root** or **DocumentRoot** to the public directory inside apiato `apiato/public`)*.

<a name="Dev-Env-Opt-B"></a>
### A.2) Using Vagrant (with Laravel Homestead)

1) Configure Homestead:

1.1) Open the Homestead config file:

```shell
homestead edit
```

1.2) Map the `api.apiato.test` domain to the project public directory - Example:

```text
sites:
	- map: api.apiato.test
  	  to: /{full-path-to}/apiato/public
```

1.3) You can also map other domains like `apiato.test` and `admin.apiato.test` to other web apps:

```text
	- map: apiato.test
  	  to: /{full-path-to}/clients/web/user
	- map: admin.apiato.test
  	  to: /{full-path-to}/clients/web/admin
```

Note: in the example above the `/{full-path-to}/clients/web/***` are separate apps, who live on their own repositories
and in different folder then the Apiato one. If your Admins, Users or other type of Apps are within Apiato, then you
must point them all to the Apiato project folder `/{full-path-to}/apiato/public`. So in that case you would have
something like this:

```text
    - map: api.apiato.test
      to: /{full-path-to}/apiato/public
    - map: apiato.test
      to: /{full-path-to}/apiato/public
    - map: admin.apiato.test
      to: /{full-path-to}/apiato/public
```

2) Add the domain to the Hosts file:

2.1) Open the hosts file on your local machine `/etc/hosts`.

*We'll be using `apiato.test` as local domain (you can change it if you want).*

2.2) Map the domain and its subdomains to the Vagrant IP Address:

```text
192.168.10.10   apiato.test
192.168.10.10   api.apiato.test
192.168.10.10   admin.apiato.test
```

If you're using NGINX or Apache, make sure the **server_name** (in case of NGINX) or **ServerName** (in case of Apache)
in your the server config file, is set to the following `apiato.test api.apiato.test admin.apiato.test`.
*(Also don't forget to set your **root** or **DocumentRoot** to the public directory inside apiato `apiato/public`)*.

2.3) Run the Virtual Machine:

```shell
homestead up --provision
```

*If you see `No input file specified` on the sub-domains!
try running this command `homestead halt && homestead up --provision`.*

<a name="Dev-Env-Opt-C"></a>
### A.3) Using something else

If you're not into virtualization solutions, you can setup your environment directly on your machine. Check the
[software's requirements list]({{ site.baseurl }}{% link _docs/getting-started/requirements.md %}).

<a name="Play"></a>
## C) Let's Play

Now let's see it in action

1.a. Open your web browser and visit:

- `http://apiato.test` You should see an HTML page, with `Apiato` in the middle.
- `http://admin.apiato.test` You should see an HTML Login page.

1.b. Open your HTTP client and call:

- `http://api.apiato.test/` You should see a JSON response with message: `"Welcome to apiato."`,
- `http://api.apiato.test/v1` You should see a JSON response with message: `"Welcome to apiato (API V1)."`,

2) Make some HTTP calls to the API:

*To make the calls you can use [Postman](https://www.getpostman.com/), [HTTPIE](https://github.com/jkbrzt/httpie) or
any other tool you prefer.*

Let's test the (user registration) endpoint `http://api.apiato.test/v1/register ` with **cURL**:

```shell
curl -X POST -H "Accept: application/json" -H "Cache-Control: no-cache" -F "email=mahmoud@zalt.me" -F "password=so-secret" -F "name=Mahmoud Zalt" "http://api.apiato.test/v1/register"
```

You should get response like this:

```json
Access-Control-Allow-Origin → ...
Cache-Control → ...
Connection → keep-alive
Content-Language → en
Content-Type → application/json
Date → Wed, 11 Apr 2000 22:55:88 GMT
Server → nginx
Transfer-Encoding → chunked
Vary → Origin
X-Powered-By → PHP/7.7.7
X-RateLimit-Limit → 30
X-RateLimit-Remaining → 29

{
  "data": {
    "object": "User",
    "id": 77,
    "name": "Mahmoud Zalt",
    "email": "apiato@mail.com",
    "confirmed": null,
    "nickname": "Mega",
    "gender": "male",
    "birth": null,
    "social_auth_provider": null,
    "social_id": null,
    "social_avatar": {
      "avatar": null,
      "original": null
    },
    "created_at": {
      "date": "2017-04-05 16:17:26.000000",
      "timezone_type": 3,
      "timezone": "UTC"
    },
    "updated_at": {
      "date": "2017-04-05 16:17:26.000000",
      "timezone_type": 3,
      "timezone": "UTC"
    },
    "roles": {
      "data": []
    }
  }
}
```
