import Link from "next/link";
import type { ReactNode } from "react";

type Tone = "white" | "sand" | "mist" | "ink";

const toneClasses: Record<Tone, string> = {
  white: "bg-white",
  sand: "bg-sand",
  mist: "bg-mist",
  ink: "bg-ink text-white/70",
};

/** Sekce s jednotným svislým rytmem a barvou pozadí. */
export function Section({
  children,
  tone = "white",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`${toneClasses[tone]} py-20 lg:py-28 ${className}`}>
      <div className="container-content">{children}</div>
    </section>
  );
}

/** Nadpis sekce s volitelným nadtitulkem a perexem. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  onDark = false,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
  onDark?: boolean;
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`${alignment} max-w-3xl`}>
      {eyebrow && (
        <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
      )}
      <h2 className={`mt-4 text-3xl leading-tight sm:text-4xl ${onDark ? "text-white" : ""}`}>
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 text-lg leading-relaxed ${onDark ? "text-white/70" : "text-body"}`}>
          {lead}
        </p>
      )}
    </div>
  );
}

/** Zelený pruh s výzvou k akci, který uzavírá stránky. */
export function CtaBand({
  title = "Pojďme probrat váš projekt",
  text = "Přijďte se poradit do některého z našich showroomů nebo si sjednejte schůzku online. Rádi vám nezávazně řekneme, co je ve vašem bytě či domě reálné a kolik to bude stát.",
  buttonLabel = "Sjednat schůzku",
}: {
  title?: string;
  text?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="bg-brand py-16 lg:py-20">
      <div className="container-content flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/85">{text}</p>
        </div>
        <Link
          href="/kontakt"
          className="btn shrink-0 bg-white text-ink hover:bg-ink hover:text-white"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}

/** Očíslované kroky procesu — „Jak to probíhá“. */
export function ProcessSteps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => (
        <li key={step.title} className="relative border-t border-line pt-6">
          <span className="absolute -top-px left-0 h-px w-12 bg-brand" />
          <span className="text-[13px] font-semibold tracking-[0.2em] text-brand">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 text-xl">{step.title}</h3>
          <p className="mt-3 leading-relaxed">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}

/** Mřížka s benefity. */
export function FeatureGrid({
  items,
  columns = 3,
}: {
  items: { title: string; text: string }[];
  columns?: 2 | 3 | 4;
}) {
  const cols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[columns];
  return (
    <div className={`mt-14 grid gap-8 ${cols}`}>
      {items.map((item) => (
        <div key={item.title} className="border-l-2 border-brand pl-6">
          <h3 className="text-xl">{item.title}</h3>
          <p className="mt-3 leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

/** Rozbalovací seznam častých dotazů — nativní details, bez JavaScriptu. */
export function Faq({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="mt-12 divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-ink marker:hidden">
            {item.question}
            <span
              aria-hidden
              className="relative h-4 w-4 shrink-0 before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-4 before:-translate-y-1/2 before:bg-brand after:absolute after:left-1/2 after:top-0 after:h-4 after:w-0.5 after:-translate-x-1/2 after:bg-brand after:transition-transform group-open:after:scale-y-0"
            />
          </summary>
          <p className="mt-4 max-w-3xl leading-relaxed">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

/**
 * Karta showroomu.
 *
 * Adresa i otevírací doba mají rezervované dva řádky a spodní blok se drží
 * u dna karty, takže karty zůstanou zarovnané i u kratší adresy (Brno).
 */
export function ShowroomCard({
  showroom,
  showSamples = false,
  showEyebrow = false,
}: {
  showroom: {
    city: string;
    address: string;
    phone: string;
    phoneHref: string;
    hours: string;
    samples: number;
  };
  showSamples?: boolean;
  showEyebrow?: boolean;
}) {
  return (
    <div className="flex h-full flex-col border border-line bg-white p-6">
      {showEyebrow && (
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">Showroom</p>
      )}
      <h3 className={`text-xl ${showEyebrow ? "mt-2" : ""}`}>{showroom.city}</h3>
      <p className="mt-3 min-h-[3.05rem] text-[15px] leading-relaxed">{showroom.address}</p>
      <p className="mt-3 min-h-[2.85rem] text-[14px] leading-relaxed">{showroom.hours}</p>
      <a
        href={showroom.phoneHref}
        className="mt-4 inline-block font-semibold text-ink transition-colors hover:text-brand"
      >
        {showroom.phone}
      </a>
      {showSamples && (
        <p className="mt-auto border-t border-line pt-4 text-[14px]">
          <strong className="text-ink">{showroom.samples}</strong> vzorových koupelen
        </p>
      )}
    </div>
  );
}

/** Hero pruh pro vnitřní stránky. */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  image?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      {image}
      <div className="container-content relative py-20 lg:py-28">
        {eyebrow && (
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
        )}
        <h1 className="mt-4 max-w-4xl text-4xl leading-[1.1] text-white sm:text-5xl">{title}</h1>
        {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{lead}</p>}
      </div>
    </section>
  );
}
