# Action Plan — madedesign.agency

## Critical (fix immediately)
None — nothing blocks indexing. The site is crawlable and all pages return 200 with self-canonicals.

## High (within 1 week)
1. **Generate sitemap.xml** — `npx astro add sitemap`; set `site: 'https://www.madedesign.agency'`; configure `i18n` so FR/EN get `xhtml:link` alternates. Submit in Google Search Console and Bing Webmaster.
2. **Add robots.txt** (`public/robots.txt`):
   ```
   User-agent: *
   Allow: /
   Sitemap: https://www.madedesign.agency/sitemap-index.xml
   ```
3. **Add JSON-LD** in the shared layout:
   - `ProfessionalService` (name, url, logo, `areaServed: Morocco`, `sameAs`, contact point; add address only if real and public)
   - `WebSite` with `inLanguage`
   - `BlogPosting` on posts (headline, datePublished, dateModified, author, image)
   - `FAQPage` for the homepage FAQ, `BreadcrumbList` for blog pages
4. **Make canonical + hreflang absolute** — build from `new URL(Astro.url.pathname, Astro.site)`. Also add `og:url`.

## Medium (within 1 month)
5. Default `og:image` (1200×630) per locale + `twitter:card=summary_large_image`, `og:site_name`; per-post images for blog.
6. Fix `/blog/` meta description (FR and EN) to match actual topics.
7. Replace `*.vercel.app` portfolio links with real domains or on-site case-study pages (problem → approach → result, with numbers).
8. Create one page per format (site vitrine, landing page, site de marque) and an About/Team page with named people; link them from nav and footer.
9. Add authors, dates, and a visible "last updated" to blog posts; publish 1–2 posts per month aimed at real queries ("prix création site web Maroc", "site vitrine vs réseaux sociaux").
10. Collapse the apex redirect chain (http apex → https www in one hop).
11. Define an AI-crawler policy in robots.txt; optionally add `llms.txt`.

## Low (backlog)
12. Security headers via `vercel.json` (CSP, X-Content-Type-Options, Referrer-Policy, frame-ancestors, Permissions-Policy).
13. Branded bilingual 404 page.
14. Self-host fonts; add `apple-touch-icon` and `.ico`.
15. Improve alt text on portfolio images.

## Ongoing
- Connect Search Console + (optional) GA4; track indexation of all 7+ URLs.
- Run PageSpeed/CrUX once quota resets and record LCP/INP/CLS baselines (`/seo-drift` to snapshot after fixes).
- Build citations/backlinks: Clutch, local directories, Moroccan business listings, LinkedIn, guest posts.
