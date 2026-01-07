import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | HCT Services | UAE PRO & Visa Services",
  description:
    "Terms and Conditions for AL HASEL Consultancy Services LLC (HCT Services). Read our terms of service for UAE PRO services, visa processing, and business setup.",
  keywords: [
    "terms and conditions",
    "HCT Services terms",
    "UAE PRO services terms",
    "terms of service",
    "AL HASEL Consultancy terms",
  ],
  alternates: { canonical: "https://example.ae/terms" },
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
    title: "Terms and Conditions | HCT Services | UAE PRO & Visa Services",
    description:
      "Terms and Conditions for AL HASEL Consultancy Services LLC (HCT Services). Read our terms of service for UAE PRO services, visa processing, and business setup.",
    url: "https://example.ae/terms",
    type: "website",
    siteName: "HCT Services | AL HASEL Consultancy Services LLC",
    locale: "en_US",
    images: [{ url: "https://example.ae/pro_logo.png", width: 1200, height: 630, alt: "HCT Services Terms and Conditions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | HCT Services | UAE PRO & Visa Services",
    description: "Terms and Conditions for AL HASEL Consultancy Services LLC (HCT Services).",
    images: ["https://example.ae/pro_logo.png"],
  },
};

const TermsPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white">
      <h1 className="sr-only">Terms and Conditions - HCT Services</h1>

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
            Terms and Conditions
          </h1>
          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-200 leading-relaxed">
            Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
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
                These Terms and Conditions (&quot;Terms&quot;) govern your use of the services provided by AL HASEL Consultancy Services LLC 
                (&quot;HCT Services&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using our services, you agree to be bound by these Terms. 
                If you do not agree to these Terms, please do not use our services.
              </p>
            </div>

            {/* Services */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4 flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                1. Services
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                HCT Services provides UAE PRO services, visa processing, business setup, and related consultancy services. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>PRO services for labor, immigration, attestations, and renewals</li>
                <li>Visa processing (freelance, employment, dependent visas)</li>
                <li>Business setup services (Dubai mainland and freezone)</li>
                <li>Fine waiver applications and compliance support</li>
                <li>Document attestation and legalization</li>
                <li>Banking introductions and related services</li>
              </ul>
            </div>

            {/* Service Agreement */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4 flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                2. Service Agreement
              </h2>
              <div className="space-y-4 text-slate-700">
                <p className="leading-relaxed">
                  When you engage our services, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate, complete, and up-to-date information and documents</li>
                  <li>Pay all fees as agreed upon in the service quotation</li>
                  <li>Comply with all applicable UAE laws and regulations</li>
                  <li>Cooperate with our team and provide necessary documentation in a timely manner</li>
                  <li>Use our services only for lawful purposes</li>
                </ul>
              </div>
            </div>

            {/* Fees and Payment */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4 flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                3. Fees and Payment
              </h2>
              <div className="space-y-4 text-slate-700">
                <p className="leading-relaxed">
                  <strong>Service Fees:</strong> All service fees will be clearly communicated to you before we begin work. 
                  Fees are typically divided into government fees (payable to UAE authorities) and service fees (our consultancy charges).
                </p>
                <p className="leading-relaxed">
                  <strong>Payment Terms:</strong> Payment terms will be specified in your service agreement. Generally, 
                  a deposit may be required to commence services, with the balance due upon completion or as per the agreed schedule.
                </p>
                <p className="leading-relaxed">
                  <strong>Refunds:</strong> Government fees paid to authorities are non-refundable. Service fees may be refundable 
                  only in exceptional circumstances and at our sole discretion, subject to the work already completed.
                </p>
              </div>
            </div>

            {/* Client Responsibilities */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4 flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                4. Client Responsibilities
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>Providing accurate and complete information and documentation</li>
                <li>Ensuring all documents are valid, authentic, and properly attested where required</li>
                <li>Meeting deadlines for document submission and payments</li>
                <li>Informing us promptly of any changes to your circumstances or requirements</li>
                <li>Complying with all UAE laws, regulations, and visa conditions</li>
                <li>Maintaining the validity of your documents (passport, visa, Emirates ID, etc.)</li>
              </ul>
            </div>

            {/* Service Limitations */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4 flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                5. Service Limitations and Timelines
              </h2>
              <div className="space-y-4 text-slate-700">
                <p className="leading-relaxed">
                  <strong>Processing Times:</strong> While we strive to process applications as quickly as possible, processing 
                  times are subject to government authority schedules and are beyond our control. We will provide estimated 
                  timelines but cannot guarantee specific completion dates.
                </p>
                <p className="leading-relaxed">
                  <strong>Approval Guarantees:</strong> We cannot guarantee approval of visas, licenses, or other applications, 
                  as final decisions rest with UAE government authorities. We will use our best efforts to ensure applications 
                  are properly prepared and submitted.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4 flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                6. Limitation of Liability
              </h2>
              <p className="text-slate-700 leading-relaxed">
                To the maximum extent permitted by law, HCT Services shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, 
                or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services. Our total 
                liability shall not exceed the amount you paid us for the specific service in question.
              </p>
            </div>

            {/* Confidentiality */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4 flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                7. Confidentiality
              </h2>
              <p className="text-slate-700 leading-relaxed">
                We maintain strict confidentiality regarding your personal information and documents. We will only disclose information 
                as necessary to provide our services, comply with legal obligations, or as required by UAE government authorities 
                for processing your applications.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4 flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                8. Intellectual Property
              </h2>
              <p className="text-slate-700 leading-relaxed">
                All content, materials, and intellectual property on our website and in our service materials are owned by HCT Services 
                or our licensors. You may not reproduce, distribute, or create derivative works without our prior written consent.
              </p>
            </div>

            {/* Termination */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4 flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                9. Termination
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Either party may terminate the service agreement with reasonable notice. Upon termination, you remain responsible for 
                any fees incurred for services already provided. We reserve the right to suspend or terminate services if you breach 
                these Terms or fail to make required payments.
              </p>
            </div>

            {/* Governing Law */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4 flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                10. Governing Law
              </h2>
              <p className="text-slate-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes 
                arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4 flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                11. Changes to Terms
              </h2>
              <p className="text-slate-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the 
                updated Terms on our website. Your continued use of our services after such changes constitutes acceptance of the 
                modified Terms.
              </p>
            </div>

            {/* Contact */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100/70 sm:p-8">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-4 flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                12. Contact Information
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us:
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

export default TermsPage;

