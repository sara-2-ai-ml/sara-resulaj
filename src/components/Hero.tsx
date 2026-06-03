"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";

const SplineRobot = dynamic(() => import("@/components/SplineRobot"), { ssr: false });

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".reveal-item", { opacity: 0, y: 40 });

      gsap.to(".reveal-item", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full overflow-x-hidden bg-[#0a0a0a] flex items-center pt-20 pb-8"
    >
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col md:flex-row items-center gap-8 md:gap-6 lg:gap-4 min-h-[calc(100vh-5rem)]">
        {/* Left — text */}
        <div className="flex flex-col justify-center w-full md:w-1/2 lg:w-[48%] py-4 md:py-8">
          <div className="reveal-item w-fit flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/15 bg-transparent mb-6 md:mb-8">
            <span className="text-[#a3a3a3] text-sm font-medium tracking-wide">
              Open to opportunities
            </span>
          </div>

          <h2 className="reveal-item text-[#a3a3a3] text-base md:text-lg font-bold tracking-[0.2em] uppercase mb-4 md:mb-5">
            AI & Machine Learning Engineer
          </h2>

          <h1 className="reveal-item flex flex-col font-black tracking-tighter leading-[0.85] text-[#ffffff] mb-6 md:mb-8 text-[18vw] sm:text-[14vw] md:text-[11vw] lg:text-[9vw] xl:text-[8vw]">
            <span>SARA</span>
            <span>RESULAJ</span>
          </h1>

          <p className="reveal-item text-[#a3a3a3] text-lg md:text-xl lg:text-2xl max-w-xl font-light leading-relaxed mb-8 md:mb-10">
            Building{" "}
            <strong className="font-semibold text-[#ffffff]">AI agents</strong>,{" "}
            <strong className="font-semibold text-[#ffffff]">computer vision systems</strong>, and{" "}
            <strong className="font-semibold text-[#ffffff]">RAG pipelines</strong> — from research to
            production.
          </p>

          <div className="reveal-item flex flex-wrap gap-3 md:gap-4">
            {[
              "YOLO / RF-DETR",
              "LangChain / RAG",
              "Multi-Agent AI",
              "PyTorch / TensorFlow",
            ].map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-transparent backdrop-blur-sm"
              >
                <span className="text-[#a3a3a3] text-sm md:text-base font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — 3D robot */}
        <div className="reveal-item relative flex w-full md:w-1/2 lg:w-[52%] shrink-0 items-center justify-center">
          <div className="relative w-full h-[52vh] sm:h-[58vh] md:h-[62vh] lg:h-[68vh] bg-transparent">
            <SplineRobot className="absolute inset-0 origin-center scale-110 md:scale-125 lg:scale-[1.35] translate-y-10 sm:translate-y-12 md:translate-y-14 lg:translate-y-16" />
          </div>
        </div>
      </div>
    </section>
  );
}
