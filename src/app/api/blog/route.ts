import {
  collection,
  getCountFromServer,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  QueryConstraint,
  where,
} from "firebase/firestore";
import { NextResponse } from "next/server";

import { PAGE_SIZE, PostStatus } from "@/constants/blog";
import { db } from "@/lib/firebase";

type BlogPost = {
  id: string;
  published_date?: Date;
  content: any;
  [key: string]: any;
};

async function fetchBlogPosts(page: number): Promise<{ posts: BlogPost[]; count: number }> {
  const blogRef = collection(db, "blog");
  const constraints: QueryConstraint[] = [
    where("state", "==", PostStatus.PUBLISHED),
    orderBy("published_date", "desc"),
    limit(PAGE_SIZE),
  ];
  const countQuery = query(blogRef, where("state", "==", PostStatus.PUBLISHED));
  const paginatedQuery = query(blogRef, ...constraints);

  const [querySnapshot, countSnapshot] = await Promise.all([
    getDocs(paginatedQuery),
    getCountFromServer(countQuery),
  ]);

  const posts: BlogPost[] = await Promise.all(
    querySnapshot.docs.map(async (doc) => {
      const postData = doc.data();
      const contentSnap = await getDoc(postData.content);
      return {
        id: doc.id,
        ...postData,
        published_date: postData.published_date?.toDate(),
        content: contentSnap.data(),
      };
    })
  );

  return {
    posts,
    count: countSnapshot.data().count,
  };
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page") || "1");

    const { posts, count } = await fetchBlogPosts(page);

    return NextResponse.json({ posts, count, page });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch blog posts",
        message: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
