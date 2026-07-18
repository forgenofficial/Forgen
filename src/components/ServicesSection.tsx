import FadeUp from "./FadeUp";

interface Service { title: string; description: string; icon: React.ReactNode; }

const services: Service[] = [
  { title: "Web Development", description: "Custom web applications built with modern technologies. From responsive websites to complex web platforms, we deliver scalable solutions that perform.", icon: (<svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>) },
  { title: "Mobile App Development", description: "Native and cross-platform mobile applications for iOS and Android. We create intuitive, high-performance apps that users love.", icon: (<svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>) },
  { title: "UI/UX Design", description: "Beautiful, user-centered designs that combine aesthetics with functionality. We create interfaces that engage users and drive conversions.", icon: (<svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2" /><path d="M12 2a10 10 0 0 1 0 20A10 10 0 0 1 12 2" /><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" /></svg>) },
  { title: "E-Commerce Solutions", description: "Complete e-commerce platforms that drive sales. From product catalogs to payment integration, we build online stores that convert.", icon: (<svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>) },
  { title: "Digital Marketing", description: "Data-driven marketing strategies that grow your business. We help you reach the right audience and maximize your ROI.", icon: (<svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>) },
  { title: "Maintenance & Support", description: "Ongoing support and maintenance to keep your digital assets running smoothly. We ensure your systems stay updated and secure.", icon: (<svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" /><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>) },
];

export default function ServicesSection() {
  return (
    <section id="our-services" className="w-full py-16 md:py-24 border-t border-zinc-100 scroll-mt-24 bg-[#f8f8f5]">
      <div className="w-full max-w-[1360px] mx-auto px-6 md:px-16 flex flex-col gap-10 md:gap-14">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[0.82rem] font-bold text-zinc-500 tracking-wider uppercase">
                <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="19" r="2.5" /><circle cx="19" cy="19" r="2.5" />
                  <line x1="12" y1="7.5" x2="6.5" y2="16.5" /><line x1="12" y1="7.5" x2="17.5" y2="16.5" /><line x1="7.5" y1="19" x2="16.5" y2="19" />
                </svg>
                What We Do
              </div>
              <h2 className="text-[2.2rem] md:text-[3rem] font-extrabold text-black tracking-tight leading-none">Our Services</h2>
            </div>
            <p className="text-[0.95rem] font-medium text-zinc-500 leading-[1.7] tracking-tight max-w-sm md:text-right">
              End-to-end software solutions — from idea to deployment and beyond.
            </p>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, i) => (
            <FadeUp key={service.title} delay={i * 0.05} className="w-full flex">
              <div className="group flex flex-col gap-5 rounded-[20px] p-7 md:p-8 border border-zinc-200/50 bg-white hover:-translate-y-1.5 hover:shadow-lg hover:shadow-black/[0.04] transition-all duration-300 cursor-default w-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-black bg-zinc-50 border border-zinc-200/60 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
                  {service.icon}
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[1.05rem] font-bold text-black tracking-tight">{service.title}</h3>
                  <p className="text-[0.88rem] font-medium text-zinc-500 leading-[1.75] tracking-tight">{service.description}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
