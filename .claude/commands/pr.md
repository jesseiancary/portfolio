---
description: Review uncommitted changes and draft a copy/paste PR title + description
---

Review the currently uncommitted changes and draft a pull request title and
description for me to copy/paste.

1. Gather the changes (read-only - **do not** stage, commit, or modify anything):
   - `git status` for an overview
   - `git diff HEAD` for tracked edits (staged + unstaged)
   - List untracked files with `git ls-files --others --exclude-standard`, and
     read any that are relevant to understand what's new
2. Understand what actually changed and why - group related edits, and ignore
   noise (generated files, lockfiles) unless it's the point of the change.
3. Output exactly two things:
   - **PR title**: one concise line (imperative mood, ~70 chars max). Always
     start with a Conventional Commits type prefix followed by `: `, e.g.
     `feat: ...`, `fix: ...`, `docs: ...`, `refactor: ...`, `chore: ...`,
     `test: ...`, `build: ...`, `perf: ...`, `style: ...`, `ci: ...`. Pick the
     prefix that best matches the dominant change in the diff (use `fix` for
     bug fixes). A `type(scope): ...` form is fine when a scope adds clarity.
   - **PR description**: GitHub-flavored markdown. Present it as raw markdown
     **source inside a fenced ` ```markdown ` code block** so I can copy/paste it
     verbatim. Suggested sections: a short summary paragraph, a `## Changes`
     bullet list of what changed, and a `## Testing` note (e.g. `npm run build`
     result) - omit any section that doesn't apply. Keep it factual; don't
     invent testing you didn't run or features that aren't in the diff.

Do not open a PR or run `gh` - just produce the text.
