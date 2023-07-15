---
sidebar_position: 1
title: Porto
tags:
  - architecture
  - porto
---

Apiato uses the [Porto](https://github.com/Mahmoudz/Porto) Software Architectural Pattern
to structure the application code.

:::tip
Investing 30 minutes in reading the [Porto Documentation](https://github.com/Mahmoudz/Porto) before getting started is highly recommended and can prove to be a
valuable use of your time.
The document serves as a comprehensive guide and resource for understanding the Apiato project.
:::

## Layers {#layers}

Porto's architecture is based on two layers: Containers and Ship.

### Containers {#containers}
The Containers layer encompasses all the application's business logic code and consists of two primary concepts:
- Section
- Container

#### Section {#section}
A Section refers to a collection of related Containers.
These Containers can represent various entities such as services
(either micro or larger in scale) or subsystems within the main system.

:::note
A Section is not allowed to directly communicate with another Section, except via Events or Commands.
:::

#### Container {#container}
A Container represents a cohesive set of related functionalities.
It can be a specific feature or a wrapper around a RESTful API resource.

:::note
A Container is allowed to depend on other Containers in the same Section.
:::

### Ship {#introduction}
The Ship layer contains the infrastructure code, which consists of shared code utilized by all Containers.

## Typical Project Structure {#typical-container-structure}
```markdown
app
    └── Ship // All shared code between all Containers
    └── Containers
        └── Vendor // All installed and reusable Containers
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
                │    ├── Transporters // DTOs
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
The **Vendor** section is a special Section within the Containers layer that holds installed and reusable Containers.
It serves a similar purpose as the vendor directory located at the root.
Any Section is permitted to depend on the Vendor Section, allowing for the utilization of its Containers.

Read more about the [Container Installer](../pacakges/readme.md) to learn how to install Vendor Containers.
:::
