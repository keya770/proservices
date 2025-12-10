import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import SectionTitle from "@/components/section-title";

export const metadata: Metadata = {
  title: "Contact KEYA PRO DESK UAE | Book a Consultation",
  description:
    "Contact KEYA PRO DESK UAE for PRO services, visa processing, fine waiver help, and business setup in Dubai. Fast response within 24 hours.",
  openGraph: {
    title: "Contact KEYA PRO DESK UAE | Book a Consultation",
    description:
      "Reach KEYA PRO DESK UAE for UAE PRO services, visa support, and business setup guidance. We respond within one business day.",
    url: "https://pro-desk-uae.example.com/contact",
    type: "website",
  },
};

const ContactPage = () => {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-100 bg-gradient-to-br from-[var(--color-light)] via-white to-[#eef2ff] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Contact"
            title="Let's Talk"
            subtitle="We usually respond within 24 hours. Share your plans and we will map the fastest route to approvals."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-100">
            <div className="text-sm font-semibold text-[var(--color-navy)]">Contact details</div>
            <p className="mt-2 text-sm text-slate-600">
              Reach us via WhatsApp, phone, or email. We will align on timelines, costs, and required documents before any submission.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">Phone</div>
                <div className="text-[var(--color-navy)]">+971 50 123 4567</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">WhatsApp</div>
                <div className="text-[var(--color-navy)]">+971 50 123 4567</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">Email</div>
                <div className="text-[var(--color-navy)]">info@example.ae</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">Office</div>
                <div className="text-[var(--color-navy)]">Business Bay, Dubai, UAE</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-100">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
