---
id: introduction
title: Introduction
tags:
  - intro
  - introduction
sidebar_position: 1
---

# Introduction to Event Storm

**The Event storm is a tiny store implementation with pure javascript.**
Event storm will help to organize and manage your application's state. The library is deigned to be framework and platform agnotics, which empowers an ability to use it, in **any Javascript runtime**.
:::info
There is an official **[React wrapper](https://github.com/event-storm/react-event-storm)** of the Event storm.
:::

## Installation

To install the library run:
```bash
# npm
npm i event-storm

# yarn
yarn add event-storm
```

## What is the library focus?

The main focus areas of the library are:
- [performance](./concepts/performance.md)
- [runtime optimizations](./concepts/optimizations.md)
- [simple API]('./concepts/api.md)
- [better developer experience]('./concepts/developer-experience.md)

## Basic concepts

The library consists of 2 parts: event store implementation and data model abstraction. The event store supports:
- :star: dispatch/subscribe of models
- :star: not propagates on duplicate changes(configurable)
- :boom: middlewares support
- :zap: store persistence

With the store you can:
- :pill: get the last state of the store at any time
- :punch: creating data on real information
- :pushpin: subscription to last event(even if it happens earlier)
- :hammer: combine the existing information to derive(compute) some information
