import React from 'react';
import CourseCard from './CourseCard';
import { getAllCourses } from '@/lib/data';


const CoursePathways = async () => {
const allcourses = await getAllCourses();
  const courses = allcourses?.data || [];
  const fillteredCourses = courses.filter((course)=> course.rating >= 4.9);

  

  return (
    <main className="max-w-7xl mx-auto px-8 py-20 min-h-screen relative overflow-hidden">
      {/* Decorative Floating Elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Section Header */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div className="max-w-2xl">
          <span className="text-primary font-label font-bold tracking-widest text-xs uppercase mb-4 block">Popular Pathways</span>
          <h1 className="text-5xl md:text-6xl font-display font-extrabold tracking-tight text-on-surface leading-[1.1]">
            Master the art of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-fixed-dim">Popular Creation.</span>
          </h1>
        </div>
        <div className="flex items-center gap-4 bg-surface-container-low p-2 rounded-full">
          <button className="bg-primary text-on-primary px-6 py-3 rounded-full font-label font-bold text-sm shadow-lg shadow-primary/20 cursor-pointer">Popular</button>

        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {fillteredCourses.map((courses, idx) => (
          <CourseCard key={idx} courses={courses} />
        ))}
      </div>

      {/* Asymmetric Promotion Section */}
      <div className="mt-32 relative bg-surface-container-low rounded-xl p-12 md:p-20 overflow-hidden">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-black text-on-surface leading-tight">Beyond the standard <br /> learning curve.</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed font-body max-w-md">Our curriculum is designed for the modern world. We don't just teach skills; we cultivate a signature perspective through hands-on mentorship and high-fidelity project work.</p>
            <div className="flex flex-wrap gap-4">
              {["Curated Mentors", "Project Based", "Lifetime Access"].map((tag) => (
                <div key={tag} className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-sm font-bold text-on-surface">{tag}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-container to-surface-container rounded-lg rotate-3 absolute -inset-4 opacity-30"></div>
            <img 
              className="relative z-10 rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbOUR53RxKIeVSv0TgsXd2D4NlxLH6Xzo1xgkktisNvRWAna9a__SsvUplYdUDv-vid1QSAg9G3PX3R4ocjUwXTWybrRagP8mkm5Mf0b-Z0Vl8SsP9WHfclCbn-ixyQuYHe8VfcqwaNTCHgR_hZI23KtXVfCJrkq0ddvFpuNO9u5SsLyhsOl47TcW9Nxn05nAEKNpfwpe6F4z50vPDuwV6SS1m31cU9bUjNUqVrRyt_XQ6mu5jMFt0x9RN6Y_wu4uuhwZTXYL0y1Fx" 
              alt="Collaboration" 
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoursePathways;
