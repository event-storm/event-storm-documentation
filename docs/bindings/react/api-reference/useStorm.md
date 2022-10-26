---
id: usestorm
title: useStorm
description: "The storm inside react components can be used with the help of useStorm hook. Arguments: store, selectFragment, options"
tags:
  - react
  - Event Storm
  - useStorm
  - bindings
sidebar_position: 1
---

The storm inside react components can be used with the help of `useStorm` hook. Example:

```typescript
import { createStore } from 'event-storm';
import { useStorm } from 'react-event-storm';

const store = createStore({
  taxes: 20,
  grossSalary: 100_000,
});

function AnyComponent() {
  const { taxes } = useStorm(store);

  return (
    <div>{taxes}</div>
  );
}
```

```typescript
function useStorm<T, G extends any>(
  store: IStorm<T>,
  selectFragment?: TSelectFragment<T, G>,
  options?: ISubscriptionOptions,
): G
```

## Arguments

- store - The first argument is the [storm object](/docs/api-reference/storm)
- selectFragment - The selector function can be provided to `useStorm`. The function will receive the same arguments as the [storm subscribe](/docs/api-reference/storm#istormsubcription) function. Unlike the [storm subscribe](/docs/api-reference/storm#istormsubcription), selectFragment must return a value. **If the function is skipped the whole storm will be consumed**.
- options - [ISusbcriptionOptions](#isubscriptionoptions) is the subscription actual configuration.

## Returns

The `useStorm` will return the return value of `selectFragment` argument call. Defaults to whole storm state.

:::tip What about unsubscribe?
The `useStorm` hook will handle the unsubscribe process automatically on component unmount.
:::

### ISubscriptionOptions

```typescript
interface ISubscriptionOptions {
  active?: boolean;
}
```

| Property | Type | Required | Description |
|   -      |   -  |    -     |      -     |
| active | boolean | :negative_squared_cross_mark: | If set to `false` the value of the selector will be updated, but the component will not rerender. Defaults to `true`|

### TSelectFragment

```typescript
export type TFragmentSubscribe<K> = (fragment: IStormState<K>) => K;
export type TSelectFragment<T> = (
  state: IStormState<T>,
  subscribe: TFragmentSubscribe<T>,
) => any;
```

## Arguments

- state - The first argument is last state of the storm object
- subscribe - Consider using this function to grap and construct any information on top of the storm state. `subscribe` function can receive any part of the store, subscribe to that segment and return the last state of that segment. You can use the `subscribe` function multiple times in one `selectFragment` function.

## Returns

The return value of this function will be returned from the `useStorm` hook.
:::tip Optimization technique
Optmize the rerenders by subscribing(using `subscribe` function) on the right portions of the storm
:::
