import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, Milniky, PageHero, Section, SectionHeading, TeamGrid } from "@/components/ui";
import { milniky, tym } from "@/lib/content";

export const metadata: Metadata = {
  title: "O nás",
  description:
    "Syrový Development je stavební divize rodinné značky Syrový. Navazujeme na zkušenost ze stovek realizovaných koupelen a přenášíme ji do celých bytů a domů.",
};

export default function ONasPage() {
  return (
    <>
      <PageHero
        eyebrow="O nás"
        title="Jsme rodina Syrových"
        lead="Koupelnám se naše rodina věnuje už 30 let. Syrový Development je pokračování téhle cesty, jen už ne jen v koupelně, ale v celém bytě nebo domě."
        image={
          <>
            <Image src="/realizace/dsc01599.webp" alt="" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20" />
          </>
        }
      />

      {/* Proč jsme vznikli */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading align="left" title="Proč jsme vznikli" />
            <div className="mt-6 space-y-5 text-lg leading-relaxed">
              <p>
                Zákazníci se nás roky ptali na to samé. Vybrali si u nás koupelnu, byli spokojení, a
                pak se zeptali, jestli bychom jim neudělali i zbytek bytu. Nebo jestli neumíme
                postavit dům.
              </p>
              <p>
                Dlouho jsme odpovídali, že děláme koupelny. Až došlo na to, že nedává smysl posílat
                člověka, kterému jsme právě odvedli poctivou práci, hledat si někoho jiného na
                obývák a kuchyň.
              </p>
              <p>
                Syrový Development je odpověď na tuhle otázku. Kompletní realizace bytů a domů se
                stejným přístupem, se stejnými lidmi a se stejnými materiály, jaké znáte z našich
                showroomů.
              </p>
              <p>
                Zakládáme si na kvalitě, smyslu pro detail a individuálním přístupu ke každému
                zákazníkovi. Propojujeme design s funkčností, protože chceme, aby vás bydlení od nás
                bavilo dnes i za deset let.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/projekty" className="btn-primary">
                Prohlédnout projekty
              </Link>
              <Link href="/kontakt" className="btn-outline">
                Sjednat schůzku
              </Link>
            </div>
          </div>

          <div className="relative aspect-[3/4] overflow-hidden bg-smoke">
            <Image
              src="/realizace/dsc01575.webp"
              alt="Černá umyvadlová mísa na dubové desce s vysokou stojánkovou baterií"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Milníky */}
      <Section tone="sand">
        <SectionHeading
          align="left"
          eyebrow="Naše cesta"
          title="Koupelnami žijeme už generace"
          lead="Rodinná značka Syrový se rozrůstá od roku 2019. Tady jsou milníky, ze kterých Syrový Development vychází."
        />
        <Milniky items={milniky} />
      </Section>

      {/* Tým */}
      <Section>
        <SectionHeading
          align="left"
          eyebrow="Kdo za tím stojí"
          title="Jsme rodina, jsme tým"
          lead="Tradici rodinné firmy reprezentuje každý náš kolega. Základem naší značky vždy bude upřímný rodinný přístup."
        />
        <TeamGrid items={tym} />
      </Section>

      <CtaBand />
    </>
  );
}
