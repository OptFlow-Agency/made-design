# SEO Audit — madedesign.agency
Date: 2026-10-26 · Business type: **Agency / web studio (Morocco, FR+EN, service-business)** · Pages crawled: 7 (the full discoverable set; no sitemap exists)

## Executive summary
**SEO Health Score: 52 / 100** (Performance excluded, weights renormalised — see Limitations)

The on-page basics are good: unique titles and descriptions, one H1 per page, clean heading hierarchy, FR/EN hreflang cluster, responsive WebP images with srcset, Brotli, HSTS. What is missing is the discovery and entity layer: no sitemap, no robots.txt, no structured data, no social image, and relative canonical/hreflang URLs.

| Category | Weight | Score |
|---|---|---|
| Technical SEO | 22% | 55 |
| Content Quality | 23% | 68 |
| On-Page SEO | 20% | 62 |
| Schema / Structured Data | 10% | 0 |
| Performance (CWV) | 10% | not measured |
| AI Search Readiness | 10% | 35 |
| Images | 5% | 70 |

### Top 5 issues
1. **No XML sitemap** (`/sitemap.xml` → 404 on www).
2. **No structured data on any page** — no Organization/ProfessionalService, WebSite, BlogPosting, FAQPage, BreadcrumbList.
3. **Canonical and hreflang use relative URLs** (`href="/"`, `href="/en/"`). Google tolerates relative canonicals but recommends absolute; hreflang and `og:url` should be absolute. One misconfigured base (e.g. a preview domain) silently breaks the cluster.
4. **No `robots.txt`** (404) — crawling isn't blocked, but there's no sitemap pointer and no AI-crawler policy.
5. **No `og:image` / Twitter Card** on any page — links shared on WhatsApp/LinkedIn/X render as bare text.

### Top 5 quick wins
1. Add `@astrojs/sitemap` and `site: 'https://www.madedesign.agency'` in `astro.config.mjs` — this also fixes the relative-URL problem if the layout builds canonicals from `Astro.site`.
2. Add `public/robots.txt` with a `Sitemap:` line.
3. Add JSON-LD in the layout: `ProfessionalService` + `WebSite`, and `BlogPosting` on posts.
4. Add a default 1200×630 `og:image` plus `twitter:card`, and `og:url`/`og:site_name`.
5. Mark up the existing FAQ section ("Questions fréquentes") as `FAQPage`.

## Technical SEO (55)
**Works:** HTTPS everywhere, HSTS (2 yrs), http→https 308, Brotli, real 404 status for unknown URLs, `lang` set, viewport set, clean URLs, Vercel CDN (`x-vercel-cache: HIT`).
- **High — no sitemap.xml.** With 7 URLs this is survivable, but you lose lastmod signals, hreflang-in-sitemap, and Search Console submission.
- **Medium — no robots.txt** (the 404 is treated as "allow all").
- **Medium — relative canonical/hreflang** (all 7 pages). Make absolute.
- **Medium — redirect chain on apex:** `http://madedesign.agency` → `https://madedesign.agency` → `https://www.madedesign.agency` (two hops). Point http apex straight to the final https www URL in Vercel domain settings.
- **Low — security headers:** only HSTS is sent. Missing `Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`/`frame-ancestors`, `Permissions-Policy`. Add via `vercel.json` `headers`.
- **Low — default 404 page:** unstyled, `lang="en"` on a FR-first site, no navigation or links back. Build a branded `404.astro`.
- **Low — only an SVG favicon;** add `apple-touch-icon` (180px) and a `.ico` fallback.
- **Low — Google Fonts loaded from googleapis.com** (render-blocking stylesheet). Self-host Outfit/Geist Mono with `font-display: swap` (Astro Fonts API / fontsource).

