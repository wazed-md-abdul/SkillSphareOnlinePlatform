"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogInSharp } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const navItems = [
    { name: "Home", href: "/" },
    { name: "All Courses", href: "/allcourses" },
    { name: "Blogs", href: "/blogs" },
    { name: "My Profile", href: "/profile" },
];

function AuthLoading({ mobile = false }) {
    return (
        <div
            className={
                mobile
                    ? "mt-3 flex w-full items-center gap-3 rounded-2xl px-4 py-3"
                    : "hidden items-center gap-3 md:flex"
            }
            aria-label="Loading account"
            aria-live="polite"
        >
            <span className="h-10 w-24 animate-pulse rounded-full bg-surface-container-high" />
            <span className="h-11 w-11 animate-pulse rounded-full bg-surface-container-high" />
        </div>
    );
}

export default function PillNavbar() {
    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    const [menuOpen, setMenuOpen] = useState(false);
    const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);
    const [theme, setTheme] = useState("dark");
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("skillsphare-theme") || "dark";
            setTheme(savedTheme);
            document.documentElement.classList.toggle("light", savedTheme === "light");
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("skillsphare-theme", newTheme);
        document.documentElement.classList.toggle("light", newTheme === "light");
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    const handleNavClick = () => {
        setMenuOpen(false);
    };

    const isActive = (href) => pathname === href;

    return (
        <div className="relative z-50 flex w-full items-center justify-center px-4 py-3 font-['DM_Sans',sans-serif]">
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <nav className="relative w-full max-w-[860px] rounded-[20px] border border-outline-variant/20 bg-surface-container-lowest/80 px-4 py-3 shadow-sm backdrop-blur md:px-5 md:py-2.5">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/" className="select-none bg-clip-text text-xl font-black tracking-tight text-on-surface sm:text-2xl">
                        SkillSphare
                    </Link>

                    {/* Nav items */}
                    <div className="hidden items-center gap-[2px] rounded-full bg-surface-container border border-outline-variant/10 p-1 md:flex">
                        {navItems.map((item) => (
                            <Link
                                href={item.href}
                                key={item.name}
                                onClick={handleNavClick}
                                className={`relative px-4 py-1.5 rounded-full border-none cursor-pointer text-[14px] bg-transparent font-inherit z-[1] transition-[color,font-weight] duration-200 ease-in-out ${isActive(item.href)
                                    ? "font-semibold text-inverse-on-surface tracking-[-0.2px]"
                                    : "font-normal text-on-surface-variant/80 hover:text-on-surface tracking-normal"
                                    }`}
                            >
                                {/* Sliding pill background */}
                                {isActive(item.href) && (
                                    <motion.span
                                        layoutId="activePill"
                                        className="absolute inset-0 rounded-full bg-inverse-surface -z-10"
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

                    <div className="flex items-center gap-3">
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-surface-container-low transition-all cursor-pointer text-on-surface flex items-center justify-center border border-outline-variant/15"
                            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                        >
                            <span className="material-symbols-outlined text-lg">
                                {theme === "dark" ? "light_mode" : "dark_mode"}
                            </span>
                        </button>

                        {/* Auth Container */}
                        {isPending ? (
                            <AuthLoading />
                        ) : user ? (
                            <div className="hidden items-center gap-4 md:flex">
                                <div className="relative">
                                    <button 
                                        onClick={() => setAvatarDropdownOpen(!avatarDropdownOpen)}
                                        className="flex items-center gap-2 focus:outline-none cursor-pointer group"
                                    >
                                        <img 
                                            src={user.image}
                                            alt={user.name}
                                            className="w-8 h-8 rounded-full object-cover border-2 border-white dark:border-outline-variant shadow-sm group-hover:border-primary transition-all"
                                        />
                                        <div className="hidden lg:block text-left">
                                            <p className="text-xs font-bold text-on-surface leading-tight">{user.name}</p>
                                            <p className="text-[10px] text-on-surface-variant/85 leading-none">{user.email || ""}</p>
                                        </div>
                                        <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                                            keyboard_arrow_down
                                        </span>
                                    </button>

                                    {/* Dropdown Menu */}
                                    <AnimatePresence>
                                        {avatarDropdownOpen && (
                                            <>
                                                {/* Backdrop overlay to close */}
                                                <div className="fixed inset-0 z-10" onClick={() => setAvatarDropdownOpen(false)} />
                                                
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    transition={{ duration: 0.15, ease: "easeOut" }}
                                                    className="absolute right-0 top-[calc(100%+0.75rem)] z-20 w-48 rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-2 shadow-lg"
                                                >
                                                    <div className="px-3 py-2 border-b border-outline-variant/10 mb-1 lg:hidden">
                                                        <p className="text-xs font-bold text-on-surface leading-tight">{user.name}</p>
                                                        <p className="text-[9px] text-on-surface-variant/80 leading-none mt-0.5">{user.email || ""}</p>
                                                    </div>
                                                    <button
                                                        onClick={() => {
                                                            setAvatarDropdownOpen(false);
                                                            authClient.signOut();
                                                        }}
                                                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-xs font-bold text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors cursor-pointer"
                                                    >
                                                        <IoLogInSharp className="text-base" />
                                                        Sign Out
                                                    </button>
                                                </motion.div>
                                            </>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        ) : (
                            <motion.div
                                whileHover={{ opacity: 0.82, scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                className="hidden md:block"
                            >
                                <Link
                                    href="/login"
                                    className="flex items-center justify-center gap-2 rounded-full bg-on-surface text-inverse-on-surface px-[22px] py-2 font-inherit text-[14px] font-extrabold tracking-[-0.2px] hover:opacity-90 transition-all cursor-pointer"
                                >
                                    <IoLogInSharp /> Login
                                </Link>
                            </motion.div>
                        )}

                        <button
                            type="button"
                            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen((open) => !open)}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-on-surface text-xl text-inverse-on-surface transition-transform active:scale-95 md:hidden cursor-pointer"
                        >
                            {menuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="absolute left-0 right-0 top-[calc(100%+0.5rem)] mx-0 overflow-hidden rounded-[20px] border border-outline-variant/20 bg-surface-container-lowest p-3 shadow-xl md:hidden"
                        >
                            <div className="flex flex-col gap-1">
                                {navItems.map((item) => (
                                    <Link
                                        href={item.href}
                                        key={item.name}
                                        onClick={handleNavClick}
                                        className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-[15px] font-semibold transition-colors ${isActive(item.href)
                                            ? "bg-on-surface text-inverse-on-surface"
                                            : "text-on-surface-variant hover:bg-surface-container-low"
                                            }`}
                                    >
                                        {item.name}
                                        {isActive(item.href) && <span className="h-2 w-2 rounded-full bg-tertiary-fixed" />}
                                    </Link>
                                ))}
                                
                                {/* Theme row for mobile */}
                                <div className="flex items-center justify-between rounded-2xl px-4 py-3 text-left text-[15px] font-semibold text-on-surface">
                                    <span>Theme</span>
                                    <button
                                        onClick={toggleTheme}
                                        className="p-2 rounded-full bg-surface-container-low border border-outline-variant/10 text-on-surface flex items-center justify-center cursor-pointer"
                                    >
                                        <span className="material-symbols-outlined text-base">
                                            {theme === "dark" ? "light_mode" : "dark_mode"}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {
                                isPending ? (
                                    <AuthLoading mobile />
                                ) : user ? (
                                    <div className="mt-3 flex items-center justify-between gap-4 rounded-2xl px-4 py-3 bg-surface-container-low">
                                        <div>
                                            <motion.div
                                                whileHover={{ opacity: 0.82, scale: 1.03 }}
                                                whileTap={{ scale: 0.97 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                            >
                                                <button 
                                                    onClick={() => {
                                                        setMenuOpen(false);
                                                        authClient.signOut();
                                                    }}
                                                    className="flex items-center justify-center gap-2 rounded-full bg-on-surface text-tertiary-fixed px-[22px] py-2 font-inherit text-[14px] font-extrabold tracking-[-0.2px] cursor-pointer"
                                                >
                                                    <IoLogInSharp /> Sign Out
                                                </button>
                                            </motion.div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <img 
                                                src={user.image}
                                                alt={user.name}
                                                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                                            />
                                            <h2 className="text-xs font-bold text-on-surface mt-1">{user?.name}</h2>
                                        </div>
                                    </div>
                                ) : (
                                    <motion.div
                                        whileHover={{ opacity: 0.82, scale: 1.03 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Link
                                            href="/login"
                                            onClick={() => setMenuOpen(false)}
                                            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-on-surface text-tertiary-fixed px-4 py-3 font-inherit text-[14px] font-extrabold tracking-[-0.2px]"
                                        >
                                            <IoLogInSharp />
                                            Login
                                        </Link>
                                    </motion.div>
                                )
                            }
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
}
