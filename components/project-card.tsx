import Link from "next/link";
import type { CaseStudy } from "@/content/types";
import { getDictionary } from "@/content/dictionary";
import { localizePath, type Locale } from "@/content/i18n";
import { Tag } from "@/components/ui/tag";

export function ProjectCard({ project, index, locale }: { project: CaseStudy; index: number; locale: Locale }) {
  const dictionary = getDictionary(locale);
  return (
    <article className="card project-card">
      <Link className="project-card-link" href={localizePath(locale, `/portfolio/${project.slug}`)}>
        <div className="project-visual">
          <span className="mono">{project.sector}</span>
          <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <div className="project-card-body">
          <p className="kicker">{project.client} • {project.period}</p>
          <h2>{project.title}</h2>
          <p>{project.summary}</p>
          <div className="tag-row">{project.technologies.slice(0, 4).map((technology) => <Tag key={technology}>{technology}</Tag>)}</div>
          <span className="project-arrow">{dictionary.common.readCaseStudy} →</span>
        </div>
      </Link>
    </article>
  );
}
