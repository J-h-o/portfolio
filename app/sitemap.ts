import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { locales, localizedAlternates, localizePath } from "@/content/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/portfolio", "/services", "/about", "/book", "/contact"];
  const now = new Date();
  const entries = [...routes, ...projects.map((project) => `/portfolio/${project.slug}`)];
  return [
    ...entries.flatMap((path) => locales.map((locale) => ({
      url: new URL(localizePath(locale, path || "/"), siteConfig.url).toString(),
      lastModified: now,
      changeFrequency: path.startsWith("/portfolio/") ? "yearly" as const : "monthly" as const,
      priority: path === "" ? 1 : path.startsWith("/portfolio/") ? 0.7 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          Object.entries(localizedAlternates(path || "/")).map(([language, localizedPath]) => [language, new URL(localizedPath, siteConfig.url).toString()]),
        ),
      },
    }))),
  ];
}
