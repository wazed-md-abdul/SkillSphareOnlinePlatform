import React from 'react';
import CourseCard from './NewReleasesCard';
import { getAllCourses } from '@/lib/data';
import { filter } from 'framer-motion/client';


const NewReleases = async () => {
const allcourses = await getAllCourses();
  const courses = allcourses?.data || [];
  const fillteredCourse = courses.filter((course)=> course.level === "Beginner" );
  const fillteredCourses = fillteredCourse.slice(0, 3);

  

  return (
    <main className="max-w-7xl mx-auto px-8 py-20 min-h-screen relative overflow-hidden">
      {/* Decorative Floating Elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Section Header */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div className="max-w-2xl">
          <span className="text-primary font-label font-bold tracking-widest text-xs uppercase mb-4 block">New Releases</span>
          <h1 className="text-5xl md:text-6xl font-display font-extrabold tracking-tight text-on-surface leading-[1.1]">
            Fresh skills just dropped  <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-fixed-dim">explore our newest courses and stay ahead.</span>
          </h1>
        </div>
        <div className="flex items-center gap-4 bg-surface-container-low p-2 rounded-full">
          <button className="bg-primary text-on-primary px-6 py-3 rounded-full font-label font-bold text-sm shadow-lg shadow-primary/20 cursor-pointer">NewReleases</button>

        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {fillteredCourses.map((courses, idx) => (
          <CourseCard key={idx} courses={courses} />
        ))}
      </div>

      {/* Asymmetric Promotion Section */}
      
    </main>
  );
};

export default NewReleases;
