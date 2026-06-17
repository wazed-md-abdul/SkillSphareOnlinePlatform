"use client";
import { useState, useEffect } from 'react';
import NoCoursesFoundCard from './NoCourseFound';
import CourseCardSection from './CourseCardSection';

const AllCourseMain = ({ courses }) => {
    const [filteredCourses, setFilteredCourses] = useState(courses);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedLevel, setSelectedLevel] = useState("all");

    const fetchFilteredCourses = async (q, cat, lvl) => {
        try {
            const params = new URLSearchParams();
            if (q) params.set("q", q);
            if (cat && cat !== "all") params.set("category", cat);
            if (lvl && lvl !== "all") params.set("level", lvl);

            const res = await fetch(`/api/courses?${params.toString()}`);
            const data = await res.json();
            if (data.success) {
                setFilteredCourses(data.data);
            }
        } catch (err) {
            console.error("Failed to fetch filtered courses:", err);
        }
    };

    useEffect(() => {
        fetchFilteredCourses(searchTerm, selectedCategory, selectedLevel);
    }, [searchTerm, selectedCategory, selectedLevel]);

    return (
        <>
            <header className="mb-16">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter font-headline text-on-background mb-4">
                    Explore Our Curated Catalog of Masterclasses
                </h1>
                <p className="text-xl text-on-surface-variant max-w-2xl font-body">
                    Curated learning experiences designed for the next generation of creative professionals.
                </p>
            </header>

            <section className="mb-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Search Input */}
                <div className="relative flex-grow max-w-xl">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                        search
                    </span>
                    <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-6 py-4 bg-surface-container-highest rounded-full border-none focus:ring-1 focus:ring-primary focus:bg-primary-container transition-all placeholder:text-outline/60 text-on-surface outline-none"
                        placeholder="What would you like to master today?"
                        type="text"
                    />
                </div>

                {/* Filters Dropdown */}
                <div className="flex flex-wrap gap-4 items-center">
                    {/* Category Filter */}
                    <div className="relative">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="bg-surface-container-highest text-on-surface rounded-full pl-6 pr-10 py-4 border-none outline-none focus:ring-1 focus:ring-primary focus:bg-primary-container font-label font-bold text-sm cursor-pointer appearance-none transition-all"
                        >
                            <option value="all">All Categories</option>
                            <option value="Design Strategy">Design Strategy</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Creative Mindset">Creative Mindset</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Product Management">Product Management</option>
                            <option value="UX Research">UX Research</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none">
                            keyboard_arrow_down
                        </span>
                    </div>

                    {/* Level Filter */}
                    <div className="relative">
                        <select
                            value={selectedLevel}
                            onChange={(e) => setSelectedLevel(e.target.value)}
                            className="bg-surface-container-highest text-on-surface rounded-full pl-6 pr-10 py-4 border-none outline-none focus:ring-1 focus:ring-primary focus:bg-primary-container font-label font-bold text-sm cursor-pointer appearance-none transition-all"
                        >
                            <option value="all">All Levels</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none">
                            keyboard_arrow_down
                        </span>
                    </div>
                </div>
            </section>

            <div>
                {filteredCourses.length === 0 ? (
                    <NoCoursesFoundCard />
                ) : (
                    <CourseCardSection course={filteredCourses} />
                )}
            </div>
        </>
    );
};

export default AllCourseMain;