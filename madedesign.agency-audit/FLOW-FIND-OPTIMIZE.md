# FLOW — Find + Optimize · madedesign.agency
Framework and prompts © Daniel Agrici, CC BY 4.0 — github.com/AgriciDaniel/flow
Date: 2026-10-26 · Evidence: the 7 live pages + the SEO audit. **No search volume, GSC, or competitor SERP data was used; volumes are unknown.**

---
# STAGE 1 — FIND

## Buyer & intent (from site copy; assumptions flagged)
- **Who:** owners of small service businesses in Morocco (the site names restaurants, clinics, law/professional practices; portfolio shows real estate, booking, showcase, restaurant). *Assumption: mostly French-speaking; some English.*
- **Problem they describe:** info scattered across social posts; customers look for a site before contacting; no clear next step.
- **Job to be done:** "get a site that brings enquiries and shows up when someone searches my trade + my city."
- **Buying stage:** most are *solution-aware* (they know they need a site) and compare studios, pricing, and delivery time. The site's own FAQ already shows the top three objections: cost, time, what to supply.

## Candidate query set (hypotheses — verify volume/SERP in GSC or Keyword Planner)
| Cluster | Example queries (FR) | Intent | Best asset |
|---|---|---|---|
| Studio / agency | création site web Maroc · agence web Maroc · agence web Casablanca/Rabat/Marrakech *(only for cities you really serve)* | Commercial | Homepage + city/pillar page |
| Format | création site vitrine Maroc · landing page / page d'atterrissage Maroc · site multipage | Commercial | One page per format |
| Price | prix création site web Maroc · combien coûte un site vitrine | Commercial-investigational (highest buying intent) | Pricing guide + pricing section |
| Timeline / process | délai création site web · que fournir pour créer un site | Investigational | FAQ-led guide |
| Vertical | site web restaurant Maroc · site web clinique/cabinet · site immobilier Maroc | Commercial | Vertical landing pages (reuse portfolio proof) |
| Visibility | référencement naturel Maroc · agence SEO Maroc · SEO local Maroc | Commercial/informational | SEO service page + blog |
| Social vs site | pourquoi avoir un site si j'ai Instagram | Informational (matches your own pitch) | Blog post |
| English | web design agency Morocco · website design Morocco | Commercial | `/en/` equivalents, written natively, not just translated |

Note: "agence web Maroc" is a crowded head term (assumption — check the SERP). Realistic first wins are the long tail: **format × vertical × city** and **price/timeline** questions.

## Evidence available now vs. gaps
| Have | Missing (blocks trust/extraction/conversion) |
|---|---|
| Clear H1, 4-step process, FAQ, 5 projects, 2 posts, FR/EN | Any page targeting a query other than the brand · pricing or ranges · named people · case studies with results · testimonials · real client domains (3 of 4 demos are `*.vercel.app`) · off-site profiles |

