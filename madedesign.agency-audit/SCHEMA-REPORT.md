# Schema Report — madedesign.agency
Date: 2026-10-26 · Pages scanned: `/`, `/en/`, `/blog/`, `/en/blog/`, 2 blog posts (www host, server-rendered HTML)

## Detection
| Format | Found |
|---|---|
| JSON-LD | **0** on all 7 pages |
| Microdata (`itemscope`) | 0 |
| RDFa | 0 |

## Validation Results
| Schema | Type | Status | Issues |
|---|---|---|---|
| — | — | ❌ none present | No structured data anywhere, so no entity, article or breadcrumb signals |

## Recommendations (priority order)
| # | Type | Where | Priority | Why |
|---|---|---|---|---|
| 1 | `ProfessionalService` (Organization subtype) with stable `@id` | Home FR + EN | High | Establishes the "Made Design" entity; referenced by every other block |
| 2 | `WebSite` (`inLanguage` fr/en) | Home FR + EN | High | Site name and language signals |
| 3 | `BlogPosting` | Each post | High | Dates/headline for 2 posts (published 2026-10-26 and 2026-10-20) |
| 4 | `BreadcrumbList` | Blog + posts | Medium | Visible hierarchy Accueil › Blog › Article |
| 5 | `FAQPage` | Home | **Info** | Google retired FAQ rich results for all sites on 2026-05-07. It no longer gives a SERP feature. It still aids entity/answer extraction for AI surfaces, so add it only if it's cheap |

**Correction to my earlier audit:** I listed FAQPage as a quick win for a rich result. That is outdated. It should be the lowest priority, and the Organization/WebSite/BlogPosting blocks matter more.

Not recommended: `LocalBusiness` (no public address or opening hours on the site), `AggregateRating`/`Review` (no reviews exist), `HowTo` (deprecated), `Service` per format (wait until each format has its own page).

## Gaps in the data I can't fill for you
The site publishes **no email, phone, address, social profiles or logo file**. In `generated-schema.json` these are `[TODO-…]` placeholders. Remove any property you won't publish; do not ship placeholder text. Adding real `sameAs` links (LinkedIn, Instagram, Clutch…) is the most valuable entity signal.

## Implementation (Astro)
- Put JSON-LD in the layout as server-rendered `<script type="application/ld+json" set:html={JSON.stringify(schema)} />`, so it's in the initial HTML.
- Build every URL from `Astro.site` (set `site: 'https://www.madedesign.agency'`). Never relative.
- Blog: generate `BlogPosting` from the post's frontmatter (title, description, date, locale). Add an `author` (a real `Person` with a bio page is better than the Organization fallback used here) and a real cover image.
- Validate with Google's Rich Results Test and validator.schema.org after deploy.

Output: `generated-schema.json` (valid JSON, all URLs absolute).
