import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts, renderPostHtml } from "@/lib/posts";

export const dynamicParams = false;
export function generateStaticParams() { return posts.map((post) => ({ slug: post.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const post = getPost((await params).slug); return post ? { title: post.title, description: post.excerpt, openGraph: { type: "article", title: post.title, description: post.excerpt, publishedTime: post.date, modifiedTime: post.modified } } : {}; }

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  return <main className="cc-section cc-article-wrap"><article className="cc-article"><header><p className="cc-kicker">/ WRITEUP — {post.date.slice(0, 10).replaceAll("-", ".")}</p><h1>{post.title}</h1><div className="cc-article-meta"><span>CYBERCENTAURI</span>{post.categories.map((category) => <Link href={`/category/${category.slug}/`} key={category.slug}>{category.name}</Link>)}<span>{new Date(`${post.date}Z`).toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" })}</span></div></header><div className="cc-article-body" dangerouslySetInnerHTML={{ __html: renderPostHtml(post.content) }} /><footer className="cc-article-footer"><Link className="cc-arrow" href="/writeups/">← Back to writeup archive</Link></footer></article></main>;
}
