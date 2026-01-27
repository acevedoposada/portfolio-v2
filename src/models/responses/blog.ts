import { BlogPost } from "../entities/blog";

export interface BlogsResponse {
  count: number;
  hasMore: boolean;
  lastDocId: string;
  posts: BlogPost[];
}
