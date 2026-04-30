import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full relative py-12 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#f3f4f5] dark:bg-zinc-950 transition-colors duration-300">
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="text-lg font-bold text-[#191c1d] dark:text-white font-headline">SkillSphare</div>
        <p className="font-body text-sm tracking-wide text-[#191c1d]/50 dark:text-white/40">
          © 2024 SkillSphare. The Lucid Atelier.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <a className="font-body text-sm tracking-wide text-[#191c1d]/50 dark:text-white/40 hover:text-primary dark:hover:text-[#98ffd9] transition-colors" href="#">
          Privacy
        </a>
        <a className="font-body text-sm tracking-wide text-[#191c1d]/50 dark:text-white/40 hover:text-primary dark:hover:text-[#98ffd9] transition-colors" href="#">
          Terms
        </a>
        <a className="font-body text-sm tracking-wide text-[#191c1d]/50 dark:text-white/40 hover:text-primary dark:hover:text-[#98ffd9] transition-colors" href="#">
          Careers
        </a>
        <a className="font-body text-sm tracking-wide text-[#191c1d]/50 dark:text-white/40 hover:text-primary dark:hover:text-[#98ffd9] transition-colors" href="#">
          Support
        </a>
      </div>
      <div className="flex gap-4">
        <span className="material-symbols-outlined text-[#191c1d]/50 dark:text-white/40 cursor-pointer hover:text-primary">
          language
        </span>
        <span className="material-symbols-outlined text-[#191c1d]/50 dark:text-white/40 cursor-pointer hover:text-primary">
          hub
        </span>
      </div>
    </footer>
  );
};

export default Footer;
