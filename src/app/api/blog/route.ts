import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  QueryConstraint,
  startAfter,
  where,
} from "firebase/firestore";
import { NextResponse } from "next/server";
import CryptoJS from "crypto-js";

import { PAGE_SIZE, PostStatus } from "@/constants/blog";
import { db } from "@/lib/firebase";
import { ENCRYPTION_SECRET } from "@/constants/secrets";

type BlogPost = {
  id: string;
  published_date?: Date;
  content: any;
  [key: string]: any;
};

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const lastId = searchParams.get("lastId") || undefined;
    const page = searchParams.get("page") || undefined;

    const blogRef = collection(db, "blog");
    const whereClause = where("state", "==", PostStatus.PUBLISHED);
    const orderByClause = orderBy("published_date", "desc");

    const queryConstraints: QueryConstraint[] = [orderByClause, whereClause, limit(PAGE_SIZE)];

    if (lastId) {
      const lastDocument = await getDoc(doc(db, "blog", lastId));
      if (!lastDocument.exists()) {
        return NextResponse.json(
          { message: "Error searching the last document id sent" },
          { status: 404 }
        );
      }
      queryConstraints.push(startAfter(lastDocument));
    }

    const q = query(blogRef, ...queryConstraints);
    const querySnapshot = await getDocs(q);
    const countSnapshot = await getDoc(doc(db, "blog_metadata", "counts"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    let count: number = 0;

    if (countSnapshot.exists()) {
      count = countSnapshot.data().value;
    }

    const newLastDocId =
      querySnapshot.size > 0 ? querySnapshot.docs[querySnapshot.size - 1].id : null;

    const response = {
      posts: data,
      lastDocId: newLastDocId,
      count,
      hasMore: querySnapshot.size === PAGE_SIZE,
      page,
    };

    return NextResponse.json(
      CryptoJS.AES.encrypt(JSON.stringify(response), ENCRYPTION_SECRET!).toString(),
      { status: 200 }
    );
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
