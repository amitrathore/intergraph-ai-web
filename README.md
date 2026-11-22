# intergraph-ai-web

The marketing site for [intergraph.ai](https://intergraph.ai). It is plain HTML, CSS and JS with no build step, deployed to GitHub Pages on push to `main` (`.github/workflows/pages.yml`). The workflow publishes only the site files: the pages, `styles.css`, `script.js`, `favicon.ico`, `site.webmanifest`, `assets/`, `CNAME` and `.nojekyll`. Repository notes such as this README and `tasks/` are not published. If you add a new top-level site file, add it to the workflow's "Stage site files" step.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Plain-language overview, what's live, The Js case study, operator and builder tracks |
| `how-it-works.html` | Architecture (Players → MoM → Game Master), the life of an action, money flow, guarantees |
| `protocols.html` | Each GM protocol with a status badge, and the 5Cs mapping |
| `operators.html` | What running a game gives you, plus The Js roles and journeys |
| `builders.html` | gm-lib, the `lein new gm` scaffold, handler contract, game spec, MCP tools, MoM API, roadmap |
| `vision.html` | Long-range vision, team and contact form |
| `blog.html` | Posts on awake.ventures |

The header and footer are repeated in every page. If you change them, change all seven.

## Status badges

Every capability claim carries one of these badges:
- `badge-live`: running in The Js
- `badge-lib`: built and tested in gm-lib, not enabled in a live game
- `badge-progress`: being built now
- `badge-planned`: on the roadmap

Before changing a badge, check it against the code in `mom` and `the-js-game`.

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```
