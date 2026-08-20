import Image from "next/image";
import Link from "next/link";
import { mainNav, showrooms, site } from "@/lib/site";

const services = mainNav.find((item) => item.label === "Služby")?.children ?? [];

/**
 * V patičce je město vypsané zvlášť tučně, takže ho z adresy vypustíme.
 * Zahodíme jen přesnou shodu, aby zůstalo „Brno-střed“ a „Praha-Dobřejovice“.
 */
function streetOnly(address: string, city: string) {
  const parts = address.split(",").map((part) => part.trim());
  if (parts.length > 1 && parts[parts.length - 1] === city) parts.pop();
  return parts.join(", ");
}

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      {/* Pruh se showroomy — jen adresy, podrobnosti jsou na stránce Kontakt */}
      <div className="border-b border-white/10">
        <div className="container-content grid gap-x-8 gap-y-4 py-7 text-[13px] lg:py-5 sm:grid-cols-2 lg:grid-cols-4">
          {showrooms.map((showroom) => (
            <p key={showroom.city} className="leading-relaxed">
              <span className="font-semibold text-white">{showroom.city}</span>
              <span className="mx-2 text-white/30">|</span>
              {streetOnly(showroom.address, showroom.city)}
            </p>
          ))}
        </div>
      </div>

      <div className="container-content grid gap-8 py-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:py-8">
        <div>
          <Image
            src="/logo-white.png"
            alt="Syrový Development"
            width={1595}
            height={442}
            className="h-8 w-auto"
          />
          <p className="mt-4 max-w-sm text-[14px] leading-relaxed">
            Kompletní realizace bytů, domů a koupelen na klíč. Jeden partner od prvního návrhu po
            předání klíčů.
          </p>
          <div className="mt-4 space-y-1 text-[14px]">
            <a href={site.phoneHref} className="block font-semibold text-white transition-colors hover:text-brand">
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="block text-white transition-colors hover:text-brand"
            >
              {site.email}
            </a>
          </div>
        </div>

        <nav aria-label="Služby">
          <h3 className="text-[14px] font-semibold text-white">Naše služby</h3>
          <ul className="mt-3 space-y-2 text-[14px]">
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="transition-colors hover:text-brand">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Společnost">
          <h3 className="text-[14px] font-semibold text-white">Syrový Development</h3>
          <ul className="mt-3 space-y-2 text-[14px]">
            <li>
              <Link href="/projekty" className="transition-colors hover:text-brand">
                Projekty
              </Link>
            </li>
            <li>
              <Link href="/recenze" className="transition-colors hover:text-brand">
                Recenze
              </Link>
            </li>
            <li>
              <Link href="/o-nas" className="transition-colors hover:text-brand">
                O nás
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="transition-colors hover:text-brand">
                Kontakt
              </Link>
            </li>
            <li>
              <a
                href="https://www.koupelnysyrovy.cz/"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-brand"
              >
                Koupelny Syrový
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content flex flex-col gap-2 py-5 text-[13px] lg:py-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Syrový Development. Všechna práva vyhrazena.</p>
          <p>Součást Syrový Group</p>
        </div>
      </div>
    </footer>
  );
}
