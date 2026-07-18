import Link from "next/link";
import FadeUp from "./FadeUp";

interface Award { year: string; category: string; title: string; org: string; }

const awards: Award[] = [
  { year: "2024", category: "Best Dev Studio", title: "Top Software Development Company", org: "Global Tech Awards" },
  { year: "2023", category: "Client Excellence", title: "Outstanding Software Delivery", org: "Industry Tech Summit" },
  { year: "2023", category: "Web & Mobile", title: "Best App Development Agency", org: "Creative Tech Awards" },
  { year: "2022", category: "Growth & Impact", title: "Fastest Growing Tech Startup", org: "Startup Growth Forum" },
  { year: "2022", category: "Innovation", title: "Most Innovative Software Solution", org: "Tech Innovation Summit" },
];

export default function AwardsSection() {
  return (
    <section className="w-full bg-white border-t border-zinc-100 py-16 md:py-24">
      <div className="w-full max-w-[1360px] mx-auto px-6 md:px-16 flex flex-col gap-12 md:gap-16">
        <FadeUp>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-20 w-full">
            <h2 className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] font-extrabold text-black tracking-tight leading-snug max-w-xl">
              Recognized for building exceptional software products
            </h2>
            <p className="text-[0.95rem] md:text-[1rem] font-medium text-zinc-500 leading-[1.7] tracking-tight max-w-sm lg:pt-2">
              At Forgen, we are proud to have been recognized for our technical excellence, innovative software solutions &amp; outstanding client results.
            </p>
          </div>
        </FadeUp>
        <FadeUp delay={0.1} className="w-full flex flex-col">
          {awards.map((award, i) => (
            <div key={i} className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 border-t border-zinc-100 hover:bg-zinc-50/60 transition-colors duration-300 rounded-xl px-4 -mx-4 cursor-default">
              <div className="flex items-center gap-6 min-w-[180px]">
                <span className="text-[0.82rem] font-bold text-zinc-400 tracking-widest uppercase tabular-nums">{award.year}</span>
                <span className="text-[0.8rem] font-semibold text-zinc-400 bg-zinc-100 group-hover:bg-zinc-200/70 px-3 py-1 rounded-full tracking-wide transition-colors duration-300">{award.category}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-[1.05rem] md:text-[1.15rem] font-bold text-black tracking-tight group-hover:translate-x-1 transition-transform duration-300">{award.title}</h3>
              </div>
              <div className="flex items-center gap-4 min-w-fit">
                <span className="text-[0.88rem] font-medium text-zinc-400 tracking-tight">{award.org}</span>
                <Link href="/awards" className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-300 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4 -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
          <div className="border-t border-zinc-100" />
        </FadeUp>
      </div>
    </section>
  );
}
