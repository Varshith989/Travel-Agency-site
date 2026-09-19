import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/lib/data/journal";

export const metadata = {
  title: "The Aerova Journal — Travel Essays & Guides",
  description: "Curated destination essays, seasonal insights, and cultural chronicles from our global travel architects.",
};

export default function JournalIndexPage() {
  const featuredArticle = blogPosts[0];
  const regularArticles = blogPosts.slice(1);

  return (
    <div className="pt-28 pb-28 min-h-screen bg-[#F8F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFECE6] text-[#D9A441] text-xs uppercase tracking-widest font-semibold mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Editorial Chronicles</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#111111] tracking-tight">
            Stories from the Road
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#737373] font-light leading-relaxed">
            Essays on hidden corners, centuries-old ceremonies, culinary masterclasses, and the meditative joy of slow travel.
          </p>
        </div>

        {/* Featured Big Article */}
        {featuredArticle && (
          <Link
            href={`/journal/${featuredArticle.slug}`}
            className="group block mb-16 rounded-3xl overflow-hidden bg-white border border-[#171717]/8 shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[460px]">
                <Image
                  src={featuredArticle.coverImage}
                  alt={featuredArticle.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#737373] mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#111111] text-white text-[10px] uppercase tracking-wider font-semibold">
                      {featuredArticle.category}
                    </span>
                    <span>{featuredArticle.publishedAt}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#D9A441]" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] leading-tight group-hover:text-[#D9A441] transition-colors mb-4">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-sm text-[#737373] font-light leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#D9A441]/40">
                      <Image
                        src={featuredArticle.authorAvatar}
                        alt={featuredArticle.authorName}
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-xs text-[#111111]">
                        {featuredArticle.authorName}
                      </p>
                      <p className="text-[10px] text-[#737373]">{featuredArticle.authorRole}</p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#111111] group-hover:text-[#D9A441] transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Regular Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((post) => (
            <Link
              key={post.id}
              href={`/journal/${post.slug}`}
              className="group flex flex-col justify-between bg-white rounded-3xl overflow-hidden border border-[#171717]/8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] uppercase tracking-wider text-white font-semibold">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] text-[#737373] mb-2.5">
                    <span>{post.publishedAt}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#D9A441]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#111111] leading-snug group-hover:text-[#D9A441] transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#737373] font-light line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-gray-100 mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[#D9A441]/40">
                    <Image
                      src={post.authorAvatar}
                      alt={post.authorName}
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs text-[#111111] font-medium">{post.authorName}</span>
                </div>

                <div className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#111111] group-hover:text-[#D9A441] transition-colors">
                  <span>Read</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
