import CoursePathways from "@/components/Coursepathways/CoursePathways";
import Hero from "@/components/Hero/Hero";
import InstructorShowcase from "@/components/Instructors/InstructorShowcase";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <CoursePathways />
       <InstructorShowcase />
    </>
  );
}
