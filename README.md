# Jimmy Xu — Personal Website

A static personal-website framework for Jimmy Xu. It is designed as a calm, editorial home for selected work, writing, and an open-ended collection of interesting things.

The visual direction is inspired by [Ariadna Bazaga Pozas's personal website](https://aribaza.github.io/). This repository is an independent redesign and implementation tailored for Jimmy's site. The initial project-card images and project examples are temporary placeholders derived from that public reference; replace them with Jimmy's own work and assets before treating the portfolio as a final public record.

## What is included

- A non-sticky top navigation: Home, Works, Writing, About, and a **More** menu.
- An inert **EN / 中文** control, ready for future localisation.
- A session-stable, extremely subtle green background palette.
- Works with Featured and topic filters, compact metadata, and no duplicated title beneath the artwork.
- A Writing shelf with category groups, expand-on-demand search, article detail pages, a reading rail, and << Previous / Home / Next >> navigation.
- A long-form About page, separate Education and Contact pages, a mailto-based contact form, and a downloadable/printable CV placeholder.
- A one-line underlined footer with internal links and GitHub, LinkedIn, and email links.
- A custom leaf favicon in favicon.svg.

## File map

| File | Purpose |
| --- | --- |
| index.html | Home — a flexible curated canvas for selected items. |
| works.html | Filterable project index. |
| writing.html | Curated writing list and client-side search. |
| article.html | One reusable article template, populated from the URL query string. |
| project.html | One reusable project-detail template. |
| about.html | Long-form self-introduction. |
| education.html, contact.html | Supporting pages linked from **More** and the footer. |
| jimmy-xu-cv.html | Lightweight CV placeholder; replace it with a PDF when ready. |
| styles.css | The complete responsive visual system. |
| app.js | Shared navigation/footer, content data, filtering, rendering, palette selection, and form behaviour. |
| favicon.svg | Leaf browser icon. |

## How the code works

There is no framework, build process, database, or server. GitHub Pages can serve these files as-is.

styles.css defines the design language: the green palette, editorial serif typography, spacing, responsive grids, card treatment, dropdown, article rail, and accessible focus states. The background never animates. app.js selects one subtle green palette per browser session and applies it through CSS variables, so the page remains still after it loads.

The JavaScript also keeps repeated interface pieces in one place:

- renderShell() inserts the shared top navigation and footer.
- PROJECTS is the source of truth for work cards and project-detail pages.
- ARTICLES is the source of truth for the Writing page, article pages, section filters, search, reading outline, and previous/next links.
- The More menu is an accessible button/dropdown; it closes on outside click or Escape.
- The contact form opens a pre-filled email using mailto:. It does not send data to a third-party service.

This keeps the site easy to maintain: update the data objects and the relevant page text rather than copying markup across many pages.

## Run locally

Clone the repository and serve its root:

    git clone https://github.com/flashfire1001/flashfire1001.github.io.git
    cd flashfire1001.github.io
    python3 -m http.server 4173

Then open [http://localhost:4173](http://localhost:4173).

## Customise it

1. In app.js, update the SITE object with your email, GitHub URL, and LinkedIn URL.
2. Replace the objects in PROJECTS with real projects, URLs, descriptions, topics, and your own thumbnail images.
3. Replace the objects in ARTICLES with your posts. Use cardTitle for the intentionally short title shown on a half-width shelf card; use title for the full article title.
4. Edit the prose in index.html, about.html, education.html, and contact.html.
5. Replace jimmy-xu-cv.html with a real PDF if desired, then change the CV links in app.js from jimmy-xu-cv.html to the PDF filename.
6. Keep favicon.svg, or replace its path with another square SVG/PNG favicon.

The current LinkedIn URL is deliberately a placeholder until Jimmy's public profile URL is added.

## Publish with GitHub Pages

This is a user/organisation Pages repository, so the files live at the repository root and GitHub Pages serves index.html directly. In GitHub:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**.
4. Save. The site will be available at https://flashfire1001.github.io/ after the Pages deployment finishes.

For future edits, commit and push to main; Pages redeploys automatically.

## Attribution

Inspired by the visual character and portfolio presentation of [Ariadna Bazaga Pozas](https://aribaza.github.io/). Please keep this acknowledgement when using this starting point, and replace all placeholder imagery and example content with original material.
