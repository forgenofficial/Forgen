"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FadeUp from "./FadeUp";

function AnimatedHeading({ text, startDelay = 0 }: { text: string; startDelay?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="word-reveal">
          <span style={{ animationDelay: `${startDelay + i * 0.08}s` }}>{word}</span>
          {i < words.length - 1 && <>&nbsp;</>}
        </span>
      ))}
    </>
  );
}

export default function HeroSection() {
  const line1Words = "We Build Software That".split(" ").length;
  return (
    <main id="home" className="w-full max-w-[1360px] mx-auto px-6 md:px-16 pt-10 md:pt-16 pb-16 md:pb-20 flex flex-col scroll-mt-24">
      <div className="flex flex-col gap-10 mb-14 md:mb-16">
        <h1 className="text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[3.8rem] font-extrabold leading-[1.25] tracking-tight text-black">
          <AnimatedHeading text="We Build Software That" startDelay={0.1} />
          <br />
          <AnimatedHeading text="Powers Your Business" startDelay={0.1 + line1Words * 0.08} />
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12 w-full">
          <FadeUp delay={0.65}>
            <a href="#services" className="flex items-center gap-4 py-2 pr-2 pl-6 bg-black rounded-full text-white text-[0.9rem] font-semibold tracking-wide shadow-md shadow-black/5 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10 transition-all duration-300 group">
              Explore Our Services
              <span className="w-[38px] h-[38px] bg-[#1e3a8a] rounded-full flex items-center justify-center text-white group-hover:bg-[#1e40af] group-hover:scale-105 transition-all duration-300">
                <svg className="w-4 h-4 group-hover:translate-x-[3px] transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </a>
          </FadeUp>

          <FadeUp delay={0.8} className="flex flex-col items-start md:items-end text-left md:text-right gap-4">
            <p className="text-[0.95rem] font-medium leading-[1.55] text-zinc-500 tracking-tight">
              Skilled developers building reliable,<br className="hidden md:inline" />scalable software for real-world needs.
            </p>
          </FadeUp>
        </div>
      </div>

      <FadeUp delay={0.2}>
        <div className="w-full rounded-[20px] md:rounded-[28px] overflow-hidden aspect-[4/3] md:aspect-[16/9.5] relative bg-zinc-50 shadow-xl shadow-black/[0.04] group/img">
          <Image src="/images/office_collaboration.png" alt="Forgen team collaborating" fill sizes="(max-width: 768px) 100vw, 1360px" priority className="object-cover transition-transform duration-[1200ms] ease-out group-hover/img:scale-[1.025]" />
          <div className="absolute inset-0 shadow-inner rounded-[20px] md:rounded-[28px] pointer-events-none" />
        </div>
      </FadeUp>
    </main>
  );
}
