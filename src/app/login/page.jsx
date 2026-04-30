import React from 'react';
import LoginBranding from '@/components/Login/LoginBranding';
import LoginPanel from '@/components/Login/LoginPanel';
import Background from '@/components/shared/Background';

export default function LoginPage() {
  return (
    <>
      <Background />
    <div className=" font-body text-on-surface min-h-[calc(100svh-72px)] flex items-center justify-center relative overflow-x-hidden py-6 sm:py-10">
      {/* Background Decorative Elements */}
      

      {/* Login Canvas */}
      <main className="relative z-10 w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch md:items-center justify-center gap-8 md:gap-12">
        <LoginBranding />
        <LoginPanel />
      </main>
    </div>
    </>
  );
}
