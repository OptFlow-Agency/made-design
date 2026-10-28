# Review: content-trust-update

## 1. Summary of changes

**A. Content**
- A1: guarantee-style claims softened (see section 5). Benefit card renamed "Facilitez la prise de contact" / "Make it easy to get in touch".
- A2: `pricing`, `timing`, `payment` added to `src/data/site.ts` (single place to edit). FAQ cost and timing answers use them; price hint and timeline shown on the three Formats cards; two new FAQ items (payment, hosting/domain).
- A3: `type: "client" | "concept"` on each portfolio item; "Projet concept" / "Concept project" badge; new subtitle.
- A4: new `Studio.astro` section ("Un studio à taille humaine." / "A small studio, close to you.") after Démarche. Optional `site.founder` (name, role, bio, photo in `src/assets/team/`); renders only when filled. Linked from the footer "Explorer" list only (header unchanged to avoid crowding).
- A5: WhatsApp and email secondary buttons in the Contact section, driven by `site.whatsappNumber` / `site.email`; both empty, so neither renders yet.
- A6: footer social links moved to `site.social`; only filled ones render, the "Suivre" column is hidden when none are; labels are accessible ("Instagram (nouvel onglet)").
- A7: blog subtitle replaced (FR/EN). Posts untouched.
- A8: "20 minutes, sans engagement" / "20 minutes, no commitment" added under the Contact lead. CTA label is already "Réserver un appel gratuit" everywhere.

**B. Design**
- B1: body, nav, buttons, lists, footer and blog links moved from Geist Mono to Outfit (already the heading font, already loaded). Mono kept only for small uppercase labels, tags, the language switch and step numbers. No new font files.
- B2: hero card now holds a CSS browser-window frame around the Olivia screenshot, an orange-dot title bar, a search-result chip and a translated caption. Same dark rounded card with grid background. The old English-only SVG was deleted. FR/EN alt text; fixed aspect ratio plus width/height, so no layout shift.
- B3: `Faites‑vous` uses U+2011; the H1 already had `text-balance`. Checked at 360/768/1024/1440: it renders as "Faites-vous" on one line, and the glyph is fine.
- B4: contrast measured (section 6), all pass. Focus-visible outline already global. Language switch has an accessible group label (`aria-label`).
- B5: 360/768/1024/1440, FR and EN: no horizontal scroll, no console errors. Tap targets enlarged for the logo, FAQ summaries and the language switch (hit area extended with a pseudo-element).

## 2. Files changed
`src/data/site.ts`, `src/data/copy.ts`, `src/components/{Hero,Formats,Work,Contact,Footer,Header,Faq,Logo,Services,PostCard}.astro`, new `src/components/Studio.astro`, `src/layouts/{Home,BlogPost}.astro`, `src/styles/global.css`, new `src/assets/team/.gitkeep`, deleted `src/assets/hero-image.svg`, `REVIEW.md`.

## 3. Needs your input
- [ ] WhatsApp number (`site.whatsappNumber`, digits only, e.g. `212600000000`)
- [ ] Email (`site.email`); it also feeds the structured data contact point
- [ ] Social URLs (`site.social.instagram / linkedin / facebook`)
- [ ] Founder name, role (FR/EN), bio (FR/EN), photo file in `src/assets/team/`
- [ ] Final prices: vitrine 3 500 MAD, landing 2 000 MAD, brand "sur devis" (**DRAFT**)
- [ ] Final timings: vitrine "2 à 4 semaines", landing "7 à 10 jours" (**DRAFT**). Brand has no timing, so none is shown.
- [ ] Payment terms: 50 % deposit, balance on delivery (`payment.depositPercent`)
- [ ] Hosting/domain statement: "Le nom de domaine et l'hébergement restent à votre nom." **Please confirm.**
- [ ] "20 minutes, sans engagement": taken from your brief; confirm it matches the Cal.com event length
- [ ] "Devis précis sous 48 h" (in the cost answer): confirm
- [ ] Client vs concept for each project (section 4)
- [ ] The hero chip says "Olivia, Restaurant · Casablanca": illustrative, confirm you are happy to show it

