import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionTitle from "@/components/section-title";
import ServiceEnquiryForm from "@/components/service-enquiry-form";
import { getServiceBySlug, services } from "@/lib/services";
import { ShieldCheckIcon, ClockIcon, SparklesIcon } from "@heroicons/react/24/outline";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return {
      title: "Service not found | PRO DESK UAE",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://pro-desk-uae.example.com/services/${service.slug}`,
      type: "article",
    },
  };
}

const ServicePage = ({ params }: { params: { slug: string } }) => {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const currentService = service;

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[var(--color-navy)] py-14 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)] via-[#0f1b34] to-[#0b1120] opacity-90" />
        <div className="absolute right-10 top-6 h-40 w-40 rounded-full bg-[var(--color-gold)]/15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">PRO Services</p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">{service?.name}</h1>
          <p className="mt-3 max-w-3xl text-base text-slate-200">{currentService.tagline}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <SectionTitle
              eyebrow="Overview"
              title={currentService.name}
              subtitle={currentService.description}
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)]">
                  <ClockIcon className="h-4 w-4" /> Processing time
                </div>
                <p className="mt-2 text-sm text-slate-600">{currentService.processingTime}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)]">
                  <SparklesIcon className="h-4 w-4" /> Starting fee
                </div>
                <p className="mt-2 text-sm text-slate-600">{currentService.startingFee}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:col-span-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)]">
                  <ShieldCheckIcon className="h-4 w-4" /> Ideal for
                </div>
                <p className="mt-2 text-sm text-slate-600">{currentService.idealFor}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--color-navy)]">What&apos;s Included</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {currentService.whatsIncluded.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3">
                    <span className="text-[var(--color-gold)]">•</span>
                    <p className="text-sm text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-navy)]">Eligibility</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {currentService.eligibility.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[var(--color-gold)]">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-navy)]">Required Documents</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {currentService.documents.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[var(--color-gold)]">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--color-navy)]">Step-by-step process</h3>
              <div className="mt-4 space-y-3">
                {currentService.steps.map((step, index) => (
                  <div key={step} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-navy)] text-xs font-semibold text-white">
                      {index + 1}
                    </div>
                    <p className="text-sm text-slate-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:sticky lg:top-28">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100">
              <div className="text-sm font-semibold text-[var(--color-navy)]">Summary</div>
              <p className="mt-2 text-sm text-slate-600">{currentService.shortDescription}</p>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <div>
                  <span className="font-semibold text-[var(--color-navy)]">Processing:</span> {currentService.processingTime}
                </div>
                <div>
                  <span className="font-semibold text-[var(--color-navy)]">Starting fee:</span> {currentService.startingFee}
                </div>
                <div>
                  <span className="font-semibold text-[var(--color-navy)]">Ideal for:</span> {currentService.idealFor}
                </div>
              </div>
            </div>

            <div>
              <div className="mb-3 text-sm font-semibold text-[var(--color-navy)]">Request this service now</div>
              <ServiceEnquiryForm serviceName={currentService.name} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
