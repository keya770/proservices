import Link from "next/link";

type CTA = { label: string; href: string; variant?: "primary" | "ghost" };

type Props = {
  title: string;
  subtitle: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  highlights?: string[];
};

const Hero = ({ title, subtitle, primaryCta, secondaryCta, highlights = [] }: Props) => {
  return (
    <section className="relative overflow-hidden bg-[var(--color-navy)] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1120] via-[#0e1b34] to-[#0b1120] opacity-90" />
      <div className="absolute left-20 top-10 hidden h-72 w-72 rounded-full bg-[var(--color-gold)]/10 blur-3xl lg:block" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:px-8 lg:py-20">
        <div className="flex-1 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
            Dubai | UAE
          </p>
          <h1 className="balanced max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="balanced max-w-2xl text-base text-slate-200 sm:text-lg">{subtitle}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href={primaryCta.href}
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-gold)] px-5 py-3 text-sm font-semibold text-[var(--color-navy)] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/50 sm:w-auto"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>

        {highlights.length > 0 && (
          <div className="flex-1">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 backdrop-blur sm:p-7">
              <div className="text-sm font-semibold text-[var(--color-gold)]">Why clients choose us</div>
              <div className="mt-4 space-y-3 text-sm text-slate-100">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/5"
                  >
                    <span className="mt-0.5 text-[var(--color-gold)]">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
