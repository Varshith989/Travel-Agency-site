import { notFound } from "next/navigation";
import { packages } from "@/lib/data/packages";
import PackageDetailClient from "@/components/packages/PackageDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) return { title: "Package Not Found" };

  return {
    title: `${pkg.title} — ${pkg.durationDays} Days | Aerova Travels`,
    description: pkg.tagline,
  };
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  return <PackageDetailClient pkg={pkg} />;
}
