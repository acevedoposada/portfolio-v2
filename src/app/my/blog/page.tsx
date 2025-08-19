import Link from "next/link";
import { BlogCard } from "./components/card";

export default function Blog() {
  return (
    <div className="container px-6 py-12">
      <Link href="/">Go home</Link>
      <div className="py-14 flex flex-col gap-10">
        <BlogCard variant='featured' image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=4470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <BlogCard variant='featured' image="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=4470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <BlogCard variant='featured' image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=4076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </div>
  )
}