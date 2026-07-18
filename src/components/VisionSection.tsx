import FadeUp from "./FadeUp";

interface VisionCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const visionCards: VisionCard[] = [
  {
    title: "Delivering Scalable Software",
    description: "Our vision is to build software that grows with your business — from MVPs to enterprise-grade platforms, we engineer for scale from day one.",
    icon: (
      <svg className="w-8 h-8 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="13" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="16" x2="12" y2="21" />
        <path d="M12 6.5l3.5 2v4l-3.5 2-3.5-2v-4z" /><path d="M12 6.5v8" /><path d="M12 10.5l3.5-2" /><path d="M12 10.5l-3.5-2" />
      </svg>
    ),
  },
  {
    title: "Long-Term Tech Partnerships",
    description: "We don't just ship code — we become your long-term technology partner, supporting your product through every stage of growth and evolution.",
    icon: (
      <svg className="w-8 h-8 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16.5 9.4 12 14c-.8.8-2 .8-2.8 0L6.7 11.5c-.8-.8-.8-2 0-2.8l3.3-3.3c.8-.8 2-.8 2.8 0l3.7 4" />
        <path d="m10.5 7.5 4 4" /><path d="m14 13.5 3 3c.8.8 2 .8 2.8 0l2-2c.8-.8.8-2 0-2.8l-4.3-4.3" />
        <path d="m5 12-3 3c-.8.8-.8 2 0 2.8l2 2c.8.8 2 .8 2.8 0l3.7-3.7" />
      </svg>
    ),
  },
];

export default function VisionSection() {
  return (
    <section className="w-full bg-[#f8f8f5] py-16 md:py-24 border-t border-zinc-100/50" id="vision">
      <div className="w-full max-w-[1360px] mx-auto px-6 md:px-16 flex flex-col gap-10 md:gap-12">
        <FadeUp>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[0.82rem] font-bold text-zinc-500 tracking-wider uppercase">
              <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="19" r="2.5" /><circle cx="19" cy="19" r="2.5" />
                <line x1="12" y1="7.5" x2="6.5" y2="16.5" /><line x1="12" y1="7.5" x2="17.5" y2="16.5" /><line x1="7.5" y1="19" x2="16.5" y2="19" />
              </svg>
              Our Vision
            </div>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] font-extrabold text-black tracking-tight leading-snug max-w-4xl">
              Building the future of software — one product at a time
            </h2>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {visionCards.map((card, i) => (
            <FadeUp key={card.title} delay={i * 0.1} className="w-full">
              <div className="bg-white rounded-[20px] p-8 md:p-10 border border-zinc-200/50 flex flex-col md:flex-row items-start gap-6 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-black/[0.02] transition-all duration-300 group h-full">
                <div className="flex-shrink-0 w-14 h-14 bg-zinc-50 rounded-xl flex items-center justify-center text-black group-hover:scale-105 transition-transform duration-300">{card.icon}</div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[1.2rem] font-bold text-black tracking-tight">{card.title}</h3>
                  <p className="text-[0.95rem] font-medium text-zinc-500 leading-relaxed tracking-tight">{card.description}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
