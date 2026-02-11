import { useState } from "react";
import { blogs } from "../../server/blogs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";
import BlogCard from "./BlogCard";
import BlogReader from "../components/BlogReader";

type BlogData = {
  slug: string
  title: string
  excerpt: string
  tags: string[]
  image: string
  date: string
  readingTime: string
  content: string
}

const blogArray: BlogData[] = blogs

export default function BlogGrid() {
  const [activeBlog, setActiveBlog] = useState<BlogData | null>(null);

  return (
    <PageWrapper>
    <Navbar />
    <section className="max-w-7xl mx-auto px-5 py-17 mb-7">
      <h1 className="text-3xl font-bold text-white mb-12">
        Blog
      </h1>

      <div className="grid gap-10 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] ">
        {blogArray.map(blog => (
          <BlogCard key={blog.slug} blog={blog} onRead={() => setActiveBlog(blog)} />
        ))}
      </div>
    </section>

    {activeBlog && (<BlogReader contentPath={activeBlog.content} onClose={() => setActiveBlog(null)} />)}
    </PageWrapper>
  )
}
