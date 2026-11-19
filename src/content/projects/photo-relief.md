---
title: Photo Relief
description: A browser-based tool that turns photos into 3D-printable, black & white relief models - perceptual color banding, watertight meshes, and one-click 3MF export, all client-side.
thumbnail: ../../assets/projects/photo-relief-thumb.png
screenshots:
  - ../../assets/projects/photo-relief-shot-1.png
  - ../../assets/projects/photo-relief-shot-2.png
githubUrl: https://github.com/jesseiancary/3d-photo-relief-print
liveUrl: https://3d-photo.jesseiancary.com/
tech:
  - TypeScript
  - React
  - Vite
  - Tailwind CSS
  - Web Workers
  - 3MF Export
  - Vitest
  - Playwright
featured: true
order: 1
date: 2026-11-05
---

## Overview

Photo Relief turns an ordinary photograph into a 3D-printable, black & white relief - a HueForge-style model where stacked bands of colored filament reproduce the original image as physical layers. It's built for makers who want to print photos on a multi-filament 3D printer without hand-tuning height maps and slicer settings. Everything runs in the browser: you drop in an image and get back a print-ready model, with no uploads and no backend.

## What I built

- **Perceptually-even color banding** computed in CIE L\* space, so tonal steps look evenly spaced to the eye rather than evenly spaced in raw RGB.
- **Watertight mesh generation** - the geometry is guaranteed manifold, so slicers never choke on holes or non-manifold edges.
- **Real-world-scaled 3MF export** with Bambu Studio project compatibility, so the model opens at the right dimensions and drops straight into a print.
- **Fully offline processing** via Web Workers (keeping the UI responsive during heavy image and mesh work) with a main-thread fallback when workers aren't available.
- **A headless Node CLI** for reproducible, scriptable generation from the command line - driven by the same engine as the web app.

## Challenges

The core is a pure, framework-free engine built on typed arrays and pure functions, so the exact same code runs unchanged in the browser, inside a Web Worker, in the Node CLI, and in unit tests. Keeping that boundary clean is what made the rest tractable: the hard problems - distributing color bands so they read as perceptually balanced, and emitting meshes that are provably watertight at any resolution - could be solved and tested in isolation, without any UI or printer in the loop.

## Outcome

Photo Relief is deployed on Vercel at [3d-photo.jesseiancary.com](https://3d-photo.jesseiancary.com/) and covered by a Vitest (unit/component) and Playwright (end-to-end) suite running in GitHub Actions CI. It's the project I most enjoy demoing - handing someone a physical b/w print of their own photo makes the whole pipeline tangible.
