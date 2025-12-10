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
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          <div>
            <div className="text-lg font-semibold text-[var(--color-navy)]">AL HASEL Consultancy Services LLC</div>
            <p className="balanced mt-3 max-w-md text-sm leading-relaxed text-slate-600">
              Providing 2-year freelance visa at an investment price with fast, reliable PRO and business services support across Dubai.
            </p>
            <p className="balanced mt-2 text-xs text-slate-500">
              Serving entrepreneurs, freelancers, and companies across Dubai and the United Arab Emirates.
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
              <span>Phone / WhatsApp: +971 54 542 0537</span>
              <span>Email: haselconsultancy@gmail.com</span>
              <span>P.O Box: 32935</span>
              <span>Office 313, Emgate Building,</span>
              <span>Near Business Bay Metro Station (Sea Side), Dubai, UAE</span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © {year} AL HASEL Consultancy Services LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
