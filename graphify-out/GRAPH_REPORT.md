# Graph Report - optflow  (2026-10-26)

## Corpus Check
- 53 files · ~324,438 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 209 nodes · 345 edges · 18 communities (15 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b7c45722`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_console_DzxFduoL.mjs|console_DzxFduoL.mjs]]
- [[_COMMUNITY_console_DzxFduoL.mjs|console_DzxFduoL.mjs]]
- [[_COMMUNITY_entry.mjs|entry.mjs]]
- [[_COMMUNITY_STAGE 1 — FIND|STAGE 1 — FIND]]
- [[_COMMUNITY_SEO Audit — madedesign.agency|SEO Audit — madedesign.agency]]
- [[_COMMUNITY_Action Plan — madedesign.agency|Action Plan — madedesign.agency]]
- [[_COMMUNITY_Layout.astro_astro_type_script_index_0_lang.BP_tALKx.js|Layout.astro_astro_type_script_index_0_lang.BP_tALKx.js]]
- [[_COMMUNITY_Schema Report — madedesign.agency|Schema Report — madedesign.agency]]
- [[_COMMUNITY_vercel.json|vercel.json]]
- [[_COMMUNITY_site.ts|site.ts]]
- [[_COMMUNITY_dependencies|dependencies]]
- [[_COMMUNITY_Design System Optflow|Design System: Optflow]]
- [[_COMMUNITY_Product|Product]]
- [[_COMMUNITY_Astro Starter Kit Minimal|Astro Starter Kit: Minimal]]
- [[_COMMUNITY_tsconfig.json|tsconfig.json]]
- [[_COMMUNITY_CLAUDE|CLAUDE.md]]
- [[_COMMUNITY_AuroraCurtain.astro|AuroraCurtain.astro]]

## God Nodes (most connected - your core abstractions)
1. `../layouts/Home.astro` - 22 edges
2. `../../../layouts/BlogPost.astro` - 21 edges
3. `../../../layouts/BlogIndex.astro` - 20 edges
4. `../layouts/Layout.astro` - 20 edges
5. `Lang` - 14 edges
6. `../components/PostCard.astro` - 12 edges
7. `../components/Blog.astro` - 10 edges
8. `../components/Header.astro` - 10 edges
9. `SEO Audit — madedesign.agency` - 10 edges
10. `Design System: Optflow` - 9 edges

## Surprising Connections (you probably didn't know these)
- `Post` --references--> `Lang`  [EXTRACTED]
  src/data/blog.ts → src/data/site.ts
- `blogPosting()` --calls--> `postHref()`  [EXTRACTED]
  src/data/schema.ts → src/data/blog.ts
- `postBreadcrumb()` --calls--> `postHref()`  [EXTRACTED]
  src/data/schema.ts → src/data/blog.ts
- `blogBreadcrumb()` --calls--> `blogIndexHref()`  [EXTRACTED]
  src/data/schema.ts → src/data/blog.ts
- `postBreadcrumb()` --calls--> `blogIndexHref()`  [EXTRACTED]
  src/data/schema.ts → src/data/blog.ts

## Import Cycles
- None detected.

## Communities (18 total, 3 thin omitted)

### Community 0 - "console_DzxFduoL.mjs"
Cohesion: 0.11
Nodes (28): ../components/Reveal.astro, Block, blogIndexHref(), dateFmt, formatDate(), Post, postHref(), posts (+20 more)

### Community 1 - "console_DzxFduoL.mjs"
Cohesion: 0.14
Nodes (14): @vercel/analytics/astro, dependencies, astro, @astrojs/sitemap, @astrojs/vercel, framer-motion, lenis, lucide-react (+6 more)

### Community 2 - "entry.mjs"
Cohesion: 0.60
Nodes (4): site, escape(), json(), POST()

### Community 3 - "STAGE 1 — FIND"
Cohesion: 0.13
Nodes (14): 1) Technical — priority order, 2) Schema, 3) CTR audit — proposed snippets (draft; test, don't treat as final), Buyer & intent (from site copy; assumptions flagged), Candidate query set (hypotheses — verify volume/SERP in GSC or Keyword Planner), Claims to verify before publishing, Evidence available now vs. gaps, FLOW — Find + Optimize · madedesign.agency (+6 more)

### Community 4 - "SEO Audit — madedesign.agency"
Cohesion: 0.15
Nodes (12): AI Search Readiness (35), Content Quality (68), Executive summary, Images (70), Limitations, On-Page SEO (62), Performance (not measured), Schema (0) (+4 more)

### Community 5 - "Action Plan — madedesign.agency"
Cohesion: 0.29
Nodes (6): Action Plan — madedesign.agency, Critical (fix immediately), High (within 1 week), Low (backlog), Medium (within 1 month), Ongoing

### Community 6 - "Layout.astro_astro_type_script_index_0_lang.BP_tALKx.js"
Cohesion: 0.24
Nodes (8): clamp(), compile(), FALLBACK_COLORS, mountAurora(), QUAD, resolveColors(), Rgb, Settings

### Community 7 - "Schema Report — madedesign.agency"
Cohesion: 0.29
Nodes (6): Detection, Gaps in the data I can't fill for you, Implementation (Astro), Recommendations (priority order), Schema Report — madedesign.agency, Validation Results

### Community 13 - "site.ts"
Cohesion: 0.20
Nodes (22): ../components/About.astro, ../components/Blog.astro, ../components/Contact.astro, ../components/Faq.astro, ../components/Footer.astro, ../components/Formats.astro, ../components/Header.astro, sections (+14 more)

### Community 25 - "dependencies"
Cohesion: 0.13
Nodes (14): allowScripts, esbuild, devDependencies, @types/nodemailer, engines, node, name, scripts (+6 more)

### Community 27 - "Design System: Optflow"
Cohesion: 0.07
Nodes (26): Buttons, Cards / Containers, Colors, Components, Design System: Optflow, Do:, Do's and Don'ts, Don't: (+18 more)

### Community 41 - "Product"
Cohesion: 0.20
Nodes (9): Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product, Product Principles, Product Purpose (+1 more)

### Community 47 - "Astro Starter Kit: Minimal"
Cohesion: 0.40
Nodes (4): Astro Starter Kit: Minimal, 🧞 Commands, 🚀 Project Structure, 👀 Want to learn more?

### Community 49 - "tsconfig.json"
Cohesion: 0.50
Nodes (3): exclude, extends, include

## Knowledge Gaps
- **102 isolated node(s):** `name`, `type`, `version`, `node`, `dev` (+97 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `../layouts/Layout.astro` connect `console_DzxFduoL.mjs` to `console_DzxFduoL.mjs`, `entry.mjs`, `site.ts`?**
  _High betweenness centrality (0.115) - this node is a cross-community bridge._
- **Why does `dependencies` connect `console_DzxFduoL.mjs` to `dependencies`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _102 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `console_DzxFduoL.mjs` be split into smaller, more focused modules?**
  _Cohesion score 0.11095305832147938 - nodes in this community are weakly interconnected._
- **Should `console_DzxFduoL.mjs` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `STAGE 1 — FIND` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._