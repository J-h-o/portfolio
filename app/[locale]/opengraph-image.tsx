import { ImageResponse } from "next/og";
import { isLocale } from "@/content/i18n";
import { getDictionary } from "@/content/dictionary";

export const alt = "Allushi — Software, AI and Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validLocale = isLocale(locale) ? locale : "en";
  const copy = getDictionary(validLocale).home;
  const greek = validLocale === "el";
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0a0c0e", color: "white", padding: "72px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", color: "#2ece8b", fontSize: 24, letterSpacing: 3, textTransform: "uppercase" }}>ALLUSHI • {copy.kicker.toUpperCase()}</div>
      <div style={{ display: "flex", maxWidth: 980, fontSize: greek ? 68 : 78, fontWeight: 700, lineHeight: 1.03 }}>{copy.title}</div>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#a2abb5", fontSize: 22 }}><span>Joanis Allushi</span><span>{greek ? "Θεσσαλονίκη • Παγκοσμίως" : "Thessaloniki • Worldwide"}</span></div>
    </div>,
    size,
  );
}
