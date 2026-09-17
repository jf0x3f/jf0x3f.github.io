import postsData from "@/content/posts.json";
import { pagesBasePath } from "@/lib/site";

export type Post = {
  id: number;
  slug: string;
  title: string;
  date: string;
  modified: string;
  excerpt: string;
  content: string;
  categories: { name: string; slug: string }[];
  image: string | null;
};

export const posts = (postsData as Post[]).toSorted(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export const categories = Array.from(
  new Map(posts.flatMap((post) => post.categories.map((category) => [category.slug, category]))).values(),
).map((category) => ({
  ...category,
  count: posts.filter((post) => post.categories.some((item) => item.slug === category.slug)).length,
}));

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function postsForCategory(slug: string) {
  return posts.filter((post) => post.categories.some((category) => category.slug === slug));
}

export function renderPostHtml(content: string) {
  if (!pagesBasePath) return content;
  return content.replaceAll('src="/uploads/', `src="${pagesBasePath}/uploads/`);
}

export function publicAsset(path: string) {
  return `${pagesBasePath}${path}`;
}
