import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Archive } from "@/components/archive";
import { categories, getCategory, postsForCategory } from "@/lib/posts";

export const dynamicParams = false;
export function generateStaticParams() { return categories.map((category) => ({ slug: category.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const category = getCategory((await params).slug); return category ? { title: `${category.name} writeups`, description: `${category.name} security writeups from CyberCentauri.` } : {}; }
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const category = getCategory(slug); if (!category) notFound(); return <Archive items={postsForCategory(slug)} activeCategory={slug} title={category.name} description={`${category.name} security writeups focused on practical methodology, responsible research, and defensive lessons.`} />; }
