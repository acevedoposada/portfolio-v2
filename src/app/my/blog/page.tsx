"use client";
import { ChangeEventHandler, SyntheticEvent, useState } from "react";

import { DotsBackground } from "@/components/ui/dots-background";
import FormField from "@/components/ui/form-field";
import Tabs from "@/components/ui/tabs";
import Tab from "@/components/ui/tab";

import { BlogCard } from "./components/card";
import BlogHeader from "./components/header";
import { useQuery } from "@tanstack/react-query";
import { getBlogPosts } from "@/services/blog/get";

export default function Blog() {
  const { data: blogs } = useQuery({
    queryKey: ["posts"],
    queryFn: getBlogPosts
  })

  console.log(blogs)

  const [value, setValue] = useState<number | string>(0);
  const [search, setSearch] = useState<string>("");

  const handleChangeTab = (_event: SyntheticEvent, value: number | string) => {
    setValue(value);
  }

  const handleChangeSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div className="pb-12">
      <BlogHeader />
      <div className="container px-6 pb-14 pt-10 md:pt-14 flex flex-col gap-12">
        <BlogCard
          variant='featured'
          image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=4076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Design In The Age Of AI: How to adapt lazily."
          description="With slothUI, you can unleash your inner Gen Z and just stop caring about anything else."
          avatar={{
            name: "David Acevedo",
            img: '/static/images/david-acevedo.webp'
          }}
          date={new Date()}
          tags={['UI/UX', 'Design System', 'Sleep & Care']}
        />
        <div className="flex flex-col md:flex-row gap-4 whitespace-nowrap">
          <Tabs value={value} onChange={handleChangeTab}>
            <Tab label="All" />
            <Tab label="Design" />
            <Tab label="Gen Z Stuff" />
            <Tab label="User Interface" badge={12} />
            <Tab label="User Experience" />
          </Tabs>
          <FormField
            value={search}
            onChange={handleChangeSearch}
            name="search"
            icon="search"
            suffix="USD"
            prefix="$"
            iconPosition="right"
            placeholder="Search..."
            button="Copy"
            buttonIcon="copy"
            disabled
          />
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          <BlogCard
            variant='post'
            image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=4470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Design In The Age Of AI: How to adapt lazily."
            description="With slothUI, you can unleash your inner Gen Z and just stop caring about anything else."
            avatar={{
              name: "David Acevedo",
              img: '/static/images/david-acevedo.webp'
            }}
            date={new Date()}
            tags={['UI/UX', 'Design System', 'Sleep & Care']}
            readTime={6}
          />
          <BlogCard
            variant='post'
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=3882&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Design In The Age Of AI: How to adapt lazily."
            description="With slothUI, you can unleash your inner Gen Z and just stop caring about anything else."
            avatar={{
              name: "David Acevedo",
              img: '/static/images/david-acevedo.webp'
            }}
            date={new Date()}
            tags={['UI/UX', 'Design System', 'Sleep & Care']}
            readTime={6}
          />
          <BlogCard
            variant='post'
            image="https://images.unsplash.com/photo-1755306064502-6df8d7ee33f7?q=80&w=4469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Design In The Age Of AI: How to adapt lazily."
            description="With slothUI, you can unleash your inner Gen Z and just stop caring about anything else."
            avatar={{
              name: "David Acevedo",
              img: '/static/images/david-acevedo.webp'
            }}
            date={new Date()}
            tags={['UI/UX', 'Design System', 'Sleep & Care']}
            readTime={6}
          />
        </div>
      </div>
      <div className="absolute w-screen h-full overflow-x-hidden pointer-events-none select-none top-0">
        <DotsBackground speed={{ left: 55, right: 65 }} />
      </div>
    </div>
  )
}