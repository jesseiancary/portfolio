---
title: Plinth
description: LIVE DEMO COMING SOON... A production-grade multi-tenant SaaS starter - single-database tenancy with row-level isolation, role-based access control, a typed REST API with OpenAPI docs, and a full CI/CD pipeline.
thumbnail: ../../assets/projects/plinth-thumb.png
screenshots:
  - ../../assets/projects/plinth-shot-1.png
  - ../../assets/projects/plinth-shot-2.png
githubUrl: https://github.com/jesseiancary/plinth
tech:
  - TypeScript
  - Node.js
  - Express
  - PostgreSQL
  - Prisma
  - Zod
  - OpenAPI
  - Docker
featured: true
order: 0
date: 2026-11-05
---

## Overview

Plinth is a production-grade foundation for multi-tenant SaaS applications,
built as a public portfolio piece to demonstrate the architecture and
engineering discipline those products demand. It handles the parts every SaaS
has to get right before it can do anything interesting - tenancy, access
control, a typed API, documentation, and CI - so a team could build their actual
product on top of it. It is not yet deployed; a hosted version is planned.

## What I built

- **Single-database multi-tenancy** with per-request `organizationId` isolation
  enforced at the application layer, so one tenant can never read another's data.
- **A Prisma schema** covering six core models - User, Organization, Membership,
  Invitation, ApiKey, and WebhookEvent.
- **Role-based access control** with Owner, Admin, and Member roles.
- **A typed Express API** (TypeScript in strict mode, ESM) with a full
  middleware stack and Zod request validation, plus a health-check endpoint that
  verifies database connectivity.
- **OpenAPI 3.1 documentation** served through a Scalar UI.
- **Production tooling from the first commit** - a pnpm-workspaces monorepo,
  Docker Compose, and a 5-job parallel GitHub Actions CI/CD pipeline backed by a
  Vitest + Supertest integration suite.

## Challenges

The central discipline is tenant isolation: it has to hold on every query, not
just the ones you remember to guard, so the schema and middleware are designed to
make the isolated path the default one. The harder, longer-term challenge is
keeping that correctness as the surface area grows - authentication,
invitations, and API-key management all have to slot in without weakening the
guarantees. Treating it as production-grade from day one (strict types, CI
gates, a reproducible Docker toolchain) is what makes that evolution safe.

## Outcome

Plinth stands as a credible, inspectable SaaS foundation rather than a toy demo.
On the roadmap: a hosted demo, JWT authentication with refresh tokens,
organization / invitation / API-key endpoints, and a React + Vite + Tailwind +
TanStack Query frontend. The source is public on GitHub for anyone who wants to
read the architecture or build on it.
