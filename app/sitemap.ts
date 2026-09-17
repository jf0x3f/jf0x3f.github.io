import type { MetadataRoute } from "next";
import { categories, posts } from "@/lib/posts";
import { site } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: site.url, lastModified: new Date(), priority: 1 }, { url: `${site.url}/writeups/`, lastModified: new Date(), priority: .9 }, ...posts.map((post) => ({ url: `${site.url}/writeups/${post.slug}/`, lastModified: new Date(`${post.modified}Z`), priority: .8 })), ...categories.map((category) => ({ url: `${site.url}/category/${category.slug}/`, lastModified: new Date(), priority: .6 }))]; }
