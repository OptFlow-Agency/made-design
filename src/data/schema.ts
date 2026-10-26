import { copy } from './copy'
import { blogIndexHref, postHref, type Post } from './blog'
import { pathFor, site, type Lang } from './site'

/* JSON-LD builders. `origin` is Astro.site.origin, so every URL is absolute.
   Optional contact fields (site.sameAs, site.email) are only emitted when set. */

type Schema = Record<string, unknown>

const orgId = (origin: string) => `${origin}/#organization`

export const organization = (origin: string, lang: Lang): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': orgId(origin),
  name: site.name,
  url: `${origin}/`,
  description: copy[lang].meta.description,
  areaServed: { '@type': 'Country', name: 'Morocco' },
  knowsLanguage: ['fr', 'en'],
  ...(site.sameAs.length && { sameAs: site.sameAs }),
  ...(site.email && {
    contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: site.email, availableLanguage: ['fr', 'en'] },
  }),
})

export const website = (origin: string, lang: Lang): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${origin}/#website`,
  url: `${origin}/`,
  name: site.name,
  inLanguage: lang,
  publisher: { '@id': orgId(origin) },
})

export const breadcrumb = (items: [name: string, path: string][], origin: string): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: new URL(path, origin).href,
  })),
})

export const faqPage = (origin: string, lang: Lang): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: lang,
  mainEntity: copy[lang].faq.items.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
})

export const blogPosting = (post: Post, lang: Lang, origin: string, image?: string): Schema => {
  const url = new URL(postHref(lang, post.slug), origin).href
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    mainEntityOfPage: url,
    headline: post.title[lang],
    description: post.excerpt[lang],
    inLanguage: lang,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags[lang].join(', '),
    ...(image && { image }),
    author: { '@id': orgId(origin) },
    publisher: { '@id': orgId(origin) },
  }
}

export const postBreadcrumb = (post: Post, lang: Lang, origin: string): Schema =>
  breadcrumb(
    [
      [site.name, pathFor(lang)],
      [copy[lang].blog.title.replace(/\.$/, ''), blogIndexHref(lang)],
      [post.title[lang], postHref(lang, post.slug)],
    ],
    origin,
  )

export const blogBreadcrumb = (lang: Lang, origin: string): Schema =>
  breadcrumb(
    [
      [site.name, pathFor(lang)],
      [copy[lang].blog.title.replace(/\.$/, ''), blogIndexHref(lang)],
    ],
    origin,
  )
