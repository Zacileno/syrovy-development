import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui";
import { search } from "@/lib/search";

export const metadata: Metadata = {
  title: "Vyhledávání",
  description: "Vyhledávání v obsahu webu Syrový Development.",
  robots: { index: false },
};

export default async function HledaniPage({ searchParams }: PageProps<"/hledani">) {
  const params = await searchParams;
  const raw = params.q;
  const query = (Array.isArray(raw) ? raw[0] : raw) ?? "";
  const results = search(query);

  return (
    <Section>
      <SectionHeading
        align="left"
        eyebrow="Vyhledávání"
        title={query ? `Výsledky pro „${query}“` : "Co hledáte?"}
        lead={
          query
            ? results.length > 0
              ? `Našli jsme ${results.length} ${results.length === 1 ? "výsledek" : results.length < 5 ? "výsledky" : "výsledků"}.`
              : "Nic jsme nenašli. Zkuste to jinými slovy, nebo nám rovnou zavolejte."
            : "Zadejte hledaný výraz do políčka v hlavičce."
        }
      />

      {results.length > 0 && (
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {results.map((doc) => (
            <li key={`${doc.href}-${doc.title}`}>
              <Link href={doc.href} className="group block py-6 transition-colors">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">
                  {doc.section}
                </p>
                <h2 className="mt-2 text-xl transition-colors group-hover:text-brand">
                  {doc.title}
                </h2>
                <p className="mt-2 line-clamp-2 leading-relaxed">{doc.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {query && results.length === 0 && (
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/sluzby" className="btn-outline">
            Projít služby
          </Link>
          <Link href="/kontakt" className="btn-primary">
            Sjednat schůzku
          </Link>
        </div>
      )}
    </Section>
  );
}
