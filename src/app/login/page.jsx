import React from 'react';
import LoginBranding from '@/components/Login/LoginBranding';
import LoginPanel from '@/components/Login/LoginPanel';

export default function LoginPage() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-[calc(100svh-72px)] flex items-center justify-center relative overflow-x-hidden py-6 sm:py-10">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[12%] -left-[22%] h-[42rem] w-[42rem] rounded-full bg-primary-container/30 blur-[120px] sm:-left-[5%] sm:w-[40%] sm:h-[60%]"></div>
        <div className="absolute top-[48%] -right-[35%] h-[38rem] w-[38rem] rounded-full bg-tertiary-container/20 blur-[140px] sm:top-[40%] sm:-right-[10%] sm:w-[50%] sm:h-[70%]"></div>
      </div>

      {/* Login Canvas */}
      <main className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch md:items-center justify-center gap-8 md:gap-12">
        <LoginBranding />
        <LoginPanel />
      </main>
    </div>
  );
}
