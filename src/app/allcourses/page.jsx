import CourseCard from "@/components/AllCourses/CourseCardForAll";
import { getAllCourses } from "@/lib/data";
  

export default async function AllCourses() {
  const courses = await getAllCourses();
  console.log(courses);
  

  return (
    <>
 
      <main className="max-w-[1440px] mx-auto px-8 pt-12 pb-24">
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter font-headline text-on-background mb-4">
            The Course Atelier
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl font-body">
            Curated learning experiences designed for the next generation of creative professionals.
          </p>
        </header>

        <section className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
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
          <div className="flex flex-wrap items-center gap-3">
            <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-bold text-sm">All</button>
            <button className="px-6 py-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary-container transition-colors font-bold text-sm">Development</button>
            <button className="px-6 py-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary-container transition-colors font-bold text-sm">Design</button>
            <button className="px-6 py-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary-container transition-colors font-bold text-sm">Business</button>
            <div className="w-px h-6 bg-outline-variant mx-2 opacity-30"></div>
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high text-on-surface font-bold text-sm">
                Sort: Popularity <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
              </button>
            </div>
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
