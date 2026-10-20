# Maintaining the living resume

The page is `/resume/`. Edit **`_resume/timeline.md`** to change its content.
Commit to `master`; the normal GitHub Pages build publishes the update. Local
unsaved edits do not change the public site. No duplicate PDF source is needed.

Keep the empty YAML front matter (`---` twice) at the top. Use second-level
headings for four-digit years, third-level headings for tagged entries:

```markdown
---
---

## 2026

### [work] role · organization

A short description with **emphasis** and [links](https://example.com).

- An achievement with a concrete outcome.
- Another achievement.

### [life] a personal milestone

What happened and why it mattered.

### [outside-of-work] a project, hobby, or community contribution

A short description.

## 2025

### [work] earlier role · organization

Earlier work.
```

Valid tags are exactly `[work]`, `[life]`, and `[outside-of-work]`. One tag per
entry. Years display newest first; entries within a year retain file order.
Use fourth-level headings (`####`) for subheadings inside entries. Reserve
second- and third-level headings for years and entries. Standard Markdown
paragraphs, lists, images, and links work. Use Markdown rather than raw HTML.
The screen and PDF display text in lowercase, while link destinations retain
their original casing. The initial entry is a starter based on the site's
existing author profile; replace it with your own achievements and dates.

Work is selected on every page load; the other categories start off. Categories
combine, and years without matching entries disappear. No selection shows a
helpful empty state and disables export. The PDF uses the current selections.
Click **export pdf**, choose **Save as PDF** in the browser print dialog, and
save. Disable the browser's headers/footers for the cleanest document. The print
layout uses A4, black text, contact links, and a conventional resume structure;
it works in either site theme. Browser printing is also supported directly.

All content in this file is public. Toggles control presentation only.
