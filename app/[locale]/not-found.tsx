import { ButtonLink } from "@/components/ui/button-link";
import { getDictionary } from "@/content/dictionary";
import { localizePath, type Locale } from "@/content/i18n";

function NotFoundCopy({ locale }: { locale: Locale }) {
  const copy = getDictionary(locale).notFound;
  return (
    <div className={`not-found-copy lang-${locale}`}>
      <p className="kicker">{copy.kicker}</p>
      <h1 className="page-title">{copy.title}</h1>
      <p className="page-lede">{copy.description}</p>
      <div className="cluster" style={{ justifyContent: "center", marginTop: 28 }}><ButtonLink href={localizePath(locale)} variant="primary">{copy.action}</ButtonLink></div>
    </div>
  );
}

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <NotFoundCopy locale="en" />
        <NotFoundCopy locale="el" />
      </div>
    </section>
  );
}
