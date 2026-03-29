import { notFound } from "next/navigation";
import { products, getProduct } from "@/lib/products";
import type { Metadata } from "next";
import ProductPageClient from "./ProductPageClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return {
    title: `${product.name} - ${product.tagline}`,
    description: product.description.split("\n")[0],
    openGraph: {
      title: `${product.name} | Tess's Apothecary`,
      description: product.tagline,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Tess's Apothecary`,
      description: product.tagline,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return <ProductPageClient product={product} related={related} />;
}
