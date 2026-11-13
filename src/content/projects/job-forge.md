---
title: Job Forge
description: An AI-powered job-application toolkit that generates tailored resumes and cover letters from LaTeX templates using the Claude Agent SDK - cloned and run locally, with personal data kept off version control.
thumbnail: ../../assets/projects/job-forge-thumb.png
screenshots:
  - ../../assets/projects/job-forge-shot-1.png
  - ../../assets/projects/job-forge-shot-2.png
  - ../../assets/projects/job-forge-shot-3.png
githubUrl: https://github.com/jesseiancary/job-forge
tech:
  - Claude Agent SDK
  - LaTeX
  - XeLaTeX
  - Docker
  - Git
featured: false
order: 2
date: 2026-11-05
---

## Overview

Job Forge is an AI-powered toolkit for the tedious part of a job search:
tailoring a resume and writing a cover letter for every single application. It
pairs the Claude Agent SDK with a set of LaTeX templates so a software engineer
can pick the right resume variant, hand it a job description, and get
professionally typeset, customized materials back. It is a local toolkit rather
than a hosted app - you clone the repo and run it on your own machine, which
keeps your personal data under your control.

## What I built

- **Resume variants per role type** (backend, full-stack, and so on) so each
  application starts from the most relevant base.
- **AI-driven tailoring** of both the resume and the cover letter to a specific
  job description and company, driven through the Claude Agent SDK.
- **LaTeX / XeLaTeX typesetting** for clean, professional output, with a
  consistent look across every document.
- **A centralized, template-based config** for personal info, so contact
  details and history live in one place instead of being duplicated per
  application.
- **An optional Docker Compose workflow** for a reproducible toolchain without
  installing a LaTeX distribution by hand.

## Challenges

The core constraint was that personal and sensitive data must never land in
version control. I solved it with template config files that each user copies
and fills in locally, plus a `.gitignore` that excludes generated PDFs, LaTeX
auxiliary files, and the personal-info configs. Reliable LaTeX special-character
escaping (dollar signs, percent signs, and the like) and a clean separation
between reusable templates and per-application generated output were the other
details that needed care to keep the workflow trustworthy.

## Outcome

The result is a reproducible, version-controlled application workflow: clone the
repo, fill in the config templates once, and generate per-company applications
locally on demand. It is intentionally run locally rather than deployed, so
there is no live site - the source is on GitHub for anyone who wants to clone it
and forge their own applications.
