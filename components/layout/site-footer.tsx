import Link from "next/link";
import { getSiteContent, siteConfig } from "@/content/site";
import { getDictionary } from "@/content/dictionary";
import { localizePath, type Locale } from "@/content/i18n";
import { BrandLogo } from "@/components/ui/brand-logo";

export function SiteFooter({ locale }: { locale: Locale }) {
  const { navigation } = getSiteContent(locale);
  const dictionary = getDictionary(locale);
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <BrandLogo locale={locale} inverse />
            <p className="footer-meta">{dictionary.footer.meta}</p>
          </div>
          <nav className="footer-nav" aria-label={locale === "el" ? "Πλοήγηση υποσέλιδου" : "Footer navigation"}>
            {navigation.map((item) => <Link href={localizePath(locale, item.href)} key={item.href}>{item.label}</Link>)}
            <a href={siteConfig.links.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>
            <a href={siteConfig.links.github} rel="noreferrer" target="_blank">GitHub</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Allushi</span>
          <span>{dictionary.footer.builtBy}</span>
        </div>
      </div>
    </footer>
  );
}
