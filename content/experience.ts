import type { Experience } from "@/content/types";
import type { Locale } from "@/content/i18n";

export const bio = {
  eyebrow: "Full-stack engineering • Applied AI",
  short:
    "Joanis Allushi is a full-stack software engineer based in Thessaloniki, building high-performance web and mobile products, backend platforms, and applied AI systems.",
  long:
    "I specialise in high-performance apps and user-centred platforms across web and mobile. My work spans Flutter, Node.js, React, NestJS, data-intensive systems, rigorous QA, and applied AI engineering—from RAG pipelines and vector search to document intelligence. I have delivered software across fintech, edtech, medtech, art and digital media, automotive, construction, and government contexts.",
} as const;

export const experiences: readonly Experience[] = [
  {
    company: "bbv Greece (bbv Software Services AG)",
    role: "Software Engineer",
    period: "Feb 2025 – present",
    location: "Thessaloniki",
    summary: "Professional software engineer serving multiple clients on advanced web applications.",
    highlights: [
      "Full-stack engineering for client work, including the ongoing Simplex 2.0 engagement.",
      "Professional applied AI work with RAG, vector search, LLMs and classifiers, speech recognition, and speaker diarization.",
    ],
    technologies: ["TypeScript", "React", "Node.js", "Python", "Qdrant", "Amazon Bedrock"],
  },
  {
    company: "ArtVolt",
    role: "Mobile Application Developer (contract)",
    period: "Apr 2024 – present",
    summary: "Product, platform, and analytics work across a two-sided art ecosystem.",
    highlights: [
      "Modernised an outdated Flutter codebase, fixed critical issues, and added location scanning, notifications, remote configuration, VIP booking, video, and news features.",
      "Registered and active users grew 4× against a 25% forecast.",
      "Stabilised ArtVolt for Business batch uploads and added location metadata for stronger queries, data quality, and exhibitor self-service.",
      "Upgraded ArtVolt for Collectors, added responsive artwork UI, updated the free-trial payment flow, and worked directly with end users.",
      "Built analytics reporting that contributed to ArtAthina renewing its contract for another year.",
      "A CMS news workflow increased in-app article click rate by 20%.",
    ],
    technologies: ["Flutter", "Dart", "Python", "Angular", "Firebase", "BigQuery", "Looker Studio"],
  },
  {
    company: "Woli Fintech",
    role: "Full Stack Developer",
    period: "Apr 2022 – Jan 2025",
    location: "Athens",
    summary: "Banking and financial-education products for children, teenagers, and their parents.",
    highlights: [
      "Built the internal administration dashboard across Node.js, Flutter web, MySQL, authentication, permissions, and financial/communications integrations.",
      "Enabled customer support to triple throughput and gave compliance and marketing teams dedicated operational tooling.",
      "Built Woli Gift from scratch; the revenue-generating product was used by about 40% of the active user base.",
      "Built the Woli Education reward feature, doubling engagement among ages 8–12 and supporting more than 1,000 reward transactions.",
      "Centralised KPIs in Looker Studio and BigQuery, reducing investor-pitch preparation and informing two new subscription plans.",
      "Founded the Maestro end-to-end testing project for release stability.",
    ],
    technologies: ["Node.js", "Express", "Flutter", "React", "MySQL", "BigQuery", "Maestro"],
  },
  {
    company: "Khyria",
    role: "Back End Developer (contract)",
    period: "Jun 2022 – Jul 2023",
    location: "US / remote",
    summary: "Backend work for a menopause health toolkit in FemTech and MedTech.",
    highlights: [
      "Built dynamic notifications and personalised article delivery from questionnaire and smart-device data.",
      "Worked with product, marketing, and the medical advisory board on delivery intervals and content formats.",
      "The system passed internal testing; the company became defunct before a public launch.",
    ],
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "TimescaleDB", "Redis", "OneSignal"],
  },
  {
    company: "GetItParts",
    role: "Full-Stack Developer, MVP builder",
    period: "Jan 2021 – Feb 2022",
    summary: "A car-parts marketplace concept and mechanic network built as an end-to-end MVP.",
    highlights: [
      "Solo-built the mobile app, website, and CMS in roughly one year.",
      "Designed catalogue, wishlist, Stripe checkout, order tracking, and a roughly 2.5 million-document Cloud Firestore database.",
      "The product received positive investor feedback but did not launch because of funding and pandemic timing.",
    ],
    technologies: ["Flutter", "Firebase", "Cloud Firestore", "Stripe"],
  },
] as const;

