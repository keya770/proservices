import Link from "next/link";
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
  title: "Smart PRO, Visa & Business Setup Services in the UAE | KEYA PRO DESK UAE",
  description:
    "Premium UAE PRO services, fine waiver applications, freelance and employment visas, and business setup in Dubai. Fast processing, transparent pricing, and dedicated support.",
  openGraph: {
    title: "Smart PRO, Visa & Business Setup Services in the UAE | KEYA PRO DESK UAE",
    description:
      "End-to-end UAE PRO and visa services with business setup support. Transparent pricing and dedicated account managers.",
    url: "https://pro-desk-uae.example.com/",
    type: "website",
  },
};

const serviceIcons = [BriefcaseIcon, ShieldCheckIcon, ClockIcon, UserGroupIcon, SparklesIcon];
const featureIcons = [ShieldCheckIcon, SparklesIcon, ClockIcon, UserGroupIcon];

export default function Home() {
  return (
    <>
      <Hero
        title="Smart PRO, Visa & Business Setup Services in the UAE"
        subtitle="We handle every government touchpoint—visas, fines, attestations, and company setup—so you can launch and scale with confidence in Dubai and across the UAE."
        primaryCta={{ label: "Get Free Consultation", href: "/contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
        highlights={[
          "Govt. process guidance",
          "Fast turnaround",
          "WhatsApp & Email support",
        ]}
      />

      <section id="services" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionTitle
          eyebrow="Services"
          title="Our Core Services"
          subtitle="We help individuals and companies with all PRO, visa, and business setup requirements across the UAE."
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
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Why choose us"
            title="Compliance made simple"
            subtitle="Concierge-style support with transparent steps, responsive updates, and dedicated specialists."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featureHighlights.map((feature, index) => {
              const Icon = featureIcons[index % featureIcons.length];
              return (
                <div
                  key={feature.title}
                  className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-lg shadow-slate-100"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-gold)]/20 text-[var(--color-navy)]">
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
        <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-100 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <SectionTitle
                eyebrow="Process"
                title="How it works"
                subtitle="Clear, guided steps from enquiry to approvals and residency."
              />
            </div>
            <div className="lg:w-1/2">
              <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-1">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex-1 space-y-4">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                      {processSteps.map((step, index) => (
                        <div key={step.title} className="relative">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-navy)] text-sm font-semibold text-white">
                              {index + 1}
                            </div>
                            <div className="text-sm font-semibold text-[var(--color-navy)]">
                              {step.title}
                            </div>
                          </div>
                          <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-navy)] py-12 sm:py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                Business Setup
              </p>
              <h3 className="balanced text-3xl font-semibold">Business Setup (Mainland & Freezone)</h3>
              <p className="balanced text-base text-slate-200">
                Choose the right jurisdiction, secure your trade license, and plan visas with a
                clear roadmap. We simplify mainland company formation, freezone options, and bank
                account introductions so you can launch fast.
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>• Mainland company formation with licensing guidance</li>
                <li>• Freezone setups with activity scoping and package advice</li>
                <li>• Trade license, establishment card, and bank account support</li>
              </ul>
              <Link
                href="/services/business-setup-mainland-freezone"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] px-5 py-3 text-sm font-semibold text-[var(--color-navy)] shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
              >
                Plan My Company Setup
              </Link>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10 backdrop-blur">
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

      <section className="bg-white py-12 sm:py-16">
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
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
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
              Tell us about your plans. We respond within one business day with next steps.
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
    </>
  );
}
