import type { Testimonial } from "@/lib/content";

type Props = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-100 transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[var(--color-gold)] via-[#ffe7a3] to-[#4c6fff]" />
      <div className="text-4xl text-[var(--color-gold)]">“</div>
      <p className="balanced mt-3 text-sm text-slate-700 sm:text-base">{testimonial.message}</p>
      <div className="mt-4 text-sm font-semibold text-[var(--color-navy)]">
        {testimonial.name}
      </div>
      <div className="text-xs text-slate-500">{testimonial.location}</div>
    </div>
  );
};

export default TestimonialCard;
