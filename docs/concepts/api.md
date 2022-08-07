---
id: concepts-api
title: How the API is designed?
tags:
  - concepts
  - api
sidebar_position: 5
---

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
