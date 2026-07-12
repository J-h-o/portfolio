import type { NavItem, Service } from "@/content/types";
import type { Locale } from "@/content/i18n";

export const siteConfig = {
  name: "Allushi",
  personName: "Joanis Allushi",
  title: "Allushi — Software, AI & Systems",
  description:
    "Tailor-made web, mobile, backend, and applied AI systems by Joanis Allushi, a full-stack software engineer based in Thessaloniki, Greece.",
  email: "contact@joanisallushi.com",
  location: "Thessaloniki, Greece",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://joanisallushi.com",
  links: {
    github: "https://github.com/J-h-o",
    linkedin: "https://www.linkedin.com/in/joanisallushi",
  },
} as const;

export const navigation: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services: readonly Service[] = [
  {
    slug: "product-frontend",
    title: "Product & frontend",
    summary: "Web and mobile interfaces built around real workflows.",
    description:
      "From customer-facing products to internal operations tools, we build responsive interfaces that are clear, reliable, and ready to evolve.",
    deliverables: ["Web applications", "Mobile applications", "Portals and dashboards", "CMS interfaces"],
    technologies: ["React", "Next.js", "Flutter", "TypeScript"],
    icon: "layout",
  },
  {
    slug: "backend-platforms",
    title: "Backend & platforms",
    summary: "APIs, data systems, and business-critical platforms.",
    description:
      "We design the services, data models, integrations, and operational tooling behind products that need to stay dependable as they grow.",
    deliverables: ["APIs and services", "Data architecture", "Administration tools", "Cloud integrations"],
    technologies: ["Node.js", "NestJS", "PostgreSQL", "Firebase"],
    icon: "server",
  },
  {
    slug: "applied-ai",
    title: "Applied AI & automation",
    summary: "Useful AI systems grounded in your data and workflows.",
    description:
      "We integrate retrieval, document intelligence, language models, and automation where they can remove repetitive work or unlock new product capability.",
    deliverables: ["RAG pipelines", "Vector search", "Document processing", "Workflow automation"],
    technologies: ["LLMs", "Qdrant", "Python", "Amazon Bedrock"],
    icon: "brain",
  },
  {
    slug: "integrations-reliability",
    title: "Integrations & reliability",
    summary: "The connectors and quality systems your stack is missing.",
    description:
      "We connect payments, communications, analytics, and third-party services, then support them with tests and delivery workflows that reduce release risk.",
    deliverables: ["Payments and messaging", "Plugins and third-party integrations", "Automated testing", "CI/CD workflows"],
    technologies: ["REST", "gRPC", "Stripe", "GitHub Actions"],
    icon: "plug",
  },
] as const;

export const processSteps = [
  { number: "01", title: "Understand", description: "A direct conversation about the problem, constraints, users, and the result you need." },
  { number: "02", title: "Scope", description: "A written plan covering what we will build, the delivery shape, risks, and commercial model." },
  { number: "03", title: "Build", description: "Working increments, frequent demos, and direct access to the people writing the code." },
  { number: "04", title: "Ship & support", description: "A measured launch, knowledge transfer, and continued iteration where it adds value." },
] as const;

const greekNavigation: readonly NavItem[] = [
  { label: "Αρχική", href: "/" },
  { label: "Έργα", href: "/portfolio" },
  { label: "Υπηρεσίες", href: "/services" },
  { label: "Σχετικά", href: "/about" },
  { label: "Επικοινωνία", href: "/contact" },
];

