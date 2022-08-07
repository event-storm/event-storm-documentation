---
id: introduction
title: Introduction
tags:
  - intro
  - introduction
sidebar_position: 1
---

# Introduction to Event Storm

**The Event storm is a tiny store implementation with pure javascript.**
Event storm will help to organize and manage your application's state. The library is deigned to be framework and platform agnotics, which empowers an ability to use it, in **any Javascript runtime**.
:::info
There is an official **[React wrapper](https://github.com/event-storm/react-event-storm)** of the Event storm.
:::

## Installation

To install the library run:
```bash
# npm
npm i event-storm

# yarn
yarn add event-storm
```

### Simple example

```typescript
import { createStorm } from 'event-storm';

const defaultState = {
  name: 'Event Storm',
  isActive: false,
}

const storm = createStorm(defaultState);

// subscribing to listen all the changes
store.subscribe((state, access) => console.log(access(store)));

// subscribing to listen only partial changes
store.subscribe((state, access) => console.log(access(store.name)));

// update the state
store.dispatch({ name: 'Event storm - manage your state effectively' });

// use previous state to make the updates
store.dispatch(prev => ({ isActive: !prev.isActive }));
```

### When to use Event storm? 

- Large scale application with a lot of data consumers(1K+)
- The application is doing a lot of CPU intensive computations
- The bundle size limited applications(library size 2kb)
- Microservice applications(no matter using the same technology for microservices or not)

### See it in action

Examples:
 - [**Typescript**](https://codesandbox.io/s/beautiful-currying-bl9dv)
 - [**React**](https://codesandbox.io/s/intelligent-http-iupz5)


## How the documentation is structured?

- [The motiviation](./motivation.md) - For better understanding the **what**'s and **why**'s you can start with the motivation.
- [Core concepts]('./concepts/overview.md) - To better understand the ideology of the Event Storm, the data abstraction and how the library is organized read the core concepts.
- [How to structure code](./recomendations.md) - To have more organized and minimalistic structure, we recommend some hints and tips
- [Official bindings](./bindings/overview.md) - Find the official packages for to integrate the Event storm with your UI solution
- [API reference](./api-reference/overview.md)
