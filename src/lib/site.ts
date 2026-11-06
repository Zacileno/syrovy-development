/**
 * Centrální data webu.
 *
 * POZOR — hodnoty označené PLACEHOLDER jsou dočasné.
 * Syrový Development zatím nemá vlastní doménu, telefon ani e-mail,
 * proto jsou převzaté z Koupelen Syrový. Před spuštěním je nutné je vyměnit.
 */

export const site = {
  name: "Syrový Development",
  /** PLACEHOLDER — čeká se na finální doménu */
  url: "https://www.syrovydevelopment.cz",
  description:
    "Kompletní realizace bytů, domů a koupelen na klíč. Jeden partner od návrhu po hotové bydlení, showroomy v Pardubicích, Hradci Králové, Brně a Praze.",
  /** PLACEHOLDER — převzato z Koupelen Syrový */
  phone: "725 058 488",
  phoneHref: "tel:+420725058488",
  /** PLACEHOLDER — převzato z Koupelen Syrový */
  email: "info@koupelnysyrovy.cz",
  openingHours: "Po–Pá: 8:00 – 17:30",
} as const;

export type NavItem = {
  label: string;
  href: string;
  /** Externí odkaz mimo náš web (otevře se v nové záložce). */
  external?: boolean;
  /** Položky se vypíšou do šedého pruhu pod hlavičkou. */
  children?: { label: string; href: string }[];
};

/** E-shop provozují Koupelny Syrový. V hlavičce už na něj neodkazujeme, zůstal jen v patičce. */
export const eshopUrl = "https://www.koupelnysyrovy.cz/e-shop/";

/**
 * Hlavní navigace.
 *
 * Klient si přál hlavičku zjednodušit, proto jsou tu jen tři položky. E-shop
 * a Showroomy z menu zmizely, na kontakty i showroomy vede tlačítko Sjednat
 * schůzku, na stránku O nás rodinný blok na úvodní stránce a patička.
 */
export const mainNav: NavItem[] = [
  {
    label: "Služby",
    href: "/sluzby",
    children: [
      { label: "Rekonstrukce bytů a domů", href: "/sluzby/rekonstrukce-bytu-a-domu" },
      { label: "Stavby rodinných domů", href: "/sluzby/stavby-rodinnych-domu" },
      { label: "Koupelny na klíč", href: "/sluzby/koupelny-na-klic" },
      { label: "Výstavba na splátky", href: "/sluzby/vystavba-na-splatky" },
    ],
  },
  { label: "Projekty", href: "/projekty" },
  { label: "Recenze", href: "/recenze" },
];

/**
 * Showroomy Syrový Group — zákazník si zde osobně vybírá materiály a vybavení.
 * Adresy a telefony převzaté ze showroomů Koupelen Syrový.
 */
export const showrooms = [
  {
    city: "Pardubice",
    address: "S. K. Neumanna 2869, Pardubice",
    phone: "725 347 428",
    phoneHref: "tel:+420725347428",
    hours: "Po–Pá: 9:00–19:00, So: 9:00–18:00",
    samples: 33,
  },
  {
    city: "Hradec Králové",
    address: "U Koruny 1742/16, Hradec Králové",
    phone: "770 143 443",
    phoneHref: "tel:+420770143443",
    hours: "Po–Pá: 9:00–18:00, So: 9:00–16:00",
    samples: 16,
  },
  {
    city: "Brno",
    address: "Heršpická 11c, Brno-střed",
    phone: "602 675 714",
    phoneHref: "tel:+420602675714",
    hours: "Po–Pá: 9:00–19:00, So: 10:00–18:00",
    samples: 25,
  },
  {
    city: "Praha",
    address: "Jesenická 410, Praha-Dobřejovice",
    phone: "602 150 298",
    phoneHref: "tel:+420602150298",
    hours: "Po–Pá: 9:00–19:00, So: 10:00–18:00",
    samples: 19,
  },
] as const;
