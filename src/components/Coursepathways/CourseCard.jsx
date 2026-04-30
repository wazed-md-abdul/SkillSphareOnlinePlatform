import Link from "next/link";

 const CourseCard = ({ courses}) => 
 {
    return (
  <div className="group relative bg-surface-container-lowest rounded-xl p-6 shadow-[0px_20px_40px_rgba(25,28,29,0.06)] border border-outline-variant/10 transition-all duration-500 hover:-translate-y-2">
    <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-lg">
      <img 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        src={courses.imageUrl} 
        alt={courses.title} 
      />
      <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
        <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        <span className="text-xs font-bold text-on-surface">{courses.rating}</span>
      </div>
    </div>
    <div className="space-y-4">
      <div className="space-y-1">
        <p className="text-primary font-label font-bold text-[10px] tracking-wider uppercase">{courses.category}</p>
        <h3 className="text-2xl font-display font-bold text-on-surface leading-snug">{courses.title}</h3>
      </div>
      <div className="flex items-center gap-3 py-2">
        <div className={`w-8 h-8 rounded-full ${courses.authorBg} flex items-center justify-center text-on-secondary-container font-bold text-xs`}>
          {courses.authorInitial}
        </div>
        <p className="text-on-surface-variant text-sm font-medium">{courses.author}</p>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <span 
              key={s} 
              className={`material-symbols-outlined text-lg ${s <= Math.floor(courses.rating) ? 'text-tertiary' : 'opacity-30'}`}
              style={{ fontVariationSettings: s <= Math.floor(courses.rating) ? "'FILL' 1" : "'FILL' 0" }}
            >
              star
            </span>
          ))}
        </div>
        <Link href={`/details/${courses.id}`} className="bg-on-surface text-tertiary-fixed px-6 py-3 rounded-full font-label font-bold text-xs hover:opacity-90 active:scale-95 transition-all cursor-pointer">
          View Details
        </Link>
      </div>
    </div>
  </div>
);
}
 export default CourseCard;