# cloud-monk.com Redesign — Design Spec

## Overview

Redesign cloud-monk.com from a Minimal Mistakes Jekyll theme into a custom minimal Jekyll site with four content categories. The site should be modern, professional, and extremely simple — pure monochrome, system fonts, no JavaScript, no external dependencies.

**Owner:** Anand Kumar R ("cloud-monk"), Customer Engineer @ Google  
**Tagline:** "cloud in plain english"  
**Domain:** www.cloud-monk.com  
**Source:** github.com/ranand12/blog  

## Content Categories

| Category | Description | Count | Content type |
|----------|-------------|-------|--------------|
| Tools | Projects and tools built or contributed to | 0 (placeholder) | Markdown files with title, role, description |
| Videos | YouTube videos explaining cloud concepts | 22 | Existing `_posts` with `categories: videos` |
| Blogs | Written blog posts | 7 | Existing `_posts` with `categories: blog` |
| People | Podcast episodes / interviews with cloud architects | 17 | Existing `_posts` with podcast front matter |

## Architecture

### Framework
- **Jekyll** — same as current site. Same GitHub Pages deployment. Same markdown workflow.
- **No theme gem** — strip Minimal Mistakes entirely. Custom layouts and CSS only.
- **Minimal JavaScript** — only for dark/light theme toggle (~10 lines). No frameworks.
- **No external requests** — system font stack, no Google Fonts, no CDNs.

### File Structure

```
_config.yml                  — stripped down, no theme dependency
_layouts/
  default.html               — base HTML shell (head, nav, footer)
  home.html                  — 2x2 category grid
  category.html              — thumbnail grid (videos, people) or text list (blogs)
  tools.html                 — card grid for tools/projects
  post.html                  — individual blog post view
_pages/
  videos.md                  — front matter only, uses category layout
  blogs.md                   — front matter only, uses category layout  
  people.md                  — front matter only, uses category layout
  tools.md                   — front matter only, uses tools layout
  about.md                   — bio + "what I'm doing now" merged
_posts/                      — existing markdown files (unchanged)
assets/
  css/style.css              — single CSS file, ~200 lines
CNAME                        — www.cloud-monk.com
```

### Content Model

Posts stay in `_posts/` with existing front matter. Category pages filter by category using Liquid. One new data file (`_data/tools.yml`) is added for the Tools category since it has no existing posts.

- **Videos**: filtered by `categories: videos`. Link out to YouTube. Thumbnail from `header.teaser`.
- **Blogs**: filtered by `categories: blog`. Link to full post content on-site. Tags from front matter.
- **People**: filtered by podcast posts (detected by `file:` in front matter). Guest photo from `header.teaser`. Guest name/role from `sidebar` front matter.
- **Tools**: uses a separate `_data/tools.yml` file since this is a new category with no existing posts. Each entry has: `name`, `role`, `description`, `url`.

## Visual Design

### Colors — Pure Monochrome (Light + Dark)

**Light mode (default):**

| Token | Value | Usage |
|-------|-------|-------|
| `--text` | `#111` | Primary text |
| `--text-muted` | `#999` | Dates, tags, secondary info |
| `--text-faint` | `#ccc` | Footer text |
| `--bg` | `#fff` | Page background |
| `--bg-card` | `#fafafa` | Homepage category cards |
| `--border` | `#e5e5e5` | Card borders, nav border |
| `--border-light` | `#f0f0f0` | List item separators |

**Dark mode:**

| Token | Value | Usage |
|-------|-------|-------|
| `--text` | `#e5e5e5` | Primary text |
| `--text-muted` | `#888` | Dates, tags, secondary info |
| `--text-faint` | `#555` | Footer text |
| `--bg` | `#111` | Page background |
| `--bg-card` | `#1a1a1a` | Homepage category cards |
| `--border` | `#333` | Card borders, nav border |
| `--border-light` | `#222` | List item separators |

No accent color. Content thumbnails and guest photos provide all color. Theme preference persisted in `localStorage`.

### Typography

System font stack — zero external requests:
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```

- Page titles: 20px, weight 700
- Section headings: 16px, weight 600  
- Body/list items: 14-15px, weight 400-500
- Meta text (dates, tags): 12px, weight 400, muted color

### Layout

- **Max-width:** 720px centered container
- **Generous whitespace** — let the content breathe
- **Mobile-first responsive** — single column on mobile, 2-column grids on desktop

## Page Designs

### Homepage (`/`)

```
┌─────────────────────────────────────┐
│ cloud-monk                    about │  ← nav bar, thin border below
├─────────────────────────────────────┤
│                                     │
│       CLOUD IN PLAIN ENGLISH        │  ← tagline, uppercase, letterspaced
│                                     │
│   ┌──────────┐  ┌──────────┐       │
│   │  Tools   │  │  Videos  │       │  ← 2x2 grid of category cards
│   │ coming   │  │ 22 videos│       │    each card links to category page
│   │ soon     │  │          │       │
│   └──────────┘  └──────────┘       │
│   ┌──────────┐  ┌──────────┐       │
│   │  Blogs   │  │  People  │       │
│   │ 7 posts  │  │ 17 conv. │       │
│   └──────────┘  └──────────┘       │
│                                     │
│  anand kumar r · customer engineer  │  ← footer with social links
│        github · twitter · linkedin  │
└─────────────────────────────────────┘
```

- Cards: `#fafafa` background, `#e5e5e5` border, 8px border-radius
- Card text: category name centered, count below in muted text
- Subtle hover effect: border darkens slightly

### Videos Page (`/videos/`)

Thumbnail grid — 2 columns on desktop, 1 on mobile.

