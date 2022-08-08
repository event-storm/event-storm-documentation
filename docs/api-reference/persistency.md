---
id: persistency
title: Make the store persistant
tags:
  - api
  - store
  - api-reference
  - persistant store
sidebar_position: 5
---

You can easly make your store any segment to be persisted by `persisted` function.

## persisted
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

### IPersistOptions
```typescript
interface IPersistOptions<T> {
  storageKey: string;
  beforeunload: (storm: IStormState<T>) => Partial<IStormState<T>>;
  permanent?: boolean,
}
```

### Methods
| Method | Type | Description |
|   -    |   -   |      -     |
| beforeunload | (storm: [IStormState](./storm.md)&lt;T>) => Partial&lt;[IStormState](./storm.md)&lt;T>> | method is called right before the browser unload event. It will receive the current storm state as an argument.
It can return any storm fragment as a return value. The return value will be persisted. |

### Properties

| Property | Type | Required | Description |
|   -      |   -  |    -     |      -     |
| storageKey | string | :white_check_mark: | Specifies where to keep the persisted data in the storage |
| permanent | boolean | :negative_squared_cross_mark: | By default the `sessionStorage` is used to store the persisted data. To change the storage to `localStorage` you can set the `permanent` property to `true`: |
