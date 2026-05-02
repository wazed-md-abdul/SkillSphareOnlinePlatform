import React from 'react';
import { IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-primary-container w-full rounded-t-[3rem] mt-20 flex flex-col md:flex-row justify-between items-center px-12 py-16 max-w-[1440px] mx-auto">
      <div className="mb-12 md:mb-0">
        <span className="font-headline font-extrabold text-[#191c1d] text-3xl tracking-tighter">SkillSphare.</span>
        <p className="mt-4 font-body text-sm text-[#191c1d]/70 max-w-xs">
          Elevating the digital landscape through curated, world-class education for visionaries.
        </p>
      </div>

      <div className="flex flex-col items-center md:items-end gap-6">
        <div className="flex gap-8 font-body text-sm text-[#191c1d]/70">
          <a className="hover:text-[#735c00] transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-[#735c00] transition-colors" href="#">
            Terms of Service
          </a>
          <a className="hover:text-[#735c00] transition-colors" href="#">
            Help Center
          </a>
          <a className="hover:text-[#735c00] transition-colors" href="#">
            Affiliate
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/wazed-md-abdul/SkillSphareOnlinePlatform"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center justify-center p-2 rounded-full bg-white/60 border border-[#e8e8e8] text-[#191c1d] hover:bg-[#111111] hover:text-[#FFDE42] transition-colors"
          >
            <IoLogoGithub className="text-xl" />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter / X"
            className="inline-flex items-center justify-center p-2 rounded-full bg-white/60 border border-[#e8e8e8] text-[#191c1d] hover:bg-[#111111] hover:text-[#FFDE42] transition-colors"
          >
            <IoLogoTwitter className="text-xl" />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center justify-center p-2 rounded-full bg-white/60 border border-[#e8e8e8] text-[#191c1d] hover:bg-[#111111] hover:text-[#FFDE42] transition-colors"
          >
            <IoLogoInstagram className="text-xl" />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center p-2 rounded-full bg-white/60 border border-[#e8e8e8] text-[#191c1d] hover:bg-[#111111] hover:text-[#FFDE42] transition-colors"
          >
            <IoLogoLinkedin className="text-xl" />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="inline-flex items-center justify-center p-2 rounded-full bg-white/60 border border-[#e8e8e8] text-[#191c1d] hover:bg-[#111111] hover:text-[#FFDE42] transition-colors"
          >
            <IoLogoFacebook className="text-xl" />
          </a>
        </div>

        <div className="font-body text-sm text-[#191c1d]/70">
          © 2024 SkillSphare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
