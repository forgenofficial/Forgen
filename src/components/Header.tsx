"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "HOME", href: "#home", id: "home" },
  { name: "ABOUT", href: "#studio", id: "studio" },
  { name: "VISION", href: "#vision", id: "vision" },
  { name: "SERVICES", href: "#our-services", id: "our-services" },
  { name: "PACKAGES", href: "#services", id: "services" },
  { name: "FAQ", href: "#faq", id: "faq" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function getHref(hash: string) {
    return isHome ? hash : `/${hash}`;
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const observers: IntersectionObserver[] = [];
    navLinks.map((l) => l.id).forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`w-full h-[80px] flex items-center z-50 sticky top-0 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-black/[0.06] shadow-sm shadow-black/[0.04]" : "bg-transparent border-b border-black/[0.03]"
      }`}>
        <div className="w-full max-w-[1360px] mx-auto px-6 md:px-16 flex justify-between items-center">
          <Link href="/" className="text-[1.6rem] font-extrabold tracking-tight text-black hover:opacity-75 transition-opacity">
            Forgen
          </Link>

          <nav className="hidden md:flex gap-9" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = isHome && activeSection === link.id;
              return (
                <Link key={link.name} href={getHref(link.href)}
                  className={`text-[0.78rem] font-semibold tracking-[0.12em] relative py-2 transition-colors duration-300 group ${isActive ? "text-black" : "text-zinc-500 hover:text-black"}`}>
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300 ease-out ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:flex items-center gap-3 py-2.5 pr-2.5 pl-5 border-[1.5px] border-black rounded-full text-[0.85rem] font-semibold tracking-wide text-black bg-transparent overflow-hidden relative group transition-colors duration-300 hover:text-white">
              <span className="absolute inset-0 bg-black translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out -z-10" />
              <span className="relative z-10">Let&apos;s talk</span>
              <span className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:rotate-45 relative z-10">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>

            <button className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-lg hover:bg-zinc-100 transition-colors duration-200"
              onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={menuOpen}>
              <span className={`block w-5 h-[2px] bg-black rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-[2px] bg-black rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-5 h-[2px] bg-black rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`md:hidden fixed inset-0 z-[60] transition-all duration-300 ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setMenuOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-[75vw] max-w-[320px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between px-6 h-[80px] border-b border-zinc-100">
            <span className="text-[1.3rem] font-extrabold tracking-tight text-black">Forgen</span>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-zinc-100 transition-colors" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col px-6 py-6 gap-1">
            {navLinks.map((link) => {
              const isActive = isHome && activeSection === link.id;
              return (
                <Link key={link.name} href={getHref(link.href)} onClick={() => setMenuOpen(false)}
                  className={`text-[0.9rem] font-semibold tracking-[0.1em] py-3 px-4 rounded-xl transition-all duration-200 ${isActive ? "text-black bg-zinc-100" : "text-zinc-500 hover:text-black hover:bg-zinc-50"}`}>
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto px-6 pb-10">
            <Link href="/contact" onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-3 w-full py-3.5 bg-black text-white rounded-full text-[0.9rem] font-semibold tracking-wide hover:bg-zinc-800 transition-colors duration-300">
              Let&apos;s talk
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
