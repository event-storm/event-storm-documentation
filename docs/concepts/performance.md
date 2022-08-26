---
id: performance
title: Performance impact
description: The library addressed the following areas regarding the performance&#58; bundle size, maintenance cost, minimal data processing
tags:
  - concepts
  - performance
sidebar_position: 2
---

The library is concentrated in providing highly optimized subscription mechanism. The library addressed the following areas regarding the performance:
- Bundle size(load performance)
- Maintenance cost(development performance)
- Minimal data processing(CPU performance)

## Bundle size
The application bundle is being dependent on library initial cost, modularity support and integration cost. The Event Storm library is providing built-in support for [immer](https://immerjs.github.io/immer/), and with that only dependency the library size is [4.5kB(MINIFIED + GZIPPED)](https://bundlephobia.com/package/event-storm@3.0.0). The Event Storm library is lazy by design. 

What does it mean? 
It is possible to add/remove/update or import different store assets lazely:
- storm handlers(e.g. some dispatch and data handler, complex data selector)
- totally new storm instance

The lazyness is allowing to organize, and split the code in a way which is appropriate to exact application.

As the library is aware of centralized data management, there is no need to add additional "meta-code" to support new data manipulation. The Event Storm library is allowing to concentrate the source code of the application on the application business logic. Less code written, more light weight bundle at the end.

## Maintanance cost
No additional time is needed to generate boilerplate code. The event Storm library has not centralized data management points. It is not forcing to write action/reducer stuff, or any specific code hints or utility functions. The structure is simple as it can be, just adding the data peace in store and making an update with any handler function. The minimalistic touch points allow Event storm library to be easy to maintain solution. 

## Mimimal data processing
To ensure runtime performance the Event storm library is designed to compute as less as possible. The storm updates will be passed to the subscribers in the same event loop cycle. The updates are done synchronously, so it's safe to write code after dispatching data change. Any line after dispatch can access already updated store state. 

As already described in the [motivation](/docs/motivation) section, the described issues are addressed and fixed by Event Storm.
**There is no silver bullet in optimization field**. 

When dealing with CPU optimizations there are 2 aspects:
- CPU working time
- Memory

Whoever tries to optimize the one, it will be at the expense of the other. So, the above described CPU optimizations are also at the expense of memory consumption. Does this mean you can have memory issues? It's hardly possible to cause memory issues with the Event Storm solution, but anyway any system can test the application memory usage with the Event Storm or an alternative solution. 
