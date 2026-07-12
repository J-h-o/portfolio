import type { CaseStudy } from "@/content/types";
import type { Locale } from "@/content/i18n";

export const projects: readonly CaseStudy[] = [
  {
    slug: "artvolt-platform-turnaround",
    title: "Turning around the ArtVolt product ecosystem",
    client: "ArtVolt",
    sector: "ArtTech • Mobile • Analytics",
    period: "2024 – present",
    summary: "Modernising a two-sided art platform across its consumer app, exhibitor tools, collector experience, CMS, and analytics.",
    challenge: "The main Flutter codebase was roughly two years out of date, with critical bugs and a growing product roadmap across multiple audiences.",
    approach: [
      "Upgraded Flutter and the package ecosystem, resolved critical issues, and improved navigation.",
      "Added location-based artwork scanning, notifications, remote configuration, VIP event seat booking, video, and an RSS/web-scraping newsfeed.",
      "Stabilised exhibitor batch uploads and added location metadata to improve querying and self-service.",
      "Defined event and VIP KPIs with the CEO and built reporting in Looker Studio.",
    ],
    outcomes: [
      "Registered and active users grew fourfold against a 25% forecast.",
      "ArtAthina renewed its contract for another year, citing the depth of the analytics insights.",
      "The Angular CMS news workflow increased in-app article click rate by 20%.",
    ],
    metrics: [
      { value: "4×", label: "registered and active users" },
      { value: "+20%", label: "article click rate" },
      { value: "1 year", label: "ArtAthina contract renewal" },
    ],
    technologies: ["Flutter", "Dart", "Python", "Angular", "Firebase", "Clarifai", "BigQuery", "Looker Studio"],
    featured: true,
  },
  {
    slug: "woli-administration-dashboard",
    title: "An operations platform for Woli Fintech",
    client: "Woli Fintech",
    sector: "FinTech • Internal platform",
    period: "2022 – 2025",
    summary: "A full-stack administration system giving compliance, support, and marketing teams purpose-built operational tools.",
    challenge: "A growing youth-banking product needed a secure internal platform for fraud prevention, customer support, permissions, and campaigns.",
    approach: [
      "Owned full-stack delivery within a three-developer team using Node.js/Express, Flutter web, and MySQL.",
      "Designed the MySQL schema and implemented two-factor authentication, Google Sign-In, and role-based permissions.",
      "Integrated Paynetics, Twilio, and SendGrid into the operational workflows.",
    ],
    outcomes: [
      "Enabled the compliance team to support fraud-prevention work.",
      "Customer support tripled its throughput.",
      "Marketing could run campaigns without application redeployments.",
    ],
    metrics: [{ value: "3×", label: "customer-support throughput" }],
    technologies: ["Node.js", "Express", "Flutter web", "MySQL", "Paynetics", "Twilio", "SendGrid"],
    featured: true,
  },
  {
    slug: "woli-gift",
    title: "Launching a new revenue stream with Woli Gift",
    client: "Woli Fintech",
    sector: "FinTech • Web product",
    period: "2022 – 2025",
    summary: "A focused three-step gifting web application built from scratch for the Woli customer base.",
    challenge: "Woli needed a simple web experience that could turn gifting into a new product and revenue stream.",
    approach: [
      "Built the application from scratch in React and Material UI.",
      "Structured the product as a concise three-step gifting flow.",
      "Integrated the experience with Woli's existing product ecosystem.",
    ],
    outcomes: ["Created a new revenue stream used by roughly 40% of Woli's active user base."],
    metrics: [{ value: "~40%", label: "of active users used Woli Gift" }],
    technologies: ["React", "Material UI", "TypeScript"],
    featured: true,
  },
  {
    slug: "getitparts-mvp",
    title: "Solo delivery of the GetItParts MVP",
    client: "GetItParts",
    sector: "Automotive • Marketplace",
    period: "2021 – 2022",
    summary: "A mobile app, website, and CMS for a car-parts marketplace and mechanic-network concept.",
    challenge: "The concept needed an investable end-to-end product covering discovery, commerce, fulfilment visibility, and content operations.",
    approach: [
      "Solo-built the MVP over roughly one year.",
      "Implemented car selection, catalogue, wishlists, Stripe checkout, order tracking, and a basic CRM.",
      "Designed a Cloud Firestore data model containing roughly 2.5 million documents.",
    ],
    outcomes: [
      "Delivered a functioning end-to-end MVP for investor pitches.",
      "Investor feedback was positive; the product did not launch because of funding and pandemic timing.",
    ],
    metrics: [
      { value: "~2.5M", label: "Cloud Firestore documents" },
      { value: "~1 year", label: "solo MVP delivery" },
    ],
    technologies: ["Flutter", "Firebase", "Cloud Firestore", "Stripe"],
    featured: false,
  },
  {
    slug: "khyria-personalised-content",
    title: "Personalised content delivery for Khyria",
    client: "Khyria",
    sector: "FemTech • MedTech",
    period: "2022 – 2023",
    summary: "A backend system for personalised notifications and multimedia health content driven by questionnaire and smart-device data.",
    challenge: "Health content needed to be personalised and scheduled carefully so that users received relevant support without being overwhelmed.",
    approach: [
      "Built dynamic notification and personalised article-delivery services across audio, video, and text.",
      "Used questionnaire and smart-device data to inform delivery.",
      "Worked with product, marketing, and the medical advisory board, supported by unit and end-to-end tests.",
    ],
    outcomes: ["The system passed internal testing but did not ship publicly because the company became defunct."],
    metrics: [],
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "TimescaleDB", "Redis", "OneSignal"],
    featured: false,
  },
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);

