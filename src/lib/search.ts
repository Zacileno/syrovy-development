import { faq, services } from "@/lib/content";
import { recenze } from "@/lib/recenze";
import { showrooms } from "@/lib/site";

export type SearchDoc = {
  title: string;
  href: string;
  section: string;
  text: string;
};

/** Rejstřík obsahu webu. Web je malý, takže hledáme přímo nad tímto polem. */
export const searchIndex: SearchDoc[] = [
  {
    title: "Úvodní stránka",
    href: "/",
    section: "Web",
    text: "Jeden partner od návrhu po hotovou realizaci. Kompletní rekonstrukce bytů, stavby rodinných domů a koupelny na klíč.",
  },
  {
    title: "Naše služby",
    href: "/sluzby",
    section: "Služby",
    text: "Přehled všech služeb Syrový Development a postup spolupráce od schůzky po předání.",
  },
  ...services.map((service) => ({
    title: service.title,
    href: `/sluzby/${service.slug}`,
    section: "Služby",
    text: [service.tagline, service.lead, service.perex, service.includes.join(" "), service.benefits.map((b) => `${b.title} ${b.text}`).join(" ")].join(" "),
  })),
  {
    title: "Realizace",
    href: "/realizace",
    section: "Realizace",
    text: "Fotografie dokončených koupelen. Tmavé velkoformátové obklady, dubový nábytek na míru, podsvícená zrcadla a černá sanita.",
  },
  {
    title: "Recenze zákazníků",
    href: "/recenze",
    section: "Recenze",
    text: recenze.map((item) => `${item.title} ${item.subtitle} ${item.quote} ${item.author}`).join(" "),
  },
  {
    title: "O nás",
    href: "/o-nas",
    section: "O nás",
    text: "Syrový Development je stavební divize Syrový Group. Navazujeme na zkušenost ze stovek realizovaných koupelen. Vlastní realizační tým, showroomy, design a financování bez banky.",
  },
  {
    title: "Kontakt a showroomy",
    href: "/kontakt",
    section: "Kontakt",
    text: `Nezávazná poptávka, telefon, e-mail. ${showrooms.map((s) => `${s.city} ${s.address}`).join(" ")}`,
  },
  ...faq.map((item) => ({
    title: item.question,
    href: "/sluzby",
    section: "Časté dotazy",
    text: item.answer,
  })),
];

/** Odstraní diakritiku, aby „splatky“ našlo i „splátky“. */
function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export function search(query: string): SearchDoc[] {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];

  return searchIndex
    .map((doc) => {
      const haystackTitle = normalize(doc.title);
      const haystackAll = normalize(`${doc.title} ${doc.section} ${doc.text}`);
      // Musí sedět všechna slova, shoda v názvu váží víc.
      if (!words.every((word) => haystackAll.includes(word))) return null;
      const score = words.filter((word) => haystackTitle.includes(word)).length;
      return { doc, score };
    })
    .filter((hit): hit is { doc: SearchDoc; score: number } => hit !== null)
    .sort((a, b) => b.score - a.score)
    .map((hit) => hit.doc);
}
