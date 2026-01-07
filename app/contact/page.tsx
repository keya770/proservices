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
    "Call +971 54 542 0537 or email haselconsultancy@gmail.com for UAE PRO services, freelance visa UAE, employment visa Dubai, fine waiver help, and business setup support.",
  alternates: { canonical: "https://example.ae/contact" },
  openGraph: {
    title: "Contact HCT Services | UAE PRO, Visa & Dubai Business Setup Consultation",
    description:
      "Reach AL HASEL Consultancy (HCT Services) for UAE PRO services, Dubai business setup, freelance visa UAE, and employment visa Dubai guidance.",
    url: "https://example.ae/contact",
    type: "website",
    siteName: "HCT Services | AL HASEL Consultancy Services LLC",
    images: [{ url: "https://example.ae/og-image.jpg", width: 1200, height: 630, alt: "Contact HCT Services Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact HCT Services | UAE PRO, Visa & Dubai Business Setup Consultation",
    description:
      "Talk to HCT Services for UAE PRO services, freelance visa UAE, employment visa Dubai, fine waiver help, and business setup support.",
    images: ["https://example.ae/og-image.jpg"],
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
            src="/medium-shot-smiley-business-man.jpg"
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

      {/* Contact Information Cards */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Phone Card */}
            <a
              href="tel:+971545420537"
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-100/70 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-green)]/40 hover:shadow-xl hover:shadow-[var(--color-green)]/10 animate-fade-in-up"
              style={{ animationDelay: "0.1s", opacity: 0 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-green)]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-green)]/10 text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30 transition-transform duration-300 group-hover:scale-110">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500 mb-1">Phone</div>
                <div className="text-sm font-semibold text-[var(--color-charcoal)]">+971 54 542 0537</div>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/971545420537"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-100/70 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-green)]/40 hover:shadow-xl hover:shadow-[var(--color-green)]/10 animate-fade-in-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-green)]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-green)]/10 text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30 transition-transform duration-300 group-hover:scale-110">
                  <ChatBubbleLeftRightIcon className="h-6 w-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500 mb-1">WhatsApp</div>
                <div className="text-sm font-semibold text-[var(--color-charcoal)]">+971 54 542 0537</div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:haselconsultancy@gmail.com"
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-100/70 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-green)]/40 hover:shadow-xl hover:shadow-[var(--color-green)]/10 animate-fade-in-up"
              style={{ animationDelay: "0.3s", opacity: 0 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-green)]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-green)]/10 text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30 transition-transform duration-300 group-hover:scale-110">
                  <EnvelopeIcon className="h-6 w-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500 mb-1">Email</div>
                <div className="text-sm font-semibold text-[var(--color-charcoal)] break-all">haselconsultancy@gmail.com</div>
              </div>
            </a>

            {/* Office Card */}
            <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-100/70 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-green)]/40 hover:shadow-xl hover:shadow-[var(--color-green)]/10 animate-fade-in-up"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-green)]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-green)]/10 text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30 transition-transform duration-300 group-hover:scale-110">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500 mb-1">Office</div>
                <div className="text-sm font-semibold text-[var(--color-charcoal)] leading-relaxed">
                  P.O Box: 32935, Office 313, Emgate Building, Near Business Bay Metro Station (Sea Side), Dubai, UAE
                </div>
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
