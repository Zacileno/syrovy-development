import type { Metadata } from "next";
import { site } from "@/lib/site";

/**
 * Společné SEO údaje.
 *
 * Každá stránka si přes pageMetadata() nastaví vlastní canonical a Open Graph,
 * jinak by ve sdílení přebírala titulek úvodní stránky.
 */

export const homeTitle = `${site.name} ~ Kompletní realizace bytů, domů a koupelen`;

type PageSeo = {
  /** Titulek bez názvu značky, ten se doplní automaticky. Na úvodní stránce se nepoužívá. */
  title?: string;
  description: string;
  path: string;
  /** Obrázek pro sdílení, 1200 × 630 px. Bez něj se použije společný. */
  image?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  // Vlastní openGraph ruší zděděný obrázek z src/app, proto se uvádí vždy.
  image = "/opengraph-image.jpg",
}: PageSeo): Metadata {
  const fullTitle = title ? `${title} ~ ${site.name}` : homeTitle;
  const images = [{ url: image, width: 1200, height: 630, alt: fullTitle }];

  return {
    title: title ?? { absolute: homeTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "cs_CZ",
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

type Crumb = { name: string; path?: string };

/** Drobečková navigace pro Google. Poslední položka je aktuální stránka, proto nemá adresu. */
export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Domů", path: "/" }, ...crumbs].map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      ...(crumb.path ? { item: `${site.url}${crumb.path === "/" ? "/" : crumb.path}` } : {}),
    })),
  };
}

/**
 * Firma a web pro úvodní stránku. Telefon, e-mail a adresy tu záměrně nejsou:
 * na webu jsou zatím převzaté od Koupelen Syrový (viz site.ts).
 */
export const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: `${site.url}/`,
    logo: `${site.url}/logo.png`,
    description: site.description,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: `${site.url}/`,
    inLanguage: "cs",
  },
];

export function faqJsonLd(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
