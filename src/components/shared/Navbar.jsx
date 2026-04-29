"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Dashboard", "Team", "Projects", "Calendar", "Reports"];

export default function PillNavbar() {
    const [active, setActive] = useState("Dashboard");

    return (
        <div className="  flex items-center justify-center font-['DM_Sans',sans-serif]">
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <nav className="flex items-center justify-between bg-white border border-[#e8e8e8] rounded-[20px] px-5 py-2.5 w-full max-w-[860px] shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                {/* Logo */}
                <span className="font-bold text-[15px] text-[#111111] tracking-[-0.3px] min-w-[60px]">
                    Pill
                </span>

                {/* Nav items */}
                <div className="flex items-center gap-[2px] bg-[#f5f5f5] rounded-full p-1">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => setActive(item)}
                            className={`relative px-4 py-1.5 rounded-full border-none cursor-pointer text-[14px] bg-transparent font-inherit z-[1] transition-[color,font-weight] duration-200 ease-in-out ${active === item
                                ? "font-semibold text-white tracking-[-0.2px]"
                                : "font-normal text-[#555555] tracking-normal"
                                }`}
                        >
                            {/* Sliding pill background */}
                            {active === item && (
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
                            {item}
                        </button>
                    ))}
                </div>

                {/* CTA */}
                <motion.button
                    whileHover={{ opacity: 0.82, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="px-[22px] py-2 rounded-full border-none cursor-pointer text-[14px] font-semibold text-white bg-[#111111] font-inherit tracking-[-0.2px]"
                >
                    Contact
                </motion.button>
            </nav>
        </div>
    );
}