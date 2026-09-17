import type { Metadata } from "next";
import { Archive } from "@/components/archive";
import { posts } from "@/lib/posts";

export const metadata: Metadata = { title: "Writeup archive", description: "Practical security writeups and authorized lab methodology from CyberCentauri." };

export default function WriteupsPage() { return <Archive items={posts} />; }