export const skillGroups = [
  { title: "Product engineering", skills: ["TypeScript / JavaScript", "Node.js / Express", "NestJS", "Flutter / Dart", "React", "Angular", "Python", "Java", "REST", "gRPC", "Socket.io"] },
  { title: "Applied AI", skills: ["RAG architectures", "Embeddings", "Vector search", "Qdrant", "LoRA fine-tuning", "Prompt engineering", "Amazon Bedrock", "HuggingFace", "ollama", "LLM integration", "Document parsing", "Whisper", "pyannote"] },
  { title: "Data & product insight", skills: ["PostgreSQL", "MySQL", "TimescaleDB", "Firestore", "MongoDB", "Redis", "BigQuery", "Google Analytics", "Looker Studio"] },
  { title: "Quality, cloud & delivery", skills: ["TDD", "Jest", "Mockito", "Maestro", "Docker", "GCP", "AWS", "Firebase", "GitHub / GitLab CI/CD", "Scrum", "Kanban", "Code review", "Pair programming"] },
] as const;

export const credentials = [
  { label: "Education", value: "BE Computer Engineering, International Hellenic University", meta: "2018–2022" },
  { label: "Certification", value: "Certified ScrumMaster®", meta: "Valid through May 2027" },
  { label: "Languages", value: "Greek and Albanian (native), English (fluent, ECPE C2)", meta: "" },
] as const;

const greekBio = {
  eyebrow: "Full-stack ανάπτυξη • Εφαρμοσμένη τεχνητή νοημοσύνη",
  short:
    "Ο Joanis Allushi είναι μηχανικός λογισμικού full-stack με έδρα τη Θεσσαλονίκη. Αναπτύσσει εφαρμογές web και mobile υψηλών επιδόσεων, backend πλατφόρμες και συστήματα εφαρμοσμένης τεχνητής νοημοσύνης.",
  long:
    "Εξειδικεύομαι σε εφαρμογές υψηλών επιδόσεων και πλατφόρμες με επίκεντρο τον χρήστη, για web και mobile. Η δουλειά μου καλύπτει Flutter, Node.js, React, NestJS, συστήματα μεγάλης κλίμακας δεδομένων, αυστηρές διαδικασίες ποιότητας και εφαρμοσμένη τεχνητή νοημοσύνη — από ροές RAG και διανυσματική αναζήτηση έως κατανόηση εγγράφων. Έχω παραδώσει λογισμικό σε fintech, edtech, medtech, τέχνη και ψηφιακά μέσα, αυτοκίνηση, κατασκευές και έργα του δημόσιου τομέα.",
} as const;

