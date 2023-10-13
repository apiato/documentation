---
sidebar_position: 2
title: Container
tags:
  - architecture
  - porto
  - container
---

[Containers](https://github.com/Mahmoudz/Porto#containers) are at the core of Apiato.
Within Containers, you'll find the application-specific business logic,
encompassing all the features and functionalities of your application.
This is where you'll spend almost all of your time,
whether it's developing new features or maintaining existing ones.

A fundamental advantage of Apiato is its ability to simplify complex problems by breaking them down into smaller,
more manageable Containers.
Each Container is thoughtfully designed to encapsulate a specific piece of functionality,
which, in turn, makes development, testing, and maintenance more accessible.

By structuring your code in this modular fashion, Apiato empowers you to create a more modular and reusable codebase.
This not only facilitates scaling and long-term maintenance
but also minimizes code duplication throughout different segments of your application.

In summary, a Container represents a cohesive set of related functionalities.
It can be a specific feature or a wrapper around a RESTful API resource.

To generate new containers along with all their [components](components#components),
you may use the `apiato:generate:container` interactive command:

```
php artisan apiato:generate:container
```

## Composer Dependencies

To manage Composer dependencies, follow these guidelines:

- All the Composer dependencies for a specific Container should be defined within that Container's `composer.json` file.
- Dependencies related to the Ship layer should be placed in the root of the Ship layer, in a `composer.json` file.
- Framework core dependencies should be defined in the project's root-level `composer.json` file.

In practice, you can choose to place Composer dependencies in any of these `composer.json` files,
and they will perform the same function.
The choice of location depends on what is most relevant and convenient for your project.

## Readme

Each Container has the option to include a `readme.md` file at its root, which serves to explain the Container's purpose and how to use it.

