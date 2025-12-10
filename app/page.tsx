import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Hero from "@/components/hero";
import ServiceCard from "@/components/service-card";
import SectionTitle from "@/components/section-title";
import FAQAccordion from "@/components/faq-accordion";
import TestimonialCard from "@/components/testimonial-card";
import { faqItems, featureHighlights, processSteps, testimonialItems } from "@/lib/content";
import { services } from "@/lib/services";
import {
  BriefcaseIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "UAE PRO Services, Visa & Business Setup | Dubai Mainland & Freezone Experts",
  description:
    "UAE PRO services, freelance visa UAE, employment visa Dubai, fine waiver help, and Dubai business setup by AL HASEL Consultancy (HCT Services).",
  alternates: { canonical: "https://example.ae" },
  openGraph: {
    title: "UAE PRO Services, Visa & Business Setup | Dubai Mainland & Freezone Experts",
    description:
      "End-to-end UAE PRO services, Dubai business setup, 2-year freelance visa UAE support, and employment visa processing across the UAE.",
    url: "https://example.ae",
    type: "website",
    siteName: "HCT Services | AL HASEL Consultancy Services LLC",
    images: [
      {
        url: "https://example.ae/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UAE PRO services and Dubai business setup by HCT Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UAE PRO Services, Visa & Business Setup | Dubai Mainland & Freezone Experts",
    description:
      "Freelance visa UAE, employment visa Dubai, and Dubai business setup with fast PRO services by AL HASEL Consultancy (HCT Services).",
    images: ["https://example.ae/og-image.jpg"],
  },
};

const serviceIcons = [BriefcaseIcon, ShieldCheckIcon, ClockIcon, UserGroupIcon, SparklesIcon];
const featureIcons = [ShieldCheckIcon, SparklesIcon, ClockIcon, UserGroupIcon];

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Hero
        title="UAE PRO Services, Visa & Business Setup in Dubai"
        subtitle="Providing 2-year freelance visa at an investment price with smooth, hassle-free PRO services, employment visa Dubai support, and Dubai business setup."
        primaryCta={{ label: "Get Free Consultation", href: "/contact" }}
        secondaryCta={{ label: "View all UAE PRO & Visa Services", href: "/services" }}
        highlights={[
          "Fast • Reliable • Professional • Affordable UAE PRO services",
          "All PRO, freelance visa UAE, and employment visa Dubai support",
          "Dubai business setup (Mainland & Freezone)",
        ]}
      />

      <section id="services" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-8 shadow-2xl shadow-slate-200/60 sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_35%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.12),transparent_30%)]" />
          <div className="relative">
            <SectionTitle
              eyebrow="Services"
              title="Our Core UAE PRO & Visa Services"
              subtitle="UAE PRO services, Dubai business setup, freelance visa UAE, employment visa Dubai, fine waiver assistance, and corporate documentation support."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = serviceIcons[index % serviceIcons.length];
                return (
                  <ServiceCard
                    key={service.slug}
                    service={service}
                    icon={<Icon className="h-6 w-6" />}
                  />
                );
              })}
            </div>
            <div className="mt-8 text-sm font-semibold text-[var(--color-navy)]">
              <Link href="/services" className="inline-flex items-center gap-2 hover:underline">
                View all UAE PRO & Visa Services <span className="text-base">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-[#eef2fb] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Why choose us"
            title="Fast, reliable, professional, and affordable support"
            subtitle="Your trusted partner for document clearing, PRO services, and business setup needs across Dubai."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featureHighlights.map((feature, index) => {
              const Icon = featureIcons[index % featureIcons.length];
              return (
                <div
                  key={feature.title}
                  className="glow-card relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-slate-100 bg-white/90 p-5 text-left shadow-xl shadow-slate-200/70 transition hover:-translate-y-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-gold)]/40 via-[#ffe9ad] to-white text-[var(--color-navy)] shadow-inner">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--color-navy)]">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/90 p-6 shadow-2xl shadow-slate-200/60 sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.12),transparent_30%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1),transparent_35%)]" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <SectionTitle
                eyebrow="Process"
                title="How it works"
                subtitle="Clear, guided steps from enquiry to approvals and residency for every UAE PRO service, visa, and business setup."
              />
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-[var(--color-navy)] opacity-80">
                <span className="rounded-full bg-[var(--color-gold)]/20 px-3 py-1">Compliance-first</span>
                <span className="rounded-full bg-slate-900/5 px-3 py-1">Transparent milestones</span>
                <span className="rounded-full bg-slate-900/5 px-3 py-1">Dedicated consultant</span>
              </div>
            </div>
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="group relative flex gap-4 rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-lg shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-navy)] to-[#0f1933] text-sm font-semibold text-white shadow-inner shadow-[0_6px_16px_rgba(11,17,32,0.35)]">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--color-navy)]">{step.title}</div>
                    <p className="mt-1 text-sm text-slate-600">{step.description}</p>
                  </div>
                  <span className="absolute inset-y-3 right-3 h-[2px] w-12 rounded-full bg-gradient-to-r from-[var(--color-gold)]/80 to-[#4c6fff]/60 opacity-0 transition group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--color-navy)] py-12 sm:py-16 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(59,130,246,0.18),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_35%,rgba(255,255,255,0.08)_70%)] opacity-40" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)] ring-1 ring-white/10">
                Business Setup
              </p>
              <h3 className="balanced text-3xl font-semibold leading-tight sm:text-4xl">
                Dubai Mainland & Freezone Business Setup
              </h3>
              <p className="balanced text-base text-slate-200">
                Choose the right jurisdiction, secure your trade license, and plan visas with a clear roadmap. We simplify Dubai mainland company formation, UAE freezone setup, and bank account introductions so you can launch fast.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Dubai mainland company formation with licensing guidance",
                  "UAE freezone setups with activity scoping and package advice",
                  "Trade license, establishment card, and bank account support",
                  "Visa planning, timelines, and document preparation",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-gold)]" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/services/business-setup-mainland-freezone"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-gold)] px-5 py-3 text-sm font-semibold text-[var(--color-navy)] shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
              >
                Plan My Company Setup <span className="text-base">↗</span>
              </Link>
            </div>
            <div className="glow-card rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/25 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-gold)]/20 text-[var(--color-gold)]">
                  <ArrowTrendingUpIcon className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--color-gold)]">Fast to market</div>
                  <div className="text-lg font-semibold">Launch-ready in days</div>
                </div>
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-100">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="font-semibold">Timeline</div>
                  <p>Typically 5–15 working days depending on jurisdiction and approvals.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="font-semibold">Support</div>
                  <p>Dedicated consultant, transparent milestones, and weekly progress updates.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="font-semibold">Banking</div>
                  <p>Introductions to banking partners with compliance-ready documentation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-[#f2f5ff] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Proof"
            title="Clients trust us with their UAE journey"
            subtitle="Real stories from founders, professionals, and teams we support."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonialItems.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/90 p-6 shadow-2xl shadow-slate-200/60 sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.12),transparent_30%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,rgba(251,191,36,0.12),transparent_35%)]" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionTitle
                eyebrow="FAQ"
                title="Frequently Asked Questions"
                subtitle="Quick answers on PRO services, visas, timelines, and fees."
              />
              <p className="mt-4 text-sm text-slate-600">
                Need more clarity? We share exact timelines, document checklists, and costs for your
                case before we start.
              </p>
            </div>
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-r from-[var(--color-navy)] via-[#0f1933] to-[var(--color-navy)] py-12 text-white sm:py-14"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.12),_transparent_45%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Start today
            </div>
            <h3 className="balanced text-2xl font-semibold sm:text-3xl">
              Ready to start your UAE journey?
            </h3>
            <p className="balanced text-slate-200">
              Tell us about your plans. We respond within one business day with next steps. Call/WhatsApp +971 54 542 0537 or email haselconsultancy@gmail.com.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-[var(--color-navy)] shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
          >
            Talk to Our Team
          </Link>
        </div>
      </section>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