const greekProjects: readonly CaseStudy[] = [
  {
    slug: "artvolt-platform-turnaround",
    title: "Μετασχηματισμός του οικοσυστήματος προϊόντων ArtVolt",
    client: "ArtVolt",
    sector: "ArtTech • Mobile • Analytics",
    period: "2024 – σήμερα",
    summary: "Εκσυγχρονισμός μιας διμερούς πλατφόρμας τέχνης: εφαρμογή καταναλωτών, εργαλεία εκθετών, εμπειρία συλλεκτών, CMS και analytics.",
    challenge: "Η βασική εφαρμογή Flutter ήταν περίπου δύο χρόνια πίσω σε εκδόσεις, με κρίσιμα σφάλματα και έναν συνεχώς διευρυνόμενο οδικό χάρτη για διαφορετικές ομάδες χρηστών.",
    approach: [
      "Αναβάθμισα το Flutter και όλο το οικοσύστημα πακέτων, διόρθωσα κρίσιμα προβλήματα και βελτίωσα την πλοήγηση.",
      "Πρόσθεσα σάρωση έργων τέχνης βάσει τοποθεσίας, ειδοποιήσεις, απομακρυσμένες ρυθμίσεις, κρατήσεις θέσεων VIP, βίντεο και ροή ειδήσεων από RSS και web scraping.",
      "Σταθεροποίησα τις μαζικές μεταφορτώσεις των εκθετών και πρόσθεσα δεδομένα τοποθεσίας, βελτιώνοντας τα ερωτήματα και την αυτοεξυπηρέτηση.",
      "Όρισα δείκτες για εκδηλώσεις και VIP εμπειρίες μαζί με τον CEO και δημιούργησα αναφορές στο Looker Studio.",
    ],
    outcomes: [
      "Οι εγγεγραμμένοι και ενεργοί χρήστες τετραπλασιάστηκαν, έναντι πρόβλεψης αύξησης 25%.",
      "Η ArtAthina ανανέωσε τη συνεργασία της για ακόμη έναν χρόνο, αναφέροντας το βάθος των αναλύσεων ως σημαντικό παράγοντα.",
      "Η νέα ροή ειδήσεων στο Angular CMS αύξησε το ποσοστό κλικ στα άρθρα μέσα στην εφαρμογή κατά 20%.",
    ],
    metrics: [
      { value: "4×", label: "εγγεγραμμένοι και ενεργοί χρήστες" },
      { value: "+20%", label: "ποσοστό κλικ στα άρθρα" },
      { value: "1 έτος", label: "ανανέωση συνεργασίας ArtAthina" },
    ],
    technologies: ["Flutter", "Dart", "Python", "Angular", "Firebase", "Clarifai", "BigQuery", "Looker Studio"],
    featured: true,
  },
  {
    slug: "woli-administration-dashboard",
    title: "Πλατφόρμα λειτουργίας για τη Woli Fintech",
    client: "Woli Fintech",
    sector: "FinTech • Εσωτερική πλατφόρμα",
    period: "2022 – 2025",
    summary: "Ένα full-stack σύστημα διαχείρισης με εξειδικευμένα εργαλεία για τις ομάδες compliance, υποστήριξης και marketing.",
    challenge: "Ένα αναπτυσσόμενο τραπεζικό προϊόν για νέους χρειαζόταν ασφαλή εσωτερική πλατφόρμα για πρόληψη απάτης, εξυπηρέτηση πελατών, δικαιώματα πρόσβασης και καμπάνιες.",
    approach: [
      "Είχα την ευθύνη της full-stack υλοποίησης σε ομάδα τριών προγραμματιστών, με Node.js/Express, Flutter web και MySQL.",
      "Σχεδίασα το σχήμα MySQL και υλοποίησα ταυτοποίηση δύο παραγόντων, Google Sign-In και δικαιώματα βάσει ρόλου.",
      "Ενσωμάτωσα Paynetics, Twilio και SendGrid στις λειτουργικές ροές.",
    ],
    outcomes: [
      "Έδωσα στην ομάδα compliance τα εργαλεία που χρειαζόταν για την πρόληψη απάτης.",
      "Η υποστήριξη πελατών τριπλασίασε την απόδοσή της.",
      "Η ομάδα marketing μπορούσε πλέον να εκτελεί καμπάνιες χωρίς νέα έκδοση της εφαρμογής.",
    ],
    metrics: [{ value: "3×", label: "απόδοση υποστήριξης πελατών" }],
    technologies: ["Node.js", "Express", "Flutter web", "MySQL", "Paynetics", "Twilio", "SendGrid"],
    featured: true,
  },
  {
    slug: "woli-gift",
    title: "Νέα πηγή εσόδων με το Woli Gift",
    client: "Woli Fintech",
    sector: "FinTech • Προϊόν web",
    period: "2022 – 2025",
    summary: "Μια στοχευμένη εφαρμογή web τριών βημάτων για αποστολή δώρων, κατασκευασμένη από την αρχή για τη βάση χρηστών της Woli.",
    challenge: "Η Woli χρειαζόταν μια απλή εμπειρία web που θα μετέτρεπε την αποστολή δώρων σε νέο προϊόν και νέα πηγή εσόδων.",
    approach: [
      "Κατασκεύασα την εφαρμογή από την αρχή με React και Material UI.",
      "Οργάνωσα το προϊόν σε μια σύντομη και ξεκάθαρη ροή τριών βημάτων.",
      "Σύνδεσα την εμπειρία με το υπάρχον οικοσύστημα προϊόντων της Woli.",
    ],
    outcomes: ["Δημιουργήθηκε νέα πηγή εσόδων που χρησιμοποιήθηκε από περίπου το 40% των ενεργών χρηστών της Woli."],
    metrics: [{ value: "~40%", label: "των ενεργών χρηστών χρησιμοποίησε το Woli Gift" }],
    technologies: ["React", "Material UI", "TypeScript"],
    featured: true,
  },
  {
    slug: "getitparts-mvp",
    title: "Αυτόνομη υλοποίηση του MVP GetItParts",
    client: "GetItParts",
    sector: "Αυτοκίνηση • Marketplace",
    period: "2021 – 2022",
    summary: "Εφαρμογή mobile, ιστότοπος και CMS για marketplace ανταλλακτικών αυτοκινήτου και δίκτυο συνεργείων.",
    challenge: "Η ιδέα χρειαζόταν ένα ολοκληρωμένο προϊόν, κατάλληλο για παρουσίαση σε επενδυτές, που να καλύπτει αναζήτηση, αγορές, παρακολούθηση παραγγελιών και διαχείριση περιεχομένου.",
    approach: [
      "Κατασκεύασα μόνος μου το MVP σε περίπου έναν χρόνο.",
      "Υλοποίησα επιλογή αυτοκινήτου, κατάλογο, λίστες επιθυμιών, πληρωμές Stripe, παρακολούθηση παραγγελιών και βασικό CRM.",
      "Σχεδίασα μοντέλο δεδομένων Cloud Firestore με περίπου 2,5 εκατομμύρια έγγραφα.",
    ],
    outcomes: [
      "Παρέδωσα ένα λειτουργικό, ολοκληρωμένο MVP για παρουσιάσεις σε επενδυτές.",
      "Τα σχόλια των επενδυτών ήταν θετικά· το προϊόν δεν κυκλοφόρησε λόγω χρηματοδότησης και της συγκυρίας της πανδημίας.",
    ],
    metrics: [
      { value: "~2,5 εκ.", label: "έγγραφα στο Cloud Firestore" },
      { value: "~1 έτος", label: "αυτόνομη υλοποίηση MVP" },
    ],
    technologies: ["Flutter", "Firebase", "Cloud Firestore", "Stripe"],
    featured: false,
  },
  {
    slug: "khyria-personalised-content",
    title: "Εξατομικευμένη διανομή περιεχομένου για την Khyria",
    client: "Khyria",
    sector: "FemTech • MedTech",
    period: "2022 – 2023",
    summary: "Backend σύστημα εξατομικευμένων ειδοποιήσεων και πολυμεσικού περιεχομένου υγείας, βασισμένο σε δεδομένα ερωτηματολογίων και έξυπνων συσκευών.",
    challenge: "Το περιεχόμενο υγείας έπρεπε να εξατομικεύεται και να προγραμματίζεται προσεκτικά, ώστε οι χρήστες να λαμβάνουν σχετική υποστήριξη χωρίς να κατακλύζονται από πληροφορίες.",
    approach: [
      "Κατασκεύασα υπηρεσίες δυναμικών ειδοποιήσεων και εξατομικευμένης διανομής άρθρων σε ήχο, βίντεο και κείμενο.",
      "Χρησιμοποίησα δεδομένα ερωτηματολογίων και έξυπνων συσκευών για την επιλογή και τον χρονισμό του περιεχομένου.",
      "Συνεργάστηκα με τις ομάδες προϊόντος και marketing και με το ιατρικό συμβούλιο, με κάλυψη από unit και end-to-end δοκιμές.",
    ],
    outcomes: ["Το σύστημα πέρασε τις εσωτερικές δοκιμές, αλλά δεν κυκλοφόρησε δημόσια επειδή η εταιρεία διέκοψε τη λειτουργία της."],
    metrics: [],
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "TimescaleDB", "Redis", "OneSignal"],
    featured: false,
  },
];

export function getProjects(locale: Locale) {
  return locale === "el" ? greekProjects : projects;
}

export function getLocalizedProject(locale: Locale, slug: string) {
  return getProjects(locale).find((project) => project.slug === slug);
}

export function getLocalizedFeaturedProjects(locale: Locale) {
  return getProjects(locale).filter((project) => project.featured);
}
