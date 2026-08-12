export type Foto = {
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
};

export type Recenze = Foto & {
  id: string;
  title: string;
  subtitle: string;
  quote: string;
  author: string;
  /** Stav před rekonstrukcí — jen u recenzí, kde máme obě fotky. */
  before?: Foto;
};

/**
 * Recenze zákazníků.
 *
 * POZOR — texty i fotografie jsou převzaté z koupelnysyrovy.cz/recenze-zakazniku.
 * Jde o skutečné ověřené reference zákazníků Koupelen Syrový. Před spuštěním webu
 * je potřeba potvrdit, že je Syrový Development může použít pod svou značkou.
 * To platí zejména u recenzí od jmenovitých veřejně známých osob.
 */
export const recenze: Recenze[] = [
  {
    "id": "nadcasova-koupelna",
    "title": "Nadčasová koupelna",
    "subtitle": "Rekonstrukce koupelny v rodinném domě po 15 letech",
    "quote": "Z koupelny na klíč jsme nadšení, radost kdykoliv tam vstoupíme. Oceňujeme rychlost, příjemné jednání od vizualizace a vybírání, kombinování ve studiu až po předání. Ze stavební firmy se u nás pár řemeslníků vystřídalo a všichni byli moc šikovní. Když se nám něco nepozdávalo, firma nám vyšla vstříc. Za 14 dnů jsme měli koupelnu hotovou. Jsme opravdu moc spokojeni.",
    "author": "Klientka Ivana",
    "src": "/recenze/nadcasova-koupelna.webp",
    "width": 1200,
    "height": 800,
    "blurDataURL": "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAAAwAgCdASoQAAsAA4BaJQBOgB+Dae0MSG7/gAD+voilsan+Ir/EbBmpQf2o7CSUfsWki7vj2zh+AFxImNXtKTS+TC3bQZ7bfoqZIsgA",
    "before": {
      "src": "/recenze/nadcasova-koupelna-pred.webp",
      "width": 1200,
      "height": 800,
      "blurDataURL": "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAADQAQCdASoQAAsAA4BaJZQAAodSMJHCAAD+aSHzeeBaIcGPt14EDZbbOW1fERCwB1ky1V04yOeXOA/pDkuNXA46iDruZhT3aoSpJmYYzTuwAA=="
    }
  },
  {
    "id": "koupelna-v-jemnych-bezovych-tonech",
    "title": "Koupelna v jemných béžových tónech",
    "subtitle": "Rekonstrukce dvou koupelen v řadovém domě",
    "quote": "Nechali jsme si udělat celkovou rekonstrukci koupelny a WC v řadovém domě. Zpočátku jsme úplně nevěděli, co chceme, ale s paní Moon jsme našli odpovídající návrh, který nám byl prezentován v 3D. Samotná realizace byla bezproblémová a komunikace s panem Lochmanem byla operativní. Kvalitu díla považuji za velmi dobrou a celá rekonstrukce byla hotova za 11 pracovních dnů, což mi až vyrazilo dech. Jednalo se o dost nákladnou rekonstrukci, ale pravdou je, že jsme obklady a vybavení volili ve vyšším standardu. Celkově jsem tedy velmi spokojen a věřím, že nám koupelna bude dobře sloužit.",
    "author": "Klient Petr",
    "src": "/recenze/koupelna-v-jemnych-bezovych-tonech.webp",
    "width": 1200,
    "height": 800,
    "blurDataURL": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAAAQAgCdASoQAAsAA4BaJQBOgBmFGAnqAWgAAOJHBrA4EYZC+sZFtMNsyiMgLe+up2y/jCgwsA2Y40mSsu4pIB6j5lyfrI4FzNEnkwm0BAjaOaiu4AA=",
    "before": {
      "src": "/recenze/koupelna-v-jemnych-bezovych-tonech-pred.webp",
      "width": 1200,
      "height": 800,
      "blurDataURL": "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAADwAQCdASoQAAsAA4BaJYgCdADMkLAnNKgA/PqDBcpGGV+4Xf/ogBLEdnRNHALssNc1CGdD5t7+Kf1H30F6IMZHWSS5WVqfPxhHfCRE1VW3EPoiSbo15r6AAAA="
    }
  },
  {
    "id": "koupelna-pro-babicku",
    "title": "Koupelna pro babičku",
    "subtitle": "Rekonstrukce 50 let staré koupelny",
    "quote": "V mém věku už se mi špatně lezlo do vany, toužila jsem po sprchovém koutu a konečně jsem se dočkala. Mám ráda teplé barvy a s tím dřevem to dohromady vypadá krásně. Stálo to rozhodně za to.",
    "author": "Klientka Tereza",
    "src": "/recenze/koupelna-pro-babicku.webp",
    "width": 1200,
    "height": 800,
    "blurDataURL": "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADwAQCdASoQAAsAA4BaJbACdADHqNCsHPAA/poT9Tsd2p7bDInqzxTYJRF0BvHfcSIGunt18GqB7ftztaSX/cfVisiYuLYkAAA=",
    "before": {
      "src": "/recenze/koupelna-pro-babicku-pred.webp",
      "width": 1200,
      "height": 800,
      "blurDataURL": "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAACwAQCdASoQAAsAA4BaJYgCdAB6l4AwAM4+iLTPPu6WvagdIyS7cp8ez2nLCRRH2iiX1LxFjphNr4ekDzRfGwL82ZxpehgnrwUkrEMR3TmM09kpF4GuAAAA"
    }
  },
  {
    "id": "vojta-koritensky-a-koupelna-pro-chlapa",
    "title": "Vojta Koritenský a koupelna pro chlapa",
    "subtitle": "",
    "quote": "Realizace probíhala přesně podle plánu, dodání bylo na den přesné, čehož jsem se v dnešní době trošku bál. Kluci řemeslníci byli moc šikovní a výsledek je perfektní. Strašně jsem se těšil na sprcháč, takže si ho maximálně užívám.",
    "author": "Klient Vojta",
    "src": "/recenze/vojta-koritensky-a-koupelna-pro-chlapa.webp",
    "width": 1200,
    "height": 800,
    "blurDataURL": "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoQAAsAA4BaJaQAAhvXNlBQAAD+6dwKZLd2GNa0bOepeoF/olvWsOWQbYHV7Kd6G9ttF5eaDgA="
  },
  {
    "id": "odvazna-koupelna-s-metalickou-dlazbou",
    "title": "Odvážná koupelna s metalickou dlažbou",
    "subtitle": "",
    "quote": "Jsem moc rád, že realita je ještě mnohem zajímavější, než když si člověk vybírá ve studiu. Designově je to o krok dál než standard, forma, materiál, barvy, což se mně osobně moc líbí. Klíčem k úspěchu je skloubit všechny detaily dohromady, což se tady povedlo na jedničku.",
    "author": "Stavař z Dříteče",
    "src": "/recenze/odvazna-koupelna-s-metalickou-dlazbou.webp",
    "width": 1200,
    "height": 729,
    "blurDataURL": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADwAQCdASoQAAoAA4BaJZwAAlmOw2EbC+AA/vA7PEhvhdSWKLpA6K10KsV1u0q6ptU8KaIsUbYD/5nu3wtD/feGOK2X9pfBmTKCo/RrfIBBWOMJgAA="
  },
  {
    "id": "koupelna-influenceru-lubose-jana",
    "title": "Koupelna influencerů Luboše & Jana",
    "subtitle": "",
    "quote": "Rozhodující byla pro nás návštěva showroomu v Praze. Byli jsme strašně spokojení s tím lidským přístupem, se kterým jsme se tam potkali. Sám Matouš nám poradil a přivedl na nějaké řešení, které by nás vůbec nenapadlo.",
    "author": "Luboš Kulíšek & Jan Hrdlička",
    "src": "/recenze/koupelna-influenceru-lubose-jana.webp",
    "width": 1200,
    "height": 800,
    "blurDataURL": "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAAAQAgCdASoQAAsAA4BaJYgCdAC9FHbty+eAAOJ+srvz/L5x4wZFnBm0Cnx8Bq/O4dJCjCDEicH+0ciHuumoDg6JhgMlqYKq0kLhObLAJuuiVkBeWrDCIDiBNKsAAA=="
  },
  {
    "id": "mala-koupelna-s-vanou",
    "title": "Malá koupelna s vanou",
    "subtitle": "",
    "quote": "Skutečně smekám nad tím, jakého servisu se mi dostalo - nahlásit odpoledne závadu a za pár hodin tam mít už technika, který vše opraví ještě ten stejný den, a to i za cenu práce až do večera - to je opravdu služba 21. století :-)",
    "author": "Klientka Jana",
    "src": "/recenze/mala-koupelna-s-vanou.webp",
    "width": 1200,
    "height": 800,
    "blurDataURL": "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAADwAQCdASoQAAsAA4BaJQBOgBZ77WOUuAAA/uXcC+F5NATwKwq/Z9aZpUr7xGXVBuVLk3H7Z3gC0+N3XX78S9Hy/qWkBYJAoYt6+pc4EMgHNoAA"
  },
  {
    "id": "elegantni-tmava-koupelna",
    "title": "Elegantní tmavá koupelna",
    "subtitle": "",
    "quote": "Nádherný návrh během jednoho odpoledne, nabídka hned další den a termín realizace jsem měla za týden od návrhu! Samotná realizace proběhla během 9 dní.",
    "author": "Klientka Kateřina",
    "src": "/recenze/elegantni-tmava-koupelna.webp",
    "width": 1200,
    "height": 800,
    "blurDataURL": "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAADQAQCdASoQAAsAA4BaJZQAAb+TTxumAADOPJb+E56VE9y9shsCzeTPscprMTBmAbCqS7IOZB7/GA9EZ9eLgLjwv/6W+czOK2+5KTY6/BgkTaLjOBAAAA=="
  },
  {
    "id": "tmava-koupelna-s-cernou-sanitou",
    "title": "Tmavá koupelna s černou sanitou",
    "subtitle": "",
    "quote": "Původně jsme se šli jenom podívat. Nakonec to dopadlo tak, že jsme si vybrali a už nechtěli navštěvovat žádné další studio, protože jsme věděli, že tady to je to pravé.",
    "author": "Klientka",
    "src": "/recenze/tmava-koupelna-s-cernou-sanitou.webp",
    "width": 1200,
    "height": 800,
    "blurDataURL": "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAAAwAgCdASoQAAsAA4BaJZQCdADjcGOzIzeEAAD+T0VGfHKfXLygDqkWW8cwwyknBXFCLlerEOcaQqZsGhRL6xNf3F1DMbgVIeIKrm2MbExiAAAA"
  },
  {
    "id": "koupelna-martiny-partlove",
    "title": "Koupelna Martiny Pártlové",
    "subtitle": "",
    "quote": "Je to nejkrásnější místnost v domě. Když ukazuju statek mým známým, tak sem přicházím s velkou pýchou.",
    "author": "Martina Pártlová",
    "src": "/recenze/koupelna-martiny-partlove.webp",
    "width": 1200,
    "height": 800,
    "blurDataURL": "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAADQAQCdASoQAAsAA4BaJZACdADE9CiiAAD88Ex5FtkU3wn2yy8V/3Yt8yvg8uwpvTej0FvKneo4YpWPu9kgujxk9nJewdqx3y5xcjBMm1ExpLCt4tQUShNgAAA="
  },
  {
    "id": "dve-koupelny-v-rodinnem-dome",
    "title": "Dvě koupelny v rodinném domě",
    "subtitle": "",
    "quote": "Jsem moc rád, že realita je ještě mnohem zajímavější, než když si člověk vybírá ve studiu. Klíčem k úspěchu je skloubit všechny detaily dohromady, což se tady povedlo na jedničku.",
    "author": "Stavař z Dříteče",
    "src": "/recenze/dve-koupelny-v-rodinnem-dome.webp",
    "width": 1200,
    "height": 800,
    "blurDataURL": "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoQAAsAA4BaJYwCdADyfUoAAP7tch5X4r/AAff9D3uUgIyWmVA6Dgujijr5AS4AAAA="
  },
  {
    "id": "svetla-koupelna-s-drevenymi-prvky",
    "title": "Světlá koupelna s dřevěnými prvky",
    "subtitle": "",
    "quote": "Dovolím si podělit se o zkušenost se službami Koupelny Syrový. Přístup pana Syrového a jeho týmu je skutečně profesionální! Vše proběhlo dle dohody a v termínu. Teď s radostí a klidným srdcem doporučuji. Z koupelen jsme nadšeni. Děkujeme!",
    "author": "Klient Antonín",
    "src": "/recenze/svetla-koupelna-s-drevenymi-prvky.webp",
    "width": 1200,
    "height": 800,
    "blurDataURL": "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAAAQAgCdASoQAAsAA4BaJYgCdADG8dcl4HAAAP7eF/jSYbtPkMBIYHIy9G6PZF5e2aqtSkuW9dswIP5TSWIab9kzHkGaqYEdZ8tGW41JXvfNFB9KEb/fgAAA"
  },
  {
    "id": "koupelna-zachranare-marka-dvoraka",
    "title": "Koupelna záchranáře Marka Dvořáka",
    "subtitle": "",
    "quote": "S Matoušem jsme se potkali, slovo dalo slovo, pak jsem ho s nadsázkou nechal 14 dní bydlet v našem domě a výsledkem je tohle. Každý ať posoudí sám, ale za mě je to prostě nádhera.",
    "author": "Marek Dvořák",
    "src": "/recenze/koupelna-zachranare-marka-dvoraka.webp",
    "width": 1200,
    "height": 798,
    "blurDataURL": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADwAQCdASoQAAsAA4BaJQBOgCKI3SBNUYAA+TMjLD9293zYSXUyhlu5+/KVqtlPgHjIEoZtvIxSxabd1g4ie6Yxv6PLuhVoO89WMA+Zx/pOMhhgAAA="
  },
  {
    "id": "dve-koupelny-v-rodinnem-dome-2",
    "title": "Dvě koupelny v rodinném domě",
    "subtitle": "",
    "quote": "Až v Koupelnách Syrový jsme našli to, co jsme do našeho nového domu opravdu chtěli a hledali. Jsme nadšeni a soudě dle výrazů našich návštěv nejsme jediní. Děkujeme a doporučujeme.",
    "author": "Klientka z Měchenice",
    "src": "/recenze/dve-koupelny-v-rodinnem-dome-2.webp",
    "width": 1200,
    "height": 800,
    "blurDataURL": "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAADwAQCdASoQAAsAA4BaJYwCdADcOzn9CwAA/ccHuZXzlsKN6BR7j1/ndWannJ+qKAB3tWonPg78GFGiaB9qZagfSsKhF2iTUXqmDJgOnJ/Z+maapsa0RkweoAAAAA=="
  },
  {
    "id": "luxusni-mramorova-koupelna",
    "title": "Luxusní mramorová koupelna",
    "subtitle": "",
    "quote": "Koupelny jsme opět vybrali u Koupelen Syrový a byla to už naše druhá spolupráce. Stejně jako poprvé vše proběhlo na jedničku. Byly nám navrženy dvě krásné koupelny přesně podle našich představ. Se spoluprací jsme maximálně spokojeni a Koupelny Syrový můžeme s klidným svědomím doporučit.",
    "author": "Klient Daniel",
    "src": "/recenze/luxusni-mramorova-koupelna.webp",
    "width": 1200,
    "height": 800,
    "blurDataURL": "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoQAAsAA4BaJZwAAvybUnR9YAD+r474Q7yk6bkcP0i5J3We7vp0/Yy4Pc3cPNVXIp2iSEAA"
  },
  {
    "id": "moderni-koupelna-s-obklady-v-imitaci-betonu",
    "title": "Moderní koupelna s obklady v imitaci betonu",
    "subtitle": "",
    "quote": "Jsem velmi spokojená zákaznice, v koupelnovém studiu v Dobřejovicích jsem realizovala již dvě koupelny a opět jsem se přesvědčila, že jsem si vybrala správně. bě výsledné koupelny předčily má očekávání a s čistým svědomím mohu toto studio i pana Kopřivu doporučit každému, kdo hledá kvalitní a promyšlené řešení.",
    "author": "Klientka Hana",
    "src": "/recenze/moderni-koupelna-s-obklady-v-imitaci-betonu.webp",
    "width": 1200,
    "height": 800,
    "blurDataURL": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAAAQAgCdASoQAAsAA4BaJQBOgCLGw+SA4P8gAP40ZPu2SCwbSN3qkmtT4ZLE6zi/PNLmwC+/1QzVO88A/7NZbgPPBkZnwUHstc+wRdQg6KED+Q5AAAA="
  },
  {
    "id": "svetla-koupelna-s-mramorovymi-prvky",
    "title": "Světlá koupelna s mramorovými prvky",
    "subtitle": "",
    "quote": "Ráda bych poděkovala celému týmu koupelnového studia Syrový. Jsem opravdu ráda za své rozhodnutí realizovat rekonstrukci právě s vámi a děkuji za úžasnou spolupráci, která vedla k výsledku, se kterým jsem velmi spokojená.",
    "author": "Klientka Jindra",
    "src": "/recenze/svetla-koupelna-s-mramorovymi-prvky.webp",
    "width": 1200,
    "height": 800,
    "blurDataURL": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAACwAQCdASoQAAsAA4BaJQBOgBTmtOoAAP7cmfGgcnnS2VMSl66LKM4N/lcDmJXLURjZ0NzjogZ+I5uUmqCYRk0ZzCY3dvX9xUYXAI+lUxUuPjPYAAA="
  },
  {
    "id": "luxusni-koupelna-s-vanou",
    "title": "Luxusní koupelna s vanou",
    "subtitle": "",
    "quote": "Rád bych touto cestou poděkoval firmě Koupelny Syrový, konkrétně majiteli Matouši Syrovému, za naprosto profesionální přístup při řešení reklamace baterie. Velmi oceňuji vstřícnou komunikaci, férové jednání a snahu vše vyřešit k naší spokojenosti. Takový přístup dnes rozhodně není samozřejmostí. Mohu jen doporučit.",
    "author": "Klient Tomáš",
    "src": "/recenze/luxusni-koupelna-s-vanou.webp",
    "width": 1200,
    "height": 800,
    "blurDataURL": "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAAAQAgCdASoQAAsAA4BaJQAB8S31kv52fytAAP7Soo2YqHLhUhckPIn8A+aia8ffBF43LrMB9WB4T9EvDamYw1AjMxXA4RwRe3njsvytbsQhJ27umnsqkIAA"
  },
  {
    "id": "moderni-koupelna-se-sprchovym-koutem",
    "title": "Moderní koupelna se sprchovým koutem",
    "subtitle": "",
    "quote": "Tým Koupelen Syrový funguje na jedničku ve všech ohledech. Objednali jsme si koupelnu na klíč a vše proběhlo s nadstandardním přístupem všech, kteří se na realizaci podíleli. Ať jsem u Syrových mluvila s kýmkoliv, vždy šlo o příjemný a profesionální přístup – a to včetně řemeslníků, kteří se postarali o samotnou realizaci, kterou odvedli naprosto precizně.",
    "author": "Klientka Petra",
    "src": "/recenze/moderni-koupelna-se-sprchovym-koutem.webp",
    "width": 1200,
    "height": 800,
    "blurDataURL": "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAADwAQCdASoQAAsAA4BaJaACdAD71DRwAYAA/tGr+Ih7jCIpFUcT4IZV5K/7BunvU+eUzf1rS/3CUHQHAZ7nvCgjMm8C0JggrkNnriFH+wDKor2QL0EAwAAA"
  }
];

export const recenzeSPorovnanim = recenze.filter((item) => item.before);
