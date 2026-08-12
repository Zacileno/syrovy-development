/**
 * Texty webu.
 *
 * Zdroje: strategický brief Syrový Development (08/2025), rozsah služeb podle
 * dosavadních realizací a tone of voice Koupelen Syrový (vykání, lidský tón,
 * důraz na bezstarostnost).
 *
 * Vše je NÁVRH k připomínkování — konkrétní čísla a podmínky musí potvrdit klient.
 */

export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  tagline: string;
  lead: string;
  image: string;
  perex: string;
  includes: string[];
  benefits: { title: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "rekonstrukce-bytu-a-domu",
    title: "Rekonstrukce bytů a domů",
    navTitle: "Rekonstrukce bytů a domů",
    tagline: "Kompletní rekonstrukce",
    lead: "Koupili jste starší byt nebo chcete konečně předělat ten svůj? Postaráme se o všechno, od bouracích prací po zapojení poslední zásuvky.",
    image: "/realizace/dsc01553.webp",
    perex:
      "Rekonstrukce bytu je běh na dlouhou trať, ve kterém se musí potkat deset různých řemesel ve správném pořadí. Přesně to je naše práce. Vy si vyberete, jak má byt vypadat, my zajistíme, aby to tak dopadlo. V termínu a bez toho, že byste museli komukoliv volat a shánět ho.",
    includes: [
      "Bourací práce a odvoz suti",
      "Nové rozvody elektřiny, vody a odpadů",
      "Zdivo, omítky, sádrokartony a stropy",
      "Koupelny a WC na klíč",
      "Kuchyňské zázemí a přípojky",
      "Podlahy, obklady a dlažby",
      "Malby, dveře a zárubně",
      "Finální úklid po realizaci",
    ],
    benefits: [
      {
        title: "Jeden člověk, jedna smlouva",
        text: "Nemusíte koordinovat instalatéra, elektrikáře a obkladače. Máte jednoho člověka, který za celou zakázku odpovídá, a jednu cenovou nabídku.",
      },
      {
        title: "Vzorové koupelny nadosah",
        text: "Materiály si nevybíráte z katalogu. Přijdete do showroomu, sáhnete si na obklad a uvidíte hotovou koupelnu v reálné velikosti.",
      },
      {
        title: "Termíny, které platí",
        text: "Harmonogram si nastavíme dopředu a držíme se ho. Když se něco změní, víte to od nás dřív, než se to stane problémem.",
      },
    ],
  },
  {
    slug: "stavby-rodinnych-domu",
    title: "Stavby rodinných domů",
    navTitle: "Stavby rodinných domů",
    tagline: "Od základů po klíče",
    lead: "Postavíme dům, který vydrží generace. Od základové desky po hotový interiér, ve kterém se dá druhý den bydlet.",
    image: "/realizace/dsc01173.webp",
    perex:
      "Stavba domu je pravděpodobně největší investice vašeho života. Proto k ní přistupujeme tak, aby na konci nebyla žádná nepříjemná překvapení. Jasný rozpočet, jasný harmonogram a jeden partner, který dům dotáhne až do stavu, kdy se do něj dá nastěhovat.",
    includes: [
      "Hrubá stavba včetně základů a krovu",
      "Zateplení a fasáda",
      "Kompletní rozvody a technologie",
      "Interiérové úpravy a povrchy",
      "Koupelny a kuchyně na klíč",
      "Zámková dlažba, ploty a oplocení",
    ],
    benefits: [
      {
        title: "Prvotřídní materiály",
        text: "Stavíme z materiálů, které známe a máme s nimi zkušenost. Nešetříme tam, kde se to za pět let vrátí jako závada.",
      },
      {
        title: "Ohled na provozní náklady",
        text: "Kvalitní zateplení a promyšlené konstrukční detaily znamenají nižší účty za energie po celou dobu, co v domě budete bydlet.",
      },
      {
        title: "Interiér není přílepek",
        text: "Koupelny, obklady a povrchy řešíme od začátku jako součást projektu, ne až jako to, co se dodělá po kolaudaci.",
      },
    ],
  },
  {
    slug: "koupelny-na-klic",
    title: "Koupelny na klíč",
    navTitle: "Koupelny na klíč",
    tagline: "To, co umíme nejlépe",
    lead: "Stovky hotových koupelen, vlastní showroomy a designéři. Tady jsme doma a odsud vychází všechno ostatní, co děláme.",
    image: "/realizace/dsc01753.webp",
    perex:
      "Koupelna je nejtěžší místnost v bytě. Potkává se v ní voda, elektřina, obklady i nábytek na milimetr přesně. Když ji zvládnete odvést dobře, zvládnete odvést dobře cokoliv. Právě proto stojí Syrový Development na zkušenosti z koupelen, a proto ji přenášíme do celých bytů a domů.",
    includes: [
      "3D vizualizace ještě před podpisem",
      "Výběr obkladů, sanity a nábytku ve showroomu",
      "Kompletní bourací a instalatérské práce",
      "Obklady, dlažby a stavební chemie",
      "Montáž sanity, nábytku a osvětlení",
      "Zrcadla a nábytek na míru",
    ],
    benefits: [
      {
        title: "Uvidíte to dřív, než to koupíte",
        text: "Realistickou 3D vizualizaci připravíme ve studiu nebo nejpozději do druhého dne od videohovoru. Měnit se dá cokoliv a kolikrát chcete.",
      },
      {
        title: "Řemeslníci, které známe osobně",
        text: "Pracujeme jen s lidmi, se kterými máme odjeté zakázky. Žádné inzeráty a žádné nové tváře na vaší stavbě.",
      },
      {
        title: "Obvykle do tří týdnů",
        text: "Samotná realizace koupelny trvá zpravidla kolem tří týdnů. Po celou dobu i po ní jsme vám k dispozici.",
      },
    ],
  },
  {
    slug: "vystavba-na-splatky",
    title: "Výstavba na splátky",
    navTitle: "Výstavba na splátky",
    tagline: "Financování bez banky",
    lead: "Správný okamžik pro rekonstrukci je tehdy, když ji potřebujete, ne až když na ni našetříte. Financování řešíme přímo u nás.",
    image: "/realizace/dsc01599.webp",
    perex:
      "Program financování, který jsme roky ladili na koupelnách, teď otevíráme i pro rekonstrukce a stavby. Není to půjčka od banky, je to dohoda přímo mezi vámi a námi. Bez zkoumání bonity, bez dokládání příjmů a bez čekání na schvalovací proces.",
    includes: [
      "Financování přímo u Syrový Development, ne u banky",
      "Bez zkoumání bonity a dokládání příjmů",
      "Schválení prakticky okamžitě",
      "Transparentní podmínky bez skrytých poplatků",
      "Servis a drobné opravy po dobu splácení",
      "Prodloužená záruka na jakost",
    ],
    benefits: [
      {
        title: "Začínáme hned",
        text: "Realizaci zahájíme, jakmile se domluvíme. Splácet začnete až potom, co se máte kde umýt.",
      },
      {
        title: "Servis je naše starost",
        text: "Po dobu splácení jsou drobné opravy a servis na nás. Zároveň k tomu dostanete prodlouženou záruku na jakost.",
      },
      {
        title: "Zachováte si rezervu",
        text: "Nemusíte vysypat všechny úspory najednou. Přehledné měsíční platby vám nechají prostor i na všechno ostatní.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

/** Postup spolupráce — vychází z osvědčeného procesu Koupelen Syrový. */
export const processSteps = [
  {
    title: "Nezávazná schůzka",
    text: "Sejdeme se v showroomu nebo online. Řeknete nám, co potřebujete, a my vám rovnou řekneme, co je reálné.",
  },
  {
    title: "Zaměření na místě",
    text: "Přijedeme se podívat do bytu nebo na pozemek. Projdeme si rozvody, nosné konstrukce a případná úskalí.",
  },
  {
    title: "Návrh a vizualizace",
    text: "Připravíme realistickou vizualizaci klíčových místností. Měnit se dá cokoliv, dokud nebudete spokojení.",
  },
  {
    title: "Rozpočet a harmonogram",
    text: "Dostanete jednu cenovou nabídku za celý projekt a plán, ve kterém uvidíte, co se kdy bude dít.",
  },
  {
    title: "Realizace",
    text: "Přebíráme staveniště a koordinujeme všechna řemesla. Vy dostáváte průběžné informace, ne úkoly.",
  },
  {
    title: "Předání a záruka",
    text: "Předáme vám hotové bydlení včetně úklidu. A jsme k dispozici i potom, když je něco potřeba doladit.",
  },
];

export const whyUs = [
  {
    title: "Vlastní realizační tým",
    text: "Nejsme zprostředkovatel. Práce dělají lidé, které známe a za které se dokážeme postavit.",
  },
  {
    title: "Čtyři showroomy",
    text: "Pardubice, Hradec Králové, Brno a Praha. Materiály si osaháte na místě, ne na obrazovce.",
  },
  {
    title: "Design od začátku",
    text: "Vizualizace není nadstandard. Chceme, abyste věděli, jak to bude vypadat, ještě než se začne bourat.",
  },
  {
    title: "Financování bez banky",
    text: "Splátkový program řešíme přímo u nás. Bez zkoumání bonity a bez čekání na schválení.",
  },
];

export const faq = [
  {
    question: "Kde realizace děláte?",
    answer:
      "Realizujeme po celé České republice. Showroomy máme v Pardubicích, Hradci Králové, Brně a Praze. Tam si můžete osobně prohlédnout materiály a vzorové koupelny.",
  },
  {
    question: "Musím si zboží koupit u vás?",
    answer:
      "Nemusíte, ale vyplatí se to. Když jde zboží i práce přes nás, hlídáme návaznost dodávek a nestane se, že řemeslníci čekají na obklad. Zároveň za takovou zakázku dokážeme převzít plnou odpovědnost.",
  },
  {
    question: "Jak dlouho trvá rekonstrukce bytu?",
    answer:
      "Záleží na rozsahu. Samotná koupelna obvykle kolem tří týdnů, kompletní rekonstrukce bytu se běžně pohybuje v řádu měsíců. Přesný harmonogram dostanete spolu s cenovou nabídkou.",
  },
  {
    question: "Kolik to bude stát?",
    answer:
      "Cenu poctivě spočítáme až po zaměření na místě, bez toho by to bylo věštění. Nezávazná konzultace a orientační odhad jsou u nás zdarma.",
  },
  {
    question: "Zajistíte i projektovou dokumentaci a povolení?",
    answer:
      "U staveb rodinných domů a větších zásahů ano, řešíme to jako součást projektu. U běžné rekonstrukce bytu vám poradíme, co je potřeba nahlásit a co ne.",
  },
  {
    question: "Jak funguje výstavba na splátky?",
    answer:
      "Financování je dohoda přímo mezi vámi a námi, nejde přes banku. Nezkoumáme bonitu ani nechceme dokládat příjmy, takže schválení proběhne prakticky okamžitě. Konkrétní podmínky s vámi projdeme na schůzce.",
  },
];
