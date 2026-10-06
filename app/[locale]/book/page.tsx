import { CalendarDays, Clock3, Video } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookingEmbed } from "@/components/booking-embed";
import { getDictionary } from "@/content/dictionary";
import { isLocale } from "@/content/i18n";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getDictionary(locale).book;
  return createMetadata({ title: copy.metadataTitle, description: copy.metadataDescription, path: "/book", locale });
}

export default async function BookPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getDictionary(locale).book;

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="kicker">{copy.kicker}</p>
          <h1 className="page-title">{copy.title}</h1>
          <p className="page-lede">{copy.lede}</p>
          <div className="cluster" style={{ marginTop: 26 }}>
            <span className="tag"><CalendarDays aria-hidden="true" size={14} /> {copy.tags[0]}</span>
            <span className="tag"><Clock3 aria-hidden="true" size={14} /> {copy.tags[1]}</span>
            <span className="tag"><Video aria-hidden="true" size={14} /> {copy.tags[2]}</span>
          </div>
        </div>
      </header>
      <section className="section section-subtle">
        <div className="container">
          <div className="booking-shell">
            <BookingEmbed locale={locale} title={copy.metadataTitle} />
          </div>
        </div>
      </section>
    </>
  );
}
