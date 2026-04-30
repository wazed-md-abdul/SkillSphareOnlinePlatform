
export default function CourseDetails() {
  return (
    <>
      <main className="max-w-[1440px] mx-auto px-8 pt-12 transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-12">
            <div className="relative p-3 rounded-xl shadow-2xl">
              <img
                className="relative w-2/3  aspect-video object-cover rounded-xl shadow-2xl"
                alt="Modern workspace with designer brainstorming"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFHt7bjFcMaj7KkpTjbR-PueXVQYaf0L8VDrthzdp4H_z_UxJuWTj1fvkL-Tx8hQqfOXi6uH-jMqqEg23r56BbAGjLooBYafLlE0AHAT1HHIEzqCPigzfttEhGTUA6lpmS68or3wICL5FVTgyBpnGkpaSTRbyn9fPqJP2odIru3KGr8le-pRUnQs2Jwz4qAzgrTXrs--qWd7r_dhFWZz3QsGqDGcRB9O69Bst1_nE4bUgP5hz-_ApKjZYKHZS77K1nGXkjfhdhHO1E"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="bg-primary-container text-on-primary-container px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Masterclass
                </span>
                <div className="flex items-center text-tertiary">
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="text-sm font-bold ml-1">4.9 (2.4k Reviews)</span>
                </div>
              </div>
              <h1 className="text-5xl font-display font-extrabold tracking-tight text-on-background leading-tight">
                Advanced Creative Systems: Designing the Future
              </h1>
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full object-cover grayscale"
                  alt="Julian V. Atelier"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcRGEoevff2-cjS4l_zi7-bcZaQBks7nNiQwSfTEiUe_zVJJt4--cgQJgixVgajzwJP6kDep57cqNDpuD2jnZ9O8cxHIt__vp392uOukdIAS1_WH8dmExlv9ley-70oKfK_SnzjW4jVUaOuP8xS90T6KO8fBpj9dmyvjFfgR5MvX1nglPjvDEcf1rw3ndxbdxKWg5A6AYZq3hQdv2hTha917MKTTwmAd1y-GtcceCylfZgROh-940ClcM7CklqP4-_KtuKO-3HLgri"
                />
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-outline">Lead Instructor</p>
                  <p className="font-bold text-on-surface">Julian V. Atelier</p>
                </div>
              </div>
              <p className="text-lg text-secondary leading-relaxed max-w-2xl">
                Uncover the secrets of high-end digital craftsmanship. This course breaks down the complex intersection of aesthetics, usability, and psychological influence in modern interface design. Learn to build experiences that don't just work—they resonate.
              </p>
              <div className="pt-4">
                <button className="bg-on-surface text-tertiary-fixed px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5 space-y-8 ">
            <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-xl p-8 shadow-sm">
              <h3 className="text-sm uppercase tracking-widest font-extrabold text-outline mb-6">Course Specs</h3>

            </div>


          </aside>
        </div>
      </main>

    </>
  );
}