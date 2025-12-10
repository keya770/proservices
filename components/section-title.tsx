type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

const SectionTitle = ({ eyebrow, title, subtitle, align = "left" }: Props) => {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow && (
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl font-semibold text-[var(--color-navy)] sm:text-3xl">{title}</h2>
      {subtitle && <p className="text-sm text-slate-600 sm:text-base">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
