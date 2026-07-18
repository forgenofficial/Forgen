import FadeUp from "./FadeUp";

interface Testimonial { title: string; quote: string; name: string; location: string; initials: string; }

const testimonials: Testimonial[] = [
  { title: "Delivered Beyond Expectations!", quote: "\"Working with Forgen was a game-changer for our startup. They built our entire platform from scratch — clean code, great UX, and delivered on time. Highly recommend them to anyone looking for a reliable dev team.\"", name: "Arjun Menon", location: "Kochi, India", initials: "AM" },
  { title: "Exceptional Technical Expertise", quote: "\"Forgen's team truly understood our vision and translated it into a robust, scalable application. Their attention to detail and proactive communication made the entire development process smooth and stress-free.\"", name: "Sarah Mitchell", location: "London, UK", initials: "SM" },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#f8f8f5] py-16 md:py-24 border-t border-zinc-100/50">
      <div className="w-full max-w-[1360px] mx-auto px-6 md:px-16 flex flex-col gap-10 md:gap-12">
        <FadeUp>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[0.82rem] font-bold text-zinc-500 tracking-wider uppercase">
              <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="19" r="2.5" /><circle cx="19" cy="19" r="2.5" />
                <line x1="12" y1="7.5" x2="6.5" y2="16.5" /><line x1="12" y1="7.5" x2="17.5" y2="16.5" /><line x1="7.5" y1="19" x2="16.5" y2="19" />
              </svg>
              Testimonials
            </div>
            <h2 className="text-[2.2rem] md:text-[3rem] font-extrabold text-black tracking-tight leading-none">Customers Review</h2>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.1} className="w-full flex">
              <div className="bg-white rounded-[20px] p-8 md:p-10 border border-zinc-200/50 flex flex-col justify-between gap-8 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 w-full">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[1.1rem] font-bold text-black tracking-tight">{t.title}</h3>
                  <p className="text-[0.92rem] font-medium text-zinc-500 leading-[1.7] tracking-tight">{t.quote}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full flex-shrink-0 bg-zinc-900 flex items-center justify-center">
                    <span className="text-[0.8rem] font-bold text-white tracking-wide">{t.initials}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.95rem] font-bold text-black tracking-tight">{t.name}</span>
                    <span className="text-[0.82rem] font-medium text-zinc-400">{t.location}</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
