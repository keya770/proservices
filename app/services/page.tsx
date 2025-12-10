import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import SectionTitle from "@/components/section-title";
import { services } from "@/lib/services";
import { ShieldCheckIcon, DocumentCheckIcon, ClockIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

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

  return (
    <div className="bg-white">
      <h1 className="sr-only">UAE PRO services, visa processing, and Dubai business setup</h1>
      <section className="border-b border-slate-100 bg-gradient-to-br from-[var(--color-light)] via-white to-[#eef2ff] py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[2fr,1fr] lg:items-center">
            <div className="space-y-4">
              <SectionTitle
                eyebrow="Services"
                title="UAE PRO & Visa services built for speed"
                subtitle="Providing 2-year freelance visa at investment pricing plus full PRO, visa, and business setup support."
              />
              <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
                  <ShieldCheckIcon className="h-4 w-4 text-[var(--color-navy)]" />
                  Compliance-first approach
                </span>
                <span className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
                  <DocumentCheckIcon className="h-4 w-4 text-[var(--color-navy)]" />
                  Clear document checklists
                </span>
                <span className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
                  <ClockIcon className="h-4 w-4 text-[var(--color-navy)]" />
                  Fast processing & updates
                </span>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100 sm:p-7">
              <div className="text-sm font-semibold text-[var(--color-navy)]">Need guidance?</div>
              <p className="balanced mt-2 text-sm text-slate-600">
                Tell us what you need and we will map the right package, timeline, and government steps for your case.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-[var(--color-navy)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--color-navy)]/20 transition hover:-translate-y-0.5"
              >
                Book a consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  {service.tagline}
                </div>
                <h2 className="balanced mt-2 text-lg font-semibold text-[var(--color-navy)]">{service.name}</h2>
              </div>
              <p className="balanced text-sm text-slate-600">{service.description}</p>
              <div className="mt-auto text-sm text-slate-500">
                <div>
                  <span className="font-semibold text-[var(--color-navy)]">Processing:</span> {service.processingTime}
                </div>
                <div>
                  <span className="font-semibold text-[var(--color-navy)]">Starting fee:</span> {service.startingFee}
                </div>
              </div>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] transition hover:gap-3"
              >
                View details <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          ))}
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
