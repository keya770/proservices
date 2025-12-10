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
      <div className="absolute inset-0 bg-gradient-to-br from-[#040915] via-[#0d1833] to-[#040915]" />
      <div className="absolute left-10 top-0 h-64 w-64 rounded-full bg-[var(--color-gold)]/20 blur-3xl sm:left-24 sm:h-80 sm:w-80" />
      <div className="absolute right-[-10%] top-[-30%] h-[420px] w-[420px] rounded-full bg-[#4c6fff]/10 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_24%,rgba(255,255,255,0.08)_50%,rgba(255,255,255,0)_75%)] opacity-30" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-8 lg:py-24">
        <div className="flex-1 space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)] ring-1 ring-white/10 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[var(--color-gold)]" />
            Dubai • UAE • GCC
          </div>
          <h1 className="balanced max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            <span className="text-white/80">{title}</span>
            <span className="block bg-gradient-to-r from-[var(--color-gold)] via-[#ffd46d] to-white bg-clip-text text-transparent">
              Premium PRO, Visa, and Business Setup solutions for ambitious teams.
            </span>
          </h1>
          <p className="balanced max-w-2xl text-base text-slate-200 sm:text-lg">{subtitle}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href={primaryCta.href}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-gold)] via-[#f7c14f] to-[#ffdf8f] px-5 py-3 text-sm font-semibold text-[var(--color-navy)] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              <span className="relative"> {primaryCta.label}</span>
              <span className="text-lg leading-none">↗</span>
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/50 sm:w-auto"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { label: "Company setups delivered", value: "340+" },
              { label: "Avg. approval time", value: "5–15 days" },
              { label: "Client satisfaction", value: "4.9/5" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left shadow-lg shadow-black/10 backdrop-blur"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-slate-300">{stat.label}</div>
                <div className="text-xl font-semibold text-white">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {highlights.length > 0 && (
          <div className="flex-1">
            <div className="glow-card rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold text-[var(--color-gold)]">Why clients choose us</div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                  24/7 support
                </div>
              </div>
              <div className="mt-5 space-y-3 text-sm text-slate-100">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3 ring-1 ring-white/5 transition hover:-translate-y-0.5"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-gold)] animate-[floaty_6s_ease-in-out_infinite]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 px-4 py-3 text-sm text-slate-100 shadow">
                  <div className="text-[var(--color-gold)] font-semibold">One point of contact</div>
                  <p>Senior consultants shepherd every document and milestone.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 px-4 py-3 text-sm text-slate-100 shadow">
                  <div className="text-[var(--color-gold)] font-semibold">Government aligned</div>
                  <p>Up-to-date on Dubai mainland and freezone requirements.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
