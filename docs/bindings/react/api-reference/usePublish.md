---
id: bindings-api-usepublish
title: usePublish
tags:
  - react
  - Event Storm
  - usepublish
  - bindings
sidebar_position: 2
---

The publsh hook, is simply reexporting of the `storm.publish` method.

```typescript
import { createStore } from 'event-storm';
import { useStorm, usePublish } from 'react-event-storm';

const store = createStore({
 taxes: 20,
 grossSalary: 100_000,
});

function AnyComponent() {
 const { taxes } = useStorm(store);
 const publish = usePublish(store);

 return (
   <div onClick={() => publish({ taxes: 30 })}>
     {taxes}
   </div>
 );
}
```

```typescript
function usePublish<T>(storm: IStorm<T>): IStorm<T>['publish'];
```

## Arguments
- storm - the [storm object](/docs/api-reference/storm#istorm), for which the `publish` method will be provided

## Returns
A function that will publish to the provided storm. Simple the `storm.publish` method.
