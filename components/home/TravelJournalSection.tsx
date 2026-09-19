"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data/journal";

export default function TravelJournalSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A441] mb-2 block">
            Editorial Perspectives
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] tracking-tight">
            Stories from the road.
          </h2>
          <p className="mt-3 text-base text-[#737373] max-w-xl font-light">
            Thoughtful destination guides, culinary explorations, and insider essays from our global curators.
          </p>
        </div>

        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#111111] hover:text-[#D9A441] transition-colors group"
        >
          <span>Read All Stories</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* 4 Article Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={`/journal/${post.slug}`}
            className="group flex flex-col justify-between bg-white rounded-3xl overflow-hidden border border-[#171717]/8 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div>
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#111111]/80 backdrop-blur-md text-[10px] uppercase tracking-wider text-white font-semibold">
                  {post.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-[11px] text-[#737373] mb-2.5">
                  <span>{post.publishedAt}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D9A441]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#111111] leading-snug group-hover:text-[#D9A441] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="mt-2.5 text-xs text-[#737373] font-light line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>

            {/* Read Link */}
            <div className="px-6 pb-6 pt-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#111111] group-hover:text-[#D9A441] transition-colors">
              <span>Read article</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
