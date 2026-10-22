# Tian Lan — A life of curiosity

English-first personal website for research, learning, reading, essays, and travel.

**Website:** https://tianl-07.github.io/

An original editorial design: warm paper, serif typography, forest green, a hand-coded contour illustration, and a responsive layout. No tracking, remote fonts, or client-side framework. The complete website works without JavaScript; archive filtering is an optional enhancement.

## Publish a new entry

1. Copy `content/_templates/new-entry.md` into `content/essays/`, `content/research/`, `content/learning/`, `content/reading/`, or `content/travel/`.
2. Give it an English, lowercase, hyphenated filename, such as `a-week-in-the-mountains.md`.
3. Set the title, description, date (`'YYYY-MM-DD'` in quotes), category, and tags. `lang: zh` supports a Chinese article. Write the body in Markdown. Only repository editors should supply Markdown/HTML; it is trusted author input, not a public upload form.
4. Set `draft: false` when ready. Drafts are excluded from pages, search, sitemap, and RSS. **The GitHub repository is public: draft source files committed here are still publicly readable. Keep private notes outside this repository.**
5. Run the commands below, review the preview, then commit all content and generated page changes to `main`.

```sh
npm ci
npm run build
npm run check
npm run preview
```

Open http://127.0.0.1:4173. Press Ctrl+C to stop the preview.

The static files are generated at the repository root for GitHub Pages → Deploy from a branch → `main` → `/ (root)`. `.nojekyll` disables Jekyll. No separate hosting account is required. `npm run build` must run before committing a content update; GitHub Pages serves the generated files as-is.

## Edit the website

- `scripts/build.mjs`: homepage, biography, section descriptions, navigation, article layout, RSS, sitemap. All biography details should be checked before making them public.
- `assets/style.css`: colours, fonts, spacing, responsive layouts, print styles, reduced-motion support.
- `assets/site.js`: archive search and category filters, including shareable query URLs.
- `assets/contours.svg`: original vector illustration; regenerate with `node scripts/make-art.mjs`.
- `content/`: article Markdown. Do not edit generated HTML directly; the next build replaces it.
- `scripts/generated-pages.json`: build-owned list used to remove stale article HTML when an article is removed or returned to draft. Keep this file tracked.

Add photographs to `assets/photos/` and reference them with descriptive alt text:

```md
![Describe what the photograph shows](/assets/photos/your-photo.jpg)
```

The `404.html`, RSS feed, sitemap, and search index (in the archive HTML) are generated together with all article pages. The preview serves the same files as GitHub Pages.

## Content in this first edition

Two short research introductions summarize existing background and an exploratory interest. They are not publication or result claims. Learning, reading, essays, and travel intentionally begin with honest empty states. Add your own writing and photographs when ready. GitHub and LinkedIn are the initial contact links; no email or CV has been assumed.

## Design references

These projects were consulted for inspiration; this website does not copy or bundle their source code or assets:

- [Astro Cactus](https://github.com/chrismwilliams/astro-theme-cactus): restrained, text-first post and note indexes.
- [al-folio](https://github.com/alshedivat/al-folio): academic information architecture.
- [Fuwari](https://github.com/saicaca/fuwari): a personal blog spanning several interests.

The original welcome text and old Jekyll theme configuration are preserved in `legacy/` for reference. The current site does not depend on them.
