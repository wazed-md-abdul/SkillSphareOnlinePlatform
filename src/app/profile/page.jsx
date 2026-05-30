"use client";
import React, { useState, useEffect } from 'react';
import { CiEdit } from "react-icons/ci";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { toast, Toast } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { motion } from 'framer-motion';
import { IoLogOutOutline, IoTimeOutline, IoBookOutline, IoTrophyOutline, IoSchoolOutline } from 'react-icons/io5';
import Link from 'next/link';

const UserCard = () => {
  const userData = authClient.useSession();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const onsubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    try {
      await authClient.updateUser(formData);
      toast({
        title: "Success",
        description: "Profile updated successfully!",
        variant: "success",
      });
    } catch (err) {
      console.error(err);
    }
  }

  const user = userData?.data?.user;

  // Format clock
  const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const dateString = time.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });
  
  // Dynamic greeting
  const hour = time.getHours();
  let greeting = "Good Evening";
  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  // Mock study data
  const studyHours = [
    { day: "Mon", hours: 4 },
    { day: "Tue", hours: 6 },
    { day: "Wed", hours: 5.5 },
    { day: "Thu", hours: 8 },
    { day: "Fri", hours: 3 },
    { day: "Sat", hours: 10 },
    { day: "Sun", hours: 7.5 }
  ];
  const maxHours = 12;

  // Enrolled courses list mockup
  const enrolledCourses = [
    {
      id: "course-001",
      title: "Visual Systems & Brand Architecture",
      progress: 75,
      lastActive: "2 hours ago",
      imageUrl: "https://i.ibb.co/8C8X4LT/visual-systems.png",
      category: "Design Strategy"
    },
    {
      id: "course-002",
      title: "Scalable Frontend Architecture",
      progress: 12,
      lastActive: "Yesterday",
      imageUrl: "https://i.ibb.co/cKRb46g6/frontend-arch.png",
      category: "Engineering"
    },
    {
      id: "course-003",
      title: "The Psychology of Interaction",
      progress: 100,
      lastActive: "3 days ago",
      imageUrl: "https://i.ibb.co/CNpKPnL/the-psychology.png",
      category: "Creative Mindset"
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 min-h-screen relative overflow-hidden pb-32">
      {/* Background blur blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-tertiary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Left Column: Profile Card & Live Clock */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* User Profile Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-outline-variant/10 rounded-3xl p-6 md:p-8 flex flex-col items-center shadow-md relative"
          >
            {/* Membership badge */}
            <span className="absolute top-4 right-4 bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-[10px] font-label font-bold uppercase tracking-wider">
              Pro Member
            </span>

            {/* Profile Image */}
            <div className="relative mb-6 mt-4">
              <img
                alt={user?.name || 'Profile Image'}
                className="w-28 h-28 rounded-full object-cover border-4 border-surface shadow-md"
                src={user?.image || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80'}
              />
              <div className="absolute bottom-0 right-1 bg-primary text-white p-1.5 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                <span className="material-symbols-outlined !text-[12px] fill-icon">shield</span>
              </div>
            </div>

            {/* User Identity */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-display font-extrabold text-on-surface leading-tight mb-1">
                {user?.name || 'John Doe'}
              </h2>
              <p className="text-on-surface-variant text-sm font-medium">{user?.email || 'learner@skillsphare.com'}</p>
            </div>

            {/* Quick Stats */}
            <div className="w-full flex justify-around py-4 border-y border-outline-variant/10 mb-6">
              <div className="text-center">
                <p className="text-lg font-display font-bold text-on-surface">3</p>
                <p className="text-[10px] font-label font-bold uppercase tracking-wider text-outline">Enrolled</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-display font-bold text-on-surface">1</p>
                <p className="text-[10px] font-label font-bold uppercase tracking-wider text-outline">Certificates</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-display font-bold text-on-surface">54h</p>
                <p className="text-[10px] font-label font-bold uppercase tracking-wider text-outline">Learnt</p>
              </div>
            </div>

            {/* Edit Profile Modal Trigger */}
            <div className="w-full space-y-3">
              <Modal>
                <Button className="w-full bg-surface hover:bg-surface-container-low text-on-surface border border-outline-variant/30 font-label px-6 py-3 rounded-full font-bold text-sm shadow-sm flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer">
                  <CiEdit className="text-lg" /> Edit Profile
                </Button>
                <Modal.Backdrop>
                  <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                      <Modal.CloseTrigger />
                      <Modal.Header>
                        <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                          <img src={user?.image}
                            alt={user?.name}
                            className="w-12 h-12 rounded-full object-cover relative z-10 border-4 border-white shadow-sm"
                          />
                        </Modal.Icon>
                        <Modal.Heading>{user?.name || 'John Doe'}</Modal.Heading>
                        <p className="mt-1.5 text-sm leading-5 text-muted">
                          Edit your profile information and preferences here.
                        </p>
                      </Modal.Header>
                      <Modal.Body className="p-6">
                        <Surface variant="default">
                          <form onSubmit={onsubmit} className="flex flex-col gap-4">
                            <TextField isRequired className="w-full" name="name" type="text" defaultValue={user?.name || ""}>
                              <Label>Name</Label>
                              <Input placeholder="Enter your name" />
                            </TextField>
                            <TextField isRequired className="w-full" name="image" type="text" defaultValue={user?.image || ""}>
                              <Label>Image URL</Label>
                              <Input placeholder="Enter the URL of your profile image" />
                            </TextField>
                            <Modal.Footer>
                              <Button slot="close" variant='danger'>
                                Cancel
                              </Button>
                              <Button type="submit" slot="close" className="bg-on-surface text-tertiary-fixed font-headline px-8 py-4 rounded-full font-bold text-sm shadow-[0px_20px_40px_rgba(25,28,29,0.15)] hover:shadow-none transition-all duration-500 flex items-center gap-3 active:scale-95 cursor-pointer">Update Profile</Button>
                            </Modal.Footer>
                          </form>
                        </Surface>
                      </Modal.Body>
                    </Modal.Dialog>
                  </Modal.Container>
                </Modal.Backdrop>
              </Modal>

              {/* Sign Out Button */}
              <button 
                onClick={() => authClient.signOut()}
                className="w-full bg-[#111111] hover:bg-red-600 hover:text-white text-[#FFDE42] font-label px-6 py-3 rounded-full font-bold text-sm shadow-sm flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer border border-[#111111]"
              >
                <IoLogOutOutline className="text-lg" /> Sign Out
              </button>
            </div>
          </motion.div>

          {/* Live Clock Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-outline-variant/15 rounded-3xl bg-surface-container-lowest p-6 shadow-sm flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <IoTimeOutline className="text-base" />
                Live Learning Session
              </div>
              <div>
                <h4 className="text-base font-display font-semibold text-outline leading-tight">{greeting},</h4>
                <p className="text-3xl font-display font-black text-on-surface tracking-tight mt-1">{timeString}</p>
                <p className="text-xs text-on-surface-variant font-medium mt-1">{dateString}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-outline-variant/10 text-xs text-on-surface-variant/80 font-medium">
              "Consistency beats intensity. Set aside 30 mins to study today!"
            </div>
          </motion.div>

        </div>

        {/* Right Column: Dashboard Stats & Enrolled Courses */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Stats Cards Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-surface-container-lowest border border-outline-variant/10 p-5 rounded-2xl shadow-sm text-left"
            >
              <IoSchoolOutline className="text-primary text-2xl mb-2" />
              <p className="text-2xl font-display font-bold text-on-surface">3</p>
              <p className="text-xs text-outline font-semibold uppercase tracking-wider mt-0.5">Enrolled</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="bg-surface-container-lowest border border-outline-variant/10 p-5 rounded-2xl shadow-sm text-left"
            >
              <IoTimeOutline className="text-primary text-2xl mb-2" />
              <p className="text-2xl font-display font-bold text-on-surface">54h</p>
              <p className="text-xs text-outline font-semibold uppercase tracking-wider mt-0.5">Study Hours</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-surface-container-lowest border border-outline-variant/10 p-5 rounded-2xl shadow-sm text-left"
            >
              <IoTrophyOutline className="text-primary text-2xl mb-2" />
              <p className="text-2xl font-display font-bold text-on-surface">1</p>
              <p className="text-xs text-outline font-semibold uppercase tracking-wider mt-0.5">Certificates</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="bg-surface-container-lowest border border-outline-variant/10 p-5 rounded-2xl shadow-sm text-left"
            >
              <span className="material-symbols-outlined text-primary text-2xl mb-2">trending_up</span>
              <p className="text-2xl font-display font-bold text-on-surface">92%</p>
              <p className="text-xs text-outline font-semibold uppercase tracking-wider mt-0.5">Avg Progress</p>
            </motion.div>
          </div>

          {/* Study hours bar chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-outline-variant/15 rounded-3xl bg-surface-container-lowest p-6 shadow-sm"
          >
            <h3 className="text-lg font-display font-bold text-on-surface mb-6">Weekly Study Activity (Hours)</h3>
            <div className="flex items-end justify-between h-40 gap-2 md:gap-4 px-2">
              {studyHours.map((d, idx) => {
                const heightPercentage = (d.hours / maxHours) * 100;
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-full bg-primary/5 rounded-t-lg relative h-32 flex items-end">
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${heightPercentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.05 }}
                        className="w-full bg-primary rounded-t-lg group-hover:bg-primary-fixed-dim transition-colors relative"
                      >
                        {/* Tooltip on hover */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-tertiary-fixed text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow">
                          {d.hours} hrs
                        </div>
                      </motion.div>
                    </div>
                    <span className="text-xs text-on-surface-variant font-semibold">{d.day}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Enrolled Courses Progress */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold text-on-surface border-b border-outline-variant/10 pb-4">
              My Learning Pathway
            </h3>
            
            <div className="space-y-4">
              {enrolledCourses.map((courseItem, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex flex-col md:flex-row gap-5 p-5 border border-outline-variant/15 rounded-2xl bg-surface-container-lowest shadow-sm hover:border-outline-variant/30 transition-all items-center"
                >
                  <img 
                    src={courseItem.imageUrl} 
                    alt={courseItem.title} 
                    className="w-full md:w-32 aspect-video object-cover rounded-xl border border-outline-variant/10 shadow-sm"
                  />
                  <div className="flex-1 space-y-3 w-full">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="bg-primary/5 text-primary text-[9px] font-label font-bold px-2 py-0.5 rounded border border-primary/10 uppercase tracking-wider">
                          {courseItem.category}
                        </span>
                        <h4 className="font-display font-bold text-on-surface text-base md:text-lg mt-1.5 leading-snug">
                          {courseItem.title}
                        </h4>
                      </div>
                      {courseItem.progress === 100 && (
                        <span className="flex items-center gap-1 bg-green-50 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-200">
                          <span className="material-symbols-outlined text-xs fill-icon">check_circle</span>
                          Completed
                        </span>
                      )}
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold text-on-surface-variant">
                        <span>Progress</span>
                        <span>{courseItem.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-primary-container/30 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${courseItem.progress}%` }} />
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 pt-1 text-xs">
                      <span className="text-outline font-medium">Last active {courseItem.lastActive}</span>
                      <Link 
                        href={courseItem.progress === 100 ? "#" : `/details/${courseItem.id}`}
                        className={`font-label font-bold px-4 py-2 rounded-full transition-all cursor-pointer ${
                          courseItem.progress === 100 
                            ? 'bg-green-600 hover:bg-green-700 text-white shadow-sm'
                            : 'bg-primary hover:bg-primary/95 text-white shadow-sm'
                        }`}
                      >
                        {courseItem.progress === 100 ? "Get Certificate" : "Resume Learning"}
                      </Link>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
      <Toast.Provider />
    </div>
  );
};

export default UserCard;
