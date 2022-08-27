---
id: terminology
title: The terminology
description: The Event Storm is based on event sourcing technology. To organize the system you need to define what information needs to be considered as a source
tags:
  - terminology
  - glossary
  - structure
sidebar_position: 2
---

The Event Storm is based on event sourcing technology. To organize such a system you need to define what is the information that needs to be considered as a source. 
:::caution What to understand as context?
Information in this context, means the user specified information unit. For the current technology it doesn't matter if the information is a single atomic or complex object structure, the only thing which matters is the user intentional definition.
:::

Information specifications:
- Can be updated during the time
- You can subscribe to the changes of that information updates
- Can be combined with other information to construct a bigger information segment. The last means that you can derive the information's current state(state here basically means the value of the information).

To manage the changes and subscriptions of the models, Event Storm library implements a pubsub technology.

### Model
To fit the above requirements, the Event Storm library has defined a programming interface for that information. This interface is called a **[model](/docs/api-reference/model)**. Model is the single observable entity inside the library. **It is not possible to split the model into peaces**. Defining a model means identifying the provided information a part of the same business model, entity, domain. 
In the documentation context when saying **model**, we refer to this object structure.

### VirtualModel
As mentioned in the main section, models can be combined to construct bigger information segments. To keep the developer experience the same and manage models composition the Event Storm library is providing [createVirtualModel](/docs/api-reference/virtualModel) function.
Why do you need to combine the existing models? The principle of single source of truth, and event sourcing in general, suggesting you to keep the information source and it's management in a single place(memory segment). The **virtual model** is using existing information to create a higher level abstraction on top of that, in other words, deriving the existing information.
When working with virtual model it's better to thing of a process than an information unit. The deriviation process, information processing and information presentation are coupled within the virtual model. 

### Update(updating the information/model)
The change of the information over the time is called update. Defining a model per se means that the model itself will evolve during some managable time frame(If the last is not the case, you can define the information as constant instead). Moreever, in the library context saying "update", also has consequence of updating all the [subscribers](#subscription).

### Dispatch
As the model must be updated the library is providing a method called **dispatch** for that needs. "Dispatching an update" in this context means chaning the actual state of the model. Any model change will cause the [subscribers](#subscription) to be notified

### Subscription
Generally saying **subscription** is receiving some information(maybe something) over some agreement. According to the definition the act of subscription is based on particular subscription subject. Which basically means, that the owner of the subscription must receive an information, if and only if, the particular subject has been changed. Furthermore, the owner of the subject must not be even "disturbed", for any other reason.

Coming to the computer sceince. In CS the above can be described as a regular situation between observer and consumer on observable subject. Either it can be the event, subcriber and subscription. 

As the information is provided with [model](#model) abstraction, the **subscription** is an ability of model. So each model will have a method to be subscribed. Any [update](#update) or [dipsatch](#dispatch) process will cause the model subscription to run with the model's last state.

### Storm
When dealing with a more generic state of a complex system(e.g. application), the **model** abstraction is making a lot of boilerplate inside the codebase. Managing a lot of minimal state's and their combination is not the best idea to go with. The **storm** is the simplified abstraction for creating multiple models at once. The **storm** is contructed from smaller information units and **is not itself the information source**. Right the opposite, the storm combines the infromation of the models and provides one unique interface to work with that models.
Storm has always a tree structure. **It is possible to subscribe to each node** of the storm individually.
As an information presentation, the storm, provides similiar abstraction for managing the underlying models - [subscription](#subscription) and [dispatching](#dispatch).
