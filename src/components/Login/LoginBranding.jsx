import React from 'react';

const LoginBranding = () => {
  return (
    <div className="hidden md:flex flex-col flex-1 space-y-8 pr-12">
      <div className="space-y-2">
        <span className="font-label text-sm tracking-[0.1em] text-primary uppercase font-bold">Creative Learning System</span>
        <h1 className="font-display text-[4rem] leading-[1.1] font-extrabold text-on-surface tracking-tighter">
          SkillSphare
        </h1>
      </div>
      <p className="font-body text-lg text-on-surface-variant max-w-md leading-relaxed">
        Step into a curated digital studio where high-end design meets deep learning. Access your private workspace and mentor network.
      </p>

    </div>
  );
};

export default LoginBranding;
