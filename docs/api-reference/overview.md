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
  **Creating a store**

  ```typescript
  import { createStorm } from 'event-storm';

  const store = createStorm({
    taxes: 20,
    grossSalary: 100_000,
  });

  console.log(store.getState()) // { taxes: 20, grossSalary: 100_000 }

  ```
  **Updating the store information**
  ```typescript
  import { createStorm } from 'event-storm';

  const store = createStorm({
    taxes: 20,
    grossSalary: 100_000,
  });
  store.dispatch({ taxes: 100 });
  console.log(store.getState()); // { taxes: 100, grossSalary: 200_000 }

  store.dispatch({ taxes: 150, grossSalary: 300_000 });
  console.log(store.getState()); // { taxes: 150, grossSalary: 300_000 }
  ```
  **Subscribe/unsubscribe to store changes**
  ```typescript
  import { createStorm } from 'event-storm';

  const store = createStorm({
    taxes: 20,
    grossSalary: 100_000,
  });
  // the third argument will be discussed earlier
  const subscription = store.subscribe((key, nextValue, model) => {
    console.log(key, nextValue, model); // "taxes" "100" ModelObject
  });

  store.dispatch({ taxes: 100 });

  subscription();

  store.dispatch({ taxes: 70 }); // the handler will not be fired
  ```

  **Deriving a state in the store**
  ```typescript
  import { createStorm } from 'event-storm';

  const store = createStorm({
    taxes: 20,
    grossSalary: 100_000,
    netSalary: ({ taxes, grossSalary }) => grossSalary * (100 - taxes) / 100,
  });

  console.log(store.getState().netSalary); // 80_000

  store.dispatch({ taxes: 40 });

  console.log(store.getState().netSalary); // 60_000
  ```

  **Advanced store usage**
  As mentioned above the store is decentralized. Any piece of information can be also used independently from the store. The peace of information is called the "model". When creating a store, under the hood it creates "models".

  **Accessing the models**
  ```typescript
  import { createStorm } from 'event-storm';

  const store = createStorm({
    taxes: 20,
    grossSalary: 100_000,
  });

  const {
    taxes: taxesModel,
    grossSalary: grossSalaryModel,
  } = store.models;
  ```

  As mentioned above you can use the models independently. Each model will give:
  - an access to last state
  - a subscription
  - own dispatchment method
  ```typescript
  import { createStorm } from 'event-storm';

  const store = createStorm({
    taxes: 20,
    grossSalary: 100_000,
  });

  const { taxes: taxesModel } = store.models;

  console.log(taxes.getState()); // 20;

  taxes.dispatch(40);

  taxes.subscribe(nextValue => {
    console.log(nextValue); // 40
  });

  console.log(taxes.getState()); // 40;
  ```

  **Functional dispatch**.
  Updating the store may require having the store's previous state. For that purpose you can use the following:
  ```typescript
  import { createStorm } from 'event-storm';

  const store = createStorm({
    taxes: 20,
    grossSalary: 100_000,
  });

  store.dispatch(prevState => ({
    ...prevState
    taxes: prevState.taxes + 10,
  }));

  console.log(store.getState()); // { taxes: 30, grossSalary: 100_000 }
  ```

  **Asynchronous dispatch**
  For asynchronous events, it's also possible to `await` the dispatch process
  ```typescript
  import { createStorm } from 'event-storm';

  const store = createStorm({
    taxes: 20,
    grossSalary: 100_000,
  });

  await store.dispatch(async prevState => {
    const promise = Promise.resolve().then(() => ({
      ...prevState
      taxes: prevState.taxes + 10,
    }));
    const result = await promise;
    // Some stuff after async operation is done;
    return result;
  });

  // some stuff after the store dispatch is done on async operation
  console.log(store.getState()); // { taxes: 30, grossSalary: 100_000 }
  ```

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
