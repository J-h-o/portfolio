import { siteConfig } from "@/content/site";
import { isLocale, type Locale } from "@/content/i18n";

export type ContactPayload = {
  name: string;
  email: string;
  projectType: string;
  brief: string;
  nda: boolean;
  company?: string;
  locale: Locale;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(value: unknown): ContactPayload | null {
  if (!value || typeof value !== "object") return null;
  const payload = value as Record<string, unknown>;
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const projectType = typeof payload.projectType === "string" ? payload.projectType.trim() : "";
  const brief = typeof payload.brief === "string" ? payload.brief.trim() : "";
  const company = typeof payload.company === "string" ? payload.company.trim() : "";
  const locale = typeof payload.locale === "string" && isLocale(payload.locale) ? payload.locale : "en";

  if (name.length < 2 || name.length > 100) return null;
  if (!emailPattern.test(email) || email.length > 200) return null;
  if (projectType.length < 2 || projectType.length > 100) return null;
  if (brief.length < 20 || brief.length > 5000) return null;

  return { name, email, projectType, brief, nda: payload.nda === true, company, locale };
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

export function createMailtoUrl(payload: ContactPayload) {
  const greek = payload.locale === "el";
  const subject = greek ? `Νέο αίτημα έργου: ${payload.projectType}` : `Project enquiry: ${payload.projectType}`;
  const body = [
    `${greek ? "Όνομα" : "Name"}: ${payload.name}`,
    `Email: ${payload.email}`,
    `${greek ? "NDA πριν τη συζήτηση" : "NDA first"}: ${payload.nda ? (greek ? "Ναι" : "Yes") : (greek ? "Όχι" : "No")}`,
    "",
    payload.brief,
  ].join("\n");
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function sendContactEmail(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { delivered: false as const, reason: "not_configured" as const };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL ?? "Allushi Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL ?? siteConfig.email],
      replyTo: payload.email,
      subject: `${payload.locale === "el" ? "Αίτημα από τον ιστότοπο" : "Website enquiry"} — ${payload.projectType}`,
      html: payload.locale === "el"
        ? `<h1>Νέο αίτημα έργου</h1><p><strong>Όνομα:</strong> ${escapeHtml(payload.name)}</p><p><strong>Email:</strong> ${escapeHtml(payload.email)}</p><p><strong>Τύπος έργου:</strong> ${escapeHtml(payload.projectType)}</p><p><strong>NDA πριν τη συζήτηση:</strong> ${payload.nda ? "Ναι" : "Όχι"}</p><p><strong>Περιγραφή:</strong></p><p>${escapeHtml(payload.brief).replace(/\n/g, "<br>")}</p>`
        : `<h1>New project enquiry</h1><p><strong>Name:</strong> ${escapeHtml(payload.name)}</p><p><strong>Email:</strong> ${escapeHtml(payload.email)}</p><p><strong>Project type:</strong> ${escapeHtml(payload.projectType)}</p><p><strong>NDA first:</strong> ${payload.nda ? "Yes" : "No"}</p><p><strong>Brief:</strong></p><p>${escapeHtml(payload.brief).replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend request failed with status ${response.status}`);
  }

  return { delivered: true as const };
}
