type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
};

export function SectionHeading({ index, eyebrow, title, description, id }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-heading-main">
        <span className="section-index">{index}</span>
        <div>
          <p className="eyebrow section-eyebrow">{eyebrow}</p>
          <h2 id={id}>{title}</h2>
        </div>
      </div>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}
