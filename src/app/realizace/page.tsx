import type { Metadata } from "next";
import Image from "next/image";
import { RealizaceCarousel } from "@/components/RealizaceCarousel";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/ui";
import { realizace } from "@/lib/realizace";

export const metadata: Metadata = {
  title: "Realizace",
  description:
    "Fotografie z dokončených koupelen Syrový Development. Prohlédněte si, jak vypadá naše práce v detailu.",
};

export default function RealizacePage() {
  return (
    <>
      <PageHero
        eyebrow="Naše práce"
        title="Realizace, na kterých stojí naše jméno"
        lead="Detail, na kterém záleží. Prohlédněte si dokončené koupelny. Stejnou preciznost přenášíme do celých bytů a domů."
        image={
          <>
            <Image src="/realizace/dsc01753.webp" alt="" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20" />
          </>
        }
      />

      <Section>
        <SectionHeading
          align="left"
          eyebrow="Carousel"
          title="Projděte si realizace jednu po druhé"
        />
        <div className="mt-12">
          <RealizaceCarousel items={realizace} />
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading
          align="left"
          eyebrow="Galerie"
          title="Všechny fotografie"
          lead="Tmavé velkoformátové obklady, dubový nábytek na míru, podsvícená zrcadla a černá sanita. Rukopis, který poznáte."
        />

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>figure]:mb-4">
          {realizace.map((item, index) => (
            <figure key={item.id} className="break-inside-avoid overflow-hidden bg-smoke">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL={item.blurDataURL}
                loading={index < 3 ? "eager" : "lazy"}
                className="h-auto w-full transition-transform duration-500 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Chcete něco podobného?"
        text="Přijďte se poradit do některého z našich showroomů. Ukážeme vám materiály naživo a řekneme, co je ve vašem prostoru reálné."
      />
    </>
  );
}
