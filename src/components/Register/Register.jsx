"use client";

import Link from "next/link";
import React from "react";

const Register = () => {
    return (
        <div className="bg-surface font-body text-on-surface mt-10 overflow-x-hidden selection:bg-primary-container flex min-w-0 flex-col">
            {/* Brand Header */}

            <main className="relative flex-grow flex min-w-0 items-center justify-center px-4 sm:px-6 overflow-hidden">
                {/* Abstract Atmospheric Background Elements */}


                {/* Registration Canvas */}
                <section className="relative z-10 w-full min-w-0 max-w-[540px]">
                    <div className="glass-panel p-6 sm:p-10 md:p-14 rounded-xl shadow-[0px_20px_40px_rgba(25,28,29,0.06)] flex min-w-0 flex-col items-center">
                        <div className="text-center mb-10">
                            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-on-background mb-3">
                                Join the <span className="text-primary">SkillSphare</span>
                            </h1>
                            <p className="text-on-surface-variant font-medium">
                                Create your professional learning space today.
                            </p>
                        </div>

                        <form className="w-full min-w-0 space-y-6" onSubmit={(e) => e.preventDefault()}>
                            {/* Full Name */}
                            <div className="group">
                                <label className="block text-[10px] font-label font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2 ml-1">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <input
                                        className="w-full bg-surface-container-highest h-14 px-6 rounded-lg text-on-surface placeholder:text-on-surface-variant/40 border-none focus:ring-1 focus:ring-primary focus:bg-primary-container/10 transition-all duration-300 font-medium"
                                        placeholder="Design Enthusiast"
                                        type="text"
                                    />
                                </div>
                            </div>

                            {/* Email Address */}
                            <div className="group">
                                <label className="block text-[10px] font-label font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2 ml-1">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input
                                        className="w-full bg-surface-container-highest h-14 px-6 rounded-lg text-on-surface placeholder:text-on-surface-variant/40 border-none focus:ring-1 focus:ring-primary focus:bg-primary-container/10 transition-all duration-300 font-medium"
                                        placeholder="hello@skillsphare.com"
                                        type="email"
                                    />
                                </div>
                            </div>

                            {/* Password Grid */}
                            <div className="grid min-w-0 grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="group min-w-0">
                                    <label className="block text-[10px] font-label font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2 ml-1">
                                        Password
                                    </label>
                                    <input
                                        className="w-full bg-surface-container-highest h-14 px-6 rounded-lg text-on-surface placeholder:text-on-surface-variant/40 border-none focus:ring-1 focus:ring-primary focus:bg-primary-container/10 transition-all duration-300 font-medium"
                                        placeholder="••••••••"
                                        type="password"
                                    />
                                </div>
                                <div className="group min-w-0">
                                    <label className="block text-[10px] font-label font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2 ml-1">
                                        Confirm
                                    </label>
                                    <input
                                        className="w-full bg-surface-container-highest h-14 px-6 rounded-lg text-on-surface placeholder:text-on-surface-variant/40 border-none focus:ring-1 focus:ring-primary focus:bg-primary-container/10 transition-all duration-300 font-medium"
                                        placeholder="••••••••"
                                        type="password"
                                    />
                                </div>
                            </div>

                            {/* Consent */}
                            <div className="flex items-center space-x-3 py-2">
                                <input
                                    className="w-5 h-5 rounded border-none bg-surface-container-highest text-primary focus:ring-offset-0 focus:ring-primary cursor-pointer"
                                    id="terms"
                                    type="checkbox"
                                />
                                <label className="text-sm text-on-surface-variant leading-tight" htmlFor="terms">
                                    I agree to the{" "}
                                    <a className="text-primary font-bold hover:underline" href="#">
                                        Terms of Service
                                    </a>{" "}
                                    and{" "}
                                    <a className="text-primary font-bold hover:underline" href="#">
                                        Privacy Policy
                                    </a>
                                    .
                                </label>
                            </div>

                            {/* CTA */}
                            <div className="pt-6">
                                <button
                                    className="w-full h-16 bg-on-surface text-tertiary-fixed rounded-full font-label font-bold text-lg hover:opacity-90 active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-3 shadow-[0px_10px_30px_rgba(25,28,29,0.2)]"
                                    type="submit"
                                >
                                    <span>Create Account</span>
                                    <span className="material-symbols-outlined text-2xl">arrow_right_alt</span>
                                </button>
                            </div>
                        </form>

                        <div className="mt-10 flex items-center justify-center space-x-2 text-sm text-on-surface-variant">
                            <span>Already a member?</span>
                            <Link className="font-bold text-on-surface hover:text-primary transition-colors" href="/login">
                                Login In
                            </Link>
                        </div>
                    </div>

                </section>
            </main>

        </div>
    );
};

export default Register;