```
┌─────────────────────────────────────┐
│ cloud-monk                    about │
├─────────────────────────────────────┤
│                                     │
│ Videos                              │
│ 22 videos I've created              │
│                                     │
│ ┌────────────┐  ┌────────────┐     │
│ │ [thumbnail]│  │ [thumbnail]│     │  ← YouTube thumbnail from teaser
│ │ Gemini CLI │  │ AKS Upgrade│     │  ← title
│ │ 2025       │  │ 2022       │     │  ← year
│ └────────────┘  └────────────┘     │
│ ┌────────────┐  ┌────────────┐     │
│ │ [thumbnail]│  │ [thumbnail]│     │
│ │ AKS Taints │  │ AKS Nodes  │     │
│ │ 2021       │  │ 2021       │     │
│ └────────────┘  └────────────┘     │
│ ...                                 │
└─────────────────────────────────────┘
```

- Each card links to YouTube (opens in new tab)
- Thumbnail: existing `header.teaser` image
- Card: white background, subtle border, 6px border-radius
- Sorted by date, newest first

### People Page (`/people/`)

Same thumbnail grid as Videos — 2 columns.

```
┌─────────────────────────────────────┐
│ cloud-monk                    about │
├─────────────────────────────────────┤
│                                     │
│ People                              │
│ 17 conversations                    │
│                                     │
│ ┌────────────┐  ┌────────────┐     │
│ │ [photo]    │  │ [photo]    │     │  ← guest photo from teaser
│ │ Amina Al   │  │ Gerry      │     │  ← guest name
│ │ Sherif     │  │ Vogler     │     │
│ │ AI/ML @    │  │ Account    │     │  ← role from sidebar text
│ │ Google     │  │ Exec @     │     │
│ │            │  │ Google     │     │
│ └────────────┘  └────────────┘     │
│ ...                                 │
└─────────────────────────────────────┘
```

- Each card links to the podcast post page (with audio player if applicable)
- Sorted by episode number, newest first

### Blogs Page (`/blogs/`) — philschmid.de inspired

Two-column text layout — year label on left, posts on right.

```
┌─────────────────────────────────────┐
│ cloud-monk                    about │
├─────────────────────────────────────┤
│                                     │
│ Blogs                               │
│                                     │
│ 2025    Google's Unified GenAI SDK  │  ← year pinned left
│         March 2025 — google, genai  │  ← date + tags right
│                                     │
│ 2020    Azure ARM Template WHAT-IF  │
│         May 2020 — azure, iaac      │
│         ─────────────────────────── │
│         Blogging, Investing, Health │
│         April 2020 — health         │
│         ─────────────────────────── │
│         Book Notes — War of Art     │
│         April 2020 — booknotes      │
│         ─────────────────────────── │
│         Kubernetes Scheduler        │
│         Feb 2020 — kubernetes       │
│         ─────────────────────────── │
│         Linux for the Windows Folks │
│         Feb 2020 — linux, oss       │
│         ─────────────────────────── │
│         How Goals Failed Me         │
│         Jan 2020 — mindfulness      │
└─────────────────────────────────────┘
```

- Year label only shown once per group
- Each post links to full content on-site
- Tags shown in muted text after em-dash

### Tools Page (`/tools/`) — philschmid.de/projects inspired

Card grid — 2 columns on desktop, 1 on mobile.

```
┌─────────────────────────────────────┐
│ cloud-monk                    about │
├─────────────────────────────────────┤
│                                     │
│ Tools                               │
│ Projects and tools I've built.      │
│                                     │
│ ┌───────────────┐ ┌───────────────┐│
│ │ Project Name  │ │ Another Tool  ││  ← bold title
│ │ Creator       │ │ Maintainer    ││  ← role in muted text
│ │               │ │               ││
│ │ Description   │ │ Description   ││  ← 1-2 sentence description
│ │ of the tool   │ │ of the tool   ││
│ └───────────────┘ └───────────────┘│
│                                     │
└─────────────────────────────────────┘
```

- Cards: white background, `#e5e5e5` border, 8px border-radius
- Content from `_data/tools.yml` — easy to add new tools
- Each card optionally links to a URL (GitHub repo, demo, etc.)
- Placeholder content until user adds real tools

### About Page (`/about/`)

Simple prose page with two sections:

1. **About** — bio, role, what the site is about (from current about.md)
2. **Now** — what I'm doing now (from current now.md, merged in)

No sidebar, no author profile widget. Just clean text in the centered container.

## Navigation

```
cloud-monk                                    about
──────────────────────────────────────────────────
```

- "cloud-monk" links to homepage
- "about" links to about page
- No other nav links — the homepage IS the navigation (4 category cards)
- Thin `#eee` border below nav

## Footer

```
──────────────────────────────────────────────────
 [sun/moon toggle]          [mail] [X] [in] [gh]
```

- **Left side:** Dark/light theme toggle icon (sun for light, moon for dark). Clicking toggles the theme and persists to `localStorage`.
- **Right side:** Social icons — mail (mailto:ranand12@gmail.com), X/Twitter, LinkedIn, GitHub. Simple SVG icons in muted gray, no labels.
- Thin `#eee` border above footer
- Footer appears on every page

## Responsive Behavior

- **Desktop (>640px):** 2-column grids, two-column blog layout
- **Mobile (<640px):** Single column everything, year labels stack above posts
- No hamburger menu needed — nav is just logo + one link

## Migration Notes

- All existing `_posts/` files remain unchanged
- Existing teaser images in `assets/blogposts/` continue to work
- `_config.yml` is rewritten to remove Minimal Mistakes config
- Old Minimal Mistakes files (`_sass/`, old `_layouts/`, old `_includes/`) are removed
- CNAME file preserved
