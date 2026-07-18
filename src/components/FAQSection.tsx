"use client";
import Image from "next/image";
import { useState } from "react";
import FadeUp from "./FadeUp";

interface FAQ { question: string; answer: string; }

const faqs: FAQ[] = [
  { question: "What kind of software does Forgen build?", answer: "Forgen builds a wide range of software products — web applications, mobile apps (iOS & Android), SaaS platforms, admin dashboards, e-commerce solutions, and custom enterprise software tailored to your business needs." },
  { question: "Do you work with startups or only established companies?", answer: "We work with everyone — from early-stage startups building their first MVP to established companies looking to scale or modernize their tech stack. Our solutions are scoped to fit your stage and budget." },
  { question: "How do you estimate the cost of a project?", answer: "Project cost depends on the scope, complexity, and timeline. After an initial consultation where we understand your requirements, we provide a detailed proposal with a clear breakdown of deliverables and pricing." },
  { question: "What technologies do you use?", answer: "We work with modern tech stacks including React, Next.js, Node.js, Python, React Native, Flutter, PostgreSQL, MongoDB, and cloud platforms like AWS and Google Cloud — choosing the right tools based on your project's needs." },
  { question: "How long does it take to build a software product?", answer: "Timelines vary by project. A simple landing page or MVP can take 2–4 weeks. A full-featured web or mobile application typically takes 2–5 months. We always agree on a clear timeline before development begins." },
  { question: "Do you provide support after the project is delivered?", answer: "Yes. Every project includes a support period post-launch. We also offer ongoing maintenance and enhancement packages so your software stays up-to-date, secure, and performant as your business grows." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-zinc-100 scroll-mt-24" id="faq">
      <div className="w-full max-w-[1360px] mx-auto px-6 md:px-16 flex flex-col gap-10 md:gap-12">
        <FadeUp>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[0.82rem] font-bold text-zinc-500 tracking-wider uppercase">
              <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="19" r="2.5" /><circle cx="19" cy="19" r="2.5" />
                <line x1="12" y1="7.5" x2="6.5" y2="16.5" /><line x1="12" y1="7.5" x2="17.5" y2="16.5" /><line x1="7.5" y1="19" x2="16.5" y2="19" />
              </svg>
              FAQ&apos;s
            </div>
            <h2 className="text-[2.2rem] md:text-[3rem] font-extrabold text-black tracking-tight leading-none">Frequently Asked Questions</h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 lg:gap-16 items-start">
          <FadeUp delay={0.1} className="w-full">
            <div className="relative w-full aspect-[3/4] rounded-[24px] overflow-hidden bg-zinc-100 shadow-md group/img">
              <Image src="/images/about_primary.png" alt="Forgen team member working" fill sizes="(max-width: 1024px) 100vw, 420px" className="object-cover transition-transform duration-[1200ms] ease-out group-hover/img:scale-[1.025]" />
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="w-full">
            <div className="flex flex-col divide-y divide-zinc-100">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={i} className="py-5">
                    <button onClick={() => setOpenIndex(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 text-left group" aria-expanded={isOpen}>
                      <span className={`text-[1rem] md:text-[1.05rem] font-semibold tracking-tight transition-colors duration-200 ${isOpen ? "text-black" : "text-zinc-700 group-hover:text-black"}`}>
                        {faq.question}
                      </span>
                      <span className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "border-black bg-black text-white" : "border-zinc-300 text-zinc-400 group-hover:border-zinc-500 group-hover:text-zinc-600"}`}>
                        {isOpen
                          ? <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /></svg>
                          : <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                        }
                      </span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? "max-h-60 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                      <p className="text-[0.92rem] font-medium text-zinc-500 leading-[1.7] tracking-tight pr-10">{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
