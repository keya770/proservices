import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BaseImage from "@/components/base-image";
import { getBlogPostBySlug, blogPosts } from "@/lib/blog";
import { CalendarIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://example.ae/blog/${slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://example.ae/blog/${slug}`,
      type: "article",
      siteName: "HCT Services | AL HASEL Consultancy Services LLC",
      images: post.image
        ? [{ url: `https://example.ae${post.image}`, width: 1200, height: 630, alt: post.title }]
        : [{ url: "https://example.ae/og-image.jpg", width: 1200, height: 630, alt: post.title }],
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: post.image ? [`https://example.ae${post.image}`] : ["https://example.ae/og-image.jpg"],
    },
  };
}

const BlogPostPage = async ({ params }: Props) => {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Get current post index for navigation
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // Convert markdown-like content to HTML (simple conversion)
  const formatContent = (content: string) => {
    const lines = content.split("\n");
    const result: string[] = [];
    let inList = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Headers
      if (trimmed.startsWith("# ")) {
        if (inList) {
          result.push("</ul>");
          inList = false;
        }
        result.push(`<h1 class="text-3xl font-bold text-[var(--color-charcoal)] mt-8 mb-4">${trimmed.substring(2)}</h1>`);
        continue;
      }
      if (trimmed.startsWith("## ")) {
        if (inList) {
          result.push("</ul>");
          inList = false;
        }
        result.push(`<h2 class="text-2xl font-bold text-[var(--color-charcoal)] mt-6 mb-3">${trimmed.substring(3)}</h2>`);
        continue;
      }
      if (trimmed.startsWith("### ")) {
        if (inList) {
          result.push("</ul>");
          inList = false;
        }
        result.push(`<h3 class="text-xl font-semibold text-[var(--color-charcoal)] mt-5 mb-2">${trimmed.substring(4)}</h3>`);
        continue;
      }

      // Lists
      if (trimmed.startsWith("- ")) {
        if (!inList) {
          result.push('<ul class="list-disc ml-6 mb-4 space-y-2">');
          inList = true;
        }
        let listContent = trimmed.substring(2);
        // Handle bold in lists
        listContent = listContent.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>');
        result.push(`<li class="leading-relaxed">${listContent}</li>`);
        continue;
      }

      // Close list if we hit a non-list line
      if (inList && trimmed !== "") {
        result.push("</ul>");
        inList = false;
      }

      // Empty lines
      if (trimmed === "") {
        result.push("<br />");
        continue;
      }

      // Tables (skip for now)
      if (trimmed.startsWith("|")) {
        continue;
      }

      // Regular paragraphs
      let paragraphContent = line;
      // Handle bold
      paragraphContent = paragraphContent.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>');
      result.push(`<p class="mb-4 leading-relaxed text-[var(--color-charcoal-light)]">${paragraphContent}</p>`);
    }

    // Close any open list
    if (inList) {
      result.push("</ul>");
    }

    return result.join("\n");
  };

  const formattedContent = formatContent(post.content);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal-light)] to-[var(--color-charcoal-dark)] py-16 text-white sm:py-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <BaseImage
            src={post.image || "/standard-quality-control-collage-concept.jpg"}
            alt={post.title}
            fill
            className="object-cover opacity-20"
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E]/95 via-[#2E2E2E]/90 to-[#1E1E1E]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,106,54,0.15),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(15,106,54,0.10),transparent_30%)]" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/blog"
            className="group mb-6 inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-[var(--color-green)]"
          >
            <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Blog</span>
          </Link>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full bg-[var(--color-green)]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30 backdrop-blur-sm">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="balanced mb-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              <time dateTime={post.date}>{formattedDate}</time>
            </div>
            <span>•</span>
            <span>By {post.author}</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div
          className="prose prose-lg max-w-none text-[var(--color-charcoal-light)]"
          dangerouslySetInnerHTML={{ __html: formattedContent }}
        />

        {/* CTA Section */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-lg">
          <h3 className="mb-4 text-xl font-bold text-[var(--color-charcoal)]">
            Need Expert Help?
          </h3>
          <p className="mb-6 text-[var(--color-charcoal-light)]">
            Our team is ready to assist you with your UAE business or visa needs. Get in touch for personalized guidance.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-green)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--color-green)]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-green-light)] hover:shadow-[var(--color-green)]/40 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            <span className="relative z-10">Contact Us</span>
            <span className="relative z-10 text-base transition-transform group-hover:translate-x-1">↗</span>
          </Link>
        </div>
      </article>

      {/* Navigation */}
      {(prevPost || nextPost) && (
        <section className="border-t border-slate-200 bg-slate-50 py-8">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {prevPost && (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--color-green)]/40 hover:shadow-md"
                >
                  <ArrowLeftIcon className="h-5 w-5 text-[var(--color-green)] transition-transform group-hover:-translate-x-1" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-charcoal-light)]">
                      Previous
                    </div>
                    <div className="mt-1 text-sm font-semibold text-[var(--color-charcoal)] line-clamp-2">
                      {prevPost.title}
                    </div>
                  </div>
                </Link>
              )}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--color-green)]/40 hover:shadow-md md:ml-auto"
                >
                  <div className="flex-1 text-right">
                    <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-charcoal-light)]">
                      Next
                    </div>
                    <div className="mt-1 text-sm font-semibold text-[var(--color-charcoal)] line-clamp-2">
                      {nextPost.title}
                    </div>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 text-[var(--color-green)] transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPostPage;
