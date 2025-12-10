"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import type { FAQItem } from "@/lib/content";

type Props = {
  items: FAQItem[];
};

const FAQAccordion = ({ items }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-[var(--color-navy)]/20 hover:shadow-md"
          >
            <button
              className="flex w-full items-center justify-between gap-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="text-sm font-semibold text-[var(--color-navy)] sm:text-base">
                {item.question}
              </span>
              <ChevronDownIcon
                className={`h-5 w-5 text-[var(--color-navy)] transition ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && <p className="mt-3 text-sm text-slate-600">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
