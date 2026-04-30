const InstructorCard = ({ name, role, rating, imageUrl, altText }) => 
    
    {
    return(
  <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center shadow-[0px_20px_40px_rgba(25,28,29,0.06)] hover:translate-y-[-8px] transition-all duration-500 group bg-white/80 backdrop-blur-xl">
    <div className="relative mb-6">
      <div className="absolute inset-0 bg-primary-container rounded-full scale-110 blur-md opacity-0 group-hover:opacity-40 transition-opacity"></div>
      <img
        src={imageUrl}
        alt={name}
        className="w-32 h-32 rounded-full object-cover relative z-10 border-4 border-white shadow-sm"
      />
    </div>
    <h3 className="font-headline text-xl font-bold text-on-surface mb-1">{name}</h3>
    <span className="font-label text-xs font-semibold text-primary uppercase tracking-widest mb-4">{role}</span>
    <div className="flex items-center gap-1.5 bg-tertiary-container/40 px-3 py-1 rounded-full">
      <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
        star
      </span>
      <span className="text-tertiary font-bold text-sm">{rating}</span>
    </div>
  </div>
);
}

export default InstructorCard;