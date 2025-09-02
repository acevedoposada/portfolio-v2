import { BlogPost } from "@/models/blog";

export async function getBlogPosts(): Promise<BlogPost[]> {
  const res = await fetch(`/api/blog`);
  if (!res.ok) throw new Error("Error fetching blog posts");
  return res.json();
}
