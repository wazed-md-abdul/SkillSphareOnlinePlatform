"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogInSharp } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "All Courses", href: "/allcourses" },
  { name: "My Courses", href: "/my-courses" },
  { name: "My Profile", href: "/profile" },
];

export default function PillNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const handleNavClick = () => {
        setMenuOpen(false);
    };

    const isActive = (href) => pathname === href ;

    return (
        <div className="relative z-50 flex w-full items-center justify-center px-4 py-3 font-['DM_Sans',sans-serif]">
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <nav className="relative w-full max-w-[860px] rounded-[20px] border border-[#e8e8e8] px-4 py-3 shadow-[0_1px_4px_rgba(0,0,0,0.04)] backdrop-blur md:px-5 md:py-2.5">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/" className="select-none bg-clip-text text-xl font-black tracking-tight text-[#2C3947] sm:text-2xl">
                        SkillSphare
                    </Link>

                    {/* Nav items */}
                    <div className="hidden items-center gap-[2px] rounded-full bg-[#A2D5C6] p-1 md:flex">
                        {navItems.map((item) => (
                            <Link
                                href={item.href}
                                key={item.name}
                                onClick={handleNavClick}
                                className={`relative px-4 py-1.5 rounded-full border-none cursor-pointer text-[14px] bg-transparent font-inherit z-[1] transition-[color,font-weight] duration-200 ease-in-out ${isActive(item.href)
                                    ? "font-semibold text-[#FFDE42] tracking-[-0.2px]"
                                    : "font-normal text-[#555555] tracking-normal"
                                    }`}
                            >
                                {/* Sliding pill background */}
                                {isActive(item.href) && (
                                    <motion.span
                                        layoutId="activePill"
                                        className="absolute inset-0 rounded-full bg-[#111111] -z-10"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    />
                                )}
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        whileHover={{ opacity: 0.82, scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="hidden md:block"
                    >
                        <Link
                            href="/login"
                            className="flex items-center justify-center gap-2 rounded-full bg-[#111111] px-[22px] py-2 font-inherit text-[14px] font-extrabold tracking-[-0.2px] text-[#FFDE42]"
                        >
                            <IoLogInSharp /> Login
                        </Link>
                    </motion.div>

                    <button
                        type="button"
                        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((open) => !open)}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111111] text-xl text-[#FFDE42] transition-transform active:scale-95 md:hidden"
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="absolute left-0 right-0 top-[calc(100%+0.5rem)] mx-0 overflow-hidden rounded-[20px] border border-[#e8e8e8] bg-white p-3 shadow-[0_16px_36px_rgba(0,0,0,0.12)] md:hidden"
                        >
                            
                            <div className="flex flex-col gap-1">
                                {navItems.map((item) => (
                                   
                                   <Link
                                        href={item.href}
                                        key={item.name}
                                        onClick={handleNavClick}
                                        className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-[15px] font-semibold transition-colors ${isActive(item.href)
                                            ? "bg-[#111111] text-[#FFDE42]"
                                            : "text-[#2C3947] hover:bg-[#A2D5C6]/35"
                                            }`}
                                    >
                                        {item.name}
                                        {isActive(item.href) && <span className="h-2 w-2 rounded-full bg-[#FFDE42]" />}
                                    </Link>
                                ))}
                            </div>

                            <motion.div
                                whileHover={{ opacity: 0.82, scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link
                                    href="/login"
                                    onClick={() => setMenuOpen(false)}
                                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#111111] px-4 py-3 font-inherit text-[14px] font-extrabold tracking-[-0.2px] text-[#FFDE42]"
                                >
                                    <IoLogInSharp />
                                    Login
                                </Link>
                            </motion.div>
                        </motion.div>
                    )}
                        </AnimatePresence>
            </nav>
        </div>
    );
}
