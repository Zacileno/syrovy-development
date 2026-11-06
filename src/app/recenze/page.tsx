import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { RecenzeShowcase } from "@/components/RecenzeShowcase";
import { RecenzeKartaMala, RecenzeKartaVelka } from "@/components/recenze-ui";
import { CtaBand, Section } from "@/components/ui";
import { recenze, recenzeSPorovnanim } from "@/lib/recenze";

export const metadata: Metadata = pageMetadata({
  title: "Recenze a reference zákazníků",
  description:
    "Co o naší práci říkají zákazníci. Ověřené reference z realizovaných koupelen, rekonstrukcí a staveb, včetně fotografií před a po dokončení.",
  path: "/recenze",
});

/** Střídavé rozvržení: úzká karta a široká fotka, každý druhý řádek obráceně. */
function dvojice(items: typeof recenze) {
  const rows: (typeof recenze)[] = [];
  for (let index = 0; index < items.length; index += 2) {
    rows.push(items.slice(index, index + 2));
  }
  return rows;
}

export default function RecenzePage() {
  const zbytek = recenze.filter((item) => !item.before);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Recenze" }])} />
      {/* Úvod se dvěma sloupci */}
      <section className="container-content grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <h1 className="text-4xl leading-[1.1] sm:text-5xl">Recenze zákazníků</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed">
            Naše práce mluví za nás. Podívejte se na realizace u našich klientů.
          </p>

          <div className="mt-8 flex items-center gap-5">
            <span className="text-5xl font-bold text-ink">4,9</span>
            <div>
              <span aria-hidden className="block text-xl tracking-widest text-gold">
                ★★★★★
              </span>
              <span className="mt-1 block text-[15px] underline underline-offset-4">
                1500+ recenzí
              </span>
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden bg-smoke">
          <Image
            src="/realizace/dsc01173.webp"
            alt="Dvojumyvadlo s černými keramickými mísami a kruhovým podsvíceným zrcadlem"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Porovnání před a po */}
      {recenzeSPorovnanim.length > 0 && (
        <section className="pb-20 lg:pb-24">
          <div className="container-content">
            <h2 className="mx-auto max-w-2xl text-center text-3xl leading-tight sm:text-4xl">
              Podívejte se, jak se vaše koupelna může proměnit, a co o nás říkají klienti.
            </h2>
            <div className="mt-14">
              <RecenzeShowcase items={recenzeSPorovnanim} />
            </div>
          </div>
        </section>
      )}

      {/* Ostatní recenze ve střídavém rozvržení */}
      <Section tone="white" className="!pt-0">
        <div className="space-y-6">
          {dvojice(zbytek).map((row, rowIndex) => {
            const obracene = rowIndex % 2 === 1;
            const [prvni, druha] = row;

            return (
              <div
                key={prvni.id}
                className={`grid gap-6 lg:grid-cols-3 ${obracene ? "" : ""}`}
              >
                <div className={obracene ? "lg:order-2 lg:col-span-1" : "lg:col-span-1"}>
                  <RecenzeKartaMala item={prvni} priority={rowIndex === 0} />
                </div>
                {druha && (
                  <div className={obracene ? "lg:order-1 lg:col-span-2" : "lg:col-span-2"}>
                    <RecenzeKartaVelka item={druha} priority={rowIndex === 0} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-center text-[14px]">
          Recenze pocházejí od zákazníků Syrový Group.{" "}
          <Link href="/projekty" className="underline underline-offset-4 hover:text-brand">
            Prohlédněte si i naše projekty
          </Link>
          .
        </p>
      </Section>

      <CtaBand
        title="Chcete být další v pořadí?"
        text="Přijďte se poradit do některého z našich showroomů. Ukážeme vám materiály naživo a řekneme, co je ve vašem prostoru reálné."
      />
    </>
  );
}
