import { PostStatus } from "@/constants/blog";

export interface PostContent {

}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  cover_img:string;
  published_date: Date;
  content: PostContent;
  author?: string;
  status: PostStatus;
  tags?: string[];
}