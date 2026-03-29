"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export default function JoinPage() {

  useEffect(() => {
    const loadEmbed = () => {
      if (typeof window !== "undefined" && window.Tally) {
        window.Tally.loadEmbeds();
      } else {
        setTimeout(loadEmbed, 100);
      }
    };

    loadEmbed();
  }, []);

  return (
    <div className="min-h-[calc(100vh-80px)] w-full flex flex-col items-center justify-start pt-12 pb-24">
      
      <div className="w-full max-w-4xl px-4 md:px-8">

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-slate-900 dark:text-slate-100 font-serif">
          Join ECA
        </h1>

        <div className="bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-3xl p-4 md:p-8 shadow-xl border border-gray-200 dark:border-white/10">

          <iframe
            data-tally-src="https://tally.so/embed/lbL1Bp?hideTitle=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="1538"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="ECA Club Membership Registration 2026-2027"
            className="w-full rounded-xl"
          />

        </div>

      </div>

    </div>
  );
}