"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconChevronLeft } from "@tabler/icons-react";
import { memo } from "react";
import Link from "next/link";

import { Highlight } from "@/components";
import { Chip } from "@/components/ui/chip";

import styles from './header.module.scss';

const variants: Variants = {
  enter: { y: 0, opacity: 1 },
  exit: { y: -50, opacity: 0 },
}

const BlogHeader = memo((): JSX.Element => {
  const { ref, inView: isInView } = useInView({
    threshold: 0,
    rootMargin: "-200px 0px 0px 0px"
  })

  return (
    <header ref={ref} className="pt-12">
      <div className={styles.header}>
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
          Thought <Highlight className="px-2 lg:px-4">Journal</Highlight>
        </h1>
        <p className="text-lg lg:text-2xl font-light opacity-80">
          A blog about development, tech trends, and best practices to help you write better code and understand the digital future.
        </p>
      </div>
      <AnimatePresence>
        {!isInView && (
          <motion.div
            className={styles.header__fixed}
            variants={variants}
            initial="exit"
            animate="enter"
            exit="exit"
          >
            <div className="container px-6 py-6 flex items-center">
              <Link href="/" className="p-1.5 pl-0 rounded-lg peer transition-all duration-300 hover:bg-indigo-600/25 hover:pl-1.5">
                <IconChevronLeft />
              </Link>
              <h2 className="text-xl lg:text-3xl font-lora font-medium peer-hover:ml-4 transition-all duration-300">
                Thought <Highlight>Journal</Highlight>
              </h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
})

BlogHeader.displayName = 'BlogHeader';

export default BlogHeader