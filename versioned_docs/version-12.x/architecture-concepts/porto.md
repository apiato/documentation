---
sidebar_position: 1
title: Porto
tags:
  - architecture
  - porto
---

[Porto SAP](https://mahmoudz.github.io/Porto/) is a modern software architectural pattern
that offers developers a comprehensive set of guidelines,
principles, and patterns to organize their code in a highly maintainable and reusable way.
The primary goal of Porto is to help developers create software that is scalable,
flexible, and easy to maintain over time. [Read more](https://mahmoudz.github.io/Porto/docs/Intro).

## Layers

Porto's architecture is based on two layers: Containers and Ship.

### Containers
The Containers layer encompasses all the application's business logic code and consists of two primary concepts:
- Section
- Container

#### Section
A Section refers to a collection of related Containers.
These Containers can represent various entities such as services
(either micro or larger in scale) or subsystems within the main system.

:::note
A Section is not allowed to directly communicate with another Section, except via Events or Commands.
:::

#### Container
A Container represents a cohesive set of related functionalities.
It can be a specific feature or a wrapper around a RESTful API resource.

:::note
A Container is allowed to depend on other Containers in the same Section.
:::

### Ship
The Ship layer contains the infrastructure code, which consists of shared code utilized by all Containers.

## Typical Project Structure
```markdown
app
├── Containers
│   ├── Section
│   │   └── Container
│   │       ├── Actions
│   │       ├── Configs
│   │       ├── Data
│   │       │   ├── Factories
│   │       │   ├── Migrations
│   │       │   ├── Repositories
│   │       │   └── Seeders
│   │       ├── Mails
│   │       │   └── Templates
│   │       ├── Middlewares
│   │       ├── Models
│   │       ├── Notifications
│   │       ├── Providers
│   │       ├── Tasks
│   │       ├── Tests
│   │       ├── Traits
│   │       └── UI
│   │           ├── API
│   │           │   ├── Controllers
│   │           │   ├── Requests
│   │           │   ├── Routes
│   │           │   └── Transformers
│   │           ├── WEB
│   │           │   ├── Controllers
│   │           │   ├── Requests
│   │           │   ├── Routes
│   │           │   └── Views
│   │           └── CLI
│   │               └── Commands
│   └── Vendor `// All installed and reusable Containers`
│       ├── ContainerA
│       └── ContainerB
└── Ship `// All shared code between all Containers`
    ├── Broadcasts
    ├── Commands
    ├── Configs
    ├── Contracts
    ├── Criterias
    ├── Events
    ├── Exceptions
    ├── Generators
    ├── Helpers
    ├── Kernels
    ├── Listeners
    ├── Mails
    ├── Middlewares
    ├── Migrations
    ├── Notifications
    ├── Parents
    ├── Providers
    ├── Seeders
    └── Tests
```
## Default Sections
Apiato ships with two default Sections:
- **AppSection**: contains all the default Containers.
- **Vendor**: contains all the installed and reusable Containers.

:::tip
The **Vendor** section is a special Section within the Containers layer that holds installed and reusable Containers.
It serves a similar purpose as the vendor folder located at the root.
Any Section is permitted to depend on the Vendor Section, allowing for the utilization of its Containers.

Read more about the [Container Installer](../pacakges/readme.md) to learn how to install Vendor Containers.
:::