## 4. Assumptions I made
- Portfolio: VPG, Lumina Studio, Strata (*.vercel.app) = concept; AZ Global Activities and Olivia = client.
- Prices/timings are stored as numbers/strings per language; the helper builds "à partir de 3 500 MAD" / "from 3,500 MAD" (non-breaking spaces). If a price is set to `null` it reads "sur devis"; if the vitrine price were null the FAQ sentence ("démarre sur devis") would read awkwardly, so keep it filled.
- Config lives in `src/data/site.ts` (this repo's equivalent of `src/config/site.ts`).
- The timing value is "2 à 4 semaines" without the "selon la rapidité de vos retours" tail, because the FAQ sentence already adds it.
- New section id is `#studio`; the nav label is "Qui sommes-nous" / "About".
- Outfit is loaded from Google Fonts as before (not self-hosted); I did not change that. No new font, so no new licence.
- Hero uses the existing Olivia image, so the CSS/SVG fallback was not needed.
- Existing "About.astro" is the "Pourquoi un site" block, so I named the new component `Studio.astro`.
- Meta title changed from "des sites qu'on trouve sur Google" to "des sites pensés pour être trouvés".

## 5. Copy softened
| Original | New |
|---|---|
| Quelqu'un tape votre activité et votre ville : vous apparaissez. | Un site structuré pour la recherche, pour que les clients de votre ville vous trouvent plus facilement. |
| Someone searches your service and your city: you appear. | A site structured for search, so customers in your city can find you more easily. |
| Recevez plus de demandes / Receive more enquiries | Facilitez la prise de contact / Make it easy to get in touch (body unchanged, no number promised) |
| Soyez trouvé sur Google | Soyez plus facile à trouver sur Google; "pour être visible" → "pour augmenter vos chances d'être visible" (EN: "Be easier to find on Google", "to improve your chances of being visible") |
| Ne perdez aucune demande sur mobile / Never lose an enquiry on mobile | Soyez facile à contacter sur mobile / Be easy to reach on mobile |
| …gagne en sérieux dès le premier regard | …inspire davantage de sérieux… (EN "looks more serious" → "comes across as more serious") |
| Hero: …sites rapides… qui transforment chaque visite en demande | …pensés pour transformer vos visites en demandes (EN: "designed to turn visits into enquiries") |
| Un site crédible qui reçoit des demandes | Un site crédible, conçu pour recevoir des demandes (EN: "designed to receive enquiries") |
| Vos pubs mènent à une page qui convertit | …une page conçue pour convertir (EN: "designed to convert") |
| Un processus clair: …pas de surprises | …des livrables définis dès le départ (EN: "no surprises" → "deliverables defined from the start") |
| Meta title: des sites qu'on trouve sur Google | des sites pensés pour être trouvés |

Not changed (you said not to rewrite posts): blog body at `src/data/blog.ts` ~L166 ("A well-ranked site becomes a steady acquisition channel", "more quote requests…") and L327 ("garantit que les designs… suivent toujours…", a design-system post, not a promise about our results). Blog excerpts and meta descriptions contain no absolute promises.

## 6. Accessibility results
| Pair | Ratio | AA 4.5:1 |
|---|---|---|
| White on CTA `accent-fill` #d4400a | 4.63 | pass |
| White on CTA hover #b83507 | 5.91 | pass |
| Muted #5c5b57 on white | 6.80 | pass |
| Muted on surface #f6f5f2 | 6.24 | pass |
| dark-muted #b5b4ae on dark | 8.94 | pass |
| accent-fill text on white (labels) | 4.63 | pass |
| Accent #e8480c on surface (H1 "trouver", large text only) | 3.59 | passes large-text 3:1 only; not used for body text |

No colour was changed (before = after). Focus: global `:focus-visible` outline in accent. Language switch group has `aria-label`; the hero image has FR/EN alt; the social links have labels.

## 7. Things to check manually
- The Olivia screenshot itself contains English text and a "00 00 00 00 00" placeholder phone; it is an image in a portfolio and now also the hero.
- Desktop nav links are ~34px tall (the mobile menu is fine); I left them since they are mouse targets.
- `astro check` is not installed (`@astrojs/check`), so only `astro build` was run (passes). No linter is configured in the repo.
- Outfit via Google Fonts is a third-party request; self-hosting would help performance and privacy.
- Footer social icons for Facebook/Instagram/LinkedIn are inline SVG; X was dropped from the footer (no handle supplied). Add it to `site.social` and `Footer.astro` if wanted.
- `madedesign.agency-audit/` still contains older audit reports mentioning previous copy.
- With no email/WhatsApp filled, Contact shows only the calendar; nothing else changed there.

---

# Hero animation (branch `hero-process-animation`)

## What was built
The hero card keeps its dark rounded shape, padding and grid background. Its contents are now an original inline-SVG "design process" loop (9 s, infinite): wireframe blocks rise in (0–1.5 s), the wireframe is designed (orange hero block, off-white text, palette and "Aa" chip, 1.5–3.5 s), a search bar types a query and a generic result card appears (3.5–5.5 s), a connector grows from the result to the site and the "Contact" button pulses once (5.5–7.5 s), then everything fades for a clean loop (7.5–9 s). Only `opacity` and `transform` are animated; no JS drives it.

- Static final frame is the default styling. `prefers-reduced-motion: reduce` (verified: 0 running animations) and no-CSS-animation both show it: designed site + result card, pulse ring off, query fully typed.
- Keyframes are generated in the Hero frontmatter from one timeline table, so timings are easy to tweak, and are only emitted inside `@media (prefers-reduced-motion: no-preference)`.
- A ~4-line IntersectionObserver toggles `.is-paused` (`animation-play-state: paused`) while the card is off-screen.
- SVG has `role="img"` and a localized `aria-label`; all inner shapes are in an `aria-hidden` group.
- Size: figure markup ≈ 6.0 KB + CSS ≈ 5.2 KB (uncompressed, in the built HTML), under the 12 KB budget.
- Olivia image and search chip removed from the hero; the portfolio still uses `olivia.png`. No assets deleted.

## Files changed
`src/components/Hero.astro`, `src/data/copy.ts`, `REVIEW.md`.

## i18n keys (`copy.<lang>.hero.visual`)
Added: `label`, `query`, `resultTitle`, `resultSub`, `contact`, `typeSample`. Removed: `alt`, `chipName`, `chipKind`. Kept: `caption` (unchanged: "Un site pensé pour être trouvé." / "A site designed to be found.").
FR: "restaurant casablanca", "Votre entreprise", "Casablanca · votre site", "Contact". EN: "restaurant casablanca", "Your business", "Casablanca · your site", "Contact".

## Decisions and assumptions
- The hero block is orange, so an orange button would vanish; the button uses the off-white surface token with ink text (the pulse ring is off-white). This deviates slightly from "button gets orange fill".
- Colours are all existing tokens via Tailwind utilities (`fill-accent`, `fill-surface`, `stroke-dark-line`, …); nothing hardcoded.
- The optional cursor was skipped to keep the story simple. The typewriter uses `steps(21)` on a moving cover rectangle (transform only), with `textLength` fixing the text width so the caret lines up.
- No `will-change` was added; the scene is small and only transform/opacity change.
- The old hero-card CSS lived in utility classes inside the component, so it was removed with the markup; no stray CSS remains.
- Throttled-CPU profiling was not run; no jank risk is expected from transform/opacity-only animation, but test on a low-end phone.

## Checked
Build passes (no linter or `astro check` in the repo). FR and EN at 1440 (static frame and frames at 0.8/2.5/4.6/6.9/8.2 s), and 360 px static: no horizontal scroll, no console errors, no English on the French page. The H1 is unchanged and wraps as before.

## Check manually
- Timing and feel in a real browser; the loop restarts via a fade, not a jump.
- Mobile legibility: at 360 px the in-SVG text renders at roughly 11–12 px (card ≈ 0.61× scale of 18–20 unit text). Fine on phones; hide the text at very small widths if you prefer.
- Contrast inside the illustration: off-white on `accent-fill` for decorative lines; "Contact" is ink on off-white; result title/subtitle are ink/muted on off-white (≥ 6:1). The search text is off-white on `dark-line`.
- The result card and query are illustrative ("Casablanca" is just an example city).

## Ideas for future polish
Small cursor moving between elements; swap the example city from config; pause on hover/focus or add a visible pause control; a slow hover tilt on the browser.
