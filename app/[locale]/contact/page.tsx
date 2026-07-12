import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/content/site";
import { getDictionary } from "@/content/dictionary";
import { isLocale } from "@/content/i18n";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getDictionary(locale).contact;
  return createMetadata({ title: copy.metadataTitle, description: copy.metadataDescription, path: "/contact", locale });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getDictionary(locale).contact;
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="kicker">{copy.kicker}</p>
          <h1 className="page-title">{copy.title}</h1>
          <p className="page-lede">{copy.lede}</p>
        </div>
      </header>
      <section className="section">
        <div className="container contact-layout">
          <aside>
            <h2 className="section-title">{copy.asideTitle}</h2>
            <p className="section-copy">{copy.asideDescription}</p>
            <div className="contact-details">
              <a className="cluster" href={`mailto:${siteConfig.email}`}><Mail aria-hidden="true" size={18} />{siteConfig.email}</a>
              <span className="cluster"><MapPin aria-hidden="true" size={18} />{locale === "el" ? "Θεσσαλονίκη, Ελλάδα" : siteConfig.location}</span>
              <a className="cluster" href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" size={15} /></a>
              <a className="cluster" href={siteConfig.links.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" size={15} /></a>
            </div>
          </aside>
          <ContactForm locale={locale} />
        </div>
      </section>
    </>
  );
}
