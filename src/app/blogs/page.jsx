import BlogsSection from "@/components/Blogs/BlogsSection";
import { getAllBlogs } from "@/lib/data";

export default async function Blogs() {
  const blogs = await getAllBlogs();

  return <BlogsSection blogs={blogs} />;
}
