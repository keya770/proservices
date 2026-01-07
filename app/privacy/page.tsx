import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/section-title";

export const metadata: Metadata = {
  title: "Privacy Policy | HCT Services | UAE PRO & Visa Services",
  description:
    "Privacy Policy for AL HASEL Consultancy Services LLC (HCT Services). Learn how we collect, use, and protect your personal information.",
  keywords: [
    "privacy policy",
    "HCT Services privacy",
    "data protection",
    "UAE privacy policy",
    "AL HASEL Consultancy privacy",
  ],
  alternates: { canonical: "https://example.ae/privacy" },
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
    title: "Privacy Policy | HCT Services | UAE PRO & Visa Services",
    description:
      "Privacy Policy for AL HASEL Consultancy Services LLC (HCT Services). Learn how we collect, use, and protect your personal information.",
    url: "https://example.ae/privacy",
    type: "website",
    siteName: "HCT Services | AL HASEL Consultancy Services LLC",
    locale: "en_US",
    images: [{ url: "https://example.ae/pro_logo.png", width: 1200, height: 630, alt: "HCT Services Privacy Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | HCT Services | UAE PRO & Visa Services",
    description: "Privacy Policy for AL HASEL Consultancy Services LLC (HCT Services).",
    images: ["https://example.ae/pro_logo.png"],
  },
};

const PrivacyPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white">
      <h1 className="sr-only">Privacy Policy - HCT Services</h1>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal-light)] to-[var(--color-charcoal-dark)] py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,106,54,0.15),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(15,106,54,0.10),transparent_30%)]" />
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-green)]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30 backdrop-blur-sm mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)] animate-pulse" />
            Legal Information
          </div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-200 leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="prose prose-slate max-w-none">
          <div className="space-y-8">
            {/* Introduction */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-[2px] w-8 bg-[var(--color-green)] rounded-full" />
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-charcoal)]">
                  Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                AL HASEL Consultancy Services LLC (&quot;HCT Services&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4 flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                1. Information We Collect
              </h2>
              <div className="space-y-4 text-slate-700">
                <div>
                  <h3 className="font-semibold text-[var(--color-charcoal)] mb-2">Personal Information</h3>
                  <p className="leading-relaxed">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Name, email address, phone number, and contact details</li>
                    <li>Passport information and identification documents</li>
                    <li>Business information and company details</li>
                    <li>Visa and immigration-related documents</li>
                    <li>Payment and billing information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-charcoal)] mb-2">Automatically Collected Information</h3>
                  <p className="leading-relaxed">
                    When you visit our website, we may automatically collect certain information about your device, including:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>IP address and browser type</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                    <li>Device information and operating system</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4 flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                2. How We Use Your Information
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>Provide, maintain, and improve our PRO services, visa processing, and business setup services</li>
                <li>Process your applications and communicate with you about your requests</li>
                <li>Send you updates, notifications, and important information about your services</li>
                <li>Respond to your inquiries, comments, and questions</li>
                <li>Process payments and manage billing</li>
                <li>Comply with legal obligations and regulatory requirements</li>
                <li>Protect our rights, property, and safety, and that of our clients</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4 flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                3. Information Sharing and Disclosure
              </h2>
              <div className="space-y-4 text-slate-700">
                <p className="leading-relaxed">
                  We do not sell your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Government Authorities:</strong> As required for visa processing, business registration, and compliance with UAE laws and regulations</li>
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our business (e.g., payment processors, document attestation services)</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, sale, or transfer of assets</li>
                  <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4 flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                4. Data Security
              </h2>
              <p className="text-slate-700 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet 
                or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4 flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                5. Your Rights
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information (subject to legal and regulatory requirements)</li>
                <li>Object to or restrict processing of your information</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided in the Contact section below.
              </p>
            </div>

            {/* Cookies */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4 flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                6. Cookies and Tracking Technologies
              </h2>
              <p className="text-slate-700 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you 
                do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4 flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                7. Third-Party Links
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or 
                content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4 flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                8. Changes to This Privacy Policy
              </h2>
              <p className="text-slate-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the &quot;Last Updated&quot; date. You are advised to review this Privacy Policy 
                periodically for any changes.
              </p>
            </div>

            {/* Contact */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4 flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                9. Contact Us
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="space-y-2 text-slate-700">
                <p><strong>AL HASEL Consultancy Services LLC</strong></p>
                <p>P.O Box: 32935, Office 313, Emgate Building</p>
                <p>Near Business Bay Metro Station (Sea Side), Dubai, UAE</p>
                <p>Phone: <a href="tel:+971545420537" className="text-[var(--color-green)] hover:underline">+971 54 542 0537</a></p>
                <p>Email: <a href="mailto:haselconsultancy@gmail.com" className="text-[var(--color-green)] hover:underline">haselconsultancy@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-green)] px-6 py-3 text-white font-semibold transition-all duration-300 hover:bg-[var(--color-green-dark)] hover:shadow-lg"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;

