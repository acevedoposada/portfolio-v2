import { PixelCard } from "@/components/ui/pixel-card";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="container">
      <Link href="/">Go home</Link>
      <h1>This is the blog</h1>
      <PixelCard variant='yellow' className="h-40 w-40 group text-center">
        <h1 className="group-hover:opacity-0 absolute">Content</h1>
        <h2 className="opacity-0 group-hover:opacity-100 absolute">Content 2</h2>
      </PixelCard>
    </div>
  )
}