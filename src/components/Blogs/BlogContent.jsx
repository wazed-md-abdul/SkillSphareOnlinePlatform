"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogContent = ({ blog, relatedBlogs = [] }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [likes, setLikes] = useState(42);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = blog.content.map((_, idx) => document.getElementById(`section-${idx}`));
    
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 250; // offset
      let currentSectionIdx = 0;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          currentSectionIdx = i;
        }
      }
      setActiveSection(currentSectionIdx);
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [blog.content]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const liked = localStorage.getItem(`blog-liked-${blog.slug}`) === "true";
      const bookmarked = localStorage.getItem(`blog-bookmarked-${blog.slug}`) === "true";
      setIsLiked(liked);
      setIsBookmarked(bookmarked);
      setLikes(liked ? 43 : 42);
    }
  }, [blog.slug]);

  const toggleLike = () => {
    const newLiked = !isLiked;
    setIsLiked(newLiked);
    setLikes((prev) => (newLiked ? prev + 1 : prev - 1));
    localStorage.setItem(`blog-liked-${blog.slug}`, String(newLiked));
  };

  const toggleBookmark = () => {
    const newBookmarked = !isBookmarked;
    setIsBookmarked(newBookmarked);
    localStorage.setItem(`blog-bookmarked-${blog.slug}`, String(newBookmarked));
  };

  const copyToClipboard = () => {
    if (typeof window !== "undefined") {
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(() => {
        setToastMessage("Link copied to clipboard!");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500);
      });
    }
  };

  const shareTwitter = () => {
    if (typeof window !== "undefined") {
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`;
      window.open(url, "_blank", "width=600,height=400");
    }
  };

  const shareLinkedIn = () => {
    if (typeof window !== "undefined") {
      const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
      window.open(url, "_blank", "width=600,height=400");
    }
  };

  const scrollToSection = (idx) => {
    const element = document.getElementById(`section-${idx}`);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <article className="container mx-auto px-4 md:px-8 py-20 min-h-screen relative overflow-hidden rounded-3xl pb-32">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left transition-transform duration-100" 
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Background blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-tertiary/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Back link */}
      <div className="mb-8 relative z-10 max-w-7xl mx-auto">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-all font-label font-bold text-sm bg-surface-container-low hover:bg-surface-container-highest px-4 py-2 rounded-full border border-outline-variant/10 shadow-sm"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Back to Blogs
        </Link>
      </div>

      {/* Hero Image Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10 aspect-[21/9] rounded-2xl overflow-hidden mb-12 shadow-[0px_20px_40px_rgba(25,28,29,0.1)] group/hero border border-outline-variant/10"
      >
        <img className="w-full h-full object-cover transition-transform duration-1000 group-hover/hero:scale-105" src={blog.imageUrl} alt={blog.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"></div>
      </motion.div>

      {/* Article Header */}
      <motion.header 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-3xl mx-auto mb-16 relative z-10"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-primary/10 text-primary border border-primary/20 px-3.5 py-1.5 rounded-full font-label font-bold text-[10px] tracking-wider uppercase">
            {blog.category}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
          <span className="text-on-surface-variant text-sm font-medium">{blog.readTime}</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-on-surface leading-[1.12] mb-6">
          {blog.title}
        </h1>
        <p className="text-xl text-on-surface-variant font-body leading-relaxed border-l-2 border-outline-variant/30 pl-4">
          {blog.excerpt}
        </p>

        {/* Author metadata info card */}
        <div className="flex items-center justify-between gap-4 mt-10 pt-8 border-t border-outline-variant/20">
          <div className="flex items-center gap-4">
            <img
              className="w-12 h-12 rounded-full object-cover border border-outline-variant/20 shadow-sm"
              src={blog.authorAvatar}
              alt={blog.author}
            />
            <div>
              <p className="font-bold text-on-surface text-base">{blog.author}</p>
              <p className="text-sm text-on-surface-variant/80 font-medium">{blog.date}</p>
            </div>
          </div>
          {/* Quick actions for mobile view in header */}
          <div className="flex gap-2 lg:hidden">
            <button 
              onClick={toggleLike}
              className={`p-2.5 rounded-full border border-outline-variant/20 hover:bg-surface-container-low transition-all cursor-pointer ${isLiked ? 'text-red-500 bg-red-50/50' : 'text-on-surface-variant'}`}
            >
              <span className={`material-symbols-outlined text-lg ${isLiked ? 'fill-icon' : ''}`}>favorite</span>
            </button>
            <button 
              onClick={toggleBookmark}
              className={`p-2.5 rounded-full border border-outline-variant/20 hover:bg-surface-container-low transition-all cursor-pointer ${isBookmarked ? 'text-primary bg-primary/5' : 'text-on-surface-variant'}`}
            >
              <span className={`material-symbols-outlined text-lg ${isBookmarked ? 'fill-icon' : ''}`}>bookmark</span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Article Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto relative z-10">
        
        {/* Left Column: Sticky Actions (Desktop only) */}
        <motion.aside 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-1 hidden lg:block"
        >
          <div className="sticky top-32 flex flex-col items-center gap-6 py-6 border border-outline-variant/20 rounded-2xl bg-surface-container-lowest shadow-sm">
            <button 
              onClick={toggleLike}
              title="Like Post"
              className="group flex flex-col items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className={`material-symbols-outlined text-2xl p-2.5 rounded-full bg-surface-container-low group-hover:bg-primary/10 transition-all duration-300 ${isLiked ? 'fill-icon text-red-500 bg-red-50' : 'text-on-surface-variant'}`}>
                favorite
              </span>
              <span className="text-xs font-bold text-on-surface-variant group-hover:text-primary">{likes}</span>
            </button>

            <button 
              onClick={toggleBookmark}
              title="Bookmark Post"
              className="group flex flex-col items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className={`material-symbols-outlined text-2xl p-2.5 rounded-full bg-surface-container-low group-hover:bg-primary/10 transition-all duration-300 ${isBookmarked ? 'fill-icon text-primary bg-primary/10' : 'text-on-surface-variant'}`}>
                bookmark
              </span>
            </button>

            <div className="w-8 h-px bg-outline-variant/30 my-1"></div>

            <button 
              onClick={copyToClipboard}
              title="Copy Link"
              className="group flex flex-col items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-2xl p-2.5 rounded-full bg-surface-container-low group-hover:bg-primary/10 text-on-surface-variant group-hover:text-primary transition-all duration-300">
                link
              </span>
            </button>

            <button 
              onClick={shareTwitter}
              title="Share on Twitter"
              className="group flex flex-col items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="p-2.5 rounded-full bg-surface-container-low group-hover:bg-primary/10 transition-all duration-300">
                <svg className="w-5 h-5 text-on-surface-variant group-hover:text-primary fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </span>
            </button>

            <button 
              onClick={shareLinkedIn}
              title="Share on LinkedIn"
              className="group flex flex-col items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="p-2.5 rounded-full bg-surface-container-low group-hover:bg-primary/10 transition-all duration-300">
                <svg className="w-5 h-5 text-on-surface-variant group-hover:text-primary fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </span>
            </button>
          </div>
        </motion.aside>

        {/* Middle Column: Article Content */}
        <div className="lg:col-span-8 space-y-12">
          {/* Key Takeaways callout box */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary/[0.04] border-l-4 border-primary rounded-r-2xl p-6 relative overflow-hidden border border-outline-variant/10 shadow-sm"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-primary text-3xl">lightbulb</span>
              <div>
                <h4 className="font-bold text-primary font-display text-sm tracking-wide uppercase mb-1">Key Takeaway</h4>
                <p className="text-on-surface-variant font-body leading-relaxed text-[0.98rem]">{blog.excerpt}</p>
              </div>
            </div>
          </motion.div>

          {/* Paragraph mapping */}
          {blog.content.map((section, idx) => (
            <motion.section 
              key={idx} 
              id={`section-${idx}`} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="group scroll-mt-28"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-on-surface mb-4 leading-snug flex items-center">
                <span className="w-1.5 h-6 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-4 mr-2.5 hidden md:inline-block"></span>
                {section.heading}
              </h2>
              <p className="text-on-surface-variant font-body leading-relaxed text-[1.05rem] whitespace-pre-line">
                {section.text}
              </p>
            </motion.section>
          ))}
        </div>

        {/* Right Column: Sticky Table of Contents (Desktop only) */}
        <motion.aside 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-3 hidden lg:block"
        >
          <div className="sticky top-32 p-6 border border-outline-variant/20 rounded-2xl bg-surface-container-lowest shadow-sm space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-outline">Table of Contents</h4>
            <nav className="flex flex-col gap-3">
              {blog.content.map((section, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(idx)}
                  className={`text-left text-sm font-medium transition-all duration-200 hover:text-primary cursor-pointer border-l-2 pl-3 py-1 ${
                    activeSection === idx 
                      ? 'border-primary text-primary font-bold' 
                      : 'border-transparent text-on-surface-variant/80'
                  }`}
                >
                  {section.heading}
                </button>
              ))}
            </nav>
          </div>
        </motion.aside>

      </div>

      {/* Footer CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto mt-24 pt-16 border-t border-outline-variant/20 relative z-10"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-background to-tertiary/10 p-8 md:p-12 border border-outline-variant/20 text-center shadow-lg">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-tertiary/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full font-label font-bold text-xs tracking-wider uppercase">
              Elevate Your Skills
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-black text-on-surface leading-tight">
              Ready to start your learning journey?
            </h3>
            <p className="text-on-surface-variant max-w-lg mx-auto font-body leading-relaxed">
              Explore our curated, project-based courses and join a worldwide community of lifelong learners.
            </p>
            <div className="pt-2">
              <Link
                href="/allcourses"
                className="inline-flex items-center gap-3 bg-primary text-white hover:bg-primary/90 hover:scale-105 active:scale-98 transition-all px-8 py-4 rounded-full font-label font-bold text-sm shadow-md shadow-primary/20 cursor-pointer"
              >
                Browse Courses
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Related Blogs section */}
      {relatedBlogs && relatedBlogs.length > 0 && (
        <div className="max-w-7xl mx-auto mt-24 pt-16 border-t border-outline-variant/20 relative z-10">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-display font-bold text-on-surface mb-8"
          >
            Related Articles
          </motion.h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedBlogs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex"
              >
                <Link 
                  href={`/blogs/${item.slug}`} 
                  className="group flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/10 shadow-sm hover:-translate-y-1.5 transition-all duration-300 w-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-primary font-label font-bold text-[9px] tracking-wider uppercase shadow-sm">
                        {item.category.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[11px] text-on-surface-variant/80 font-medium">
                        <span>{item.date}</span>
                        <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                        <span>{item.readTime}</span>
                      </div>
                      <h5 className="font-display font-bold text-on-surface text-base line-clamp-2 group-hover:text-primary transition-colors leading-snug">{item.title}</h5>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile action bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface/90 backdrop-blur-md border-t border-outline-variant/20 py-3.5 px-8 flex items-center justify-between lg:hidden shadow-[0_-5px_15px_rgba(25,28,29,0.05)]">
        {/* Reading progress in mobile action bar */}
        <div className="absolute top-0 left-0 h-0.5 bg-primary transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
        
        <button 
          onClick={toggleLike}
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
        >
          <span className={`material-symbols-outlined text-2xl ${isLiked ? 'fill-icon text-red-500' : ''}`}>favorite</span>
          <span className="text-sm font-semibold">{likes}</span>
        </button>

        <button 
          onClick={toggleBookmark}
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
        >
          <span className={`material-symbols-outlined text-2xl ${isBookmarked ? 'fill-icon text-primary' : ''}`}>bookmark</span>
        </button>

        <button 
          onClick={copyToClipboard}
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-2xl">link</span>
        </button>
      </div>

      {/* Custom Copy Toast Notification */}
      {showToast && (
        <div 
          className="fixed bottom-24 lg:bottom-10 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface px-6 py-3.5 rounded-full flex items-center gap-3 shadow-xl z-50 animate-pulse-soft border border-outline-variant/10"
          style={{ transition: "all 0.3s ease-in-out" }}
        >
          <span className="material-symbols-outlined text-primary-fixed text-xl fill-icon">check_circle</span>
          <span className="font-label font-bold text-xs tracking-wide">{toastMessage}</span>
        </div>
      )}
    </article>
  );
};

export default BlogContent;
