---
sidebar_position: 4
title: Request Lifecycle
tags:
  - architecture
  - porto
  - lifecycle
---

When using any tool in the "real world", you feel more confident if you understand how that tool works.
Application development is no different.
When you understand how your development tools function, you feel more comfortable and confident using them.

The following steps describe a basic API call scenario:

1. The User calls an `Endpoint` in a `Route` file.
2. `Endpoint` calls a `Middleware` to handle the Authentication.
3. `Endpoint` calls its corresponding `Controller` function.
4. The `Request` object, which is injected in the `Controller`, applies the request validation and authorization rules.
5. `Controller` calls an `Action` and passes the data from the `Request` object to it.
6. `Action` executes the business logic or call as many `Tasks` as needed.
7. `Tasks` execute reusable subsets of the business logic.
8. `Action` prepares the data to be returned to the `Controller`, and may collect data from the `Tasks` if needed.
9. `Controller` builds the response using a `View` or `Transformer`, and sends it back to the User.

It is important to note that the `Request` object handles request validation and authorization rules,
while the `Action` executes the business logic.
The `Tasks` can be used to execute reusable subsets of the business logic,
with each `Task` responsible for a single portion of the main `Action`.
The `View` or `Transformer` is used to build the response that is sent back to the User.

## Request Lifecycle Diagram

[//]: # "TODO: Update the diagram to reflect the new architecture, specially after adding DTOs. API, Web and CLI can use the same Actions and DTOs, but the Controllers and Requests are different."

#### Legend:

- Solid Line: Mandatory dependency (always used)
- Doted Line: Optional dependency (not always used)
- Red Solid Border: Response generation
- Green Dashed Border: Optional component (not always used)

```mermaid
graph TD
  classDef dashedBorder stroke:#0f0,stroke-dasharray: 5 5;
  classDef response stroke:red,stroke-width:2px;
  subgraph Container
    WebRoute[Web Route]
    WebMiddleware[Middleware]
    WebRequest[\Request/]
    WebController{Controller}
    WebAction[Action]
    
    CLI[CLI]
    Command
    CLIAction[Action]
    
    SubAction[SubAction]
    
    APIRoute[API Route]
    APIMiddleware[Middleware]
    APIRequest[\Request/]
    APIController{Controller}
    APIAction[Action]
    
    TaskA[Task]
    TaskB[Task]
    TaskC[Task]
    TaskD[Task]
    TaskE[Task]
    
    Job[Job]
    
    View[\View\]:::response
    Transformer[/Transformer/]:::response
    
    RepositoryA[Repository]
    RepositoryB[Repository]
    
    ModelA[Model]
    ModelB[Model]
    
    ValueObject[Value Object]
    
    Event[Event]
    ListenerA[Listener]
    ListenerB[Listener]
  end
  
  WebRoute[Web Route]-->WebMiddleware
  WebMiddleware-->WebRequest
  WebRequest-->WebController
  WebController-->View
  WebController<-->WebAction
  WebAction<-..->TaskA{{Task}}
  WebAction<-.->SubAction
  
  APIRoute[API Route]-->APIMiddleware
  APIMiddleware-->APIRequest
  APIRequest-->APIController
  APIController<-->APIAction
  APIController-->Transformer
  APIAction<-..->TaskD{{Task}}
  APIAction<-..->TaskE{{Task}}
  APIAction-.->Job:::dashedBorder
  
  CLI[CLI]---->Command[[Command]]
  Command-->CLIAction
  CLIAction<-.->SubAction:::dashedBorder
  CLIAction<-..->TaskD{{Task}}
  
  SubAction<-.->TaskB{{Task}}
  SubAction<-.->TaskC{{Task}}
  
  TaskA-.-RepositoryA[(Repository)]:::dashedBorder
  TaskB-.-RepositoryA[(Repository)]:::dashedBorder
  TaskC-.-RepositoryB[(Repository)]:::dashedBorder
  TaskD-.-RepositoryB[(Repository)]:::dashedBorder
  
  RepositoryA-.-ModelA
  RepositoryB-.-ModelB
  
  ModelA(((Model)))-.-ValueObject[/ValueObject\]:::dashedBorder
  ModelB(((Model)))-.-ValueObject[/ValueObject\]:::dashedBorder
  
  TaskE-.->Event:::dashedBorder
  Event-.-ListenerA([Listener]):::dashedBorder
  Event-.-ListenerB([Listener]):::dashedBorder
  
  Web--request-->Framework
  Mobile--request-->Framework
  etc[etc...]--request-->Framework
  Framework-->WebRoute((Web Route))
  Framework-->CLI((CLI))
  Framework-->APIRoute((API Route))
```
