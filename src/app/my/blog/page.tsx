import { EspecularButton } from "@/components/ui/button";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="container">
      <Link href="/">Go home</Link>
      <h1>This is the blog</h1>
      <EspecularButton>
        This is my button
      </EspecularButton>
    </div>
  )
}