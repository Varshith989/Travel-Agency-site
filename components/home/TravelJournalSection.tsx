"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data/journal";

export default function TravelJournalSection() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <section className="py-16 sm:py-28 bg-[#FAF8F5] border-t border-[#181918]/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#C29D59]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C29D59]">
                The Aerova Dispatch
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#0D1315] tracking-[-0.03em] leading-[1.08]">
              Essays from the road.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#585A57] font-light leading-relaxed max-w-xl">
              Curator essays, rare seasonal calendars, and culinary notes penned by our
              explorers stationed across global capitals.
            </p>
          </div>

          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#0D1315] hover:text-[#C29D59] transition-colors group shrink-0"
          >
            <span>Read All Dispatches</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Asymmetric Magazine Spread Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {featuredPost && (
            <Link
              href={`/journal/${featuredPost.slug}`}
              className="lg:col-span-7 group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#181918]/8 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-[400px] w-full overflow-hidden bg-gray-100">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-4 sm:top-6 left-4 sm:left-6 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] uppercase tracking-widest text-[#E5D2AE] font-semibold border border-white/10">
                  {featuredPost.category}
                </span>

                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-2 text-gray-200">
                    <Clock className="w-3.5 h-3.5 text-[#C29D59]" />
                    <span>{featuredPost.readTime}</span>
                    <span>•</span>
                    <span>{featuredPost.publishedAt}</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#C29D59]">
                    Lead Feature
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-8 sm:p-10 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#0D1315] leading-snug group-hover:text-[#C29D59] transition-colors mb-3">
                    {featuredPost.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#585A57] font-light leading-relaxed line-clamp-3 mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-5 sm:pt-6 border-t border-[#181918]/8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#C29D59]/30">
                      <Image
                        src={featuredPost.authorAvatar}
                        alt={featuredPost.authorName}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                    <div className="text-xs">
                      <span className="font-medium text-[#0D1315] block">
                        {featuredPost.authorName}
                      </span>
                      <span className="text-[#7A7C78] text-[11px]">
                        {featuredPost.authorRole}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0D1315] group-hover:text-[#C29D59] transition-colors">
                    <span>Read Essay</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Secondary Editorial Stories (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
            {otherPosts.slice(0, 2).map((post) => (
              <Link
                key={post.id}
                href={`/journal/${post.slug}`}
                className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#181918]/8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-500 p-5 sm:p-7 flex flex-col justify-between flex-1"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#7A7C78] mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#F4F0E8] text-[#585A57] font-medium uppercase tracking-wider text-[10px]">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#C29D59]" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0D1315] leading-snug group-hover:text-[#C29D59] transition-colors mb-2.5">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#585A57] font-light line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#181918]/6 flex items-center justify-between text-xs">
                  <span className="text-[#7A7C78] text-[11px]">{post.publishedAt}</span>
                  <div className="inline-flex items-center gap-1 font-semibold uppercase tracking-wider text-[#0D1315] group-hover:text-[#C29D59] transition-colors">
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
