---
sidebar_position: 1
title: Porto SAP
tags:
  - architecture
  - porto
---

Apiato is built on the [**Porto SAP**](https://mahmoudz.github.io/Porto/) architectural pattern, a design specifically crafted to enhance scalability, maintainability, and reusability. By adopting Porto, Apiato provides a structured, modular way to organize code, which helps developers scale from a simple monolithic setup to complex microservices as the application grows.

### What is Porto SAP?

Porto SAP (Service Architecture Pattern) is a software architecture designed to bring clarity and structure to large applications. It introduces a well-defined organization for code, divided into two primary layers:

- **Containers Layer**: Houses the core business logic and functionality, with components grouped into modular, independent sections.
- **Ship Layer**: Acts as the foundation, holding shared infrastructure, utilities, and configuration files accessible across Containers.

Porto emphasizes modularity and clean separation of concerns, ensuring each part of the application remains maintainable and reusable.

### Understanding the Full Porto Architecture

For a thorough understanding of Porto's structure and benefits, it’s recommended to explore the [Porto Documentation](https://mahmoudz.github.io/Porto/docs/Intro/). The documentation covers essential concepts like:
- **Layers and Components**: A deep dive into the Containers and Ship layers, as well as core components (Routes, Actions, Models, Tasks, and more).
- **Architectural Principles**: Learn about the foundational principles Porto follows, such as SOLID, Domain-Driven Design (DDD), and MVC, that enhance Apiato's architecture.
- **Scalability and Maintainability**: Insights into how Porto’s modular approach helps you build applications that can grow and adapt to changing requirements.

Understanding the Porto architecture is highly recommended for anyone developing with Apiato, as it offers a clear blueprint for creating scalable, manageable applications.

### Layers Diagram

  <img src="https://raw.githubusercontent.com/Mahmoudz/Porto/refs/heads/master/docs/static/img/diagrams/porto_layers.svg" width="100%" alt="Laradock: Full PHP development environment on Docker." />



### Components Diagram

  <img src="https://raw.githubusercontent.com/Mahmoudz/Porto/refs/heads/master/docs/static/img/diagrams/porto_container_interactions.svg" width="100%" alt="Laradock: Full PHP development environment on Docker." />
