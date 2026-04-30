import React from 'react';
import CourseCard from './CourseCard';


const CoursePathways = () => {
  const courses = [
    {
      category: "Design Strategy",
      title: "Visual Systems & Brand Architecture",
      author: "Elena Lysander",
      authorInitial: "EL",
      authorBg: "bg-primary-container text-primary",
      rating: 4.9,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpgbGknM6mKYnsvae9umHykhy0A6C-CgbTBTifIY74T5GXskgZqUy3--HR2dkvwHTnGX5mbRdBIxjPwiVlxxhJzN984lNewJjZ38R1kAszuuKM3ekdYpCSEZHVOpDpmId35YW6nqr0P-TfGG0JzfohFlUR7KRNA20sHBv4KwkY-IdrIYm20vf_PHO3j_f_5rO8f2RaUmTkLTo2T2ZBUqsMeLu4UAbSrCcDLdAQISMWg1jTCLkCcP-YTAmhpNZM5uthjIPtCxJQJxPM"
    },
    {
      category: "Engineering",
      title: "Scalable Frontend Architecture",
      author: "Julian Marks",
      authorInitial: "JM",
      authorBg: "bg-secondary-container text-on-secondary-container",
      rating: 4.8,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkwodOmstw9CjadzCK55dHhE_FT4kEgK9ib96RDvyb3BsxlXmZAcIBGsuP_Z7ORQRe0L55Pz-rIPQ66xKXvMTpTDCgGl87xlOYMtSDl0szpxXcE2gBc4Sl8B5VGp18hv5wmYeDeyoxGxlwp5LMcgb21ufWoW3jrvRNDve4Dj7TEfPcgZxTwMUSOFzDbtSqxF4Mw7D5zQ4XzkejZkI1I4nGp3m4fq_1UATa58qfFHvUsgqa1Hwl5BMrzKbIarVVZXqOBK1oZLcMfwAU"
    },
    {
      category: "Creative Mindset",
      title: "The Psychology of Interaction",
      author: "Sarah Vance",
      authorInitial: "SV",
      authorBg: "bg-tertiary-container text-on-tertiary-container",
      rating: 5.0,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE-rUNGf2j0riIqeXJpmjyGLo8MyT969efm5KYKxdvMnXPfiNH07h3j4TwkT4PHAlng496EEDr2uiQXHCgSq6geoSwqxpZUYQL6zaDWAjS9GV-SlkyQzk0VgEiWxdfALaICuprTfGoLfanS41kkuTuP5l0tSxA5fp2Svv09KVwtqCNjVC5YfaPzQ7vs48ZGoV-Y_Uf4ct9mfEhzbo2EWgwePwXFmfu9hGrO8lghCEsiyWRmqb2zvHyKhbwcOzch2wKFZ3X7sTSwnsa"
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-8 py-20 min-h-screen relative overflow-hidden">
      {/* Decorative Floating Elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Section Header */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div className="max-w-2xl">
          <span className="text-primary font-label font-bold tracking-widest text-xs uppercase mb-4 block">Curated Pathways</span>
          <h1 className="text-5xl md:text-6xl font-display font-extrabold tracking-tight text-on-surface leading-[1.1]">
            Master the art of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-fixed-dim">Modern Creation.</span>
          </h1>
        </div>
        <div className="flex items-center gap-4 bg-surface-container-low p-2 rounded-full">
          <button className="bg-primary text-on-primary px-6 py-3 rounded-full font-label font-bold text-sm shadow-lg shadow-primary/20 cursor-pointer">Trending</button>

        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {courses.map((course, idx) => (
          <CourseCard key={idx} {...course} />
        ))}
      </div>

      {/* Asymmetric Promotion Section */}
      <div className="mt-32 relative bg-surface-container-low rounded-xl p-12 md:p-20 overflow-hidden">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-black text-on-surface leading-tight">Beyond the standard <br /> learning curve.</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed font-body max-w-md">Our curriculum is designed for the modern atelier. We don't just teach skills; we cultivate a signature perspective through hands-on mentorship and high-fidelity project work.</p>
            <div className="flex flex-wrap gap-4">
              {["Curated Mentors", "Project Based", "Lifetime Access"].map((tag) => (
                <div key={tag} className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-sm font-bold text-on-surface">{tag}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-container to-surface-container rounded-lg rotate-3 absolute -inset-4 opacity-30"></div>
            <img 
              className="relative z-10 rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbOUR53RxKIeVSv0TgsXd2D4NlxLH6Xzo1xgkktisNvRWAna9a__SsvUplYdUDv-vid1QSAg9G3PX3R4ocjUwXTWybrRagP8mkm5Mf0b-Z0Vl8SsP9WHfclCbn-ixyQuYHe8VfcqwaNTCHgR_hZI23KtXVfCJrkq0ddvFpuNO9u5SsLyhsOl47TcW9Nxn05nAEKNpfwpe6F4z50vPDuwV6SS1m31cU9bUjNUqVrRyt_XQ6mu5jMFt0x9RN6Y_wu4uuhwZTXYL0y1Fx" 
              alt="Collaboration" 
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoursePathways;
