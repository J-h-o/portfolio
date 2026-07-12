import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getExperienceContent } from "@/content/experience";
import { siteConfig } from "@/content/site";
import { getDictionary } from "@/content/dictionary";
import { isLocale, localizePath } from "@/content/i18n";
import { Tag } from "@/components/ui/tag";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { CallToAction } from "@/components/call-to-action";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getDictionary(locale).about;
  return createMetadata({ title: copy.metadataTitle, description: copy.metadataDescription, path: "/about", locale });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getDictionary(locale).about;
  const { bio, credentials, experiences, skillGroups } = getExperienceContent(locale);
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="kicker">{copy.kicker}</p>
          <h1 className="page-title">{copy.title}</h1>
          <p className="page-lede">{bio.long}</p>
          <div className="cluster" style={{ marginTop: 28 }}>
            <ButtonLink href={localizePath(locale, "/book")} variant="primary">{copy.bookAction}</ButtonLink>
            <a className="text-link" href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" size={15} /></a>
            <a className="text-link" href={siteConfig.links.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" size={15} /></a>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container split">
          <div className="sticky-heading">
            <SectionHeading kicker={copy.experienceKicker} title={copy.experienceTitle} description={copy.experienceDescription} />
          </div>
          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item" key={`${experience.company}-${experience.period}`}>
                <p className="timeline-meta">{experience.period}{experience.location ? ` • ${experience.location}` : ""}</p>
                <h2>{experience.company}</h2>
                <p className="timeline-role">{experience.role}</p>
                <p>{experience.summary}</p>
                <ul className="plain-list">{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                <div className="tag-row">{experience.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-subtle">
        <div className="container">
          <SectionHeading kicker={copy.skillsKicker} title={copy.skillsTitle} description={copy.skillsDescription} />
          <div className="skills-grid">
            {skillGroups.map((group) => <article className="card skill-card" key={group.title}><h3>{group.title}</h3><div className="tag-row">{group.skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}</div></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading kicker={copy.backgroundKicker} title={copy.backgroundTitle} />
          <div className="credential-list">
            {credentials.map((credential) => <div className="credential" key={credential.label}><span className="credential-label">{credential.label}</span><strong>{credential.value}</strong><span className="credential-meta">{credential.meta}</span></div>)}
          </div>
          <p className="muted" style={{ marginTop: 24 }}>{copy.cvPending} <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
        </div>
      </section>
      <CallToAction locale={locale} />
    </>
  );
}
