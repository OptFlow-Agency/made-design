/* ------------------------------------------------------------------
   EDIT HERE. Contact details below are PLACEHOLDERS.
   Copy for both languages lives in ./copy.ts.
------------------------------------------------------------------- */
export const site = {
  name: "Made Design",
  // phone: "",
  // address: "Your street, Your city",
  // Cal.com booking link, as "username/event-slug" (e.g. "made-design/30min"); a bare username shows all event types.
  // TODO: set it. Empty = the calendar is hidden and only the email shows.
  calLink: "made-design",
  // Public profiles (LinkedIn, Instagram, ...) and contact email. Used only for structured data;
  // anything left empty is omitted, so add real values when you have them.
  sameAs: [] as string[],
  // Contact details. Each button/link renders only when its value is filled in.
  email: "", // e.g. "hello@madedesign.agency"
  whatsappNumber: "", // international format, digits only, no "+" (e.g. "212600000000")
  // Social profile URLs (full https:// links). Empty ones are not rendered; if all are empty the "Suivre" column is hidden.
  social: {
    instagram: "",
    linkedin: "",
    facebook: "",
  },
  // Optional founder block in the "Qui sommes-nous" section. Empty fields are not rendered.
  // `photo` is a filename inside src/assets/team/ (e.g. "founder.jpg").
  founder: {
    name: "",
    role: { fr: "", en: "" } as Record<Lang, string>,
    bio: { fr: "", en: "" } as Record<Lang, string>,
    photo: "",
  },
};

/* DRAFT prices and timings: edit here, they flow into the formats cards and the FAQ.
   A `null` price means "sur devis" / "on quote". An empty timing hides that line. */
export const pricing = {
  currency: "MAD",
  vitrine: 3500 as number | null,
  landing: 2000 as number | null,
  brand: null as number | null,
};
export const timing: Record<"vitrine" | "landing" | "brand", Record<Lang, string>> = {
  vitrine: { fr: "2 à 4 semaines", en: "2 to 4 weeks" },
  landing: { fr: "7 à 10 jours", en: "7 to 10 days" },
  brand: { fr: "", en: "" },
};
// Deposit asked at kick-off, as a percentage; the balance is due on delivery.
export const payment = { depositPercent: 50 };

type PriceKey = "vitrine" | "landing" | "brand";
const nbsp = "\u00a0";
const amount = (n: number, lang: Lang) =>
  `${n.toLocaleString(lang === "fr" ? "fr-FR" : "en-US").replace(/\u202f/g, nbsp)}${nbsp}${pricing.currency}`;
/** "3 500 MAD" (empty when the price is on quote). */
export const priceAmount = (key: PriceKey, lang: Lang) => {
  const n = pricing[key];
  return n == null ? "" : amount(n, lang);
};
/** "à partir de 3 500 MAD", or "sur devis" when there is no fixed starting price. */
export const priceFrom = (key: PriceKey, lang: Lang) => {
  const a = priceAmount(key, lang);
  if (!a) return lang === "fr" ? "sur devis" : "on quote";
  return lang === "fr" ? `à partir de ${a}` : `from ${a}`;
};

export const locales = ["fr", "en"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "fr";

// French is served at the root, English under /en/
export const pathFor = (lang: Lang) =>
  lang === defaultLang ? "/" : `/${lang}/`;

// Section anchors, in page order. Shared by every language.
export const navHrefs = ["#formats", "#work", "#process", "#blog"];
// Footer "Explorer" list: the nav plus the studio section (kept out of the header to avoid crowding it).
export const footerHrefs = ["#formats", "#work", "#process", "#studio", "#blog"];

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
  /** "client" = delivered for a real client; "concept" = own/demo project. */
  type: "client" | "concept";
  file?: string;
  href?: string;
}[] = [
  // TODO: add `href` (live site URL) to each project to enable the preview link.
  {
    name: "VPG",
    type: "concept",
    file: "vpg.png",
    kind: { fr: "Site immobilier", en: "Real estate site" },
    href: "https://vpg-nu.vercel.app/",
  },
  {
    name: "AZ Global Activities",
    type: "client",
    file: "az-global-activities.png",
    kind: { fr: "Site vitrine", en: "Business site" },
    href: "https://azglobalactivities.com/",
  },
  {
    name: "Lumina Studio",
    type: "concept",
    file: "lumina-studio.png",
    kind: { fr: "Site vitrine", en: "Business site" },
    href: "https://lumina-studio-vert.vercel.app/",
  },
  {
    name: "Strata",
    type: "concept",
    file: "strata.png",
    kind: { fr: "Site de réservation", en: "Booking site" },
    href: "https://strata-pi-ten.vercel.app/",
  },
  {
    name: "Olivia",
    type: "client",
    file: "olivia.png",
    kind: { fr: "Site de restaurant", en: "Restaurant site" },
  },
];
