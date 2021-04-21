---
title: Architecture
---

* [Introduction](#introduction)
* [The Containers Layer](#porto-container-layer)
  * [Create a new Container](#porto-new-container)
    * [Option 1) Using the Code Generator](#porto-new-container-code-generator)
    * [Option 2) Manually](#porto-new-container-manually)
  + [Container Conventions](#containter-conventions)
* [The Ship Layer](#porto-ship-layer)


## Porto SAP {#porto}

### Introduction {#introduction}

[Porto](https://github.com/Mahmoudz/Porto) is the recommended architecture for building apps on Apiato.

Apiato also supports the popular MVC architecture (with a little modifications). The Apiato features are written using Porto, but can be used by any architecture.

### About Porto

Porto is an architecture that consists of 2 layers the **Containers** layer and **Ship** layer.

The [**Container**](https://github.com/Mahmoudz/Porto#2-containers-layer) layer holds your application business logic code.
While [**Ship**](https://github.com/Mahmoudz/Porto#1-ship-layer) layer holds the infrastructure code (your shared code between all Containers).

Containers are grouped into [**Sections**](https://github.com/Mahmoudz/Porto#containers-sections) to easily move them around and reuse them _(A section is equivalent to a bounded context from the Domain-driven design)_.

By default, Apiato comes with two Sections: 

- **App Section**: The default section, containing all your containers. You can create additional sections whenever needed.
- **Vendor Section**: for downloaded reusable containers. Similar to the vendor directory.    

The Apiato features themselves are developed using Porto, so their code lives inside Containers.

---

Spending 30 minutes, reading the [Porto Document](https://github.com/Mahmoudz/Porto) before getting started, is a great
investment of time.

---

### The Containers Layer {#porto-container-layer}

Read about the Containers layer [here](https://github.com/Mahmoudz/Porto#Containers-Layer).

#### Create a new Container {#porto-new-container}

##### Option 1) Using the Code Generator: {#porto-new-container-code-generator}

`php artisan apiato:generate:container`

Refer to the [code generator](../core-features/code-generator) page for more details.

##### Option 2) manually: {#porto-new-container-manually}

1. Create a folder in the Containers folder.
2. Start creating components and adding them in it.

*(The Ship engine will autoload and register everything automatically for you)*.

For the auto-loading to work flawlessly you MUST adhere to the component's naming conventions and directories. So you
need to refer to the [documentation page](https://github.com/Mahmoudz/Porto) of the component when creating it.

#### Container Conventions {#containter-conventions}

- Containers name SHOULD start with Capital. Use CamelCase to rename Containers.
- Namespace should be the same as the container name, (if container name is "Printer" the namespace should be
`App\Containers\SectionName\Printer`).
- Container MAY be named anything, however a good practice is to name it to its most important Model name.
*Example: If the User Story is (User can create a Store and Store can have Items) then we you could have 3
Containers (User, Store and Item).*

### The Ship Layer {#porto-ship-layer}

Read about the Ship layer **[here](https://github.com/Mahmoudz/Porto#Port-Layer)**
