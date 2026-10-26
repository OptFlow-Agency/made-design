# Graph Report - optflow  (2026-10-26)

## Corpus Check
- 44 files · ~345,152 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 151 nodes · 254 edges · 13 communities (11 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9625a490`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_console_DzxFduoL.mjs|console_DzxFduoL.mjs]]
- [[_COMMUNITY_console_DzxFduoL.mjs|console_DzxFduoL.mjs]]
- [[_COMMUNITY_entry.mjs|entry.mjs]]
- [[_COMMUNITY_Layout.astro_astro_type_script_index_0_lang.BP_tALKx.js|Layout.astro_astro_type_script_index_0_lang.BP_tALKx.js]]
- [[_COMMUNITY_site.ts|site.ts]]
- [[_COMMUNITY_dependencies|dependencies]]
- [[_COMMUNITY_Design System Optflow|Design System: Optflow]]
- [[_COMMUNITY_Product|Product]]
- [[_COMMUNITY_Astro Starter Kit Minimal|Astro Starter Kit: Minimal]]
- [[_COMMUNITY_tsconfig.json|tsconfig.json]]
- [[_COMMUNITY_CLAUDE|CLAUDE.md]]
- [[_COMMUNITY_AuroraCurtain.astro|AuroraCurtain.astro]]

## God Nodes (most connected - your core abstractions)
1. `../layouts/Home.astro` - 19 edges
2. `../../../layouts/BlogIndex.astro` - 17 edges
3. `../../../layouts/BlogPost.astro` - 17 edges
4. `Lang` - 13 edges
5. `../components/PostCard.astro` - 12 edges
6. `../components/Blog.astro` - 10 edges
7. `../components/Header.astro` - 9 edges
8. `Design System: Optflow` - 9 edges
9. `Product` - 9 edges
10. `../components/Hero.astro` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Post` --references--> `Lang`  [EXTRACTED]
  src/data/blog.ts → src/data/site.ts

## Import Cycles
- None detected.

## Communities (13 total, 2 thin omitted)

### Community 0 - "console_DzxFduoL.mjs"
Cohesion: 0.11
Nodes (21): ../components/Footer.astro, ../components/Header.astro, sections, ../components/PostCard.astro, ../components/Reveal.astro, Block, blogIndexHref(), dateFmt (+13 more)

### Community 1 - "console_DzxFduoL.mjs"
Cohesion: 0.15
Nodes (13): @vercel/analytics/astro, dependencies, astro, @astrojs/vercel, framer-motion, lenis, lucide-react, nodemailer (+5 more)

### Community 2 - "entry.mjs"
Cohesion: 0.83
Nodes (3): escape(), json(), POST()

### Community 6 - "Layout.astro_astro_type_script_index_0_lang.BP_tALKx.js"
Cohesion: 0.24
Nodes (8): clamp(), compile(), FALLBACK_COLORS, mountAurora(), QUAD, resolveColors(), Rgb, Settings

### Community 13 - "site.ts"
Cohesion: 0.25
Nodes (19): ../components/About.astro, ../components/Blog.astro, ../components/Contact.astro, ../components/Faq.astro, ../components/Formats.astro, ../components/Hero.astro, ../components/Process.astro, ../components/Services.astro (+11 more)

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
- **67 isolated node(s):** `name`, `type`, `version`, `node`, `dev` (+62 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `console_DzxFduoL.mjs` to `dependencies`?**
  _High betweenness centrality (0.156) - this node is a cross-community bridge._
- **Why does `../../../layouts/BlogPost.astro` connect `console_DzxFduoL.mjs` to `site.ts`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _67 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `console_DzxFduoL.mjs` be split into smaller, more focused modules?**
  _Cohesion score 0.11363636363636363 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `Design System: Optflow` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._