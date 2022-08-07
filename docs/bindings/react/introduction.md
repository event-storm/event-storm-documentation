---
id: bindings-overview
title: React Event Storm
tags:
  - react
  - Event Storm
  - bindings
sidebar_position: 1
---

## The problem

Imagine a react application. You have a component and it is subscribed to store. It is using `sizes` and `cards` properties.
The `cards` are used to render a list. Let's imagine you want to save in backend the provided `sizes` for clicked `card`. So, the `sizes` information is used whenever you are clicking on a particular `card`. In most store managers(e.g. Overmind, Redux) your component will be updated on `sizes` change even if the user will never click to the list.
To avoid unnecassary renders, you'll need to directly access the store in your `card`'s click event handler. Which is most probably not the solution you're looking for. With the workarround you'll get store usage in a "react-way" as usual, also in a "none react-way"(accessing the store diretly, not via `useStore` or some other hook). Also, worth nothing that you'll have components where you need more than one handler. So you'll need to duplicate the code that accesses the store.

## The Solution

The `event-storm` is presenting 3 levels of subscription:
- Active subscription
- Passive subscription
- Condition-based subscription

#### Active Subscription
  This is a regular subscription. Whenever you are using any key from the store like in the example below, you'll receive any update on that keys.
```js
const { cards, sizes } = useStore();
```

This is the same as:

```js
const { cards, sizes } = useStore({ active: true });
```
#### Passive subscription
This option allows you to access any store key without getting you component rerendered on the particular keys' updates. **It is guaranteed that whenever you'll use the store values they'll be up to date(fresh values)**.
```js
const { cards, sizes } = useStore({ active: false });
```

#### Condition-based subscription
What is a condition-based subscription? The updates on the keys will not update the component until the provided condition will be truthy.
Whenever `active` option can becomes `true` during runtime, the subcription becomes active. This means, starting from that point, your component
will be rerendered on the key's updates. **With this feature, you are controlling your subscription.**

```js
const [counter, setCounter] = useState(0);
const condition = counter > 4;
const { cards, sizes } = useStore({ active: condition });

if (condition) {
  console.log(cards, sizes);
  // other stuff related to 'cards' or 'sizes'
}
```
You can change the value of `active` option from `true` to `false` or vise versa. Whenever it'll be `false` your component will not be updated for the used keys' changes.
