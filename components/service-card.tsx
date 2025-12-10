import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { Service } from "@/lib/services";

type Props = {
  service: Pick<Service, "name" | "shortDescription" | "slug" | "tagline">;
  icon?: React.ReactNode;
};

const ServiceCard = ({ service, icon }: Props) => {
  return (
    <div className="group flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-gold)]/20 text-[var(--color-navy)]">
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
    </div>
  );
};

export default ServiceCard;
