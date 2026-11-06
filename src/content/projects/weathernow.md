---
title: WeatherNow
description: A fast, offline-capable weather app with an interactive radar map and saved locations.
thumbnail: ../../assets/projects/weathernow-thumb.png
screenshots:
  - ../../assets/projects/weathernow-shot-1.png
  - ../../assets/projects/weathernow-shot-2.png
githubUrl: https://github.com/your-username/weathernow
liveUrl: https://weathernow.example.com
tech:
  - Astro
  - TypeScript
  - Tailwind CSS
  - Service Workers
featured: false
order: 2
date: 2025-05-02
---

## Overview

WeatherNow is a lightweight weather app focused on speed and reliability. It
loads instantly, works offline after the first visit, and keeps the interface
out of the way so you get the forecast at a glance.

## What I built

- An **interactive radar map** layered over tile data, with a time scrubber to
  animate recent precipitation.
- **Saved locations** with quick switching, persisted locally so the app opens
  to your home city.
- An **offline-first** architecture using a service worker to cache the shell
  and the most recent forecast, so the app is useful even on a flaky connection.

## Challenges

Balancing freshness against offline availability meant designing a cache
strategy that serves instantly from cache, then quietly revalidates in the
background and swaps in fresh data without a jarring reload.

## Outcome

WeatherNow is the app I actually use every morning. It is a good showcase of how
far you can get with a static-first architecture plus a thin layer of
client-side interactivity.
