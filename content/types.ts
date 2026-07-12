export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  deliverables: readonly string[];
  technologies: readonly string[];
  icon: "layout" | "server" | "brain" | "plug";
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: readonly string[];
  technologies: readonly string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  sector: string;
  period: string;
  summary: string;
  challenge: string;
  approach: readonly string[];
  outcomes: readonly string[];
  metrics: readonly { value: string; label: string }[];
  technologies: readonly string[];
  featured: boolean;
};
