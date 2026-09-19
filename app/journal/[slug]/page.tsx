import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data/journal";
import { ArrowLeft, Clock, Calendar, Share2, Compass } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} — The Aerova Journal`,
    description: post.excerpt,
  };
}

export default async function JournalDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="pt-28 pb-28 min-h-screen bg-[#F8F7F3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#737373] hover:text-[#D9A441] transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>The Aerova Journal</span>
        </Link>

        {/* Article Meta Header */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-xs text-[#737373]">
            <span className="px-3 py-1 rounded-full bg-[#111111] text-white text-[10px] uppercase tracking-wider font-semibold">
              {post.category}
            </span>
            <span>{post.publishedAt}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#D9A441]" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
            {post.title}
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-[#737373] leading-relaxed">
            {post.subtitle}
          </p>

          {/* Author Byline */}
          <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#D9A441]/40">
                <Image
                  src={post.authorAvatar}
                  alt={post.authorName}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-serif font-bold text-sm text-[#111111]">{post.authorName}</p>
                <p className="text-xs text-[#737373]">{post.authorRole}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Cover Image */}
        <div className="relative h-[55vh] min-h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-12">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Main Editorial Text */}
        <div className="prose prose-lg max-w-none text-[#171717] font-serif space-y-6 leading-relaxed text-base sm:text-lg">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="font-light text-gray-800">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white border border-[#171717]/8 text-xs font-medium text-[#737373]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Plan Trip Callout */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#111111] text-white text-center space-y-4">
          <span className="text-[10px] uppercase tracking-widest text-[#D9A441] font-semibold block">
            Bespoke Planning
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Inspired by this story?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto font-light">
            Our curators can turn this exact route into your personalized private voyage.
          </p>
          <div className="pt-2">
            <Link
              href="/plan-trip"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#D9A441] text-[#111111] text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors"
            >
              <span>Design Your Trip</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
