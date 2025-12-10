import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold text-[var(--color-navy)]">KEYA PRO DESK UAE</div>
            <p className="mt-3 text-sm text-slate-600">
              Smart PRO, visa, and business setup support for founders, freelancers, and enterprises
              across the UAE. We manage the paperwork; you focus on growth.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">Quick Links</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-[var(--color-navy)]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">Contact</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
              <span>Phone / WhatsApp: +971 50 123 4567</span>
              <span>Email: info@example.ae</span>
              <span>Office: Business Bay, Dubai, UAE</span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © {year} KEYA PRO DESK UAE. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
