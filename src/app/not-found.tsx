import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "This page could not be found.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex items-center gap-5">
        <span className="text-white text-[1rem] font-semibold tracking-tight">
          404
        </span>
        <div className="w-[1px] h-7 bg-white/25" />
        <span className="text-white/60 text-[0.9rem] font-normal tracking-tight">
          This page could not be found.
        </span>
      </div>
    </div>
  );
}
