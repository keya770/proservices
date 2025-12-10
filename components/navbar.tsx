"use client";

import { useState } from "react";
import Image from "next/image";
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
    <header className="sticky top-0 z-50 border-b border-white/50 bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_-35px_rgba(12,18,52,0.65)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3 sm:py-4">
          <Link href="/" className="group flex items-center gap-3 rounded-full px-2 py-1 transition hover:-translate-y-0.5">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[var(--color-gold)]/30 blur-md opacity-0 transition group-hover:opacity-100" />
              <Image
                src="/pro_logo.png"
                alt="HCT Services logo for UAE PRO and visa services"
                width={44}
                height={44}
                priority
                className="relative h-11 w-11 rounded-2xl border border-white/70 object-contain shadow"
              />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
                HCT Services
              </div>
              <div className="text-lg font-semibold text-slate-900 leading-tight">
                AL HASEL Consultancy
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-semibold transition before:absolute before:bottom-[-10px] before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-[var(--color-navy)] before:transition before:origin-left ${
                  isActive(link.href)
                    ? "text-[var(--color-navy)] before:scale-x-100"
                    : "text-slate-600 hover:text-[var(--color-navy)] hover:before:scale-x-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-navy)] to-[#0f1933] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[var(--color-navy)]/20 transition hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition group-hover:opacity-100" />
              <span className="relative">Book Consultation</span>
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
