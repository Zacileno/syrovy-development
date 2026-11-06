import type { MetadataRoute } from "next";
import { services } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/sluzby", "/projekty", "/recenze", "/o-nas", "/kontakt"];
  // Sitemapa se generuje při nasazení, datum proto odpovídá poslední verzi webu.
  const lastModified = new Date();

  return [
    ...staticPages.map((path) => ({
      url: `${site.url}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${site.url}/sluzby/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
