import type { Lang } from './site'

/* French copy is a first draft: have a native speaker review before launch. */
export const copy = {
  fr: {
    htmlLang: 'fr',
    meta: {
      title: 'Made Design — Des sites web qu’on trouve, et auxquels on fait confiance',
      description:
        'Made Design est un studio qui conçoit des sites web rapides et optimisés pour la recherche, au Maroc et à l’international.',
    },
    ui: { skip: 'Aller au contenu', menu: 'Menu', main: 'Navigation principale', home: 'accueil', langLabel: 'Choisir la langue du site' },
    nav: ['Pourquoi un site', 'Atouts', 'Formats', 'Réalisations', 'Démarche', 'Contact'],
    navCta: 'Nous contacter',
    hero: {
      before: 'Des sites web qu’on ',
      em: 'trouve',
      after: ', et auxquels on fait confiance.',
      lead: 'Nous créons des sites web professionnels qui présentent clairement votre entreprise et facilitent la prise de contact.',
      cta: 'Réserver un appel gratuit',
      ghost: 'Voir ce que nous créons',
    },
    why: {
      label: 'Pourquoi un site',
      lead: 'L’intérêt naît ailleurs. La confiance se construit sur votre propre site.',
      sub: 'Après une publicité, une recommandation ou une publication, on cherche à mieux comprendre avant de vous contacter. Un bon site apporte cette clarté.',
      problems: [
        ['Une publication ne suffit pas', 'Vos réalisations, vos tarifs et vos coordonnées se retrouvent dispersés entre plusieurs canaux.'],
        ['Votre activité mérite son propre espace', 'Sans site dédié, vos clients doivent reconstituer l’essentiel par eux-mêmes.'],
        ['Le prochain geste doit être évident', 'Un parcours clair aide les visiteurs à passer de la curiosité à une demande.'],
      ],
      note: 'Un site complète votre démarche commerciale. Il ne remplace ni votre équipe ni votre stratégie.',
    },
    benefits: {
      title: 'Plus qu’une présence en ligne : un meilleur point de départ.',
      items: [
        ['Renforcez votre crédibilité', 'Présentez votre entreprise avec le soin et la cohérence que vos clients attendent avant de vous contacter.'],
        ['Facilitez la prise de contact', 'Offrez aux visiteurs un chemin lisible pour poser une question ou réserver un appel.'],
        ['Soyez trouvé', 'Une structure pensée pour la recherche et des pages rapides, pour que ceux qui cherchent ce que vous faites vous trouvent.'],
        ['Affirmez votre différence', 'Une identité et un ton qui vous sont propres, au-delà d’un modèle ou d’un profil de réseau social.'],
        ['Fonctionnez sur tous les écrans', 'Rapide, lisible et simple à utiliser sur mobile, tablette et ordinateur, où que soient vos clients.'],
        ['Donnez une destination à vos campagnes', 'Dirigez les internautes d’une publicité ou d’une publication vers une page conçue pour ce qu’ils ont vu.'],
      ],
    },
    formats: {
      title: 'Le bon site dépend de ce que vous devez présenter.',
      lead: 'Nous définissons le périmètre avec vous selon votre contenu et vos priorités. Ces formats sont des points de départ, pas des forfaits figés.',
      what: 'En bref',
      items: [
        { name: 'Site vitrine', kind: 'Pour les entreprises établies', text: 'Une présence structurée qui raconte votre histoire, présente vos services et simplifie le contact.', points: ['Entreprise et services', 'Responsive, optimisé pour la recherche', 'Contact et formulaire de demande'] },
        { name: 'Page d’atterrissage', kind: 'Pour un lancement ou une campagne', text: 'Une page ciblée qui réunit l’essentiel d’une offre et mène à une seule action.', points: ['Une offre, un message', 'Conçue pour le trafic publicitaire', 'Demande ou réservation'] },
        { name: 'Site de marque multipage', kind: 'Pour plusieurs offres ou lieux', text: 'Une marque commune et une page dédiée à chaque service, produit ou lieu.', points: ['Identité partagée', 'Une page par offre', 'Demandes liées à chaque page'] },
      ],
    },
    work: {
      title: 'Un aperçu de notre travail.',
      lead: 'Quelques exemples de sites que nous concevons.',
      soon: 'Image à venir',
      visit: 'Voir le site',
    },
    process: {
      title: 'Simple, du premier appel au lancement et au-delà.',
      steps: [
        ['Découvrir', 'Nous apprenons à connaître votre activité, vos clients et ce que représente un bon résultat.'],
        ['Stratégie', 'Un plan clair des pages, des mots et des recherches qui comptent le plus.'],
        ['Réaliser', 'Nous concevons, développons et lançons, en vous associant à chaque étape.'],
        ['Évoluer', 'Nous mesurons, améliorons et gardons le site au service de votre activité.'],
      ],
    },
    contact: {
      title: 'Parlons de votre projet.',
      lead: 'Parlez-nous de votre activité. Le périmètre, le contenu et le budget se définissent après notre échange.',
      name: 'Nom', namePh: 'Votre nom',
      email: 'E-mail', emailPh: 'vous@entreprise.com',
      msg: 'Comment pouvons-nous vous aider ?', msgPh: 'Quelques lignes sur votre activité et vos objectifs',
      submit: 'Réserver un appel gratuit',
      errName: 'Dites-nous comment vous vous appelez.',
      errEmail: 'Saisissez un e-mail valide, par exemple vous@entreprise.com.',
      errMsg: 'Ajoutez quelques mots sur votre besoin.',
      sending: 'Envoi en cours…',
      ok: 'Merci ! Nous vous répondons sous un jour ouvré.',
      bad: 'Une erreur est survenue. Réessayez ou écrivez-nous directement.',
    },
    footer: {
      tagline: 'Des sites web et des marques pensés pour être trouvés.',
      explore: 'Explorer',
      contact: 'Contact',
      follow: 'Suivre',
      legal: '© 2026 Made Design. Tous droits réservés.',
    },
  },
  en: {
    htmlLang: 'en',
    meta: {
      title: 'Made Design — Websites people find, and trust',
      description:
        'Made Design is a studio that designs fast, search-ready websites for businesses in Morocco and abroad.',
    },
    ui: { skip: 'Skip to content', menu: 'Menu', main: 'Main', home: 'home', langLabel: 'Choose site language' },
    nav: ['Why a site', 'Benefits', 'Formats', 'Work', 'Process', 'Contact'],
    navCta: 'Get in touch',
    hero: {
      before: 'Websites people ',
      em: 'find',
      after: ', and trust.',
      lead: 'We build professional websites that present your business clearly and make it easy for customers to get in touch.',
      cta: 'Book a free call',
      ghost: 'See what we build',
    },
    why: {
      label: 'Why a website',
      lead: 'Interest starts elsewhere. Trust is built on your own site.',
      sub: 'After an ad, a referral or a post, people look for a clearer picture before they get in touch. A good site gives it to them.',
      problems: [
        ['A post is not enough', 'Your work, prices and contact details end up scattered across several channels.'],
        ['Your business deserves its own space', 'Without a dedicated site, customers piece the essentials together themselves.'],
        ['The next step must be obvious', 'A clear path helps visitors move from curiosity to an enquiry.'],
      ],
      note: 'A website supports your sales effort. It does not replace your team or your strategy.',
    },
    benefits: {
      title: 'More than an online presence: a better starting point.',
      items: [
        ['Build credibility', 'Present your business with the care and consistency customers expect before they get in touch.'],
        ['Make it easy to enquire', 'Give visitors one clear path to ask a question or book a call.'],
        ['Get found', 'Search-ready structure and fast pages, so people looking for what you do can find you.'],
        ['Stand apart', 'A look and a voice of your own, beyond a template or a social profile.'],
        ['Work on any screen', 'Fast, readable and easy to use on phones, tablets and desktops, wherever your customers are.'],
        ['Give campaigns a destination', 'Send people from an ad or a post to a page built for exactly what they saw.'],
      ],
    },
    formats: {
      title: 'The right site depends on what you need to show.',
      lead: 'We define scope with you based on your content and priorities. These formats are starting points, not fixed packages.',
      what: 'What it is',
      items: [
        { name: 'Business site', kind: 'For established businesses', text: 'A structured presence that tells your story, lays out your services and makes contact simple.', points: ['Company and services', 'Responsive, search-ready', 'Contact and enquiry form'] },
        { name: 'Landing page', kind: 'For a launch or a campaign', text: 'One focused page that gathers what matters about a single offer and drives one action.', points: ['One offer, one message', 'Built for ad traffic', 'Enquiry or booking'] },
        { name: 'Multi-page brand site', kind: 'For several offers or locations', text: 'A shared brand with a dedicated page for each service, product or location.', points: ['Shared identity', 'A page per offer', 'Enquiries tied to each page'] },
      ],
    },
    work: {
      title: 'A look at our work.',
      lead: 'Some examples of the sites we design.',
      soon: 'Image coming soon',
      visit: 'Visit site',
    },
    process: {
      title: 'Simple from first call to launch and beyond.',
      steps: [
        ['Discover', 'We learn your business, your customers and what a good outcome looks like.'],
        ['Strategy', 'A clear plan for the pages, words and searches that matter most.'],
        ['Execute', 'We design, build and launch, with you in the loop at every step.'],
        ['Grow', 'We measure, improve and keep the site working for you.'],
      ],
    },
    contact: {
      title: 'Let’s talk about your project.',
      lead: 'Tell us about your business. Scope, content and budget are agreed after we talk.',
      name: 'Name', namePh: 'Your name',
      email: 'Email', emailPh: 'you@company.com',
      msg: 'How can we help?', msgPh: 'A few lines about your business and goals',
      submit: 'Book a free call',
      errName: 'Please tell us your name.',
      errEmail: 'Enter a valid email, like you@company.com.',
      errMsg: 'Add a few words about what you need.',
      sending: 'Sending…',
      ok: 'Thanks! We will reply within one working day.',
      bad: 'Something went wrong. Please try again or email us directly.',
    },
    footer: {
      tagline: 'Design-led websites and brands that get found.',
      explore: 'Explore',
      contact: 'Contact',
      follow: 'Follow',
      legal: '© 2026 Made Design. All rights reserved.',
    },
  },
} satisfies Record<Lang, unknown>
