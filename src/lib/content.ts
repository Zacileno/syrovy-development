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
  /** Titulek do vyhledávače, bez názvu značky. */
  seoTitle: string;
  /** Popis do vyhledávače, 150 až 160 znaků. */
  seoDescription: string;
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
    seoTitle: "Rekonstrukce bytů a domů na klíč",
    seoDescription:
      "Koupili jste starší byt nebo chcete konečně předělat ten svůj? Postaráme se o všechno, od bouracích prací po zapojení poslední zásuvky. Vše s jednou smlouvou.",
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
    seoTitle: "Stavby rodinných domů na klíč",
    seoDescription:
      "Postavíme dům, který vydrží generace. Od základové desky po hotový interiér, ve kterém se dá druhý den bydlet. Prvotřídní materiály a ohled na provozní náklady.",
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
    seoTitle: "Koupelny na klíč od návrhu po realizaci",
    seoDescription:
      "Stovky hotových koupelen, vlastní showroomy a designéři. Tady jsme doma a odsud vychází všechno ostatní, co děláme. Materiály a vzorové koupelny uvidíte osobně.",
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
    seoTitle: "Výstavba na splátky bez banky",
    seoDescription:
      "Správný okamžik pro rekonstrukci je tehdy, když ji potřebujete, ne až když na ni našetříte. Financování řešíme přímo u nás, bez banky a bez dokládání příjmů.",
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

/**
 * Rodinný blok na úvodní stránce.
 *
 * Přebírá myšlenku i skladbu bloku „Naše rodina je tu pro vás“ z webu Koupelen
 * Syrový, text je ale přepsaný na Syrový Development.
 *
 * POZOR — fotka je převzatá z koupelnysyrovy.cz. Až budou vlastní fotky
 * Syrový Development, je potřeba ji vyměnit.
 */
export const rodina = {
  title: "Naše rodina je tu pro vás",
  paragraphs: [
    "Jsme rodina Syrových. Zakládáme si na kvalitě, smyslu pro detail, zkušenostech a individuálním přístupu ke každému zákazníkovi. Koupelnám se naše rodina věnuje už 30 let a od roku 2019 přinášíme lidem z celé České republiky prvotřídní zboží, služby a design za dostupné ceny.",
    "Syrový Development je pokračování téhle cesty. Stejní lidé a stejný přístup, jen už ne jen v koupelně, ale v celém bytě nebo domě. Pomůžeme i vám?",
  ],
  cta: { label: "Poznejte nás blíž", href: "/o-nas" },
  image: {
    src: "/rodina.webp",
    alt: "Rodina Syrových ve svém koupelnovém studiu",
    blurDataURL:
      "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAAAQAgCdASoQAAYAA4BaJZACdG1/Aeg/ruoAAOJ+64k89CiyGSt5ckIDVun4CnOBCr39APtqcEzEiGe/1RvWsXr23xX+ysG/aCKAHU5Can+RAGaPE+qNCrrO/A8g4gAA",
  },
} as const;

/**
 * Blok „Napsali o nás“.
 *
 * POZOR — všechny zmínky se týkají Koupelen Syrový, tedy sesterské značky pod
 * stejnou rodinou. Odkazy vedou na původní články, proto je nad kartami věta,
 * která uvádí, že jde o rodinnou značku jako celek.
 */
export const media = [
  {
    logo: "/media/forbes.svg",
    name: "Forbes",
    kind: "Článek",
    title: "Umístili jsme se v letošním výběru prestižního žebříčku Forbes 30 pod 30",
    href: "https://www.koupelnysyrovy.cz/magazin/koupelny-syrovy-v-zebricku-forbes-30-pod-30/",
  },
  {
    logo: "/media/ceska-televize.svg",
    name: "Česká televize",
    kind: "Reportáž",
    title: "V pořadu Polopatě jsme mluvili o tom, jak postupovat při rekonstrukci koupelny",
    href: "https://youtu.be/18JS2oQ5G_A",
  },
  {
    logo: "/media/finmag.svg",
    name: "Finmag",
    kind: "Aktualita",
    title: "Psalo se i o otevření našeho nového showroomu v Brně",
    href: "https://www.finmag.cz/tiskove-zpravy/470141-koupelny-syrovy-v-brne-oteviraji-ctvrtou-pobocku-expanzi-naplnuje-cil-100-milionoveho-obratu-a-cili-na-dvojnasobek",
  },
  {
    logo: "/media/mediaguru.svg",
    name: "MediaGuru",
    kind: "Aktualita",
    title: "Naše pobočka v Praze zarezonovala i v mediálním deníku",
    href: "https://www.mediaguru.cz/clanky/2024/04/koupelny-syrovy-instagram-je-nasim-nejdulezitejsim-akvizicnim-kanalem/",
  },
] as const;

/** Milníky rodinné značky. Zkrácená verze časové osy z webu Koupelen Syrový. */
export const milniky = [
  {
    year: "2019",
    title: "Pardubice",
    text: "Otevíráme první koupelnové studio a začínáme novou éru rodinné tradice.",
  },
  {
    year: "2022",
    title: "Realizace na klíč",
    text: "Už nejsme jen designéři a prodejci. Spouštíme realizace koupelen na klíč a hlídáme si kvalitu všech prací.",
  },
  {
    year: "2024",
    title: "Praha a nové Pardubice",
    text: "Vstupujeme do hlavního města a v Pardubicích znovu otevíráme nejmodernější koupelnové studio v Česku.",
  },
  {
    year: "2025",
    title: "Brno a Syrový Development",
    text: "Otevíráme studio v Brně a zkušenost ze stovek koupelen přenášíme do celých bytů a domů.",
  },
];

