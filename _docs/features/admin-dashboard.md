---
title: "Admin Dashboard"
category: "Features"
order: 110
---

- [The provided Admin route](#the-provided-admin-route)
- [How it works](#how-it-works)
- [Change default Admin credentials](#change-default-admin-credentials)

<br>
<br>


*Apiato does not recommend serving HTML pages. Instead you should build your own Frontend App completely isolated from the Backend code.*

<a name="the-provided-admin-route"></a>

## The provided Admin route

- http://admin.apiato.develop/dashboard

- http://admin.apiato.develop/login

- http://admin.apiato.develop/logout

<a name="how-it-works"></a>

## How it works

Visiting `http://admin.apiato.develop/dashboard` will redirect you to a login page for admins.

the default credentials are:

- email: **admin@admin.com**

- password: **admin**

<a name="change-default-admin-credentials"></a>

## Change default Admin credentials

you can change these default values from the seeder class in the Authorization container: `app/Containers/Authorization/Data/Seeders/RolesAndPermissionsSeeder.php`.
