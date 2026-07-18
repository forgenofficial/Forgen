interface Logo {
  name: string;
  icon: React.ReactNode;
}

const row1Logos: Logo[] = [
  {
    name: "Nietzsche",
    icon: (
      <svg className="w-6 h-6 text-zinc-800" fill="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="14" width="3" height="6" rx="0.5" />
        <rect x="7" y="10" width="3" height="10" rx="0.5" />
        <rect x="12" y="6" width="3" height="14" rx="0.5" />
        <rect x="17" y="2" width="3" height="18" rx="0.5" />
      </svg>
    ),
  },
  {
    name: "Epicurious",
    icon: (
      <svg className="w-6 h-6 text-zinc-800" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="8" cy="12" r="4" opacity="0.6" />
        <circle cx="16" cy="12" r="4" />
        <path d="M12 8a4 4 0 0 1 4 4c0 .8-.2 1.5-.6 2H8.6c-.4-.5-.6-1.2-.6-2 0-2.2 1.8-4 4-4z" />
      </svg>
    ),
  },
  {
    name: "CloudWatch",
    icon: (
      <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    name: "Aether",
    icon: (
      <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 12h20L12 2zM12 22L2 12h20L12 22z" />
      </svg>
    ),
  },
];

const row2Logos: Logo[] = [
  {
    name: "alBank",
    icon: (
      <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    name: "logoipsum",
    icon: (
      <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Capsule",
    icon: (
      <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="10" width="18" height="4" rx="2" transform="rotate(-45 12 12)" />
      </svg>
    ),
  },
  {
    name: "Lightbox",
    icon: (
      <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4v16M4 12h16" />
        <path d="m7.75 7.75 8.5 8.5M7.75 16.25l8.5-8.5" />
      </svg>
    ),
  },
];

function LogoRow({ logos, direction }: { logos: Logo[]; direction: "left" | "right" }) {
  const animClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="flex w-full overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <div className={`flex gap-6 py-2 min-w-max ${animClass} hover:[animation-play-state:paused] group`}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex gap-6 pr-6">
            {logos.map((logo, idx) => (
              <div
                key={`${direction}-${copy}-${idx}`}
                className="w-[200px] h-[75px] bg-zinc-50 border border-zinc-200/40 rounded-2xl flex items-center justify-center gap-3 px-6 shadow-sm hover:border-zinc-300 hover:bg-zinc-100/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <div className="flex-shrink-0">{logo.icon}</div>
                <span className="text-[0.95rem] font-bold text-zinc-800 tracking-tight">{logo.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="w-full bg-white py-20 md:py-24 border-t border-zinc-100 flex flex-col gap-12 overflow-hidden">
      <LogoRow logos={row1Logos} direction="left" />
      <LogoRow logos={row2Logos} direction="right" />
    </section>
  );
}
