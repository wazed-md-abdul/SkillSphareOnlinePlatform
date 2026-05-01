
import CourseCard from "@/components/AllCourses/CourseCardForAll";
import { getAllCourses } from "@/lib/data";

export default async function AllCourses() {
  const allcourses = await getAllCourses();
  const courses = allcourses?.data || [];


  return (
    <>
 
      <main className="max-w-[1440px] mx-auto px-8 pt-12 pb-24">
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter font-headline text-on-background mb-4">
            Explore Our Curated Catalog of Masterclasses
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl font-body">
            Curated learning experiences designed for the next generation of creative professionals.
          </p>
        </header>

        <section className="mb-12 flex flex-col md:flex-row md:items-center justify-end gap-6">
          <div className="relative flex-grow max-w-xl">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
              search
            </span>
            <input 
        
              className="w-full pl-12 pr-6 py-4 bg-surface-container-highest rounded-full border-none focus:ring-1 focus:ring-primary focus:bg-primary-container transition-all placeholder:text-outline/60 text-on-surface outline-none" 
              placeholder="What would you like to master today?" 
              type="text"
            />
          </div>

        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
      </main>
  
    </>
  );
}
