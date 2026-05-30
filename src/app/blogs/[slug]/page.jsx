import { notFound } from "next/navigation";
import { getAllBlogs } from "@/lib/data";
import BlogContent from "@/components/Blogs/BlogContent";

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const blogs = await getAllBlogs();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) notFound();

  return <BlogContent blog={blog} />;
}
