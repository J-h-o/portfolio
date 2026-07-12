export const locales = ["en", "el"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeMetadata = {
  en: { label: "English", shortLabel: "EN", languageTag: "en-GB" },
  el: { label: "Ελληνικά", shortLabel: "ΕΛ", languageTag: "el-GR" },
} as const;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizePath(locale: Locale, path = "/") {
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

export function stripLocale(pathname: string) {
  const segments = pathname.split("/");
  if (isLocale(segments[1] ?? "")) segments.splice(1, 1);
  const path = segments.join("/");
  return path || "/";
}

export function localizedAlternates(path: string) {
  return {
    "en-GB": localizePath("en", path),
    "el-GR": localizePath("el", path),
    "x-default": localizePath(defaultLocale, path),
  };
}
