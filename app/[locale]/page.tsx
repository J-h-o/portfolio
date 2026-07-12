import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocalizedFeaturedProjects } from "@/content/projects";
import { getSiteContent, siteConfig } from "@/content/site";
import { getExperienceContent } from "@/content/experience";
import { getDictionary } from "@/content/dictionary";
import { isLocale, localizePath } from "@/content/i18n";
import { ServiceCard } from "@/components/service-card";
import { ProjectCard } from "@/components/project-card";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { CallToAction } from "@/components/call-to-action";
import { StructuredData } from "@/components/structured-data";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getDictionary(locale).home;
  return createMetadata({ title: copy.metadataTitle, description: copy.metadataDescription, path: "/", locale });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);
  const copy = dictionary.home;
  const { services, processSteps } = getSiteContent(locale);
  const { bio } = getExperienceContent(locale);
  const featuredProjects = getLocalizedFeaturedProjects(locale);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: new URL(localizePath(locale), siteConfig.url).toString(),
    email: siteConfig.email,
    areaServed: locale === "el" ? "Παγκοσμίως" : "Worldwide",
    address: { "@type": "PostalAddress", addressLocality: locale === "el" ? "Θεσσαλονίκη" : "Thessaloniki", addressCountry: "GR" },
    founder: { "@type": "Person", name: siteConfig.personName },
    knowsAbout: services.map((service) => service.title),
    inLanguage: locale,
  };

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <p className="kicker kicker-inverse">{copy.kicker}</p>
            <h1 className="display">{copy.title}</h1>
            <p className="hero-copy">{bio.short} {copy.introSuffix}</p>
            <div className="cluster hero-actions">
              <ButtonLink href={localizePath(locale, "/book")} variant="accent">{copy.primaryAction} <ArrowRight aria-hidden="true" size={16} /></ButtonLink>
              <ButtonLink href={localizePath(locale, "/portfolio")} variant="inverse">{copy.secondaryAction}</ButtonLink>
            </div>
          </div>
          <div className="system-card" aria-label={copy.capabilityMap}>
            <div className="system-card-head"><span>{copy.capabilityTitle}</span><span className="status"><span className="status-dot" />{copy.available}</span></div>
            <div className="system-lines">
              <div className="system-line"><span className="system-key">product.frontend</span><span className="system-value">{copy.capabilityValues.frontend}</span></div>
              <div className="system-line"><span className="system-key">platform.backend</span><span className="system-value">{copy.capabilityValues.backend}</span></div>
              <div className="system-line"><span className="system-key">systems.ai</span><span className="system-value">{copy.capabilityValues.ai}</span></div>
              <div className="system-line"><span className="system-key">delivery.quality</span><span className="system-value">{copy.capabilityValues.quality}</span></div>
              <div className="system-line"><span className="system-key">studio.location</span><span className="system-value">{copy.capabilityValues.location}</span></div>
            </div>
          </div>
        </div>
        <div className="container sector-row" aria-label={copy.industryLabel}>
          {copy.industries.map((industry) => <span key={industry}>{industry}</span>)}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading kicker={copy.servicesKicker} title={copy.servicesTitle} description={copy.servicesDescription} />
          <div className="service-grid">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div>
          <div className="section-action"><Link className="text-link" href={localizePath(locale, "/services")}>{copy.servicesAction} <ArrowRight aria-hidden="true" size={16} /></Link></div>
        </div>
      </section>

      <section className="section section-subtle">
        <div className="container">
          <SectionHeading kicker={copy.workKicker} title={copy.workTitle} description={copy.workDescription} />
          <div className="project-grid">{featuredProjects.map((project, index) => <ProjectCard project={project} index={index} locale={locale} key={project.slug} />)}</div>
          <div className="section-action"><Link className="text-link" href={localizePath(locale, "/portfolio")}>{copy.workAction} <ArrowRight aria-hidden="true" size={16} /></Link></div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container metrics">{copy.metrics.map((metric) => <div className="metric" key={metric.label}><strong className="metric-value">{metric.value}</strong><span className="metric-label">{metric.label}</span></div>)}</div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeading inverse kicker={copy.processKicker} title={copy.processTitle} description={copy.processDescription} />
          <div className="process-grid">{processSteps.map((step) => <article className="process-step" key={step.number}><span className="process-step-number">{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
        </div>
      </section>

      <CallToAction locale={locale} />
      <StructuredData data={serviceSchema} />
    </>
  );
}
