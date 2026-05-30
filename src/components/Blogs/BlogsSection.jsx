"use client";
import { useState } from "react";
import BlogCard from "./BlogCard";

const BlogsSection = ({ blogs }) => {
  const categories = [...new Set(blogs.map((b) => b.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  return (
    <main className="container mx-auto px-8 py-20 min-h-screen relative overflow-hidden rounded-3xl">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Section Header */}
      <div className="mb-16 relative z-10">
        <span className="text-primary font-label font-bold tracking-widest text-xs uppercase mb-4 block">
          SkillSphare Blog
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-on-surface leading-[1.1] mb-6">
          Insights, stories &<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-fixed-dim">
            resources for learners
          </span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl font-body">
          How-to guides, success stories, alumni spotlights, and everything you need to make the most of your learning journey.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-12 flex flex-wrap items-center gap-3 relative z-10 rounded-3xl">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-5 py-2.5 rounded-full font-label font-bold text-sm transition-all cursor-pointer ${
            activeCategory === "All"
              ? "bg-primary text-on-primary shadow-lg shadow-primary/20"
              : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-highest"
          }`}
        >
          All Posts
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full font-label font-bold text-sm transition-all cursor-pointer ${
              activeCategory === cat
                ? "bg-primary text-on-primary shadow-lg shadow-primary/20"
                : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-highest"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards Grid */}
      {filteredBlogs.length === 0 ? (
        <div className="text-center py-20 relative z-10">
          <span className="material-symbols-outlined text-6xl text-outline/40 mb-4">article</span>
          <p className="text-xl font-bold text-on-surface mb-2">No posts in this category yet</p>
          <p className="text-on-surface-variant">Check back soon for new content!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {filteredBlogs.map((blog, idx) => (
            <BlogCard key={idx} blog={blog} />
          ))}
        </div>
      )}
    </main>
  );
};

export default BlogsSection;
