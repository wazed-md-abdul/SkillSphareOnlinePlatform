"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoTimer } from "react-icons/io5";
import { SiLevelsdotfyi } from "react-icons/si";
import { RiGlobalLine } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";

const CourseDetailsClient = ({ course }) => {
  const [activeModule, setActiveModule] = useState(0);

  const curriculumData = [
    {
      title: "Introduction & Foundational Concepts",
      duration: "4 Lessons • 1h 10m",
      lessons: [
        { title: "Course Overview & Welcome to SkillSphare", duration: "10:15" },
        { title: "Setting Up Your Development Environment", duration: "18:40" },
        { title: "Core Principles and Industry Standards", duration: "22:05" },
        { title: "First Assignment: Environment Verification", duration: "19:30" }
      ]
    },
    {
      title: "Core Mechanics & Architecture Deep-Dive",
      duration: "5 Lessons • 2h 05m",
      lessons: [
        { title: "Understanding Component Life Cycles", duration: "25:40" },
        { title: "State Management and Flow Optimizations", duration: "32:15" },
        { title: "Architecting Scalable File Systems", duration: "21:10" },
        { title: "Data Flow & Prop Drilling Mitigation", duration: "28:30" },
        { title: "Practical Workshop: Core Logic Implementation", duration: "17:25" }
      ]
    },
    {
      title: "Advanced Integration & Production Workflows",
      duration: "3 Lessons • 1h 30m",
      lessons: [
        { title: "Optimization and Performance Bottlenecks", duration: "28:10" },
        { title: "Asynchronous Operations & Server Sync", duration: "34:45" },
        { title: "Security Protocols & Encryption Bases", duration: "27:05" }
      ]
    },
    {
      title: "Testing, Deployment & Capstone Project",
      duration: "4 Lessons • 2h 15m",
      lessons: [
        { title: "Unit Testing & Integration Checks", duration: "24:50" },
        { title: "CI/CD Pipeline Configurations", duration: "31:15" },
        { title: "Deploying to Cloud Clusters & CDN Optimization", duration: "26:40" },
        { title: "Capstone Assignment Review", duration: "52:15" }
      ]
    }
  ];

  const toggleModule = (idx) => {
    setActiveModule(activeModule === idx ? null : idx);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-16 relative overflow-hidden rounded-3xl pb-32">
      {/* Background blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-tertiary/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Back link */}
      <div className="mb-8 relative z-10 max-w-7xl mx-auto">
        <Link
          href="/allcourses"
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-all font-label font-bold text-sm bg-surface-container-low hover:bg-surface-container-highest px-4 py-2 rounded-full border border-outline-variant/10 shadow-sm"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Back to Courses
        </Link>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto relative z-10">
        
        {/* Left Side: Course Content details */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Hero Section Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-primary/10 text-primary border border-primary/20 px-3.5 py-1.5 rounded-full font-label font-bold text-[10px] tracking-wider uppercase">
                {course?.category}
              </span>
              <span className="bg-tertiary/10 text-tertiary border border-tertiary/20 px-3.5 py-1.5 rounded-full font-label font-bold text-[10px] tracking-wider uppercase">
                {course?.level}
              </span>
              <div className="flex items-center text-tertiary font-bold text-sm ml-1">
                <span className="material-symbols-outlined text-sm fill-icon mr-1">star</span>
                {course?.rating} (2.4k Reviews)
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-on-surface leading-[1.12]">
              {course?.title}
            </h1>

            {/* Author info */}
            <div className="flex items-center gap-4 pt-2">
              <img
                src={course?.authorAvatar}
                alt={course?.author || "Instructor image"}
                className="w-12 h-12 rounded-full object-cover border border-outline-variant/20 shadow-sm"
              />
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-outline">Lead Instructor</p>
                <p className="font-bold text-on-surface text-base">{course?.author || "Elena Lysander"}</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-[0px_20px_40px_rgba(25,28,29,0.1)] group/hero border border-outline-variant/10"
          >
            <img 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover/hero:scale-103" 
              src={course?.imageUrl} 
              alt={course?.title ?? "Course image"} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>

          {/* Course description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-display font-bold text-on-surface">About this Course</h3>
            <p className="text-lg text-on-surface-variant font-body leading-relaxed">
              {course?.description}
            </p>
          </motion.div>

          {/* What You'll Learn Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface-container-lowest border border-outline-variant/10 rounded-2xl p-6 md:p-8 shadow-sm space-y-6"
          >
            <h3 className="text-xl font-display font-bold text-on-surface">What You'll Learn</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">check_circle</span>
                <p className="text-sm text-on-surface-variant leading-normal">Industry-recognized certification upon completion of final project.</p>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">check_circle</span>
                <p className="text-sm text-on-surface-variant leading-normal">Full lifetime access with all future material updates included.</p>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">check_circle</span>
                <p className="text-sm text-on-surface-variant leading-normal">Real-world capstone projects evaluated by professional engineers.</p>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">check_circle</span>
                <p className="text-sm text-on-surface-variant leading-normal">Access to exclusive active learner communities and live discord chats.</p>
              </div>
            </div>
          </motion.div>

          {/* Curriculum Accordion */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-end justify-between border-b border-outline-variant/20 pb-4">
              <h3 className="text-2xl font-display font-bold text-on-surface">Course Curriculum</h3>
              <span className="text-on-surface-variant/80 font-label text-xs font-bold uppercase tracking-wider">
                4 Modules • 16 Lessons
              </span>
            </div>

            <div className="space-y-4">
              {curriculumData.map((module, idx) => {
                const isOpen = activeModule === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-outline-variant/15 rounded-xl overflow-hidden bg-surface-container-lowest transition-all hover:border-outline-variant/30 shadow-sm"
                  >
                    <button 
                      onClick={() => toggleModule(idx)}
                      className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer focus:outline-none transition-colors hover:bg-surface-container-low"
                    >
                      <div className="flex items-center gap-4">
                        <span className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-display font-bold transition-colors ${
                          isOpen ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                        }`}>
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h4 className="font-display font-bold text-on-surface text-base md:text-lg">
                            {module.title}
                          </h4>
                          <p className="text-xs text-on-surface-variant font-medium mt-0.5">{module.duration}</p>
                        </div>
                      </div>
                      <span className={`material-symbols-outlined text-outline transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-primary' : ''
                      }`}>
                        keyboard_arrow_down
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-outline-variant/10 bg-surface-container-lowest/50 space-y-3">
                            {module.lessons.map((lesson, lessonIdx) => (
                              <div 
                                key={lessonIdx}
                                className="flex items-center justify-between py-2 text-sm text-on-surface-variant hover:text-primary transition-colors pl-2 border-l border-outline-variant/20"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="material-symbols-outlined text-base text-outline/80">play_circle</span>
                                  <span className="font-medium">{lesson.title}</span>
                                </div>
                                <span className="text-xs text-outline font-medium">{lesson.duration}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* Right Side: Sticky Checkout Card */}
        <div className="lg:col-span-4">
          <aside className="sticky top-32 space-y-6">
            
            {/* Purchase checkout Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-outline-variant/20 rounded-2xl bg-surface-container-lowest p-6 shadow-md space-y-6"
            >
              {/* Pricing section */}
              <div className="space-y-1">
                <p className="text-xs font-bold text-outline uppercase tracking-wider">Purchase Plan</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-display font-black text-on-surface">${course?.price || 199}</span>
                  <span className="text-sm text-outline-variant line-through">${(course?.price || 199) + 100}</span>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">SAVE 33%</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="space-y-3">
                <button className="w-full bg-primary text-white hover:bg-primary/95 hover:scale-[1.02] active:scale-98 transition-all py-4 rounded-full font-label font-bold text-base shadow-md shadow-primary/10 cursor-pointer">
                  Enroll in Course
                </button>
                <button className="w-full border border-outline-variant/30 text-on-surface hover:bg-surface-container-low hover:scale-[1.02] active:scale-98 transition-all py-4 rounded-full font-label font-bold text-base cursor-pointer">
                  Buy as Gift
                </button>
              </div>

              {/* Security info */}
              <div className="text-center pt-2">
                <p className="text-xs text-on-surface-variant/80 font-medium flex items-center justify-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-green-600 fill-icon">shield_lock</span>
                  30-Day Money-Back Guarantee
                </p>
              </div>

              {/* Specs Grid list */}
              <div className="border-t border-outline-variant/15 pt-6 space-y-4">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-outline">Specifications</h4>
                <div className="grid gap-3">
                  
                  <div className="flex items-center justify-between text-sm py-1">
                    <span className="flex items-center gap-2.5 text-on-surface-variant font-medium">
                      <IoTimer className="text-primary text-base" />
                      Duration
                    </span>
                    <span className="font-bold text-on-surface">{course?.duration || "120 hours"}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm py-1">
                    <span className="flex items-center gap-2.5 text-on-surface-variant font-medium">
                      <SiLevelsdotfyi className="text-primary text-base" />
                      Level
                    </span>
                    <span className="font-bold text-on-surface">{course?.level || "Intermediate"}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm py-1">
                    <span className="flex items-center gap-2.5 text-on-surface-variant font-medium">
                      <RiGlobalLine className="text-primary text-base" />
                      Language
                    </span>
                    <span className="font-bold text-on-surface">English</span>
                  </div>

                  <div className="flex items-center justify-between text-sm py-1">
                    <span className="flex items-center gap-2.5 text-on-surface-variant font-medium">
                      <GrCertificate className="text-primary text-base" />
                      Certificate
                    </span>
                    <span className="font-bold text-on-surface">Globally Recognized</span>
                  </div>

                </div>
              </div>

            </motion.div>

          </aside>
        </div>

      </div>
    </div>
  );
};

export default CourseDetailsClient;
