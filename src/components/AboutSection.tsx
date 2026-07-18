import Image from "next/image";
import FadeUp from "./FadeUp";

const stats = [
  { value: "30+", label: "Software products built and shipped for clients globally." },
  { value: "5+", label: "Years of experience delivering scalable tech solutions." },
  { value: "98%", label: "Client satisfaction rate across all completed projects." },
];

export default function AboutSection() {
  return (
    <section id="studio" className="w-full max-w-[1360px] mx-auto px-6 md:px-16 py-16 md:py-24 border-t border-zinc-100 flex flex-col gap-10 md:gap-12 scroll-mt-24">
      <FadeUp>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[0.82rem] font-bold text-zinc-500 tracking-wider uppercase">
            <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="19" r="2.5" /><circle cx="19" cy="19" r="2.5" />
              <line x1="12" y1="7.5" x2="6.5" y2="16.5" /><line x1="12" y1="7.5" x2="17.5" y2="16.5" /><line x1="7.5" y1="19" x2="16.5" y2="19" />
            </svg>
            Our Story
          </div>
          <h2 className="text-[2.2rem] md:text-[3rem] font-extrabold text-black tracking-tight leading-none">About us</h2>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.55fr] gap-12 lg:gap-20 items-start">
        <FadeUp delay={0.1} className="flex flex-col gap-6 w-full">
          <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-zinc-50 shadow-md group/img">
            <Image src="/images/about_primary.png" alt="Forgen team member" fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover transition-transform duration-[1200ms] ease-out group-hover/img:scale-[1.025]" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[1.1rem] font-bold text-black tracking-tight">About Forgen</h3>
            <div className="h-[1px] w-full bg-zinc-200" />
            <p className="text-[0.95rem] font-medium text-zinc-500 leading-relaxed">A dedicated software team turning complex problems into clean, efficient code.</p>
          </div>
        </FadeUp>

        <FadeUp delay={0.2} className="flex flex-col gap-10 md:gap-14 w-full">
          <div className="flex flex-col gap-6">
            <h3 className="text-[1.6rem] md:text-[2.1rem] font-extrabold leading-[1.3] text-black tracking-tight">
              Engineering innovative software solutions that drive real business growth
            </h3>
            <p className="text-[0.95rem] md:text-[1rem] font-medium text-zinc-500 leading-[1.7] tracking-tight">
              At Forgen, we turn your ideas into powerful software. As a forward-thinking software development company, we specialize in building web applications, mobile apps, and custom platforms that help businesses scale. From clean UI/UX design to robust backend architecture, our team is dedicated to delivering technology that works — reliably, efficiently, and beautifully.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden bg-zinc-50 shadow-sm group/img">
              <Image src="/images/about_secondary.png" alt="Forgen team working" fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover transition-transform duration-[1200ms] ease-out group-hover/img:scale-[1.025]" />
            </div>
            <div className="flex flex-col justify-between py-1">
              {stats.map((stat, i) => (
                <div key={stat.value} className={`flex flex-col gap-2 ${i === 0 ? "pb-6 border-b border-zinc-200" : i === stats.length - 1 ? "pt-6" : "py-6 border-b border-zinc-200"}`}>
                  <span className="text-[2.2rem] font-extrabold text-black leading-none tracking-tight">{stat.value}</span>
                  <span className="text-[0.88rem] font-medium text-zinc-500 leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
