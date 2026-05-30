import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <article className="group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_20px_40px_rgba(25,28,29,0.06)] border border-outline-variant/10 transition-all duration-500 hover:-translate-y-2">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={blog.imageUrl}
          alt={blog.title}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full text-primary font-label font-bold text-[10px] tracking-wider uppercase">
            {blog.category}
          </span>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2 text-outline text-xs font-medium">
          <span>{blog.date}</span>
          <span className="w-1 h-1 rounded-full bg-outline/40"></span>
          <span>{blog.readTime}</span>
        </div>
        <h3 className="text-xl font-display font-bold text-on-surface leading-snug group-hover:text-primary transition-colors">
          {blog.title}
        </h3>
        <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2">
          {blog.excerpt}
        </p>
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={blog.authorAvatar}
              alt={blog.author}
            />
            <span className="text-on-surface-variant text-sm font-medium">{blog.author}</span>
          </div>
          <Link
            href={`/blogs/${blog.slug}`}
            className="bg-on-surface text-tertiary-fixed px-5 py-2.5 rounded-full font-label font-bold text-xs hover:opacity-90 active:scale-95 transition-all cursor-pointer"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
