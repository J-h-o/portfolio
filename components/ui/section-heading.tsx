export function SectionHeading({
  kicker,
  title,
  description,
  inverse = false,
}: {
  kicker: string;
  title: string;
  description?: string;
  inverse?: boolean;
}) {
  return (
    <div className={`section-heading${inverse ? " inverse" : ""}`}>
      <p className={`kicker${inverse ? " kicker-inverse" : ""}`}>{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {description ? <p className={`section-copy${inverse ? " section-copy-inverse" : ""}`}>{description}</p> : null}
    </div>
  );
}
