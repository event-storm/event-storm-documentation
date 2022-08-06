---
id: api-reference-overview
title: API Overview
tags:
  - api
  - api-reference
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
- Creating a model manually(source of truth)
  **createModel**
  ```typescript
  import { createModel } from 'event-storm';

  const userModel = createModel();
  // When defining a model it is often usefull to have a **default value**:
  const clientModel = createModel({});

  /* NOT RECOMMENDED!
   You can also pass the second parameter to `createModel`, which will make the model propagate on duplicate changes. Most likely if the code depends on the duplicated event it needs to be refactored,
   instead of firing the same event twice.
  */

  const anyModel = createModel({}, { fireDuplicates: true });
  ```
  **Model API**
  ```typescript
  const popupModel = createModel(true);

  const subscription = popupModel.subscribe(nextValue => {
    console.log(nextValue); // false
  });


  /* As mentioned above the API is the same.
   It's possible to make a functional and asynchronous dispatch process for a single model.
   */
  popupModel.dispatch(false);

  console.log(popupModel.getState()); // false

  subscription();

  popupModel.dispatch(false); // the callback will not be fired
  ```
- Model API with state derivation
  **createVirtualModel**
  The example above will show how to create a new model based on existing models.
  **Creating a model from existing ones will allow you to create some shared state which you want also to
  listen**. Both functions `createModel` and `createVirtualModel` will return you the same result(a model),
  which will be a subject to subscribe. NOTE, for both cases the API remains exactly the same.
  ```typescript
  import { createModel, createVirtualModel } from 'event-storm';
  // real models
  const time = createModel(0);
  const velocity = createModel(10);

  // virtual model
  const road = createVirtualModel(() => {
    return time.getState() * velocity.getState();
  }, { models: [time, velocity] });

  road.subscribe(nextValue => {
    console.log(nextValue); // 10
  });

  time.dispatch(1);
  ```
  The second argument is responsible for updates. Whenever any provided model is updated, the handler function will be triggered.
  This will also cause the subscribers update.
  
  Advanced!

  Pay attention to the virtual model's declaration. The 2nd argument is the configuration,
  which can be skipped initially.
  This is done for cases when you want to propagate changes depend on some condition.
  You can always change the models which you want to listen. Just call:
  virtualModel.setOptions({ models: [/* any models here */] })
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
- Store Persistence
You can easly make your store any segment to be persisted by `persisted` function.
```typescript
import { createStorm, persisted } from 'event-storm';

const createPersistedStore = persisted(createStorm)({
  storageKey: 'some_store_key',
  beforeunload: state => ({
    users: state.users,
  }),
});

const defaultState = {
  users: [],
  age: 15,
  loading: false,
};

const store = createPersistedStore(defaultState);
```

`storageKey` is **required property**. It will specify where to keep the persisted data in the storage.
`beforeunload` method is called right before the browser unload event. It will receive the current store state as an argument.
It can return any store fragment as a return value. The return value will be persisted.

By default the `sessionStorage` is used to store the persisted data. To change the storage to `localStorage` you can set the
`permanent` property to `true`:

```typescript
import { createStorm, persisted } from 'event-storm';

const createPersistedStore = persisted(createStorm)({
  permanent: true,
  storageKey: 'some_store_key',
  beforeunload: state => ({
    users: state.users,
  }),
});

const defaultState = {
  users: [],
  age: 15,
  loading: false,
};

const store = createPersistedStore(defaultState);
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
