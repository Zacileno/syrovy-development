import Image from "next/image";
import Link from "next/link";
import { RealizaceCarousel } from "@/components/RealizaceCarousel";
import { RecenzeCarousel } from "@/components/RecenzeCarousel";
import { CtaBand, FeatureGrid, Faq, ProcessSteps, Section, SectionHeading } from "@/components/ui";
import { faq, processSteps, services, whyUs } from "@/lib/content";
import { realizace } from "@/lib/realizace";
import { recenze } from "@/lib/recenze";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[600px] items-center overflow-hidden lg:min-h-[720px]">
        <Image
          src="/realizace/dsc01173.webp"
          alt="Koupelna z realizace Syrový Development"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/25" />

        <div className="container-content py-24">
          <h1 className="max-w-3xl text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Jeden partner od návrhu po hotovou realizaci
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Kompletní rekonstrukce bytů, stavby rodinných domů a koupelny na klíč. Vlastní realizační
            tým, materiály z našich showroomů a jeden člověk, se kterým vyřídíte úplně všechno.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/kontakt" className="btn-primary">
              Sjednat schůzku
            </Link>
            <Link href="/realizace" className="btn-ghost-light">
              Prohlédnout realizace
            </Link>
          </div>
        </div>
      </section>

      {/* Služby */}
      <Section>
        <SectionHeading
          eyebrow="Co pro vás uděláme"
          title="Od koupelny po celý dům"
          lead="Na koupelnách jsme se naučili to nejtěžší, sladit deset řemesel na několika metrech čtverečních. Teď to samé děláme v celých bytech a domech."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/sluzby/${service.slug}`}
              className="group relative isolate flex min-h-[380px] flex-col justify-end overflow-hidden bg-ink p-8"
            >
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="-z-10 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Spodní polovina je tmavší, aby byl text čitelný i přes světlejší část fotky */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/95 from-35% via-ink/60 via-65% to-transparent" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">
                {service.tagline}
              </p>
              <h3 className="mt-3 text-2xl text-white sm:text-3xl">{service.title}</h3>
              <p className="mt-3 max-w-md leading-relaxed text-white/75">{service.lead}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-white">
                Zjistit více
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Realizace */}
      <Section tone="mist">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Naše práce"
            title="Realizace, na kterých stojí naše jméno"
            lead="Fotografie z dokončených koupelen. Stejná preciznost, se kterou přistupujeme k celým bytům a domům."
          />
          <Link href="/realizace" className="btn-outline shrink-0">
            Všechny realizace
          </Link>
        </div>

        <div className="mt-14">
          <RealizaceCarousel items={realizace} />
        </div>
      </Section>

      {/* Jak to probíhá */}
      <Section>
        <SectionHeading
          eyebrow="Jak to probíhá"
          title="Šest kroků a máte hotovo"
          lead="Celý proces jsme si odladili na stovkách koupelen. Vy z něj poznáte hlavně to, že se nemusíte o nic starat."
        />
        <ProcessSteps steps={processSteps} />
      </Section>

      {/* Proč my */}
      <Section tone="sand">
        <SectionHeading
          align="left"
          eyebrow="Proč právě my"
          title="Nejsme nová firma, jsme nová divize"
          lead="Syrový Development je nový projekt. Nestojí ale na zelené louce. Stojí na letech zkušeností z koupelen, na vlastních showroomech a na lidech, kteří spolu už roky pracují."
        />
        <FeatureGrid items={whyUs} columns={4} />
      </Section>

      {/* Synergie s Koupelnami Syrový */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden bg-smoke">
            <Image
              src="/realizace/dsc01675.webp"
              alt="Sprchový kout s kruhovým podsvíceným zrcadlem a dubovou skříňkou"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Zkušenost z koupelen"
              title="Nejtěžší místnost v bytě umíme nazpaměť"
              lead="V koupelně se na pár metrech čtverečních potká voda, elektřina, obklad na milimetr a nábytek na míru. Když tohle zvládnete odvést dobře, zvládnete dobře odvést cokoliv."
            />
            <p className="mt-6 leading-relaxed">
              Právě proto jde Syrový Development touhle cestou. Stejný přístup k detailu, stejní
              lidé a stejné materiály, jen už ne jen v koupelně, ale v celém bytě nebo domě.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/sluzby/koupelny-na-klic" className="btn-primary">
                Koupelny na klíč
              </Link>
              <Link href="/o-nas" className="btn-outline">
                Poznejte nás blíž
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Recenze */}
      <Section tone="mist">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Co se o nás povídá"
            title="Naše práce mluví za nás"
            lead="Hodnocení 4,9 z více než 1500 recenzí. Tady je několik z nich."
          />
          <Link href="/recenze" className="btn-outline shrink-0">
            Všechny recenze
          </Link>
        </div>
        <div className="mt-14">
          <RecenzeCarousel items={recenze.slice(0, 9)} />
        </div>
      </Section>

      {/* Časté dotazy */}
      <Section>
        <SectionHeading
          align="left"
          eyebrow="Časté dotazy"
          title="Na co se nás ptáte nejčastěji"
        />
        <Faq items={faq} />
      </Section>

      <CtaBand />
    </>
  );
}
