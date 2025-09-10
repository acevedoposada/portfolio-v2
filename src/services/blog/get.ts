import { apiInstance } from "@/helpers/instances";
import { BlogPost } from "@/models/blog";

export async function getBlogPosts(): Promise<BlogPost[]> {
  const res = await apiInstance.get(`/api/blog`);
  if (res.status !== 200) throw new Error("Error fetching blog posts");
  return res.data;
}
