"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP Initial Reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(".reveal-item", { opacity: 0, y: 40 });

      // Reveal elements sequentially
      gsap.to(".reveal-item", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);



  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] flex items-center pt-24 pb-12">



      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full">

        {/* Availability Badge */}
        <div className="reveal-item w-fit flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-transparent mb-8 md:mb-12">
          <span className="text-[#a3a3a3] text-xs font-medium tracking-wide">Open to opportunities</span>
        </div>

        {/* Subtitle */}
        <h2 className="reveal-item text-[#a3a3a3] text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 md:mb-6">
          AI & Machine Learning Engineer
        </h2>

        {/* Massive Stacked Title */}
        <h1 className="reveal-item flex flex-col font-black tracking-tighter leading-[0.85] text-[#ffffff] mb-8 md:mb-10 text-[18vw] md:text-[12vw] lg:text-[10vw]">
          <span>SARA</span>
          <span>RESULAJ</span>
        </h1>

        {/* Description */}
        <p className="reveal-item text-[#a3a3a3] text-lg md:text-xl lg:text-2xl max-w-2xl font-light leading-relaxed mb-10 md:mb-12">
          Building <strong className="font-semibold text-[#ffffff]">AI agents</strong>, <strong className="font-semibold text-[#ffffff]">computer vision systems</strong>, and <strong className="font-semibold text-[#ffffff]">RAG pipelines</strong> — from research to production.
        </p>

        {/* Skill Badges Row */}
        <div className="reveal-item flex flex-wrap gap-3 md:gap-4">
          {[
            "YOLOv11 / Segmentation",
            "LangChain / RAG",
            "MLOps / Docker",
            "PyTorch"
          ].map((skill, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-transparent backdrop-blur-sm">
              <span className="text-[#a3a3a3] text-xs md:text-sm font-medium">{skill}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
