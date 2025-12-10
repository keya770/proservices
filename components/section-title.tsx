type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

const SectionTitle = ({ eyebrow, title, subtitle, align = "left" }: Props) => {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  const widthClass = align === "center" ? "mx-auto" : "";
  return (
    <div className={`flex flex-col gap-3 ${alignment} max-w-3xl ${widthClass}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 text-[var(--color-gold)]">
          <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-[var(--color-gold)] to-[#f7c14f]" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-navy)] opacity-70">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="balanced text-2xl font-semibold leading-snug text-[var(--color-navy)] sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="balanced text-sm leading-relaxed text-slate-600 sm:text-base">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
