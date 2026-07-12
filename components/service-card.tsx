import { BrainCircuit, LayoutPanelTop, Plug, ServerCog } from "lucide-react";
import type { Service } from "@/content/types";
import { Tag } from "@/components/ui/tag";

const icons = { layout: LayoutPanelTop, server: ServerCog, brain: BrainCircuit, plug: Plug };

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  return (
    <article className="card service-card">
      <div className="service-icon"><Icon aria-hidden="true" size={22} strokeWidth={1.6} /></div>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <div className="tag-row">{service.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}</div>
    </article>
  );
}
