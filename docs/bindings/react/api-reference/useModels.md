---
id: usemodels
title: useModels
description: The Event Storm models also can be used with React components. useModels can receive a models array, subscribe to them and return their last states
tags:
  - react
  - Event Storm
  - useModels
  - bindings
sidebar_position: 3
---

The Event Storm models also can be used with React components. `useModels` can receive a [models](/docs/api-reference/model#imodel) array, subscribe to them and return their last states( in the same provided order).
```typescript
import { createModel } from 'event-storm';
import { useModels } from 'react-event-storm';

const isPopupVisible = createModel(true);
const age = createModel(1);

function AnyComponent() {
  const [popupVisible, ageValue] = useModels([isPopupVisible, age]);
  return (
    <div>
      {isPopupVisible ? 'close' : 'open'}
      {age}
    </div>
  );
}
```

```typescript
function useModels<T extends IModelConfiguration>(models: IModel<any, T>[], options?: ISubscriptionOptions): any[];
```

## Arguments
- models - The [models](/docs/api-reference/model#imodel) array to subcribe.
- options - The subscription [configuration object](#isubscriptionoptions). The same as for [useStorm](./useStorm.md#isubscriptionoptions)

## Returns
- The hook returns the values of the provided models with an array. The array order corresponds to the provider models array order.

:::tip What about unsubscribe?
The `useModels` hook will handle the unsubscribe process automatically on component unmount.
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
