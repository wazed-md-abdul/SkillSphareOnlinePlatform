
import AllCourseMain from "@/components/AllCourses/AllCourseMain";
import CourseCard from "@/components/AllCourses/CourseCardForAll";
import { getAllCourses } from "@/lib/data";

export default async function AllCourses() {
  const allcourses = await getAllCourses();
  const courses = allcourses?.data || [];
  

  return (
    <>
     <main className="max-w-[1440px] mx-auto px-8 pt-12 pb-24">
      
      <AllCourseMain courses={courses} />

     </main>

    </>
  );
}
