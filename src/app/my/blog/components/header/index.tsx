"use client";

import { Highlight } from "@/components";
import { Chip } from "@/components/ui/chip";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function BlogHeader(): JSX.Element {
  const { ref, inView: isInView, entry } = useInView({
    threshold: 0,
    rootMargin: "-200px 0px 0px 0px"
  })

  useEffect(() => {
    console.log("In view state: ", isInView, entry)
  }, [isInView])

  return (
    <header ref={ref} className="pt-12">
      <div className="container px-6 flex flex-col gap-6 ">
        <Link href="/">
          Go home
        </Link>

        <Chip
          variant='tonal'
          color="default"
        >
          Read my blog
        </Chip>
        <h1 className="text-4xl lg:text-6xl font-lora font-medium">
          Stack of <Highlight className="px-2 lg:px-4">Ideas</Highlight>
        </h1>
        <p className="text-lg lg:text-2xl font-light opacity-80">
          A blog about development, tech trends, and best practices to help you write better code and understand the digital future.
        </p>
      </div>
      {!isInView && (
        <div className="fixed h-20 w-full top-0 left-0 z-10 bg-indigo-500/20 backdrop-blur-xl"></div>
      )}
    </header>
  )
}