import type { Metadata } from "next";
import Link from "next/link";
import BaseImage from "@/components/base-image";
import SectionTitle from "@/components/section-title";
import {
  ShieldCheckIcon,
  BoltIcon,
  SparklesIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "About HCT Services | UAE PRO, Visa & Dubai Business Setup Specialists",
  description:
    "Meet AL HASEL Consultancy (HCT Services) — experts in UAE PRO services, Dubai business setup, freelance visa UAE, and employment visa Dubai support. Fast, reliable, and transparent services.",
  keywords: [
    "HCT Services",
    "AL HASEL Consultancy",
    "UAE PRO services",
    "Dubai business setup",
    "freelance visa UAE",
    "employment visa Dubai",
    "Dubai PRO services",
    "UAE visa experts",
    "Dubai business consultants",
  ],
  alternates: { canonical: "https://example.ae/about" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "About HCT Services | UAE PRO, Visa & Dubai Business Setup Specialists",
    description:
      "HCT Services delivers fast, reliable UAE PRO services, freelance visas, employment visas, and Dubai business setup with concierge-style support.",
    url: "https://example.ae/about",
    type: "profile",
    siteName: "HCT Services | AL HASEL Consultancy Services LLC",
    locale: "en_US",
    images: [{ url: "https://example.ae/pro_logo.png", width: 1200, height: 630, alt: "About HCT Services team in Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About HCT Services | UAE PRO, Visa & Dubai Business Setup Specialists",
    description:
      "Dubai-based PRO services, freelance visa UAE, employment visa Dubai, and business setup experts at AL HASEL Consultancy (HCT Services).",
    images: ["https://example.ae/pro_logo.png"],
  },
};

const values = [
  {
    title: "Integrity",
    description: "We protect your time, documents, and compliance with transparent steps and honest advice.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Speed",
    description: "Fast submissions, proactive follow-up, and clear timelines keep you moving.",
    icon: BoltIcon,
  },
  {
    title: "Clarity",
    description: "We break down every step, cost, and requirement so there are no surprises.",
    icon: SparklesIcon,
  },
];

const services = [
  "PRO desk for labor, immigration, attestations, and renewals",
  "Visas: freelance (2 years), employment, dependents, and status changes",
  "Fine waiver applications with authority follow-up",
  "Business setup across Dubai mainland and leading freezones",
  "Banking introductions and compliance support",
];

const teamRoles = [
  { role: "Lead Consultant", initials: "LC" },
  { role: "Compliance Officer", initials: "CO" },
  { role: "Visa Specialist", initials: "VS" },
  { role: "Client Success", initials: "CS" },
];

const AboutPage = () => {
  return (
    <div className="bg-white">
      <h1 className="sr-only">About HCT Services – UAE PRO, visa, and Dubai business setup specialists</h1>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal-light)] to-[var(--color-charcoal-dark)] py-16 text-white sm:py-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <BaseImage
            src="/about-us.jpg"
            alt="About HCT Services"
            fill
            className="object-cover opacity-20"
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E]/95 via-[#2E2E2E]/90 to-[#1E1E1E]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,106,54,0.15),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(15,106,54,0.10),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_35%,rgba(255,255,255,0.08)_70%)] opacity-40" />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Floating decorative elements */}
        <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-[var(--color-green)]/10 blur-2xl animate-[floaty_10s_ease-in-out_infinite]" />
        <div className="absolute right-10 bottom-20 h-40 w-40 rounded-full bg-[var(--color-green)]/10 blur-2xl animate-[floaty_12s_ease-in-out_infinite]" style={{ animationDelay: "2s" }} />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up animate-delay-100">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-green)]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30 backdrop-blur-sm mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)] animate-pulse" />
              About Us
            </div>
          </div>
          <h1 className="balanced mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] animate-fade-in-up animate-delay-200">
            Our vision for UAE entrepreneurs & professionals
          </h1>
          <p className="balanced mt-4 max-w-3xl text-lg sm:text-xl text-slate-200 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] animate-fade-in-up animate-delay-300">
            We are a team of PRO and business setup specialists obsessed with making UAE compliance effortless.
          </p>
          <p className="balanced mt-4 max-w-3xl text-base sm:text-lg text-slate-300 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] animate-fade-in-up animate-delay-400">
            We built AL HASEL Consultancy Services LLC (HCT Services) to bridge the gap between fast-growing businesses and complex government processes. Our consultants have guided hundreds of founders, HR teams, and freelancers through visas, fine waivers, and company formation with clarity and confidence.
          </p>
          <div className="mt-6 animate-fade-in-up animate-delay-500">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-green)] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[var(--color-green)]/50 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-green-light)] hover:shadow-[var(--color-green)]/60 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <span className="relative z-10">Explore Our Services</span>
              <span className="relative z-10 text-base transition-transform group-hover:translate-x-1">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            {/* Left - Story Content */}
            <div className="space-y-6 animate-fade-in-up animate-delay-100">
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-8 bg-[var(--color-green)] rounded-full" />
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
                  Our Story
                </div>
              </div>
              <h2 className="balanced text-3xl sm:text-4xl font-bold text-[var(--color-charcoal)]">
                Making UAE compliance effortless
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-[var(--color-charcoal-light)]">
                <p>
                  We saw how teams lost time juggling government portals, document requirements, and ever-changing rules. Today, we run a concierge-style desk that handles every submission, status update, and follow-up for you—whether you are setting up a company, onboarding staff, or securing your own residency.
                </p>
                <p>
                  With bilingual specialists, government relationships, and structured checklists, we give you predictable timelines and the peace of mind that every detail is covered.
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-green)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--color-green)]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-green-light)] hover:shadow-[var(--color-green)]/40 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                <span className="relative z-10">Speak with our team</span>
                <span className="relative z-10 text-base transition-transform group-hover:translate-x-1">↗</span>
              </Link>
            </div>

            {/* Right - Services Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-100/70 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-[var(--color-green)]/30 animate-fade-in-up animate-delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-green)]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-green)]/10 text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30">
                    <CheckCircleIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-charcoal)]">Our services today</h3>
                </div>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li
                      key={service}
                      className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-charcoal-light)] animate-fade-in-up"
                      style={{ animationDelay: `${0.3 + index * 0.1}s`, opacity: 0 }}
                    >
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--color-green)]" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-12 animate-fade-in-up animate-delay-100">
            <SectionTitle
              eyebrow="Values"
              title="How we operate"
              subtitle="The principles that shape every client engagement."
              align="center"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group relative overflow-hidden flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-green)]/40 hover:shadow-xl hover:shadow-[var(--color-green)]/10 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s`, opacity: 0 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-green)]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-green)]/10 text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-[var(--color-charcoal)]">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-[var(--color-charcoal-light)]">{value.description}</p>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal-light)] to-[var(--color-charcoal-dark)] py-12 sm:py-16 text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <BaseImage
            src="/medium-shot-smiley-business-man.jpg"
            alt="HCT Services Team"
            fill
            className="object-cover opacity-20"
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E]/95 via-[#2E2E2E]/90 to-[#1E1E1E]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,106,54,0.15),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(15,106,54,0.10),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_35%,rgba(255,255,255,0.08)_70%)] opacity-40" />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* Left Content */}
            <div className="space-y-4 animate-fade-in-left animate-delay-100">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-8 bg-[var(--color-green)] rounded-full" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
                  Our Team
                </span>
              </div>
              <h2 className="balanced text-3xl sm:text-4xl font-bold leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
                Specialists across PRO, visas, and setup
              </h2>
              <p className="balanced text-base sm:text-lg text-slate-200 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
                Your case is handled by dedicated consultants who coordinate every authority interaction and keep you updated across WhatsApp and email.
              </p>
            </div>

            {/* Right - Team Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-right animate-delay-200">
              {teamRoles.map((member, index) => (
                <div
                  key={member.role}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-[var(--color-green)]/20 animate-fade-in-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s`, opacity: 0 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-green)]/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-green)]/20 text-lg font-bold text-[var(--color-green)] ring-2 ring-[var(--color-green)]/30 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      {member.initials}
                    </div>
                    <div className="mb-1 text-sm font-semibold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
                      {member.role}
                    </div>
                    <div className="text-xs text-slate-300">Dubai, UAE</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 py-12 sm:py-16">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,106,54,0.04),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(15,106,54,0.04),transparent_40%)]" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-100/70 sm:p-10 transition-all duration-300 hover:shadow-2xl hover:border-[var(--color-green)]/30 animate-fade-in-up animate-delay-100">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-green)]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <h3 className="balanced text-2xl sm:text-3xl font-bold text-[var(--color-charcoal)]">
                  Ready to move forward?
                </h3>
                <p className="balanced text-base text-[var(--color-charcoal-light)]">
                  Book a consultation and get a tailored roadmap for your case.
                </p>
              </div>
              <Link
                href="/contact"
                className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-green)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--color-green)]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-green-light)] hover:shadow-[var(--color-green)]/40 overflow-hidden sm:flex-shrink-0"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                <span className="relative z-10">Contact us</span>
                <span className="relative z-10 text-base transition-transform group-hover/btn:translate-x-1">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