## On-Page SEO (62)
**Works:** all titles unique and under ~65 chars, descriptions unique, bilingual, single H1 each.
- **Medium — `/blog/` meta description is off-topic:** "design web, design systems et bonnes pratiques d'interface" while the posts are about brand identity and SEO for businesses. Rewrite to match the real content and target query.
- **Medium — title targeting:** the homepage title is brand-led ("Made Design — Studio web au Maroc…"). Test leading with the money query ("Création de site web au Maroc — Made Design") and add city/service terms (Casablanca, Rabat, Marrakech, as true to where you operate).
- **Medium — thin internal linking:** the homepage links to only 2 blog posts and has no dedicated service/format pages. "Site vitrine", "Page d'atterrissage" and "Site de marque multipage" are H3s on one page; each is a keyword-rich page that could rank on its own.
- **Medium — portfolio links point to `*.vercel.app` demo domains** (lumina-studio-vert, strata-pi-ten, vpg-nu). Prospects will see these as staging URLs, which hurts trust. Use real/branded domains or case-study pages on your own site (these also create indexable content).
- **Low — blog index has 218 words / 2 posts;** it will be thin until more posts exist.

## Content Quality (68)
- Clear value proposition, concrete outcomes ("Quelqu'un tape votre activité et votre ville : vous apparaissez"), 4-step process, FAQ — good for conversion and for answer-extraction.
- **Medium — E-E-A-T gaps:** no named authors, bios, founder/team page, client testimonials, or measurable results (rankings, traffic, leads). No About page. Posts are ~500 words, generic, and carry no byline or dates in markup.
- **Medium — no case studies** behind the 5 projects shown; they're a name, a tag, and a screenshot.
- **Low — the EN version is a faithful translation;** fine, but add locale-specific terms (e.g. "web agency Morocco", "website design Casablanca") rather than literal translation only.

## Schema (0)
No JSON-LD found on any of the 7 pages. See ACTION-PLAN for the exact blocks. Do not add `AggregateRating` or `Review` without real reviews.

## Performance (not measured)
PageSpeed Insights API returned **HTTP 429 (daily quota)**, and no CrUX/GSC credentials are configured, so there are no CWV numbers. Static indicators are favourable: server-rendered Astro HTML (47 KB), 6 scripts total, Brotli, CDN-cached, hero image eager with explicit width/height, others lazy. Run PageSpeed manually (pagespeed.web.dev) or give an API key to complete this category. My measured ~15 s response times came from this sandbox's network path (they were uniform even for 404s) and are **not** evidence of a slow site.

## Images (70)
**Works:** WebP with 480/720/1080 srcset + `sizes`, explicit dimensions, lazy loading below the fold, descriptive alt on portfolio shots ("VPG, Site immobilier").
- **Low:** 3 images have empty alt (hero + 2 feature SVGs). Acceptable if decorative; if the hero illustration carries meaning, describe it.
- **Medium — no social preview image** (`og:image`).
- **Low:** portfolio alts could be more descriptive ("Site immobilier VPG — page d'accueil") for image search.

## AI Search Readiness (35)
- **High — no llms.txt** (optional/low standardisation, but cheap) and no robots.txt policy for GPTBot, ClaudeBot, PerplexityBot, Google-Extended. Default is allowed; state it explicitly.
- **High — no Organization entity:** no schema, no `sameAs` (LinkedIn, Instagram, Behance, Clutch), no consistent NAP. LLMs and Google can't resolve "Made Design" as a distinct entity (the name collides with many "made"/"design" results).
- **Medium — passages aren't self-contained or sourced:** claims like "pages rapides" carry no figures. Add specific, quotable facts (load times, delivery timelines, pricing ranges, client results).
- **Positive:** clean semantic HTML, question-style FAQ, server-rendered content (readable without JS).

## Limitations
Not run: Google API data (no credentials), PageSpeed/CWV (quota), backlinks (no Moz/Bing keys), screenshots, DataForSEO. Local SEO/GBP not assessed — no Google Business Profile or address was visible on the pages checked; if you want to rank for "agence web + ville", that's worth a separate local pass. Subagents were not spawned; all checks were run inline against 7 pages.
