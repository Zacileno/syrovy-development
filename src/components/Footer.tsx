import Image from "next/image";
import Link from "next/link";
import { mainNav, showrooms, site } from "@/lib/site";

const services = mainNav.find((item) => item.label === "Služby")?.children ?? [];

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      {/* Pruh se showroomy */}
      <div className="border-b border-white/10">
        <div className="container-content grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {showrooms.map((showroom) => (
            <div key={showroom.city}>
              <h3 className="text-[15px] font-semibold text-white">Showroom {showroom.city}</h3>
              <p className="mt-2 text-[14px] leading-relaxed">{showroom.address}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container-content grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src="/logo-white.png"
            alt="Syrový Development"
            width={1595}
            height={442}
            className="h-10 w-auto"
          />
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed">
            Kompletní realizace bytů, domů a koupelen na klíč. Jeden partner od prvního návrhu po
            předání klíčů.
          </p>
          <div className="mt-6 space-y-2 text-[15px]">
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
          <h3 className="text-[15px] font-semibold text-white">Naše služby</h3>
          <ul className="mt-4 space-y-3 text-[15px]">
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
          <h3 className="text-[15px] font-semibold text-white">Syrový Development</h3>
          <ul className="mt-4 space-y-3 text-[15px]">
            <li>
              <Link href="/realizace" className="transition-colors hover:text-brand">
                Realizace
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
        <div className="container-content flex flex-col gap-2 py-6 text-[13px] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Syrový Development. Všechna práva vyhrazena.</p>
          <p>Součást Syrový Group</p>
        </div>
      </div>
    </footer>
  );
}
