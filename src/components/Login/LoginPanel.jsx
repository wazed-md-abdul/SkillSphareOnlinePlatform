"use client";

import Link from 'next/link';
import React from 'react';

const LoginPanel = () => {
  return (
    <div className="w-full max-w-[480px] mx-auto flex-shrink-0">
      <div className="glass-panel ambient-shadow ghost-border rounded-[2rem] sm:rounded-xl p-5 min-[380px]:p-6 sm:p-8 md:p-10 lg:p-12">
        {/* Mobile Branding (Logo Only) */}
        <div className="md:hidden mb-6 sm:mb-8">
          <span className="font-headline font-black text-2xl min-[380px]:text-3xl tracking-tight text-on-surface">SkillSphare.</span>
        </div>

        <div className="mb-7 sm:mb-10">
          <h2 className="font-headline text-2xl min-[380px]:text-3xl font-bold tracking-tight mb-2">Welcome Back</h2>
        </div>

        <form className="space-y-5 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Email Field */}
          <div className="space-y-2">
            <label className="font-label text-[11px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">
              Email Address
            </label>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg group-focus-within:text-primary transition-colors">
                mail
              </span>
              <input
                className="w-full min-w-0 bg-surface-container-highest border-none rounded-lg py-3.5 sm:py-4 pl-12 pr-4 font-body text-sm sm:text-base focus:ring-1 focus:ring-primary focus:bg-primary-container transition-all outline-none"
                placeholder="name@example.com"
                type="email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex justify-between items-end ml-1">
              <label className="font-label text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                Security Key
              </label>
              <a
                className="font-label text-[11px] font-bold uppercase tracking-widest text-primary hover:text-on-primary-container transition-colors"
                href="#"
              >
                Forgot?
              </a>
            </div>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg group-focus-within:text-primary transition-colors">
                lock
              </span>
              <input
                className="w-full min-w-0 bg-surface-container-highest border-none rounded-lg py-3.5 sm:py-4 pl-12 pr-4 font-body text-sm sm:text-base focus:ring-1 focus:ring-primary focus:bg-primary-container transition-all outline-none"
                placeholder="••••••••"
                type="password"
              />
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-3 py-2">
            <input
              className="w-5 h-5 rounded border-none bg-surface-container-highest text-primary focus:ring-primary-container cursor-pointer"
              id="remember"
              type="checkbox"
            />
            <label className="font-body text-sm text-on-surface-variant select-none cursor-pointer leading-snug" htmlFor="remember">
              Remember this station
            </label>
          </div>

          {/* Primary Action Button */}
          <button
            className="w-full bg-on-surface text-tertiary-fixed font-headline font-bold py-4 sm:py-5 rounded-full flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] mt-3 sm:mt-4 shadow-xl shadow-on-surface/10 cursor-pointer"
            type="submit"
          >
            Enter
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-7 sm:mt-10 pt-6 sm:pt-8 border-t border-outline-variant/20 flex flex-col items-center gap-5 sm:gap-6">
          <div className="flex items-center gap-4 w-full">
            <div className="h-px bg-outline-variant/30 flex-1"></div>
            <span className="font-label text-[10px] uppercase font-bold tracking-widest text-outline text-center whitespace-nowrap">Third Party Entry</span>
            <div className="h-px bg-outline-variant/30 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-3 sm:gap-4 w-full">
            <button className="flex-1 py-3 px-4 rounded-full border border-outline-variant/50 flex items-center justify-center gap-2 font-label text-xs font-bold hover:bg-surface-container-low transition-colors cursor-pointer">
              <img
                alt="Google"
                className="w-4 h-4"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuApFVJaCFSVejeAyUl9Fc3-6Zd2n1xLYH1TWUEFJIs4ZOCGQHG7ly8R1QOxHmX6dJOE2UiIDj4lzkOip8rznoSV78xgJU84mBbhxSpdMQa4fac9jgbL3GWo4RmNjIX4jqZ1piOp2QzSfaQFgvTcG9Aa7BP9MG8UQq6wdJ9QKV3yznyxIqbbUTRqapBtun0xCW4dGA16-1RIvoU9CQnzYvlcrbqbLA-yKkOaaQnQy8qXZmHxeQQXM8SX9v1K07_jGwuw2HCDhSg1EUzC"
              />
              Google
            </button>
            <button className="flex-1 py-3 px-4 rounded-full border border-outline-variant/50 flex items-center justify-center gap-2 font-label text-xs font-bold hover:bg-surface-container-low transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-lg">ios</span>
              Apple
            </button>
          </div>

          <p className="font-body text-sm text-on-surface-variant text-center leading-relaxed">
            New to SkillSphare?
            <Link href="/register" className="text-primary font-bold hover:underline decoration-primary/30 underline-offset-4 ml-1">
              Create Account
            </Link>
          </p>
        </div>
      </div>

      {/* Legal Microtext */}
      <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-x-5 gap-y-3 px-2 text-center text-[10px] sm:text-[11px] font-label font-bold uppercase tracking-widest text-outline/60">
        <a className="hover:text-primary transition-colors" href="#">Privacy</a>
        <a className="hover:text-primary transition-colors" href="#">Terms</a>
        <a className="hover:text-primary transition-colors" href="#">Accessibility</a>
      </div>
    </div>
  );
};

export default LoginPanel;
