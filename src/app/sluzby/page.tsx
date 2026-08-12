import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, PageHero, ProcessSteps, Section, SectionHeading } from "@/components/ui";
import { processSteps, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Naše služby",
  description:
    "Rekonstrukce bytů a domů, stavby rodinných domů, koupelny na klíč a výstavba na splátky. Kompletní realizace pod jednou střechou.",
};

export default function SluzbyPage() {
  return (
    <>
      <PageHero
        eyebrow="Naše služby"
        title="Kompletní realizace pod jednou střechou"
        lead="Ať už předěláváte jednu koupelnu, celý byt nebo stavíte dům od základů, jednáte pořád s jedním člověkem a dostanete jednu cenovou nabídku."
      />

      <Section>
        <div className="space-y-6">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/sluzby/${service.slug}`}
              className="group grid items-stretch gap-0 border border-line transition-colors hover:border-brand md:grid-cols-2"
            >
              <div
                className={`relative aspect-[16/10] overflow-hidden bg-smoke md:aspect-auto md:min-h-[320px] ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">
                  {service.tagline}
                </p>
                <h2 className="mt-3 text-2xl sm:text-3xl">{service.title}</h2>
                <p className="mt-4 leading-relaxed">{service.lead}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-brand">
                  Zjistit více
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading
          eyebrow="Jak to probíhá"
          title="Postup je stejný u koupelny i u celého domu"
          lead="Liší se jen rozsah a délka. Kroky, kterými projdete, jsou vždycky tyhle."
        />
        <ProcessSteps steps={processSteps} />
      </Section>

      <CtaBand />
    </>
  );
}
