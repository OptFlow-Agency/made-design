import type { Lang } from './site'

/* Blog posts. Cover images live in src/assets/blog/ (`cover` is the filename).
   Body text is trusted HTML, authored here, so inline <strong> and <code> are allowed.
   Add a post by appending to `posts`: it shows up on the home page (first two),
   on /blog, and gets its own /blog/<slug> page in both languages. */

export type Block =
  | { t: 'h'; text: string }
  | { t: 'p'; text: string }
  | { t: 'quote'; text: string }
  | { t: 'ul' | 'ol'; items: string[] }
  | { t: 'hr' }

export interface Post {
  slug: string
  date: string // ISO
  minutes: number
  cover: string
  /** Where the article first appeared, if it was published elsewhere first. */
  source?: string
  tags: Record<Lang, string[]>
  title: Record<Lang, string>
  excerpt: Record<Lang, string>
  body: Record<Lang, Block[]>
}

export const posts: Post[] = [
  {
    slug: 'brand-identity-website',
    date: '2026-10-26',
    minutes: 4,
    cover: 'brand-identity.svg',
    tags: {
      fr: ['Identité de marque', 'Design web', 'Branding'],
      en: ['Brand identity', 'Web design', 'Branding'],
    },
    title: {
      fr: 'Construire un site qui porte l’identité de votre marque',
      en: 'Building a website that carries your brand identity',
    },
    excerpt: {
      fr: 'Un site n’est pas un logo posé sur un modèle. Voici comment traduire votre marque en couleurs, typographie, ton et mise en page cohérents.',
      en: 'A website is not a logo dropped onto a template. Here is how to turn your brand into consistent colour, type, tone and layout.',
    },
    body: {
      fr: [
        { t: 'p', text: 'Votre site est souvent le premier endroit où un client rencontre vraiment votre entreprise. S’il ressemble à n’importe quel autre site, il ne raconte rien de vous. Une identité de marque appliquée avec soin fait l’inverse : on vous reconnaît avant même d’avoir lu votre nom.' },
        { t: 'h', text: 'Une identité, ce n’est pas un logo' },
        { t: 'p', text: 'Le logo n’est qu’un élément. L’identité regroupe tout ce qui permet de vous reconnaître et de vous faire confiance :' },
        { t: 'ul', items: [
          '<strong>Les couleurs :</strong> une palette courte, avec un rôle pour chacune.',
          '<strong>La typographie :</strong> une ou deux familles, avec une hiérarchie claire.',
          '<strong>Le ton :</strong> la façon dont vous parlez à vos clients, dans les titres comme dans les boutons.',
          '<strong>Les images :</strong> un style de photo ou d’illustration, appliqué partout de la même manière.',
          '<strong>La mise en page :</strong> l’espace, le rythme et la densité d’information.',
        ] },
        { t: 'h', text: 'Commencer par les décisions, pas par le design' },
        { t: 'p', text: 'Avant d’ouvrir un outil de maquette, répondez à trois questions : à qui parlez-vous, que voulez-vous qu’on retienne de vous, et qu’est-ce qui vous distingue de vos concurrents ? Chaque choix visuel doit ensuite pouvoir se justifier par l’une de ces réponses.' },
        { t: 'quote', text: 'Si vous ne pouvez pas expliquer pourquoi une couleur ou une police est là, elle n’appartient probablement pas à votre marque.' },
        { t: 'h', text: 'Traduire la marque en choix concrets' },
        { t: 'h', text: 'La couleur' },
        { t: 'p', text: 'Choisissez une couleur principale, une ou deux couleurs neutres et, au besoin, une couleur d’accent réservée aux actions importantes. Vérifiez le contraste du texte : une belle palette illisible fait perdre des visiteurs.' },
        { t: 'h', text: 'La typographie' },
        { t: 'p', text: 'Une police pour les titres, une pour le texte courant suffisent. Elles portent la personnalité de la marque : une police géométrique et nette n’évoque pas la même chose qu’une police à empattements classique.' },
        { t: 'h', text: 'Le ton' },
        { t: 'p', text: 'Un site chaleureux et un site institutionnel n’écrivent pas de la même manière. Définissez trois adjectifs pour votre ton, puis relisez chaque page avec eux en tête, y compris les messages d’erreur et les boutons.' },
        { t: 'h', text: 'Les images' },
        { t: 'p', text: 'Mieux vaut moins de photos, mais authentiques et cohérentes entre elles, que des banques d’images génériques. Un même cadrage, une même lumière, un même traitement.' },
        { t: 'h', text: 'Rendre l’identité durable' },
        { t: 'p', text: 'Une identité n’est utile que si elle reste appliquée de la même façon dans le temps. Notez vos règles (couleurs, polices, espacements, exemples de ton) dans un court guide, et transformez-les en variables dans le code pour que chaque nouvelle page les respecte automatiquement.' },
        { t: 'h', text: 'L’effet sur votre activité' },
        { t: 'p', text: 'Un site cohérent rassure. Le visiteur reconnaît votre univers d’un support à l’autre, comprend plus vite ce que vous proposez et vous fait davantage confiance au moment de vous contacter. C’est ce qui transforme un simple passage en demande.' },
      ],
      en: [
        { t: 'p', text: 'Your website is often the first place a customer really meets your business. If it looks like any other site, it says nothing about you. A carefully applied brand identity does the opposite: people recognise you before they have read your name.' },
        { t: 'h', text: 'An identity is more than a logo' },
        { t: 'p', text: 'The logo is only one element. A brand identity covers everything that lets people recognise you and trust you:' },
        { t: 'ul', items: [
          '<strong>Colour:</strong> a short palette, with a role for each colour.',
          '<strong>Typography:</strong> one or two families, with a clear hierarchy.',
          '<strong>Tone:</strong> how you talk to customers, in headlines and in buttons.',
          '<strong>Imagery:</strong> one style of photo or illustration, applied the same way everywhere.',
          '<strong>Layout:</strong> space, rhythm and how much information you show at once.',
        ] },
        { t: 'h', text: 'Start with decisions, not design' },
        { t: 'p', text: 'Before you open a design tool, answer three questions: who are you speaking to, what do you want them to remember, and what sets you apart from competitors? Every visual choice should then be justifiable by one of those answers.' },
        { t: 'quote', text: 'If you cannot explain why a colour or a font is there, it probably does not belong to your brand.' },
        { t: 'h', text: 'Turning the brand into concrete choices' },
        { t: 'h', text: 'Colour' },
        { t: 'p', text: 'Pick one main colour, one or two neutrals and, if needed, an accent reserved for the actions that matter. Check text contrast: a beautiful palette that is hard to read loses visitors.' },
        { t: 'h', text: 'Typography' },
        { t: 'p', text: 'One font for headings and one for body text is enough. They carry the personality of the brand: a clean geometric typeface does not suggest the same thing as a classic serif.' },
        { t: 'h', text: 'Tone' },
        { t: 'p', text: 'A warm, friendly site and a formal, institutional one do not write the same way. Choose three adjectives for your tone, then reread every page with them in mind, error messages and buttons included.' },
        { t: 'h', text: 'Imagery' },
        { t: 'p', text: 'Fewer photos that are authentic and consistent with each other beat generic stock images. Same framing, same light, same treatment.' },
        { t: 'h', text: 'Making the identity last' },
        { t: 'p', text: 'An identity only helps if it is applied the same way over time. Write your rules down (colours, fonts, spacing, examples of tone) in a short guide, and turn them into variables in the code so every new page follows them automatically.' },
        { t: 'h', text: 'What it does for your business' },
        { t: 'p', text: 'A consistent site reassures. Visitors recognise your world from one channel to the next, understand what you offer faster, and trust you more when it is time to get in touch. That is what turns a passing visit into an enquiry.' },
      ],
    },
  },
  {
    slug: 'seo-business-impact',
    date: '2026-10-20',
    minutes: 4,
    cover: 'seo.svg',
    tags: {
      fr: ['SEO', 'Visibilité', 'Croissance'],
      en: ['SEO', 'Visibility', 'Growth'],
    },
    title: {
      fr: 'Le SEO et son effet sur votre activité',
      en: 'SEO and its effect on your business',
    },
    excerpt: {
      fr: 'Être trouvé quand un client cherche ce que vous vendez : pourquoi le référencement naturel compte, et ce qu’il change concrètement pour une entreprise.',
      en: 'Being found when a customer searches for what you sell: why organic search matters, and what it concretely changes for a business.',
    },
    body: {
      fr: [
        { t: 'p', text: 'Quand quelqu’un cherche un service sur Google, il a déjà un besoin. Le SEO (référencement naturel) consiste à faire en sorte que votre site apparaisse à ce moment-là, sans payer chaque clic.' },
        { t: 'h', text: 'Pourquoi c’est différent des autres canaux' },
        { t: 'ul', items: [
          '<strong>L’intention est là :</strong> la personne cherche activement, contrairement à une publicité vue en passant.',
          '<strong>L’effet se cumule :</strong> une page bien classée continue d’amener des visiteurs mois après mois.',
          '<strong>La confiance suit :</strong> apparaître dans les résultats naturels est perçu comme plus crédible qu’une annonce.',
          '<strong>Le coût par visite baisse :</strong> l’effort initial s’amortit dans le temps, alors qu’une campagne payante s’arrête quand le budget s’arrête.',
        ] },
        { t: 'h', text: 'Ce que le SEO change pour l’entreprise' },
        { t: 'p', text: 'Le but n’est pas le classement lui-même, mais ce qu’il produit : plus de demandes de devis, plus de réservations, plus d’appels de personnes qui vous cherchaient déjà. Un site bien référencé devient un canal d’acquisition régulier, moins dépendant des réseaux sociaux et des budgets publicitaires.' },
        { t: 'h', text: 'Les quatre piliers' },
        { t: 'h', text: '1. La technique' },
        { t: 'p', text: 'Un site rapide, lisible sur mobile, facile à explorer pour les moteurs de recherche, avec des pages qui s’indexent correctement. Sans cette base, le reste compte peu.' },
        { t: 'h', text: '2. Le contenu' },
        { t: 'p', text: 'Des pages qui répondent vraiment aux questions de vos clients, avec leurs mots à eux. Une page par service, des titres clairs, des réponses précises.' },
        { t: 'h', text: '3. La structure' },
        { t: 'p', text: 'Des titres hiérarchisés, des liens entre vos pages, des balises de titre et de description soignées. Elle aide les moteurs à comprendre de quoi parle chaque page, et les visiteurs à trouver la suite.' },
        { t: 'h', text: '4. La crédibilité' },
        { t: 'p', text: 'Des avis, des références, des mentions sur d’autres sites sérieux. Plus votre entreprise est reconnue ailleurs, plus les moteurs vous font confiance.' },
        { t: 'h', text: 'Pour une entreprise locale' },
        { t: 'p', text: 'Si vous servez une ville ou une région, indiquez-le clairement : zones desservies, adresse, fiche d’établissement Google à jour. Les recherches locales sont souvent celles qui débouchent le plus vite sur un contact.' },
        { t: 'h', text: 'Un travail de patience' },
        { t: 'p', text: 'Le SEO ne donne pas de résultat du jour au lendemain. Comptez plusieurs semaines, souvent plusieurs mois, avant de voir un changement net. En contrepartie, ces résultats durent. Le plus sûr est de partir d’un site correctement construit dès le départ, puis de l’améliorer régulièrement, plutôt que de tout corriger après coup.' },
        { t: 'h', text: 'Par où commencer' },
        { t: 'ol', items: [
          'Listez les recherches que feraient vos clients pour vous trouver.',
          'Donnez à chaque service sa propre page, avec un titre clair.',
          'Vérifiez la vitesse et l’affichage sur mobile.',
          'Complétez votre fiche Google et demandez des avis à vos clients satisfaits.',
          'Suivez vos résultats dans Google Search Console et ajustez.',
        ] },
      ],
      en: [
        { t: 'p', text: 'When someone searches for a service on Google, they already have a need. SEO (search engine optimisation) is about making sure your website shows up at that moment, without paying for every click.' },
        { t: 'h', text: 'Why it differs from other channels' },
        { t: 'ul', items: [
          '<strong>The intent is already there:</strong> the person is actively looking, unlike an ad seen in passing.',
          '<strong>The effect compounds:</strong> a well-ranked page keeps bringing visitors month after month.',
          '<strong>Trust follows:</strong> appearing in organic results is seen as more credible than an ad.',
          '<strong>Cost per visit falls:</strong> the initial effort pays off over time, whereas a paid campaign stops when the budget does.',
        ] },
        { t: 'h', text: 'What SEO changes for a business' },
        { t: 'p', text: 'The goal is not the ranking itself but what it produces: more quote requests, more bookings, more calls from people who were already looking for you. A well-ranked site becomes a steady acquisition channel, less dependent on social media and ad budgets.' },
        { t: 'h', text: 'The four pillars' },
        { t: 'h', text: '1. Technical foundations' },
        { t: 'p', text: 'A fast site that reads well on mobile, is easy for search engines to crawl, and whose pages index properly. Without this base, the rest matters little.' },
        { t: 'h', text: '2. Content' },
        { t: 'p', text: 'Pages that genuinely answer your customers’ questions, in their words. One page per service, clear headings, precise answers.' },
        { t: 'h', text: '3. Structure' },
        { t: 'p', text: 'Ordered headings, links between your pages, carefully written title and description tags. It helps search engines understand what each page is about, and helps visitors find what comes next.' },
        { t: 'h', text: '4. Credibility' },
        { t: 'p', text: 'Reviews, references, mentions on other reputable sites. The more your business is recognised elsewhere, the more search engines trust you.' },
        { t: 'h', text: 'For a local business' },
        { t: 'p', text: 'If you serve a city or a region, say so clearly: areas served, address, an up-to-date Google business profile. Local searches are often the ones that lead fastest to a contact.' },
        { t: 'h', text: 'A matter of patience' },
        { t: 'p', text: 'SEO does not deliver overnight. Expect several weeks, often several months, before you see a clear change. In return, the results last. The safest approach is to start from a properly built site and improve it regularly, rather than fixing everything afterwards.' },
        { t: 'h', text: 'Where to start' },
        { t: 'ol', items: [
          'List the searches your customers would make to find you.',
          'Give each service its own page, with a clear title.',
          'Check speed and display on mobile.',
          'Complete your Google profile and ask happy customers for reviews.',
          'Track your results in Google Search Console and adjust.',
        ] },
      ],
    },
  },
  {
    slug: 'naming-conventions-design-system',
    date: '2026-10-03',
    minutes: 2,
    cover: 'naming.png',
    source: 'https://www.oussamachahidi.me/articles/naming-conversion-in-a-design-system',
    tags: {
      fr: ['Design system', 'UX', 'Design patterns'],
      en: ['Design system', 'UX', 'Design patterns'],
    },
    title: {
      fr: 'Les conventions de nommage d’un design system',
      en: 'Naming conventions in a design system',
    },
    excerpt: {
      fr: 'Tokens, composants, états, variantes : comment nommer pour que l’équipe collabore mieux et que le système reste cohérent en grandissant.',
      en: 'Tokens, components, states, variants: how to name things so your team collaborates better and the system stays consistent as it grows.',
    },
    body: {
      fr: [
        { t: 'p', text: 'Les noms de tokens et d’éléments forment l’interface entre vos décisions de design et les personnes qui les implémentent. Un nom bien choisi exprime l’intention, résiste à un changement d’identité visuelle et paraît évident à quiconque le découvre.' },
        { t: 'p', text: 'Dans un design system, un nom ne doit <strong>jamais</strong> reposer sur une préférence personnelle ni sur une valeur visuelle littérale. Il doit s’appuyer sur le <strong>rôle, l’implémentation et le contexte d’usage</strong>.' },
        { t: 'ul', items: [
          '<strong>À éviter, les valeurs littérales :</strong> <code>blue</code>, <code>dark-navy</code>, <code>16px</code>',
          '<strong>À préférer, l’intention sémantique :</strong> <code>color-action-primary</code>, <code>bg-primary</code>, <code>space-component-padding</code>',
        ] },
        { t: 'hr' },
        { t: 'h', text: 'Pourquoi les design tokens comptent' },
        { t: 'p', text: 'Les tokens donnent à l’équipe une source de vérité unique, entre designers et développeurs. Ils simplifient l’implémentation et propagent chaque mise à jour dans tout le projet.' },
        { t: 'p', text: 'Un nom sémantique permet de choisir la bonne option sans mémoriser de codes hexadécimaux ou de valeurs en pixels :' },
        { t: 'quote', text: '« Il me faut la couleur de l’action principale » est bien plus rapide et sûr que « Il me faut <code>#3B82F6</code>, sauf si on l’a changée récemment ».' },
        { t: 'hr' },
        { t: 'h', text: 'Pourquoi une convention de nommage' },
        { t: 'p', text: 'Une convention structurée apporte quatre bénéfices :' },
        { t: 'ol', items: [
          '<strong>Clarté et lisibilité :</strong> des noms intuitifs font comprendre tout de suite la fonction d’un élément.',
          '<strong>Cohérence :</strong> un nommage standardisé rend le système prévisible d’une plateforme à l’autre.',
          '<strong>Évolutivité :</strong> une structure claire permet d’ajouter de nouveaux éléments sans perdre l’ordre.',
          '<strong>Collaboration :</strong> un vocabulaire partagé aligne designers et développeurs à chaque étape.',
        ] },
        { t: 'hr' },
        { t: 'h', text: 'Les 8 niveaux de nommage' },
        { t: 'p', text: 'Pour un système complet, fixez des règles de nommage sur ces huit niveaux.' },
        { t: 'h', text: '1. Design tokens' },
        { t: 'p', text: 'Les variables de base des propriétés visuelles : couleurs, typographie, ombres, espacements. Leur nom doit refléter le rôle, pas l’apparence.' },
        { t: 'h', text: '2. Composants' },
        { t: 'p', text: 'Les briques d’interface réutilisables : boutons, champs, cartes. Des noms standardisés facilitent le passage du design au code.' },
        { t: 'h', text: '3. Patterns' },
        { t: 'p', text: 'Des combinaisons de composants qui forment des mises en page ou des parcours réutilisables (<code>NavBar</code>, <code>LoginForm</code>, <code>ConfirmationDialog</code>). Le nom doit refléter leur fonction.' },
        { t: 'h', text: '4. Modificateurs' },
        { t: 'p', text: 'Les variations de taille, de couleur ou de comportement d’un composant ou d’un token, selon le schéma <code>Composant–Modificateur</code>. Exemples : <code>ButtonPrimary–Large</code>, <code>ColorPrimary–Dark</code>, <code>Card–WithShadow</code>.' },
        { t: 'h', text: '5. États' },
        { t: 'p', text: 'Les conditions d’un composant pendant l’interaction. Exemples : <code>Button–Disabled</code>, <code>Input–Error</code>, <code>Link–Active</code>.' },
        { t: 'h', text: '6. Variantes responsives' },
        { t: 'p', text: 'Les ajustements d’un composant ou d’une mise en page selon la taille d’écran ou l’appareil. Exemples : <code>Button–SmallScreen</code>, <code>Grid–Desktop</code>, <code>Image–Responsive</code>.' },
        { t: 'h', text: '7. Accessibilité' },
        { t: 'p', text: 'Les tokens ou propriétés dédiés à l’accessibilité. Exemples : <code>Button–AriaLabel</code>, <code>Text–HighContrast</code>.' },
        { t: 'h', text: '8. Marques et thèmes' },
        { t: 'p', text: 'Les éléments propres à une sous-marque, un produit en marque blanche ou un thème alternatif. Exemples : <code>Button–BrandA</code>, <code>Navbar–BrandB</code>, <code>Typography–Corporate</code>.' },
      ],
      en: [
        { t: 'p', text: 'Token and element names form the interface between your design decisions and the people who implement them. A well-named token or component communicates intent, survives a rebrand, and feels intuitive to anyone encountering it for the first time.' },
        { t: 'p', text: 'When creating a design system, names should <strong>never</strong> be based on personal preference or literal visual values. Instead, they must be based on <strong>role, implementation, and usage context</strong>.' },
        { t: 'ul', items: [
          '<strong>Avoid literal values:</strong> <code>blue</code>, <code>dark-navy</code>, <code>16px</code>',
          '<strong>Use semantic intent:</strong> <code>color-action-primary</code>, <code>bg-primary</code>, <code>space-component-padding</code>',
        ] },
        { t: 'hr' },
        { t: 'h', text: 'Why design tokens matter' },
        { t: 'p', text: 'Design tokens provide teams with a single source of truth, bridging the gap between designers and developers. They streamline implementation and allow updates to propagate across an entire project effortlessly.' },
        { t: 'p', text: 'Semantic naming enables team members to reach for the right option without memorizing underlying hex codes or pixel values:' },
        { t: 'quote', text: '“I need the primary action color” is much faster and safer than “I need <code>#3B82F6</code> unless we updated it recently.”' },
        { t: 'hr' },
        { t: 'h', text: 'Why naming conventions matter' },
        { t: 'p', text: 'Adopting a structured naming convention across your design system delivers four main advantages:' },
        { t: 'ol', items: [
          '<strong>Clarity and readability:</strong> intuitive names help team members immediately understand an element’s function, boosting team efficiency.',
          '<strong>Consistency:</strong> standardized naming establishes a predictable flow across platforms, ensuring a unified user experience.',
          '<strong>Scalability:</strong> a clear structure allows you to manage new elements gracefully and maintain order as the project grows.',
          '<strong>Enhanced collaboration:</strong> a shared vocabulary aligns designers and developers throughout the entire production lifecycle.',
        ] },
        { t: 'hr' },
        { t: 'h', text: 'The 8 key elements of design system naming' },
        { t: 'p', text: 'To build a comprehensive design system, establish naming patterns across these primary levels.' },
        { t: 'h', text: '1. Design tokens' },
        { t: 'p', text: 'The foundational variables defining visual properties (colors, typography, shadows, spacing). Token names must strictly reflect their semantic role rather than visual appearance.' },
        { t: 'h', text: '2. Components' },
        { t: 'p', text: 'The basic, reusable UI building blocks (buttons, input fields, cards). Standardizing component names ensures seamless design-to-code handoffs.' },
        { t: 'h', text: '3. Patterns' },
        { t: 'p', text: 'Combinations of components that form reusable UI layouts or workflows (<code>NavBar</code>, <code>LoginForm</code>, <code>ConfirmationDialog</code>). Naming should directly reflect the layout’s functional purpose.' },
        { t: 'h', text: '4. Modifiers' },
        { t: 'p', text: 'Variations in size, color, or behavior applied to a base component or token, typically following a <code>BaseComponent–Modifier</code> pattern. Examples: <code>ButtonPrimary–Large</code>, <code>ColorPrimary–Dark</code>, <code>Card–WithShadow</code>.' },
        { t: 'h', text: '5. States' },
        { t: 'p', text: 'Specific component conditions during interaction. State names clearly communicate the active context within the UI. Examples: <code>Button–Disabled</code>, <code>Input–Error</code>, <code>Link–Active</code>.' },
        { t: 'h', text: '6. Responsive variants' },
        { t: 'p', text: 'Component or layout adjustments tailored to specific viewport sizes or device types. Examples: <code>Button–SmallScreen</code>, <code>Grid–Desktop</code>, <code>Image–Responsive</code>.' },
        { t: 'h', text: '7. Accessibility features' },
        { t: 'p', text: 'Tokens or properties explicitly dedicated to enhancing accessibility standards. Examples: <code>Button–AriaLabel</code>, <code>Text–HighContrast</code>.' },
        { t: 'h', text: '8. Brand and theme variants' },
        { t: 'p', text: 'Elements specific to sub-brands, white-label products, or alternate themes. Examples: <code>Button–BrandA</code>, <code>Navbar–BrandB</code>, <code>Typography–Corporate</code>.' },
      ],
    },
  },
  {
    slug: 'design-system',
    date: '2026-09-28',
    minutes: 2,
    cover: 'design-system.jpg',
    source: 'https://www.oussamachahidi.me/articles/design-system',
    tags: {
      fr: ['Design system', 'UI design', 'UX'],
      en: ['Design system', 'UI design', 'UX'],
    },
    title: {
      fr: 'Design system : à quoi ça sert ?',
      en: 'Design system: what is it for?',
    },
    excerpt: {
      fr: 'Un ensemble de règles et de standards pour gérer l’identité visuelle d’un projet, entre l’équipe et le développement. Voici ses cinq bénéfices.',
      en: 'A set of rules and standards to manage your project’s visuals across the team and the development process. Here are its five benefits.',
    },
    body: {
      fr: [
        { t: 'p', text: 'Un design system est un ensemble de standards pour gérer le design à grande échelle : il réduit les redondances et crée un langage commun et une cohérence visuelle sur tous les canaux.' },
        { t: 'h', text: 'Quels sont ses bénéfices ?' },
        { t: 'h', text: '1. Plus d’efficacité et de productivité' },
        { t: 'p', text: 'Un design system supprime les tâches répétitives, comme redessiner un bouton à chaque fois. Les designers UX/UI peuvent consacrer ce temps à innover et à tester de nouvelles fonctionnalités.' },
        { t: 'p', text: 'Au-delà du temps gagné, une équipe productive a besoin de moins de personnes pour livrer la même qualité dans le même délai. Le coût baisse, et vous pouvez sortir plus de fonctionnalités et de produits, plus vite.' },
        { t: 'h', text: '2. Une cohérence visuelle durable' },
        { t: 'p', text: 'La cohérence d’un produit améliore l’expérience utilisateur. Utiliser la même typographie ou la même palette, validées à l’avance, garde l’ensemble harmonieux.' },
        { t: 'p', text: 'Chaque designer de l’équipe travaille ainsi avec les bons assets et les bons composants, propres à la marque ou au produit.' },
        { t: 'h', text: '3. Une croissance maîtrisée' },
        { t: 'p', text: 'Quand un produit, une entreprise ou une équipe grandit, tout le monde doit savoir comment produire la même qualité pour que l’ensemble tienne la charge.' },
        { t: 'p', text: 'Un bon design system s’appuie sur des règles claires et une documentation à jour. Elle informe les designers sur la meilleure façon de travailler et sert d’onboarding : où sont les composants, et comment ils fonctionnent.' },
        { t: 'h', text: '4. Une collaboration fluide' },
        { t: 'p', text: 'Un design system est construit et entretenu par les équipes qui l’utilisent. Bien documenté, il s’intègre facilement au travail de chacun, quel que soit le moment où la personne a rejoint le projet.' },
        { t: 'p', text: 'Prévoir un processus pour que toute l’équipe puisse l’améliorer garantit que les designs et les produits finaux suivent toujours la dernière version des fonctionnalités et des visuels.' },
        { t: 'h', text: '5. Un meilleur code et un meilleur design' },
        { t: 'p', text: 'Un excellent design system définit le comportement des composants en code. Les passages de relais se font sans friction et toute l’équipe produit est mieux placée pour réussir.' },
        { t: 'p', text: 'Il faut donc réunir le point de vue du designer et celui du développeur dès la conception. Optimiser les composants pour l’expérience utilisateur est essentiel pour livrer un produit de qualité.' },
        { t: 'h', text: 'Un système prêt pour l’avenir' },
        { t: 'p', text: 'Les produits numériques évoluent forcément. Un design system bien structuré doit pouvoir évoluer avec eux.' },
        { t: 'p', text: 'Pour qu’il dure, laissez toujours de la place à l’innovation : avec la bonne documentation et les bons processus, l’équipe peut consulter, mettre à jour et améliorer l’information, puis avancer sans friction.' },
      ],
      en: [
        { t: 'p', text: 'A design system is a set of standards for managing design at scale, reducing redundancy and creating a shared language and visual consistency across channels.' },
        { t: 'h', text: 'What are the benefits of a design system?' },
        { t: 'h', text: '1. Boosts efficiency and productivity' },
        { t: 'p', text: 'Design systems eliminate the need for repetitive tasks like designing buttons from scratch. This gives UX/UI designers the opportunity to allocate time for innovating and experimenting on new features that can improve the product.' },
        { t: 'p', text: 'Beyond saved time, a productive team means fewer people are needed to craft the same high-quality output in the same time. In effect, this can reduce cost and enable you to ship more features and products faster.' },
        { t: 'h', text: '2. Maintains visual consistency' },
        { t: 'p', text: 'A product’s consistency contributes to an enhanced user experience. Using the same pre-defined and approved typography or color scheme, for example, helps keep the design harmonious.' },
        { t: 'p', text: 'Design systems ensure that every designer in a team is using the right set of assets and components unique to a brand or product.' },
        { t: 'h', text: '3. Enhances sustainable scalability' },
        { t: 'p', text: 'As a product, business, or team grows, it’s important to ensure everyone working on the project is aligned on how to produce the same quality output to scale well.' },
        { t: 'p', text: 'A good design system has a well-defined set of rules or a guide to follow. Proper documentation keeps designers informed on how to optimize their workflows. It can also serve as their onboarding, so they know where components are and how they work.' },
        { t: 'h', text: '4. Promotes seamless collaboration' },
        { t: 'p', text: 'Design systems are built and maintained by the teams who use them. A well-documented system makes it easy for collaborators to efficiently implement it into their workflow, regardless of when they started contributing.' },
        { t: 'p', text: 'Incorporating a maintenance process for improving and updating the design system from everyone on the team helps ensure designs and their final products always work with the latest version of features and visuals.' },
        { t: 'h', text: '5. Improves code and design' },
        { t: 'p', text: 'A top-notch design system defines component functionalities with code. Beyond ensuring seamless handovers, this sets up the entire product team for success.' },
        { t: 'p', text: 'This means having a designer’s and a developer’s perspective when setting up the system matters. Optimizing a design system’s components for user experience will go a long way in ensuring you deliver a high-quality product.' },
        { t: 'h', text: 'Future-proofing design systems' },
        { t: 'p', text: 'Digital products are bound to change. A well-structured design system should be prepared to work alongside this.' },
        { t: 'p', text: 'To future-proof your system, there should always be room for innovation. With the right documentation, practices, and processes in place to ensure designers can access, update, and improve information, teams can benefit and move forward seamlessly.' },
      ],
    },
  },
]

export const postHref = (lang: Lang, slug: string) =>
  `${lang === 'fr' ? '' : `/${lang}`}/blog/${slug}/`

export const blogIndexHref = (lang: Lang) => `${lang === 'fr' ? '' : `/${lang}`}/blog/`

const dateFmt: Record<Lang, string> = { fr: 'fr-FR', en: 'en-GB' }
export const formatDate = (iso: string, lang: Lang) =>
  new Date(iso).toLocaleDateString(dateFmt[lang], { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
