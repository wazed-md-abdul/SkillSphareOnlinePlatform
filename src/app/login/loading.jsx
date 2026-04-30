const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-surface z-[9999]">
      {/* Centered Fancy Loader */}
      <div className="relative mb-8">
        {/* Decorative Spinning Ring */}
        <div className="absolute inset-[-12px] border-2 border-dashed border-primary/20 rounded-full animate-spin [animation-duration:8s]"></div>

        {/* Pulsing Core Icon */}
        <div className="relative w-20 h-20 bg-primary-container rounded-full flex items-center justify-center animate-pulse shadow-[0_0_40px_rgba(152,255,217,0.3)]">
          <span className="material-symbols-outlined text-primary text-4xl font-black fill-icon">
            school
          </span>
        </div>
      </div>

      {/* Brand Identity */}
      <h2 className="text-xl font-bold text-on-surface tracking-tight mb-1">SkillSphare</h2>
      <p className="text-sm text-outline font-medium animate-pulse">Initializing your SkillSphare...</p>

      {/* Subtle Background Blur Accents */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-container/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-tertiary-container/10 rounded-full blur-[100px] pointer-events-none"></div>
    </div>
  );
};

export default LoadingScreen;
