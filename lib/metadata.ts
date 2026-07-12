import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { localeMetadata, localizedAlternates, localizePath, type Locale } from "@/content/i18n";

export function createMetadata({
  title,
  description,
  path,
  locale,
}: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
}): Metadata {
  const canonical = new URL(localizePath(locale, path), siteConfig.url).toString();
  const fullTitle = `${title} | Allushi`;
  const languageAlternates = Object.fromEntries(
    Object.entries(localizedAlternates(path)).map(([language, localizedPath]) => [language, new URL(localizedPath, siteConfig.url).toString()]),
  );
  const image = localizePath(locale, "/opengraph-image");

  return {
    title: fullTitle,
    description,
    alternates: { canonical, languages: languageAlternates },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: locale === "el" ? "el_GR" : "en_GB",
      alternateLocale: locale === "el" ? ["en_GB"] : ["el_GR"],
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: `${title} — Allushi` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    other: { "content-language": localeMetadata[locale].languageTag },
  };
}
