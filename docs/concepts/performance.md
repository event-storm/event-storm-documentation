---
id: performance
title: Performance impact
tags:
  - concepts
  - performance
sidebar_position: 2
---

The library is concentrated in providing highly optimized subscription mechanism. 

The above-mentioned libraries(and not only them) are using a **centralized concept of keeping the information**.
What does this mean?
When creating a store it is described as an object and also it corresponds to a single tree in the memory.
The main way to achieve an update is by changing a reference in the in-memory tree. For listening to the events you need to
subscribe to some node(which is not a subscription). You can take a look at this [simple example](https://codesandbox.io/s/redux-update-81zjv?file=/src/store/index.js). "anyway updated" is logging at any time something in the store changes. The main problem here is the centralized data store. To determine whether the change is needed for one or another consumer a centralized store needs to calculate the exact usage, then prevent the update.
The library is suggesting a decentralized store with a single user interface as before. This means you will describe and act with the store like usual. Under the hood, it will keep each node separate. This will allow us to not calculate each time whether or not to prevent the update.

<details>
  <summary>Deep look at the concept</summary>
  Conceptually, in an event store, only the events of a dossier or policy are stored. The idea behind it is that the dossier or policy can be derived from these events(**Mainly the same as the single source of truth**).
  The events (and their corresponding data) are the only "real fact"s(**name `model` will be used in the library scope**)
  that should be stored in the database. The instantiation of all other objects can be derived from these events.
  The derived data will be instantiated in memory(**name `virtual model` will be used in library scope**). In an event store database, this means that all objects that should be derived, are not stored in the database. Instead, these objects are instantiated 'on the fly' in memory by the code based on the events. After usage of these objects, the instantiated
  objects are removed from memory.

  Another crucial part of an event store database is that events that are stored are not allowed to be changed.
  The only way to change (or better: correct) these events is to instantiate a new event with the new values(**So as we know no mutation allowed**).
</details>

