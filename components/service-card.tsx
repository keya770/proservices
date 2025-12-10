import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { Service } from "@/lib/services";

type Props = {
  service: Pick<Service, "name" | "shortDescription" | "slug" | "tagline">;
  icon?: React.ReactNode;
};

const ServiceCard = ({ service, icon }: Props) => {
  return (
    <div className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-lg shadow-slate-100 transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[var(--color-gold)] via-[#f7c14f] to-[#4c6fff] opacity-80" />
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-gold)]/50 via-[#ffe8ab] to-white text-[var(--color-navy)] shadow-inner shadow-[var(--color-gold)]/30">
          {icon ?? <span className="text-lg font-bold">★</span>}
        </div>
        <div>
          <h3 className="balanced text-lg font-semibold text-[var(--color-navy)]">{service.name}</h3>
          <p className="balanced text-xs text-slate-500">{service.tagline}</p>
        </div>
      </div>
      <p className="balanced text-sm text-slate-600">{service.shortDescription}</p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] transition group-hover:gap-3"
      >
        Learn more <ArrowRightIcon className="h-4 w-4" />
      </Link>
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-br from-white/0 via-white/40 to-white/0 opacity-0 transition group-hover:opacity-100" />
    </div>
  );
};

export default ServiceCard;
