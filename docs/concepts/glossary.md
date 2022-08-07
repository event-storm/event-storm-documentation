---
id: glossary
title: The terminology
tags:
  - terminology
  - glossary
  - structure
sidebar_position: 1
---

The Event Storm is based on event sourcing technology. To organize such a system you need to define what is the information that needs to be considered as a source. 

Information specifications:
- Can be updated during the time
- You can subscribe to the changes of that information updates
- Can be combined with other information to construct a bigger information segment. The last means that you can derive the information's current state(state here basically means the value of the information).

To manage the changes and subscriptions of the models, Event Storm library implements a pubsub technology.

### Model
To fit the above requirements, the Event Storm library has defined a programming interface for that information. This interface is called a **[model](/docs/api-reference/model)**.

### VirtualModel
As mentioned in the main section, models can be combined to construct bigger information segments. To keep the developer experience the same and manage models composition the Event Storm library is providing [createVirtualModel](/docs/api-reference/virtualModel) function.
Why do you need to combine the existing models? The principle of single source of truth and event sourcing in general you need to keep the information source and its management in a single place(memory segment). The **virtual model** is using existing information to create something on top of that, in other words, derive the existing information.

