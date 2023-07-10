---
sidebar_position: 3
title: Architectural Concepts
tags:
  - architecture
---

* [Porto SAP](#porto)
  * [Containers Layer](#containers)
    * [Section](#section)
    * [Container](#container)
  * [The Ship Layer](#ship)
* [Typical Container Structure](#typical-container-structure)
* [Default Sections](#default-sections)

:::tip
Spending 30 minutes, reading the [Porto Document](https://github.com/Mahmoudz/Porto) before getting started, is a great
investment of time.
:::

# Porto SAP {#porto}

Apiato uses the [Porto](https://github.com/Mahmoudz/Porto) Software Architectural Pattern
to structure the application code.

Porto's architecture consists of 2 layers. Containers and Ship.
## Containers {#containers}
The Containers layer holds all your application business logic code and is divided into 2 main concepts:
- Section
- Container

### Section {#section}
A Section is a group of related Containers.
It can be a service (micro or bigger), or a sub-system within the main system.
> A Section is not allowed to directly communicate with another Section, except via Events or Commands.

### Container {#container}
A Container is a group of related functionality. It can be a feature, or can be a wrapper around a RESTful API
resource.
> A Container is allowed to depend on other Containers in the same Section.

## Ship {#introduction}
The Ship layer holds the infrastructure code (your shared code between all Containers).

## Typical Project Structure {#typical-container-structure}
```markdown
app
    └── Containers
        └── SectionA
        │   └── ContainerA
        │   └── ContainerB
        └── SectionB
        │   └── ContainerA
        └── SectionName
            └── ContainerName
                ├── Actions
                ├── Tasks
                ├── Models
                ├── Values
                ├── Events
                ├── Listeners
                ├── Policies
                ├── Exceptions
                ├── Contracts
                ├── Traits
                ├── Jobs
                ├── Notifications
                ├── Providers
                ├── Configs
                ├── Mails
                │    ├── Templates	
                ├── Data
                │    ├── Migrations
                │    ├── Seeders
                │    ├── Factories
                │    ├── Criteria
                │    ├── Repositories
                │    ├── Validators
                │    ├── Transporters
                │    └── Rules
                ├── Tests
                │    ├── Unit
                │    └── Traits
                └── UI
                     ├── API
                     │    ├── Routes
                     │    ├── Controllers
                     │    ├── Requests
                     │    ├── Transformers
                     │    └── Tests
                     │       └── Functional
                     ├── WEB
                     │    ├── Routes
                     │    ├── Controllers
                     │    ├── Requests
                     │    └── Views
                     └── CLI
                          ├── Commands
                          └── Tests
                              └── Functional
```

## Default Sections {#default-sections}
Apiato ships with 2 default Sections:
- **AppSection**: contains all the default Containers.
- **Vendor**: contains all the installed and reusable Containers.

:::tip
**Vendor** Section is a special Section.  
It only contains installed and reusable Containers, Similar to the vendor directory at the root.  
Any Section is allowed to depend on the Vendor Section.

Read more about the [Container Installer](getting-started/container-installer.md) to learn how to install Vendor Containers.
:::


  
