import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { navigation, services } from "@/content/site";
import { getProject, getProjects, projects } from "@/content/projects";
import { getSiteContent } from "@/content/site";
import { getExperienceContent } from "@/content/experience";
import { getDictionary } from "@/content/dictionary";
import { locales, localizePath } from "@/content/i18n";
import { createMailtoUrl, validateContactPayload } from "@/lib/contact";
import { normalizeCalLink, parseCalLink } from "@/lib/cal";

describe("published content", () => {
  it("keeps routes and case-study slugs unique", () => {
    assert.equal(new Set(navigation.map((item) => item.href)).size, navigation.length);
    assert.equal(new Set(projects.map((project) => project.slug)).size, projects.length);
  });

  it("resolves every project by slug", () => {
    for (const project of projects) assert.equal(getProject(project.slug), project);
  });

  it("does not publish unresolved FODSA content", () => {
    assert.doesNotMatch(JSON.stringify({ projects, services }), /FODSA|ΦΟΔΣΑ/i);
  });

  it("provides complete English and Greek content with matching case-study slugs", () => {
    const englishSlugs = getProjects("en").map((project) => project.slug);
    const greekSlugs = getProjects("el").map((project) => project.slug);
    assert.deepEqual(greekSlugs, englishSlugs);

    for (const locale of locales) {
      assert.equal(getSiteContent(locale).services.length, 4);
      assert.equal(getExperienceContent(locale).experiences.length, 5);
      assert.equal(getProjects(locale).length, 5);
      assert.ok(getDictionary(locale).home.title.length > 20);
    }
    assert.match(getDictionary("el").home.title, /[Α-ω]/);
    assert.notEqual(getDictionary("el").home.title, getDictionary("en").home.title);
  });

  it("prefixes every public path with its locale", () => {
    assert.equal(localizePath("en", "/portfolio"), "/en/portfolio");
    assert.equal(localizePath("el", "/portfolio"), "/el/portfolio");
    assert.equal(localizePath("el"), "/el");
  });

  it("keeps the contact fallback in the visitor's language", () => {
    const payload = validateContactPayload({
      name: "Δοκιμή Χρήστη",
      email: "test@example.com",
      projectType: "Εφαρμογή web ή mobile",
      brief: "Χρειαζόμαστε μια νέα εφαρμογή για την ομάδα μας.",
      nda: true,
      locale: "el",
    });
    assert.ok(payload);
    assert.match(decodeURIComponent(createMailtoUrl(payload)), /Νέο αίτημα έργου/);
  });

  it("accepts safe Cal.com event URLs and paths", () => {
    assert.equal(normalizeCalLink("https://cal.com/john/intro-call?date=2026-07-13"), "john/intro-call");
    assert.equal(normalizeCalLink("/john/intro-call/"), "john/intro-call");
    assert.deepEqual(parseCalLink("https://cal.eu/joanisallushi.com/get-to-know"), {
      calLink: "joanisallushi.com/get-to-know",
      calOrigin: "https://cal.eu",
      embedJsUrl: "https://cal.eu/embed/embed.js",
    });
    assert.equal(normalizeCalLink("https://example.com/not-cal"), undefined);
  });
});
