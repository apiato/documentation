---
sidebar_position: 2
title: Components
tags:
  - architecture
  - porto
  - component
---

In the [Container layer](#container), there is a collection of predefined Components,
each assigned with a specific responsibility.
It is essential that all code you develop is organized within these Components.

Porto provides an extensive list of these Components, along with guidelines for their usage. Adhering to these guidelines ensures a smooth development process.

Components play a crucial role in maintaining consistency and enhancing code maintainability. They provide a clear structure, allowing you to easily locate each piece of code.

Components in Porto are categorized into two types: Main Components and Optional Components.

Main Components are essential for the Container's functionality and must be used to achieve its core purpose.

On the other hand, Optional Components offer additional functionality that can be incorporated into the Container. Their usage is discretionary, depending on specific requirements.

By leveraging these Components, you can build a modular and reusable codebase, facilitating future maintenance and modifications.

Components ensure consistency and make your code easier to maintain
as you already know where each piece of code should be found.

Components Types
Every Container consists of a number of Components, in Porto the Components are split into two Types: Main Components and Optional Components.

Main Components: the essential Components that you will need for your Container.
These Components are mandatory and are meant to be used to achieve the main functionality of your Container.

Optional Components: these are Components that you can use to add additional functionality to your Container.
They are optional, and you can choose to use them or not, depending on your requirements.

By using these Components, you can create a modular and reusable codebase,
making it easier to maintain and modify your code in the future.

:::tip
To learn more about how all this fits together, read the [Request Lifecycle](./request-lifecycle.md) page.
:::
