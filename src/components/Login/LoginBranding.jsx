import React from 'react';

const LoginBranding = () => {
  return (
    <div className="hidden min-w-0 md:flex flex-col flex-1 space-y-8 pr-12">
      <div className="space-y-2">
        <span className="font-label text-sm tracking-[0.1em] text-primary uppercase font-bold">Creative Learning System</span>
        <h1 className="font-display text-[4rem] leading-[1.1] font-extrabold text-on-surface tracking-tighter">
          SkillSphare
        </h1>
      </div>
      <p className="font-body text-lg text-on-surface-variant max-w-md leading-relaxed">
        SkillSphare is a creative learning system designed to make education smarter, simpler, and more engaging. We help learners build real skills through modern tools, interactive experiences, and practical knowledge that inspires growth and confidence.
      </p>

    </div>
  );
};

export default LoginBranding;