## Prioritized content plan (impact × proof available × effort)
| # | Asset | Why first | Needs from you |
|---|---|---|---|
| 1 | **Pricing & timeline page** (`/tarifs/`, "Combien coûte un site au Maroc") | Highest-intent cluster; FAQ currently dodges it ("Cela dépend") | Real price ranges per format *(verify — I won't invent)* |
| 2 | **3 format pages**: site vitrine, page d'atterrissage, site de marque | Already the site's structure; each gets its own title/H1/CTA | Scope, deliverables, typical timeline per format |
| 3 | **Vertical pages**: restaurant, immobilier, cabinet/clinique | Turns existing portfolio into rankable proof | One short case study each (goal, what shipped, outcome) |
| 4 | **About / team page** | E-E-A-T and entity; fixes author gap | Names, roles, photos, location |
| 5 | **Blog: 6 posts** (see below) | Feeds the above via internal links | Author byline, date |
| 6 | **EN versions of 1–4**, written for English-language queries | Only if English clients are a real target | Decision |

Blog order: (1) Prix d'un site web au Maroc · (2) Site vitrine, landing page ou multipage : lequel choisir · (3) Instagram ne remplace pas un site · (4) Ce qu'il faut préparer avant de créer son site · (5) Être trouvé sur Google quand on est une entreprise locale · (6) Pourquoi la vitesse d'un site influence les demandes *(only with measured data)*. Each should link up to its format page and down to the booking CTA. This extends the two existing posts, which should be linked into the cluster, not left orphaned.

## Measurement (set up before publishing)
- Search Console + Bing Webmaster (queries, pages, country) — needed to replace every hypothesis above with data.
- Events: click on "Réserver un appel gratuit" (by page/position); Cal.com booking completed (Cal embeds expose a booking-success event — *verify against current Cal docs*); language switch.
- Review monthly: impressions and clicks per cluster, booked calls per landing page, branded vs non-branded split.

## Claims to verify before publishing
Prices, timelines, "sites rapides" (use measured Lighthouse/CWV numbers or soften), any statistic in new posts, city names you claim to serve.

---
# STAGE 2 — OPTIMIZE
Selected 3 of 21 prompts: **technical-audit** (audit found crawl/discovery gaps), **schema** (zero structured data), **CTR audit** (generic titles/descriptions, no social image). Not chosen: content-audit and blog-writing prompts — there are only 2 short posts, so planning (above) comes first.

## 1) Technical — priority order
| # | Change | Evidence |
|---|---|---|
| 1 | Sitemap (`@astrojs/sitemap` + `site` + i18n) and `robots.txt` with `Sitemap:` | both 404 |
| 2 | Absolute canonical, hreflang, `og:url` from `Astro.site` | currently `href="/"` |
| 3 | One-hop redirect to `https://www` | 2 hops observed |
| 4 | Branded bilingual 404 | default Astro/Vercel page, `lang="en"` |
| 5 | Security headers in `vercel.json` | only HSTS present |
| 6 | Self-host fonts | Google Fonts stylesheet render-blocks |
| 7 | Run PageSpeed/CrUX baseline | not measured (API quota) |

## 2) Schema
Done as `generated-schema.json`: ProfessionalService + WebSite (home), BlogPosting + BreadcrumbList (posts). FAQPage is Info-only since 2026-05-07. Fill `[TODO-]` placeholders (logo, email, `sameAs`) with real values or drop them.

## 3) CTR audit — proposed snippets (draft; test, don't treat as final)
| Page | Current | Proposed | Len |
|---|---|---|---|
| `/` title | Made Design — Studio web au Maroc : des sites qu'on trouve sur Google | **Création de site web au Maroc \| Made Design** | 43 |
| `/` description | …sites web rapides et optimisés pour la recherche, au Maroc et à l'international. | **Studio web au Maroc : sites vitrine, pages d'atterrissage et sites de marque rapides, pensés pour Google. Réservez un appel gratuit.** | ~130 |
| `/en/` title | Made Design — Web studio in Morocco, building sites that get found | **Website Design in Morocco \| Made Design** | 39 |
| `/en/` description | …designs fast, search-ready websites… | **Web studio in Morocco building fast, search-ready showcase sites, landing pages and brand websites. Book a free call.** | ~117 |
| `/blog/` title | Blog — Made Design | **Blog : SEO et sites web pour entreprises \| Made Design** | 53 |
| `/blog/` description | …design web, design systems et bonnes pratiques d'interface… (off-topic) | **Conseils pour être trouvé sur Google, construire un site qui porte votre marque et transformer les visites en demandes.** | ~120 |
| SEO post title | Le SEO et son effet sur votre activité | **Pourquoi le SEO compte pour votre entreprise** (keep brand suffix in `<title>`) | ~45+14 |

Also: add the **same-language** `og:title`/`og:description`, and a 1200×630 `og:image` per locale — shared links currently show no image. The homepage H1 can stay (it's strong for conversion); put the query language in the title and the first paragraph ("Studio web au Maroc" is already there).
Brand note: keep "Made Design" in titles but at the end; a generic brand name will not carry query intent by itself.

## Measurement for Optimize
After deploy: confirm sitemap fetched and all URLs indexed in GSC; compare CTR per page for 4–6 weeks before/after title changes (change one group at a time); re-run `/seo-drift` for a baseline.

## Verification checklist
- [ ] Every price/timeline is from the owner, not estimated
- [ ] City names reflect real service areas
- [ ] No `[TODO-]` text left in JSON-LD
- [ ] Titles ≤ ~60 chars, descriptions ≤ ~155
- [ ] Canonical/hreflang absolute and reciprocal (fr ↔ en)
