import { BlogPost } from "@/models/blog";
import axios from "axios";

export async function getBlogPosts(): Promise<BlogPost[]> {
  const res = await axios.get(`/api/blog`);
  if (res.status !== 200) throw new Error("Error fetching blog posts");
  return res.data;
}
