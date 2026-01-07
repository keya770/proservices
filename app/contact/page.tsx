import type { Metadata } from "next";
import Link from "next/link";
import BaseImage from "@/components/base-image";
import ContactForm from "@/components/contact-form";
import SectionTitle from "@/components/section-title";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Contact HCT Services | UAE PRO, Visa & Dubai Business Setup Consultation",
  description:
    "Call +971 54 542 0537 or email haselconsultancy@gmail.com for UAE PRO services, freelance visa UAE, employment visa Dubai, fine waiver help, and business setup support. Fast response within 24 hours.",
  keywords: [
    "contact HCT Services",
    "UAE PRO services contact",
    "Dubai business setup consultation",
    "freelance visa UAE help",
    "employment visa Dubai support",
    "UAE visa consultation",
    "Dubai PRO services phone",
  ],
  alternates: { canonical: "https://example.ae/contact" },
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
    title: "Contact HCT Services | UAE PRO, Visa & Dubai Business Setup Consultation",
    description:
      "Reach AL HASEL Consultancy (HCT Services) for UAE PRO services, Dubai business setup, freelance visa UAE, and employment visa Dubai guidance.",
    url: "https://example.ae/contact",
    type: "website",
    siteName: "HCT Services | AL HASEL Consultancy Services LLC",
    locale: "en_US",
    images: [{ url: "https://example.ae/pro_logo.png", width: 1200, height: 630, alt: "Contact HCT Services Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact HCT Services | UAE PRO, Visa & Dubai Business Setup Consultation",
    description:
      "Talk to HCT Services for UAE PRO services, freelance visa UAE, employment visa Dubai, fine waiver help, and business setup support.",
    images: ["https://example.ae/pro_logo.png"],
  },
};

