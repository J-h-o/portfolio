import { ImageResponse } from "next/og";
import { getLocalizedProject } from "@/content/projects";
import { isLocale } from "@/content/i18n";

export const alt = "Allushi software case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const validLocale = isLocale(locale) ? locale : "en";
  const project = getLocalizedProject(validLocale, slug);
  const greek = validLocale === "el";
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0a0c0e", color: "white", padding: "72px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", color: "#2ece8b", fontSize: 24, letterSpacing: 3, textTransform: "uppercase" }}>ALLUSHI • {greek ? "ΜΕΛΕΤΗ ΠΕΡΙΠΤΩΣΗΣ" : "CASE STUDY"}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", maxWidth: 1000, fontSize: 70, fontWeight: 700, lineHeight: 1.05 }}>{project?.title ?? (greek ? "Μελέτη περίπτωσης λογισμικού" : "Software case study")}</div>
        <div style={{ display: "flex", color: "#a2abb5", fontSize: 24 }}>{project?.sector ?? "Software • AI • Systems"}</div>
      </div>
      <div style={{ display: "flex", color: "#78828e", fontSize: 22 }}>joanisallushi.com</div>
    </div>,
    size,
  );
}
