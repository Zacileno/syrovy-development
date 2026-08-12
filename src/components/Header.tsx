"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { mainNav, site, topNav, type NavItem } from "@/lib/site";

/** Vyhledávání odkazuje na stránku /hledani, která prohledává obsah webu. */
function SearchForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  return (
    <form
      role="search"
      onSubmit={(event) => {
        event.preventDefault();
        const trimmed = query.trim();
        if (!trimmed) return;
        router.push(`/hledani?q=${encodeURIComponent(trimmed)}`);
        onSubmitted?.();
      }}
      className="flex items-center"
    >
      <label htmlFor="site-search" className="sr-only">
        Vyhledávání na webu
      </label>
      <input
        id="site-search"
        type="search"
        name="q"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Co hledáte?"
        className="h-11 w-40 border border-line px-4 text-[15px] text-ink outline-none transition-colors placeholder:text-body/70 focus:border-brand 2xl:w-52"
      />
      <button
        type="submit"
        aria-label="Hledat"
        className="flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-brand"
      >
        <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-none stroke-current">
          <circle cx="11" cy="11" r="6.5" strokeWidth="1.8" />
          <path d="m16 16 4.5 4.5" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </form>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  const isActive = (item: NavItem) => {
    if (item.external) return false;
    const base = item.href.split("#")[0];
    return pathname === base || pathname.startsWith(`${base}/`);
  };

  // Šedý pruh s podslužbami je ukotvený napevno, stejně jako u Koupelen Syrový.
  // Zobrazuje se na všech stránkách a zoubek pod položkou Služby se nehýbe.
  const anchoredNav = mainNav.find((item) => item.children);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_var(--color-line)]">
      {/* Horní kontaktní pruh */}
      <div className="hidden border-b border-line lg:block">
        <div className="container-content flex h-11 items-center gap-6 text-[13px]">
          {topNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
          <span className="h-4 w-px bg-line" />
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 font-semibold text-ink transition-colors hover:text-brand"
          >
            <svg viewBox="0 0 20 20" aria-hidden className="h-4 w-4 fill-brand">
              <path d="M4.6 2h3l1.5 3.8-2 1.4a11 11 0 0 0 5.7 5.7l1.4-2L18 12.4v3a1.6 1.6 0 0 1-1.8 1.6A14.4 14.4 0 0 1 3 3.8 1.6 1.6 0 0 1 4.6 2Z" />
            </svg>
            {site.phone}
          </a>
          <span className="text-body">{site.openingHours}</span>
        </div>
      </div>

      {/* Hlavní lišta */}
      <div className="container-content flex h-[68px] items-center justify-between gap-6 lg:h-[84px]">
        <Link href="/" aria-label="Syrový Development — úvodní stránka" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Syrový Development"
            width={1595}
            height={442}
            priority
            className="h-9 w-auto lg:h-11"
          />
        </Link>

        <nav aria-label="Hlavní navigace" className="hidden h-full lg:block">
          <ul className="flex h-full items-center gap-5 xl:gap-7">
            {mainNav.map((item) => {
              const anchored = anchoredNav?.label === item.label;
              const classes = `flex items-center whitespace-nowrap text-[14px] font-semibold uppercase tracking-[0.08em] transition-colors xl:text-[15px] ${
                isActive(item) || anchored ? "text-brand" : "text-ink hover:text-brand"
              }`;

              return (
                <li key={item.label} className="relative flex h-full items-center">
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className={classes}>
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className={classes}>
                      {item.label}
                    </Link>
                  )}

                  {/* Zoubek v barvě šedého pruhu, vysunutý nad jeho horní hranu */}
                  {anchored && (
                    <span
                      aria-hidden
                      className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 -translate-y-full border-x-[12px] border-b-[11px] border-x-transparent border-b-smoke"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden xl:block">
            <SearchForm />
          </div>

          <Link href="/kontakt" className="btn-primary hidden sm:inline-flex">
            Sjednat schůzku
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Zavřít menu" : "Otevřít menu"}
            className="flex h-11 w-11 items-center justify-center rounded-none border border-line lg:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-ink transition-transform ${
                  mobileOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-ink transition-opacity ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-ink transition-transform ${
                  mobileOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Šedý pruh s podmenu, stejně jako u Koupelen Syrový */}
      {anchoredNav && (
        <div className="hidden bg-smoke lg:block">
          <div className="container-content flex h-[52px] items-center gap-9">
            {anchoredNav.children?.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={`text-[14px] font-semibold uppercase tracking-[0.08em] transition-colors ${
                  pathname === child.href ? "text-brand" : "text-ink hover:text-brand"
                }`}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mobilní menu */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobilní navigace"
          className="border-t border-line bg-white lg:hidden"
        >
          <div className="container-content py-4">
            <SearchForm onSubmitted={closeMobile} />
          </div>

          <ul className="container-content divide-y divide-line py-2">
            {mainNav.map((item) => (
              <li key={item.label} className="py-1">
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMobile}
                    className="block py-3 text-[15px] font-semibold uppercase tracking-[0.08em] text-ink"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    className={`block py-3 text-[15px] font-semibold uppercase tracking-[0.08em] ${
                      isActive(item) ? "text-brand" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && (
                  <ul className="pb-2 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={closeMobile}
                          className="block py-2 text-[14px] text-body"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            {topNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMobile}
                  className="block py-3 text-[15px] font-semibold uppercase tracking-[0.08em] text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="container-content flex flex-col gap-3 pb-6 pt-2">
            <Link href="/kontakt" onClick={closeMobile} className="btn-primary w-full sm:hidden">
              Sjednat schůzku
            </Link>
            <a href={site.phoneHref} className="py-2 text-center font-semibold text-ink">
              {site.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
