import Link from "next/link";
import BaseImage from "@/components/base-image";
import { ArrowRightIcon, CalendarIcon } from "@heroicons/react/24/outline";
import type { BlogPost } from "@/lib/blog";

type Props = {
  post: Pick<BlogPost, "title" | "excerpt" | "slug" | "date" | "category" | "image">;
};

const BlogCard = ({ post }: Props) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[var(--color-green)]/40">
      {/* Top accent bar */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-green)] via-[#1a8a4a] to-[var(--color-green-dark)] z-10" />
      
      {/* Blog image */}
      <div className="relative h-48 w-full overflow-hidden">
        <BaseImage
          src={post.image || "/medium-shot-smiley-business-man.jpg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
        
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-[var(--color-green)]/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white shadow-lg ring-2 ring-white/30">
            {post.category}
          </span>
        </div>
      </div>
      
      {/* Card content */}
      <div className="flex flex-col flex-1 p-5 pt-4">
        {/* Date */}
        <div className="flex items-center gap-2 mb-3 text-xs text-[var(--color-charcoal-light)]">
          <CalendarIcon className="h-4 w-4" />
          <time dateTime={post.date}>{formattedDate}</time>
        </div>
        
        {/* Title */}
        <h3 className="balanced text-lg font-semibold text-[var(--color-charcoal)] mb-2 line-clamp-2">
          {post.title}
        </h3>
        
        {/* Excerpt */}
        <p className="balanced text-sm text-[var(--color-charcoal-light)] mb-4 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        
        {/* CTA Link */}
        <Link
          href={`/blog/${post.slug}`}
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-green)] transition-all duration-300 group-hover:gap-3 group/link"
        >
          <span>Read more</span>
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
      
      {/* Hover effect overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-green)]/0 via-[var(--color-green)]/5 to-[var(--color-green)]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Decorative corner accent */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[var(--color-green)]/5 to-transparent rounded-tl-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  );
};

export default BlogCard;
