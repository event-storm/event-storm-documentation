---
id: overview
title: Overview
description: The React Event Storm is providing a lightweight, minimal abstraction for the Event Storm library
tags:
  - react
  - Event Storm
  - bindings
sidebar_position: 1
---

The React Event Storm is providing a lightweight, minimal abstraction for the [Event Storm](/docs/introduction) library.

## Technical stack

- React ^16.8.0(hooks support)

## Installation

To install the library run:

```bash
# npm
npm i react-event-storm

# yarn
yarn add react-event-storm
```

:::caution Required dependency
The library is using Event Storm as a peer dependency, so you need to [install it](/docs/introduction#installation).
:::

### Simple example

```typescript
import { createStorm } from 'event-storm';
import { useStorm } from 'react-event-storm';

const defaultState = {
  name: 'React Event Storm',
}

const storm = createStorm(defaultState);

function Component() {
  const { name } = useStorm(storm);
  return <span>This is {name}</span>
}
```

### See it in action

Examples:

- [**Typescript**](https://codesandbox.io/s/beautiful-currying-bl9dv)
- [**React**](https://codesandbox.io/s/intelligent-http-iupz5)
