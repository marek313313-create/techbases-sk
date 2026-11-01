export function SectionIntro({
  index,
  eyebrow,
  title,
  lead,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="v2-eyebrow">
        <span className="v2-eyebrow-index">{index}</span>
        {eyebrow}
      </div>
      <h2 className="v2-h2 mt-3 sm:mt-4">{title}</h2>
      {lead ? <p className="v2-lead mt-4 sm:mt-5">{lead}</p> : null}
    </div>
  );
}
