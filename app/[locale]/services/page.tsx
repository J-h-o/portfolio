import { Check, MoveRight } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSiteContent, siteConfig } from "@/content/site";
import { getDictionary } from "@/content/dictionary";
import { isLocale, localizePath } from "@/content/i18n";
import { ServiceCard } from "@/components/service-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { CallToAction } from "@/components/call-to-action";
import { StructuredData } from "@/components/structured-data";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getDictionary(locale).services;
  return createMetadata({ title: copy.metadataTitle, description: copy.metadataDescription, path: "/services", locale });
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getDictionary(locale).services;
  const { services, processSteps } = getSiteContent(locale);
  const schemas = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "ProfessionalService", name: siteConfig.name, url: new URL(localizePath(locale), siteConfig.url).toString() },
    areaServed: locale === "el" ? "Παγκοσμίως" : "Worldwide",
    inLanguage: locale,
  }));

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
        <div className="container">
          <SectionHeading kicker={copy.capabilitiesKicker} title={copy.capabilitiesTitle} description={copy.capabilitiesDescription} />
          <div className="service-grid">{services.map((service) => <ServiceCard service={service} key={service.slug} />)}</div>
        </div>
      </section>
      <section className="section section-subtle">
        <div className="container stack" style={{ gap: 64 }}>
          {services.map((service, index) => (
            <article className="split" id={service.slug} key={service.slug}>
              <div>
                <p className="kicker">{String(index + 1).padStart(2, "0")} • {service.summary}</p>
                <h2 className="section-title">{service.title}</h2>
              </div>
              <div>
                <p className="section-copy">{service.description}</p>
                <ul className="plain-list">{service.deliverables.map((item) => <li key={item}><Check aria-hidden="true" size={15} style={{ display: "inline", marginRight: 8, color: "var(--green-600)" }} />{item}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-dark">
        <div className="container">
          <SectionHeading inverse kicker={copy.processKicker} title={copy.processTitle} description={copy.processDescription} />
          <div className="process-grid">{processSteps.map((step) => <article className="process-step" key={step.number}><span className="process-step-number">{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
          <div className="section-action"><ButtonLink href={localizePath(locale, "/contact")} variant="inverse">{copy.sendBrief} <MoveRight aria-hidden="true" size={16} /></ButtonLink></div>
        </div>
      </section>
      <CallToAction locale={locale} />
      <StructuredData data={schemas} />
    </>
  );
}
