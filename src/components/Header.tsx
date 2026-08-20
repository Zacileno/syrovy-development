"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNav, site, type NavItem } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  /**
   * Rozbalený panel se službami.
   *
   * Stav sedí až tady v hlavičce schválně. Kdyby si ho hlídala samotná položka
   * Služby, panel by zmizel ve chvíli, kdy myš opustí její úzký proužek, a
   * nešlo by na krajní odkazy najet šikmo. Takhle drží, dokud je kurzor
   * kdekoliv v hlavičce nebo v panelu, a zavře se až při vyjetí ven.
   */
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const header = useRef<HTMLElement>(null);
  const closeMenu = () => setOpenMenu(null);

  useEffect(() => {
    if (!openMenu) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };
    // Při scrollování myš zůstane na místě, ale panel už překáží — zavřeme ho.
    const onScroll = () => setOpenMenu(null);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, [openMenu]);

  const isActive = (item: NavItem) => {
    if (item.external) return false;
    const base = item.href.split("#")[0];
    return pathname === base || pathname.startsWith(`${base}/`);
  };

  return (
    <header
      ref={header}
      onMouseLeave={closeMenu}
      onBlur={(event) => {
        // Při procházení klávesnicí zavřeme, až focus opustí celou hlavičku.
        if (!header.current?.contains(event.relatedTarget as Node)) closeMenu();
      }}
      className="sticky top-0 z-50 bg-white shadow-[0_1px_0_var(--color-line)]"
    >
      {/* Tenký proužek s kontaktem, zarovnaný doprava nad tlačítko Sjednat schůzku */}
      <div className="hidden border-b border-line lg:block">
        <div className="container-content flex h-10 items-center justify-end gap-5 text-[13px]">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 font-semibold text-ink transition-colors hover:text-brand"
          >
            <svg viewBox="0 0 20 20" aria-hidden className="h-4 w-4 fill-brand">
              <path d="M4.6 2h3l1.5 3.8-2 1.4a11 11 0 0 0 5.7 5.7l1.4-2L18 12.4v3a1.6 1.6 0 0 1-1.8 1.6A14.4 14.4 0 0 1 3 3.8 1.6 1.6 0 0 1 4.6 2Z" />
            </svg>
            {site.phone}
          </a>
          <span className="h-4 w-px bg-line" />
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

        {/* ml-auto odsune menu doprava, k tlačítku Sjednat schůzku */}
        <nav aria-label="Hlavní navigace" className="ml-auto hidden h-full lg:block">
          <ul className="flex h-full items-center gap-7 xl:gap-9">
            {mainNav.map((item) =>
              item.children ? (
                <NavDropdown
                  key={item.label}
                  item={item}
                  active={isActive(item)}
                  pathname={pathname}
                  open={openMenu === item.label}
                  onOpen={() => setOpenMenu(item.label)}
                  onClose={closeMenu}
                />
              ) : (
                <li key={item.label} className="flex h-full items-center">
                  <Link href={item.href} className={navLinkClass(isActive(item))}>
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
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

      {/* Mobilní menu */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobilní navigace"
          className="border-t border-line bg-white lg:hidden"
        >
          <ul className="container-content divide-y divide-line py-2">
            {mainNav.map((item) => (
              <li key={item.label} className="py-1">
                <Link
                  href={item.href}
                  onClick={closeMobile}
                  className={`block py-3 text-[15px] font-semibold uppercase tracking-[0.08em] ${
                    isActive(item) ? "text-brand" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
                {/* Na mobilu hover neexistuje, podslužby proto zůstávají rozbalené */}
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
            <li>
              <Link
                href="/o-nas"
                onClick={closeMobile}
                className="block py-3 text-[15px] font-semibold uppercase tracking-[0.08em] text-ink"
              >
                O nás
              </Link>
            </li>
          </ul>

          <div className="container-content flex flex-col gap-3 pb-6 pt-2">
            <Link href="/kontakt" onClick={closeMobile} className="btn-primary w-full sm:hidden">
              Sjednat schůzku
            </Link>
            <a href={site.phoneHref} className="py-2 text-center font-semibold text-ink">
              {site.phone}
            </a>
            <p className="text-center text-[13px] text-body">{site.openingHours}</p>
          </div>
        </nav>
      )}
    </header>
  );
}

function navLinkClass(active: boolean) {
  return `flex items-center whitespace-nowrap text-[14px] font-semibold uppercase tracking-[0.08em] transition-colors xl:text-[15px] ${
    active ? "text-brand" : "text-ink hover:text-brand"
  }`;
}

/**
 * Položka Služby s rozbalovacím panelem.
 *
 * Panel vypadá stejně jako dřívější šedý pruh pod hlavičkou, jen se ukáže až
 * při najetí myší. Zavírání si řídí hlavička, viz komentář u `openMenu`.
 */
function NavDropdown({
  item,
  active,
  pathname,
  open,
  onOpen,
  onClose,
}: {
  item: NavItem;
  active: boolean;
  pathname: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <li className="flex h-full items-center" onMouseEnter={onOpen} onFocus={onOpen}>
      {/*
        Vlastní pozicovací kontext jen pro zoubek. Panel níž se schválně
        pozicuje až vůči hlavičce, aby šel přes celou její šířku.
      */}
      <div className="relative flex h-full items-center">
        <Link
          href={item.href}
          aria-expanded={open}
          onClick={onClose}
          className={`${navLinkClass(active || open)} gap-2`}
        >
          {item.label}
          <svg
            viewBox="0 0 12 8"
            aria-hidden
            className={`h-2 w-3 fill-none stroke-current transition-transform ${open ? "rotate-180" : ""}`}
          >
            <path d="m1 1.5 5 5 5-5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        {/* Zoubek v barvě panelu, vysunutý nahoru do položky Služby */}
        {open && (
          <span
            aria-hidden
            className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 -translate-y-full border-x-[12px] border-b-[11px] border-x-transparent border-b-smoke"
          />
        )}
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-line bg-smoke">
          <div className="container-content flex h-[52px] items-center gap-9">
            {item.children?.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onClose}
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
    </li>
  );
}
