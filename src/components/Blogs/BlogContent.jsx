import Link from "next/link";

const BlogContent = ({ blog }) => {
  return (
    <article className="max-w-7xl mx-auto px-8 py-20 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-tertiary/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Back link */}
      <div className="mb-8 relative z-10">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors font-label font-bold text-sm"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Back to Blogs
        </Link>
      </div>

      {/* Hero Image */}
      <div className="relative aspect-[21/9] rounded-xl overflow-hidden mb-12 shadow-[0px_20px_40px_rgba(25,28,29,0.1)]">
        <img className="w-full h-full object-cover" src={blog.imageUrl} alt={blog.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Article Header */}
      <header className="max-w-3xl mx-auto mb-12 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-primary-container text-primary px-3 py-1.5 rounded-full font-label font-bold text-[10px] tracking-wider uppercase">
            {blog.category}
          </span>
          <span className="text-outline text-sm font-medium">{blog.readTime}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-on-surface leading-[1.15] mb-6">
          {blog.title}
        </h1>
        <p className="text-xl text-on-surface-variant font-body leading-relaxed">
          {blog.excerpt}
        </p>
        <div className="flex items-center gap-4 mt-8 pt-8 border-t border-outline-variant/20">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={blog.authorAvatar}
            alt={blog.author}
          />
          <div>
            <p className="font-bold text-on-surface">{blog.author}</p>
            <p className="text-sm text-outline">{blog.date}</p>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto relative z-10 space-y-10">
        {blog.content.map((section, idx) => (
          <section key={idx}>
            <h2 className="text-2xl font-display font-bold text-on-surface mb-4 leading-snug">
              {section.heading}
            </h2>
            <p className="text-on-surface-variant font-body leading-relaxed text-[1.05rem]">
              {section.text}
            </p>
          </section>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="max-w-3xl mx-auto mt-16 pt-12 border-t border-outline-variant/20 text-center relative z-10">
        <h3 className="text-2xl font-display font-bold text-on-surface mb-3">
          Ready to start your learning journey?
        </h3>
        <p className="text-on-surface-variant mb-6">
          Explore our courses and join a community of lifelong learners.
        </p>
        <Link
          href="/allcourses"
          className="inline-flex items-center gap-2 bg-on-surface text-tertiary-fixed px-8 py-3.5 rounded-full font-label font-bold text-sm hover:opacity-90 active:scale-95 transition-all"
        >
          Browse Courses
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </Link>
      </div>
    </article>
  );
};

export default BlogContent;
