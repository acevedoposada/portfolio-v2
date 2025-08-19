import Link from "next/link";
import { BlogCard } from "./components/card";

export default function Blog() {
  return (
    <div className="container px-6 py-12">
      <Link href="/">Go home</Link>
      <div className="py-14">
        <BlogCard variant='featured' />
      </div>
    </div>
  )
}