---
id: model
title: Model
tags:
  - api
  - model
  - api-reference
sidebar_position: 3
---

Creating a single information unit. Use this method to have syncronized updates for all the subscribers.
:::info
Even when proding object structure, model will allways update all the subscribers. For individual subscription use [storm](./store.md).
:::
## createModel

### Model value types

Model can accept any JS type.
### Creating models with object values
Using an object value will result in updates on each key change. In other words the object's individual keys can’t be consumed by that model.

### Model internal structure
Model itself internally keeps track of its lifecycle.
Model has its own list of subscribers. Whenever you are using the subscribe method it will be checked whether it is already registered or not and if not, it will register(exactly push) the provided function to the models internal subscribers list. The subscribe function will return a function. You can call that function to unsubscribe from the model.
Model keeps the options list provided at the creation time. In order to update model's options you can use the [setOptions method](#imodel).

```typescript
import { createModel } from 'event-storm';

const userModel = createModel();

// When defining a model it is often usefull to have a **default value**:
const clientModel = createModel({});
```

### Methods
| Method | Type | Description |
|   -    |   -   |      -     |
| createModel | &lt;T>(value?: T, option?: [IModelOptions](#imodeloptions)) => [IModel](imodel)&lt;T> | Calling this method will return a [model](#imodel). The first argument is the default state of the model. The second argument is the model default [option](imodeloptions). |

## IModel
```typescript
export interface IModel<T, G extends IModelOption = IModelOption> {
  getState: () => T;
  setOptions: (options: G) => void;
  dispatch: (value: T, options?: IModelOption) => void | Promise<void>;
  subscribe: (callback: (nextValue: T) => void, options?: ISubscriptionOptions<T>) => () => void;
}
```
| Method | Type | Description |
|   -    |   -  |      -     |
| getState | () => any | The method returns the fresh state of the model |
| setOptions | (option: [IModelOptions](#imodeloptions)) => void | The model option can be changed at any time |
| dispatch | (value: any, option?: [IModelOptions](#imodeloptions)) => void) => void | Promise&lt;void> | The method will update the internal state of the model. Depending on the option the state change will/or will not update all the subscribers. Note: its possible to `await` for the update.
| subscribe | (callback: (nextValue: any, options?: [IModelOptions](#imodeloptions)) => void, option?: [ISubscriptionOptions](#isubscriptionoptions)&lt;T>) => () => void | The method receive a callback. On each model update the receive the callback will be fired with the last updated value. When firing, the callback will be provided with second argument(if exists). The second argument is the same option with triggered the model state change(i.e. dispatch configurations).


### IModelOptions
```typescript
interface IModelConfiguration {
  fireDuplicates?: boolean;
  [key: string]: any;
}
```
| Property | Type | Required | Description |
|   -      |   -  |    -     |      -     |
| fireDuplicates | boolean | :negative_squared_cross_mark: | When set to `true` the model will propagate on duplicate changes. It's **NOT recommended** to use and rely on this option. Most likely if the code depends on the duplicated event it needs to be refactored. Defaults to `false` |
| [key: string] | any | :negative_squared_cross_mark: | You can provide your own options |

### ISubscriptionOption
```typescript
interface ISubscriptionOptions {
  needPrevious?: boolean;
}
```
| Property | Type | Required | Description |
|   -      |   -  |    -     |      -     |
| needPrevious | boolean | :negative_squared_cross_mark: | When set to `true` the model will make the subscription callback run immediately. The subscription callback will receive the last state of the model. Defaults to `false` |