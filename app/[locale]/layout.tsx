import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import "../globals.css";
import { siteConfig } from "@/content/site";
import { getDictionary } from "@/content/dictionary";
import { isLocale, localeMetadata, locales } from "@/content/i18n";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { StructuredData } from "@/components/structured-data";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0c0e" },
  ],
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = getDictionary(locale);
  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: dictionary.home.metadataTitle, template: "%s | Allushi" },
    description: dictionary.home.metadataDescription,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.personName, url: siteConfig.url }],
    creator: siteConfig.personName,
    publisher: siteConfig.name,
    category: "technology",
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const greek = locale === "el";
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.personName,
    alternateName: "John Allushi",
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    jobTitle: greek ? "Μηχανικός λογισμικού full-stack" : "Full-Stack Software Engineer",
    homeLocation: { "@type": "Place", name: greek ? "Θεσσαλονίκη, Ελλάδα" : siteConfig.location },
    alumniOf: { "@type": "CollegeOrUniversity", name: greek ? "Διεθνές Πανεπιστήμιο της Ελλάδος" : "International Hellenic University" },
    sameAs: [siteConfig.links.linkedin, siteConfig.links.github],
    knowsAbout: greek
      ? ["Full-stack ανάπτυξη", "Flutter", "Node.js", "React", "Εφαρμοσμένη τεχνητή νοημοσύνη", "RAG", "Διανυσματική αναζήτηση"]
      : ["Full-stack development", "Flutter", "Node.js", "React", "Applied AI", "RAG", "Vector search"],
    inLanguage: localeMetadata[locale].languageTag,
  };

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">{greek ? "Μετάβαση στο περιεχόμενο" : "Skip to content"}</a>
        <SiteHeader locale={locale} />
        <main id="main-content">{children}</main>
        <SiteFooter locale={locale} />
        <StructuredData data={personSchema} />
      </body>
    </html>
  );
}
