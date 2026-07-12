"use client";

import { type FormEvent, useState } from "react";
import { getDictionary } from "@/content/dictionary";
import type { Locale } from "@/content/i18n";

type SubmissionState = { tone: "idle" | "success" | "error"; message: string };

export function ContactForm({ locale }: { locale: Locale }) {
  const copy = getDictionary(locale).contact.form;
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmissionState>({ tone: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ tone: "idle", message: "" });
    const form = new FormData(event.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      projectType: form.get("projectType"),
      brief: form.get("brief"),
      nda: form.get("nda") === "on",
      company: form.get("company"),
      locale,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string; mailtoUrl?: string };

      if (response.ok) {
        event.currentTarget.reset();
        setStatus({ tone: "success", message: copy.sent });
      } else if (result.mailtoUrl) {
        window.location.href = result.mailtoUrl;
        setStatus({ tone: "success", message: copy.emailOpened });
      } else {
        setStatus({ tone: "error", message: copy.failed });
      }
    } catch {
      setStatus({ tone: "error", message: copy.failed });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input className="honeypot" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">{copy.name}</label>
          <input id="name" name="name" autoComplete="name" minLength={2} maxLength={100} required />
        </div>
        <div className="field">
          <label htmlFor="email">{copy.workEmail}</label>
          <input id="email" name="email" type="email" autoComplete="email" maxLength={200} required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="projectType">{copy.projectType}</label>
        <select id="projectType" name="projectType" defaultValue="" required>
          <option value="" disabled>{copy.choose}</option>
          {copy.projectTypes.map((projectType) => <option value={projectType} key={projectType}>{projectType}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="brief">{copy.brief}</label>
        <textarea id="brief" name="brief" minLength={20} maxLength={5000} placeholder={copy.briefPlaceholder} required />
      </div>
      <label className="checkbox-row" htmlFor="nda">
        <input id="nda" name="nda" type="checkbox" />
        <span>{copy.nda}</span>
      </label>
      <div className="form-actions">
        <button className="button button-accent" type="submit" disabled={submitting}>
          {submitting ? copy.sending : copy.send}
        </button>
        {status.message ? <p className={`form-status ${status.tone}`} role="status">{status.message}</p> : null}
      </div>
    </form>
  );
}
