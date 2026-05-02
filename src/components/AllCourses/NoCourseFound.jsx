import { FiSearch, FiHelpCircle, FiRefreshCw, FiGrid, FiArrowRight } from "react-icons/fi";

export default function NoCoursesFoundCard() {
  return (
    <div className="max-w-md mx-auto rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-2xl p-8 text-center">
      <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="relative z-10 rounded-full bg-black p-8 shadow-md">
          <FiSearch className="text-[64px] text-[#FFDE42]" />
          <div className="absolute -top-2 -right-2 h-12 w-12 rounded-full bg-emerald-200 text-emerald-900 flex items-center justify-center shadow-lg">
            <FiHelpCircle className="text-2xl" />
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">No courses found</h1>
        <p className="text-slate-500 leading-relaxed px-2">
          We couldn&apos;t find any courses matching your search. Try adjusting your filters or searching for something else.
        </p>
      </div>

      <div className="mt-12 flex items-center opacity-40">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        <div className="px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
          SkillSphere 
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>
    </div>
  );
}
