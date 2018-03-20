---
title: "Postman Environment"
category: "Miscellaneous"
order: 13
---

- [Apiato Postman API & Environment](#title)
    * [Prerequisites](#prerequisites)
    * [Add Apiato Environment & Collection to Postman ](#add-environment-collection)
    * [Using the Postman Apiato API Collection](#using-apiato-collection)
    * [Download Environment & Collection](#download)

<a name="title"></a>
## Apiato Postman API & Environment

If you use Postman to build and explore your API's you will find this predefined Apiato Postman collection a great start to your new Apiato project. Simply download both the Environment and Collection to Postman to get started.

<a name="prerequisites"></a>
### Prerequisites

#### Configure Apiato

It's important that you run the following shell commands to migrate and seed your database. The next command configures a Laravel Passport client. Finally you need to run the last command to grant the Admin user with full permission to access all routes.

```bash
php artisan migrate:refresh --seed
php artisan passport:client --password
php artisan apiato:permissions:toRole admin
```

Be sure to copy and paste your new Client Id and Client Secret into the .env file. Like so...

```bash
CLIENT_WEB_ADMIN_ID={CLIENT_ID}
CLIENT_WEB_ADMIN_SECRET={CLIENT_SECRET}

CLIENT_MOBILE_ADMIN_ID={CLIENT_ID}
CLIENT_MOBILE_ADMIN_SECRET={CLIENT_SECRET}
```

The above steps will ensure you have a functioning Apiato API environment to explore with Postman.

#### Download & Install Postman

Visit the Postman website and download the application.

* [Postman](https://www.getpostman.com/)

<a name="add-environment-collection"></a>
### Add Apiato Environment & Collection to Postman

* [Download Apiato Environment]({{ site.baseurl }}/assets/postman/Apiato_API.postman_environment.json)
* [Download Apiato Collection]({{ site.baseurl }}/assets/postman/Apiato_API.postman_collection.json)

Steps
* Open Postman
* Click on "**import**" button **top left** of Postman application.
* Click on "**Choose files**". Select both the Environment and Collection JSON files and click add.
* Select "**Apiato Environment**" from the Environment dropdown list on the **top right** of the Postman Application.

<a name="using-apiato-collection"></a>
### Using the Postman Apiato API Collection

The first thing you need to do to use the Apiato endpoints is to login to your Apiato API.

* Select the **Apiato API Collection** in the left menu.
* Select **Authentication** folder.
* Select **Login** endpoint.
* Click **Send** button.

The response will return a body with the API access token. Normally you would have to manually add this in a header with each request using `Authorization: Bearer TOKEN`. This however is automatically done for you.

From this point you can now access all endpoints using the **Super Admin** role.

If you would like to test logging into your application with different users then switch to the `body` tab on the `login` endpoint and update the credentials.

```json
{
	"email": "admin@admin.com",
	"password": "admin"
}
```

<a name="download"></a>
### Download Environment & Collection

* [Download Apiato Environment]({{ site.baseurl }}/assets/postman/Apiato_API.postman_environment.json)
* [Download Apiato Collection]({{ site.baseurl }}/assets/postman/Apiato_API.postman_collection.json)
