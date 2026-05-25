"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);
  const blob4Ref = useRef<HTMLDivElement>(null);
  const blob5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [textRef.current, pRef.current],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          },
        }
      );

      gsap.to(blob1Ref.current, { y: -30, x: 20, rotation: 5, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(blob2Ref.current, { y: -40, x: -20, rotation: -10, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });
      gsap.to(blob3Ref.current, { y: -20, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5 });
      gsap.to(blob4Ref.current, { y: 25, x: 15, rotation: -8, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(blob5Ref.current, { y: 35, x: -20, rotation: 12, duration: 4.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.8 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="relative pt-24 pb-40 px-6 md:px-12 flex flex-col items-center bg-[#ffffff] overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

        <div className="w-full md:w-[40%] flex justify-start relative">
          <div className="relative w-full aspect-[3/4] md:h-[600px] md:w-auto overflow-hidden rounded-[4px] group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent z-10 pointer-events-none"></div>
            <Image
              src="/hero-bg.png"
              alt="Sara Resulaj"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105 filter grayscale-[15%] contrast-[1.05]"
            />
          </div>
        </div>

        <div className="w-full md:w-[60%] flex flex-col items-start text-left">
          <div ref={textRef} className="text-[36px] font-bold leading-[1.3] tracking-tight text-[#0a0a0a]">
            Building intelligent <span className="border-b-2 border-[#0a0a0a]">AI agents</span> and robust <span className="border-b-2 border-[#0a0a0a]">ML systems</span>
          </div>

          <p ref={pRef} className="mt-8 text-[#404040] text-lg md:text-xl font-light leading-[1.6] max-w-xl text-left relative z-10">
            I&apos;m Sara Resulaj, an <strong className="font-medium text-[#0a0a0a]">AI & ML Engineer</strong> with hands-on experience in deep learning, computer vision, and generative AI. Currently ML Engineer at <strong className="font-medium text-[#0a0a0a]">Airwai Inc</strong>, building AI-powered road infrastructure assessment using <strong className="font-medium text-[#0a0a0a]">YOLO11/26 and RF-DETR</strong> (transformer-based detection on DINOv2 backbone). I build autonomous AI agents, <strong className="font-medium text-[#0a0a0a]">RAG pipelines</strong>, and multi-agent systems — turning complex AI research into products that actually work.
          </p>
        </div>
      </div>
    </section>
  );
}