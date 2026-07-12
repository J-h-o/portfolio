import { Menu } from "lucide-react";
import Link from "next/link";
import { getSiteContent } from "@/content/site";
import { getDictionary } from "@/content/dictionary";
import { localizePath, type Locale } from "@/content/i18n";
import { BrandLogo } from "@/components/ui/brand-logo";
import { ButtonLink } from "@/components/ui/button-link";
import { LanguageSwitcher } from "@/components/language-switcher";

export function SiteHeader({ locale }: { locale: Locale }) {
  const { navigation } = getSiteContent(locale);
  const dictionary = getDictionary(locale);
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <BrandLogo locale={locale} />
        <nav className="desktop-nav" aria-label={locale === "el" ? "Κύρια πλοήγηση" : "Primary navigation"}>
          {navigation.map((item) => <Link className="nav-link" href={localizePath(locale, item.href)} key={item.href}>{item.label}</Link>)}
          <LanguageSwitcher locale={locale} />
          <ButtonLink href={localizePath(locale, "/book")} variant="accent">{dictionary.common.bookCall}</ButtonLink>
        </nav>
        <details className="mobile-nav">
          <summary aria-label={locale === "el" ? "Άνοιγμα πλοήγησης" : "Open navigation"}><Menu aria-hidden="true" size={22} /></summary>
          <nav className="mobile-nav-panel" aria-label={locale === "el" ? "Πλοήγηση για κινητά" : "Mobile navigation"}>
            {navigation.map((item) => <Link className="nav-link" href={localizePath(locale, item.href)} key={item.href}>{item.label}</Link>)}
            <LanguageSwitcher locale={locale} />
            <ButtonLink href={localizePath(locale, "/book")} variant="accent">{dictionary.common.bookCall}</ButtonLink>
          </nav>
        </details>
      </div>
    </header>
  );
}
