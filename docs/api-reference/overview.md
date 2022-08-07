---
id: api-reference-overview
title: API Overview
tags:
  - api
  - introduction
sidebar_position: 1
---


## API (TODO:: update the API section)

- Store
  

- Middlewares
  **Middlewares are needed to intercept to dispatching process, to capture some values**
    ```typescript
    import { addMiddlewares, createStorm } from 'event-storm';

    const store = createStorm({
      taxes: 20,
      grossSalary: 100_000,
    });

    addMiddlewares(store.models)((prevValue, nextValue) => {
      // some stuff
    });
    /* Also, the method supports multiples middlewares addition at once.
      addMiddlewares(store)(handler1, handler2, ..., handlerN);
    */
    ```

- Log for development
The library is outputing logs when **NODE_ENV** is set to `'development'`. To disable this log you can simply do this:
```typescript
import { configure } from 'event-storm';

configure({ needLogs: false });
```

## Playground

Examples:
 - [**Typescript**](https://codesandbox.io/s/beautiful-currying-bl9dv)
 - [**React**](https://codesandbox.io/s/intelligent-http-iupz5)
