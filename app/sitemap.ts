import { MetadataRoute } from "next";
import { destinations } from "@/lib/data/destinations";
import { packages } from "@/lib/data/packages";
import { blogPosts } from "@/lib/data/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aerovatravels.com";

  const staticPages = [
    "",
    "/destinations",
    "/experiences",
    "/packages",
    "/about",
    "/journal",
    "/contact",
    "/plan-trip",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const destinationPages = destinations.map((d) => ({
    url: `${baseUrl}/destinations/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const packagePages = packages.map((p) => ({
    url: `${baseUrl}/packages/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const journalPages = blogPosts.map((j) => ({
    url: `${baseUrl}/journal/${j.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...destinationPages, ...packagePages, ...journalPages];
}
