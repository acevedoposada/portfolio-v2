import { PostStatus } from "@/constants/blog";
import { db } from "@/lib/firebase";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const blogRef = collection(db, "blog");
    const q = query(blogRef, where("state", "==", PostStatus.PUBLISHED));
    const querySnapshot = await getDocs(q);

    const postPromises = querySnapshot.docs.map(async (doc) => {
      const postData = doc.data();
      const contentSnap = await getDoc(postData.content);
      return {
        id: doc.id,
        ...postData,
        published_date: postData.published_date?.toDate() ?? undefined,
        content: contentSnap.data(),
      };
    });

    const settledResults = await Promise.allSettled(postPromises);

    const posts = settledResults
      .filter(result => result.status === "fulfilled")
      .map(result => (result as PromiseFulfilledResult<any>).value);

    return NextResponse.json(posts);
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