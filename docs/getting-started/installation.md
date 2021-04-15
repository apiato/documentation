---
title: Installation
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
	* [Option 1: Using Docker and Laradock](#Using-Docker-With-Laradock)
	* [Option 2: Using Vagrant and Homestead](#Using-Vagrant-Using-Homestead)
	* [Option 3: Using MAMP/WAMP or something else](#Using-anything-else)
* [C) Play](#Play)


## A) Apiato Application Installation {#App}

### 1) Code Setup {#Code-Setup}

```shell
composer create-project apiato/apiato my-api
```

### 2) Database Setup {#Setup-Detabase}

1) Migrate the Database:

Run the migration artisan command:

```shell
php artisan migrate
```

2) Seed the database with the artisan command:

```shell
php artisan db:seed
```

3) Optional. By default, Apiato seeds a "Super User", given the default `admin` role (the role has no Permissions set
to it).

To give the `admin` role, access to all the seeded permissions in the system, run the following command, at any time.

```
php artisan apiato:permissions:toRole admin
```

### 3) OAuth 2.0 Setup {#Prepare-OAuth}

1) Create encryption keys to generate secure access tokens and create "personal access" and "password grant" clients
which will be used to generate access tokens:

```shell
php artisan passport:install
```

### 4) Documentation Setup {#Documentation}

1) Install [ApiDocJs](http://apidocjs.com/) using NPM or your favorite dependencies manager:

```shell
npm install
```

2) Run `php artisan apiato:apidoc`

##### Visit [API Docs Generator](../features/api-docs-generator) for more details.

### 5) Testing Setup {#Testing}

1) Open `phpunit.xml` and make sure the environments are correct for your domain.

2) run the tests

```shell
vendor/bin/phpunit
```

## B) Development Environment Setup {#Development-Environment}

You can run **Apiato** on your favorite environment. Below you'll see how you can run it on top of
[Vagrant](https://www.vagrantup.com/) (using [Laravel Homestead](https://laravel.com/docs/master/homestead)) or
[Docker](https://www.docker.com/) (using [Laradock](https://github.com/Laradock/laradock)).

We'll see how to use both tools and you can pick one, or you can use other options like
[Larvel Valet](https://laravel.com/docs/valet), [Laragon](https://laragon.org/) or even run it directly on your machine.

> **Heads up!** <br/>
> The ICANN has now officially approved `.dev` as a generic top level domain (gTLD). Therefore, it is **not** recommended
> to use `.dev` domains anymore in your local development setup! We use `.test`, however, you may change it to `.example`, or `.localhost` or whatever suits your needs. [Read more](http://www.faqs.org/rfcs/rfc2606.html).

### A.1) Using Docker (with Laradock) {#Using-Docker-With-Laradock}

**Laradock** is a Docker PHP development environment. It facilitates running PHP Apps on Docker.

Install [Laradock](https://github.com/LaraDock/laradock#installation).

Navigate into the `laradock` directory:

```shell
cd laradock
```
This directory contains a `docker-compose.yml` file. (From the LaraDock project).

If you haven't done so, rename `env-example` to `.env`.

```shell
cp env-example .env
```

Run the Docker containers:

```shell
docker-compose up -d nginx mysql redis beanstalkd
```

Make sure you are setting the `Docker IP` as `Host` for the `DB` and `Redis`  in your `.env` file.

Add the domain to the Hosts file: `/etc/hosts`. We'll be using `apiato.test` as local domain (you can change it if you want).

Map the domain and its subdomains to 127.0.0.1:

```text
127.0.0.1  apiato.test
127.0.0.1  api.apiato.test
127.0.0.1  admin.apiato.test
```

If you're using NGINX or Apache, make sure the **server_name** (in case of NGINX) or **ServerName** (in case of Apache)
in your server config file, is set to the following `apiato.test api.apiato.test admin.apiato.test`.
*(Also don't forget to point the **Root** or **DocumentRoot** to the public directory inside apiato `apiato/public`)*.

### A.2) Using Vagrant (with Laravel Homestead) {#Using-Vagrant-Using-Homestead}

**Laravel Homestead** is installed by default. If you have removed homestead you can install it using  
```shell
composer require laravel/homestead --dev
```  
  
#### Configure Homestead:

Create the Homestead config file:

```shell
vendor/bin/homestead make
```

Map the `api.apiato.test` domain to the project public directory - Example:

```text
sites:
	- map: api.apiato.test
  	  to: /{full-path-to}/apiato/public
```

You can also map other domains like `apiato.test` and `admin.apiato.test` to other web apps:

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

#### Configure Hosts:

Open the hosts file on your local machine `/etc/hosts`.

*We'll be using `apiato.test` as local domain (you can change it if you want).*

Map the domain and its subdomains to the Vagrant IP Address:

```text
192.168.10.10   apiato.test
192.168.10.10   api.apiato.test
192.168.10.10   admin.apiato.test
```

If you're using NGINX or Apache, make sure the **server_name** (in case of NGINX) or **ServerName** (in case of Apache)
in your server config file, is set to the following `apiato.test api.apiato.test admin.apiato.test`.
*(Also don't forget to set your **root** or **DocumentRoot** to the public directory inside apiato `apiato/public`)*.

Run the Virtual Machine:

```shell
homestead up --provision
```

*If you see `No input file specified` on the sub-domains!
try running this command `homestead halt && homestead up --provision`.*

### A.3) Using anything else {#Using-anything-else}

If you're not into virtualization solutions, you can set up your environment directly on your machine. Check the
[software's requirements list](../).

## C) Let's Play {#Play}

Now let's see it in action

Open your web browser and visit:

- `http://apiato.test` You should see an HTML page, with `Apiato` in the middle.
- `http://api.apiato.test` You should see a response like this:
```json
[
"Welcome to Apiato"
]
```

Open your HTTP client and call:

- `http://api.apiato.test/` You should see a JSON response with message: `"Welcome to apiato."`,
- `http://api.apiato.test/v1` You should see a JSON response with message: `"Welcome to apiato (API V1)."`,

Make some HTTP calls to the API:

*To make the calls you can use [Postman](https://www.getpostman.com/), [HTTPIE](https://github.com/jkbrzt/httpie) or
any other tool you prefer.*

Let's test the (user registration) endpoint `http://api.apiato.test/v1/register ` with **cURL**:

```shell
curl -X POST -H "Accept: application/json" -H "Cache-Control: no-cache" -F "email=John@Doe.me" -F "password=so-secret" -F "name=John Doe" "http://api.apiato.test/v1/register"
```

You should get a response like this:

Header:
```text
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
```
Body:
```json
{
  "data": {
    "object": "User",
    "id": "7VgmkMw7rR2pWO5j",
    "name": "John Doe",
    "email": "John@Doe.me",
    "email_verified_at": null,
    "gender": null,
    "birth": null,
    "created_at": "2021-04-12T13:33:24.000000Z",
    "updated_at": "2021-04-12T13:33:24.000000Z",
    "readable_created_at": "1 second ago",
    "readable_updated_at": "1 second ago"
  },
  "meta": {
    "include": [
      "roles"
    ],
    "custom": []
  }
}
```
