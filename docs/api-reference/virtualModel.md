---
id: api-reference-virtualmodel
title: Model with state derivation
tags:
  - api
  - model
  - virtual model
  - derived state
  - api-reference
sidebar_position: 4
---

It is possible to derive the state of the model and compose abstraction on that derivation. The abstraction is called virtual model.

### createVirtualModel
```typescript
import { createModel, createVirtualModel } from 'event-storm';
// real models
const time = createModel(0);
const velocity = createModel(10);

// virtual model
const road = createVirtualModel({
  handler: () => time.getState() * velocity.getState(),
  models: [time, velocity],
});

road.subscribe(nextValue => {
  console.log(nextValue); // 10
});

time.dispatch(1);
```

### Methods
| Method | Type | Description |
|   -    |   -   |      -     |
| createVirtualModel | &lt;T>(options: [IVirtualModelOptions](#ivirtualmodeloptions)&lt;T>): Omit&lt;[IModel](./model.md#imodel)&lt;T, [IVirtualModelOptions](#ivirtualmodeloptions)>, 'dispatch'> | Calling this method will return a [model](./model.md#imodel). Note the returned [IModel](./model.md#imodel) **has no dispatch method** |

### IVirtualModelOptions(extends [IModelOptions](./model.md#imodeloptions))
```typescript
interface IVirtualModelOptions<T> extends IModelOptions {
  handler: () => T;
  models: IModel<any>[];
}
```

| Method | Type | Required | Description |
|   -    |   -   |    -     |     -      |
| handler | () => T | :white_check_mark: | Manipulate with models inside this method. The return value fo this method will be the virtual model's state

| Properties | Type | Required | Description |
|   -       |   -   |    -     |     -      |
| models | [IModel](./model.md#imodel)&lt;any>[]; | :negative_squared_cross_mark: | The provided models will be the ones that virtual model will rely on. The provided model's update will trigger the handler function to rerun. After rerun, depending on the model options, the result will or will not propagate to all subscribers.
