"use client"

import Link from "next/link";
const NotFound = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 font-sans">
      <div className="text-center max-w-md w-full">

        {/* Icon */}
        <div className="relative inline-block mb-8">
          <div className="w-24 h-24 rounded-full bg-error/10 flex items-center justify-center mx-auto">
            <svg className="w-11 h-11 text-error" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-base-100 border border-base-300 flex items-center justify-center">
            <span className="text-error text-xs font-semibold">!</span>
          </div>
        </div>

        {/* Label */}
        <p className="text-xs font-semibold tracking-widest text-error uppercase mb-2">
          Error 404
        </p>

        {/* Heading */}
        <h1 className="text-3xl font-semibold text-base-content mb-3 leading-tight">
          Page not found
        </h1>

        {/* Description */}
        <p className="text-base text-base-content/60 leading-relaxed mb-8">
          The page youre looking for doesnt exist or has been moved.
          Double-check the URL or head back home.
        </p>

        {/* URL pill */}
        <div className="bg-base-300/50 border border-base-300 rounded-xl px-4 py-3 flex items-center gap-3 mb-8 text-left">
          <svg className="w-4 h-4 text-base-content/40 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          <code className="font-mono text-sm text-base-content/50 break-all">
            /dashboard/reports/q3-analysis
          </code>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/" className="btn btn-neutral gap-2 flex items-center inline-flex items-center justify-center p-2 rounded-full bg-primary-container text-on-primary-container border border-[#e8e8e8] hover:bg-[#111111] hover:text-[#FFDE42] transition-colors">
            <svg className="w-4 h-4 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Go home
          </Link>
          <button onClick={() => history.back()} className="btn btn-outline gap-2 flex items-center inline-flex items-center justify-center p-2 rounded-full bg-primary-container text-on-primary-container border border-[#e8e8e8] hover:bg-[#111111] hover:text-[#FFDE42] transition-colors">
            <svg className="w-4 h-4 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Go back
          </button>
        </div>

        {/* Quick links */}
        <div className="mt-10 pt-6 border-t border-base-300">
          <p className="text-sm text-base-content/40 mb-3">Looking for something specific?</p>
          </div>
        </div>
    </div>
        </div>
    );
};

export default NotFound;
