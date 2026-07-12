"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeMetadata, locales, localizePath, stripLocale, type Locale } from "@/content/i18n";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const path = stripLocale(pathname);

  return (
    <div className="language-switcher" aria-label={locale === "el" ? "Επιλογή γλώσσας" : "Language selection"} role="group">
      {locales.map((option) => (
        <Link
          className={option === locale ? "active" : ""}
          href={localizePath(option, path)}
          hrefLang={localeMetadata[option].languageTag}
          aria-current={option === locale ? "page" : undefined}
          key={option}
        >
          {localeMetadata[option].shortLabel}
        </Link>
      ))}
    </div>
  );
}
