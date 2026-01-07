import type { Metadata } from "next";
import Link from "next/link";
import BaseImage from "@/components/base-image";
import Script from "next/script";
import SectionTitle from "@/components/section-title";
import ServiceCard from "@/components/service-card";
import { services } from "@/lib/services";
import {
  ShieldCheckIcon,
  DocumentCheckIcon,
  ClockIcon,
  ArrowRightIcon,
  BriefcaseIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "UAE PRO & Visa Services | Corporate PRO Support & Documentation in Dubai",
  description:
    "Explore UAE PRO services, corporate PRO support, 2-year freelance visa UAE, employment visa Dubai, fine waiver help, and business setup across Dubai mainland and freezones.",
  alternates: { canonical: "https://example.ae/services" },
  openGraph: {
    title: "UAE PRO & Visa Services | Corporate PRO Support & Documentation in Dubai",
    description:
      "Full catalogue of UAE PRO services, Dubai business setup, freelance visa UAE, employment visa Dubai, and fine waiver assistance with transparent pricing.",
    url: "https://example.ae/services",
    type: "website",
    siteName: "HCT Services | AL HASEL Consultancy Services LLC",
    images: [
      { url: "https://example.ae/og-image.jpg", width: 1200, height: 630, alt: "UAE PRO services catalog in Dubai" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UAE PRO & Visa Services | Corporate PRO Support & Documentation in Dubai",
    description:
      "Corporate PRO support, freelance visa UAE, employment visa Dubai, and Dubai business setup services by AL HASEL Consultancy (HCT Services).",
    images: ["https://example.ae/og-image.jpg"],
  },
};

const ServicesPage = () => {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://example.ae" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://example.ae/services" },
    ],
  };

  const serviceIcons = [BriefcaseIcon, ShieldCheckIcon, ClockIcon, UserGroupIcon, SparklesIcon];

  return (
    <div className="bg-white">
      <h1 className="sr-only">UAE PRO services, visa processing, and Dubai business setup</h1>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal-light)] to-[var(--color-charcoal-dark)] py-16 text-white sm:py-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <BaseImage
            src="/standard-quality-control-collage-concept.jpg"
            alt="UAE PRO Services"
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
          <div className="grid gap-10 lg:grid-cols-[2fr,1fr] lg:items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="animate-fade-in-up animate-delay-100">
                <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-green)]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30 backdrop-blur-sm mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)] animate-pulse" />
                  Services
                </div>
              </div>
              <div className="animate-fade-in-up animate-delay-200">
                <h1 className="balanced text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  UAE PRO & Visa services built for speed
                </h1>
              </div>
              <div className="animate-fade-in-up animate-delay-300">
                <p className="balanced max-w-2xl text-lg sm:text-xl text-slate-200 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
                  Providing 2-year freelance visa at investment pricing plus full PRO, visa, and business setup support.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 animate-fade-in-up animate-delay-400">
                <span className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2 text-sm text-slate-200 shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5">
                  <ShieldCheckIcon className="h-4 w-4 text-[var(--color-green)]" />
                  Compliance-first approach
                </span>
                <span className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2 text-sm text-slate-200 shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5">
                  <DocumentCheckIcon className="h-4 w-4 text-[var(--color-green)]" />
                  Clear document checklists
                </span>
                <span className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2 text-sm text-slate-200 shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5">
                  <ClockIcon className="h-4 w-4 text-[var(--color-green)]" />
                  Fast processing & updates
                </span>
              </div>
            </div>

            {/* Right - Consultation Card */}
            <div className="animate-fade-in-right animate-delay-300">
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-2xl shadow-black/40 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[var(--color-green)]/20">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] animate-[shimmer_3s_ease-in-out_infinite]" />
                
                <div className="relative">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-[2px] w-8 bg-[var(--color-green)] rounded-full" />
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
                      Need Guidance?
                    </div>
                  </div>
                  <p className="balanced mb-6 text-sm leading-relaxed text-slate-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
                    Tell us what you need and we will map the right package, timeline, and government steps for your case.
                  </p>
                  <Link
                    href="/contact"
                    className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-green)] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[var(--color-green)]/50 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-green-light)] hover:shadow-[var(--color-green)]/60 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                    <span className="relative z-10">Book a consultation</span>
                    <span className="relative z-10 text-base transition-transform group-hover/btn:translate-x-1">↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-12 sm:py-16">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,106,54,0.04),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(15,106,54,0.04),transparent_40%)]" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-12 animate-fade-in-up animate-delay-100">
            <SectionTitle
              eyebrow="All Services"
              title="Complete UAE PRO & Visa Solutions"
              subtitle="Comprehensive services for businesses, professionals, and entrepreneurs in the UAE."
              align="center"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return (
                <div
                  key={service.slug}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s`, opacity: 0 }}
                >
                  <ServiceCard service={service} icon={<Icon className="h-6 w-6" />} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal-light)] to-[var(--color-charcoal-dark)] py-12 sm:py-16 text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <BaseImage
            src="/medium-shot-smiley-business-man.jpg"
            alt="HCT Services Stats"
            fill
            className="object-cover opacity-20"
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E]/95 via-[#2E2E2E]/90 to-[#1E1E1E]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,106,54,0.15),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(15,106,54,0.10),transparent_30%)]" />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 animate-fade-in-up animate-delay-100">
            <SectionTitle
              eyebrow="Why Choose Us"
              title="Trusted by businesses across the UAE"
              subtitle="Our track record speaks for itself"
              align="center"
              variant="dark"
            />
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: "Happy Clients", value: "500+", icon: UserGroupIcon },
              { label: "Success Rate", value: "98%", icon: ShieldCheckIcon },
              { label: "Avg. Rating", value: "4.9/5", icon: SparklesIcon },
              { label: "Years Experience", value: "10+", icon: ClockIcon },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-[var(--color-green)]/20 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s`, opacity: 0 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-green)]/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-3 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-green)]/20 text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="mb-2 text-3xl sm:text-4xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 uppercase tracking-[0.1em]">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
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
                  Ready to get started?
                </h3>
                <p className="balanced text-base text-[var(--color-charcoal-light)]">
                  Contact us today for a free consultation and personalized service package.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:flex-shrink-0">
                <Link
                  href="/contact"
                  className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-green)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--color-green)]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-green-light)] hover:shadow-[var(--color-green)]/40 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                  <span className="relative z-10">Get Consultation</span>
                  <span className="relative z-10 text-base transition-transform group-hover/btn:translate-x-1">↗</span>
                </Link>
                <Link
                  href="/about"
                  className="group/btn inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-[var(--color-charcoal)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-green)]/40 hover:bg-slate-50"
                >
                  <span className="relative z-10">Learn More</span>
                  <ArrowRightIcon className="relative z-10 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script
        id="breadcrumb-services"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </div>
  );
};

export default ServicesPage;