const greekServices: readonly Service[] = [
  {
    slug: "product-frontend",
    title: "Προϊόν & διεπαφές",
    summary: "Εφαρμογές web και mobile σχεδιασμένες γύρω από πραγματικές ροές εργασίας.",
    description:
      "Από προϊόντα για τελικούς χρήστες έως εσωτερικά εργαλεία λειτουργίας, δημιουργούμε ευέλικτες διεπαφές που είναι ξεκάθαρες, αξιόπιστες και έτοιμες να εξελιχθούν.",
    deliverables: ["Εφαρμογές web", "Εφαρμογές mobile", "Portals και dashboards", "Διεπαφές CMS"],
    technologies: ["React", "Next.js", "Flutter", "TypeScript"],
    icon: "layout",
  },
  {
    slug: "backend-platforms",
    title: "Backend & πλατφόρμες",
    summary: "APIs, συστήματα δεδομένων και πλατφόρμες κρίσιμες για τη λειτουργία της επιχείρησης.",
    description:
      "Σχεδιάζουμε τις υπηρεσίες, τα μοντέλα δεδομένων, τις διασυνδέσεις και τα λειτουργικά εργαλεία πίσω από προϊόντα που πρέπει να παραμένουν αξιόπιστα καθώς αναπτύσσονται.",
    deliverables: ["APIs και υπηρεσίες", "Αρχιτεκτονική δεδομένων", "Εργαλεία διαχείρισης", "Διασυνδέσεις cloud"],
    technologies: ["Node.js", "NestJS", "PostgreSQL", "Firebase"],
    icon: "server",
  },
  {
    slug: "applied-ai",
    title: "Εφαρμοσμένη ΤΝ & αυτοματοποίηση",
    summary: "Χρήσιμα συστήματα ΤΝ, θεμελιωμένα στα δεδομένα και τις ροές εργασίας σας.",
    description:
      "Ενσωματώνουμε ανάκτηση πληροφορίας, κατανόηση εγγράφων, γλωσσικά μοντέλα και αυτοματισμούς εκεί όπου μπορούν να περιορίσουν την επαναλαμβανόμενη εργασία ή να προσθέσουν ουσιαστικές δυνατότητες στο προϊόν.",
    deliverables: ["Ροές RAG", "Διανυσματική αναζήτηση", "Επεξεργασία εγγράφων", "Αυτοματοποίηση ροών εργασίας"],
    technologies: ["LLMs", "Qdrant", "Python", "Amazon Bedrock"],
    icon: "brain",
  },
  {
    slug: "integrations-reliability",
    title: "Διασυνδέσεις & αξιοπιστία",
    summary: "Οι συνδέσεις και οι μηχανισμοί ποιότητας που λείπουν από το τεχνολογικό σας οικοσύστημα.",
    description:
      "Συνδέουμε πληρωμές, επικοινωνίες, analytics και υπηρεσίες τρίτων και τα υποστηρίζουμε με δοκιμές και ροές παράδοσης που μειώνουν το ρίσκο κάθε έκδοσης.",
    deliverables: ["Πληρωμές και επικοινωνίες", "Plugins και διασυνδέσεις τρίτων", "Αυτοματοποιημένες δοκιμές", "Ροές CI/CD"],
    technologies: ["REST", "gRPC", "Stripe", "GitHub Actions"],
    icon: "plug",
  },
];

const greekProcessSteps = [
  { number: "01", title: "Κατανόηση", description: "Μια άμεση συζήτηση για το πρόβλημα, τους περιορισμούς, τους χρήστες και το αποτέλεσμα που χρειάζεστε." },
  { number: "02", title: "Οριοθέτηση", description: "Ένα γραπτό πλάνο που αποσαφηνίζει τι θα κατασκευάσουμε, τον τρόπο παράδοσης, τους κινδύνους και το εμπορικό μοντέλο." },
  { number: "03", title: "Υλοποίηση", description: "Λειτουργικά παραδοτέα σε μικρά βήματα, συχνές παρουσιάσεις και άμεση πρόσβαση στους ανθρώπους που γράφουν τον κώδικα." },
  { number: "04", title: "Παράδοση & υποστήριξη", description: "Ελεγχόμενη έναρξη λειτουργίας, μεταφορά γνώσης και συνεχής βελτίωση όπου προσφέρει πραγματική αξία." },
] as const;

export function getSiteContent(locale: Locale) {
  return locale === "el"
    ? { navigation: greekNavigation, services: greekServices, processSteps: greekProcessSteps }
    : { navigation, services, processSteps };
}
