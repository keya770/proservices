import type { Testimonial } from "@/lib/content";

type Props = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100">
      <div className="text-4xl text-[var(--color-gold)]">“</div>
      <p className="mt-3 text-sm text-slate-700 sm:text-base">{testimonial.message}</p>
      <div className="mt-4 text-sm font-semibold text-[var(--color-navy)]">
        {testimonial.name}
      </div>
      <div className="text-xs text-slate-500">{testimonial.location}</div>
    </div>
  );
};

export default TestimonialCard;
