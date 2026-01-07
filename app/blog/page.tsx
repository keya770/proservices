import type { Metadata } from "next";
import Link from "next/link";
import BaseImage from "@/components/base-image";
import SectionTitle from "@/components/section-title";
import BlogCard from "@/components/blog-card";
import { blogPosts } from "@/lib/blog";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Blog | UAE PRO Services, Visa & Business Setup Insights | HCT Services",
  description:
    "Expert insights on UAE PRO services, freelance visas, employment visas, business setup, and compliance. Stay updated with the latest UAE business and visa information.",
  alternates: { canonical: "https://example.ae/blog" },
  openGraph: {
    title: "Blog | UAE PRO Services, Visa & Business Setup Insights | HCT Services",
    description:
      "Expert insights and guides on UAE PRO services, visas, business setup, and compliance from HCT Services.",
    url: "https://example.ae/blog",
    type: "website",
    siteName: "HCT Services | AL HASEL Consultancy Services LLC",
    images: [
      { url: "https://example.ae/og-image.jpg", width: 1200, height: 630, alt: "HCT Services Blog" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | UAE PRO Services, Visa & Business Setup Insights | HCT Services",
    description:
      "Expert insights and guides on UAE PRO services, visas, business setup, and compliance.",
    images: ["https://example.ae/og-image.jpg"],
  },
};

const BlogPage = () => {
  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  return (
    <div className="bg-white">
      <h1 className="sr-only">Blog - UAE PRO services, visa, and business setup insights</h1>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal-light)] to-[var(--color-charcoal-dark)] py-16 text-white sm:py-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <BaseImage
            src="/standard-quality-control-collage-concept.jpg"
            alt="Blog"
            fill
            className="object-cover opacity-20"
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E]/95 via-[#2E2E2E]/90 to-[#1E1E1E]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,106,54,0.15),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(15,106,54,0.10),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_35%,rgba(255,255,255,0.08)_70%)] opacity-40" />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Floating decorative elements */}
        <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-[var(--color-green)]/10 blur-2xl animate-[floaty_10s_ease-in-out_infinite]" />
        <div className="absolute right-10 bottom-20 h-40 w-40 rounded-full bg-[var(--color-green)]/10 blur-2xl animate-[floaty_12s_ease-in-out_infinite]" style={{ animationDelay: "2s" }} />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up animate-delay-100">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-green)]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30 backdrop-blur-sm mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)] animate-pulse" />
              Blog
            </div>
          </div>
          <h1 className="balanced mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] animate-fade-in-up animate-delay-200">
            Insights & Guides for UAE Business
          </h1>
          <p className="balanced mt-4 max-w-3xl text-lg sm:text-xl text-slate-200 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] animate-fade-in-up animate-delay-300">
            Expert insights on PRO services, visas, business setup, and compliance to help you navigate the UAE business landscape.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-12 sm:py-16">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,106,54,0.04),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(15,106,54,0.04),transparent_40%)]" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-12 animate-fade-in-up animate-delay-100">
            <SectionTitle
              eyebrow="Latest Articles"
              title="Expert Insights & Guides"
              subtitle="Stay informed with our latest articles on UAE PRO services, visas, business setup, and compliance."
              align="center"
            />
          </div>

          {/* Categories Filter */}
          <div className="mb-8 flex flex-wrap gap-3 justify-center">
            <Link
              href="/blog"
              className="rounded-full border-2 border-[var(--color-green)] bg-[var(--color-green)] px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5"
            >
              All Posts
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog?category=${encodeURIComponent(category)}`}
                className="rounded-full border-2 border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[var(--color-charcoal)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-green)]/40 hover:bg-slate-50"
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <div
                key={post.slug}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s`, opacity: 0 }}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 py-12 sm:py-16">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,106,54,0.04),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(15,106,54,0.04),transparent_40%)]" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-100/70 sm:p-10 transition-all duration-300 hover:shadow-2xl hover:border-[var(--color-green)]/30 animate-fade-in-up animate-delay-100">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-green)]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <h3 className="balanced text-2xl sm:text-3xl font-bold text-[var(--color-charcoal)]">
                  Need Expert Help?
                </h3>
                <p className="balanced text-base text-[var(--color-charcoal-light)]">
                  Contact us for personalized guidance on your UAE business or visa needs.
                </p>
              </div>
              <Link
                href="/contact"
                className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-green)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--color-green)]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-green-light)] hover:shadow-[var(--color-green)]/40 overflow-hidden sm:flex-shrink-0"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                <span className="relative z-10">Get Consultation</span>
                <span className="relative z-10 text-base transition-transform group-hover/btn:translate-x-1">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