/**
 * Tým.
 *
 * POZOR — fotky i lidé jsou převzatí z Koupelen Syrový. Syrový Development
 * zatím nemá vlastní obsazení, personální složení musí potvrdit klient.
 */
export const tym = [
  {
    name: "Matouš Syrový",
    role: "CEO",
    text: "Matouš vede Koupelny Syrový od roku 2019 a stojí i za vznikem Syrový Development. V návrzích a realizacích se pohybuje od dob studentských brigád.",
    photo: "/tym/matous.webp",
    blurDataURL:
      "data:image/webp;base64,UklGRqYAAABXRUJQVlA4IJoAAACwBACdASoQABgAPu1iqU2ppaOiMAgBMB2JbACdIE5IBLIA5SZ9Rorn1tKmWDnAAPehoucrdgm0dA8atijI6e+XcCILZ9N9eSlPp/RHuxpbQpc98i5TepqHMWbf4v3cigANmWIIz6bPBPu476A9JaxnylEpdiJT2MLZjQ07carPbqs5rdPi54pjughxCZDCc0zH9VPFqry3WZAA",
  },
  {
    name: "Kristýna Syrová",
    role: "HR a obchod",
    text: "Týna začala spolu s Matoušem budovat novou éru rodinné firmy. Je jednatelkou a stará se o lidi, bez kterých by žádná realizace nedopadla.",
    photo: "/tym/kristyna.webp",
    blurDataURL:
      "data:image/webp;base64,UklGRsAAAABXRUJQVlA4ILQAAACQBACdASoQABgAPu1iqU2ppaOiMAgBMB2JbACdMoRwIsBbOQCljFe+HFeOAgAA+eSfzjSKB+DdKxQfbr1Wh1VjNP6+Cm3rl1H/Ecb90/NTPD7FHKnKGZG/ITIfakkidgH5Jn7Zqjx+OAfXMwlTPG1dckAgiiZDXO3GbcOKGiewVbI47AZvlY9CVEawXeDFr9GdMNGPYFvvbT/w7+ZBRVAz+TToLJa9vvvespM/307+B7FnAAA=",
  },
  {
    name: "Barbora Syrová",
    role: "Produkt a nákup",
    text: "Barča má na starosti produktové a nákupní oddělení. Její superschopností je organizace, pečlivost a schopnost dotáhnout dodávky včas.",
    photo: "/tym/barbora.webp",
    blurDataURL:
      "data:image/webp;base64,UklGRsYAAABXRUJQVlA4ILoAAAAQBQCdASoQABgAPu1iqU2ppaOiMAgBMB2JbACdMoR4OsBbJvoAAJ19mmgNkftVxUEgAPnkn85AnOplOlxhiXQRP4pRzVkVPpYazMyumd2aG/a4C5dRT7rWh+D6MI+/c+kwNVAe2YzofzPb00log+3O98/ZGHZZSo8ZM+ZQKCRP6Wf3WtUfuwA5X446PSKgJzb6zs8QpfrUWgBNwtb/cOLrAEPie82NyEao96f+l94PespPyyUQK1wAAAA=",
  },
  {
    name: "Petr Lochman",
    role: "Koordinátor realizací",
    text: "Petr zajišťuje hladký průběh realizace. Plánuje termíny, komunikuje s řemesly a dodavateli a hlídá, aby na sebe práce navazovaly.",
    photo: "/tym/petr.webp",
    blurDataURL:
      "data:image/webp;base64,UklGRsAAAABXRUJQVlA4ILQAAABQBQCdASoQABgAPu1iqU2ppaOiMAgBMB2JbACdMoRwIsx9gLsgAb7zjrsBLHdX1Lts3gAA+elCp7MIOwyA2tAubgIZXm0DtbP6G+LnJ3tCGBOUwcRjme+Lfv9T2ZnT6bkQECRy/g00uEzCOyToZrLxGUO47/g+4m/Se8M+Cpz6KPoTXseT7g5LeqszviGuMrbDUjCh5F7D/2vk+v+QyMd1RS7iBwEX/QTpf8f/gzWRn9AAAAA=",
  },
  {
    name: "Jan Lagron",
    role: "Vedoucí provozu",
    text: "Honza má na starosti běžný provoz, dopravu a reklamace. Od začátku ukazuje nadání pro zlepšování procesů.",
    photo: "/tym/jan-lagron.webp",
    blurDataURL:
      "data:image/webp;base64,UklGRqQAAABXRUJQVlA4IJgAAABQBACdASoQABgAPu1iqU2ppaOiMAgBMB2JbACdMoMrZCCz92PdbMUh7ykwAP1G1tuA4OPodFbCX1+4C7uqVf2lipyHFtKIJ7oJ25KzP29GK6ivVaVU+loUFz//j4ZWTPKgd1PatVvPH/njJB+q7Q3dPbQHjWIyWrjM5TsMC/J3DPGjRA2J1sxV+2t+D28Ko0plDAvA1b24AA==",
  },
  {
    name: "Vladimír Jirásek",
    role: "Servisní technik",
    text: "Vláďa je s námi od úplného začátku. Jeho superschopností je rychlé řešení technických problémů přímo na stavbě.",
    photo: "/tym/vladimir.webp",
    blurDataURL:
      "data:image/webp;base64,UklGRrAAAABXRUJQVlA4IKQAAAAwBQCdASoQABgAPu1iqU2ppaOiMAgBMB2JbACdMoMYNcBtgLsAAn67OSCYG/dQNDYlQAD6XJNv7+EM1WXNRnd+tte6YRwnkqC7IJcn+mN7hRFwjrPJgbyB9QPBghn7gji34TYrAkYDIj+blNg+QCht7mYx4kLqNMA/m0CFX2Uhm1oI27O6qPuetGlQv0QePiHuNQzKm/NakGGgxvMIC1kZ/1YAAA==",
  },
];
