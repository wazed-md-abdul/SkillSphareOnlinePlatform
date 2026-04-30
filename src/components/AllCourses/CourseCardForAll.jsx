import { getAllCourses } from '@/lib/data';
import Link from 'next/link';
import React from 'react';

const CourseCard = ({ course }) => {
 
  return (
    <>
      <div className="group relative bg-surface-container-lowest rounded-xl p-6 transition-all duration-500 hover:shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
      <div className="aspect-video mb-6 overflow-hidden rounded-lg">
        <img 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          alt={course.title} 
          src={course.imageUrl} 
        />
      </div>
      <div className="text-[10px] font-bold tracking-widest uppercase text-on-primary-container bg-primary-container px-3 py-1 rounded-full my-0 mb-2 inline-block">
        {course.category}
      </div>
      <h3 className="text-2xl font-bold flex  font-headline mb-2 leading-tight group-hover:text-primary transition-colors">
        {course.title}
      </h3>
      <p className="text-sm text-on-surface-variant font-body mb-6">
        {course.description}
      </p>
      <div className="flex items-center gap-3 mb-8">
        <img className="w-10 h-10 rounded-full object-cover" alt={course.name} src={course.authorAvatar} />
        <div>
          <p className="text-xs font-bold font-headline text-on-surface">{course.author}</p>
          <p className="text-[10px] text-outline font-body">Professional Instructor</p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-6 border-t border-surface-container-high">
        <div className="text-2xl font-black text-on-surface">${course.price}</div>
        <Link href={`/details/${course.id}`} className="px-6 py-3 bg-on-surface text-tertiary-fixed rounded-full font-bold text-sm scale-95 active:scale-90 transition-transform">
          View Details
        </Link>
      </div>
    </div>
    </>
  );
};

export default CourseCard