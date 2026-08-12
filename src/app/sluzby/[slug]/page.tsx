import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RealizaceCarousel } from "@/components/RealizaceCarousel";
import { CtaBand, Faq, FeatureGrid, PageHero, ProcessSteps, Section, SectionHeading } from "@/components/ui";
import { faq, getService, processSteps, services } from "@/lib/content";
import { realizace } from "@/lib/realizace";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/sluzby/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.lead,
    openGraph: { title: service.title, description: service.lead, images: [service.image] },
  };
}

export default async function ServicePage({ params }: PageProps<"/sluzby/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow={service.tagline}
        title={service.title}
        lead={service.lead}
        image={
          <>
            <Image
              src={service.image}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20" />
          </>
        }
      />

      {/* Perex + rozsah prací */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading align="left" title="Co to pro vás znamená" />
            <p className="mt-6 text-lg leading-relaxed">{service.perex}</p>
            <div className="mt-8">
              <Link href="/kontakt" className="btn-primary">
                Sjednat schůzku
              </Link>
            </div>
          </div>

          <div className="bg-mist p-8 lg:p-10">
            <h3 className="text-xl">Co je součástí</h3>
            <ul className="mt-6 space-y-4">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed">
                  <svg viewBox="0 0 20 20" aria-hidden className="mt-1 h-4 w-4 shrink-0 fill-brand">
                    <path d="M7.6 14.2 3.4 10l1.4-1.4 2.8 2.8 7-7L16 5.8z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Výhody */}
      <Section tone="sand">
        <SectionHeading align="left" eyebrow="Proč to dělat s námi" title="Tři věci, které oceníte" />
        <FeatureGrid items={service.benefits} columns={3} />
      </Section>

      {/* Postup */}
      <Section>
        <SectionHeading
          eyebrow="Jak to probíhá"
          title="Od první schůzky po předání"
          lead="Přesné trvání jednotlivých kroků se liší podle rozsahu, jejich pořadí zůstává stejné."
        />
        <ProcessSteps steps={processSteps} />
      </Section>

      {/* Realizace */}
      <Section tone="mist">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Naše práce"
            title="Podívejte se, jak to děláme"
            lead="Fotografie z dokončených koupelen. Stejný přístup k detailu přenášíme do celých bytů a domů."
          />
          <Link href="/realizace" className="btn-outline shrink-0">
            Všechny realizace
          </Link>
        </div>
        <div className="mt-14">
          <RealizaceCarousel items={realizace} />
        </div>
      </Section>

      {/* Časté dotazy */}
      <Section>
        <SectionHeading align="left" eyebrow="Časté dotazy" title="Na co se nás ptáte nejčastěji" />
        <Faq items={faq} />
      </Section>

      {/* Další služby */}
      <Section tone="sand">
        <SectionHeading align="left" title="Umíme toho víc" />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {otherServices.map((item) => (
            <Link
              key={item.slug}
              href={`/sluzby/${item.slug}`}
              className="group flex h-full flex-col border border-line bg-white p-6 transition-colors hover:border-brand"
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">
                {item.tagline}
              </p>
              <h3 className="mt-3 text-lg">{item.title}</h3>
              <span className="mt-auto inline-flex items-center gap-2 pt-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink">
                Zjistit více
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
