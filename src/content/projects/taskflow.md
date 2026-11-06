---
title: TaskFlow
description: A real-time kanban board for small teams, with drag-and-drop, live sync, and keyboard-first navigation.
thumbnail: ../../assets/projects/taskflow-thumb.png
screenshots:
  - ../../assets/projects/taskflow-shot-1.png
  - ../../assets/projects/taskflow-shot-2.png
videoUrl: https://www.youtube.com/watch?v=dQw4w9WgXcQ
githubUrl: https://github.com/your-username/taskflow
liveUrl: https://taskflow.example.com
tech:
  - React
  - TypeScript
  - Node.js
  - PostgreSQL
  - WebSockets
featured: true
order: 1
date: 2025-08-14
---

## Overview

TaskFlow is a kanban board built for small teams that need to coordinate work
without the overhead of heavier project-management tools. Cards update in real
time across every connected client, so there is never a stale view of the board.

## What I built

- **Real-time sync** over WebSockets, with optimistic UI updates and automatic
  reconciliation when the server confirms a change.
- **Drag-and-drop** columns and cards with smooth reordering and persistence.
- **Keyboard-first navigation** — every common action has a shortcut, so power
  users rarely touch the mouse.
- A **Node.js + PostgreSQL** backend exposing a typed REST API, with row-level
  ownership checks on every mutation.

## Challenges

The hardest part was conflict resolution: when two people move the same card at
once, the UI needs to feel instant while staying consistent. I solved this with
optimistic updates keyed by a client-generated operation id, then reconciling
against the authoritative ordering the server broadcasts back.

## Outcome

The project taught me a lot about real-time state, and it is the piece I most
enjoy demoing — watching two browser windows update in lockstep still feels like
magic.
