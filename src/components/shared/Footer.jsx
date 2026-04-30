import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f3f4f5] w-full rounded-t-[3rem] mt-20 flex flex-col md:flex-row justify-between items-center px-12 py-16 max-w-[1440px] mx-auto">
      <div className="mb-12 md:mb-0">
        <span className="font-headline font-extrabold text-[#191c1d] text-3xl tracking-tighter">SkillSphare.</span>
        <p className="mt-4 font-body text-sm text-[#191c1d]/70 max-w-xs">
          Elevating the digital landscape through curated, world-class education for visionaries.
        </p>
      </div>
      <div className="flex flex-col items-center md:items-end gap-6">
        <div className="flex gap-8 font-body text-sm text-[#191c1d]/70">
          <a className="hover:text-[#735c00] transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-[#735c00] transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-[#735c00] transition-colors" href="#">Help Center</a>
          <a className="hover:text-[#735c00] transition-colors" href="#">Affiliate</a>
        </div>
        <div className="font-body text-sm text-[#191c1d]/70">
          © 2024 SkillSphare Atelier. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
