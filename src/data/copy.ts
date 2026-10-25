import type { Lang } from './site'

/* French copy is a first draft: have a native speaker review before launch.
   Empty strings (`timeline`, `price`, `duration`) are facts still to confirm:
   the components hide them until they are filled in. */
export const copy = {
  fr: {
    htmlLang: 'fr',
    meta: {
      title: 'Made Design — Studio web au Maroc : des sites qu’on trouve sur Google',
      description:
        'Made Design est un studio qui conçoit des sites web rapides et optimisés pour la recherche, au Maroc et à l’international.',
    },
    ui: { skip: 'Aller au contenu', menu: 'Menu', main: 'Navigation principale', home: 'accueil', langLabel: 'Choisir la langue du site' },
    nav: ['Formats', 'Réalisations', 'Démarche'],
    navCta: 'Réserver un appel gratuit',
    hero: {
      before: 'Vos clients vous cherchent en ligne. Faites-vous ',
      em: 'trouver',
      after: '.',
      lead: 'Studio web au Maroc. Nous concevons des sites rapides, structurés pour la recherche, qui transforment chaque visite en demande.',
      cta: 'Réserver un appel gratuit',
      trust: 'Studio basé au Maroc · Clients au Maroc et à l’international',
    },
    why: {
      label: 'Pourquoi un site',
      lead: 'Les réseaux sociaux attirent. Ils ne suffisent pas.',
      problems: [
        ['Tout est éparpillé', 'Vos tarifs, réalisations et coordonnées sont dispersés entre plusieurs publications.'],
        ['La confiance se construit ailleurs', 'Après une pub ou une recommandation, vos clients cherchent un site avant d’écrire.'],
        ['Le prochain pas n’est pas clair', 'Sans parcours simple, un visiteur intéressé repart sans vous contacter.'],
      ],
    },
    benefits: {
      title: 'Ce que vous obtenez.',
      items: [
        ['Inspirez confiance', 'Votre entreprise présentée avec soin, comme vos clients l’attendent avant de vous appeler.', 'Un restaurant, une clinique ou un cabinet gagne en sérieux dès le premier regard.'],
        ['Recevez plus de demandes', 'Un chemin clair vers le formulaire ou l’appel, sur chaque page.', 'Le client qui hésite sait exactement où écrire.'],
        ['Soyez trouvé sur Google', 'Pages rapides et structure pensée pour la recherche, pour être visible quand on cherche votre métier.', 'Quelqu’un tape votre activité et votre ville : vous apparaissez.'],
        ['Ayez une identité à vous', 'Un style et un ton propres, qui vous distinguent d’un simple profil ou d’un modèle.', 'Votre marque reste la même sur le site, les réseaux et vos supports.'],
        ['Ne perdez aucune demande sur mobile', 'Le site s’affiche et se lit bien sur tous les téléphones, tablettes et ordinateurs.', 'Un client ouvre votre lien depuis son téléphone et peut vous contacter tout de suite.'],
        ['Donnez une destination à vos pubs', 'Une page conçue pour ce que le client vient de voir, pas votre page d’accueil générique.', 'Une publicité pour une offre mène à la page de cette offre.'],
      ],
    },
    formats: {
      title: 'Le bon site dépend de ce que vous devez présenter.',
      lead: 'Le périmètre se définit avec vous. Ces formats sont des points de départ, pas des forfaits figés.',
      labels: { whom: 'Pour qui', get: 'Vous obtenez', outcome: 'Résultat', timeline: 'Délai', price: 'Prix' },
      cta: 'Réserver un appel gratuit',
      items: [
        {
          name: 'Site vitrine',
          kind: 'Entreprises établies qui veulent un site de référence.',
          points: ['Pages entreprise et services', 'Adapté au mobile, optimisé pour la recherche', 'Contact et formulaire de demande'],
          outcome: 'Un site crédible qui reçoit des demandes.',
          timeline: '', // TODO: confirm typical timeline
          price: '', // TODO: confirm price range or "sur devis"
        },
        {
          name: 'Page d’atterrissage',
          kind: 'Un lancement ou une campagne publicitaire.',
          points: ['Une offre, un message', 'Conçue pour le trafic publicitaire', 'Un seul appel à l’action : demande ou réservation'],
          outcome: 'Vos pubs mènent à une page qui convertit.',
          timeline: '',
          price: '',
        },
        {
          name: 'Site de marque multipage',
          kind: 'Plusieurs offres, produits ou lieux.',
          points: ['Identité commune', 'Une page par offre ou par lieu', 'Demandes liées à chaque page'],
          outcome: 'Une marque cohérente, chaque offre mise en valeur.',
          timeline: '',
          price: '',
        },
      ],
    },
    whyUs: {
      title: 'Pourquoi travailler avec nous.',
      cta: 'Réserver un appel gratuit',
      items: [
        ['Rapide à lancer', 'Un processus court et un site léger.'],
        ['Le SEO dès la conception', 'Structure, vitesse et contenu pensés pour la recherche dès le premier jour.'],
        ['Un processus clair', 'Quatre étapes, des livrables définis, pas de surprises.'],
        ['Vous participez à chaque étape', 'Vous validez avant que l’on passe à la suite.'],
        ['Un site qui continue d’évoluer', 'Nous mesurons et améliorons après le lancement.'],
      ],
    },
    work: {
      title: 'Un aperçu de notre travail.',
      lead: 'Quelques exemples de sites que nous concevons.',
      soon: 'Image à venir',
      visit: 'Voir le site',
    },
    process: {
      title: 'Quatre étapes, du premier appel au-delà du lancement.',
      steps: [
        ['Découvrir', 'Nous apprenons votre activité, vos clients et ce qu’est un bon résultat.', ''],
        ['Stratégie', 'Un plan clair des pages, des mots et des recherches qui comptent.', ''],
        ['Réaliser', 'Nous concevons, développons et lançons, avec votre validation à chaque étape.', ''],
        ['Évoluer', 'Nous mesurons et améliorons le site après le lancement.', ''],
      ],
    },
    // TODO: add questions on site ownership/hosting and maintenance once the policy is confirmed.
    faq: {
      title: 'Questions fréquentes.',
      items: [
        ['Combien ça coûte ?', 'Cela dépend du format et du contenu. Après l’appel gratuit, nous vous donnons un chiffre clair.'],
        ['Combien de temps faut-il ?', 'Cela dépend du format et de la rapidité de vos retours. Nous fixons un calendrier précis dès le premier échange.'],
        ['Que dois-je fournir ?', 'Votre logo, vos textes et vos photos si vous en avez. S’il manque quelque chose, nous vous aidons à le préparer.'],
        ['Le site sera-t-il en plusieurs langues ?', 'Nous concevons des sites en français et en anglais. Une autre langue ? Dites-le-nous pendant l’appel.'],
      ],
    },
    contact: {
      title: 'Parlons de votre projet.',
      lead: 'Choisissez un créneau qui vous convient. Nous parlons de votre activité et de vos objectifs.',
      fallback: 'Le calendrier ne s’affiche pas ? Écrivez-nous :',
    },
    footer: {
      tagline: 'Des sites web conçus pour être trouvés.',
      explore: 'Explorer',
      contact: 'Contact',
      follow: 'Suivre',
      legal: '© 2026 Made Design. Tous droits réservés.',
    },
  },
  en: {
    htmlLang: 'en',
    meta: {
      title: 'Made Design — Web studio in Morocco, building sites that get found',
      description:
        'Made Design is a studio that designs fast, search-ready websites for businesses in Morocco and abroad.',
    },
    ui: { skip: 'Skip to content', menu: 'Menu', main: 'Main', home: 'home', langLabel: 'Choose site language' },
    nav: ['Formats', 'Work', 'Process'],
    navCta: 'Book a free call',
    hero: {
      before: 'Your customers are searching. Make sure they ',
      em: 'find',
      after: ' you.',
      lead: 'A web studio in Morocco. We build fast, search-ready websites that turn every visit into an enquiry.',
      cta: 'Book a free call',
      trust: 'Studio based in Morocco · Clients in Morocco and abroad',
    },
    why: {
      label: 'Why a website',
      lead: 'Social media gets attention. It isn’t enough.',
      problems: [
        ['Everything is scattered', 'Your prices, work and contact details are spread across separate posts.'],
        ['Trust is built elsewhere', 'After an ad or a referral, customers look for a website before they write.'],
        ['The next step isn’t clear', 'Without a simple path, an interested visitor leaves without getting in touch.'],
      ],
    },
    benefits: {
      title: 'What you get.',
      items: [
        ['Earn trust', 'Your business presented with care, the way customers expect before they call.', 'A restaurant, clinic or firm looks more serious at first glance.'],
        ['Receive more enquiries', 'A clear path to the form or a call, on every page.', 'A hesitant customer knows exactly where to write.'],
        ['Get found on Google', 'Fast pages and a structure built for search, so you show up when people look for your trade.', 'Someone searches your service and your city: you appear.'],
        ['Have an identity of your own', 'A style and voice that set you apart from a plain profile or template.', 'Your brand looks the same on your site, socials and printed material.'],
        ['Never lose an enquiry on mobile', 'Your site displays and reads well on every phone, tablet and computer.', 'A customer opens your link on their phone and can reach you right away.'],
        ['Give your ads a destination', 'A page built for what the customer just saw, not a generic homepage.', 'An ad for one offer lands on that offer’s page.'],
      ],
    },
    formats: {
      title: 'The right site depends on what you need to show.',
      lead: 'We define scope with you. These formats are starting points, not fixed packages.',
      labels: { whom: 'Who it’s for', get: 'What you get', outcome: 'Outcome', timeline: 'Timeline', price: 'Price' },
      cta: 'Book a free call',
      items: [
        {
          name: 'Business site',
          kind: 'Established businesses that need a main reference site.',
          points: ['Company and services pages', 'Mobile-ready and search-ready', 'Contact and enquiry form'],
          outcome: 'A credible site that receives enquiries.',
          timeline: '', // TODO: confirm typical timeline
          price: '', // TODO: confirm price range or "on quote"
        },
        {
          name: 'Landing page',
          kind: 'A launch or an advertising campaign.',
          points: ['One offer, one message', 'Built for ad traffic', 'One call to action: enquiry or booking'],
          outcome: 'Your ads lead to a page that converts.',
          timeline: '',
          price: '',
        },
        {
          name: 'Multi-page brand site',
          kind: 'Several offers, products or locations.',
          points: ['Shared identity', 'One page per offer or location', 'Enquiries tied to each page'],
          outcome: 'A consistent brand, with each offer given its place.',
          timeline: '',
          price: '',
        },
      ],
    },
    whyUs: {
      title: 'Why work with us.',
      cta: 'Book a free call',
      items: [
        ['Fast to launch', 'A short process and a lightweight site.'],
        ['SEO from day one', 'Structure, speed and content built for search from the start.'],
        ['A clear process', 'Four steps, defined deliverables, no surprises.'],
        ['You’re involved at every step', 'You approve before we move on.'],
        ['A site that keeps improving', 'We measure and refine after launch.'],
      ],
    },
    work: {
      title: 'A look at our work.',
      lead: 'Some examples of the sites we design.',
      soon: 'Image coming soon',
      visit: 'Visit site',
    },
    process: {
      title: 'Four steps, from the first call to well beyond launch.',
      steps: [
        ['Discover', 'We learn your business, your customers and what a good result looks like.', ''],
        ['Strategy', 'A clear plan for pages, wording and the searches that matter.', ''],
        ['Build', 'We design, develop and launch, with your approval at each step.', ''],
        ['Evolve', 'We measure and refine the site after launch.', ''],
      ],
    },
    // TODO: add questions on site ownership/hosting and maintenance once the policy is confirmed.
    faq: {
      title: 'Frequently asked questions.',
      items: [
        ['How much does it cost?', 'It depends on the format and content. After the free call, we give you a clear figure.'],
        ['How long does it take?', 'It depends on the format and how fast you send feedback. We set a precise schedule at the first conversation.'],
        ['What do I need to provide?', 'Your logo, text and photos if you have them. If something is missing, we help you prepare it.'],
        ['Will the site be multilingual?', 'We build sites in French and English. Another language? Tell us during the call.'],
      ],
    },
    contact: {
      title: 'Let’s talk about your project.',
      lead: 'Pick a time that suits you. We talk about your business and your goals.',
      fallback: 'Calendar not showing? Email us:',
    },
    footer: {
      tagline: 'Websites built to be found.',
      explore: 'Explore',
      contact: 'Contact',
      follow: 'Follow',
      legal: '© 2026 Made Design. All rights reserved.',
    },
  },
} satisfies Record<Lang, unknown>
