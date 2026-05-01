import CoursePathways from "@/components/Coursepathways/CoursePathways";
import Hero from "@/components/Hero/Hero";
import InstructorShowcase from "@/components/Instructors/InstructorShowcase";
import LearningTips from "@/components/LearningTips/LearningTips";
import Testimonials from "@/components/OurStudentsRe/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <CoursePathways />
       <InstructorShowcase />
       <Testimonials />
       <LearningTips  />  
    </>
  );
}
