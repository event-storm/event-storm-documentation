---
id: introduction
title: Introduction
description: Event Storm helps to organize and manage your application's state. The library is designed to be framework and platform agnostics.
tags:
  - intro
  - introduction
sidebar_position: 1
---

# Introduction to Event Storm

**The Event Storm is a tiny store implementation with pure javascript.**
Event Storm will help to organize and manage your application's state. The library is designed to be framework and platform agnostics, which empowers an ability to use it, in **any Javascript runtime**.
:::info Reactjs binding
There is an official **[React wrapper](https://github.com/event-storm/react-event-storm)** of the Event Storm.
:::

### When to use Event Storm? 

- Large scale application with a lot of data consumers(1K+)
- The application is doing a lot of CPU intensive computations
- The bundle size limited applications(library size 2kb)
- Microservice applications(no matter using the same technology for microservices or not)

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
storm.subscribe((state, access) => console.log(access(storm)));

// subscribing to listen only partial changes
storm.subscribe((state, access) => console.log(access(storm.name)));

// update the state
storm.dispatch({ name: 'Event Storm - manage your state effectively' });

// use previous state to make the updates
storm.dispatch(prev => ({ isActive: !prev.isActive }));
```

### See it in action

Examples:
 - [**Typescript**](https://codesandbox.io/s/beautiful-currying-bl9dv)
 - [**React**](https://codesandbox.io/s/intelligent-http-iupz5)

## How the documentation is structured?

- [The motiviation](/docs/motivation) - For better understanding the **what**'s and **why**'s you can start with the motivation.
- [Core concepts](/docs/concepts/overview) - To better understand the ideology of the Event Storm, the data abstraction and how the library is organized read the core concepts.
- [How to structure code](/docs/faq#howtoorganizethedirectorystructure) - To have more organized and minimalistic structure, we recommend some hints and tips
- [Official bindings](/docs/bindings/overview) - Find the official packages for to integrate the Event Storm with your UI solution
- [API reference](/docs/api-reference/overview)
