import { getAllCourses } from "@/lib/data";
import { notFound } from "next/navigation";
import CourseDetailsClient from "@/components/AllCourses/CourseDetailsClient";

export async function generateStaticParams() {
  const allcourses = await getAllCourses();
  return allcourses?.data?.map((course) => ({ Id: course.id })) || [];
}

const CourseDetails = async ({ params }) => {
  const { Id } = await params;
  const allcourses = await getAllCourses();
  const course = allcourses?.data?.find((course) => course?.id === Id);

  if (!course) {
    notFound();
  }

  return <CourseDetailsClient course={course} />;
};

export default CourseDetails;
