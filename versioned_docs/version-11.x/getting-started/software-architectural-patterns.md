---
title: Architecture
---

* [Porto Introduction](#introduction)
  * [The Containers Layer](#introduction)
    * [Container](#porto)
    * [Section](#porto)
  * [The Ship Layer](#introduction)
* [Create a custom Container](#porto-new-container)
  * [Using the Code Generator](#porto-new-container-code-generator)
  * [Container Conventions](#containter-conventions)



## Porto SAP {#porto}

### Introduction {#introduction}

[Porto](https://github.com/Mahmoudz/Porto) is the default and recommended architecture for building apps on Apiato.

Apiato also supports the popular MVC architecture (with a little modifications). The Apiato features are written using Porto, but can be used by any architecture.


### About Porto  {#porto}

Porto is an architecture that consists of 2 layers the **Containers** layer and **Ship** layer.

- [**The Containers layer**](https://github.com/Mahmoudz/Porto#2-containers-layer) holds all your application business logic code.
- [**The Ship layer**](https://github.com/Mahmoudz/Porto#1-ship-layer) holds the infrastructure code (your shared code between all Containers).

The Containers layer consists of **Containers**. These containers are grouped into isolated **Sections**, to easily move them around.

- [**A Container**](https://github.com/Mahmoudz/Porto#Containers) can be a **feature**, or can be a wrapper around a RESTful API resource, or anything else. A container is allowed to depend on other containers.
- [**A Section**](https://github.com/Mahmoudz/Porto#Sections) (is a group of related containers), it can be **service** _(micro or bigger)_, or a sub-system within the main system, or antyhing else. A Section is not allowed to directly communicate with another service, except via Events or Commands.

The default Apiato Sections:

- **The App Section**: is the only default section Apiato provides, it contains all the default containers. You can create additional sections anytime, and rename them to anything you want. (ex: Inventory Section, Shipping Section, Order Section, Payment Section...)
- **The Vendor**: is a special Section, it only contains installed and reusable Containers. Similar to the vendor directory at the root. Any Section is allowed to depend on the Vendor Section.

---

Spending 30 minutes, reading the [Porto Document](https://github.com/Mahmoudz/Porto) before getting started, is a great
investment of time.

---


### Create a custom Container {#porto-new-container}

#### Using the Code Generator: {#porto-new-container-code-generator}

```
php artisan apiato:generate:container
```

Refer to the [code generator](../core-features/code-generator) page for more details.

#### Container Conventions {#containter-conventions}

- Containers name SHOULD start with Capital. Use CamelCase to rename Containers.
- Namespace should be the same as the container name, (if container name is "Printer" the namespace should be
  `App\Containers\SectionName\Printer`).
- Container MAY be named anything, however a good practice is to name it to its most important Model name.
  *Example: If the User Story is (User can create a Store and Store can have Items) then we you could have 3
  Containers (User, Store and Item).*
  
