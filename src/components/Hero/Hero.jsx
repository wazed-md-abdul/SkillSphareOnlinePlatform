import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/5 hover:border-primary/20 transition-all duration-500 group">
    <span className="material-symbols-outlined text-primary mb-6 text-4xl group-hover:scale-110 transition-transform">{icon}</span>
    <h3 className="text-xl font-headline font-bold text-on-surface mb-3">{title}</h3>
    <p className="text-on-surface-variant text-sm leading-relaxed">{description}</p>
  </div>
);

const Hero = () => {
  return (
    <main className="relative min-h-screen pt-12 pb-24 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-tertiary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <section className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/15 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-label font-bold tracking-widest text-on-surface-variant uppercase">New Semester Live</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-on-surface leading-[0.95] tracking-tighter mb-8">
            Upgrade Your <br />
            <span className="text-primary italic">Skills Today</span>
          </h1>
          <p className="text-lg text-on-surface-variant font-body leading-relaxed max-w-lg mb-10">
            Experience a curated studio for high-end digital mastery. Connect with industry experts and join a community of 50k+ learners redefining the future of tech.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-on-surface text-tertiary-fixed font-headline px-8 py-4 rounded-full font-bold text-lg shadow-[0px_20px_40px_rgba(25,28,29,0.15)] hover:shadow-none transition-all duration-500 flex items-center gap-3 active:scale-95 cursor-pointer">
              Get Started
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="bg-primary-container text-on-primary-container font-headline px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-container/80 transition-all duration-300 active:scale-95 cursor-pointer">
              Explore Courses
            </button>
          </div>
          <div className="mt-16 flex items-center gap-12">
            <div>
              <span className="block text-3xl font-display font-black text-on-surface tracking-tighter">4.9/5</span>
              <span className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-widest">Average Rating</span>
            </div>
            <div className="w-px h-10 bg-outline-variant/30"></div>
            <div>
              <span className="block text-3xl font-display font-black text-on-surface tracking-tighter">120+</span>
              <span className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-widest">Expert Mentors</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="relative w-full aspect-[4/5] md:aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary-container/10 rounded-xl overflow-hidden shadow-[0px_40px_80px_rgba(25,28,29,0.08)]">
              <img
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6ErH4F4t6lfutAFT-4-Q7nbJDNe5Q2_TBAV88WIr2bDRnO72WmovjF2rHPqYWSF7C84YyXToaea1xgB2XEISn2Oq29LKukHlvlJzYGJRhZvHcUnvjEDIhZAXBX7WPRwuivbq8dIILdDqt3ZG5dk8431jKjVYeuVnQLAgu-RUCsIXxl5PXG5rKPp9KWFxFeA4-WNPoSW27fLzy3O33ZqViXqL6H8kA8dCIDo3uyE1YPE2Ma-sN-tqaPz3pyhuAIX40s9W9ag0alJB7"
                alt="Students collaborating"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-panel bg-surface-container-lowest/80 p-6 rounded-lg shadow-[0px_20px_40px_rgba(25,28,29,0.06)] border border-outline-variant/10 max-w-[240px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">auto_awesome</span>
                </div>
                <span className="font-headline font-bold text-sm">AI-Driven Path</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">Personalized learning tracks tailored to your unique career goals and speed.</p>
            </div>
            <div className="absolute top-12 -right-8 glass-panel bg-on-surface p-5 rounded-lg shadow-xl max-w-[200px]">
              <div className="flex -space-x-3 mb-3">
                <div className="w-8 h-8 rounded-full border-2 border-on-surface bg-primary-fixed"></div>
                <div className="w-8 h-8 rounded-full border-2 border-on-surface bg-secondary-fixed"></div>
                <div className="w-8 h-8 rounded-full border-2 border-on-surface bg-tertiary-fixed"></div>
              </div>
              <p className="text-[10px] font-label font-bold text-tertiary-fixed uppercase tracking-widest">Join 5,000+ others</p>
            </div>
            <div className="absolute -top-4 left-1/4 w-32 h-32 border-2 border-primary/20 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
              <div className="w-2 h-2 bg-primary rounded-full absolute -top-1"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon="workspace_premium"
            title="Accredited Content"
            description="Our curriculum is built by veterans from top tech firms like Google, Airbnb, and Meta."
          />
          <FeatureCard
            icon="forum"
            title="Active Community"
            description="Daily peer reviews and collaborative coding challenges to keep your momentum high."
          />
          <FeatureCard
            icon="trending_up"
            title="Career Growth"
            description="85% of our alumni report a significant salary increase within six months of graduation."
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;
