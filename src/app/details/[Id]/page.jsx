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
                  <p className="font-bold text-on-surface">{course?.author || "Julian V. Atelier"}</p>
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
          <aside className="lg:col-span-5 shadow-lg rounded-xl p-8  ">
            <div className=" rounded-xl p-8 ">
              <h3 className="text-sm uppercase tracking-widest font-extrabold text-outline mb-6">Course Specs</h3>
              <div>
                <div className="flex shadow-lg p-10 rounded-2xl my-10 items-center gap-3 justify-between">
                  <div className=" font-bold flex items-center justify-center text-primary gap-3 "><IoTimer /><div className="text-black">{course?.duration} </div></div>
                  <p className=" text-primary font-bold text-on-surface">Course Duration</p>
                </div>
                <div className="flex shadow-lg p-10 rounded-2xl my-10 items-center gap-3 justify-between">
                  <div className=" font-bold flex items-center justify-center text-primary gap-3 "> <SiLevelsdotfyi /><div className="text-black">{course?.level}</div></div>
                  <p className=" text-primary font-bold text-on-surface">Course Level</p>
                </div>
                <div className="flex shadow-lg p-10 rounded-2xl my-10 items-center gap-3 justify-between">
                  <div className=" font-bold flex items-center justify-center text-primary gap-3 "><RiGlobalLine /><div className="text-black">English</div></div>
                  <p className=" text-primary font-bold text-on-surface">Language</p>
                </div>
                <div className="flex shadow-lg p-10 rounded-2xl my-10 items-center gap-3 justify-between">
                  <div className=" font-bold flex items-center justify-center text-primary gap-3 "><GrCertificate /><div className="text-black">Certification</div></div>
                  <p className=" text-primary font-bold text-on-surface">Globally Recognized</p>
                </div>


              </div>
            </div>
          </aside>
        </div>
      </main>

    </>
  );
}
export default CourseDetails;
