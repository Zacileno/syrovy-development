import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { PageHero, Section, SectionHeading } from "@/components/ui";
import { showrooms, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Domluvte si nezávaznou konzultaci k rekonstrukci bytu, stavbě domu nebo koupelně na klíč. Showroomy v Pardubicích, Hradci Králové, Brně a Praze.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Pojďme probrat váš projekt"
        lead="Napište nám, co plánujete. Ozveme se do dvou pracovních dnů a domluvíme si schůzku v showroomu nebo online."
        image={
          <>
            <Image src="/realizace/dsc01465.webp" alt="" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20" />
          </>
        }
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Nezávazná poptávka"
              title="Řekněte nám o svém projektu"
              lead="Čím víc nám napíšete, tím konkrétnější odpověď dostanete. Nic vás to nezavazuje."
            />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <aside className="bg-mist p-8 lg:p-10">
            <h2 className="text-xl">Radši zavoláte?</h2>
            <p className="mt-3 leading-relaxed">
              Zvedneme to a rovnou vám řekneme, jestli to, co plánujete, dává smysl.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={site.phoneHref}
                className="block text-2xl font-bold text-ink transition-colors hover:text-brand"
              >
                {site.phone}
              </a>
              <p className="text-[14px]">{site.openingHours}</p>
              <a
                href={`mailto:${site.email}`}
                className="block font-semibold text-ink transition-colors hover:text-brand"
              >
                {site.email}
              </a>
            </div>

            <div className="mt-8 border-t border-line pt-8">
              <h3 className="text-lg">Co se stane potom</h3>
              <ol className="mt-4 space-y-4 text-[15px] leading-relaxed">
                <li className="flex gap-3">
                  <span className="font-semibold text-brand">01</span>
                  Ozveme se vám a domluvíme si schůzku.
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-brand">02</span>
                  Přijedeme zaměřit prostor a projdeme si možnosti.
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-brand">03</span>
                  Dostanete návrh, rozpočet a harmonogram.
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </Section>

      {/*
        Showroomy jsou tu jako doplněk, ne jako hlavní sdělení. Klient si přál,
        aby na ně web příliš neupozorňoval, proto jen střídmý výpis bez karet.
      */}
      <Section tone="mist" id="showroomy">
        <h2 className="text-2xl">Komunikujete raději osobně?</h2>
        <p className="mt-3 max-w-2xl leading-relaxed">
          Stavte se u nás. Materiály, obklady i sanitu si osaháte naživo. Schůzku doporučujeme
          domluvit předem, ať se vám můžeme věnovat.
        </p>

        <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {showrooms.map((showroom) => (
            <li key={showroom.city} className="border-t border-line pt-5">
              <h3 className="text-[15px] font-semibold text-ink">{showroom.city}</h3>
              <p className="mt-2 text-[15px] leading-relaxed">{showroom.address}</p>
              <p className="mt-2 text-[14px] leading-relaxed">{showroom.hours}</p>
              <a
                href={showroom.phoneHref}
                className="mt-2 inline-block text-[15px] font-semibold text-ink transition-colors hover:text-brand"
              >
                {showroom.phone}
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
