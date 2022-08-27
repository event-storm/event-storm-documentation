---
id: virtualmodel
title: Model with state derivation
description: It is possible to derive the state of the model and compose abstraction on that derivation. The abstraction is called virtual model
tags:
  - api
  - model
  - virtual model
  - derived state
  - api-reference
sidebar_position: 4
---

It is possible to derive the state of the model and compose abstraction on that derivation. The abstraction is called virtual model.
In general the virtual model has the same interface as the model.
The only method which is different is: **publish** - **This method call will do nothing**. As the virtual model is not the real owner of the information you can't update that information.

## createVirtualModel

### VirtualModel internal structure
The internal structure of the virtual model is similar to the model's internal structure. See [this section](./model.md#model-internal-structure) for details.

### What does it mean to subscribe to a virtual model?
Subscription of virtual models is based on the provided configuration models subscription. Virtual model internally subscribes to those models. Whenever an update is received from those models the virtual model will try to figure out whether the changes are resulting in a duplicate result of a handler function or not. Behind the scenes, the virtual model will subscribe to the provided models, which will allow it to be updated on those models' changes. This part is similar to a model, which means you can avoid this check with the help of `fireDuplicates` option. The default behavior of the `fireDuplicates` is the same as the model's behavior.

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
| handler | () => T | :white_check_mark: | Manipulate with models inside this method. The return value for this method will be the virtual model's state

| Properties | Type | Required | Description |
|   -       |   -   |    -     |     -      |
| models | [IModel](./model.md#imodel)&lt;any>[]; | :negative_squared_cross_mark: | The provided models will be the ones that virtual model will rely on. The provided model's update will trigger the handler function to rerun. After rerun, depending on the model options, the result will or will not propagate to all subscribers.
