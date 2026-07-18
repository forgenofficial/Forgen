import Link from "next/link";
import FadeUp from "./FadeUp";

interface PricingPlan { name: string; description: string; featured: boolean; includesLabel: string; features: string[]; }

const plans: PricingPlan[] = [
  { name: "Starter", description: "Perfect for startups and small businesses launching their first digital product.", featured: false, includesLabel: "Starter includes:", features: ["Custom Landing Page", "Responsive Web Design", "Basic CMS Integration", "Performance Optimization", "1 Month Free Support", "Source Code Delivery"] },
  { name: "Growth", description: "Ideal for growing businesses that need a full-featured web or mobile application.", featured: true, includesLabel: "Growth includes:", features: ["Full-Stack Web Application", "UI/UX Design Included", "API Development & Integration", "Admin Dashboard", "3 Months Free Support", "Deployment & Hosting Setup"] },
  { name: "Enterprise", description: "Designed for companies that need scalable, custom-built software solutions.", featured: false, includesLabel: "Enterprise includes:", features: ["Custom Software Architecture", "Mobile App (iOS & Android)", "Third-party Integrations", "Dedicated Dev Team", "12 Months Support & Maintenance", "Priority Communication"] },
];

export default function PricingSection() {
  return (
    <section id="services" className="w-full bg-[#f8f8f5] py-16 md:py-24 border-t border-zinc-100/50 scroll-mt-24">
      <div className="w-full max-w-[1360px] mx-auto px-6 md:px-16 flex flex-col gap-10 md:gap-12">
        <FadeUp>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[0.82rem] font-bold text-zinc-500 tracking-wider uppercase">
              <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="19" r="2.5" /><circle cx="19" cy="19" r="2.5" />
                <line x1="12" y1="7.5" x2="6.5" y2="16.5" /><line x1="12" y1="7.5" x2="17.5" y2="16.5" /><line x1="7.5" y1="19" x2="16.5" y2="19" />
              </svg>
              Packages
            </div>
            <h2 className="text-[2.2rem] md:text-[3rem] font-extrabold text-black tracking-tight leading-none">Service Packages</h2>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {plans.map((plan, i) => (
            <FadeUp key={plan.name} delay={i * 0.1} className="w-full flex">
              <div className={`flex flex-col rounded-[24px] p-8 md:p-9 gap-6 w-full ${plan.featured ? "bg-[#1e3a8a]" : "bg-white border border-zinc-200/60"}`}>
                <div className="flex flex-col gap-2">
                  <h3 className={`text-[1.25rem] font-extrabold tracking-tight ${plan.featured ? "text-white" : "text-black"}`}>{plan.name}</h3>
                  <p className={`text-[0.9rem] font-medium leading-relaxed tracking-tight ${plan.featured ? "text-white/70" : "text-zinc-500"}`}>{plan.description}</p>
                </div>
                <div className={`flex flex-col gap-4 flex-1 border-t pt-6 ${plan.featured ? "border-white/10" : "border-zinc-100"}`}>
                  <span className={`text-[0.88rem] font-bold tracking-tight ${plan.featured ? "text-white" : "text-zinc-700"}`}>{plan.includesLabel}</span>
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.featured ? "bg-white/10" : "bg-zinc-100"}`}>
                          <svg className={`w-3 h-3 ${plan.featured ? "text-white" : "text-zinc-500"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className={`text-[0.9rem] font-medium tracking-tight ${plan.featured ? "text-white" : "text-zinc-600"}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact" className={`mt-2 flex items-center justify-center gap-3 py-3.5 rounded-full text-[0.9rem] font-semibold tracking-wide transition-all duration-300 group ${plan.featured ? "bg-white text-[#1e3a8a] hover:bg-zinc-100" : "bg-transparent border-[1.5px] border-black text-black hover:bg-black hover:text-white"}`}>
                  Get Started
                  <svg className="w-4 h-4 group-hover:translate-x-[3px] transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
