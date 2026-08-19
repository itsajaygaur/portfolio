/* The repeated masthead unit. SectionRail sits in the marginalia column,
   SectionTitle in the content column. Keeping them here means the
   aria-labelledby contract is identical across every section. */

export function SectionRail({ index, label }: { index: string; label: string }) {
  return (
    <div className="section__rail">
      <p className="section__index" aria-hidden="true">
        ({index})
      </p>
      <p className="label">{label}</p>
    </div>
  );
}

export function SectionTitle({
  title,
  titleId,
  sub,
}: {
  title: string;
  titleId: string;
  sub?: string;
}) {
  return (
    <div className="section__title" data-reveal>
      <h2 id={titleId}>{title}</h2>
      {sub ? <p>{sub}</p> : null}
    </div>
  );
}
