import React from 'react';

const LearningTips = () => {
  return (
    <section className="min-h-screen flex flex-col items-center px-6 py-24 md:px-20 bg-surface">
      {/* Section Header */}
      <div className="w-full max-w-7xl mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div className="max-w-2xl">
          <span className="font-label text-primary tracking-[0.2em] text-sm font-bold uppercase mb-4 block">Cognitive Mastery</span>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tight">
            Master Your <span className="text-primary">Cognitive Flow</span>
          </h1>
        </div>
        <div className="pb-2">
          <p className="font-body text-lg text-secondary max-w-xs leading-relaxed">
            Optimize your mental workspace with curated strategies designed for deep learning and sustained focus.
          </p>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[320px] relative z-10">
        {/* Card 1: Effective Study Techniques (Large Feature) */}
        <div className="md:col-span-7 glass-card-dark rounded-xl p-10 flex flex-col justify-between group glow-hover relative overflow-hidden shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
            <img
              className="w-full h-full object-cover opacity-20 mix-blend-overlay scale-110 group-hover:scale-100 transition-transform duration-700"
              alt="Study techniques"
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200"
            />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10 transition-colors group-hover:border-tertiary/30">
              <span className="material-symbols-outlined text-tertiary-fixed text-3xl icon-highlight fill-icon">auto_stories</span>
            </div>
            <h3 className="font-display text-3xl font-bold text-white mb-4">Effective Study Techniques</h3>
            <p className="text-white/60 text-lg leading-relaxed max-w-md">
              Leverage active recall and spaced repetition to encode information into long-term memory with minimal friction.
            </p>
          </div>
          <div className="relative z-10 flex items-center gap-4 mt-8">
            <span className="font-label text-xs uppercase tracking-widest text-tertiary-fixed font-bold">Deep Work Strategy</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
        </div>

        {/* Card 2: Time Management Tips */}
        <div className="md:col-span-5 glass-card-dark rounded-xl p-10 flex flex-col justify-between group glow-hover relative overflow-hidden shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-transparent"></div>
            <img
              className="w-full h-full object-cover opacity-20 mix-blend-overlay scale-110 group-hover:scale-100 transition-transform duration-700"
              alt="Time management"
              src="https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=1200"
            />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10 transition-colors group-hover:border-tertiary/30">
              <span className="material-symbols-outlined text-tertiary-fixed text-3xl icon-highlight fill-icon">schedule</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">Time Management Tips</h3>
            <p className="text-white/60 text-base leading-relaxed">
              Master the art of time-blocking and the Pomodoro technique to create a sustainable learning rhythm.
            </p>
          </div>
          <div className="relative z-10 flex items-center justify-between mt-6">
            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-all hover:bg-white/10 active:scale-90" aria-label="Learn more">
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Card 3: Productivity Hacks */}
        <div className="md:col-span-5 glass-card-dark rounded-xl p-10 flex flex-col justify-between group glow-hover relative overflow-hidden shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent"></div>
            <img
              className="w-full h-full object-cover opacity-20 mix-blend-overlay scale-110 group-hover:scale-100 transition-transform duration-700"
              alt="Productivity"
              src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=1200"
            />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10 transition-colors group-hover:border-tertiary/30">
              <span className="material-symbols-outlined text-tertiary-fixed text-3xl icon-highlight fill-icon">bolt</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">Productivity Hacks</h3>
            <p className="text-white/60 text-base leading-relaxed">
              Streamline your digital environment and minimize context switching for peak cognitive performance.
            </p>
          </div>
          <div className="relative z-10 flex items-center justify-between mt-6">
            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-all hover:bg-white/10 active:scale-90" aria-label="Learn more">
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Card 4: Staying Motivated (Tall Content) */}
        <div className="md:col-span-7 glass-card-dark rounded-xl p-10 flex flex-col justify-between group glow-hover relative overflow-hidden shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
            <img
              className="w-full h-full object-cover opacity-20 mix-blend-overlay scale-110 group-hover:scale-100 transition-transform duration-700"
              alt="Motivation"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
            />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10 transition-colors group-hover:border-tertiary/30">
              <span className="material-symbols-outlined text-tertiary-fixed text-3xl icon-highlight fill-icon">psychology_alt</span>
            </div>
            <h3 className="font-display text-3xl font-bold text-white mb-4">Staying Motivated</h3>
            <p className="text-white/60 text-lg leading-relaxed max-w-md">
              Understand the psychology of habit formation to maintain momentum even when initial excitement fades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LearningTips;
