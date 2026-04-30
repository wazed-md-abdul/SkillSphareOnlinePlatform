import React from 'react';
import InstructorCard from './InstructorCard';
import Link from 'next/link';
import { getAllCourses } from '@/lib/data';



const InstructorShowcase = async () => {
 const courses = await getAllCourses();
  const instructors = courses?.data || [];
  const fillteredInstructors = instructors.slice(0, 4);

  return (
    <main className="max-w-7xl mx-auto px-6 py-20 min-h-screen">
      {/* Header Section */}
      <header className="mb-16">
        <div className="inline-block bg-primary-container text-on-primary-container font-label text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-[0.1em]">
          THE SKILLSPHARE ELITE
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface leading-[1.1]">
          World-Class Mentors <br />
          <span className="text-primary italic">Shaping Tomorrow.</span>
        </h1>
        <p className="mt-6 text-on-surface-variant text-lg max-w-2xl leading-relaxed">
          Meet our curated group of experts who blend high-level theory with real-world practice in a premium learning environment.
        </p>
      </header>

      {/* Instructor Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {fillteredInstructors.map((inst, index) => (
          <InstructorCard key={index} inst={inst} />
        ))}
      </div>

      {/* Secondary Layout Section (Asymmetric Bento) */}
      <section className="mt-32 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 bg-primary-container rounded-xl p-12 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full translate-x-20 -translate-y-20"></div>
          <h2 className="font-display text-4xl font-extrabold text-on-primary-container mb-6 relative z-10">
            Direct Access to Industry Visionaries.
          </h2>
          <p className="text-on-primary-container/80 text-lg mb-8 relative z-10 max-w-lg">
            Our mentors don't just teach. They curate your growth, providing personalized feedback within our lucid studio framework.
          </p>
          <div className="flex flex-wrap gap-4 relative z-10">
            <Link href="/login" className="bg-on-surface text-tertiary-fixed font-label font-bold px-8 py-3 rounded-full hover:shadow-xl transition-shadow cursor-pointer">
              LOGIN TO ENROLL
            </Link>
            <Link href="/allcourses" className="bg-white/30 backdrop-blur-md text-on-surface font-label font-bold px-8 py-3 rounded-full hover:bg-white/50 transition-colors cursor-pointer">
              ALL COURSES
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 bg-surface-container-low rounded-xl p-8 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
            <span className="material-symbols-outlined text-primary text-3xl">verified</span>
          </div>
          <h4 className="font-headline text-2xl font-bold text-on-surface mb-3">Vetted for Excellence</h4>
          <p className="text-on-surface-variant mb-6">
            Each instructor undergoes a rigorous review process ensuring top-tier pedagogical and technical skills.
          </p>
          <div className="flex -space-x-4">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCzk2hcOOdIvEwn80-bgjpBx-wuULPVrBcSikDIhsl-GwnqT9BkB4rIxgUd9--X0wf5xz0Sp66blJAmluktnUUaWNuhRusv2wZQGC8FDrZtxf991Bee_om2ZAtooIKwZwFvsavAHNkIiwXWoLH5FtpZTua6l-XKi6J5TJncuEyREJW9WsgpBrzEYbTD5EGpCLgNn8ETlIixLrKQSoeHfGjhyciHBZGom42w60uekCLj5FqbUVsuPPanSFLOVV3ILZbv6P8lz8qDyzij",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDp6N6llAiUenAeNtjzqEejrSerq125kVLc2cX5H30fGQ53b_IEL_4m5vGOGcCv70-k3QsVNkU_mJqnTPudV3VYuGilJFwlW4cwD9zAwWGHyUh0sYZS89WWZlFjPqNRC83ulQfjk08RTlaLzIgZPggydiNCt6-rKF_YVJqWDrGm5Whv6kRWnleogdF-wuU4T5eLZHT4jwf53Zplt_TBb7PFBr8_Zg6nagU6iAwGJy18UTbDyxl8wmE-1LyzSyCdSlcKirYH7JSI17G-",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDovhBzEqaBRru_UJDGs2zVDcKWlN78LcDbWbELHO13sJ13qOawfS-VN9wwjr_okKHF0yYcVtGoAjQVGvJoPnRQNn9Bp8wF-AzMVOurZnAWwed0AuUAXnuCJkASr22GARGFgv8nKaelsAkkwouD_GGHM7fxYquQFDdXni05rbHfISZKVXaDJeO1rQ_5GrqyotvzLjrcF3_qCtq2pPOaby3_gkp1KzY56amAcRZ0x17VT_SmaUr-rOao1SJwQMgUXKHIT0qZSXUg6YJP"
            ].map((url, i) => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-surface-container-low bg-surface-variant overflow-hidden">
                <img src={url} className="w-full h-full object-cover" alt={`Avatar ${i}`} />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-surface-container-low bg-primary text-white flex items-center justify-center font-bold text-xs">
              +120
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default InstructorShowcase;