const greekExperiences: readonly Experience[] = [
  {
    company: "bbv Greece (bbv Software Services AG)",
    role: "Μηχανικός λογισμικού",
    period: "Φεβ 2025 – σήμερα",
    location: "Θεσσαλονίκη",
    summary: "Μηχανικός λογισμικού σε προηγμένες διαδικτυακές εφαρμογές για πολλαπλούς πελάτες.",
    highlights: [
      "Full-stack ανάπτυξη σε έργα πελατών, συμπεριλαμβανομένης της συνεχιζόμενης συνεργασίας Simplex 2.0.",
      "Επαγγελματική εφαρμογή τεχνητής νοημοσύνης με RAG, διανυσματική αναζήτηση, LLMs και classifiers, αναγνώριση ομιλίας και διαχωρισμό ομιλητών.",
    ],
    technologies: ["TypeScript", "React", "Node.js", "Python", "Qdrant", "Amazon Bedrock"],
  },
  {
    company: "ArtVolt",
    role: "Προγραμματιστής εφαρμογών mobile (σύμβαση έργου)",
    period: "Απρ 2024 – σήμερα",
    summary: "Ανάπτυξη προϊόντος, πλατφόρμας και analytics σε ένα διμερές οικοσύστημα τέχνης.",
    highlights: [
      "Εκσυγχρόνισα μια παρωχημένη βάση κώδικα Flutter, διόρθωσα κρίσιμα προβλήματα και πρόσθεσα σάρωση βάσει τοποθεσίας, ειδοποιήσεις, απομακρυσμένες ρυθμίσεις, κρατήσεις VIP, βίντεο και ειδήσεις.",
      "Οι εγγεγραμμένοι και ενεργοί χρήστες τετραπλασιάστηκαν, έναντι πρόβλεψης αύξησης 25%.",
      "Σταθεροποίησα τις μαζικές μεταφορτώσεις στο ArtVolt for Business και πρόσθεσα δεδομένα τοποθεσίας, βελτιώνοντας τα ερωτήματα, την ποιότητα δεδομένων και την αυτοεξυπηρέτηση των εκθετών.",
      "Αναβάθμισα το ArtVolt for Collectors, πρόσθεσα προσαρμοζόμενο UI έργων τέχνης, ανανέωσα τη ροή δωρεάν δοκιμής και συνεργάστηκα απευθείας με τελικούς χρήστες.",
      "Δημιούργησα αναφορές analytics που συνέβαλαν στην ανανέωση της συνεργασίας με την ArtAthina για ακόμη έναν χρόνο.",
      "Μια νέα ροή ειδήσεων στο CMS αύξησε το ποσοστό κλικ στα άρθρα μέσα στην εφαρμογή κατά 20%.",
    ],
    technologies: ["Flutter", "Dart", "Python", "Angular", "Firebase", "BigQuery", "Looker Studio"],
  },
  {
    company: "Woli Fintech",
    role: "Full-stack προγραμματιστής",
    period: "Απρ 2022 – Ιαν 2025",
    location: "Αθήνα",
    summary: "Τραπεζικά προϊόντα και εργαλεία χρηματοοικονομικής εκπαίδευσης για παιδιά, εφήβους και γονείς.",
    highlights: [
      "Ανέπτυξα το εσωτερικό dashboard διαχείρισης με Node.js, Flutter web, MySQL, ταυτοποίηση, δικαιώματα και διασυνδέσεις χρηματοοικονομικών και επικοινωνιακών υπηρεσιών.",
      "Έδωσα στην υποστήριξη πελατών τη δυνατότητα να τριπλασιάσει την απόδοσή της και στις ομάδες compliance και marketing εξειδικευμένα εργαλεία λειτουργίας.",
      "Κατασκεύασα το Woli Gift από την αρχή· το νέο προϊόν εσόδων χρησιμοποιήθηκε από περίπου το 40% των ενεργών χρηστών.",
      "Ανέπτυξα τη λειτουργία επιβράβευσης του Woli Education, διπλασιάζοντας τη συμμετοχή στις ηλικίες 8–12 και υποστηρίζοντας περισσότερες από 1.000 συναλλαγές επιβράβευσης.",
      "Ενοποίησα τους βασικούς δείκτες σε Looker Studio και BigQuery, μειώνοντας τον χρόνο προετοιμασίας επενδυτικών παρουσιάσεων και συμβάλλοντας στον σχεδιασμό δύο νέων συνδρομητικών προγραμμάτων.",
      "Ξεκίνησα το έργο end-to-end δοκιμών με Maestro για μεγαλύτερη σταθερότητα στις εκδόσεις.",
    ],
    technologies: ["Node.js", "Express", "Flutter", "React", "MySQL", "BigQuery", "Maestro"],
  },
  {
    company: "Khyria",
    role: "Backend προγραμματιστής (σύμβαση έργου)",
    period: "Ιουν 2022 – Ιουλ 2023",
    location: "ΗΠΑ / εξ αποστάσεως",
    summary: "Backend ανάπτυξη για ένα ψηφιακό εργαλείο υποστήριξης της υγείας στην εμμηνόπαυση.",
    highlights: [
      "Κατασκεύασα δυναμικές ειδοποιήσεις και εξατομικευμένη διανομή άρθρων με βάση δεδομένα ερωτηματολογίων και έξυπνων συσκευών.",
      "Συνεργάστηκα με τις ομάδες προϊόντος και marketing και με το ιατρικό συμβούλιο για τα διαστήματα αποστολής και τις μορφές περιεχομένου.",
      "Το σύστημα πέρασε τις εσωτερικές δοκιμές· η εταιρεία διέκοψε τη λειτουργία της πριν από τη δημόσια κυκλοφορία.",
    ],
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "TimescaleDB", "Redis", "OneSignal"],
  },
  {
    company: "GetItParts",
    role: "Full-stack προγραμματιστής και δημιουργός MVP",
    period: "Ιαν 2021 – Φεβ 2022",
    summary: "Ολοκληρωμένο MVP για marketplace ανταλλακτικών αυτοκινήτου και δίκτυο συνεργείων.",
    highlights: [
      "Κατασκεύασα μόνος μου την εφαρμογή mobile, τον ιστότοπο και το CMS σε περίπου έναν χρόνο.",
      "Σχεδίασα κατάλογο, λίστες επιθυμιών, πληρωμές μέσω Stripe, παρακολούθηση παραγγελιών και βάση περίπου 2,5 εκατομμυρίων εγγράφων στο Cloud Firestore.",
      "Το προϊόν έλαβε θετικά σχόλια από επενδυτές, αλλά δεν κυκλοφόρησε λόγω χρηματοδότησης και της συγκυρίας της πανδημίας.",
    ],
    technologies: ["Flutter", "Firebase", "Cloud Firestore", "Stripe"],
  },
];

