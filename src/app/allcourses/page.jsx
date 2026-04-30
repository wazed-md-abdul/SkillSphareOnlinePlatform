import CourseCard from "@/components/AllCourses/CourseCardForAll";
const courses = [
  {
    title: "Advanced UI Systems with Tailwind & React",
    description: "Master the art of design systems and scalable frontend architectures.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6URbtSp6ckPXF8Zp8R4E61UbQSRiZIJ4SNGLSqDMIg-QtORadbvaxQ9PLB-tlWHhVMeSuXTL3nrmCtJMd3oLbOiPnF4tB73tud32iDs0b7kCPZh5CkIM3sD-WGt9wWdbtOwQcJZ-W4yjw1IREP2uLK5HDIfPv3ydZ3g7SPpC2dIcQB6E1WjlpS3zQI53wfY-u9MUeBGkNkXhscuKWzicc0-wbq5ZsDjX6X9I-VIFGOkdtdvjysKI24lZ9gUxy-bUK4zRIhWTDGUdZ",
    categories: [
      { label: "Development", type: "tertiary" },
      { label: "Best Seller", type: "primary" }
    ],
    instructor: {
      name: "Marcus Thorne",
      role: "Senior Architect",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOP27iuha9B1FM_5zC5cOB2TV0xXNZH3BQG3Vk1mIlzWEemoKzkBpwFh5m2OVHMirMaK1yO70ivpOFHAbyP8m-RMNsZ2UeEwZk-AE_9qE_-e-91GiXZ97ZKvaH5r41n95g0VPRNtdgdThjpe-gnbSYBjd3LWQY5iHkhxKqaoc-Vw0WC9B8RnRnAgxPR5RC2uXuwBaCd4hZ1NOAyNw4o-uV4mVQEWsxBIJh-hyWywaIpAGQ6tSdaQ-GVKxNkWO5rXSIZ58iG--Sm67M"
    },
    price: "149.00"
  },
  {
    title: "The Psychology of Minimalist Design",
    description: "Explore the profound impact of negative space and user psychology in branding.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2HXINLEKMmYucobECMtDMExQLVLHq-moGIbvsN2HYIpY_mabT2b0OV38YhTdWWiCoA18wbgCPh3RxzHP6rJKxem-Slajai3zmyv6WgGnTdiSOZ3nak3BdCP5rnfzPKRI-_7wPVmN4VRwv_MyTF3eaaYZSn_8KmP9fFdXtgg6CoGiKXow5Pr38BiM1wIJ-b6geuuIqlQaZlJGm-BnapXIc6niOZe5S81kBBggAri4vDuF2e-V22Y7MzqNeTJdSMoCyknodqmHBuLJD",
    categories: [
      { label: "Design", type: "secondary" }
    ],
    instructor: {
      name: "Elena Vance",
      role: "Creative Director",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXXpmqOEoRJwkDrzB2Whxpm5RP1kJrqGMLtr6QkPO0ZDPGYMuFgD-33_lTlkExMac6IqQAvFT1ey4W2nxa_nv2sAaFvrRBpYdTf9wo2Qs27imVgEwUPxPtNhhNsVVbV_YOEuFwwEDGWrpqp5DLi_NYYYOfdefNYNS2uC88mwyTxwChUdknGLHF1RB0exSQTVuFW5NbbZKNRBygkmWUkc8FuIV8CqYrpIyGMCa9OJEKtmdpU533lE7wEE6tIFsT183n3eRH98_rkbDY"
    },
    price: "129.00"
  },
  {
    title: "Strategic Growth for Creative Studios",
    description: "Scale your agency from boutique to global through high-impact strategies.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjR1fVDlNmoQ5ahBagMx-bBdRsesWpABK9SWBxvxdraAAGT3BKl1d7PRd4glnwvKVONofzoilm9Y6GOFubiQpnDxK9gzwtsC5u3_u_L9o5tPko8KaFNUuh-IjNA9rsULbcbzlTIn9ulIG6V7IqotXUO-NnHu-4FqTU43jAQRuYVZSQYOyjYN7bNKy1o1t0dcmKaAplj1GmV_2TQAIRDPzFmPaC8XTmmQ5VUR1KjA8V3SVWjtCm64sAS9R6BZQD9ivgEy5YfsW_xso1",
    categories: [
      { label: "Business", type: "tertiary" }
    ],
    instructor: {
      name: "Jameson Blake",
      role: "Managing Partner",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1f9ctq7xBc30WYszK1FpIxBcFfq_VhXlRVRerl9Se8u0STsTsFR5O-edt0n5sEPfyDlHK-SYtqAm2sqrTRTm0pWgR7aZpVTFYuBmJrrDjIpdnFNlm8r6jRemfEljPnngTVKuQRb58qfmOcISZU21mcPyIgenxKYeztwYSvRZ5faWdPxg2SZRNYivUQeX7Fu5fvu16BffAvQ1Zqiou565H5q1YhEjLN3lWmTzv3qzx0fJAtX3Dx0QLsSUgrq4ipllOtIfkHTyGZMUA"
    },
    price: "199.00"
  },
  {
    title: "Mastering 3D Typography",
    description: "Bring your words to life using Cinema 4D and high-end textural lighting.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzzHcQzRMLZiRzsp2N6XFZsOFgJz6xaYvHhmLSoUa5_MSOX8O2ItV6s5yXolwIQKeov0D5n4RKhQn8iJXn0uZf8Sz_Op8ACsNEMeItYXCtcuedo7C_ECCCWAjahQcpKIcJKQGvTv5yU06b39T5bLDFg86iqbiO_NpKwf8A9OpZoTIsoo96pOtSoQ11LYQZ9ZsfG16dQHPY_UADqTNLPI8O-xBsD7fLp3N8ib7-VqwrbDu67UhZNIBKQ5V9Mf3wzpqkyWTxo8VlyHJs",
    categories: [
      { label: "Design", type: "secondary" }
    ],
    instructor: {
      name: "Sasha Romanova",
      role: "3D Artist",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAylFi9vyf6isrPXvAoaL7tBXZRRoZsdctNulBoBMWpamjc3ivEk5Ms4zLjf58pbXfA1KdijSJ_-ITmUCz8XY93nmCmnpHzi-4uww0rB3W92UUbLmhakWSfmZtbu2ANHvY9jQN7oRREfnMr7D2yreQYwoJOCwOC7abl37RScZ79ejR6PB9ACpeo6ib5kgKr7EPuKYfaOwJD50b07jgXWJ9Jdm807A8nbuDzjfGJ7ZRXKereOs-iVfBnNahbZbl_kwbv1vLe9ZLC08yR"
    },
    price: "89.00"
  },
  {
    title: "Rust for Web Foundations",
    description: "Build incredibly fast, memory-safe web applications from the ground up.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA24GzeDaWL4HMLvxAJGbqgjC_jjdi7NVOrxHmgtCwTrGCDrJb9ZFyaU0qzqShPjdEk_C-0A6B_Q8DQiMcuQHq80JXKlL9wC4dDegYHjCQYj_L887I78-4iZc3qfPBmv_NuZYyxbBYk5FMQyNlBNL1rFYgcLMpgfHKZOJa6k61JZg_F-JsSTWLuce-gqKbRE-nO7Gv5WaOCiM4TVOv02IH3nP0OFcWbViiMR9tOvlSwaG2-iUn5GyFs8DVeKezJTGZgajZqQXxwwaYD",
    categories: [
      { label: "Development", type: "tertiary" }
    ],
    instructor: {
      name: "Liam Carter",
      role: "Systems Engineer",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAULWLbNib7Lpwm_c5c8T-gcNYBrRBnHWFeCI8lxecKQncC6y3Mege1R06v2c0H-darjxEFlu-JZSqeb13ZF59o0-4lAk8Y33HSP2N2VodIozBOEe9MJnw9R1Submk0PKLuXYZ8nA0NXA1LTDsLjiM3s-DkpXdcAtDkB-JA7NWsZOY9DvBCDle6RBAmhfgZO3ox_UzZHoJmToeGIMMHuHjwNC3dXtTAMbm32TvLiU300CvvyqoVDJVUxVhPjZlU0xSG59CA-iN8m4En"
    },
    price: "179.00"
  },
  {
    title: "Modern Project Management",
    description: "Master Agile and Scrum methodologies to lead high-performing teams.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZRIf8fk6f8n1w6zL3M1JzQNcu6jh-8QskHCpQ1pWBmYRu1I7hBm5ogm9-HOCjEe9GdRgqX8DPABBvk5o52zoPzeuGupbgz2GJNqvZK5DpCz7QWCzJehPxLYbkvEitMPLB9-RCIBrIW2eJg5353cupQDu-ULmYTmy-33-JW7tofo3hojwM3yry7pw9o_nekJaUCH79Ih2Hw63v8VWXN1WDXp_hkD7BoZLLyeSutCPeHbAumShTGx0nyFrc5CEIGaMG4DZOv7vySf--",
    categories: [
      { label: "Business", type: "tertiary" }
    ],
    instructor: {
      name: "Nia Robinson",
      role: "Certified Scrum Master",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCG_G0J7euSAVwrW2I0hXkkS7yo_26cKDA3mQuia0M5g2FQXyRgV7oFw4OtWLHQPV8bxqtOssMntcSHsnLEtMnmarzi6OskV1NTKNCMriYEYMxB4oL-1TjEIuKkFuATXqJyGjB0JeA5OQ4LWWLbiSvnbT8hYqx1PsiPJ12s231i-s6hMNLBioUVWf9L9ChIJIAxP8HvGFsCCtZ5ZQBzUQ3cOAkvSXK1G9KE0-QB-xK0sjQqPg5Ruhwxm6cc-WI2Ohg5e483nYM-in1g"
    },
    price: "119.00"
  }
];


export default function AllCourses() {

  return (
    <>
 
      <main className="max-w-[1440px] mx-auto px-8 pt-12 pb-24">
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter font-headline text-on-background mb-4">
            The Course Atelier
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl font-body">
            Curated learning experiences designed for the next generation of creative professionals.
          </p>
        </header>

        <section className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="relative flex-grow max-w-xl">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
              search
            </span>
            <input 
              className="w-full pl-12 pr-6 py-4 bg-surface-container-highest rounded-full border-none focus:ring-1 focus:ring-primary focus:bg-primary-container transition-all placeholder:text-outline/60 text-on-surface outline-none" 
              placeholder="What would you like to master today?" 
              type="text"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-bold text-sm">All</button>
            <button className="px-6 py-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary-container transition-colors font-bold text-sm">Development</button>
            <button className="px-6 py-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary-container transition-colors font-bold text-sm">Design</button>
            <button className="px-6 py-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary-container transition-colors font-bold text-sm">Business</button>
            <div className="w-px h-6 bg-outline-variant mx-2 opacity-30"></div>
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high text-on-surface font-bold text-sm">
                Sort: Popularity <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
              </button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
        
      </main>
  
    </>
  );
}
