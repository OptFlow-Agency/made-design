/* ------------------------------------------------------------------
   EDIT HERE. Contact details below are PLACEHOLDERS.
   Copy for both languages lives in ./copy.ts.
------------------------------------------------------------------- */
export const site = {
  name: "Made Design",
  email: "oussamachahidi20@gmail.com",
  // phone: "",
  // address: "Your street, Your city",
  // Contact form endpoint (sends via Gmail SMTP, see src/pages/api/contact.ts). Empty = demo mode.
  formEndpoint: "/api/contact",
};

export const locales = ["fr", "en"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "fr";

// French is served at the root, English under /en/
export const pathFor = (lang: Lang) =>
  lang === defaultLang ? "/" : `/${lang}/`;

// Section anchors, in page order. Shared by every language.
export const navHrefs = [
  "#why",
  "#services",
  "#formats",
  "#work",
  "#process",
  "#contact",
];

// One icon per benefit, in the same order as the copy.
export const serviceIcons = [
  '<path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>',
  '<circle cx="7.5" cy="7.5" r="4.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/><path d="m7.5 14 4 7h-8z"/>',
  '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  '<path d="M5 12h14M13 6l6 6-6 6"/>',
];

/* Work examples. Drop each screenshot into src/assets/work/ and set `file`
   to its filename (e.g. 'project-one.jpg'). Without a file, a neutral
   placeholder tile is shown. `href` is optional (link to the live site). */
export const work: {
  name: string;
  kind: Record<Lang, string>;
  file?: string;
  href?: string;
}[] = [
  // TODO: add `href` (live site URL) to each project to enable the preview link.
  {
    name: "Lumina Studio",
    file: "lumina-studio.png",
    kind: { fr: "Site vitrine", en: "Business site" },
    href: "https://lumina-studio-vert.vercel.app/",
  },
  {
    name: "Thockcraft",
    file: "thockcraft.png",
    kind: { fr: "Site e-commerce", en: "E-commerce site" },
    href: "https://thockcraft.vercel.app/",
  },
  {
    name: "Inkwell",
    file: "inkwell.png",
    kind: { fr: "Page d’atterrissage", en: "Landing page" },
    href: "https://inkwell-website-five.vercel.app/",
  },
  {
    name: "Teressa",
    file: "teressa.png",
    kind: { fr: "Page d’atterrissage", en: "Landing page" },
    href: "https://teressa-website.vercel.app/",
  },
  {
    name: "Strata",
    file: "strata.png",
    kind: { fr: "Site de réservation", en: "Booking site" },
    href: "https://strata-pi-ten.vercel.app/",
  },
  {
    name: "VPG",
    file: "vpg.png",
    kind: { fr: "Site immobilier", en: "Real estate site" },
    href: "https://vpg-nu.vercel.app/",
  },
  {
    name: "AZ Global Activities",
    file: "az-global-activities.png",
    kind: { fr: "Site vitrine", en: "Business site" },
    href: "https://azglobalactivities.com/",
  },
];
