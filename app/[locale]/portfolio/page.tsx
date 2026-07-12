import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjects } from "@/content/projects";
import { getDictionary } from "@/content/dictionary";
import { isLocale } from "@/content/i18n";
import { ProjectCard } from "@/components/project-card";
import { CallToAction } from "@/components/call-to-action";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getDictionary(locale).portfolio;
  return createMetadata({ title: copy.metadataTitle, description: copy.metadataDescription, path: "/portfolio", locale });
}

export default async function PortfolioPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getDictionary(locale).portfolio;
  const projects = getProjects(locale);
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
          <div className="project-grid" style={{ marginTop: 0 }}>{projects.map((project, index) => <ProjectCard project={project} index={index} locale={locale} key={project.slug} />)}</div>
        </div>
      </section>
      <CallToAction locale={locale} />
    </>
  );
}
