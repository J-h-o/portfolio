import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { getDictionary } from "@/content/dictionary";
import { localizePath, type Locale } from "@/content/i18n";

export function CallToAction({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>{dictionary.cta.title}</h2>
          <p>{dictionary.cta.description}</p>
        </div>
        <ButtonLink href={localizePath(locale, "/book")} variant="accent">{dictionary.common.bookCall} <ArrowRight aria-hidden="true" size={16} /></ButtonLink>
      </div>
    </section>
  );
}
