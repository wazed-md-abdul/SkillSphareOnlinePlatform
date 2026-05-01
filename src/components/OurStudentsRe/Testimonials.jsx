import React from 'react';

const testimonials = [
  {
    name: "Alex Sterling",
    course: "UX Masterclass",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCr2cWixJzxRswiLeFHGYBMc6fyoCQo1-arF8y5nHnMf1sE-OEz1GO8RIBUEt1wKaMhZU1FeNhH94Xv86T8FV-lWHswjrmRYbgtzy67vb4m8seayFiqmHrhow4iIrdICSscKSn7bAedLxkOkdgUQvA7SKvYTbo3HJEEYX3smopTDdOcjzDLNzuOgSv-OS9tE_iEWBUGZpmuM8uqVfl_YHEyaGeUIX8SjvNuAvVYya3S4wECzryfLJktewBS3OU7ZFfBsH7XuItJ-pVp",
    quote: "The curriculum depth at SkillSphere is unparalleled. It felt more like an apprenticeship in a high-end studio than a traditional course.",
    rating: 5,
    offset: false
  },
  {
    name: "Maya Chen",
    course: "Creative Leadership",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwXc2kR2pvdYuDSuorbK2GOGaRlT2ttxUDkqiS28xi2z9VZ24ohCFsMiCB5i5NDo8mq-k1MHwIApDTVtuwhAOCM81-vOVzgRqJgyrad3AJt-0JgiHI6LVIKob65Zvwbq-ZBF-6ZiWrM92kx_RlGDARZLpmunMK-cHbe-1gBK9r6DL-OLysqWpuWUsWQs4lhI6kbTNzeeIK21c9BVUHAPcYlJTLG9q22OmDMlawjKdixWK8fu4KTeGTa-_ObdQGcSOOCclHgLpkYCj-",
    quote: "Lucidity is the word. Every module was crystal clear and immediately applicable to my team's workflow.",
    rating: 5,
    offset: true
  },
  {
    name: "Jameson Holt",
    course: "Full-Stack Craft",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApAM3CulElYik0T1d-vhWmSoKKhylPEQRx29r1anqkuXN9uDHZgCPC3-zJUIe2YTqDvZQVVDaIyfuREkJ4LT5t51nRWEnai23JDBee5MH9SQgMovXCxTDposWDEWVqFtoEySsSCIbkzNxrUnS3uPQmtSEwCrt0K0Z9a1AtRdsM8EElyCpFqKC7O7zaFgd_a1mYUcxeVxN-UMhcd3clZ3i8ZplFM_GnnTm7ozIG6zGllHIrc37KMdxaJOMMSZScBmIJ093VdDjLMbxT",
    quote: "The community of mentors here is world-class. It's not just a platform; it's a sanctuary for builders.",
    rating: 5,
    offset: false
  },
  {
    name: "Elena Moretti",
    course: "Product Design",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhVeYVoTQ1yNkGuH4uFicGfIViTuujWy2ONymTGiTSK5JsapPaLlBCXu1y8E7VQYKeA8RLqbjrhAvbhk9mTV2Xpge6I7sjy-CUQ3kTu6PEzdYmg1UyNWdfxIrGTgHxZ-uvgiXut49hs8UTcA4PREpLrTMwxjRN3ORC5VlulzN6gE6ES2DU5USG3aQGozbBG9w-VblqUziQxFlHLK484oVizgo-RL9OQDE8taMWNOUrsmGNYPu9OXfY--x6pxosGldx6yZZsBT-Mo7-",
    quote: "I've taken dozens of online courses, but none felt as intentional and high-fidelity as SkillSphere's curriculum.",
    rating: 5,
    offset: true
  }
  
];

const Testimonials = () => {
  // this is
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-24 px-6 md:px-10 bg-surface">

      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-container/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-container/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1440px] w-full mx-auto relative z-10">

        <div className="mb-20 text-center md:text-left">
          <span className="font-label text-sm font-bold tracking-widest text-primary uppercase block mb-4">
            Real Impact
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface max-w-2xl leading-[1.1]">
            What Our <span className="text-primary italic">Students</span> Say
          </h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass-card p-10 rounded-xl flex flex-col h-full shadow-[0px_20px_40px_rgba(25,28,29,0.04)] hover:scale-[1.02] transition-all duration-500 ${testimonial.offset ? 'lg:mt-8' : ''
                }`}
            >
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover shadow-sm"
                />
                <div>
                  <h4 className="font-headline font-bold text-lg text-on-surface leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="font-body text-sm text-on-surface-variant">
                    {testimonial.course}
                  </p>
                </div>
              </div>

              <div className="flex gap-0.5 mb-6">
                <span className="material-symbols-outlined text-tertiary fill-icon">star</span>
                <span className="material-symbols-outlined text-tertiary fill-icon">star</span>
                <span className="material-symbols-outlined text-tertiary fill-icon">star</span>
                <span className="material-symbols-outlined text-tertiary fill-icon">star</span>
                <span className="material-symbols-outlined text-tertiary fill-icon">star</span>
              </div>

              <blockquote className="font-body text-on-surface-variant leading-relaxed text-lg italic">
                {testimonial.quote}
              </blockquote>
            </div>
          ))}
        </div>

     
        <div className="mt-24 flex justify-center">
          <div className="h-2 w-24 bg-primary-container rounded-full opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
