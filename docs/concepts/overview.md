---
id: overview
title: The bigger picture
tags:
  - concepts
  - structure
sidebar_position: 1
---

The Event Storm library is focused on providing a high performance in memory data store. Furthermore, focusing on performance, the Event Storm, also is providing a simple and already familiar API, to minimize the intergation cost.

The Event Storm is there to provide a full empowered data management system, with visualization, debugging, monitoring. The library enhancment will be by adding any tooling related to data management, for the real life applications, as far as, for development purposes.

## What is available already
Currently the Event Storm supports:
- Production ready tools:
  - Store persistency - save the internal state of the application on browser reload or maybe even permanently
  - Use mutable updates for store, at the same time having immutable storm. The Event Storm implements [immer](https://github.com/immerjs/immer) under the hood
  - Cross platform run - the Event Storm itself relies only on EcmaScript feature. This makes Event Storm available on any hoist environment
  - React wrapper - Event Storm is wrapped for [the ReactJS](https://github.com/event-storm/react-event-storm)
- Development tools:
  - [Simple logger](https://github.com/event-storm/event-storm-logger) - Adding a simple logger middleware, will show the storm updates in the console

## Future plans 
In the near future it is planned to develop a Browser Extension / Inspector that will allow to get  insights for each update in the store, visualize it. It will allow developers to have better developer experience(DX) see the whole picture of what is going on in the store. For sure this will improve debugging process experience. You can track the [progress here](https://github.com/event-storm/event-storm/projects/2)

## What is the library focus?

The main focus areas of the library are:
- [simple API](./api.md)
- [performance](./performance.md)
- [runtime optimizations](./optimizations.md)
- [better developer experience](./developer-experience.md)
