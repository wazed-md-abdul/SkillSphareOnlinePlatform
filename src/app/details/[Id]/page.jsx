import { getAllCourses } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { IoTimer } from "react-icons/io5";
import { SiLevelsdotfyi } from "react-icons/si";
import { RiGlobalLine } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";

const CourseDetails = async ({ params }) => {
  const { Id } = await params;
  const allcourses = await getAllCourses();
  const course = allcourses?.data?.find((course) => course?.id === Id);

  if (!course) {
    notFound();
  }
  return (
    <>
      <main className="max-w-[1440px] mx-auto px-8 pt-12 transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative">
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-12">
            <div className="relative p-3 rounded-xl shadow-2xl">
              <Image
                src={course?.imageUrl}
                alt={course?.title ?? "Course image"}
                width={1200}
                height={675}
                unoptimized
                className="w-full aspect-video object-cover rounded-xl shadow-2xl"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="bg-primary-container text-on-primary-container px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {course?.level}
                </span>
                <div className="flex items-center text-tertiary">
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="text-sm font-bold ml-1">{course?.rating} (2.4k Reviews)</span>
                </div>
              </div>
              <h1 className="text-5xl font-display font-extrabold tracking-tight text-on-background leading-tight">
                {course?.title}
              </h1>
              <div className="flex items-center gap-4">
                <Image
                  src={course?.authorAvatar}
                  alt={course?.auth ?? "Instructor image"}
                  width={48}
                  height={48}
                  unoptimized
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-outline">Lead Instructor</p>
                  <p className="font-bold text-on-surface">{course?.author || "Julian"}</p>
                </div>
              </div>
              <p className="text-lg text-secondary leading-relaxed max-w-2xl">
                {course?.description}
              </p>
              <div className="pt-4">
                <button className="bg-on-surface text-tertiary-fixed px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5 rounded-xl shadow-lg sm:p-3 lg:p-6">
            <div className="rounded-xl p-0 sm:p-1 lg:p-2">
              <h3 className="mb-6 text-sm font-extrabold uppercase tracking-widest text-outline">Course Specs</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="flex flex-col gap-3 rounded-2xl p-5 shadow-lg sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:p-3">
                  <div className="flex items-center gap-3 font-bold text-primary"><IoTimer /><div className="text-black">{course?.duration} </div></div>
                  <p className="font-bold text-on-surface">Course Duration</p>
                </div>
                <div className="flex flex-col gap-3 rounded-2xl p-5 shadow-lg sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:p-3">
                  <div className="flex items-center gap-3 font-bold text-primary"> <SiLevelsdotfyi /><div className="text-black">{course?.level}</div></div>
                  <p className="font-bold text-on-surface">Course Level</p>
                </div>
                <div className="flex flex-col gap-3 rounded-2xl p-5 shadow-lg sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:p-3">
                  <div className="flex items-center gap-3 font-bold text-primary"><RiGlobalLine /><div className="text-black">English</div></div>
                  <p className="font-bold text-on-surface">Language</p>
                </div>
                <div className="flex flex-col gap-3 rounded-2xl p-5 shadow-lg sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:p-3">
                  <div className="flex items-center gap-3 font-bold text-primary"><GrCertificate /><div className="text-black">Certification</div></div>
                  <p className="font-bold text-on-surface">Globally Recognized</p>
                </div>
              </div>
            </div>

            <section className="mt-8 rounded-xl p-5 shadow-lg sm:p-6 lg:p-8">
              <div className="space-y-8">
              <div className="flex items-end justify-between border-b border-outline-variant/20 pb-4">
                <h2 className="text-3xl font-headline font-bold text-on-surface">
                  Course Curriculum
                </h2>
                <span className="text-secondary font-label text-sm font-bold uppercase tracking-widest">
                  12 Modules • 48 Lessons
                </span>
              </div>

              <div className="space-y-4">
                <div className="group bg-surface-container-low rounded-lg transition-all hover:bg-surface-container">
                   <div className="group bg-surface-container-low rounded-lg transition-all hover:bg-surface-container">
        <button className="w-full flex items-center justify-between p-6 text-left">
          <div className="flex items-center gap-4">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-container text-on-primary-container font-headline font-bold">
              01
            </span>

            <div>
              <h3 className="font-headline font-bold text-on-surface text-lg">
                Introduction to Web Development
              </h3>
              <p className="text-sm text-secondary">4 Lessons • 1h 10m</p>
            </div>
          </div>

          <span className="material-symbols-outlined text-outline transition-transform group-hover:rotate-180">
            expand_more
          </span>
        </button>
      </div>

      {/* Module 2 */}
      <div className="group bg-surface-container-low rounded-lg transition-all hover:bg-surface-container">
        <button className="w-full flex items-center justify-between p-6 text-left">
          <div className="flex items-center gap-4">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-container text-on-primary-container font-headline font-bold">
              02
            </span>

            <div>
              <h3 className="font-headline font-bold text-on-surface text-lg">
                React Fundamentals
              </h3>
              <p className="text-sm text-secondary">5 Lessons • 2h 05m</p>
            </div>
          </div>

          <span className="material-symbols-outlined text-outline transition-transform group-hover:rotate-180">
            expand_more
          </span>
        </button>
      </div>

      {/* Module 3 */}
      <div className="group bg-surface-container-low rounded-lg transition-all hover:bg-surface-container">
        <button className="w-full flex items-center justify-between p-6 text-left">
          <div className="flex items-center gap-4">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-container text-on-primary-container font-headline font-bold">
              03
            </span>

            <div>
              <h3 className="font-headline font-bold text-on-surface text-lg">
                Backend with Node.js
              </h3>
              <p className="text-sm text-secondary">3 Lessons • 1h 30m</p>
            </div>
          </div>

          <span className="material-symbols-outlined text-outline transition-transform group-hover:rotate-180">
            expand_more
          </span>
        </button>
      </div>

      {/* Module 4 */}
      <div className="group bg-surface-container-low rounded-lg transition-all hover:bg-surface-container">
        <button className="w-full flex items-center justify-between p-6 text-left">
          <div className="flex items-center gap-4">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-container text-on-primary-container font-headline font-bold">
              04
            </span>

            <div>
              <h3 className="font-headline font-bold text-on-surface text-lg">
                Deployment & Final Project
              </h3>
              <p className="text-sm text-secondary">4 Lessons • 2h 15m</p>
            </div>
          </div>

          <span className="material-symbols-outlined text-outline transition-transform group-hover:rotate-180">
            expand_more
          </span>
        </button>
      </div>
                </div>
              </div>
            </div>


            </section>
          </aside>
        
            
 
        </div>
      </main>

    </>
  );
}
export default CourseDetails;
