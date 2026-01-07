import type { Metadata } from "next";
import Link from "next/link";
import BaseImage from "@/components/base-image";
import Script from "next/script";
import { notFound } from "next/navigation";
import SectionTitle from "@/components/section-title";
import ServiceEnquiryForm from "@/components/service-enquiry-form";
import ServiceCard from "@/components/service-card";
import { getServiceBySlug, services } from "@/lib/services";
import {
  ShieldCheckIcon,
  ClockIcon,
  SparklesIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ArrowRightIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return {
      title: "Service not found | HCT Services",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [
      service.name,
      "UAE PRO services",
      "Dubai business setup",
      "freelance visa UAE",
      "employment visa Dubai",
      "HCT Services",
    ],
    alternates: {
      canonical: `https://example.ae/services/${service.slug}`,
    },
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
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://example.ae/services/${service.slug}`,
      type: "article",
      siteName: "HCT Services | AL HASEL Consultancy Services LLC",
      locale: "en_US",
      images: [
        {
          url: "https://example.ae/pro_logo.png",
          width: 1200,
          height: 630,
          alt: `${service.name} UAE PRO services`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["https://example.ae/pro_logo.png"],
    },
  };
}

// Map service slugs to their specific images
const getServiceImage = (slug: string): string => {
  const imageMap: Record<string, string> = {
    "all-pro-services": "/all-pro-services.jpg",
    "fine-waiver-application": "/fine-waiver-application.jpg",
    "2-years-freelance-visa": "/2-years-freelance-visa.jpg",
    "employment-visa": "/employment-visa.jpg",
    "business-setup-mainland-freezone": "/business-setup.jpg",
  };
  return imageMap[slug] || "/medium-shot-smiley-business-man.jpg";
};

const ServicePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const currentService = service;
  const relatedServices = services.filter((item) => item.slug !== currentService.slug).slice(0, 3);
  const serviceIcons = [BriefcaseIcon, ShieldCheckIcon, ClockIcon, UserGroupIcon, SparklesIcon];
  const serviceImage = getServiceImage(currentService.slug);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://example.ae" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://example.ae/services" },
      {
        "@type": "ListItem",
        position: 3,
        name: currentService.name,
        item: `https://example.ae/services/${currentService.slug}`,
      },
    ],
  };
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: currentService.name,
    serviceType: currentService.shortDescription,
    areaServed: "United Arab Emirates",
    provider: {
      "@type": "LocalBusiness",
      name: "HCT Services | AL HASEL Consultancy Services LLC",
      telephone: "+971545420537",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "AED",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal-light)] to-[var(--color-charcoal-dark)] py-16 text-white sm:py-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <BaseImage
            src={serviceImage}
            alt={currentService.name}
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
          <div className="animate-fade-in-up animate-delay-100">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-green)]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30 backdrop-blur-sm mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)] animate-pulse" />
              PRO Services
            </div>
          </div>
          <h1 className="balanced mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] animate-fade-in-up animate-delay-200">
            {currentService.name}
          </h1>
          <p className="balanced mt-4 max-w-3xl text-lg sm:text-xl text-slate-200 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] animate-fade-in-up animate-delay-300">
            {currentService.tagline}
          </p>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 animate-fade-in-up animate-delay-400">
            <div className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-green)]/20 text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30">
                  <ClockIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.1em] text-slate-300">Processing</div>
                  <div className="text-sm font-semibold text-white">{currentService.processingTime}</div>
                </div>
              </div>
            </div>
            {/* <div className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-green)]/20 text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30">
                  <SparklesIcon className="h-5 w-5" />
                </div>
                
              </div>
            </div> */}
            <div className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-green)]/20 text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30">
                  <ShieldCheckIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.1em] text-slate-300">Ideal For</div>
                  <div className="text-sm font-semibold text-white line-clamp-1">{currentService.idealFor}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[2fr,1fr]">
          {/* Left Column - Main Content */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* Service Image with Overlay - Responsive */}
            <div className="group relative h-48 w-full overflow-hidden rounded-xl border border-slate-200 shadow-lg shadow-slate-200/60 sm:h-64 md:h-72 lg:h-80 animate-fade-in-up animate-delay-100">
              <BaseImage
                src={serviceImage}
                alt={currentService.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/95 via-[var(--color-charcoal)]/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-lg sm:rounded-xl bg-[var(--color-green)]/20 text-[var(--color-green)] ring-2 ring-[var(--color-green)]/30 backdrop-blur-sm flex-shrink-0">
                    <BriefcaseIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] line-clamp-2">
                      {currentService.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-1">{currentService.tagline}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Overview Section */}
            <div className="animate-fade-in-up animate-delay-200">
              <SectionTitle
                eyebrow="Overview"
                title="Service Overview"
                subtitle={currentService.description}
              />
            </div>

            {/* What's Included Section */}
            <div className="animate-fade-in-up animate-delay-300">
              <div className="mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-[var(--color-green)]/10 text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30 flex-shrink-0">
                  <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-charcoal)]">What&apos;s Included</h3>
              </div>
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                {currentService.whatsIncluded.map((item, index) => (
                  <div
                    key={item}
                    className="group relative flex items-start gap-3 sm:gap-4 rounded-lg sm:rounded-xl border border-slate-200 bg-white p-3 sm:p-4 md:p-5 shadow-md sm:shadow-lg shadow-slate-100/70 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-green)]/40 hover:shadow-xl hover:shadow-[var(--color-green)]/10 animate-fade-in-up"
                    style={{ animationDelay: `${0.4 + index * 0.1}s`, opacity: 0 }}
                  >
                    <div className="flex h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-green)]/10 text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30 transition-transform duration-300 group-hover:scale-110">
                      <CheckCircleIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-[var(--color-charcoal-light)]">{item}</p>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility & Documents Grid */}
            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 animate-fade-in-up animate-delay-400">
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6 shadow-md sm:shadow-lg shadow-slate-100/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[var(--color-green)]/30">
                <div className="mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-[var(--color-green)]/10 text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30">
                    <UserGroupIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--color-charcoal)]">Eligibility</h3>
                </div>
                <ul className="space-y-3">
                  {currentService.eligibility.map((item, index) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-[var(--color-charcoal-light)] animate-fade-in-up"
                      style={{ animationDelay: `${0.5 + index * 0.05}s`, opacity: 0 }}
                    >
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--color-green)]" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6 shadow-md sm:shadow-lg shadow-slate-100/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[var(--color-green)]/30">
                <div className="mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-[var(--color-green)]/10 text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30">
                    <DocumentTextIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--color-charcoal)]">Required Documents</h3>
                </div>
                <ul className="space-y-3">
                  {currentService.documents.map((item, index) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-[var(--color-charcoal-light)] animate-fade-in-up"
                      style={{ animationDelay: `${0.5 + index * 0.05}s`, opacity: 0 }}
                    >
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--color-green)]" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Step-by-Step Process Timeline */}
            <div className="animate-fade-in-up animate-delay-500">
              <div className="mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-[var(--color-green)]/10 text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30">
                  <SparklesIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-charcoal)]">Step-by-Step Process</h3>
              </div>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-green)] via-[var(--color-green)]/80 to-[var(--color-green)] hidden sm:block" />

                <div className="space-y-3 sm:space-y-4">
                  {currentService.steps.map((step, index) => (
                    <div
                      key={step}
                      className="group relative flex gap-3 sm:gap-4 rounded-lg sm:rounded-xl border border-slate-200 bg-white p-3 sm:p-4 md:p-5 shadow-md sm:shadow-lg shadow-slate-100/70 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-green)]/40 hover:shadow-xl hover:shadow-[var(--color-green)]/10 animate-fade-in-up"
                      style={{ animationDelay: `${0.6 + index * 0.1}s`, opacity: 0 }}
                    >
                      {/* Timeline Marker */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[var(--color-green)] text-xs sm:text-sm font-bold text-white shadow-lg shadow-[var(--color-green)]/40 ring-2 sm:ring-4 ring-[var(--color-green)]/20 transition-transform duration-300 group-hover:scale-110">
                          {index + 1}
                        </div>
                        <div className="absolute inset-0 rounded-full bg-[var(--color-green)] opacity-40 blur-md animate-pulse" />
                      </div>

                      <div className="flex-1 pt-0.5 sm:pt-1">
                        <p className="text-xs sm:text-sm leading-relaxed text-[var(--color-charcoal-light)]">{step}</p>
                      </div>

                      {/* Hover effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="space-y-4 sm:space-y-6 lg:sticky lg:top-24">
            {/* Summary Card */}
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6 shadow-lg sm:shadow-xl shadow-slate-100/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-[var(--color-green)]/30 animate-fade-in-up animate-delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-green)]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-[2px] w-8 bg-[var(--color-green)] rounded-full" />
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
                    Summary
                  </div>
                </div>
                <p className="balanced mb-4 text-sm leading-relaxed text-[var(--color-charcoal-light)]">
                  {currentService.shortDescription}
                </p>
                <div className="space-y-3 border-t border-slate-200 pt-4">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">Processing:</span>
                    <span className="text-sm font-semibold text-[var(--color-charcoal)] text-right">
                      {currentService.processingTime}
                    </span>
                  </div>
                  
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">Ideal for:</span>
                    <span className="text-sm font-semibold text-[var(--color-charcoal)] text-right">
                      {currentService.idealFor}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="animate-fade-in-up animate-delay-300">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-[2px] w-8 bg-[var(--color-green)] rounded-full" />
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-charcoal)]">
                  Request Service
                </div>
              </div>
              <ServiceEnquiryForm serviceName={currentService.name} />
            </div>
          </div>
        </div>

        {/* Related Services Section */}
        <div className="mx-auto mt-8 sm:mt-12 md:mt-16 max-w-6xl animate-fade-in-up animate-delay-600">
          <div className="mb-6 sm:mb-8">
            <SectionTitle
              eyebrow="Related Services"
              title="Explore More UAE PRO & Visa Services"
              subtitle="Discover additional services tailored to your business and visa needs in the UAE."
              align="center"
            />
          </div>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((item, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return (
                <div
                  key={item.slug}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${0.7 + index * 0.1}s`, opacity: 0 }}
                >
                  <ServiceCard service={item} icon={<Icon className="h-6 w-6" />} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schema Scripts */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
    </div>
  );
};

export default ServicePage;