const greekSkillGroups = [
  { title: "Ανάπτυξη προϊόντων", skills: ["TypeScript / JavaScript", "Node.js / Express", "NestJS", "Flutter / Dart", "React", "Angular", "Python", "Java", "REST", "gRPC", "Socket.io"] },
  { title: "Εφαρμοσμένη τεχνητή νοημοσύνη", skills: ["Αρχιτεκτονικές RAG", "Embeddings", "Διανυσματική αναζήτηση", "Qdrant", "LoRA fine-tuning", "Prompt engineering", "Amazon Bedrock", "HuggingFace", "ollama", "Ενσωμάτωση LLM", "Ανάλυση εγγράφων", "Whisper", "pyannote"] },
  { title: "Δεδομένα & ανάλυση προϊόντος", skills: ["PostgreSQL", "MySQL", "TimescaleDB", "Firestore", "MongoDB", "Redis", "BigQuery", "Google Analytics", "Looker Studio"] },
  { title: "Ποιότητα, cloud & παράδοση", skills: ["TDD", "Jest", "Mockito", "Maestro", "Docker", "GCP", "AWS", "Firebase", "GitHub / GitLab CI/CD", "Scrum", "Kanban", "Code review", "Pair programming"] },
] as const;

const greekCredentials = [
  { label: "Εκπαίδευση", value: "Πτυχίο Μηχανικού Υπολογιστών, Διεθνές Πανεπιστήμιο της Ελλάδος", meta: "2018–2022" },
  { label: "Πιστοποίηση", value: "Certified ScrumMaster®", meta: "Σε ισχύ έως τον Μάιο 2027" },
  { label: "Γλώσσες", value: "Ελληνικά και Αλβανικά (μητρικές), Αγγλικά (άριστη γνώση, ECPE C2)", meta: "" },
] as const;

export function getExperienceContent(locale: Locale) {
  return locale === "el"
    ? { bio: greekBio, experiences: greekExperiences, skillGroups: greekSkillGroups, credentials: greekCredentials }
    : { bio, experiences, skillGroups, credentials };
}
