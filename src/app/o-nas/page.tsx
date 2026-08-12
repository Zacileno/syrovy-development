import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, FeatureGrid, PageHero, Section, SectionHeading, ShowroomCard } from "@/components/ui";
import { whyUs } from "@/lib/content";
import { showrooms } from "@/lib/site";

export const metadata: Metadata = {
  title: "O nás",
  description:
    "Syrový Development je stavební divize Syrový Group. Navazujeme na zkušenost ze stovek realizovaných koupelen a přenášíme ji do celých bytů a domů.",
};

export default function ONasPage() {
  return (
    <>
      <PageHero
        eyebrow="O nás"
        title="Nový projekt, který nestojí na zelené louce"
        lead="Syrový Development je stavební divize Syrový Group. Je to nový projekt, navazuje ale na roky práce v koupelnách, na vlastní showroomy a na lidi, kteří spolu už dávno pracují."
        image={
          <>
            <Image src="/realizace/dsc01599.webp" alt="" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20" />
          </>
        }
      />

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
                Dlouho jsme odpovídali, že děláme koupelny. Až došlo na to, že vlastně nedělá smysl
                posílat člověka, kterému jsme právě odvedli poctivou práci, hledat si někoho jiného
                na obývák a kuchyň.
              </p>
              <p>
                Syrový Development je odpověď na tuhle otázku. Kompletní realizace bytů a domů se
                stejným přístupem, se stejnými lidmi a se stejnými materiály, jaké znáte z našich
                showroomů.
              </p>
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

      {/* Zkušenost z koupelen */}
      <Section tone="sand">
        <SectionHeading
          align="left"
          eyebrow="Odkud čerpáme"
          title="Koupelna je zkouška, na které se pozná řemeslo"
          lead="Na několika metrech čtverečních se potká voda, elektřina, obklad řezaný na milimetr a nábytek na míru. Není kam schovat nepřesnost."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed">
              Stovky hotových koupelen nás naučily tři věci, které se v celém bytě hodí ještě víc.
              Že se musí plánovat dopředu, protože přepracovat hotové rozvody stojí desetkrát tolik.
              Že si zákazník potřebuje výsledek nejdřív prohlédnout, ne si ho představovat. A že
              termín, který dáte, musí platit, protože člověk, který nemá kde se umýt, nechce
              slyšet vysvětlení.
            </p>
            <p className="mt-5 text-lg leading-relaxed">
              Tohle všechno jde beze změny přenést na kuchyň, obývák i na celý dům. Jen v mnohem
              větším měřítku.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/realizace" className="btn-primary">
                Prohlédnout realizace
              </Link>
              <Link href="/sluzby/koupelny-na-klic" className="btn-outline">
                Koupelny na klíč
              </Link>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden bg-smoke lg:aspect-auto">
            <Image
              src="/realizace/dsc01701.webp"
              alt="Zapuštěná podsvícená nika ve sprchovém koutě s černou podomítkovou baterií"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Na čem stojíme */}
      <Section>
        <SectionHeading align="left" eyebrow="Na čem stojíme" title="Čtyři věci, které máme hotové od prvního dne" />
        <FeatureGrid items={whyUs} columns={4} />
      </Section>

      {/* Showroomy */}
      <Section tone="mist">
        <SectionHeading
          align="left"
          eyebrow="Kde nás najdete"
          title="Čtyři showroomy, ve kterých si všechno osaháte"
          lead="Realizujeme po celé České republice. Vybrat si materiály můžete osobně v kterémkoliv z našich studií."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {showrooms.map((showroom) => (
            <ShowroomCard key={showroom.city} showroom={showroom} showEyebrow showSamples />
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