const ContactPage = () => {
  return (
    <div className="bg-white">
      <h1 className="sr-only">Contact HCT Services for UAE PRO services, visas, and Dubai business setup</h1>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal-light)] to-[var(--color-charcoal-dark)] py-16 text-white sm:py-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <BaseImage
            src="/contect-us.jpg"
            alt="Contact HCT Services"
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
              Get in Touch
            </div>
          </div>
          <h1 className="balanced mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] animate-fade-in-up animate-delay-200">
            Let&apos;s Talk
          </h1>
          <p className="balanced mt-4 max-w-3xl text-lg sm:text-xl text-slate-200 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] animate-fade-in-up animate-delay-300">
            We usually respond within 24 hours. Share your plans and we will map the fastest route to approvals.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-16 sm:py-20">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,106,54,0.03),transparent_70%)]" />
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[var(--color-green)]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[var(--color-green)]/5 blur-3xl" />
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-green)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)] animate-pulse" />
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-charcoal)] mb-4">
              Your Trusted Partner in UAE
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600">
              Fast, reliable, and transparent PRO services with dedicated support every step of the way.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Fast Processing */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-100/50 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-green)]/40 hover:shadow-2xl hover:shadow-[var(--color-green)]/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-green)]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-green)]/10 to-[var(--color-green)]/5 text-[var(--color-green)] ring-2 ring-[var(--color-green)]/20 transition-transform duration-300 group-hover:scale-110 group-hover:ring-[var(--color-green)]/40">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-charcoal)] mb-2">Fast Processing</h3>
                <p className="text-slate-600 leading-relaxed">
                  Expedited visa and business setup services with streamlined documentation and quick approvals.
                </p>
              </div>
            </div>

            {/* Expert Guidance */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-100/50 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-green)]/40 hover:shadow-2xl hover:shadow-[var(--color-green)]/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-green)]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-green)]/10 to-[var(--color-green)]/5 text-[var(--color-green)] ring-2 ring-[var(--color-green)]/20 transition-transform duration-300 group-hover:scale-110 group-hover:ring-[var(--color-green)]/40">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-charcoal)] mb-2">Expert Guidance</h3>
                <p className="text-slate-600 leading-relaxed">
                  Experienced consultants who understand UAE regulations and guide you through every requirement.
                </p>
              </div>
            </div>

            {/* Transparent Pricing */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-100/50 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-green)]/40 hover:shadow-2xl hover:shadow-[var(--color-green)]/10 sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-green)]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-green)]/10 to-[var(--color-green)]/5 text-[var(--color-green)] ring-2 ring-[var(--color-green)]/20 transition-transform duration-300 group-hover:scale-110 group-hover:ring-[var(--color-green)]/40">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-charcoal)] mb-2">Transparent Pricing</h3>
                <p className="text-slate-600 leading-relaxed">
                  Clear, upfront costs with no hidden fees. Know exactly what you're paying for from day one.
                </p>
              </div>
            </div>

            {/* Dedicated Support */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-100/50 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-green)]/40 hover:shadow-2xl hover:shadow-[var(--color-green)]/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-green)]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-green)]/10 to-[var(--color-green)]/5 text-[var(--color-green)] ring-2 ring-[var(--color-green)]/20 transition-transform duration-300 group-hover:scale-110 group-hover:ring-[var(--color-green)]/40">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-charcoal)] mb-2">Dedicated Support</h3>
                <p className="text-slate-600 leading-relaxed">
                  Personal consultant assigned to your case with regular updates via WhatsApp and email.
                </p>
              </div>
            </div>

            {/* Comprehensive Services */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-100/50 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-green)]/40 hover:shadow-2xl hover:shadow-[var(--color-green)]/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-green)]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-green)]/10 to-[var(--color-green)]/5 text-[var(--color-green)] ring-2 ring-[var(--color-green)]/20 transition-transform duration-300 group-hover:scale-110 group-hover:ring-[var(--color-green)]/40">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-charcoal)] mb-2">Comprehensive Services</h3>
                <p className="text-slate-600 leading-relaxed">
                  End-to-end solutions from visa processing to business setup across Dubai mainland and freezones.
                </p>
              </div>
            </div>

            {/* Proven Track Record */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-100/50 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-green)]/40 hover:shadow-2xl hover:shadow-[var(--color-green)]/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-green)]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-green)]/10 to-[var(--color-green)]/5 text-[var(--color-green)] ring-2 ring-[var(--color-green)]/20 transition-transform duration-300 group-hover:scale-110 group-hover:ring-[var(--color-green)]/40">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-charcoal)] mb-2">Proven Track Record</h3>
                <p className="text-slate-600 leading-relaxed">
                  Successfully helped hundreds of entrepreneurs and businesses establish themselves in the UAE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section - Form and Map */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-100/70 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:border-[var(--color-green)]/30 animate-fade-in-up animate-delay-200">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-[2px] w-8 bg-[var(--color-green)] rounded-full" />
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-charcoal)]">
                  Send Message
                </div>
              </div>
              <ContactForm />
            </div>
          </div>

          {/* Contact Details & Map */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Contact Details Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-100/70 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:border-[var(--color-green)]/30 animate-fade-in-up animate-delay-100">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-[2px] w-8 bg-[var(--color-green)] rounded-full" />
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-charcoal)]">
                  Contact Details
                </div>
              </div>
              <p className="balanced mb-6 text-sm leading-relaxed text-[var(--color-charcoal-light)]">
                Reach us via WhatsApp, phone, or email. We will align on timelines, costs, and required documents before any submission. Need a quick overview? See our{" "}
                <Link href="/services" className="text-[var(--color-green)] underline-offset-4 hover:underline font-semibold">
                  UAE PRO & visa services
                </Link>{" "}
                or jump straight to the{" "}
                <Link href="/services/2-years-freelance-visa" className="text-[var(--color-green)] underline-offset-4 hover:underline font-semibold">
                  2-year freelance visa UAE
                </Link>{" "}
                offer.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-lg border border-slate-100 bg-slate-50/50 p-4 transition-all duration-300 hover:border-[var(--color-green)]/30 hover:bg-[var(--color-green)]/5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-green)]/10 text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30">
                    <PhoneIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500 mb-1">Phone & WhatsApp</div>
                    <a href="tel:+971545420537" className="text-sm font-semibold text-[var(--color-charcoal)] hover:text-[var(--color-green)] transition-colors">
                      +971 54 542 0537
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border border-slate-100 bg-slate-50/50 p-4 transition-all duration-300 hover:border-[var(--color-green)]/30 hover:bg-[var(--color-green)]/5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-green)]/10 text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30">
                    <EnvelopeIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500 mb-1">Email</div>
                    <a href="mailto:haselconsultancy@gmail.com" className="text-sm font-semibold text-[var(--color-charcoal)] hover:text-[var(--color-green)] transition-colors break-all">
                      haselconsultancy@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border border-slate-100 bg-slate-50/50 p-4 transition-all duration-300 hover:border-[var(--color-green)]/30 hover:bg-[var(--color-green)]/5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-green)]/10 text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30">
                    <MapPinIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500 mb-1">Office Address</div>
                    <div className="text-sm font-semibold text-[var(--color-charcoal)] leading-relaxed">
                      P.O Box: 32935, Office 313, Emgate Building, Near Business Bay Metro Station (Sea Side), Dubai, UAE
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-100/70 transition-all duration-300 hover:shadow-2xl hover:border-[var(--color-green)]/30 animate-fade-in-up animate-delay-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-green)]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 pointer-events-none" />
              <div className="relative">
                <div className="p-6 sm:p-8 pb-4 sm:pb-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-[2px] w-8 bg-[var(--color-green)] rounded-full" />
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-charcoal)]">
                      Our Location
                    </div>
                  </div>
                </div>
                <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.198509554!2d55.2708!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzQ5LjkiTiA1NcKwMTYnMTQuOSJF!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title="HCT Services Location - Emgate Building, Business Bay, Dubai"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
