"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href) || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur shadow-lg shadow-black/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3 sm:py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-xl bg-[var(--color-gold)] px-2 py-1 text-xs font-semibold text-[var(--color-navy)]">
              KEYA
            </div>
            <div className="text-lg font-semibold text-slate-900">
              KEYA PRO DESK UAE
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-[var(--color-navy)]"
                    : "text-slate-600 hover:text-[var(--color-navy)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="rounded-full bg-[var(--color-navy)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[var(--color-navy)]/20 transition hover:-translate-y-0.5 hover:bg-[#111a32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]"
            >
              Book Consultation
            </Link>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-full bg-white p-2 text-slate-900 shadow md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden border-t border-slate-200 bg-white`}
      >
        <nav className="flex flex-col px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-3 text-sm font-semibold transition-colors ${
                isActive(link.href)
                  ? "bg-slate-100 text-[var(--color-navy)]"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg bg-[var(--color-navy)] px-3 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-[var(--color-navy)]/20 transition hover:-translate-y-0.5"
          >
            Book Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
