---
id: storm
title: Storm
tags:
  - api
  - storm
  - store
  - api-reference
sidebar_position: 1
---

Use this method to create a store.

## createStorm
```typescript
import { createStorm } from 'event-storm';

const store = createStorm({
  taxes: 20,
  grossSalary: 100_000,
});

console.log(store.getState()) // { taxes: 20, grossSalary: 100_000 }
```

### Methods
| Method | Type | Description |
|   -    |   -   |      -     |
| createStorm | &lt;T extends [AnyObject](#anyobject)>(data: T): [IStorm](#istorm&lt;T> | Pass the store initial state to the `createStorm`. The return will be [storm](#istorm). |

## IStorm
```typescript
interface IStorm<T> {
  getState: () => IStormState<T>;
  subscribe: (callback: IStormSubcription<T>) => () => void;
  addMiddleware: (middleware: IStormMiddleware) => () => void;
  dispatch: (segments: Partial<T> | ((params: IStormState<T>) => Partial<T>), options?: AnyObject) => void;
}
```
| Method | Type | Description |
|   -    |   -   |      -     |
| getState | () => [IStormState](#istormstate)&lt;T> | The method will return the actual state of the storm |
| subscribe | (callback: [IStormSubcription](#istormsubscription)&lt;T>) => () => void | The method will receive a subscription function. The return value of this method can be called to unsubcribe |
| dispatch | (segments: Partial&lt;T> | ((params: [IStormState](#istormstate)&lt;T>) => Partial&lt;T>), options?: [AnyObject](#anyobject)) => void | The method must be used to update the storm state. The `dispatch` can provide partial state. The `dispatch` first argument can be invoked as a function. In case when the first argument is a function it will receive the last state of the storm as an argument. The `dispatch` also received a second argument. Use that argument for your own purposes(e.g. creating a middleware) |
| addMiddleware | (middleware: [IStormMiddleware](#istormmiddleware)) => () => void | Provide a middleware to the storm. The middleware will be called before any update to the storm. |


### IStormSubcription
```typescript
type IStormSubcription<T, G = any> = (state: IStormState<T>, subscribe: (state: G) => G) => void
```

To subcribe to a particular section use the second argument of the sucbcription function. E.g. `subcribe(state.desired)`. Pass any part of the [IStormState](#istormstate) to the second argument and you'll subscribe only for those changes. 

### IStormMiddleware
```typescript
type IStormMiddleware<T> = (nextState: IStormState<T>, prevState: IStormState<T>, configs: AnyObject) => void
```

The middleware will be provided the next state, prev state and the corresponding dispatch configuration. Note, the middleware will be called before the storm update.

### IStormState
``` typescript
type IStormState<Type> = {
  [Property in keyof Type]: Type[Property];
};
```


#### AnyObject
```typescript
type AnyObject = Record<string, any>;
```