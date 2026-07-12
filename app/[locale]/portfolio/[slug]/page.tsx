import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getLocalizedProject } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { getDictionary } from "@/content/dictionary";
import { isLocale, localizePath } from "@/content/i18n";
import { Tag } from "@/components/ui/tag";
import { CallToAction } from "@/components/call-to-action";
import { StructuredData } from "@/components/structured-data";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const project = getLocalizedProject(locale, slug);
  if (!project) return {};
  const metadata = createMetadata({ title: project.title, description: project.summary, path: `/portfolio/${project.slug}`, locale });
  const image = localizePath(locale, `/portfolio/${project.slug}/opengraph-image`);
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, images: [{ url: image, width: 1200, height: 630, alt: project.title }] },
    twitter: { ...metadata.twitter, images: [image] },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = getLocalizedProject(locale, slug);
  if (!project) notFound();
  const dictionary = getDictionary(locale);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    creator: { "@type": "Person", name: siteConfig.personName, url: siteConfig.url },
    about: project.sector,
    url: new URL(localizePath(locale, `/portfolio/${project.slug}`), siteConfig.url).toString(),
    inLanguage: locale,
  };

  return (
    <>
      <header className="case-header">
        <div className="container">
          <p className="kicker kicker-inverse">{dictionary.caseStudy.kicker} • {project.client}</p>
          <h1 className="page-title">{project.title}</h1>
          <p className="page-lede">{project.summary}</p>
          <div className="case-meta"><span>{project.sector}</span><span>{project.period}</span></div>
        </div>
      </header>
      <article className="section">
        <div className="container case-body">
          <aside>
            <p className="kicker">{dictionary.common.technology}</p>
            <div className="tag-row" style={{ marginTop: 14, paddingTop: 0 }}>{project.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}</div>
            {project.metrics.length ? <div className="case-metrics">{project.metrics.map((metric) => <div className="case-metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div> : null}
          </aside>
          <div>
            <h2>{dictionary.caseStudy.challenge}</h2>
            <p>{project.challenge}</p>
            <h3>{dictionary.caseStudy.built}</h3>
            <ul className="plain-list">{project.approach.map((item) => <li key={item}>{item}</li>)}</ul>
            <h3>{dictionary.caseStudy.outcome}</h3>
            <ul className="plain-list">{project.outcomes.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
      </article>
      <CallToAction locale={locale} />
      <StructuredData data={schema} />
    </>
  );
}
