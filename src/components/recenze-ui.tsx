import Image from "next/image";
import type { Recenze } from "@/lib/recenze";

/** Velké uvozovky nad textem recenze. */
export function QuoteMark({ onDark = false }: { onDark?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 18"
      aria-hidden
      className={`h-5 w-7 ${onDark ? "fill-white" : "fill-brand"}`}
    >
      <path d="M0 18V9.6C0 4.3 3.1.6 8.4 0l.9 2.9C6.6 3.6 5 5.5 5 8h3.6v10H0Zm14.4 0V9.6c0-5.3 3.1-9 8.4-9.6l.9 2.9C21 3.6 19.4 5.5 19.4 8H23v10h-8.6Z" />
    </svg>
  );
}

/** Štítek „Ověřená recenze“ ve zlaté, převzatý z Koupelen Syrový. */
export function OverenaRecenze() {
  return (
    <span className="inline-flex items-center gap-1.5 bg-[#F6EBD3] px-3 py-1.5 text-[12px] font-semibold text-[#7d6531]">
      <svg viewBox="0 0 20 20" aria-hidden className="h-3.5 w-3.5 fill-current">
        <path d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-1.2 13L4.9 10.1l1.4-1.4 2.5 2.5 5.4-5.4 1.4 1.4L8.8 14Z" />
      </svg>
      Ověřená recenze
    </span>
  );
}

/**
 * Delší recenze na úvodní stránce zabalíme, aby karty nebyly přes celou obrazovku.
 * Text se nijak nekrátí, jen se schová za rozbalovací pole.
 *
 * Kratší recenze necháme vypsané rovnou, u nich by odkaz „Číst celé“ nedával smysl.
 */
const DELKA_PRO_ZABALENI = 180;

function Citace({ quote, collapsible }: { quote: string; collapsible: boolean }) {
  if (!collapsible || quote.length <= DELKA_PRO_ZABALENI) {
    return <p className="mt-4 italic leading-relaxed">{quote}</p>;
  }

  return (
    <details className="group mt-4">
      <summary className="cursor-pointer list-none marker:hidden">
        {/* Bez `block` — ten by přebil display:-webkit-box, který line-clamp potřebuje. */}
        <span className="italic leading-relaxed line-clamp-4 group-open:line-clamp-none">
          {quote}
        </span>
        <span className="mt-3 inline-block text-[13px] font-semibold uppercase tracking-[0.12em] text-brand">
          <span className="group-open:hidden">Číst celé</span>
          <span className="hidden group-open:inline">Zabalit</span>
        </span>
      </summary>
    </details>
  );
}

/** Menší karta: fotka nahoře, pod ní text na šedém podkladu. */
export function RecenzeKartaMala({
  item,
  priority = false,
  collapsible = false,
}: {
  item: Recenze;
  priority?: boolean;
  collapsible?: boolean;
}) {
  return (
    <article className="flex h-full flex-col bg-smoke">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={item.src}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          placeholder="blur"
          blurDataURL={item.blurDataURL}
          loading={priority ? "eager" : "lazy"}
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <QuoteMark />
        <h3 className="mt-4 text-2xl leading-tight">{item.title}</h3>
        {item.subtitle && <p className="mt-2 font-semibold text-brand">{item.subtitle}</p>}
        <Citace quote={item.quote} collapsible={collapsible} />
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          <span className="font-semibold text-ink">{item.author}</span>
          <OverenaRecenze />
        </div>
      </div>
    </article>
  );
}

/** Velká karta: text vysázený přímo do fotky. */
export function RecenzeKartaVelka({ item, priority = false }: { item: Recenze; priority?: boolean }) {
  return (
    <article className="relative isolate flex h-full min-h-[420px] flex-col justify-end overflow-hidden p-8 lg:p-10">
      <Image
        src={item.src}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, 66vw"
        placeholder="blur"
        blurDataURL={item.blurDataURL}
        loading={priority ? "eager" : "lazy"}
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/95 from-30% via-ink/60 via-70% to-ink/10" />
      <QuoteMark onDark />
      <h3 className="mt-4 max-w-xl text-2xl leading-tight text-white sm:text-3xl">{item.title}</h3>
      {item.subtitle && <p className="mt-2 font-semibold text-brand">{item.subtitle}</p>}
      <p className="mt-4 max-w-xl italic leading-relaxed text-white/85">{item.quote}</p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="font-semibold text-white">{item.author}</span>
        <OverenaRecenze />
      </div>
    </article>
  );
}
